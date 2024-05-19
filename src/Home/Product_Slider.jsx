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

  const img=[
    {
      id:1,
      img:ap1,
      price:50,
      oldPrice:100,
      description:"this is our frame",
      productName:"Luffy Frame || Set of 3"
  },
    {
      id:2,
      img:ap2,
      price:50,
      oldPrice:100,
      description:"this is our frame",
      productName:"Luffy Frame || Set of 3"
  },
    {
      id:3,
      img:ap3,
      price:50,
      oldPrice:100,
      description:"this is our frame",
      productName:"Luffy Frame || Set of 3"
  },
    {
      id:4,
      img:ap4,
      price:50,
      oldPrice:100,
      description:"this is our frame",
      productName:"Luffy Frame || Set of 3"
  },
    {
      id:5,
      img:ap5,
      price:50,
      oldPrice:100,
      description:"this is our frame",
      productName:"Luffy Frame || Set of 3"
  },
    {
      id:6,
      img:ap6,
      price:50,
      oldPrice:100,
      description:"this is our frame",
      productName:"Luffy Frame || Set of 3"
  },
    {
      id:7,
      img:ap7,
      price:50,
      oldPrice:100,
      description:"this is our frame",
      productName:"Luffy Frame || Set of 3"
  },
]

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

  <div >
    <ProductCard img={img}/>
  </div>
        ))}
  
  
    </Slider>
    </div>
  )
}

export default Product_Slider
