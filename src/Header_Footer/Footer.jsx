import React from 'react';
import "../MainCss/Footer.css";
import logo from '../images/2.png'
import { Link } from 'react-router-dom';
const Bubble = () => {
  const bubbleElements = [];
  for (let i = 0; i < 90; i++) {
    const size = `${2 + Math.random() * 4}rem`;
    const distance = `${6 + Math.random() * 1}rem`;
    const position = `${-5 + Math.random() * 95}%`;
    const time = `${2 + Math.random() * 2}s`;
    const delay = `${-1 * (2 + Math.random() * 2)}s`;
    const bubbleStyle = {
      '--size': size,
      '--distance': distance,
      '--position': position,
      '--time': time,
      '--delay': delay
    };
    bubbleElements.push(
      <div key={i} className="bubble" style={bubbleStyle}></div>
    );
  }
  return (
    <div >
      <div className="footer" style={{ height: "1vh" }}>
        <div className="bubbles">
          {bubbleElements}
        </div>
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-md-3" style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <img src={logo} alt="" className="img-fluid" />
              </div>
              <div className="col-md-3">
                <div className="useful-link">
                  <h2>Useful Links</h2>
                  <div className="use-links">
                    <li>
                      <Link to='/'>
                        <a href=""><i className="fa-solid fa-angles-right"></i> Home</a>
                      </Link>
                    </li>
                    <li><Link to='/contactUs'>
                      <a href=""><i className="fa-solid fa-angles-right"></i> Contact Us</a>
                    </Link>
                    </li>
                    <li><Link to='/posters'>
                      <a href=""><i className="fa-solid fa-angles-right"></i>Our Posters</a>
                    </Link>
                    </li>
                    <li><Link to='/frames'>
                      <a href=""><i className="fa-solid fa-angles-right"></i>Our Frames</a>
                    </Link>
                    </li>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="social-links">
                  <h2>Follow Us</h2>
                  <div className="social-icons">
                    <li><a href="https://www.facebook.com/people/FrameRang/100083271771990/"><i className="fa-brands fa-facebook-f"></i> Facebook</a></li>
                    <li><a href="https://www.instagram.com/framerang/"><i className="fa-brands fa-instagram"></i> Instagram</a></li>
                    <li><a href=""> <i class="fa-brands fa-x-twitter"></i>X.com</a></li>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="address">
                  <h2>Address</h2>
                  <div className="address-links">
                    <li className="address1"><i className="fa-solid fa-location-dot"></i>
                      Shop No. 67 Ramdev Nager Lalchandpura Niwaru Road Jhotwada Jaipur 302012
                    </li>
                    <li><a href=""><i className="fa-solid fa-phone"></i> +91 7568161580</a></li>
                    <li ><a ><i className="fa-solid fa-envelope"></i>narendrak.kumawat123@gmail.com</a></li>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="footer__copyright caption">
              <ul style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "50vw", flexWrap: "wrap", color: "black" }} className="policies list-unstyled">
                <li>
                  <Link to='/'>
                    © 2024, Frame Rang
                  </Link>
                </li>
                <li>
                  <Link to='/policies/refund-policy'>
                    <a href="">Refund policy</a>
                  </Link>
                </li>
                <li>
                  <Link to='/policies/privacy-policy'>
                    <a href="">Privacy policy</a>
                  </Link>

                </li>
                <li>
                  <Link to='/policies/terms-of-service'>
                    <a href="">Terms of service</a>
                  </Link>

                </li>
                <li>
                  <Link to='/policies/shipping-policy'>
                    <a href="">Shipping policy</a>
                  </Link>

                </li>
              </ul>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Bubble;
