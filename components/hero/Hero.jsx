"use client";
import Mainbutton from "../button/Mainbutton";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <>
      <div className="relative min-h-screen w-screen  bg-black   flex items-center justify-center">
        <video
          className="absolute top-0 left-0 w-full h-screen object-cover z-0 opacity-70 "
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/bacgroundvideo/0305.mp4" type="video/mp4" />
        </video>
        <div className="relative   text-center">
          <h1 className=" text-8xl text-[#ffff]  leading-[89.95px] tracking-[3%] font-bold mx-2">
            Elevate Your Online Identity with
          </h1>
          <p className=" mt-4 ">
            <TypeAnimation
              sequence={[
                "Web Development",
                2000,
                "App Development",
                2000,
                "Machine Learning",
                2000,
                "UI/UX",
                1000,
                "Block Chain",
                1000,
              ]}
              wrapper="span"
              speed={40}
              // style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
              className=" w-full lg:text-4xl md:text-2xl text-3xl lg:font-bold font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#ff3839] to-orange-300 "
            />
          </p>
          <h1 className="text-2xl lg:text-4xl text-gray-200 font-bold mx-2 mt-4 lg:mt-8 ">
            Where Creativity Meets Functionality
          </h1>
          <h3 className=" mx-2 mt-3 lg:mt-6 text-white text-lg ">
            Ready to get your work from today!
          </h3>

          <div className=" mt-8 flex items-center justify-center ">
            <Mainbutton />
          </div>
        </div>
        {/* <div className=" max-w-7xl w-full h-full ">
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
              ea neque mollitia consequatur ex odit amet quam accusantium et
              officia.{" "}
            </h1>
            
            <div className="flex gap-2">
              <Mainbutton />
              <Mainbutton />
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Hero;
