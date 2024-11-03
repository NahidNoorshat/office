import Image from "next/image";
import React from "react";
import service from "../../public/contact/contactuspic.jpg";
import Mainbutton from "@/components/button/Mainbutton";
import { IoMailOutline, IoLocationOutline } from "react-icons/io5";
import {
  RiFacebookBoxFill,
  RiLinkedinBoxFill,
  RiXboxFill,
} from "react-icons/ri";

const page = () => {
  return (
    <>
      <div className=" min-h-screen w-screen  flex flex-col items-center  overflow-hidden ">
        <div className=" relative w-full">
          <Image
            src={service}
            alt="abouthero"
            className=" object-fill w-full h-[250px] md:h-[400px] lg:h-[600px]  "
          />
          <div className=" absolute inset-0 bg-[#0f0e11] opacity-20 "></div>
        </div>
        <div className=" container mx-auto my-4 flex items-center justify-center ">
          <div className=" w-full h-full max-w-7xl  flex flex-col md:flex-row justify-between items-center gap-x-6  ">
            <div className=" w-full h-full flex flex-col py-6 ">
              <div className=" flex items-center gap-4 ">
                <div className="  border-2 w-[143px] bg-[#D8D8D8] "></div>
                <div className=" flex font-bold text-base leading-6 ">
                  <h1 className=" text-primary-color  ">Contact Us</h1>
                </div>
              </div>
              <div className=" font-bold text-5xl text-black leading-[60.24px] my-4 ">
                <h1 className="text-primary-color">
                  Contact
                  <span className=" text-black ">
                    {" "}
                    Us & We Can Work Together
                  </span>
                </h1>
              </div>
              <div className="  leading-6 text-base font-normal my-3 ">
                <p className=" text-[#696969] ">
                  Have questions or need assistance? We’d love to hear from you!
                  Please fill out the form below or email us at
                  [info@brainalgoit.com], and our team will get back to you as
                  soon as possible. Your inquiries are important to us!
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
            <div className=" w-full h-full flex flex-col px-8 py-7 gap-y-4 bg-primary-color text-white ">
              <h1 className=" font-semibold text-4xl  ">Contact Information</h1>
              <p className=" text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem, accusamus omnis. Error reiciendis debitis, alias
                ex ipsa accusantium sunt laborum?
              </p>
              <div className="flex items-center gap-5 ">
                <IoMailOutline className=" text-white h-16 w-16  " />
                <h1 className=" text-3xl ">info@brainalgoit.com</h1>
              </div>
              <div className="flex items-center gap-5 ">
                <IoMailOutline className=" text-white h-16 w-16  " />
                <h1 className="text-3xl">info@brainalgoit.com</h1>
              </div>
              <div className="flex items-center gap-5 ">
                <IoLocationOutline className=" text-white h-16 w-16  " />
                <h1 className="text-3xl">Sector#10, Uttara, Dhaka-1230</h1>
              </div>
              <div className=" w-full flex flex-col items-center  ">
                <h2>Follow for Social</h2>
                <div className=" flex items-center gap-3 ">
                  <RiFacebookBoxFill className=" w-8 h-8 " />
                  <RiLinkedinBoxFill className=" w-8 h-8 " />
                  <RiXboxFill className=" w-8 h-8 " />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-8 w-full h-full flex flex-col items-center px-3  py-6   ">
          <div className=" max-w-7xl w-full h-full flex-col flex items-center text-center gap-3 ">
            <h1 className=" text-primary-color font-semibold text-5xl leading-[74.4px] drop-shadow-xl  ">
              Our Team Location
            </h1>
            <p className=" text-black/70 text-base font-normal tracking-wider ">
              We have offices and teams operating all around the world.
            </p>
            <div className=" w-full h-[420px]  overflow-hidden customshadow my-3 ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d97878.17985130507!2d90.41475990773101!3d23.850194205442325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1713082301726!5m2!1sen!2sbd"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className=" w-full h-full "
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
