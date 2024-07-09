import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Col, Row, Button, Container, Card, ListGroup } from "react-bootstrap";
import "./ProductPage.css"; 

export const ProductPage = ({ setFooter }) => {
  const location = useLocation();
  const { product } = location.state || {};
  const [loading, setLoading] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [error, setError] = useState();

  setFooter(false);

  const handleVariantClick = (variant) => {
    setSelectedVariant(variant);
  };

  if (!product) {
    return <p>No product details available</p>;
  }

  return (
    <Container fluid className="product-page">
      <Row>
        <Col md={4} className="image-column">
          <img src={product.productImage.url} alt={product.productName} className="product-image" />
        </Col>
        <Col md={8} className="details-column">
          <div className="details-content">
            <p className="product-frame">Frame Range</p>
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
            <div className="product-rating">
              <span>⭐⭐⭐⭐☆ (4.5)</span>
            </div>
            <div className="other-details">
              <h3>Features</h3>
              <ListGroup style={{ border: "1px solid gray" }}>
                <ListGroup.Item style={{ backgroundColor: "transparent", color: "green" }}>
                  UV Protection
                </ListGroup.Item>
                <ListGroup.Item style={{ backgroundColor: "transparent", color: "green", borderTop: "1px solid gray" }}>
                  Polarized Lenses
                </ListGroup.Item>
                <ListGroup.Item style={{ backgroundColor: "transparent", color: "green", borderTop: "1px solid gray" }}>
                  Available in multiple colors
                </ListGroup.Item>
              </ListGroup>
            </div>
            <Button className="add-to-cart-btn">
              Add to Cart
            </Button>
            <div className="reviews-section">
              <h3>Customer Reviews</h3>
              <div className="review">
                <p><strong>John Doe:</strong> Great product! Very comfortable and stylish.</p>
                <p><strong>Jane Smith:</strong> Love the design and the quality is excellent.</p>
              </div>
            </div>
            <div className="related-products-section">
              {/* <h3>Related Products</h3>
              <Row>
                <Col sm={6}>
                  <Card>
                    <Card.Img variant="top" src={product.productImage.url} />
                    <Card.Body>
                      <Card.Title>Related Product 1</Card.Title>
                      <Card.Text>Rs. {product.newPrice}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm={6}>
                  <Card>
                    <Card.Img variant="top" src={product.productImage.url} />
                    <Card.Body>
                      <Card.Title>Related Product 2</Card.Title>
                      <Card.Text>Rs. {product.newPrice}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row> */}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
