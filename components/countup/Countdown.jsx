"use client";
import React from "react";
import CountUp from "react-countup";
import { AiFillLike } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi2";
import { FaRocket } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";

const Countdown = () => {
  return (
    <>
      <div className="  w-full h-auto text-white flex items-center justify-center my-14 ">
        <div className=" max-w-7xl w-full flex flex-col items-center gap-y-8  ">
          <div className="  text-center my-4  ">
            <h1 className="text-white font-bold text-7xl ">
              Our best achivement!
            </h1>
          </div>
          <div className=" flex flex-col lg:flex-row justify-between gap-x-14 mt-14 gap-y-8 ">
            <div className=" h-[200px] w-[200px] rounded-full overflow-hidden bg-[#170531] border-x-4 border-[#7840dd]  hover:border-x-0 transition duration-[2s] hover:border-y-4 flex flex-col items-center p-6 group  gap-y-2 ">
              <div className="  ">
                <AiFillLike className=" rounded-full p-2 h-14 w-14 text-white bg-slate-400 transition duration-500 group-hover:ease-in-out group-hover:bg-red-500  " />
              </div>
              <div className=" flex gap-x-1 ">
                <CountUp end={15} className=" text-5xl font-bold " />
                <h4 className=" font-bold text-5xl"> + </h4>
              </div>
              <h3 className=" font-medium text-lg "> Our Happy Client </h3>
            </div>
            <div className=" h-[200px] w-[200px] rounded-full overflow-hidden bg-[#170531] border-x-4 border-[#7840dd]  hover:border-x-0 transition duration-[2s] hover:border-y-4 flex flex-col items-center p-6 group gap-y-2 ">
              <div className="  ">
                <HiUserGroup className=" rounded-full p-2 h-14 w-14 text-white bg-slate-400 transition duration-500 group-hover:ease-in-out group-hover:bg-red-500  " />
              </div>
              <div className=" flex gap-x-1 ">
                <CountUp end={8} className=" text-5xl font-bold " />
                <h4 className=" font-bold text-5xl"> + </h4>
              </div>
              <h3 className=" font-medium text-lg "> Experience Team </h3>
            </div>
            <div className=" h-[200px] w-[200px] rounded-full overflow-hidden bg-[#170531] border-x-4 border-[#7840dd]  hover:border-x-0 transition duration-[2s] hover:border-y-4 flex flex-col items-center p-6 group gap-y-2 ">
              <div className="  ">
                <FaRocket className=" rounded-full p-2 h-14 w-14 text-white bg-slate-400 transition duration-500 group-hover:ease-in-out group-hover:bg-red-500  " />
              </div>
              <div className=" flex gap-x-1 ">
                <CountUp end={10} className=" text-5xl font-bold " />
                <h4 className=" font-bold text-5xl"> + </h4>
              </div>
              <h3 className=" font-medium text-lg "> Project Completed </h3>
            </div>
            <div className=" h-[200px] w-[200px] rounded-full overflow-hidden bg-[#170531] border-x-4 border-[#7840dd]  hover:border-x-0 transition duration-[2s] hover:border-y-4 flex flex-col items-center p-6 group gap-y-2 ">
              <div className="  ">
                <GrTechnology className=" rounded-full p-2 h-14 w-14 text-white bg-slate-400 transition duration-500 group-hover:ease-in-out group-hover:bg-red-500  " />
              </div>
              <div className=" flex gap-x-1 ">
                <CountUp end={13} className=" text-5xl font-bold " />
                <h4 className=" font-bold text-5xl"> + </h4>
              </div>
              <h3 className=" font-medium text-lg "> Tecnolodgy Used </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Countdown;
