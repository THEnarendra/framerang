import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards, Autoplay} from 'swiper/modules';
import styled from 'styled-components';
import {ap1, ap2, ap3, ap4, ap5, ap6, ap7, ap8, ap9} from "../images/anime-posters/animeposters"
import '../MainCss/swiper.css'


export const Home_Swiper = ({img}) => {

  return (
    <Swiper 
    effect={'cards'}
    grabCursor={true}
    modules={[EffectCards, Autoplay]} 
    autoplay={{ delay: 10, disableOnInteraction: false }} 
    className="yourSwiper"
    >

      {img.map((img)=>(
        <SwiperSlide style={{ display:"flex",justifyContent:"center"}}>
          <img src={img.url} className='swiperImg' alt="" />
        </SwiperSlide>
        ))}
    </Swiper>
  );
};
