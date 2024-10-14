"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./SliderHero.css";

import HeroSlider from "../../public/aboutpage/HeroSlider1.png";
import HeroSlider2 from "../../public/aboutpage/HeroSlider2.png";
import HeroSlider3 from "../../public/aboutpage/HeroSlider3.png";

const SliserHero = () => {
  return (
    <>
      <div className=" w-full h-full max-w-7xl flex flex-col items-center  ">
        <>
          <Swiper
            slidesPerView={1}
            initialSlide={1}
            spaceBetween={10}
            breakpoints={{
              640: {
                slidesPerView: 1,
                centeredSlides: false,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                centeredSlides: false,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                centeredSlides: true,
                spaceBetween: 50,
              },
            }}
            className=" mainSlider   "
          >
            <SwiperSlide className="inerSlider">
              <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
            </SwiperSlide>
            <SwiperSlide className="inerSlider">
              <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
            </SwiperSlide>
            <SwiperSlide className="inerSlider">
              <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </SwiperSlide>
            <SwiperSlide className="inerSlider">
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </SwiperSlide>
            <SwiperSlide className="inerSlider">
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </SwiperSlide>
          </Swiper>
        </>
      </div>
    </>
  );
};

export default SliserHero;
