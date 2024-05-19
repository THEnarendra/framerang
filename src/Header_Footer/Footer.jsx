import React from 'react';
import "../MainCss/Footer.css";

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
    <div className="main" >
      <div className="footer">
        <div className="bubbles">
          {bubbleElements}
        </div>
        <div className="content">
          
          {/* <div>
            <a href="https://codepen.io/z-" target="_blank" className="image" style={{ backgroundImage: 'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/199011/happy.svg")' }}></a>
            <p>©2019 Not Really</p>
          </div> */}
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
