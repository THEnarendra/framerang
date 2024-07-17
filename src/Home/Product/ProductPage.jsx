import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { Col, Row, Button, Container, Card, ListGroup } from "react-bootstrap";
import "./ProductPage.css"; 
import { CartContext } from "../../CartContext";
import toast, { Toaster } from "react-hot-toast";

export const ProductPage = ({ setFooter,setIsCartOpen }) => {
  const location = useLocation();
  const { product } = location.state || {};
  const { addToCart } = useContext(CartContext);
  const [selectedVariant, setSelectedVariant] = useState(product?.variant[0]);
  const [error, setError] = useState();

  setFooter(false);

  const handleVariantClick = (variant) => {
    setSelectedVariant(variant);
  };

  if (!product) {
    return <p>No product details available</p>;
  }

  const handleClick = (product) => {
    if (product) {
      setIsCartOpen(true)
      const productWithSelectedVariant = {
        ...product,
        Size: selectedVariant?.size, 
      };

      setTimeout(() => {
        toast.success("Product Added to Cart Successfully");
        addToCart(productWithSelectedVariant); 

      }, 100); 
    }
  };

  return (
    <Container fluid className="product-page">
      <Toaster />
      <Row>
        <Col md={4} className="image-column">
          <img src={product.productImage.url} alt={product.productName} className="product-image mt-5 pt-3" />
        </Col>
        <Col md={8} className="details-column">
          <div className="details-content">
            <p className="product-frame">Frame Rang</p>
            <h2 className="product-name">{product.productName}</h2>
          
            {selectedVariant && (
                  <>
                    <span style={{ textDecoration: 'line-through', color: 'gray' }}>
                      Rs. {selectedVariant.oldPrice}
                    </span>
                    &nbsp;&nbsp;&nbsp;
                    <span style={{ fontSize: '22px' }}>Rs. {selectedVariant.newPrice}</span>
                  </>
                )}
                <p style={{ fontSize: '13px',textDecoration:"underline" }}>Tax included. Shipping calculated at checkout</p>
                 <p>Size</p>
            <div>
                {product?.variant?.map((variant) => (
                  <button
                    key={variant._id}
                    className={`bt3 me-3 ${selectedVariant === variant ? 'selected' : ''}`}
                    onClick={() => (handleVariantClick(variant),setError(false))}
                  >
                    {variant.size}
                  </button>
                ))}
                 <br /> <br />
               {error && (
                <p style={{color:"red"}}>! Please Select Size First </p>
               )}
               
              </div>

            <div className="product-description">
              <p>{product.description || 'No description available.'}</p>
            </div>
          
            <button style={{backgroundColor:"rgb(219, 14, 14)",border:"none",padding:4,borderRadius:4}} onClick={()=>handleClick(product)} className="text-white" >
              Add to Cart
            </button>
           
          </div>
        </Col>
      </Row>
    </Container>
  );
};
