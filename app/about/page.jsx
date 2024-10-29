import HeroCard from "@/components/aboutpage/HeroCard";
import SliserHero from "@/components/aboutpage/SliserHero";
import React from "react";
import "./Style.css";
import Image from "next/image";
import AboutHero from "../../public/aboutpage/pic2.jpg";
import Faqs from "@/components/faqs/Faqs";
import Team from "@/components/team/Team";
import Link from "next/link";
// import abouthero from "../../public/aboutsec/aboutpagehero"

const page = () => {
  return (
    <>
      <div className=" min-h-screen w-screen  flex flex-col items-center  overflow-hidden   ">
        <div className=" relative w-full group">
          <Image
            src={AboutHero}
            alt="abouthero"
            className=" object-fill w-full h-[400px] md:h-[600px] lg:h-[800px]  "
          />
          <div className=" absolute inset-0 bg-[#0f0e11] opacity-20 "></div>
          <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="flex gap-4 cursor-pointer max-w-3xl w-full  ">
              <Link
                href="#team"
                className=" text-3xl text-white font-bold uppercase border-b-[4px] border-primary-color "
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
        {/* <div className=" hidden md:flex px-5 py-2 w-full h-full  justify-center mt-40 ">
          <HeroCard />
        </div> */}
        {/* <div className=" mt-8 w-full h-full flex flex-col items-center px-3 text-white pt-32  ">
          <SliserHero />
        </div> */}
        <div id="team" className=" w-full h-full flex flex-col items-center  ">
          <div className=" w-full h-full flex flex-col items-center my-6 px-3 ">
            <div className=" flex items-center gap-4  ">
              <div className=" border-r-8 border-t-6 w-[7px] h-[34px]  border-primary-color   "></div>
              <div className=" font-semibold  text-primary-color leading-[40px] tracking-wider text-2xl ">
                <h1>20+ Employee</h1>
              </div>
              <div className=" bg-primary-color border-2 w-[200px] border-primary-color "></div>
            </div>
          </div>
          <Team />
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
          </div>
        </div>

        <div className=" w-full h-full px-3 flex justify-center mt-20 mb-8 ">
          <Faqs />
        </div>
      </div>
    </>
  );
};

export default page;
