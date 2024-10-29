"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Teammembercard from "./Teammembercard";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useRef } from "react";

const teamdata = [
  {
    name: "Nazmul Hossain Naim",
    title: "Business Development Manager",
    image: "/teammember/team1.jpg",
  },
  {
    name: "A Hil Galib",
    title: "Brand Identity Manager",
    image: "/teammember/team2.jpg",
  },
  {
    name: "Shafkat Hossain Muhit",
    title: "UI/UX designer",
    image: "/teammember/team3.jpg",
  },
  {
    name: "Apu Rabi Dash",
    title: "Software Developer",
    image: "/teammember/team5.jpg",
  },
  {
    name: "Abu Nahid",
    title: "Software Developer",
    image: "/teammember/team6.jpg",
  },
  {
    name: "Alex",
    title: "Software Developer",
    image: "/teammember/team7.jpg",
  },
];

const Team = () => {
  const swiperRef = useRef(null); // Initialize Swiper reference

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  return (
    <div className="w-full max-w-7xl flex flex-col items-center  ">
      <div className="w-full flex items-center max-w-5xl justify-end mb-5 mr-12 gap-x-2 cursor-pointer ">
        <HiChevronLeft
          onClick={handlePrev}
          className=" w-10 h-10 text-white bg-primary-color "
        />
        <HiChevronRight
          onClick={handleNext}
          className=" w-10 h-10 text-white bg-primary-color"
        />
      </div>
      <div className="container mx-auto my-5 w-full flex items-center justify-cente ">
        <Swiper
          slidesPerView={1}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="mySwiper"
        >
          {teamdata.map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <Teammembercard
                  teamimg={item.image}
                  Name={item.name}
                  designation={item.title}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Team;
