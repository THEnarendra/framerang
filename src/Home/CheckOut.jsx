import React, { useContext, useState } from 'react';
import '../MainCss/checkout.css'
import { Col, Row } from 'react-bootstrap';
import { CartContext } from '../CartContext';

const CheckOut = ({ setFooter, theme, setTheme }) => {
    const { cart, removeFromCart, incrementQuantity, decrementQuantity, getTotal } = useContext(CartContext);
    const [errors, setErrors] = useState({});

    setFooter(false)
    const [input, setInputs] = useState({});


    const Change = (e) => {
        e.preventDefault();
        setInputs({
          ...input,
          [e.target.name]: e.target.value,
        });
      };



    const [paymentMethod, setPaymentMethod] = useState('prepaid');
    const [billingAddress, setBillingAddress] = useState('same');

   const idArray = cart.map(user => ({
    product: user._id,
    quantity: user.quantity
  }));



    const handleSubmit = async(e) => {
        e.preventDefault();
   
        try {
          const response = await fetch(`https://framerang-backend-git-main-thenarendras-projects.vercel.app/api/v1/checkout`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(
             {   "name":input.firstName + input.lastName,
                "email":input.email,
                "contactNumber":input.phone,
                "address":{
                    "street":input.street,
                    "city":input.city,
                    "state":input.state,
                    "postalCode":input.pinCode,
                    "country":input.country
                },
                "orderItems":idArray,
                // "paymentInfo":{
                    
                // },
                "totalPrice":getTotal(),
              }
            )
          });
    
          const data = await response.json();
        //   setResponseData(data);
        } catch (error) {
          console.error('Error:', error);
        }
    };

    const validateForm = (data) => {
        const errors = {};

        if (!data.username.trim()) {
            errors.username = 'Username is required';
        }

        if (!data.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = 'Email is invalid';
        }

        if (!data.password) {
            errors.password = 'Password is required';
        } else if (data.password.length < 8) {
            errors.password = `Password must be at 
            least 8 characters long`;
        }

        if (data.confirmPassword !== data.password) {
            errors.confirmPassword = 'Passwords do not match';
        }

        return errors;
    };
    console.log(input);

    return (
        <div className="checkout-page">
            <Row>
                <Col className='over' sm={12} lg={6}>
                    <div className="leftSide">
                        <h4>Contact Info</h4>

                        <input onChange={Change} className={`${theme === "darkTheme" ? "text-white" : "text-black"}`} type="number" name="phone" placeholder="Contact Number" />
                        <input onChange={Change} className={`${theme === "darkTheme" ? "text-white" : "text-black"}`} type="email" name="email" placeholder="Email Address" />
                        <h4 className='mt-3'>Delivery Address</h4>
                        <input onChange={Change} className={`${theme === "darkTheme" ? "text-white" : "text-black"}`} type="text" name="country" placeholder="Country/Region"  />
                        <div className="name-fields">
                            <input onChange={Change} className={`${theme === "darkTheme" ? "text-white" : "text-black"}`} type="text" name="firstName" placeholder="First name"  />
                            <input onChange={Change} className={`${theme === "darkTheme" ? "text-white" : "text-black"}`} type="text" name="lastName" placeholder="Last name"  />
                        </div>
                        <input onChange={Change} className={`${theme === "darkTheme" ? "text-white" : "text-black"}`} type="text" name="street" placeholder="Street Name"  />
                        {/* <input onChange={Change} className={`${theme === "darkTheme" ? "text-white" : "text-black"}`} type="text" name="apartment" placeholder="Apartment, suite, etc. (optional)"  /> */}
                        <div className="location-fields">
                            <input onChange={Change} className={`${theme === "darkTheme" ? "text-white" : "text-black"}`} type="text" name="city" placeholder="City"  />
                            <input onChange={Change} className={`ms-1 me-1 ${theme === "darkTheme" ? "text-white" : "text-black"}`} type="text" name="state" placeholder="State"  />
                            <input onChange={Change} className={`${theme === "darkTheme" ? "text-white" : "text-black"}`} type="text" name="pinCode" placeholder="PIN code"  />
                        </div>
                        <input onChange={Change} className={`${theme === "darkTheme" ? "text-white" : "text-black"}`} type="checkbox" name="saveInfo" /> Save this information for next time
                        <h5 className='mt-4'>Shipping method</h5>
                        <p>Enter your shipping address to view available shipping methods.</p>

                        <div className="container mt-4">
                            <div className="" style={{ marginLeft: "-5%" }}>
                                <h4>Payment</h4>
                                <p>All transactions are secure and encrypted.</p>

                                <div style={{ border: "1px solid gray" }}>
                                    <div style={{ borderBottom: "1px solid gray" }} className={`form-check  p-2 ${paymentMethod === 'prepaid' ? 'background-radio' : ''}`}>
                                        <input 
                                            className="form-check-input ms-1 me-2"
                                            type="radio"
                                            name="paymentMethod"
                                            value="prepaid"
                                            checked={paymentMethod === 'prepaid'}
                                            onChange={(event)=>(Change, setPaymentMethod(event.target.value))}
                                            id="prepaid"
                                        />
                                        <label className="form-check-label d-flex align-items-center " htmlFor="prepaid">
                                            <span>prepaid Payment (UPI, Cards, Wallets, NetBanking)</span>
                                        </label>
                                    </div>
                                    <div className={`form-check p-2 ${paymentMethod === 'cod' ? 'background-radio' : ''}`}>
                                        <input
                                            className="form-check-input ms-1 me-2"
                                            type="radio"
                                            name="paymentMethod"
                                            value="cod"
                                            checked={paymentMethod === 'cod'}
                                            onChange={(event)=>(Change,setPaymentMethod(event.target.value))}
                                            id="cod"
                                        />
                                        <label className="form-check-label" htmlFor="cod">
                                            Cash on Delivery (COD)
                                        </label>
                                    </div>

                                </div>


                                <h4 className='mt-4'>Billing address</h4>
                                <div className='mb-4 mt-3' style={{ border: "1px solid gray" }}>

                                    <div style={{ borderBottom: "1px solid gray" }} className={`form-check  p-2 ${billingAddress === 'same' ? 'background-radio' : ''}`}>
                                        <input
                                            className="form-check-input ms-2 me-2"
                                            type="radio"
                                            name="billingAddress"
                                            value="same"
                                            checked={billingAddress === 'same'}
                                            onChange={(event)=>(Change,setBillingAddress(event.target.value))}
                                            id="same"
                                        />
                                        <label className="form-check-label" htmlFor="same">
                                            Same as shipping address
                                        </label>
                                    </div>

                                    <div className={`form-check  p-2 ${billingAddress === 'different' ? 'background-radio' : ''}`}>
                                        <input
                                            className="form-check-input ms-2 me-2"
                                            type="radio"
                                            name="billingAddress"
                                            value="different"
                                            checked={billingAddress === 'different'}
                                            onChange={(event)=>(Change,setBillingAddress(event.target.value))}
                                            id="different"
                                        />
                                        <label className="form-check-label" htmlFor="different">
                                            Use a different billing address
                                        </label>
                                    </div>
                                </div>

                                <button onClick={handleSubmit} className="btn btn-primary w-100">Pay now</button>
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
                                    <img src={item.productImage.url} alt="" />
                                    <div className="item-details">
                                        <span>{item.productName}</span>
                                        <span>Rs. {item.newPrice}</span>
                                        <p>Quantity: {item.quantity}</p>
                                    </div>
                                </div>
                            ))}
                        </div>



                        <div className="container">
                            <table style={{ color: theme === "darkTheme" ? "white" : "black" }} className="table ">

                                <tbody>
                                    <tr>
                                        <th scope="row">Subtotal</th>
                                        <td>₹{getTotal()}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span>Shipping</span>
                                                <button type="button" className="btn btn-link p-0" >

                                                </button>
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
            </Row>


        </div>
    );
};

export default CheckOut;