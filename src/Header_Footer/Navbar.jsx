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
        <Row style={{color:"white"}}>
          <Col>
        <img
            className="image"
            src="https://framerang.com/cdn/shop/files/ll_copy.png?v=1712908551&width=135"
            alt=""
          />
          </Col>
          <Col>
            <input className="search" type="search" placeholder="search Anime" />
          </Col>
          <Col >Home</Col>
          <Col>Anime List</Col>
          <Col>New Season</Col>
          <Col>Popular</Col>
          <Col>
            <i class="fa-solid fa-bell"></i>
            <i class="fa-solid fa-user"></i>
            <i class="fa-solid fa-bars"></i>
          </Col>
        </Row>
        
      </div>
  
  );
};

export default Navbar;
