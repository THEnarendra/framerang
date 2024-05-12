import React from 'react'
import Home_carousel from './Home_carousel'
import { Col, Row } from 'react-bootstrap'
import "../MainCss/main.css"
import { Home_Swiper } from './Home_Swiper'
import home_video from '../images/home_video.webm'

export const Home = ({theme,setTheme}) => {
    const lightTheme ="lightTheme";

    document.getElementsByClassName(lightTheme);
    return (
        <div style={{marginTop:"7%"}}>

        <div>
            <video width="550" height="350">
            <source src={home_video} type="video/webm" />
            Your browser does not support the video tag.
             </video>
        </div>

{/* <video class="launchvid"
src={home_video} autoplay="" loop="" id="myVideo"></video> */}

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

            <div style={{padding: "3%", textAlign: "center", backgroundColor: "rgb(88 41 158 / 22%)",
                borderRadius: "30px", margin: "2%", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
             }}>
                    <h1 className='firsth1'>Customize your pictures into Posters</h1><br />
                    <h5 style={{ color: theme==="darkTheme" ?"rgba(255,255,255,0.6)":"gray" }}>Discover a diverse range of designs that will elevate your walls and inspire creativity."</h5>
                <button className='bt2'>Customize your Posters</button>
            </div>
            
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
