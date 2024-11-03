import Image from "next/image";
import React from "react";

import About1 from "../../public/aboutsec/About1.png";
import About2 from "../../public/aboutsec/ABout2.png";
import Mainbutton from "../button/Mainbutton";

const Aboutsec = () => {
  return (
    <>
      <div className=" w-full h-full max-w-7xl  ">
        <div className=" h-full w-full flex flex-col md:flex-row justify-between">
          <div className=" relative  w-full mx-5 ">
            <Image
              src={About1}
              className=" overflow-hidden rounded-xl hidden md:flex md:h-[200px] md:w-[198px] lg:h-[300px]  lg:w-[298px] xl:h-[422px] xl:w-[398px] "
            />
            <Image
              src={About2}
              className=" absolute z-10 hidden md:flex md:top-[100px] md:left-[150px]  lg:top-[186px] lg:left-[232px]  md:h-[200px] md:w-[190px] lg:h-[250px] lg:w-[230px] xl:h-[319px] xl:w-[301px] "
            />
          </div>
          <div className=" flex flex-col px-3 w-full">
            <div className=" flex items-center gap-4 ">
              <div className="  border-2 w-[143px] bg-[#D8D8D8] "></div>
              <div className=" flex font-bold text-base leading-6 ">
                <h1 className=" text-primary-color ">
                  About <span className=" font-normal"> BrainAlgo IT</span>
                </h1>
              </div>
            </div>
            <div className=" font-bold text-5xl text-black leading-[60.24px] my-4 ">
              <h1>
                Introduction To The Best
                <span className=" text-primary-color ">Digital Agency</span>
              </h1>
            </div>
            <div className=" text-[#696969] leading-6 text-base font-normal my-3 ">
              <p>
                BrainAlgo IT is your growth partner, delivering creative,
                tech-driven solutions to make your brand shine online. From
                engaging web designs to impactful marketing, we turn your vision
                into success.
              </p>
            </div>
            <div className=" my-4 ">
              <Mainbutton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutsec;
