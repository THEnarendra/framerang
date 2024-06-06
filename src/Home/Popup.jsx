import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
// import img from '../images/black-white-illustration-man-with-short-hair-black-white-face.jpg'

const Popup = ({ togglePopup, id, img }) => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(1);

  const increment = () => {
    setValue(prevValue => prevValue + 1);
  };

  const decrement = () => {
    setValue(prevValue => (prevValue > 0 ? prevValue - 1 : 0));
  };
  const img1 = [img]

  return (
    <div className="modal-popup">
      
      {img1.filter((e) => e.id === id).map((data) => (

        <Row style={{ position: "relative" }} className='row1' >
          <span onClick={togglePopup} style={{ position: "absolute", right: "-57vw", top: "2%", cursor: "pointer" }}>❌</span>

          <Col style={{display:"flex",alignItems:"center",flexDirection:"column"}} lg={6}>
            <img className='img12' src={data.productImage.url} alt="" />
            
            {/* <div>
      <p>Set the quantity</p>
      <div className="quantity-input">
        <button
          className="quantity-input__modifier quantity-input__modifier--left"
          onClick={decrement}
        >
          &mdash;
        </button>
        <input
          className="quantity-input__screen"
          type="text"
          value={value}
          readOnly
        />
        <button
          className="quantity-input__modifier quantity-input__modifier--right"
          onClick={increment}
        >
          &#xff0b;
        </button>
      </div>
    </div> */}
    
          </Col>

          <Col style={{display:"flex",justifyContent:"center",flexDirection:"column"}}  lg={6}>


                  <span>Framerang</span>
                  <h1>{data.productName}</h1>
                  <span>10*5 inches </span><br />
                  <span>Single pcs</span>
                  <div>

                  <span style={{ textDecoration: "line-through", color: "gray" }}>Rs. {data.oldPrice}</span>&nbsp;&nbsp;&nbsp;<span style={{ fontSize: "22px" }}>Rs. {data.newPrice}</span><br />
                  </div>
                  <p>Size</p>
                  <div>
                    
                  <button className='bt3'>A3</button>
                    
                  <button className='bt3 ms-2'>A4</button><br /><br />
                   
                  </div>
                  <button onClick={() => setOpen(true)} className='bt4'>ADD TO CART</button>
                  <br /><br />
              
          </Col>
        </Row>
      ))}
    </div>
  )
}

export default Popup
