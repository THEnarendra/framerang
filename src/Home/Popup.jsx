import React from 'react'
import { Col, Row } from 'react-bootstrap'
import img from '../images/black-white-illustration-man-with-short-hair-black-white-face.jpg'

const Popup = ({togglePopup}) => {
  return (
    <div className="modal-popup">
      <Row style={{position:"relative"}}  className='row1' >
      <span onClick={togglePopup} style={{position:"absolute",right:"-77vw",top:"5%",cursor:"pointer"}}>❌</span>

        <Col lg={6}>
          <img className='img12'  src={img} alt="" />
        </Col>

        <Col lg={6}>
          <span>Framerang</span>
          <h1>Anime Posters collection</h1>
          <span>10*5 inches </span><br />
          <span>Single pcs</span>
          <br />
        <span style={{ textDecoration: "line-through", color: "gray" }}>Rs. 50</span>&nbsp;&nbsp;&nbsp;<span style={{ fontSize: "22px" }}>Rs. 100</span>
          <p>Size</p>
          <button className='bt3'>A3</button>
          <button className='bt3 ms-2'>A4</button><br />
          
        </Col>
      </Row>
    </div>
  )
}

export default Popup
