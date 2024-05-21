import React from 'react'
import { Col, Row } from 'react-bootstrap'
// import img from '../images/black-white-illustration-man-with-short-hair-black-white-face.jpg'

const Popup = ({togglePopup,id, img}) => {

  const img1 = [img]

  return (
    <div className="modal-popup">
      {img1.filter((e) => e.id === id).map((data) => (

      <Row style={{position:"relative"}}  className='row1' >
      <span onClick={togglePopup} style={{position:"absolute",right:"-65vw",top:"5%",cursor:"pointer"}}>❌</span>

        <Col lg={6}>
          <img className='img12'  src={data.productImage.url} alt="" />
        </Col>

        <Col lg={6}>
          <p>Framerang</p>
          <h1>{data.productName}</h1>
          <span>10*5 inches </span><br />
          <span>Single pcs</span>
          <br />
        <span style={{ textDecoration: "line-through", color: "gray" }}>Rs. {data.oldPrice}</span>&nbsp;&nbsp;&nbsp;<span style={{ fontSize: "22px" }}>Rs. {data.newPrice}</span><br />
          <p>Size</p>
          <button className='bt3'>A3</button>
          <button className='bt3 ms-2'>A4</button><br /><br />
          <button className='bt4'>ADD TO CART</button>
          <br /><br/>
          {/* <a style={{marginLeft:"60%"}} href="">more information >></a> */}
          {/* <button className='bt4 ms-3'>Buy now</button> */}
        </Col>
      </Row>
      ))}
    </div>
  )
}

export default Popup
