import React from 'react'
import {ap10,ap11,ap12} from '../../images/anime-posters/animeposters'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from './ProductCard';

export const Posters = ({theme}) => {

  const settings = {
    dots: true,
    slidesToShow: 1,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true, // Add autoplay
    speed: 2000,
    autoplaySpeed: 2000, // Adjust autoplay speed (optional)
    arrows: false, // Hide arrows
  };

  return (
    <div>
      
 <div style={{
                marginTop:"72px",
                padding: "3%", textAlign: "center", 
            }}>
              
              <Slider {...settings}>
      <img src={ap10} alt="" className='logo_wheel12' />
      <img src={ap10} alt="" className='logo_wheel12' />
      </Slider>
</div>

{/* <h1 className='ms-5 display-4'>Anime Posters</h1> */}


<ProductCard/>

    </div>
  )
}
