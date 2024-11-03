import Image from "next/image";
import React from "react";
import UiUXservice from "./../../public/servicesec/UiUXservice.png";

const ServiceCard = ({ title, desc }) => {
  return (
    <div className="relative w-full h-full flex flex-col items-center min-w-60 max-w-full text-center overflow-hidden">
      {/* Icon section */}
      <div className="absolute top-0 h-[82px] w-[82px] bg-primary-color rounded-full border-[3px] border-white flex items-center justify-center z-10">
        <Image
          src={UiUXservice}
          className="h-[49px] w-[49px]"
          alt="UI/UX Service Icon"
        />
      </div>

      {/* Content section with hover effect */}
      <div className="relative mt-[41px] h-auto w-auto min-w-72 flex flex-col items-center text-center pt-[70px] px-7 pb-6 bg-white hover:text-white rounded-lg text-black gap-3 overflow-hidden group">
        {/* Hover effect background */}
        <div className="absolute inset-0 bg-blue-500 transform -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0"></div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="font-bold text-base leading-6">{title}</h1>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
