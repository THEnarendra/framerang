import React from 'react'
import '../MainCss/Product_Slider.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ap1,ap2,ap3,ap4,ap5,ap6,ap7} from '../images/anime-posters/animeposters'

const Product_Slider = () => {

    const settings = {
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
      };
  return (
    <div style={{margin:"5%"}}>
       <Slider {...settings}>
      <div>
        <img src={ap1} alt="Image 1" />
      </div>
      <div>
        <img src={ap1} alt="Image 2" />
      </div>
      <div>
        <img src={ap1} alt="Image 3" />
      </div>
      <div>
        <img src={ap1} alt="Image 3" />
      </div>
      <div>
        <img src={ap1} alt="Image 3" />
      </div>
      <div>
        <img src={ap1} alt="Image 3" />
      </div>
    </Slider>
    </div>
  )
}

export default Product_Slider
