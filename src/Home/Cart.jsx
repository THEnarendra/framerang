import React, { useContext, useState } from 'react';
import {ap1,ap2} from '../images/anime-posters/animeposters' 


import '../MainCss/cart.css'
import { CartContext } from '../CartContext';

export const Cart = ({setIsCartOpen}) => {
  const { cart,setCart, removeFromCart,incrementQuantity,decrementQuantity,getTotal } = useContext(CartContext);



  return (
    <div className="rightSide-cart">
      <div className='cart-header'>
      <h2>Your cart</h2>
      <div onClick={()=>setIsCartOpen(false)} style={{fontSize:"25px", fontWeight:700, cursor:"pointer"}}>X</div>
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
              <div>
              <button className='incDec' onClick={() => decrementQuantity(item._id)}>-</button>
                <span>{item.quantity}</span>
                <button className='incDec' onClick={() => incrementQuantity(item._id)}>+</button>
              </div>
                
                <button className='removeBtn' onClick={() => removeFromCart(item._id)}>Remove</button>
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
    <div>Tax included. Shipping and discounts calculated at checkout.</div>
    <button className="checkout-button">Check out</button>
  </div>
    </div>
    
  )
}