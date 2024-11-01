"use client";

import Image from "next/image";
import React from "react";
import Logo from "../../public/logo/footerlogobgre.png";
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
      <div className=" w-full h-full bg-gradient-to-b from-[#111835] via-[#081842] to-[#111835] text-white px-3 flex flex-col items-center  ">
        <div className=" w-full h-full max-w-7xl flex flex-col md:flex-row justify-around items-start  md:gap-6 lg:gap-8 gap-20 px-10 md:px-0  ">
          <div className=" w-[345px] h-full flex flex-col gap-4 ">
            <Image
              src={Logo}
              className=" h-[200px] w-[205px] object-contain "
            />
            <div className="flex items-center gap-5 ">
              <IoMailOutline className=" text-primary-color h-7 w-7  " />
              <h1>info@brainalgoit.com</h1>
            </div>
          </div>
          {/* <div className=" flex flex-col w-auto h-full gap-9 ">
            <h1 className=" font-bold text-xl  ">Services</h1>
            <div className=" ">
              <ul className=" flex flex-col gap-4 ">
                <li>UI/UX</li>
                <li>Web Development</li>
                <li>MObile App Development</li>
                <li>SEO</li>
                <li>Block Chain</li>
              </ul>
            </div>
          </div>
          <div className=" flex flex-col w-auto h-full gap-9 ">
            <h1 className=" font-bold text-xl  ">Services</h1>
            <div className=" ">
              <ul className=" flex flex-col gap-4 ">
                <li>Compliance</li>
                <li>Case Studies</li>
                <li>Webinars</li>
                <li>Developers</li>
              </ul>
            </div>
          </div> */}
          <div className=" w-auto h-full flex flex-col gap-9 ">
            <div className="flex  items-center pb-4">
              <MothonLink
                href="https://www.facebook.com/omegaitsys"
                target={"_blank"}
                className="w-6 mr-3"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FacebookIcon className="w-[24px] h-[24px]  " />
              </MothonLink>
              <MothonLink
                href="https://www.instagram.com/"
                target={"_blank"}
                className="w-6 mr-3"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <InstagramIcon className="w-[24px] h-[24px]" />
              </MothonLink>
              <MothonLink
                href="https://twitter.com/home"
                target={"_blank"}
                className="w-6 mr-3"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <XIcon className="w-[24px] h-[24px]" />
              </MothonLink>
              <MothonLink
                href="https://www.linkedin.com/company/omega-it-sys/"
                target={"_blank"}
                className="w-6 mr-3"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <LinkedInIcon className="w-[24px] h-[24px]" />
              </MothonLink>
            </div>
          </div>
        </div>
        <div className=" text-white w-full h-1 my-9">
          <hr className="  " />
        </div>
        <div className=" w-full h-full max-w-7xl flex justify-center px-3 ">
          <div className=" flex gap-2 items-center ">
            <FaRegCopyright />
            <h1> {year} </h1>
            <h1>Omega It Sys.</h1>
            <h1>All Rights reserved</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
