import React, { useContext, useState } from 'react';
import '../MainCss/cart.css'
import { CartContext } from '../CartContext';
import { Link } from 'react-router-dom';
import { toast, Toaster } from "react-hot-toast";
export const Cart = ({ setIsCartOpen }) => {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity, getTotal } = useContext(CartContext);
  return (
    <div className='cart011'>
      <div className="rightSide-cart">
        <Toaster />
        <div className='cart-header'>
          <h2>Your cart</h2>
          <div onClick={() => setIsCartOpen(false)} style={{ fontSize: "20px", fontWeight: 700, cursor: "pointer" }}>❌</div>
        </div>
        <hr />
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">

              <img style={{boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} src={item.productImage.url} alt="image" />
              <div className="item-details">
                <p>{item.productName}</p>
                {item?.variant?.filter((data) => data.size === item.Size).map((data) => (
                  <p>Size: {data.size}</p>
                ))}
                <div className="item-controls">
                  {item?.variant?.filter((data) => data.size === item.Size).map((data) => (
                    <p>Rs. {data.newPrice}</p>
                  ))}
                  <div className='decrementQuantity mb-3'>
                    <button className='incDec' onClick={() => decrementQuantity(item._id)}>-</button>
                    <span>{item.quantity}</span>
                    <button className='incDec' onClick={() => incrementQuantity(item._id)}>+</button>
                  </div>
                  <button className='removeBtn mb-3' onClick={() => removeFromCart(item._id, item.Size)}>Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <hr /><br />
        <div className='cart-overview'>
          <div className="cart-total">
            <h3>Estimated total</h3>
            <p>Rs. {getTotal()}</p>
          </div>
          <div className='ms-4 mb-2'>Tax included. Shipping and discounts calculated at checkout.</div>
          <Link to={cart?.length !== 0 && "/checkout"} onClick={() => {
            if (cart?.length === 0) {
              toast.error("Please Add Product First");
            }
            setIsCartOpen(false)
          }} >
            
            <button className="checkout-button ms-2">Check out</button>
          </Link>
        </div>
      </div>
    </div>
  )
}