import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
<<<<<<< HEAD
import { EffectCards, Autoplay} from 'swiper/modules';
// import { Autoplay } from 'swiper';
// import { Autoplay } from 'swiper/modules/autoplay';
import styled from 'styled-components';
import {ap1, ap2, ap3, ap4, ap5, ap6, ap7, ap8, ap9} from "../images/anime-posters/animeposters"
import '../MainCss/swiper.css'


export const Home_Swiper = () => {
  return (
    <Swiper 
    effect={'cards'}
    grabCursor={true}
    modules={[EffectCards, Autoplay]} // Add Autoplay module here
    autoplay={{ delay: 10, disableOnInteraction: false }} // Autoplay configuration
    className="yourSwiper"
    >
      <SwiperSlide>
        <img style={{height:"40vh"}} src={ap1} alt="" />
        </SwiperSlide>
      <SwiperSlide><img style={{height:"40vh"}} src={ap2} alt="" /></SwiperSlide>
      <SwiperSlide><img style={{height:"40vh"}} src={ap3} alt="" /></SwiperSlide>
      <SwiperSlide><img style={{height:"40vh"}} src={ap4} alt="" /></SwiperSlide>
      <SwiperSlide><img style={{height:"40vh"}} src={ap5} alt="" /></SwiperSlide>
      <SwiperSlide><img style={{height:"40vh"}} src={ap6} alt="" /></SwiperSlide>
      <SwiperSlide><img style={{height:"40vh"}} src={ap7} alt="" /></SwiperSlide>
      <SwiperSlide><img style={{height:"40vh"}} src={ap8} alt="" /></SwiperSlide>
      <SwiperSlide><img style={{height:"40vh"}} src={ap9} alt="" /></SwiperSlide>
    </Swiper>
  );
};
=======

import '../MainCss/swiper.css';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

// import required modules
import { EffectCards } from 'swiper/modules';
export const Home_Swiper = () => {

    return (
        <>
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards, Autoplay]}
            className="mySwiper"
            autoplay={{
                delay: 1700,
                disableOnInteraction: false,
              }}
              
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </>
      );
  
}
>>>>>>> 6a5949480159c1971b3420d6e8dc9dc69ec3e4e9
