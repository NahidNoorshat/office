"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
];

const Team = () => {
  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-center mb-5">
        <h2 className="text-primary-color text-2xl font-semibold">Our Team</h2>
      </div>
      <div className="container mx-auto my-5 max-w-7xl">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={true}
          pagination={{ clickable: true }}
          breakpoints={{
            // These are examples, adjust as necessary for your design
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="team-swiper bg-red-700 "
        >
          {teamdata.map((member, i) => (
            <SwiperSlide key={i} className="flex justify-center">
              <div className="w-[300px] h-[300px] rounded-md overflow-hidden shadow-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full rounded-md"
                />
                <div className="text-center mt-2">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-gray-500">{member.title}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Team;
