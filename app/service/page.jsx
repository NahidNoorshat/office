import Image from "next/image";
import React from "react";
import service from "../../public/servicepage/servicepic.jpg";
import Link from "next/link";

import ServiceCardpage from "@/components/servicecard/ServiceCardpage";

const servicedata = [
  {
    title: "Web Development",
    details:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,aliquid?",
    image: "/servicesec/webdevelopment.png",
  },
  {
    title: "Software Development",
    details:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,aliquid?",
    image: "/servicesec/softwatedevelopment.png",
  },
  {
    title: "App Development",
    details:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,aliquid?",
    image: "/servicesec/appdevelopment.png",
  },
  {
    title: "Social Development",
    details:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,aliquid?",
    image: "/servicesec/socialmedia.png",
  },
  {
    title: "UI/UX",
    details:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,aliquid?",
    image: "/servicesec/socialmedia.png",
  },
  {
    title: "BlockChain",
    details:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,aliquid?",
    image: "/servicesec/blockchain.png",
  },
  {
    title: "Machine Learning",
    details:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,aliquid?",
    image: "/servicesec/machinelearning.png",
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptates, blanditiis ratione! Rerum quod veritatis amet cum
            impedit, labore temporibus praesentium!
          </p>
        </div>
        {/* service card */}
        <div className=" max-w-7xl grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 mb-4 ">
          {/* <ServiceCardpage />
          <ServiceCardpage />
          <ServiceCardpage />
          <ServiceCardpage />
          <ServiceCardpage />
          <ServiceCardpage />
          <ServiceCardpage /> */}
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
      </div>
    </>
  );
};

export default page;
