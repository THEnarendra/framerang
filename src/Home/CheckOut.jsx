import React, { useState } from 'react';
import { ap1 } from '../images/anime-posters/animeposters';
import '../MainCss/checkout.css'
import { Col, Row } from 'react-bootstrap';

const CheckOut = ({setFooter,theme, setTheme }) => {
    setFooter(false)
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('')
    const [delivery, setDelivery] = useState({
        country: 'India', firstName: '', lastName: '', address: '', apartment: '', city: '', state: 'Rajasthan', pinCode: ''
    });
    const [promoCode, setPromoCode] = useState('');
    const [discount, setDiscount] = useState(0);

    const cart = [
        { id: 1, name: 'Anime Frames Combo Goku, Sasuke (3pcs:- 13*9inch)', price: 399, quantity: 1 },
        { id: 2, name: 'Satoru Gojo Frame (13*9 inch)', price: 149, quantity: 1 },
        { id: 3, name: 'Goku DragonBall z Frame (13*9inch)', price: 149, quantity: 1 },
        { id: 4, name: 'Goku DragonBall z Frame (13*9inch)', price: 149, quantity: 1 },
        { id: 5, name: 'Goku DragonBall z Frame (13*9inch)', price: 149, quantity: 1 },
        { id: 6, name: 'Goku DragonBall z Frame (13*9inch)', price: 149, quantity: 1 },
   
    ];

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handleContactChange = (e) => {
        setContact(e.target.value);
    };
    console.log(contact)

    const handleDeliveryChange = (e) => {
        const { name, value } = e.target;
        setDelivery(prevState => ({ ...prevState, [name]: value }));
    };

    const getTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0) - discount;
    };

    const applyPromoCode = () => {
        if (promoCode === 'DISCOUNT10') {
            setDiscount(100); // example discount
        } else {
            alert('Invalid promo code');
        }
    };

    return (
        <div className="checkout-page">
            <Row>
<Col className='over'  sm={12} lg={6}>
            <div className="leftSide">
                <h4>Contact Info</h4>
                <input type="text" placeholder="Email Address" value />
                <input type="email" name="emailId" placeholder="Contact Info" value={email} onChange={handleEmailChange} />
                <h4 className='mt-3'>Delivery Address</h4>
                <input type="text" name="country" placeholder="Country/Region" value={delivery.country} readOnly />
                <div className="name-fields">
                    <input type="text" name="firstName" placeholder="First name" value={delivery.firstName} onChange={handleDeliveryChange} />
                    <input type="text" name="lastName" placeholder="Last name" value={delivery.lastName} onChange={handleDeliveryChange} />
                </div>
                <input type="text" name="address" placeholder="Address" value={delivery.address} onChange={handleDeliveryChange} />
                <input type="text" name="apartment" placeholder="Apartment, suite, etc. (optional)" value={delivery.apartment} onChange={handleDeliveryChange} />
                <div className="location-fields">
                    <input type="text" name="city" placeholder="City" value={delivery.city} onChange={handleDeliveryChange} />
                    <input className='ms-1 me-1' type="text" name="state" placeholder="State" value={delivery.state} onChange={handleDeliveryChange} />
                    <input type="text" name="pinCode" placeholder="PIN code" value={delivery.pinCode} onChange={handleDeliveryChange} />
                </div>
                <input type="checkbox" name="saveInfo" /> Save this information for next time
                <h5 className='mt-4'>Shipping method</h5>
                <p>Enter your shipping address to view available shipping methods.</p>
            </div>
</Col>
<Col sm={12} lg={6}>
            <div className="rightSide">
                <h2>Your cart</h2>
                <div className="cart-items1">
                    {cart.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={ap1} alt={item.name} />
                            <div className="item-details">
                                <span>{item.name}</span>
                                <span>Rs. {item.price}</span>
                                <p>Quantity: {item.quantity}</p>
                            </div>
                        </div>
                    ))}
                </div>
               
 

                    <div className="container">
                        <table style={{ color: theme === "darkTheme" ? "white" : "black" }}  className="table ">

                            <tbody>
                                <tr>
                                    <th scope="row">Subtotal</th>
                                    <td>₹373.00</td>
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

                                        <strong>₹373.00</strong>

                                    </td>

                                </tr>

                            </tbody>
                        </table>
 



                </div>
                <button className="checkout-button mb-3">Check out</button>
            </div>
</Col>
            </Row>


        </div>
    );
};

export default CheckOut;