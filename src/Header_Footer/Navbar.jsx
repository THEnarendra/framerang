import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import "../MainCss/Navbar.css"
import logo from "../images/2.png"
import { CartContext } from "../CartContext";

const Navbar = ({ theme, setTheme, setIsCartOpen }) => {
  const { cart } = useContext(CartContext);


  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  const ToggleTheme = () => {
    if (theme === "darkTheme") {
      setTheme("lightTheme");
    }
    else { setTheme("darkTheme") }

  }


  return (
    <div >
      <Row style={{ marginTop: "1%" }} className="navbar">
        <Col lg={1} md={3} sm={2}>
          <Link onClick={() => setIsOpen(true)} to="/">
            <img
              className="image"
              src={logo}
              alt=""
            />
          </Link>
        </Col>

        <Col lg={3} md={8} sm={8}>
          <input className="search" type="search" placeholder="Search Anime" />
        </Col>
        <Col className={isOpen ? "navMenu ms-5" : "m-2 navItems"} lg={1} md={12}>
          <Link onClick={() => setIsOpen(true)} style={{ color: theme === "darkTheme" ? "white" : "black" }}
            className="link" to="/">Home
          </Link>
        </Col>
        <Col className={isOpen ? "navMenu" : "m-2 navItems"} lg={1} md={12}>
          <Link style={{ color: theme === "darkTheme" ? "white" : "black" }} className="link" to="/frames">
            <div onClick={() => setIsOpen(true)} >
              Frames
            </div>
          </Link>

        </Col>
        <Col className={isOpen ? "navMenu" : "m-2 navItems"} lg={1} md={12}>
          <Link style={{ color: theme === "darkTheme" ? "white" : "black" }} className="link" to="/posters">
            <div onClick={() => setIsOpen(true)}  >
              Posters
            </div>
          </Link>
        </Col>
        <Col className={isOpen ? "navMenu" : "m-2 navItems"} lg={1} md={12}>
          <Link onClick={() => setIsOpen(true)} style={{ color: theme === "darkTheme" ? "white" : "black" }} className="link" to="/contactus">Contact</Link>
        </Col>
        <Col onClick={() => setIsOpen(true)} className={isOpen ? "navMenu me-5" : "m-2 navItems"} lg={1} md={12}>
          <Link style={{ color: theme === "darkTheme" ? "white" : "black" }} className="link" to="/Track">
            Track
          </Link>
        </Col>
        <Col onClick={() => setIsOpen(true)} className={isOpen ? "navMenu" : "m-2"} lg={2} md={12}>
          <Link style={{ color: theme === "darkTheme" ? "white" : "black" }} className="link" to="/Notification">

            <i style={{ cursor: "pointer" }} className=" fa-solid fa-bell"></i>
          </Link>
          <>
          <span onClick={() => (setIsCartOpen(true))} style={{color:"white",position:"absolute",marginLeft:33,marginTop:-4,backgroundColor:"red",paddingLeft:6,borderRadius:"100%",paddingRight:6,fontSize:12}}>{cart?.length != 0 ? cart?.length : ''}</span>
          <i onClick={() => (setIsCartOpen(true))} className="px-4 fa-solid fa-cart-shopping"></i>
          </>
            <i style={{ cursor: "pointer" }} className="ps-2 fa-solid fa-moon" onClick={() => (ToggleTheme())}></i>

        </Col>
        
        <Col className="burger"><i onClick={toggle} className=" fa-solid fa-bars"></i></Col>

      </Row>

    </div>


  );
};

export default Navbar;
