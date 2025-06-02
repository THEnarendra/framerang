import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useProducts } from "../Context/ProductContext";
import { getCategoryImage } from "../Home/CategoryImages";
import { toSlug } from "../utils/Slugify";
import { Row, Col, Container } from "react-bootstrap";
import "./CollectionsPage.css";

const CollectionsPage = () => {
  const location = useLocation();
  const category = location.state?.category;


  const { categories = [] } = useProducts();
  const filterCategories = categories.filter((category) =>
    category.toLowerCase().includes(`${category}`)
  );
  

  return (
    <Container className="collections-page">
      <div className="collections-header">
        <h1 className="collections-title">Our {category}</h1>
        <hr className="our-collection-underline"/>
        {/* <p className="collections-subtitle">
          Discover our wide range of premium products
        </p> */}
      </div>

      {categories.length > 0 ? (
        <Row className="collections-grid">
          {categories.map((category) => (
            <Col 
              key={category}
              xs={6} 
              sm={6} 
              md={4} 
              lg={3} 
              xl={3}
              className="mb-4"
            >
              <Link
                to={`/${toSlug(category)}`}
                className="collection-card"
              >
                <div className="collection-image-container">
                  <img
                    src={getCategoryImage(category)}
                    alt={category}
                    className="collection-image"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://res.cloudinary.com/your-account/image/upload/v1/default-collection.jpg";
                    }}
                  />
                  <div className="collection-overlay"></div>
                </div>
                <div className="collection-info">
                  <h3 className="collection-name">{category}</h3>
                  <button className="collection-cta">Shop Now</button>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      ) : (
        <div className="no-collections">
          <p>No collections available at the moment</p>
        </div>
      )}
    </Container>
  );
};

export default CollectionsPage;