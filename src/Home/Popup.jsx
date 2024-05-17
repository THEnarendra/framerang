import React from 'react'
import { Col, Row } from 'react-bootstrap'
import img from '../images/black-white-illustration-man-with-short-hair-black-white-face.jpg'

const Popup = () => {
  return (
    <div className="modal-popup" id='modal-popu'                                          >
      <Row className='row1' style={{width:"100vw"}}>
        <Col lg={6}>
    <img src={img} alt="" />
        </Col>

        <Col lg={6}>
        <h1>Anime Posters collection</h1>
        <h3 className='creator'>{img.productName}</h3>( 10*5 inches ) <br/> Single pcs 
<p><span style={{textDecoration:"line-through",color:"gray"}}>Rs.{img.oldPrice}</span>&nbsp;&nbsp;&nbsp;<span style={{fontSize:"22px"}}>Rs.{img.price}</span> </p>
        </Col>
      </Row>
</div>
  )
}

export default Popup
