import React from "react";
import Mainbutton from "../button/Mainbutton";

const Hero = () => {
  return (
    <>
      <div className=" min-h-screen flex flex-col items-center justify-center bg-mainbg bg-cover bg-no-repeat ">
        <div className=" bg-gradient-to-r from-[#202020] to-[#202020]/0 h-[100vh] w-[100vw] items-center justify-center ">
          <div className=" h-full w-full flex justify-center items-center  ">
            <div className=" max-w-7xl w-full h-full ">
              <div className=" max-w-4xl w-full h-full flex flex-col items-center md:items-start justify-center gap-5 px-3 ">
                <h1 className=" text-white  leading-6  ">
                  Welcome To
                  <span className=" text-primary-color text-base font-normal  ">
                    {" "}
                    Omega It Sys.
                  </span>
                </h1>
                <h1 className=" font-bold text-7xl text-white leading-[90px] ">
                  Designing the Future with Canvas Lancer
                </h1>
                <h1 className=" text-base font-normal leading-6 tracking-wider text-white ">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Commodi ea neque mollitia consequatur ex odit amet quam
                  accusantium et officia.{" "}
                </h1>

                <div className="flex gap-2">
                  <Mainbutton />
                  <Mainbutton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
