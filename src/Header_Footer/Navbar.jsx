import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import "../MainCss/Navbar.css"


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const [frame, setFrame] = useState(false);
  const [poster, setPoster] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }


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
        <Col className={isOpen ? "navMenu" : "m-2"} lg={1} md={12}>Home</Col>
        <Col className={isOpen ? "navMenu" : "m-2"} lg={1} md={12}>
          <div onClick={() => setFrame(!frame)} >
            Frames <i class="fa-solid fa-angle-down"></i>
          </div>
          {frame && (
            <div className="frameDrop">
              <p>Anime</p>
              <p>Marvel</p>
            </div>
          )}



        </Col>
        <Col className={isOpen ? "navMenu" : "m-2"} lg={1} md={12}>
          <div onClick={() => setPoster(!poster)} >
            Posters <i class="fa-solid fa-angle-down"></i>
          </div>
          {poster && (
            <div className="frameDrop">
              <p>Anime</p>
              <p>Marvel</p>
            </div>
          )}
        </Col>
        <Col className={isOpen ? "navMenu" : "m-2"} lg={1} md={12}>Contact</Col>
        <Col className={isOpen ? "navMenu " : "m-2"} lg={1} md={12}>Track</Col>
        <Col className={isOpen ? "navMenu" : "m-2"} lg={2} md={12}>
          <i class=" fa-solid fa-bell"></i>
          <i class="px-4 fa-solid fa-user"></i>
          <i class="fa-solid fa-cart-shopping"></i>
        </Col>
        <Col className="burger"><i onClick={toggle} class=" fa-solid fa-bars"></i></Col>
      </Row>
    </div>

  );
};

export default Navbar;
