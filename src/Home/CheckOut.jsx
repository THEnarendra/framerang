import React, { useState } from 'react';
import { ap1 } from '../images/anime-posters/animeposters';
import '../MainCss/checkout.css'
import { Col, Row } from 'react-bootstrap';

const CheckOut = () => {
    const [email, setEmail] = useState('');
    const [contact, setContact]= useState('')
    const [delivery, setDelivery] = useState({
        country: 'India', firstName: '', lastName: '', address: '', apartment: '', city: '', state: 'Rajasthan', pinCode: ''
    });
    const [promoCode, setPromoCode] = useState('');
    const [discount, setDiscount] = useState(0);

    const cart = [
        { id: 1, name: 'Anime Frames Combo Goku, Sasuke (3pcs:- 13*9inch)', price: 399, quantity: 1 },
        { id: 2, name: 'Satoru Gojo Frame (13*9 inch)', price: 149, quantity: 1 },
        { id: 3, name: 'Goku DragonBall z Frame (13*9inch)', price: 149, quantity: 1 },
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
            <div className="leftSide">
                <h2>Contact Info</h2>
                <input type="text" placeholder="Email Address" value/>
                <input type="email" name="emailId" placeholder="Contact Info" value={email} onChange={handleEmailChange} />
                <h2>Delivery Address</h2>
                <input type="text" name="country" placeholder="Country/Region" value={delivery.country} readOnly />
                <div className="name-fields">
                    <input type="text" name="firstName" placeholder="First name" value={delivery.firstName} onChange={handleDeliveryChange} />
                    <input type="text" name="lastName" placeholder="Last name" value={delivery.lastName} onChange={handleDeliveryChange} />
                </div>
                <input type="text" name="address" placeholder="Address" value={delivery.address} onChange={handleDeliveryChange} />
                <input type="text" name="apartment" placeholder="Apartment, suite, etc. (optional)" value={delivery.apartment} onChange={handleDeliveryChange} />
                <div className="location-fields">
                    <input type="text" name="city" placeholder="City" value={delivery.city} onChange={handleDeliveryChange} />
                    <input type="text" name="state" placeholder="State" value={delivery.state} onChange={handleDeliveryChange} />
                    <input type="text" name="pinCode" placeholder="PIN code" value={delivery.pinCode} onChange={handleDeliveryChange} />
                </div>
                <input type="checkbox" name="saveInfo" /> Save this information for next time
                <h2>Shipping method</h2>
                <p>Enter your shipping address to view available shipping methods.</p>
            </div>

            
            <div className="rightSide">
                <h2>Your cart</h2>
                <div className="cart-items">
                    {cart.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={ap1} alt={item.name} />
                            <div className="item-details">
                                <p>{item.name}</p>
                                <p>Rs. {item.price}</p>
                                <p>Quantity: {item.quantity}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="promo-code">
                    <input type="text" placeholder="Discount code" value={promoCode} onChange={(e) => setPromoCode(e.target.value)} />
                    <button className='apply-btn' onClick={applyPromoCode}>Apply</button>
                </div>
                <div className="cart-summary">
                    {/* <Row>
                        <Col> Subtotal: </Col>
                        <Col> Rs. {cart.reduce((total, item) => total + item.price * item.quantity, 0)}</Col>
                    </Row>
                    <Row>
                        <Col>Discount: </Col>
                        <Col>Rs. {discount}</Col>
                    </Row>
                    <Row>
                        <Col>Total: </Col>
                        <Col>Rs. {getTotal()}</Col>
                    </Row>
                    <Row>
                        <Col>Including Rs. </Col>
                        <Col>{(getTotal() * 0.09).toFixed(2)} in taxes</Col>
                    </Row> */}

                    <table>
                        <tr>
                        <td>Subtotal :</td>
                        <td>Rs.</td>
                        </tr>
                        <tr>
                        <td>Discount :</td>
                        <td>Rs.</td>
                        </tr>
                        <tr>
                        <td>Shipping :</td>
                        <td>Rs.</td>
                        </tr>
                        </table>
                    
                    
                    
                </div>
                <button className="checkout-button">Check out</button>
            </div>
        </div>
    );
};

export default CheckOut;