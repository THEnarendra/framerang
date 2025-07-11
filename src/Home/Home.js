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
import { Helmet } from 'react-helmet-async';


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
  const [details, setDetails] = useState([]);
  const [products, setProducts] = useState([]);
  const [images, setImages] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const detailsRef = useRef(null);
  const productsRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);


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
  setFooter(true);
}, [setFooter]);

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
    <>
    <Helmet>
  {/* Primary Meta Tags */}
    <title>Frame Rang || Custom Photo Frames & Wall Posters Online India | Frame Rang</title>
  <meta 
    name="description" 
    content="India's top custom frames & posters store. Create personalized photo frames, anime wall art / posters and much more. Free shipping ₹599+. Shop now!" 
  />
  <meta name="keywords" content="custom photo frames, anime posters India, personalized wall art, Marvel posters, birthday frames" />  
  <link rel="canonical" href="https://www.framerang.com/" />

  {/* Open Graph (OG) - Used by Instagram, Facebook, etc. */}
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.framerang.com/" />
  <meta property="og:title" content="Frame Rang | Custom Frames, Posters, Anime & More" />
  <meta property="og:description" content="Explore Frame Rang's unique collection of photo frames, anime posters, Marvel & DC wall art, and fully customizable designs." />
  <meta property="og:image" content="https://res.cloudinary.com/dvqbujync/image/upload/v1748854419/Untitled_design_riih2z.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:site_name" content="Frame Rang" />

  {/* Instagram-Specific */}
  <meta property="instagram:creator" content="@framerang" /> {/* Your IG handle */}
  <meta property="instagram:image" content="https://static.vecteezy.com/system/resources/previews/042/148/632/non_2x/instagram-logo-instagram-social-media-icon-free-png.png" />

  {/* YouTube (if linking to a video) */}
  {/* <meta property="og:video" content="https://youtube.com/watch?v=your-video-id" />
  <meta property="og:video:type" content="video/mp4" />
  <meta property="og:video:width" content="1280" />
  <meta property="og:video:height" content="720" /> */}

  {/* <script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Store",
  "name": "Frame Rang",
  "description": "India's leading custom frames and posters store",
  "url": "https://www.framerang.com",
  "openingHours": "Mo-Su 10:00-20:00"
}
</script> */}
</Helmet>

      <div>
      {/* Hero Slider */}
      <div className="hero-slider-wrapper">
        <div className="hero-slider-wrapper-container">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <img src={image} 
                alt={`Slide ${index + 1}`} 
                // alt={`${index === 0 ? 'Custom Photo Frames' : 'Wall Posters'} - Frame Rang`}
                loading="lazy"
                 width="1200"
                height="630"
                className="hero-slider-image" />
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
            <h1 className='firsth1'>Custom Photo Frames & Anime Posters Online - Personalize Your Space</h1><br />
            <h5 style={{ color: theme === "darkTheme" ? "rgba(255,255,255,0.6)" : "gray" }}>
            India's #1 store for <strong>personalized wall art</strong>. Shop <strong>custom frames</strong>, 
            <strong>Marvel/DC posters</strong>, and <strong>anime wall decor</strong> with 2-year warranty. 
            <strong>Free shipping</strong> on orders ₹599+.
            </h5>
            <Link to="/frames">
              <button className='bt1'>Shop Custom Frames</button>
            </Link>
          </Col>
        </Row>
      ))} 


      {/* Value Propositions Section */}
      <div className="value-props" data-aos="fade-up">
        <Row className="justify-content-center">
          {[
            {icon: 'fa-truck-fast', title: 'Free Shipping', text: 'On all orders over Rs. 599'},
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

      {/* Products Slider for Photo Frames */}
      <div className='posters-swiper'>
        <h1 className='mb-4'>Our Best Selling Photo Frames</h1>
        {photoFrames.length === 0 ? (
          <h3>No photo frames found</h3>
        ) : (
          <>
      <Product_Slider setIsCartOpen={setIsCartOpen} products={photoFrames} />
      <div className="text-center mt-4">
        <Link to="/photo-frames" className="view-all-btn">
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
            <h1 className='mb-4'>Best Custom Photo Frames for Walls </h1>
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
    </>
    
  );
};