"use client";

import React, { useState } from "react";
import Filtersec from "./Filtersec";
import SliderProject from "./SliderProject";

const OurProtfolio = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const handleFilterClick = (title) => {
    setSelectedFilter(title);
  };
  return (
    <>
      <div className=" flex flex-col max-w-7xl w-full h-full items-center   ">
        <div className=" flex flex-col gap-2 items-center ">
          <div className=" flex items-center gap-4 ">
            <div className="  border-2 w-[143px] bg-[#D8D8D8] "></div>
            <div className=" flex font-normal text-[#696969] text-base leading-6 ">
              <h1 className="  ">
                Our{" "}
                <span className=" text-primary-color font-normal">
                  Portfolio
                </span>{" "}
              </h1>
            </div>
            <div className="  border-2 w-[143px] bg-[#D8D8D8] "></div>
          </div>
          <div className=" ">
            <h1 className=" font-bold text-5xl leading-[60.24px] w-[450px] text-center mt-3 ">
              {" "}
              <span className=" text-primary-color "> Projects</span> We Have
              Completed
            </h1>
          </div>
        </div>
        <div className=" mt-12 flex gap-2 ">
          <Filtersec
            title={"All"}
            selected={selectedFilter === "All"}
            onClick={() => handleFilterClick("All")}
          />
          <Filtersec
            title={"UI/UX"}
            selected={selectedFilter === "UI/UX"}
            onClick={() => handleFilterClick("UI/UX")}
          />
          <Filtersec
            title={"Web Development"}
            selected={selectedFilter === "Web Development"}
            onClick={() => handleFilterClick("Web Development")}
          />
          <Filtersec
            title={"Mobile Application"}
            selected={selectedFilter === "Mobile Application"}
            onClick={() => handleFilterClick("Mobile Application")}
          />
          <Filtersec
            title={"SEO"}
            selected={selectedFilter === "SEO"}
            onClick={() => handleFilterClick("SEO")}
          />
        </div>
        {/* ********* slider section ********** */}
        <div className=" mt-9 px-2 h-full w-full flex flex-col items-center ">
          <SliderProject />
        </div>
      </div>
    </>
  );
};

export default OurProtfolio;
