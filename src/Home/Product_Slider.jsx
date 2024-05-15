import React from 'react'
import '../MainCss/Product_Slider.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ap1,ap2,ap3,ap4,ap5,ap6,ap7} from '../images/anime-posters/animeposters'
import ProductCard from './Product Card/ProductCard';
import '../MainCss/ProductCard.css'
import { Controller } from 'swiper/modules';

const Product_Slider = () => {

  const img=[ap1,ap2, ap3, ap4, ap5, ap6,ap7]

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, // Add autoplay
    speed: 2000,
    autoplaySpeed: 2000, // Adjust autoplay speed (optional)
    arrows: false, // Hide arrows
  };
  
  return (
    <div style={{width:"90vw"}}>
       <Slider {...settings}>

      {img.map((img)=>(
        <div class="nft">
          <div class='main'>
   <img src={img} alt="" />
   <p className='description'>Hello guys this is posters collection</p>
   <h2 className='creator'>Anime Frames</h2>
   <button className='bt1'>Add to Cart</button>
   
  </div>
  </div>
        ))}
  
  
    </Slider>
    </div>
  )
}

export default Product_Slider
