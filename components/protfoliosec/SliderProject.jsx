import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./SliderCss.css";

import { EffectCoverflow, Pagination } from "swiper/modules";

const SliderProject = () => {
  return (
    <>
      <div className=" h-full w-full  flex justify-center ">
        {/* <h1> Nahid</h1> */}
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          spaceBetween={60}
          coverflowEffect={{
            rotate: 10,
            stretch: 1,
            depth: 100,
            modifier: 3,
            slideShadows: true,
          }}
          initialSlide={2}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className=" myClass "
        >
          <SwiperSlide className=" mySlider ">
            <img
              src="https://swiperjs.com/demos/images/nature-1.jpg"
              className=" w-full block "
            />
          </SwiperSlide>
          <SwiperSlide className=" mySlider ">
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide className=" mySlider">
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SwiperSlide>
          <SwiperSlide className=" mySlider">
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>
          <SwiperSlide className=" mySlider">
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>
          <SwiperSlide className=" mySlider">
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default SliderProject;
