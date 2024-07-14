import React, { useEffect, useState } from 'react';
import Home_carousel from './Home_carousel';
import { Col, Row } from 'react-bootstrap';
import "../MainCss/main.css";
import { Home_Swiper } from './Home_Swiper';
import home_video from '../images/home_video.webm';
import Product_Slider from './Product_Slider';
import AOS from 'aos';
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';

export const Home = ({ theme, setFooter, setIsCartOpen }) => {
  setFooter(true);
  const lightTheme = "lightTheme";

  const [details, fetchDetails] = useState([]);
  const [products, setProducts] = useState([]);

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
        fetchDetails(data);
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  };

  const allProducts = () => {
    fetch(`https://framerang-backend.vercel.app/api/v1/allProducts`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((res) => {
        const products = res.data;
        console.log('Fetched Products:', products); // Log the fetched products
        setProducts(products);
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  };

  useEffect(() => {
    getData();
    allProducts();
    AOS.init();
    AOS.refresh();

    const video = document.getElementById('homeVideo');
    if (video) {
      video.play().catch(error => {
        console.error('Autoplay failed:', error);
      });
    }
  }, []);

  const subCategory = "Combo Posters";

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <video style={{ objectFit: "cover", width: "100vw", height: "100vh" }} id="homeVideo" autoPlay loop muted>
          <source src={home_video} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>

      {details.filter((e) => e.sectionId == 1).map((data) => (
        <Row key={data.id}>
          <Col lg={6}>
            <Home_carousel img={data.images} />
          </Col>
          <Col lg={6} style={{ display: "flex", justifyContent: "center", flexDirection: "column", padding: "4%" }}>
            <h1 className='firsth1'>{data.heading}</h1><br />
            <h5 style={{ color: theme === "darkTheme" ? "rgba(255,255,255,0.6)" : "gray" }}>{data.description}</h5>
            <Link to="/frames">
              <button className='bt1'>{data.buttonText}</button>
            </Link>
          </Col>
        </Row>
      ))}

      {details.filter((e) => e.sectionId == 2).map((data) => (
        <div className='customize' key={data.id} style={{
          position: "relative",
          padding: "3%", textAlign: "center",
           boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        }}>
          <h1 className='firsth1'>{data.heading}</h1><br />
          <h6 style={{ color:"rgba(0,0,0,0.8)"}}>{data.description}</h6>
          <Link to='/customize'>
            <button className='bt2'>{data.buttonText}</button>
          </Link>
          {data.images && data.images.map((img, index) => (
            <img key={index} style={{ width: "8%", position: "absolute", top: "85%", left: "0",zIndex:9 }} src={img.url} alt="" className='logo_wheel' />
          ))}
        </div>
      ))}

      {details.filter((e) => e.sectionId == 3).map((data) => (
        <Row key={data.id}>
          <Col style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Home_Swiper img={data.images} />
          </Col>
          <Col lg={6} style={{ display: "flex", justifyContent: "center", flexDirection: "column", padding: "4%" }}>
            <h1 className='firsth1'>{data.heading}</h1><br />
            <h5 style={{ color: theme === "darkTheme" ? "rgba(255,255,255,0.6)" : "gray" }}>{data.description}</h5>
            <Link to="/posters">

              <button className='bt1'>{data.buttonText}</button>
            </Link>
          </Col>
        </Row>
      ))}

      <div style={{ textAlign: "center", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", marginTop: "5%" }}>
        <h1 className='mb-4'>Our Best Selling Posters & Frames</h1>
        <Product_Slider setIsCartOpen={setIsCartOpen} products={products} category="poster" />
      </div>

      <div style={{ marginTop: "-7%" }} className='ms-4 me-1'>
        {details.filter((e) => e.sectionId == 6).map((data) => (
          <Row key={data.id} className="comboRow" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Col lg={6} sm={12}>
              {data.images?.map((img, index) => (
                <img key={index} className="comboimg" src={img.url} alt="" />
              ))}
            </Col>
            <Col className="mt-4" lg={6} sm={12}>
              <h2>{data.heading}</h2>
              <span className="mt-2">{data.description}</span>
              <br />
              <Link to={`/Combos`}>
                <button className='bt1 mt-4'>{data.buttonText}</button>
              </Link>
            </Col>
          </Row>
        ))}
      </div>
    </div>
  );
};
