import HeroCard from "@/components/aboutpage/HeroCard";
import SliserHero from "@/components/aboutpage/SliserHero";
import React from "react";
import "./Style.css";

const page = () => {
  return (
    <>
      <div className=" min-h-screen w-screen  flex flex-col items-center  overflow-hidden relative px-3 ">
        <div className=" absolute top-40  w-[2285px] h-[30vh] bg-gradient-to-r from-[#000000]/70 to-[#FF3839]/70 -rotate-[30deg] md:-rotate-[20deg] -z-10 "></div>
        <div className=" absolute top-80  w-[2285.45px] h-[30vh] bg-gradient-to-r from-[#FF3435]/70  to-[#000000]/70 -rotate-[30deg] md:-rotate-[20deg] -z-10 "></div>
        <div className=" px-5 py-2 w-full h-full flex justify-center mt-40 ">
          <HeroCard />
        </div>
        <div className=" mt-8 w-full h-full flex flex-col items-center px-3 text-white pt-32  ">
          <SliserHero />
        </div>
        <div className=" mt-8 w-full h-full flex flex-col items-center px-3  py-6   ">
          <div className=" max-w-7xl w-full h-full flex-col flex items-center text-center gap-3 ">
            <h1 className=" text-primary-color font-semibold text-5xl leading-[74.4px] drop-shadow-xl  ">
              Our Team Location
            </h1>
            <p className=" text-black/70 text-base font-normal tracking-wider ">
              We have offices and teams operating all around the world.
            </p>
            <div className=" w-full h-[420px]  overflow-hidden customshadow my-3 ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d97878.17985130507!2d90.41475990773101!3d23.850194205442325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1713082301726!5m2!1sen!2sbd"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className=" w-full h-full "
              ></iframe>
            </div>
            <div className=" w-full h-full flex flex-col items-center my-6 px-3 ">
              <div className=" flex items-center gap-4  ">
                <div className=" border-r-8 border-t-6 w-[7px] h-[34px]  border-primary-color   "></div>
                <div className=" font-semibold  text-primary-color leading-[40px] tracking-wider text-2xl ">
                  <h1>20+ Employee</h1>
                </div>
                <div className=" bg-primary-color border-2 w-[200px] border-primary-color "></div>
              </div>
              <div className=" h-[40vh] w-screen  flex flex-col items-center  overflow-hidden relative px-3 my-6   ">
                <div className=" absolute top-[100px] lg:top-20  w-[2285px] h-[10vh] md:h-[15vh] lg:h-[20vh] bg-gradient-to-r from-[#000000]/70 to-[#FF3839]/70  -z-10 "></div>
                <div className=" absolute top-[140px]  lg:top-25 md:top-30 lg:top-40  w-[2285.45px] h-[10vh] md:h-[15vh] lg:h-[20vh] bg-gradient-to-r from-[#FF3435]/70  to-[#000000]/70  -z-10 "></div>
                {/* <div className=" h-[30vh] w-[20vw] bg-slate-100 "></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
