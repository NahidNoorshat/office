"use client";

import Image from "next/image";
import React from "react";
import Logo from "../../public/footer/logofooternaim.png";
import { motion } from "framer-motion";
const MothonLink = motion(Link);

import FacebookIcon from "@mui/icons-material/Facebook";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import Link from "next/link";
import { IoMailOutline, IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <>
      <div className=" w-full h-full bg-gradient-to-b from-[#111835] via-[#081842] to-[#111835] text-white px-3 flex flex-col items-center   ">
        <div className=" w-full h-full max-w-7xl flex flex-col md:flex-row justify-start md:justify-between items-start md:items-end  md:gap-6 lg:gap-8 gap-20  py-6 container mx-auto ">
          <div className=" flex flex-col gap-6 ">
            <Image
              src={Logo}
              alt="Logo"
              className=" w-[300px] h-full object-cover "
            />
            <div className=" flex items-center ml-9 ">
              {/* <IoMailOutline className=" w-10 h-10 " /> */}
              <h2 className=" text-lg  ">info@brainalgoit.com</h2>
            </div>
          </div>
          <div className=" flex flex-col justify-center gap-7  ">
            <div className=" flex gap-5 ">
              <h3 className=" text-lg  ">Term of Service</h3>
              <h3 className=" text-lg  ">Privacy Policy</h3>
            </div>
            <div className=" flex justify-center gap-4  ">
              <FacebookIcon className=" w-7 h-7 " />
              <LinkedInIcon className=" w-7 h-7 " />
              <InstagramIcon className=" w-7 h-7 " />
              <XIcon className=" w-7 h-7 " />
            </div>
          </div>
        </div>
        <div className=" text-white max-w-2xl w-full h-1 mt-9">
          <hr className="  " />
        </div>
        <div className=" w-full h-full max-w-7xl flex justify-center px-3 py-2 my-1 ">
          <div className=" flex gap-2 items-center ">
            <FaRegCopyright />
            <h1> {year} </h1>
            <h1>BrainAlgo IT.</h1>
            <h1>All Rights reserved</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
