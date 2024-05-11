import React from 'react'
import Home_carousel from './Home_carousel'
import { Col, Row } from 'react-bootstrap'
import "../MainCss/main.css"
import { Home_Swiper } from './Home_Swiper'

export const Home = ({theme,setTheme}) => {
    const lightTheme ="lightTheme";

    document.getElementsByClassName(lightTheme);
    return (
        <div style={{marginTop:"7%"}}>
            <Row>
                <Col lg={6} style={{ display: "flex", justifyContent: "center", flexDirection: "column", padding: "4%" }}>
                    <h1 className='firsth1'>Brighten Your Walls With Unforgettable Art.</h1><br />
                    <h5 style={{ color: theme==="darkTheme" ?"rgba(255,255,255,0.6)":"gray" }}>Add flair to your space with our captivating posters! Discover a diverse range of designs that will elevate your walls and inspire creativity."</h5>
                <button className='bt1'>Our Posters</button>
                </Col>
                <Col lg={6}>
                    <Home_carousel />

                </Col>
            </Row>

            <Row>
                <Col style={{ display: "flex", justifyContent:"center", alignItems:"center"}}><Home_Swiper/></Col>
                <Col lg={6} style={{ display: "flex", justifyContent: "center", flexDirection: "column", padding: "4%" }}>
                    <h1 className='firsth1'>Brighten Your Walls With Unforgettable Art.</h1><br />
                    <h5 style={{ color: theme==="darkTheme" ?"rgba(255,255,255,0.6)":"gray" }}>Add flair to your space with our captivating posters! Discover a diverse range of designs that will elevate your walls and inspire creativity."</h5>
                <button className='bt1'>Our Posters</button>
                </Col>
            </Row>
            

        </div>
    )
}
