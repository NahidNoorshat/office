import Image from "next/image";
import React from "react";
import Webdevelopment from "../../public/servicesec/webdevelopment.png";

const ServiceCardpage = ({ img, title, details }) => {
  return (
    <div className="min-w-60 w-full h-full rounded-xl overflow-hidden relative p-4 flex flex-col items-center text-center gap-4 shadow-custom-blue group">
      {/* Background overlay for hover effect */}
      <div className="absolute inset-0 bg-[#5031fc] opacity-15 transform -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0"></div>

      {/* Icon/Image */}
      <div className="relative z-10 w-full flex flex-col items-center ">
        <Image
          src={img}
          width={200}
          height={200}
          alt="Service Card"
          className="w-[200px] h-[200px] object-contain"
        />
        <h2 className="font-semibold text-primary-color text-2xl group-hover:text-white transition-colors duration-300">
          {title}
        </h2>
        <p className="max-w-[400px] group-hover:text-white transition-colors duration-300">
          {details}
        </p>
      </div>
    </div>
  );
};

export default ServiceCardpage;
