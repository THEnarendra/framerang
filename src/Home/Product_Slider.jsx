import React from 'react'
import '../MainCss/Product_Slider.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ap1,ap2,ap3,ap4,ap5,ap6,ap7} from '../images/anime-posters/animeposters'
import ProductCard from './Product Card/ProductCard';
import '../MainCss/ProductCard.css'

const Product_Slider = () => {

  const img=[ap1,ap2, ap3, ap4, ap5, ap6,ap7]

    const settings = {
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
      };
  return (
    <div style={{margin:"5%",}}>
       <Slider {...settings}>

      {img.map((img)=>(
        <div class="nft">
          <div class='main'>
   <img style={{width:"200px"}} src={img} alt="" />
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
