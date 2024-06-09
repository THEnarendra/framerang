import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import "../MainCss/Navbar.css"
import logo from "../images/2.png"
import { Cart } from "../Home/Cart";

const Navbar = ({ theme, setTheme, setIsCartOpen }) => {


  const [isOpen, setIsOpen] = useState(true);

  const [frame, setFrame] = useState(false);
  const [poster, setPoster] = useState(false);




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
          <Link onClick={() => (setPoster(false), setFrame(false))} to="/">
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
          <Link onClick={() => (setPoster(false), setFrame(false))} style={{ color: theme === "darkTheme" ? "white" : "black" }}
            className="link" to="/">Home
          </Link>
        </Col>
        <Col className={isOpen ? "navMenu" : "m-2 navItems"} lg={1} md={12}>
          <Link style={{ color: theme === "darkTheme" ? "white" : "black" }} className="link" to="/frames">
            <div onClick={() => (setFrame(!frame), setPoster(false))} >
              Frames
              {/* <i className="fa-solid fa-angle-down"></i> */}
            </div>
          </Link>
          {/* {frame && (
            <div className="frameDrop">
                <p>Anime</p>
              </Link>
              <Link onClick={()=>setFrame(false)} style={{ color: theme === "darkTheme" ? "white" : "black" }} className="link" to="/marvelposters">
                <p>Marvel</p>
            </div>
          )} */}
        </Col>
        <Col className={isOpen ? "navMenu" : "m-2 navItems"} lg={1} md={12}>
          <Link style={{ color: theme === "darkTheme" ? "white" : "black" }} className="link" to="/posters">
            <div >
              Posters
              {/* <i className="fa-solid fa-angle-down"></i> */}
            </div>
          </Link>
          {/* {poster && (
            <div className="frameDrop" >
                <p>Anime</p>
              </Link>
              <Link onClick={()=>setPoster(false)} style={{ color: theme === "darkTheme" ? "white" : "black" }} className="link" to="/marvelframes">
                <p>Marvel</p>
            </div>
          )} */}
        </Col>
        <Col className={isOpen ? "navMenu" : "m-2 navItems"} lg={1} md={12}>
          <Link onClick={() => (setPoster(false), setFrame(false))} style={{ color: theme === "darkTheme" ? "white" : "black" }} className="link" to="/contactus">Contact</Link>
        </Col>
        <Col onClick={() => (setPoster(false), setFrame(false))} className={isOpen ? "navMenu me-5" : "m-2 navItems"} lg={1} md={12}>Track</Col>
        <Col onClick={() => (setPoster(false), setFrame(false))} className={isOpen ? "navMenu" : "m-2"} lg={2} md={12}>
          <i style={{ cursor: "pointer" }} className=" fa-solid fa-bell"></i>

          <i onClick={() => (setIsCartOpen(true))}  className="px-4 fa-solid fa-cart-shopping"></i>


          <i style={{ cursor: "pointer" }} className="ps-2 fa-solid fa-moon" onClick={() => (ToggleTheme(), setPoster(false), setFrame(false))}></i>
        </Col>
        <Col onClick={() => (setPoster(false), setFrame(false))} className="burger"><i onClick={toggle} className=" fa-solid fa-bars"></i></Col>

      </Row>

    </div>


  );
};

export default Navbar;
