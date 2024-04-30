import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import "../MainCss/Navbar.css"


const Navbar = () => {
  const [state, setState] = useState(0);
  const Click = () => {
    setState(state + 1);
  };
  return (
  <div >
        <Row className="navbar">
          <Col lg={1} md={3} sm={2}>
        <img
            className="image"
            src="https://framerang.com/cdn/shop/files/ll_copy.png?v=1712908551&width=135"
            alt=""
          />
          </Col>
          <Col lg={3} md={8} sm={8}>
            <input className="search" type="search" placeholder="Search Anime" />
          </Col>
          <Col className="navMenu" lg={1} md={12}>Home</Col>
          <Col className="navMenu" lg={1} md={12}>Frames</Col>
          <Col className="navMenu" lg={1} md={12}>Posters</Col>
          <Col className="navMenu" lg={1} md={12}>Track</Col>
          <Col className="navMenu" lg={2} md={12}>
            <i class=" fa-solid fa-bell"></i>
            <i class="px-4 fa-solid fa-user"></i>
          </Col>
          <Col className="burger"><i class=" fa-solid fa-bars"></i></Col>
        </Row>
      </div>
     
  );
};

export default Navbar;
