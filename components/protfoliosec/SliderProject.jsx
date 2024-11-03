import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./SliderCss.css";

import { EffectCoverflow, Pagination } from "swiper/modules";

import Dashbord from "../../public/profolio/dashbord.jpg";
import Gym from "../../public/profolio/gym.png";
import Mobile from "../../public/profolio/mobilapp.png";
import Website from "../../public/profolio/website1.png";
import Analetic from "../../public/profolio/analetic.jpg";
import Image from "next/image";

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
            <Image src={Dashbord} className=" w-full block " />
          </SwiperSlide>
          <SwiperSlide className=" mySlider ">
            <Image src={Mobile} />
          </SwiperSlide>
          <SwiperSlide className=" mySlider">
            <Image src={Gym} />
          </SwiperSlide>
          <SwiperSlide className=" mySlider">
            <Image src={Dashbord} />
          </SwiperSlide>
          <SwiperSlide className=" mySlider">
            <Image src={Website} />
          </SwiperSlide>
          <SwiperSlide className=" mySlider">
            <Image src={Analetic} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default SliderProject;
