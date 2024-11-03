"use client";

import React, { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";

const Qustion = ({ qustion, ans }) => {
  const [selected, setSelectes] = useState(false);
  const handleClien = () => {
    setSelectes(!selected);
  };
  return (
    <>
      <div
        onClick={handleClien}
        className={` w-full h-full ${
          selected
            ? " bg-secondary-color text-white "
            : "bg-[#F1F1F1] text-black"
        } flex  justify-between p-5 items-center `}
      >
        <h1 className=" font-normal text-base  ">{qustion}</h1>
        {selected ? (
          <FaAngleDown className=" h-8 w-8 mx-4 " />
        ) : (
          <FaAngleUp className=" h-8 w-8 mx-4 " />
        )}
      </div>
      {selected && (
        <div className=" h-full w-full p-5 bg-white text-black  ">
          <h1 className=" font-normal text-base  ">{ans}</h1>
        </div>
      )}
    </>
  );
};

export default Qustion;
