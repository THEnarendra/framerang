
import React, { useEffect, useState } from 'react';
import Home_carousel from './Home_carousel';
import { Col, Row } from 'react-bootstrap';
import "../MainCss/main.css";
import { Home_Swiper } from './Home_Swiper';
import home_video from '../images/home_video.webm';
import logo from '../images/2.png';
import Product_Slider from './Product_Slider';
import AOS from 'aos';
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';

export const Home = ({ theme, setTheme }) => {
  const lightTheme = "lightTheme";

  const [details, fetchDetails] = useState([]);

  


  const getData = () => {
    fetch(`https://framerang-backend.vercel.app/api/v1/allSectionContent`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((res) => {
        const data = res.content;
        console.log(data, res);
        fetchDetails(data);

      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  };



  useEffect(() => {
    getData();

    AOS.init();
    AOS.refresh();

    const video = document.getElementById('homeVideo');
    if (video) {
      video.play().catch(error => {
        console.error('Autoplay failed:', error);
      });
    }
  }, []);

  document.getElementsByClassName(lightTheme);

  return (
    <div >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <video style={{ objectFit: "cover", width: "100vw", height: "90vh" }} id="homeVideo" autoPlay loop muted>
          <source src={home_video} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>


        {details.filter((e) => e.sectionId == 1).map((data) => (
      <Row>


          <Col lg={6} style={{ display: "flex", justifyContent: "center", flexDirection: "column", padding: "4%" }}>
            <h1 className='firsth1'>{data.heading}</h1><br />
            <h5 style={{ color: theme === "darkTheme" ? "rgba(255,255,255,0.6)" : "gray" }}>{data.description}</h5>
            <Link to="/posters">
              <button className='bt1'>{data.buttonText}</button>
            </Link>
          </Col>

        <Col lg={6}>
          <Home_carousel img={data.images} />
        </Col>
      </Row>
        ))}
{details.filter((e) => e.sectionId == 2).map((data) => (
      <div style={{
        position: "relative",
        padding: "3%", textAlign: "center", backgroundColor: "rgb(88 41 158 / 22%)",
        borderRadius: "30px", margin: "5% 2% 5% 2%", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
      }}>
        <h1 className='firsth1'>{data.heading}</h1><br />
        <h5 style={{ color: theme === "darkTheme" ? "rgba(255,255,255,0.6)" : "gray" }}>{data.description}</h5>
        <Link to='/customize'>
          <button className='bt2'>{data.buttonText}</button>
        </Link>
        {data.images && data.images.map((data)=>(

          <img style={{ width: "8%", position: "absolute", top: "85%", left: "0" }} src={data.url} alt="" className='logo_wheel' />
        ))}

      </div>
 ))}
 {details.filter((e) => e.sectionId == 3).map((data) => (
      <Row >
        <Col style={{ display: "flex", justifyContent: "center", alignItems: "center" }}><Home_Swiper img={data.images}  /></Col>

        <Col lg={6} style={{ display: "flex", justifyContent: "center", flexDirection: "column", padding: "4%" }}>
          <h1 className='firsth1'>{data.heading}</h1><br />
          <h5 style={{ color: theme === "darkTheme" ? "rgba(255,255,255,0.6)" : "gray" }}>{data.description}</h5>
          <Link to="/frames">

            <button className='bt1'>{data.buttonText}</button>
          </Link>
        </Col>
      </Row>
 ))}
      <div
        style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", marginTop: "5%", marginBottom: "5%" }}>
        <h1>Our Best Selling Posters & Frames</h1>

        <Product_Slider />
      </div>

    </div>
  );
};

