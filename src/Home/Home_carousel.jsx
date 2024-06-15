import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../MainCss/Carousel.css';


// import required modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

export default function Home_carousel({img}) {

  
  
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
        {img.map((data)=>(
        <SwiperSlide className='swiper-slide1'>
          <div className='text-white' >
          <img  src={data.url} />
            
          </div>
        </SwiperSlide>
        ))}
      
      </Swiper>
    </div>
  );
}
