import React from "react";
import ContuctUs from "../../public/ContuctUsSec.png";
import Image from "next/image";
import { Input } from "postcss";
import Mainbutton from "../button/Mainbutton";

const ContuctUssec = () => {
  return (
    <>
      <div className=" w-full h-full max-w-7xl  flex justify-between items-center gap-3 ">
        <div className=" w-full h-full flex flex-col py-6 ">
          <div className=" flex items-center gap-4 ">
            <div className="  border-2 w-[143px] bg-[#D8D8D8] "></div>
            <div className=" flex font-bold text-base leading-6 ">
              <h1 className=" text-primary-color  ">Contuct Us</h1>
            </div>
          </div>
          <div className=" font-bold text-5xl text-black leading-[60.24px] my-4 ">
            <h1 className="text-primary-color">
              Contuct
              <span className=" text-black "> Us & We Can Work Together</span>
            </h1>
          </div>
          <div className="  leading-6 text-base font-normal my-3 ">
            <p className=" text-[#696969] ">
              Have questions or need assistance? We’d love to hear from you!
              Please fill out the form below or email us at
              [info@brainalgoit.com], and our team will get back to you as soon
              as possible. Your inquiries are important to us!
            </p>
          </div>

          <div className=" flex flex-col  w-full h-full gap-3 ">
            <form action="" method="post" className=" ">
              <input
                type="text"
                placeholder="Entere Your Name"
                className=" w-full h-full p-4 my-3 outline-none border border-[#CACACA] rounded-md "
              />
              <input
                type="Email"
                placeholder="Entere Your Email"
                className=" w-full h-full p-4 my-3 outline-none border border-[#CACACA] rounded-md "
              />
              <textarea
                placeholder=" Enter Your Massage "
                className=" p-4 my-3 outline-none border border-[#CACACA] rounded-md w-full h-[149px] "
              />
              <div className=" my-3  ">
                <Mainbutton />
              </div>
            </form>
          </div>
        </div>
        <div className=" w-full h-full hidden md:flex pt-2 ">
          <Image src={ContuctUs} />
        </div>
      </div>
    </>
  );
};

export default ContuctUssec;
