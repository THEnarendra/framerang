import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
// import img from '../images/black-white-illustration-man-with-short-hair-black-white-face.jpg'

const Popup = ({ togglePopup, id, img }) => {
  const [open, setOpen] = useState(false)
  const img1 = [img]

  return (
    <div className="modal-popup">
      {img1.filter((e) => e.id === id).map((data) => (

        <Row style={{ position: "relative" }} className='row1' >
          <span onClick={togglePopup} style={{ position: "absolute", right: "-65vw", top: "5%", cursor: "pointer" }}>❌</span>

          <Col style={{display:"flex",justifyContent:"center",alignItems:"center"}} lg={6}>
            <img className='img12' src={data.productImage.url} alt="" />
          </Col>

          <Col style={{display:"flex",justifyContent:"center",flexDirection:"column"}}  lg={6}>

            {
              open === false ? (
                <>

                  <p>Framerang</p>
                  <h1>{data.productName}</h1>
                  <span>10*5 inches </span><br />
                  <span>Single pcs</span>
                  <br />
                  <span style={{ textDecoration: "line-through", color: "gray" }}>Rs. {data.oldPrice}</span>&nbsp;&nbsp;&nbsp;<span style={{ fontSize: "22px" }}>Rs. {data.newPrice}</span><br />
                  <p>Size</p>
                  <div>
                    
                  <button className='bt3'>A3</button>
                    
                  <button className='bt3 ms-2'>A4</button><br /><br />
                   
                  </div>
                  <button onClick={() => setOpen(true)} className='bt4'>ADD TO CART</button>
                  <br /><br />
                </>
              ) : (
                <form class="row g-3">
  <div class="col-md-12">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4"/>
  </div>
 
  <div class="col-12">
    <label for="inputAddress" class="form-label">Country</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div class="col-6">
    <label for="inputAddress" class="form-label">First Name</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div class="col-6">
    <label for="inputAddress" class="form-label">Last Name</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Full Address</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div class="col-md-5">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-4">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity"/>
  </div>
  <div class="col-md-3">
    <label for="inputCity" class="form-label">Pincode</label>
    <input type="text" class="form-control" id="inputCity"/>
  </div>
<br />
  <div class="col-12">
    <button style={{width:"100%"}} type="submit" class="btn btn-primary">Pay Now</button>
  </div>
</form>
              )
            }

          </Col>
        </Row>
      ))}
    </div>
  )
}

export default Popup
