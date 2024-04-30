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
          <Col lg={1} md={1} sm={12}>
        <img
            className="image"
            src="https://framerang.com/cdn/shop/files/ll_copy.png?v=1712908551&width=135"
            alt=""
          />
          </Col>
          <Col lg={3} md={10} sm={12}>
            <input className="search" type="search" placeholder="Search Anime" />
          </Col>
          <Col lg={1} md={12}>Home</Col>
          <Col lg={1} md={12}>Anime List</Col>
          <Col lg={2} md={12}>New Season</Col>
          <Col lg={1} md={12}>Popular</Col>
          <Col lg={2} md={12}>
            <i class=" fa-solid fa-bell"></i>
            <i class="px-4 fa-solid fa-user"></i>
            <i class=" fa-solid fa-bars"></i>
          </Col>
        </Row>
      </div>
     
  );
};

export default Navbar;
