import React from 'react'
import { Col, Row } from 'react-bootstrap';
import '../MainCss/ContactUs.css'

const ContactUs = ({theme,setTheme}) => {
  return (
    <>
    <Row className='row'>

        <Col sm={12} lg={6} className='col1'>
        <form class="row g-3">

            <h1>Contact Us</h1>
            <p>Hey we are framerang providing high quality picture fraems for you and your family your will find very high wqualtiyte </p>
            <span>Headquaters</span>
            <p>Lalchandpura kumawato ki dhani</p>
        </form>
        </Col>

        <Col sm={12} lg={6} className='col2'>
            <form class="row g-3">
            <p>Please allow 1-2 business days to respond to your inquiry.</p>
            <h2>Lets connect</h2>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">First Name</label>
    <input type="text" class="form-control" id="inputName"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Last Name</label>
    <input type="text" class="form-control" id="inputName"/>
  </div> 
  <div class="col-6 mt-4">
    <label for="inputAddress" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4" placeholder="xyz@gmail.com"/>
  </div>
  <div class="col-6 mt-4">
    <label for="inputAddress2" class="form-label">Phone Number</label>
    <input type="text" class="form-control" id="inputAddress2" />
  </div>
  <div class="col-md-12 mt-4">
    <label for="inputCity" class="form-label">What is your query ?</label>
    <input type="text" class="form-control" id="inputCity"/>
  </div>

  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="bt2">Submit</button>
  </div>
</form>

        </Col>
    </Row>
    </>
  )
}

export default ContactUs
