import Image from "next/image";
import React from "react";
import { FaLinkedin, FaInstagram, FaFacebookF } from "react-icons/fa";

const Teammembercard = ({ teamimg, Name, designation }) => {
  return (
    <div className="relative group w-[350px] h-[400px] overflow-hidden rounded-lg shadow-xl ">
      <Image
        src={teamimg}
        width={350}
        height={400}
        className="object-cover w-full h-full"
        alt={`${Name}'s profile picture`}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="flex gap-4 cursor-pointer ">
          <FaFacebookF className=" w-6 h-6 text-white " />
          <FaInstagram className=" w-6 h-6 text-white " />
          <FaLinkedin className=" w-6 h-6 text-white " />
        </div>
      </div>

      {/* Bottom Info */}
      <div className="absolute bottom-0 left-0 flex gap-x-5 items-center text-white w-full">
        <div className="w-full bg-primary-color opacity-70 flex flex-col items-center py-2">
          <h2 className="font-semibold text-xl">{Name}</h2>
          <p>{designation}</p>
        </div>
      </div>
    </div>
  );
};

export default Teammembercard;
