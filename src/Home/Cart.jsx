import React, { useState } from 'react';
import {ap1,ap2} from '../images/anime-posters/animeposters' 

// Helper function to format currency
function formatCurrency(value) {
  return Number(value).toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
}

// Header Component
function Header({ itemCount }) {
  return (
    <header className="container">
      <h1>Shopping Cart</h1>
      <ul className="breadcrumb">
        <li>Home</li>
        <li>Shopping Cart</li>
      </ul>
      <span className="count">{itemCount} items in the bag</span>
    </header>
  );
}

// Product List Component
function ProductList({ products, onChangeProductQuantity, onRemoveProduct,theme, setTheme  }) {
  return (
    <section className="container">
      <ul className="products">
        {products.map((product, index) => (
          <li  className="row" key={index}>
            <div className="col left">
              <div className="thumbnail">
                <a href="#">
                  <img className='img123' src={ap1} alt={product.name} />
                </a>
              </div>
              <div className="detail">
                <div className="name">
                  <a href="#">{product.name}</a>
                </div>
                <div className="description">{product.description}</div>
                <div className="price">{formatCurrency(product.price)}</div>
              </div>
            </div>
            <div className="col right">
              <div className="quantity">
                <input
                  type="text"
                  className="quantity"
                  step="1"
                  value={product.quantity}
                  onChange={(event) => onChangeProductQuantity(index, event)}
                />
              </div>
              <div className="remove">
                <svg
                  onClick={() => onRemoveProduct(index)}
                  version="1.1"
                  className="close"
                  x="0px"
                  y="0px"
                  viewBox="0 0 60 60"
                  enableBackground="new 0 0 60 60"
                >
                  <polygon points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812" />
                </svg>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

// Summary Component
function Summary({ subTotal, discount, tax, onEnterPromoCode, checkPromoCode }) {
  const total = subTotal - discount + tax;
  return (
    <section className="container01">
      <div className="promotion">
        <label htmlFor="promo-code">Have A Promo Code?</label>
        <input type="text" onChange={onEnterPromoCode} />
        <button type="button" onClick={checkPromoCode}>Apply</button>
      </div>
      <div className="summary">
        <ul>
          <li>Subtotal <span>{formatCurrency(subTotal)}</span></li>
          {discount > 0 && <li>Discount <span>{formatCurrency(discount)}</span></li>}
          <li>Tax <span>{formatCurrency(tax)}</span></li>
          <li className="total">Total <span>{formatCurrency(total)}</span></li>
        </ul>
      <div className="checkout">
        <button className='bt001' type="button">Check Out</button>
      </div>
      </div>
    </section>
  );
}

// Initial Data
const PRODUCTS = [
  {
    image: "https://via.placeholder.com/200x150",
    name: "PRODUCT ITEM NUMBER 1",
    description: "Description for product item number 1",
    price: 5.99,
    quantity: 2
  },
  {
    image: "https://via.placeholder.com/200x150",
    name: "PRODUCT ITEM NUMBER 2",
    description: "Description for product item number 1",
    price: 9.99,
    quantity: 1
  }
];

const PROMOTIONS = [
  {
    code: "SUMMER",
    discount: "50%"
  },
  {
    code: "AUTUMN",
    discount: "40%"
  },
  {
    code: "WINTER",
    discount: "30%"
  }
];

const TAX = 5;

// Main Cart Component
export const Cart=({ theme, setTheme })=> {
  const CLONE_PRODUCTS = JSON.parse(JSON.stringify(PRODUCTS));
  const [products, setProducts] = useState(CLONE_PRODUCTS);
  const [promoCode, setPromoCode] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);

  const itemCount = products.reduce((quantity, product) => quantity + +product.quantity, 0);
  const subTotal = products.reduce((total, product) => total + product.price * +product.quantity, 0);
  const discount = (subTotal * discountPercent) / 100;

  const onChangeProductQuantity = (index, event) => {
    const value = event.target.value;
    const valueInt = parseInt(value);
    const cloneProducts = [...products];

    if (value === "") {
      cloneProducts[index].quantity = value;
    } else if (valueInt > 0 && valueInt < 100) {
      cloneProducts[index].quantity = valueInt;
    }

    setProducts(cloneProducts);
  };

  const onRemoveProduct = (i) => {
    const filteredProduct = products.filter((product, index) => index !== i);
    setProducts(filteredProduct);
  };

  const onEnterPromoCode = (event) => {
    setPromoCode(event.target.value);
  };

  const checkPromoCode = () => {
    const promotion = PROMOTIONS.find(promo => promo.code === promoCode);
    if (promotion) {
      setDiscountPercent(parseFloat(promotion.discount.replace("%", "")));
    } else {
      alert("Sorry, the Promotional code you entered is not valid!");
    }
  };

  return (
    <div style={{marginTop:150}}>
      <Header itemCount={itemCount} />
      {products.length > 0 ? (
        <div>
          <ProductList
            products={products}
            onChangeProductQuantity={onChangeProductQuantity}
            onRemoveProduct={onRemoveProduct}
          />
          <Summary
            subTotal={subTotal}
            discount={discount}
            tax={TAX}
            onEnterPromoCode={onEnterPromoCode}
            checkPromoCode={checkPromoCode}
            theme={theme} setTheme={setTheme}
          />
        </div>
      ) : (
        <div className="empty-product">
          <h3>There are no products in your cart.</h3>
          <button onClick={() => setProducts(PRODUCTS)}>Shopping now</button>
        </div>
      )}
    </div>
  );
}

// Render the Cart Component
// ReactDOM.render(<Cart />, document.getElementById("root"));

// Export the Cart Component
// export default Cart;
