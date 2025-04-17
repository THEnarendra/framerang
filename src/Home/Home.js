import React, { useEffect, useState, useRef, useMemo } from 'react';
import Home_carousel from '../Components/HomeCarousel/Home_carousel';
import { Col, Row } from 'react-bootstrap';
import "../MainCss/main.css";
import { Home_Swiper } from './Home_Swiper';
import Product_Slider from '../Components/ProductSlider/Product_Slider';
import AOS from 'aos';
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { useProducts } from '../Context/ProductContext';
import CategoryCarousel from '../Components/CategoryCarousel/CategoryCarousel';
import TestimonialSlider from '../Components/TestimonialSlider/TestimonialSlider';

const app_url = process.env.REACT_APP_API_URL;

// Utility function for filtering products
const filterProductsByCategory = (products, category, limit = 5) => {
  if (!products || !Array.isArray(products)) return [];
  return products
    .filter(product => 
      product.category && 
      product.category.toLowerCase() === category.toLowerCase()
    )
    .slice(0, limit);
};

export const Home = ({ theme, setFooter, setIsCartOpen }) => {
  setFooter(true);
  const [details, setDetails] = useState([]);
  const [products, setProducts] = useState([]);
  const [images, setImages] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const detailsRef = useRef(null);
  const productsRef = useRef(null);

  // Get all filtered products using useMemo for optimization
  const { frames, photoFrames, posters } = useMemo(() => ({
    frames: filterProductsByCategory(products, "frames"),
    photoFrames: filterProductsByCategory(products, "photo frames"),
    posters: filterProductsByCategory(products, "posters")
  }), [products]);

  //Get all Sections Data
  const getData = () => {
    fetch(`${app_url}/allSectionContent`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((res) => {
        const data = res.content;
        detailsRef.current = data;
        setDetails(data);
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  };

  const allProducts = () => {
    fetch(`${app_url}/allProducts`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((res) => {
        const products = res.data;
        productsRef.current = products;
        setProducts(products);
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  };

  useEffect(() => {
    if (!detailsRef.current) {
      getData();
    } else {
      setDetails(detailsRef.current);
    }

    if (!productsRef.current) {
      allProducts();
    } else {
      setProducts(productsRef.current);
    }

    AOS.init();
    AOS.refresh();
  }, []); 

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const desktopImages = [
    require('../images/HB1.jpg'),
    require('../images/HB2.jpg'),
    require('../images/HB3.jpg'),
  ];

  const mobileImages = [
    require('../images/HBM1.jpg'),
    require('../images/HBM2.jpg'),
    require('../images/HBM3.jpg'),
  ]

  useEffect(() => {
    setImages(isMobile ? mobileImages : desktopImages);
  }, [isMobile]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
        },
      },
    ],
  };

  return (
    <div>
      {/* Hero Slider */}
      <div className="hero-slider-wrapper">
        <div className="hero-slider-wrapper-container">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Slide ${index + 1}`} className="hero-slider-image" />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <CategoryCarousel/>

      {/* Posters Section */}
      {details.filter((e) => e.sectionId == 1).map((data) => (
        <Row key={data.id} className='details-carousel mx-0 my-5'>
          <Col lg={6}>
            <Home_carousel img={data.images} />
          </Col>
          <Col lg={6} style={{ display: "flex", justifyContent: "center", flexDirection: "column", padding: "4%" }}>
            <h1 className='firsth1'>Transform Your Space With Stunning Posters</h1><br />
            <h5 style={{ color: theme === "darkTheme" ? "rgba(255,255,255,0.6)" : "gray" }}>
              Enhance your Space of Room / Study Room Walls with our stunning posters! Explore a wide variety of designs to elevate your walls and spark inspiration.
            </h5>
            <Link to="/posters">
              <button className='bt1'>Our Posters</button>
            </Link>
          </Col>
        </Row>
      ))} 

      {/* Products Slider for Frames */}
      <div className='posters-swiper'>
        <h1 className='mb-4'>Our Best Selling Frames</h1>
        {frames.length === 0 ? (
          <h3>No frames found</h3>
        ) : (
          <>
      <Product_Slider setIsCartOpen={setIsCartOpen} products={frames} />
      <div className="text-center mt-4">
        <Link to="/frames" className="view-all-btn">
          View All Frames →
        </Link>
      </div>
    </>
        )}
      </div>

      {/* Value Propositions Section */}
      <div className="value-props" data-aos="fade-up">
        <Row className="justify-content-center">
          {[
            {icon: 'fa-truck-fast', title: 'Free Shipping', text: 'On all orders over $50'},
            {icon: 'fa-shield-halved', title: '2-Year Warranty', text: 'Quality guaranteed'},
            {icon: 'fa-credit-card', title: 'Secure Payment', text: '100% secure checkout'},
            {icon: 'fa-headset', title: '24/7 Support', text: 'Dedicated support'}
          ].map((item, i) => (
            <Col md={3} sm={6} key={i} className="value-prop">
              <i className={`fa-solid ${item.icon}`}></i>
              <h5>{item.title}</h5>
              <p>{item.text}</p>
            </Col>
          ))}
        </Row>
      </div>

      {/* Products Slider for Photo Frames */}
      <div className='posters-swiper'>
        <h1 className='mb-4'>Our Best Selling Photo Frames</h1>
        {photoFrames.length === 0 ? (
          <h3>No photo frames found</h3>
        ) : (
          <>
      <Product_Slider setIsCartOpen={setIsCartOpen} products={photoFrames} />
      <div className="text-center mt-4">
        <Link to="/frames" className="view-all-btn">
          View All Photo Frames →
        </Link>
      </div>
    </>
        )}
      </div>

      {/* Frames Section */}
      {details.filter((e) => e.sectionId == 3).map((data) => (
        <Row key={data.id}>
          <Col className='frames-section-swiper'>
            <Home_Swiper img={data.images} />
          </Col>
          <Col className='frames-section-content' lg={6}>
            <h1>Brighten Your Walls With Unforgettable Art</h1><br />
            <h5 style={{ color: theme === "darkTheme" ? "rgba(255,255,255,0.6)" : "gray" }}>
              Add flair to your space with our captivating posters! Discover a diverse range of designs that will elevate your walls and inspire creativity.
            </h5>
            <Link to="/frames">
              <button className='bt1'>Frames</button>
            </Link>
          </Col>
        </Row>
      ))}

      {/* Testimonials */}
      <TestimonialSlider theme={theme} />
    </div>
  );
};