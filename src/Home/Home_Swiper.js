import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
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
