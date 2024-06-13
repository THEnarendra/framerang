import React, { useContext, useEffect, useState } from 'react';
import '../MainCss/checkout.css'
import { Col, Row } from 'react-bootstrap';
import { CartContext } from '../CartContext';
import { toast, Toaster } from "react-hot-toast";
import Loader from './Loader';

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

    setFooter(false);

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formErrors = validateForm(input);
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        setLoading(true);
        try {
            setErrors('')
            const response = await fetch(`https://framerang-backend-git-main-thenarendras-projects.vercel.app/api/v1/checkout`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {
                        "name": `${input.firstName} ${input.lastName}`,
                        "email": input.email,
                        "contactNumber": input.phone,
                        "address": {
                            "street": input.street,
                            "city": input.city,
                            "state": input.state,
                            "postalCode": input.pinCode,
                            "country": input.country
                        },
                        "orderItems": idArray,
                        "totalPrice": getTotal(),
                    }
                )
            });

            const data = await response.json();

            if (response.ok) {
                
                setLoading(false);
                toast.success("Product Ordered Successfully");
            } else {
                setLoading(false);
                toast.error("Something went wrong! Please try again later!");
            }

        } catch (error) {
            setLoading(false);
            toast.error("Something went wrong! Please try again later!");
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
                        <h4>Contact Info</h4>
                        <input onChange={Change} className={`${theme === "darkTheme" ? "text-white" : "text-black"}`} type="number" name="phone" placeholder="Contact Number" />
                        {errors.phone && <span className="error">{errors.phone}</span>}
                        <input onChange={Change} className={`${theme === "darkTheme" ? "text-white" : "text-black"}`} type="email" name="email" placeholder="Email Address" />
                        {errors.email && <span className="error">{errors.email}</span>}
                        <h4 className='mt-3'>Delivery Address</h4>
                        <input onChange={Change} className={`${theme === "darkTheme" ? "text-white" : "text-black"}`} type="text" name="country" placeholder="Country/Region" />
                        {errors.country && <span className="error">{errors.country}</span>}
                        <div className="name-fields">
                            <input onChange={Change} className={`${theme === "darkTheme" ? "text-white" : "text-black"}`} type="text" name="firstName" placeholder="First name" />
                            {errors.firstName && <span className="error">{errors.firstName}</span>}
                            <input onChange={Change} className={`${theme === "darkTheme" ? "text-white" : "text-black"}`} type="text" name="lastName" placeholder="Last name" />
                            {errors.lastName && <span className="error">{errors.lastName}</span>}
                        </div>
                        <input onChange={Change} className={`${theme === "darkTheme" ? "text-white" : "text-black"}`} type="text" name="street" placeholder="Street Name" />
                        {errors.street && <span className="error">{errors.street}</span>}
                        <div className="location-fields">
                            <input onChange={Change} className={`${theme === "darkTheme" ? "text-white" : "text-black"}`} type="text" name="city" placeholder="City" />
                            {errors.city && <span className="error">{errors.city}</span>}
                            <input onChange={Change} className={`ms-1 me-1 ${theme === "darkTheme" ? "text-white" : "text-black"}`} type="text" name="state" placeholder="State" />
                            {errors.state && <span className="error">{errors.state}</span>}
                            <input onChange={Change} className={`${theme === "darkTheme" ? "text-white" : "text-black"}`} type="text" name="pinCode" placeholder="PIN code" />
                            {errors.pinCode && <span className="error">{errors.pinCode}</span>}
                        </div>
                        <input onChange={Change} className={`${theme === "darkTheme" ? "text-white" : "text-black"}`} type="checkbox" name="saveInfo" /> Save this information for next time
                        <h5 className='mt-4'>Shipping method</h5>
                        <p>Enter your shipping address to view available shipping methods.</p>
                        <div className="container mt-4">
                            <div className="" style={{ marginLeft: "-5%" }}>
                                <h4>Payment</h4>
                                <p>All transactions are secure and encrypted.</p>
                                <div style={{ border: "1px solid gray" }}>
                                    <div style={{ borderBottom: "1px solid gray" }} className={`form-check p-2 ${paymentMethod === 'prepaid' ? 'background-radio' : ''}`}>
                                        <input
                                            className="form-check-input ms-1 me-2"
                                            type="radio"
                                            name="paymentMethod"
                                            value="prepaid"
                                            checked={paymentMethod === 'prepaid'}
                                            onChange={(event) => setPaymentMethod(event.target.value)}
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
                                            value="cod"
                                            checked={paymentMethod === 'cod'}
                                            onChange={(event) => setPaymentMethod(event.target.value)}
                                            id="cod"
                                        />
                                        <label className="form-check-label" htmlFor="cod">
                                            Cash on Delivery (COD)
                                        </label>
                                    </div>
                                </div>
                                <h4 className='mt-4'>Billing address</h4>
                                <div className='mb-4 mt-3' style={{ border: "1px solid gray" }}>
                                    <div style={{ borderBottom: "1px solid gray" }} className={`form-check p-2 ${billingAddress === 'same' ? 'background-radio' : ''}`}>
                                        <input
                                            className="form-check-input ms-2 me-2"
                                            type="radio"
                                            name="billingAddress"
                                            value="same"
                                            checked={billingAddress === 'same'}
                                            onChange={(event) => setBillingAddress(event.target.value)}
                                            id="same"
                                        />
                                        <label className="form-check-label" htmlFor="same">
                                            Same as shipping address
                                        </label>
                                    </div>
                                    <div className={`form-check p-2 ${billingAddress === 'different' ? 'background-radio' : ''}`}>
                                        <input
                                            className="form-check-input ms-2 me-2"
                                            type="radio"
                                            name="billingAddress"
                                            value="different"
                                            checked={billingAddress === 'different'}
                                            onChange={(event) => setBillingAddress(event.target.value)}
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
                                                <button type="button" className="btn btn-link p-0">
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
