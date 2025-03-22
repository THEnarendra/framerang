import React, { useContext, useEffect, useState } from 'react';
import '../MainCss/checkout.css';
import { Col, Row } from 'react-bootstrap';
import { CartContext } from '../CartContext';
import { toast, Toaster } from "react-hot-toast";
import Loader from './Loader';
import { load } from "@cashfreepayments/cashfree-js";

const app_url=process.env.REACT_APP_API_URL;

const CheckOut = ({ setFooter, theme }) => {
  const { cart, getTotal } = useContext(CartContext);
  const [errors, setErrors] = useState({});
  const [input, setInputs] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    state: '',
    pinCode: '',
    country: ''
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setFooter(false);
  }, [setFooter]);

  const Change = (e) => {
    setInputs({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const [paymentMethod, setPaymentMethod] = useState('COD');
  const [totalAmount, setTotalAmount] = useState(getTotal());

  const idArray = cart.map(user => ({
    productId: user._id,
    hasVariants: user.hasVariants,
    selectedVariants: user.selectedVariant ? [{
      variantName: user.selectedVariant.name,
      value: user.selectedVariant.value,
      quantity: user.selectedVariant.quantity || 1,
    }] : [],
    quantity: user.quantity,
  }));

  const validateForm = (data) => {
    const errors = {};
    if (!data.firstName?.trim()) {
      errors.firstName = 'First name is required';
    }
    if (!data.lastName?.trim()) {
      errors.lastName = 'Last name is required';
    }
    if (!data.email?.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Email is invalid';
    }
    if (!data.phone?.trim()) {
      errors.phone = 'Phone number is required';
    }
    if (!data.street?.trim()) {
      errors.street = 'Street is required';
    }
    if (!data.city?.trim()) {
      errors.city = 'City is required';
    }
    if (!data.state?.trim()) {
      errors.state = 'State is required';
    }
    if (!data.pinCode?.trim()) {
      errors.pinCode = 'PIN code is required';
    }
    if (!data.country?.trim()) {
      errors.country = 'Country is required';
    }
    return errors;
  };

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
    setTotalAmount(e.target.value === "COD" ? getTotal() + 100 : getTotal());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm(input);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    if (cart.length === 0) {
      toast.error("Your cart is empty. Please add items to proceed.");
      return;
    }
    setLoading(true);
    try {
      setErrors('');
      const response = await fetch(`${app_url}/checkout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          {
            "name": `${input.firstName} ${input.lastName}`,
            "email": input.email,
            "contactNumber": input.phone,
            "shippingAddress": {
              "street": input.street,
              "city": input.city,
              "state": input.state,
              "pincode": input.pinCode,
              "country": input.country
            },
            "orderItems": idArray,
            "totalAmount": paymentMethod === "COD" ? totalAmount + 100 : totalAmount,
            "paymentInfo": {
              "method": paymentMethod,
              "transactionId": null,
              "status": "Pending",
            },
          }
        )
      });

      const data = await response.json();
      if (response.ok) {
        if (paymentMethod === "COD") {
          toast.success("Product Ordered Successfully");
          localStorage.removeItem("cart");
          window.location.href = '/';
        } else {
          // Initiate payment using payment_session_id
          const cashfree = await load({
            mode: "production", 
          });
          const checkoutOptions = {
            paymentSessionId: data.paymentSessionId, 
            redirectTarget: "_self", 
          };
          cashfree.checkout(checkoutOptions);
        }
      } else {
        toast.error(data.error || "Something went wrong! Please try again later!");
      }
    } catch (error) {
      toast.error(error.message || "Something went wrong! Please try again later!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (loading) {
      document.body.style.opacity = '0.5';
      document.body.style.pointerEvents = 'none';
    } else {
      document.body.style.opacity = '1';
      document.body.style.pointerEvents = 'auto';
    }
  }, [loading]);

  return (
    <div className="checkout-page">
      {loading && <div className="overlay"><Loader /></div>}
      <Toaster />
      <Row>
        <Col className='over' sm={12} lg={6}>
          <div className="leftSide">
            <h5>Contact Info</h5>
            <input onChange={Change} className={`${theme === "darkTheme" ? "text-white" : "text-black"}`} type="number" name="phone" placeholder="Contact Number" pattern="[0-9]{10}" maxLength="10" />
            {errors.phone && <span className="error">{errors.phone}</span>}
            <input onChange={Change} className={`${theme === "darkTheme" ? "text-white" : "text-black"}`} type="email" name="email" placeholder="Email Address" />
            {errors.email && <span className="error">{errors.email}</span>}
            <h5 className='mt-3'>Delivery Address</h5>
            <input onChange={Change} className={`${theme === "darkTheme" ? "text-white" : "text-black"}`} type="text" name="country" placeholder="Country/Region" />
            {errors.country && <span className="error">{errors.country}</span>}
            <Row style={{ width: "100%", margin: 0, padding: 0 }}>
              <Col style={{ padding: 1 }} sm={12} md={6}>
                <input onChange={Change} className={`${theme === "darkTheme" ? "text-white" : "text-black"}`} type="text" name="firstName" placeholder="First name" />
                <br />{errors.firstName && <span className="error">{errors.firstName}</span>}
              </Col>
              <Col style={{ padding: 1 }} sm={12} md={6}>
                <input onChange={Change} className={`${theme === "darkTheme" ? "text-white" : "text-black"}`} type="text" name="lastName" placeholder="Last name" />
                <br />{errors.lastName && <span className="error">{errors.lastName}</span>}
              </Col>
            </Row>
            <input onChange={Change} className={`${theme === "darkTheme" ? "text-white" : "text-black"}`} type="text" name="street" placeholder="Street Name" />
            {errors.street && <span className="error">{errors.street}</span>}
            <Row style={{ width: "100%", margin: 0, padding: 0 }}>
              <Col style={{ padding: 1 }} sm={12} md={6}>
                <input onChange={Change} className={`${theme === "darkTheme" ? "text-white" : "text-black"}`} type="text" name="city" placeholder="City" />
                {errors.city && <span className="error">{errors.city}</span>}
              </Col>
              <Col style={{ padding: 1 }} sm={12} md={6}>
                <input onChange={Change} className={`ms-1 me-1 ${theme === "darkTheme" ? "text-white" : "text-black"}`} type="text" name="state" placeholder="State" />
                {errors.state && <span className="error">{errors.state}</span>}
              </Col>
              <Col style={{ padding: 1 }} sm={12} md={6}>
                <input onChange={Change} className={`${theme === "darkTheme" ? "text-white" : "text-black"}`} type="text" name="pinCode" placeholder="PIN code" pattern="[0-9]{6}" maxLength="6" />
                {errors.pinCode && <span className="error">{errors.pinCode}</span>}
              </Col>
            </Row>
            <h5 className='mt-4'>Shipping method</h5>
            <p>Enter your shipping address to view available shipping methods.</p>
            <div className="container mt-4">
              <div className="" style={{ marginLeft: "-5%" }}>
                <h5>Payment</h5>
                <p>All transactions are secure and encrypted.</p>
                <div style={{ border: "1px solid gray" }}>
                  <div style={{ borderBottom: "1px solid gray" }} className={`form-check p-2 ${paymentMethod === 'prepaid' ? 'background-radio' : ''}`}>
                    <input
                      className="form-check-input ms-1 me-2"
                      type="radio"
                      name="paymentMethod"
                      value="Prepaid"
                      checked={paymentMethod === 'Prepaid'}
                      onChange={handlePaymentChange}
                      id="prepaid"
                    />
                    <label className="form-check-label d-flex align-items-center" htmlFor="prepaid">
                      <span>Prepaid Payment (UPI, Cards, Wallets, NetBanking)</span>
                    </label>
                  </div>
                  <div className={`form-check p-2 ${paymentMethod === 'cod' ? 'background-radio' : ''}`}>
                    <input
                      className="form-check-input ms-1 me-2"
                      type="radio"
                      name="paymentMethod"
                      value="COD"
                      onChange={(event) => setPaymentMethod(event.target.value)}
                      id="cod"
                    />
                    <label className="form-check-label" htmlFor="cod">
                      Cash on Delivery (COD)
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col className='over-right' sm={12} lg={6}>
          <div className="rightSide">
            <h2>Your cart</h2>
            <div className="cart-items1">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <img style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }} src={item.productImages[0].url} alt="image" />
                  <div className="item-details">
                    <span>{item.productName}</span>
                    {item?.variant?.filter((data) => data.size === item.Size).map((data) => (
                      <>
                        <span>Size: {data.size}</span>
                        <span>Rs. {data.newPrice}</span>
                      </>
                    ))}
                    <p>Quantity: {item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="container">
              <table style={{ color: theme === "darkTheme" ? "white" : "black" }} className="table">
                <tbody>
                  <tr>
                    <th scope="row">Subtotal</th>
                    <td>₹{getTotal()}</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div className="d-flex justify-content-between align-items-center">
                        <span>Shipping</span>
                      </div>
                    </th>
                    <td>Enter shipping address</td>
                  </tr>
                  <tr>
                    <th scope="row">Total
                      <p>Including ₹30.80 in taxes</p>
                    </th>
                    <td>
                      <strong>₹{getTotal()}</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Col>
        <Col sm={12} lg={6}>
          <button type="submit" style={{ width: "95%" }} onClick={handleSubmit} className="checkout-btn btn mt-3" disabled={loading}>
            {loading ? "Processing..." : "Place Order"}
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default CheckOut;