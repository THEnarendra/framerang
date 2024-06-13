import React, { useContext, useState } from 'react';
import '../MainCss/cart.css'
import { CartContext } from '../CartContext';
import { Link } from 'react-router-dom';

export const Cart = ({ setIsCartOpen }) => {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity, getTotal } = useContext(CartContext);
  return (
    <div className="rightSide-cart">
      <div className='cart-header'>
        <h2>Your cart</h2>
        <div onClick={() => setIsCartOpen(false)} style={{ fontSize: "20px", fontWeight: 700, cursor: "pointer" }}>❌</div>
      </div>
      <hr />

      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.productImage.url} alt="" />
            <div className="item-details">
              <p>{item.productName}</p> 
              <div className="item-controls">
                <p>Rs. {item.newPrice}</p>
                <div className='decrementQuantity mb-3'>
                  <button className='incDec' onClick={() => decrementQuantity(item._id)}>-</button>
                  <span>{item.quantity}</span>
                  <button className='incDec' onClick={() => incrementQuantity(item._id)}>+</button>
                </div>
                <button className='removeBtn mb-3' onClick={() => removeFromCart(item._id)}>Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr />
      <div className='cart-overview'>
        <div className="cart-total">
          <h3>Estimated total</h3>
          <p>Rs. {getTotal()}</p>
        </div>
        <div className='ms-4'>Tax included. Shipping and discounts calculated at checkout.</div>
        <Link to="/checkout" onClick={() => setIsCartOpen(false)} >
          <button className="checkout-button">Check out</button>
        </Link>
      </div>
    </div>

  )
}