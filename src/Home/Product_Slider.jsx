import React from 'react'
import '../MainCss/Product_Slider.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ap1,ap2,ap3,ap4,ap5,ap6,ap7} from '../images/anime-posters/animeposters'
import ProductCard from './Product Card/ProductCard';
import '../MainCss/ProductCard.css'

const Product_Slider = () => {

  const img=[
    {
      id:1,
      productImage:{url:ap1},
      price:50,
      oldPrice:100,
      description:"this is our frame",
      productName:"Luffy Frame || Set of 3"
  },
    {
      id:2,
      productImage:{url:ap2},
      price:50,
      oldPrice:100,
      description:"this is our frame",
      productName:"Luffy Frame || Set of 3"
  },
    {
      id:3,
      productImage:{url:ap3},
      price:50,
      oldPrice:100,
      description:"this is our frame",
      productName:"Luffy Frame || Set of 3"
  },
    {
      id:4,
      productImage:{url:ap4},
      price:50,
      oldPrice:100,
      description:"this is our frame",
      productName:"Luffy Frame || Set of 3"
  },
    {
      id:5,
      productImage:{url:ap5},
      price:50,
      oldPrice:100,
      description:"this is our frame",
      productName:"Luffy Frame || Set of 3"
  },
    {
      id:6,
      productImage:{url:ap6},
      price:50,
      oldPrice:100,
      description:"this is our frame",
      productName:"Luffy Frame || Set of 3"
  },
    {
      id:7,
      productImage:{url:ap7},
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
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024, // At 1024px or less
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768, // At 768px or less
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480, // At 480px or less
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
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
