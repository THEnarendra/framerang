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

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        setCart(prevCart => {
            const existingProductIndex = prevCart.findIndex(item => item._id === product._id && item.Size === product.Size );
            if (existingProductIndex >= 0) {
                const updatedCart = [...prevCart];
                updatedCart[existingProductIndex] = {
                    ...updatedCart[existingProductIndex],
                    quantity: updatedCart[existingProductIndex].quantity + 1,
                };
                return updatedCart;
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (productId, size) => {
      setCart(cart.filter((item) => !(item._id === productId && item.Size === size)));
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
    return cart.reduce((total, item) => {
        const matchingVariant = item?.variant?.find(v => v.size === item.Size);
        if (matchingVariant) {
            return total + matchingVariant.newPrice * item.quantity;
        }
        return total;
    }, 0);
};

  
    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart,incrementQuantity,decrementQuantity,getTotal }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };
