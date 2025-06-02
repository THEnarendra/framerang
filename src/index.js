import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartProvider } from './CartContext';
import { ProductProvider } from './Context/ProductContext';
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HelmetProvider>
  <ProductProvider>
    <CartProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </CartProvider>
  </ProductProvider>
  </HelmetProvider>
);
reportWebVitals();
