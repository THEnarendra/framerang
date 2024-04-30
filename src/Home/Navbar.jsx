import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [state, setState] = useState(0);
  const Click = () => {
    setState(state + 1);
  };
  return (
    <>
      <div className="container">
        <div className="MainNav">
          <img
            className="image"
            src="https://framerang.com/cdn/shop/files/ll_copy.png?v=1712908551&width=135"
            alt=""
          />
          <div className="right">
            <input className="search" type="search" placeholder="search Anime" />
          </div>
          <div  className="Middle">Home</div>
          <div className="Middle">Anime List</div>
          <div className="Middle">New Season</div>
          <div className="Middle">Popular</div>
          <div className="rright">
            <i class="fa-solid fa-bell"></i>
            <i class="fa-solid fa-user"></i>
            <i class="fa-solid fa-bars"></i>
          </div>
        </div>

        {/* <h1>Ashish</h1>
      <Link to="/About">
        <button>Press me</button>
      </Link>
      <button onClick={Click}>Boshya ka</button>
      <h1>{state}</h1> */}
      </div>
    </>
  );
};

export default Navbar;
