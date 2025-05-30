import Image from "next/image";
import React from "react";
import UiUXservice from "./../../public/servicesec/UiUXservice.png";

import Iranian from "../../public/iranian.jpg";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const CustomrtReviewCard = ({ desc, designation, name, img }) => {
  return (
    <>
      <div className=" max-w-2xl min-w-40  h-auto bg-[#4067e6]/5 flex items-center gap-x-2 p-8">
        <div className=" rounded-md overflow-hidden flex flex-col items-center gap-y-2">
          <Image
            src={img}
            width={150}
            height={200}
            className=" w-[150px] h-[200px] object-cover "
          />
          <h2 className=" text-lg font-semibold ">{name}</h2>
          <p>{designation}</p>
        </div>
        <div className=" flex flex-1 ">
          <div className=" bg-white h-[150px] w-2 mx-4 "></div>
          <div className=" flex flex-col gap-y-3 mb-14 mx-2  ">
            <div className=" flex gap-1 ">
              <MdOutlineStarPurple500 className=" w-5 h-5 text-white " />
              <MdOutlineStarPurple500 className=" w-5 h-5 text-white " />
              <MdOutlineStarPurple500 className=" w-5 h-5 text-white " />
              <MdOutlineStarPurple500 className=" w-5 h-5 text-white " />
              <MdOutlineStarPurple500 className=" w-5 h-5 text-white " />
            </div>
            <div className=" relative mt-3 ">
              <RiDoubleQuotesL className=" absolute -top-5 left-0 w-5 h-5 text-white mt-3 " />
              <p className=" ml-6 mb-3 ">{desc}</p>
              <RiDoubleQuotesR className=" absolute bottom-0 right-0 w-5 h-5" />
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomrtReviewCard;
