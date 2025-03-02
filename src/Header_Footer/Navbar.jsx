import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Dropdown } from "react-bootstrap";
import "../MainCss/Navbar.css";
import logo from "../images/2.png";
import { CartContext } from "../CartContext";
import { useProducts } from "../Context/ProductContext";

const Navbar = ({ theme, setTheme, setIsCartOpen }) => {
  const { cart } = useContext(CartContext);
  const { categories, subcategories } = useProducts(); 
  const [isOpen, setIsOpen] = useState(true);
  const [openCategory, setOpenCategory] = useState(null);

  console.log("categories", categories);
  console.log("subCategories", subcategories);
  console.log("")

  const toggle = () => setIsOpen(!isOpen);
  const ToggleTheme = () => setTheme(theme === "darkTheme" ? "lightTheme" : "darkTheme");

  return (
    <div>
      <Row className="navbar" style={{ marginTop: "1%" }}>
        <Col lg={1} md={3} sm={2}>
          <Link to="/" onClick={() => setIsOpen(true)}>
            <img className="image" src={logo} alt="logo" />
          </Link>
        </Col>

        <Col lg={3} md={8} sm={8}>
          <input className="search" type="search" placeholder="Search Products" style={{ paddingLeft: 30 }} />
        </Col>

        <Col className={isOpen ? "navMenu" : "navItems"} lg={1} md={12}>
          <Link to="/" className="link" style={{ color: theme === "darkTheme" ? "white" : "black" }}>
            Home
          </Link>
        </Col>

        <Col className={isOpen ? "navMenu" : "navItems"} lg={1} md={12}>
        <div className="shop-section"
                onMouseEnter={() => setOpenCategory("main")}
                onMouseLeave={() => setOpenCategory(null)}>
          <Link to="/collections" className="link" style={{ color: theme === "darkTheme" ? "white" : "black" }}>
            <div>Shop</div>
            {openCategory === "main" && (
              <div className="dropdown-container">
                {categories.map((category) => (
                  <div key={category.id} className="dropdown">
                    <Link to={`/${category}`} className="link">
                      {category.name}
                    </Link>
                    <div className="dropdown-content">
                    {subcategories[category] && subcategories[category].map((subcategory) => (
                    <Link key={subcategory} to={`/${category}/${subcategory}`} className="link">
                    {subcategory}
                    </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
            </Link>
        </div>
        </Col>


        <Col className={isOpen ? "navMenu" : "navItems"} lg={1} md={12}>
          <Link to="/contactus" className="link" style={{ color: theme === "darkTheme" ? "white" : "black" }}>
            Contact
          </Link>
        </Col>

        <Col className={isOpen ? "navMenu" : "navItems"} lg={1} md={12}>
          <Link to="/track" className="link" style={{ color: theme === "darkTheme" ? "white" : "black" }}>
            Track
          </Link>
        </Col>

        <Col className={isOpen ? "navMenu me-5" : "navItems"} lg={2} md={12}>
          <Link to="/notification" className="link">
            <i className="fa-solid fa-bell"></i>
          </Link>
          <span onClick={() => setIsCartOpen(true)} className="cart-badge">
            {cart?.length ? cart.length : ""}
          </span>
          <i onClick={() => setIsCartOpen(true)} className="px-4 fa-solid fa-cart-shopping"></i>
          <i onClick={ToggleTheme} className="ps-2 fa-solid fa-moon" style={{ cursor: "pointer" }}></i>
        </Col>

        <Col className="burger">
          <i onClick={toggle} className="fa-solid fa-bars"></i>
        </Col>
      </Row>
    </div>
  );
};

export default Navbar;
