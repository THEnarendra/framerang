import React from 'react';
import "../MainCss/Footer.css";
import logo from '../images/2.png'
import { Link } from 'react-router-dom';
const Bubble = () => {

  const categories = [
    'Technology',
    'Science',
    'Health',
    'Travel',
    'Food',
    'Education',
    'Finance',
 
  ];


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
    <div className="main" >
      <div className="footer">
        <div className="bubbles">
          {bubbleElements}
        </div>
        <div className="content">
          
        <div className="container">
				<div className="row">
					<div className="col-md-3" style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
				
              <img src={logo} alt="" className="img-fluid"/>
              
                      {/* <div className="footer-about mt-2">
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  </p>
                      </div> */}

					</div>
					<div className="col-md-3">
						<div className="useful-link">
							<h2>Useful Links</h2>
							{/* <img src="./assets/images/about/home_line.png" alt="" className="img-fluid"> */}
							<div className="use-links">
								<li><a href="/"><i className="fa-solid fa-angles-right"></i> Home</a></li>
								<li><a href="about.html"><i className="fa-solid fa-angles-right"></i> About Us</a></li>
								<li><a href="gallery.html"><i className="fa-solid fa-angles-right"></i> Gallery</a></li>
								<li><a href="/contactUs"><i className="fa-solid fa-angles-right"></i> Contact</a></li>
                
							</div>
						</div>

					</div>
                    <div className="col-md-3">
                        <div className="social-links">
							<h2>Follow Us</h2>
							{/* <img src={logo} alt=""/> */}
							<div className="social-icons">
								<li><a href="https://www.facebook.com/people/FrameRang/100083271771990/"><i className="fa-brands fa-facebook-f"></i> Facebook</a></li>
								<li><a href="https://www.instagram.com/framerang/"><i className="fa-brands fa-instagram"></i> Instagram</a></li>
								{/* <li><a href=""><i className="fa-brands fa-linkedin-in"></i> Linkedin</a></li> */}
							</div>
						</div>
                    

                    </div>
					<div className="col-md-3">
						<div className="address">
							<h2>Address</h2>
							{/* <img src={logo} alt="" className="img-fluid"/> */}
							<div className="address-links">
								<li className="address1"><i className="fa-solid fa-location-dot"></i> Kolathur ramankulam-
									Malappuram Dt 
								   Kerala 679338</li>
								   <li><a href=""><i className="fa-solid fa-phone"></i> +91 90904500112</a></li>
								   <li><a href=""><i className="fa-solid fa-envelope"></i> mail@1234567.com</a></li>
							</div>
						</div>
					</div>
                  
				</div>
			</div>
        </div>
      </div>
    </div>
  );
};

export default Bubble;



// import React from "react";
// import "../MainCss/Footer.css";
// import { Col, Row } from "react-bootstrap";

// const Footer = () => {
//   return (
//     <>
//       <div>
//         <Row className="footer">
//           <Col>
//             <img
//               className="img"
//               src="https://framerang.com/cdn/shop/files/ll_copy.png?v=1712908551&width=135"
//               alt=""
//             />
//           </Col>
//           <Col>
//             <div className="form-group row">
//               <div className="col-sm-10 m-1">
//                 <input
//                   type="email"
//                   className="form-control form-control-sm"
//                   id="colFormLabelSm"
//                   placeholder="Name"
//                 />
//               </div>
//             </div>
//             <div className="form-group row">
//               <div className="col-sm-10 m-1">
//                 <input
//                   type="email"
//                   className="form-control form-control-sm"
//                   id="colFormLabelSm"
//                   placeholder="E-Mail"
//                 />
//               </div>
//             </div>
//             <div className="form-group row">
//               <div className="col-sm-10 m-1">
//                 <textarea
//                   type="email"
//                   className="form-control form-control-sm"
//                   id="colFormLabelSm"
//                   placeholder="Message"
//                 />
//               </div>
//               <button className="fbtn">SUBMIT</button>
//               <div>Follow Us &nbsp;
//               <i className="fa fa-instagram m-1 "></i> &nbsp;
//               <i className="&nbsp fa fa-facebook-f"></i>

//               </div>
              
//             </div>
//           </Col>
//           <Col>
//             <div>
//               <b>CONTACT US</b>
//             </div>
//             <div>
//               <b>Address:</b>
//               No:Niwaru road
//             </div>
//             <div>
//               <b>Call:</b>
//               67676767
//             </div>
//             <div>
//               <b>E-mail:</b>
//               abc@123
//             </div>
//           </Col>
//           <Col>
//             <div>
//               <b>NAVIGATE</b>
//             </div>
//             <div>About Us</div>
//             <div>Privacy Policy</div>
//             <div>Terms and condition</div>
//             <div>Shipping and return</div>
//           </Col>
//         </Row>
//       </div>
//     </>
//   );
// };

// export default Footer;
