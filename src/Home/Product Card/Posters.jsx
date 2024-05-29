import React, { useEffect } from 'react'
import { ap10, ap11, ap12 } from '../../images/anime-posters/animeposters'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from './ProductCard';
import { Col, Row } from 'react-bootstrap';


export const Posters = ({ theme, img }) => {

  const settings = {
    dots: true,
    slidesToShow: 1,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true, // Add autoplay
    speed: 4000,
    autoplaySpeed: 2000, // Adjust autoplay speed (optional)
    arrows: false, // Hide arrows
  };
  const Category = ["Marvel Poster", "Custome poster", "Anime Poster",
    "Sports Posters",
    "Music Posters",
    "Art Posters",

  ]
  return (


    <div style={{
      marginTop: "72px",
      padding: "3%", textAlign: "center",
    }}>

      <Slider {...settings}>
        <img src={ap10} alt="" className='logo_wheel12' />
        <img src={ap11} alt="" className='logo_wheel12' />
        <img src={ap12} alt="" className='logo_wheel12' />
      </Slider>

      <h1 className='display-5 mt-4 mb-4'>Different Category</h1>
      <div className='Category_Row'>
        {Category.map((data) => (

          <div className='Category '>
            {data}
          </div>
        ))}

      </div>

      <Row style={{ margin: "3% 5% 3% 5%" }}>
        {img && (

          img.map((img) => (
            <Col lg={3} md={4} sm={12}>
              <ProductCard img={img} />
            </Col>
          ))
        )}
      </Row>

    </div>



  )
}
