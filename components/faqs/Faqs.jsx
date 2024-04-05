import React from "react";
import Qustion from "./Qustion";

const Faqs = () => {
  return (
    <>
      <div className=" flex flex-col max-w-5xl w-full h-full items-center   ">
        <div className=" flex flex-col gap-2 items-center ">
          <div className=" flex items-center gap-4 ">
            <div className="  border-2 w-[143px] bg-[#D8D8D8] "></div>
            <div className=" flex font-normal text-[#696969] text-base leading-6 ">
              <h1 className="  ">FAQs </h1>
            </div>
            <div className="  border-2 w-[143px] bg-[#D8D8D8] "></div>
          </div>
          <div className=" ">
            <h1 className=" font-bold text-5xl leading-[60.24px] w-[450px] text-center mt-3 ">
              Frequently Asked{" "}
              <span className=" text-primary-color"> Questions</span>
            </h1>
          </div>
        </div>
        <div className=" w-full h-full flex flex-col gap-5 my-6 ">
          <Qustion />
          <Qustion />
          <Qustion />
          <Qustion />
          <Qustion />
        </div>
      </div>
    </>
  );
};

export default Faqs;
