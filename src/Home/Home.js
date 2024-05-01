import React from 'react'
import Home_carousel from './Home_carousel'
import { Col, Row } from 'react-bootstrap'
import "../MainCss/main.css"
import { Home_Swiper } from './Home_Swiper'
export const Home = () => {
    return (
        <div style={{marginTop:"5%"}}>
            <Row>
                <Col lg={6} style={{ display: "flex", justifyContent: "center", flexDirection: "column", padding: "4%" }}>
                    <h1 className='firsth1'>Brighten Your Walls With Unforgettable Art.</h1><br />
                    <h5 style={{ color: "rgba(255,255,255,0.6)" }}>Add flair to your space with our captivating posters! Discover a diverse range of designs that will elevate your walls and inspire creativity."</h5>
                <button className='bt1'>Our Posters</button>
                </Col>
                <Col lg={6}>
                    <Home_carousel />

                </Col>
            </Row>
            <Home_Swiper/>

        </div>
    )
}
