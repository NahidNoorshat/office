import Image from "next/image";
import React from "react";
import service from "../../public/servicepage/servicepic.jpg";
import Link from "next/link";

import ServiceCardpage from "@/components/servicecard/ServiceCardpage";
import Industry from "@/components/industry/Industry";
import {
  BsMortarboardFill,
  BsMotherboardFill,
  BsHouseDoorFill,
} from "react-icons/bs";
import { FaRocket } from "react-icons/fa";
import { ImSphere } from "react-icons/im";
import { FaBasketShopping, FaBuildingNgo } from "react-icons/fa6";

import Faqs from "@/components/faqs/Faqs";

const servicedata = [
  {
    title: "Web Development",
    details:
      "Develop robust online applications to suit your business needs and cater to your clients faithfully.",
    image: "/servicesec/webdevelopment.png",
  },
  {
    title: "Software Development",
    details:
      "Develop tailored software solutions that meet your unique business needs, driving efficiency and innovation in your operations",
    image: "/servicesec/softwatedevelopment.png",
  },
  {
    title: "App Development",
    details:
      "Developing innovative and native mobile apps for Android, iOS, BlackBerry and Windows platforms",
    image: "/servicesec/appdevelopment.png",
  },
  {
    title: "Digital Marketing",
    details:
      "Boost your online presence with our digital marketing services, designed to increase engagement, drive traffic, and grow your brand effectively",
    image: "/servicesec/socialmedia.png",
  },
  {
    title: "UI/UX",
    details:
      "We are experts with creative feature-packed & high performing UX and UI design with our creative young professionals",
    image: "/servicesec/uiux.png",
  },
  {
    title: "BlockChain",
    details:
      "Build secure and transparent solutions with our blockchain services, enhancing data integrity and trust in your business transactions",
    image: "/servicesec/blockchain.png",
  },
  {
    title: "Machine Learning",
    details:
      "Machine Learning and Artificial Intelligence solution for your organization by experts hand",
    image: "/servicesec/machinelearning.png",
  },
];

const industydata = [
  {
    img: FaBasketShopping,
    title: "E-Com",
  },
  {
    img: BsMortarboardFill,
    title: "Education",
  },
  {
    img: BsHouseDoorFill,
    title: "Realstate",
  },
  {
    img: BsMotherboardFill,
    title: "Software",
  },
  {
    img: FaRocket,
    title: "Startup",
  },
  {
    img: FaBuildingNgo,
    title: "NGO",
  },
];

const page = () => {
  return (
    <>
      <div className="min-h-screen w-screen  flex flex-col items-center  overflow-hidden gap-y-6 mb-6 ">
        <div className=" relative w-full">
          <Image
            src={service}
            alt="abouthero"
            className=" object-fill w-full h-[250px] md:h-[400px] lg:h-[600px]  "
          />
          <div className=" absolute inset-0 bg-[#0f0e11] opacity-20 "></div>
        </div>

        <div className=" container mx-auto max-w-7xl w-full flex-col flex items-center justify-center gap-3 ">
          <h2 className=" text-primary-color text-4xl font-bold mt-5 ">
            SERVICE
          </h2>
          <p className=" text-center text-base ">
            Our goal is to provide a flexible, high-availability system that
            represents the new model for communications in today’s global
            infrastructure
          </p>
        </div>
        {/* service card */}
        <div className=" max-w-7xl grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mb-4 ">
          {servicedata?.map((item, i) => {
            return (
              <ServiceCardpage
                key={i}
                img={item.image}
                title={item.title}
                details={item.details}
              />
            );
          })}
        </div>
        <div className="w-full h-auto flex flex-col items-center gap-4 my-6 ">
          <h2 className=" font-semibold text-5xl md:text-6xl  ">
            Industries We Serve
          </h2>
          <div className=" max-w-7xl w-full h-full bg-gradient-to-b from-[#111835] via-[#0b2055] to-[#111835] flex justify-center text-white rounded-3xl overflow-hidden shadow-lg ">
            <div className="max-w-5xl w-full grid  md:grid-cols-3 grid-cols-1 gap-y-10 py-11 ">
              {industydata?.map((item, i) => {
                return <Industry icon={item.img} title={item.title} key={i} />;
              })}
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
