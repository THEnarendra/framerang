import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../MainCss/Carousel.css';
import img2 from "../images/anime-character-listening-music.jpg"
import img3 from "../images/anime-style-character-space.jpg"
import img5 from "../images/black-white-illustration-man-with-short-hair-black-white-face.jpg"
import img6 from "../images/cas_grief_and_loss_in_the_style_of_oil_painting_visionary_art_be1c349d-905d-47fb-8318-555f7d3cdf12_wcomki.png"
import img7 from "../images/dragons_lair_ba9uhh.png"
import img8 from "../images/separation_z4uh0l.png"

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

export default function Home_carousel() {

  const arr1=[
    
    {
      "id":5,
      "img":img2

    },
    {
      "id":6,
      "img":img3

    },
    {
      "id":7,
      "img":img5

    },
  
    {
      "id":9,
      "img":img6

    },
    
    {
      "id":5,
      "img":img7

    },
    {
      "id":6,
      "img":img8

    },
    {
      "id":7,
      "img":img2

    },
  
    {
      "id":9,
      "img":img3

    },
    
  ]
  
  return (
    <div className='body01'>
      <Swiper 
        effect={'coverflow'}
         autoplay={{
          delay: 1700,
          disableOnInteraction: false,
        }}
        
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
        
      >
        {arr1.map((data)=>(
        <SwiperSlide className='swiper-slide1'>
          <div className='text-white' >
          <img  src={data.img} />
            
          </div>
        </SwiperSlide>
        ))}
      
      </Swiper>
    </div>
  );
}
