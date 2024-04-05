import Image from "next/image";
import React from "react";
import UiUXservice from "./../../public/servicesec/UiUXservice.png";
import Start from "../../public/star/StarReview.png";

const CustomrtReviewCard = () => {
  return (
    <>
      <div className=" relative  w-full h-full flex flex-col items-center min-w-60 max-w-full text-center overflow-hidden  ">
        <div className=" absolute top-0 h-[82px] w-[82px] bg-primary-color rounded-full border-[3px] border-white flex items-center justify-center ">
          <Image src={UiUXservice} className=" h-[49px] w-[49px] " />
        </div>
        <div className=" mt-[41px] h-auto w-auto min-w-72 flex flex-col  items-center text-center pt-[70px] px-7 pb-6 bg-white rounded-lg text-black gap-3 ">
          <h1 className=" font-bold text-base leading-6 ">Ui/Ux</h1>
          <div className=" flex items-center gap-2  ">
            <Image src={Start} className=" text-primary-color " />
            <Image src={Start} className=" text-primary-color " />
            <Image src={Start} className=" text-primary-color " />
            <Image src={Start} className=" text-primary-color " />
            <Image src={Start} className=" text-primary-color " />
          </div>
          <p className="  ">
            Lorem ipsum dolor sit, amet consectetur adipisicing Lorem ipsum
            dolor sit amet.
          </p>
        </div>
      </div>
    </>
  );
};

export default CustomrtReviewCard;
