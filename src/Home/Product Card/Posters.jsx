import React, { useState } from 'react'
import { ap10, ap11, ap12 } from '../../images/anime-posters/animeposters'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from './ProductCard';
import { Col, Row } from 'react-bootstrap';


export const Posters = ({ img, setFooter, theme }) => {

  setFooter(true)

  const [fromPrice, setFromPrice] = useState('');
  const [toPrice, setToPrice] = useState('');

  const handleFromChange = (e) => {
    setFromPrice(e.target.value);
  };

  const handleToChange = (e) => {
    setToPrice(e.target.value);
  };

  const handleReset = () => {
    setFromPrice('');
    setToPrice('');
  };

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
  const Category = ["Select Category", "Marvel Poster", "Custome poster", "Anime Poster",
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


      <Row style={{ margin: "1% 5% 2% 5%" }}>
        <div className='ms-2 mt-5 mb-5' style={{ display: "flex", flexWrap: "wrap" }}>
          <div className='me-4'>
            <select style={{ color: theme === "darkTheme" ? "white" : "black" }} className='Category_Row'>
              {Category.map((data) => (

                <option style={{ backgroundColor: theme === "darkTheme" ? "black" : "white" }} className='Category '>
                  {data}
                </option>
              ))}

            </select>
          </div>
         
        </div>


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
