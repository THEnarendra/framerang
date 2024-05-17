import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import "../MainCss/Navbar.css"


const Navbar = ({theme,setTheme}) => {


  const [isOpen, setIsOpen] = useState(true);

  const [frame, setFrame] = useState(false);
  const [poster, setPoster] = useState(false);

  

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  const ToggleTheme = () =>{
    if(theme==="darkTheme"){
      setTheme("lightTheme");
    }
    else{setTheme("darkTheme")}
    
  }


  return (
    <div >
      <Row style={{marginTop:"1%"}} className="navbar">
        <Col lg={1} md={3} sm={2}>
          <Link to="/">
          <img
            className="image"
            src="https://framerang.com/cdn/shop/files/ll_copy.png?v=1712908551&width=135"
            alt=""
          />
          </Link>
        </Col>
        
        <Col lg={3} md={8} sm={8}>
          <input className="search" type="search" placeholder="Search Anime" />
        </Col>
        <Col className={isOpen ? "navMenu ms-5" : "m-2 navItems"} lg={1} md={12}>
          <Link style={{ color: theme==="darkTheme" ? "white" : "black" }}
 className="link" to="/">Home
          </Link>
          </Col>
        <Col className={isOpen ? "navMenu" : "m-2 navItems"} lg={1} md={12}>
          <div onClick={() => setFrame(!frame)} >
            Frames <i className="fa-solid fa-angle-down"></i>
          </div>
          {frame && (
            <div className="frameDrop">
              <Link style={{ color: theme==="darkTheme" ? "white" : "black" }} className="link" to="/animeposters">
              <p>Anime</p>
              </Link>
              <p>Marvel</p>
            </div>
          )}


        </Col>
        <Col className={isOpen ? "navMenu" : "m-2 navItems"} lg={1} md={12}>
          <div onClick={() => setPoster(!poster)} >
            Posters <i className="fa-solid fa-angle-down"></i>
          </div>
          {poster && (
            <div className="frameDrop" >
              <p>Anime</p>
              <p>Marvel</p>
            
            </div>
          )}
        </Col>
        <Col className={isOpen ? "navMenu" : "m-2 navItems"} lg={1} md={12}>Contact</Col>
        <Col className={isOpen ? "navMenu me-5" : "m-2 navItems"} lg={1} md={12}>Track</Col>
        <Col className={isOpen ? "navMenu" : "m-2"} lg={2} md={12}>
          <i style={{cursor:"pointer"}} className=" fa-solid fa-bell"></i>
          {/* <i style={{cursor:"pointer"}} className=" fa-solid fa-user"></i> */}
          <i style={{cursor:"pointer"}} className="px-4 fa-solid fa-cart-shopping"></i>
          <i style={{cursor:"pointer"}} className="ps-5 fa-solid fa-moon" onClick={ToggleTheme}></i>
        </Col>
        <Col className="burger"><i onClick={toggle} className=" fa-solid fa-bars"></i></Col>
      </Row>
    </div>

  );
};

export default Navbar;
