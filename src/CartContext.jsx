// src/CartContext.js
import React, { createContext, useState, useEffect } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Load cart from local storage when component mounts
    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart'));
        if (savedCart) {
            setCart(savedCart);
        }
    }, []);

    // Save cart to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        setCart(prevCart => {
            const existingProductIndex = prevCart.findIndex(item => item._id === product._id);
            if (existingProductIndex >= 0) {
                const updatedCart = [...prevCart];
                updatedCart[existingProductIndex] = {
                    ...updatedCart[existingProductIndex],
                    quantity: updatedCart[existingProductIndex].quantity + 1
                };
                return updatedCart;
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (productId) => {
        setCart(cart.filter(item => item._id !== productId));
    };
  const incrementQuantity = (id) => {
    setCart(cart.map(item =>
      item._id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decrementQuantity = (id) => {
    setCart(cart.map(item =>
      item._id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.variant.newPrice * item.quantity, 0);
  };
  

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart,incrementQuantity,decrementQuantity,getTotal }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };
