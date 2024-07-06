import React from "react";
import { Col, Row, Button, Container, Card, ListGroup } from "react-bootstrap";
import img from "../../images/img01.jpg";
import "./ProductPage.css"; // Import custom CSS

export const ProductPage = ({setFooter}) => {
    setFooter(false)
  return (
    <Container fluid className="product-page">
      <Row>
        <Col md={4} className="image-column">
          <img src={img} alt="Product" className="product-image" />
        </Col>
        <Col md={8} className="details-column">
          <div className="details-content">
            <p className="product-frame">Frame Range</p>
            <h2 className="product-name">Satoru Gojo || Matte Finish Poster</h2>
            <p className="product-price">$150.00</p>
            <div className="product-description">
              These stylish sunglasses are perfect for any occasion. With a sleek design and high-quality lenses, they provide both comfort and protection.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. At aliquam ad, nobis ex velit natus impedit quibusdam sint rem est ullam, repudiandae accusamus debitis illum officiis dignissimos dolores ea sunt.
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sapiente, quis id neque, corrupti deserunt veritatis, vero soluta repudiandae alias non eum laborum eveniet quibusdam possimus aspernatur? Pariatur, deserunt quia.</p>
            </div>
            <div className="product-rating">
              <span>⭐⭐⭐⭐☆ (4.5)</span>
            </div>
            <div className="other-details">
                <h3>Features</h3>
              <ListGroup style={{border:"1px solid gray"}} >
                <ListGroup.Item style={{backgroundColor:"transparent",color:"green"}}>UV Protection</ListGroup.Item>
                <ListGroup.Item style={{backgroundColor:"transparent",color:"green",borderTop:"1px solid gray"}}>Polarized Lenses</ListGroup.Item>
                <ListGroup.Item style={{backgroundColor:"transparent",color:"green",borderTop:"1px solid gray"}}>Available in multiple colors</ListGroup.Item>
              </ListGroup>
            </div>
            <Button  className="add-to-cart-btn">
              Add to Cart
            </Button>
            <div className="reviews-section">
              <h3>Customer Reviews</h3>
              <div className="review">
                <p><strong>John Doe:</strong> Great sunglasses! Very comfortable and stylish.</p>
                <p><strong>Jane Smith:</strong> Love the design and the UV protection is excellent.</p>
              </div>
            </div>
            <div className="related-products-section">
              <h3>Related Products</h3>
              <Row>
                <Col sm={6}>
                  <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                      <Card.Title>Casual Sunglasses</Card.Title>
                      <Card.Text>$120.00</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm={6}>
                  <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                      <Card.Title>Sport Sunglasses</Card.Title>
                      <Card.Text>$140.00</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
