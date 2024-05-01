import React from "react";
import "../MainCss/Footer.css";
import { Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <div>
        <Row className="footer">
          <Col>
            <img
              className="img"
              src="https://framerang.com/cdn/shop/files/ll_copy.png?v=1712908551&width=135"
              alt=""
            />
          </Col>
          <Col>
            <div className="form-group row">
              <div class="col-sm-10 m-1">
                <input
                  type="email"
                  class="form-control form-control-sm"
                  id="colFormLabelSm"
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="form-group row">
              <div class="col-sm-10 m-1">
                <input
                  type="email"
                  class="form-control form-control-sm"
                  id="colFormLabelSm"
                  placeholder="E-Mail"
                />
              </div>
            </div>
            <div className="form-group row">
              <div class="col-sm-10 m-1">
                <textarea
                  type="email"
                  class="form-control form-control-sm"
                  id="colFormLabelSm"
                  placeholder="Message"
                />
              </div>
              <button className="fbtn">SUBMIT</button>
              <div>Follow Us &nbsp;
              <i class="fa fa-instagram m-1 "></i> &nbsp;
              <i class="&nbsp fa fa-facebook-f"></i>

              </div>
              
            </div>
          </Col>
          <Col>
            <div>
              <b>CONTACT US</b>
            </div>
            <div>
              <b>Address:</b>
              No:Niwaru road
            </div>
            <div>
              <b>Call:</b>
              67676767
            </div>
            <div>
              <b>E-mail:</b>
              abc@123
            </div>
          </Col>
          <Col>
            <div>
              <b>NAVIGATE</b>
            </div>
            <div>About Us</div>
            <div>Privacy Policy</div>
            <div>Terms and condition</div>
            <div>Shipping and return</div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Footer;
