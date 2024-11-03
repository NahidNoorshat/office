import React from "react";
import Mainbutton from "../button/Mainbutton";
import ServiceCard from "./ServiceCard";

const servicedata = [
  {
    title: "Web App Development",
    desc: "Develop robust online applications to suit your business needs and cater to your clients faithfully.",
  },
  {
    title: "Mobile App Development",
    desc: "Developing innovative and native mobile apps for Android, iOS, BlackBerry and Windows platforms.",
  },
  {
    title: "Machin Learning",
    desc: "Machine Learning and Artificial Intelligence solution for your organization by experts hand",
  },
];

const Servicsec = () => {
  return (
    <>
      <div className=" w-full h-full max-w-7xl  ">
        <div className=" h-full w-full flex flex-col md:flex-row justify-between">
          <div className=" flex flex-col px-3 w-full">
            <div className=" flex items-center gap-4 ">
              <div className="  border-2 w-[143px] bg-[#D8D8D8] "></div>
              <div className=" flex font-bold text-base leading-6 ">
                <h1 className="  ">
                  What We Are
                  <span className=" font-normal text-primary-color">
                    Offering
                  </span>
                </h1>
              </div>
            </div>
            <div className=" font-bold text-5xl text-black leading-[60.24px] my-4 flex justify-between items-center ">
              <h1 className="text-primary-color">
                Service
                <span className=" text-white "> We Can Offer You !</span>
              </h1>
              {/* <div className="justify-end text-white hidden md:flex ">
                <Mainbutton />
              </div> */}
            </div>
            <div className="  leading-6 text-base font-normal my-3 ">
              <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-x-4 ">
                {/* <ServiceCard />
                <ServiceCard />
                <ServiceCard /> */}
                {servicedata?.map((item, i) => {
                  return (
                    <ServiceCard title={item.title} desc={item.desc} key={i} />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Servicsec;
