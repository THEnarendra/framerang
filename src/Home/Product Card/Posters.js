import React from 'react'
import {ap10,ap11,ap12} from '../../images/anime-posters/animeposters'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from './ProductCard';
import { ap1,ap2,ap3,ap4,ap5,ap6,ap7} from '../../images/anime-posters/animeposters'
import { Col, Row } from 'react-bootstrap';


export const Posters = ({theme}) => {

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
    
      
 <div style={{
                marginTop:"72px",
                padding: "3%", textAlign: "center", 
            }}>
              
              <Slider {...settings}>
      <img src={ap10} alt="" className='logo_wheel12' />
      <img src={ap10} alt="" className='logo_wheel12' />
      </Slider>

{/* <h1 className='ms-5 display-4'>Anime Posters</h1> */}

<Row style={{margin:"3% 5% 3% 5%"}}>
{img.map((img)=>(
  <Col lg={3} md={4} sm={12}>
<ProductCard img={img}/>
 </Col>
))}
</Row>

</div>


    
  )
}
