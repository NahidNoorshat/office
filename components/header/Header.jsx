"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo2 from "../../public/logo/BrainAlgoDark.png";
import Logo1 from "../../public/logo/BrainAlgo.png";
import Image from "next/image";
import Mainbutton from "../button/Mainbutton";

import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { FiAlignJustify } from "react-icons/fi";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";

const MothonLink = motion(Link);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openmanue, setOpenmenue] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const hendleNav = () => {
    setOpenmenue(!openmanue);
  };

  return (
    <>
      <header
        className={`${
          isScrolled
            ? "  bg-[#f5f8fa]/70 z-50 text-white fixed top-0 h-20 w-full "
            : "fixed top-0 w-full h-20 text-white bg-gradient-to-b from-[#000000]/100 to-[#000000]/0 z-10 "
        }`}
      >
        <div className=" h-full w-full flex items-center justify-center px-2">
          <div className=" flex h-full w-full max-w-7xl   ">
            <div className=" flex w-full  items-center justify-between  ">
              <div className="">
                <Link href="/">
                  <div className={`${isScrolled && " hidden"}`}>
                    <Image
                      src={Logo1}
                      alt="logo"
                      width={200}
                      height={350}
                      className=" object-cover "
                      priority
                    />
                  </div>
                  <div className={`${!isScrolled && " hidden"} `}>
                    <Image
                      src={Logo2}
                      alt="logo"
                      width={200}
                      height={350}
                      className=" object-cover "
                      priority
                    />
                  </div>
                </Link>
              </div>
              <div className="  ">
                <ul className=" hidden md:flex gap-5 ">
                  <Link
                    href="/"
                    className={` ${
                      isScrolled
                        ? " text-[#272725] hover:text-primary-color  "
                        : " text-[#F7FAF0] hover:text-primary-color "
                    } nav text-xl `}
                  >
                    <li>Home</li>
                  </Link>
                  <Link
                    href="/about"
                    className={` ${
                      isScrolled
                        ? " text-[#272725] hover:text-primary-color  "
                        : " text-[#F7FAF0] hover:text-primary-color "
                    } nav text-xl `}
                  >
                    <li>About</li>
                  </Link>
                  <Link
                    href="/service"
                    className={` ${
                      isScrolled
                        ? " text-[#272725] hover:text-primary-color  "
                        : " text-[#F7FAF0] hover:text-primary-color "
                    } nav text-xl `}
                  >
                    <li>Service</li>
                  </Link>
                  <Link
                    href="/blog"
                    className={` ${
                      isScrolled
                        ? " text-[#272725] hover:text-primary-color  "
                        : " text-[#F7FAF0] hover:text-primary-color "
                    } nav text-xl `}
                  >
                    <li>Blog</li>
                  </Link>
                  <Link
                    href="/contact"
                    className={` ${
                      isScrolled
                        ? " text-[#272725] hover:text-primary-color  "
                        : " text-[#F7FAF0] hover:text-primary-color "
                    } nav text-xl `}
                  >
                    <li>Contact</li>
                  </Link>
                </ul>
              </div>
              <div className=" hidden md:flex ">
                <Mainbutton />
              </div>

              <div
                onClick={hendleNav}
                className=" md:hidden px-4 cursor-pointer"
              >
                <FiAlignJustify
                  className={` ${
                    isScrolled ? " text-orange-950 " : " text-amber-600 "
                  } h-7 w-7 `}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            openmanue
              ? " fixed top-0 left-0 md:hidden h-screen w-[65%] bg-[#95caf3] p-10 ease-out duration-500  "
              : "fixed top-0 left-[-100%] p-10 ease-in duration-500"
          }
        >
          <div className=" flex items-center justify-end w-full">
            <div onClick={hendleNav} className=" cursor-pointer">
              <IoMdClose className=" h-6 w-6 " />
            </div>
          </div>
          <div className=" flex-col py-4">
            <ul>
              <Link href="/">
                <li
                  onClick={() => setOpenmenue(false)}
                  className=" hover:text-blue-700 cursor-pointer py-4"
                >
                  Home
                </li>
              </Link>
              <Link href="/about">
                <li
                  onClick={() => setOpenmenue(false)}
                  className="hover:text-blue-700  cursor-pointer py-4"
                >
                  About
                </li>
              </Link>
              <Link href="/service">
                <li
                  onClick={() => setOpenmenue(false)}
                  className=" hover:text-blue-700 cursor-pointer py-4"
                >
                  Service
                </li>
              </Link>
              <Link href="/blog">
                <li
                  onClick={() => setOpenmenue(false)}
                  className="hover:text-blue-700  cursor-pointer py-4"
                >
                  Blog
                </li>
              </Link>
              <Link href="/contact">
                <li
                  onClick={() => setOpenmenue(false)}
                  className="hover:text-blue-700  cursor-pointer py-4"
                >
                  Contact
                </li>
              </Link>
            </ul>
          </div>
          <div className="flex justify-around items-center pb-4">
            <MothonLink
              href="https://www.facebook.com/omegaitsys"
              target={"_blank"}
              className="w-6 mr-3"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FacebookIcon className="w-[24px] h-[24px]" />
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
      </header>
    </>
  );
};

export default Header;
