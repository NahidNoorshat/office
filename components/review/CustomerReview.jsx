"use client";

import React from "react";
import ServiceCard from "../servicsec/ServiceCard";
import CustomrtReviewCard from "./CustomrtReviewCard";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./CustomarReview.css";

import { Pagination } from "swiper/modules";

const CustomerReview = () => {
  return (
    <>
      <div className=" w-full h-full max-w-7xl flex flex-col ">
        <div className=" flex justify-between flex-col md:flex-row gap-9 md:gap-3  ">
          <div className=" h-full w-full flex flex-col ">
            <div className=" flex items-center gap-4 ">
              <div className="  border-2 w-[143px] bg-[#D8D8D8] "></div>
              <div className=" flex font-bold text-base leading-6 ">
                <h1 className="  ">
                  Customer{" "}
                  <span className=" font-normal text-primary-color">
                    {" "}
                    Feedback
                  </span>{" "}
                </h1>
              </div>
            </div>
            <div className=" font-bold text-5xl  leading-[60.24px] my-4 ">
              <h1 className=" text-white ">
                What Our{" "}
                <span className=" text-primary-color "> Customer </span> Say
                About Us
              </h1>
            </div>
          </div>
          <div className=" h-full w-full ">
            <div className=" flex items-center justify-end gap-4  ">
              <div className="  border-2 w-[200px] bg-[#D8D8D8] "></div>
              <div className=""></div>
            </div>
          </div>
        </div>
        <div className="  ">
          <div className=" h-full w-full  flex justify-center px-4  ">
            {/* <h1> Nahid</h1> */}
            <Swiper
              grabCursor={true}
              spaceBetween={30}
              breakpoints={{
                // when window width is >= 640px
                640: {
                  width: 640,
                  slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                  width: 768,
                  slidesPerView: 2,
                },
                1024: {
                  width: 1024,
                  slidesPerView: 3,
                },
              }}
              pagination={true}
              modules={[Pagination]}
              className=" myCustomerSlider "
            >
              <SwiperSlide className="  ">
                <CustomrtReviewCard />
              </SwiperSlide>
              <SwiperSlide className="  ">
                <CustomrtReviewCard />
              </SwiperSlide>
              <SwiperSlide className="  ">
                <CustomrtReviewCard />
              </SwiperSlide>
              <SwiperSlide className="  ">
                <CustomrtReviewCard />
              </SwiperSlide>
              <SwiperSlide className="  ">
                <CustomrtReviewCard />
              </SwiperSlide>
              <SwiperSlide className="  ">
                <CustomrtReviewCard />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerReview;
