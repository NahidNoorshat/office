import React from "react";
import Mainbutton from "../button/Mainbutton";
import ServiceCard from "./ServiceCard";

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
                  What We Are{" "}
                  <span className=" font-normal text-primary-color">
                    {" "}
                    Offering
                  </span>{" "}
                </h1>
              </div>
            </div>
            <div className=" font-bold text-5xl text-black leading-[60.24px] my-4 ">
              <h1 className="text-primary-color">
                {" "}
                Service
                <span className=" text-white "> We Can Offer You !</span>
              </h1>
            </div>
            <div className="  leading-6 text-base font-normal my-3 ">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum,
                asperiores culpa! Quos quam numquam excepturi mollitia, veniam
                porro soluta alias? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quidem veritatis iusto corporis eveniet omnis
                eius. Ullam eaque aut facere cupiditate?
              </p>
            </div>
            <div className=" my-4 ">
              <Mainbutton />
            </div>
          </div>
          <div className=" w-full px-2 grid lg:grid-cols-2 gap-x-3 gap-y-2">
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Servicsec;
