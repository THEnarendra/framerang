
import React, { useEffect } from 'react';
import Home_carousel from './Home_carousel';
import { Col, Row } from 'react-bootstrap';
import "../MainCss/main.css";
import { Home_Swiper } from './Home_Swiper';
import home_video from '../images/home_video.webm';
import logo from '../images/2.png';
import Product_Slider from './Product_Slider';
import AOS from 'aos';
import "aos/dist/aos.css";

export const Home = ({ theme, setTheme }) => {
    const lightTheme = "lightTheme";

    useEffect(() => {

        AOS.init();
        AOS.refresh();

        const video = document.getElementById('homeVideo');
        if (video) {
            video.play().catch(error => {
                // Autoplay failed, handle error
                console.error('Autoplay failed:', error);
            });
        }
    }, []);

    document.getElementsByClassName(lightTheme);

    return (
        <div >
            <div style={{ display:"flex", justifyContent:"center"}}>
            <video style={{objectFit:"cover", width:"100vw", height:"80vh"}} id="homeVideo" autoPlay loop muted>
                <source src={home_video} type="video/webm" />
                Your browser does not support the video tag.
            </video>
            </div>
           

            <Row>
                <Col lg={6} style={{ display: "flex", justifyContent: "center", flexDirection: "column", padding: "4%" }}>
                    <h1 className='firsth1'>Brighten Your Walls With Unforgettable Art.</h1><br />
                    <h5  style={{ color: theme === "darkTheme" ? "rgba(255,255,255,0.6)" : "gray" }}>Add flair to your space with our captivating posters! Discover a diverse range of designs that will elevate your walls and inspire creativity."</h5>
                    <button className='bt1'>Our Posters</button>
                </Col>
                <Col lg={6}>
                    <Home_carousel />
                </Col>
            </Row>

            <div style={{
                position:"relative",
                padding: "3%", textAlign: "center", backgroundColor: "rgb(88 41 158 / 22%)",
                borderRadius: "30px", margin: "5% 2% 5% 2%", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
            }}>
                <h1 className='firsth1'>Customize your pictures into Posters</h1><br />
                <h5 style={{ color: theme === "darkTheme" ? "rgba(255,255,255,0.6)" : "gray" }}>Discover a diverse range of designs that will elevate your walls and inspire creativity."</h5>
                <button className='bt2'>Customize your Posters</button>
                
            <img style={{width:"8%", position:"absolute", top:"85%",left:"0"}} src={logo} alt="" className='logo_wheel' />
            </div>

            <Row>
                <Col style={{ display: "flex", justifyContent: "center", alignItems: "center" }}><Home_Swiper /></Col>
                <Col lg={6} style={{ display: "flex", justifyContent: "center", flexDirection: "column", padding: "4%" }}>
                    <h1 className='firsth1'>Brighten Your Walls With Unforgettable Art.</h1><br />
                    <h5 style={{ color: theme === "darkTheme" ? "rgba(255,255,255,0.6)" : "gray" }}>Add flair to your space with our captivating posters! Discover a diverse range of designs that will elevate your walls and inspire creativity."</h5>
                    <button className='bt1'>Our Posters</button>
                </Col>
            </Row>

            <div
            data-aos="fade-up" data-aos-duration="5000"
             style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",marginTop:"5%"}}>
                <h1>Our Best Selling Posters & Frames</h1>
            
                <Product_Slider/>
            </div>

        </div>
    );
};

