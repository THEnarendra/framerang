import React from 'react';
import "../MainCss/Footer.css";

const Bubble = () => {
  const bubbleElements = [];
  for (let i = 0; i < 128; i++) {
    const size = `${2 + Math.random() * 4}rem`;
    const distance = `${6 + Math.random() * 4}rem`;
    const position = `${-5 + Math.random() * 110}%`;
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
    <div className="main">
      <div className="footer">
        <div className="bubbles">
          {bubbleElements}
        </div>
        <div className="content">
          <div>
            <div>
              <b>Eldew</b>
              <a href="">Secuce</a>
              <a href="">Drupand</a>
              <a href="">Oceash</a>
              <a href="">Ugefe</a>
              <a href="">Babed</a>
            </div>
            <div>
              <b>Spotha</b>
              <a href="">Miskasa</a>
              <a href="">Agithe</a>
              <a href="">Scesha</a>
              <a href="">Lulle</a>
            </div>
            <div>
              <b>Chashakib</b>
              <a href="">Chogauw</a>
              <a href="">Phachuled</a>
              <a href="">Tiebeft</a>
              <a href="">Ocid</a>
              <a href="">Izom</a>
              <a href="">Ort</a>
            </div>
            <div>
              <b>Athod</b>
              <a href="">Pamuz</a>
              <a href="">Vapert</a>
              <a href="">Neesk</a>
              <a href="">Omemanen</a>
            </div>
          </div>
          <div>
            <a href="https://codepen.io/z-" target="_blank" className="image" style={{ backgroundImage: 'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/199011/happy.svg")' }}></a>
            <p>©2019 Not Really</p>
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
//               <div class="col-sm-10 m-1">
//                 <input
//                   type="email"
//                   class="form-control form-control-sm"
//                   id="colFormLabelSm"
//                   placeholder="Name"
//                 />
//               </div>
//             </div>
//             <div className="form-group row">
//               <div class="col-sm-10 m-1">
//                 <input
//                   type="email"
//                   class="form-control form-control-sm"
//                   id="colFormLabelSm"
//                   placeholder="E-Mail"
//                 />
//               </div>
//             </div>
//             <div className="form-group row">
//               <div class="col-sm-10 m-1">
//                 <textarea
//                   type="email"
//                   class="form-control form-control-sm"
//                   id="colFormLabelSm"
//                   placeholder="Message"
//                 />
//               </div>
//               <button className="fbtn">SUBMIT</button>
//               <div>Follow Us &nbsp;
//               <i class="fa fa-instagram m-1 "></i> &nbsp;
//               <i class="&nbsp fa fa-facebook-f"></i>

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
