import React from 'react'
import { Col, Row } from 'react-bootstrap';
import '../MainCss/ContactUs.css'

const ContactUs = ({theme,setTheme}) => {
  return (
    <>
    <Row className='row'>

        <Col className='col1'>
            <h1>Contact Us</h1>
            <p>Hey we are framerang providing high quality picture fraems for you and your family your will find very high wqualtiyte </p>
            <span>Headquaters</span>
            <p>Lalchandpura kumawato ki dhani</p>
        </Col>

        <Col className='col2'>
            <p>Please allow 1-2 business days to respond to your inquiry.</p>
            <h2>Lets connect</h2>
            <p>First Name</p>
            <input type="text" placeholder=''/>
            <p>Last Name</p>
            <input type="text" placeholder=''/>
            <p>Email Address</p>
            <input type="email" placeholder=''/>
            <p>Phone Number</p>
            <input type="number" placeholder=''/>
            <p>Your Query?</p>
            <input type="textbox" placeholder=''/>

        </Col>
    </Row>
    </>
  )
}

export default ContactUs
