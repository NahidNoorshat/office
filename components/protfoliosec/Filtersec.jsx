import React from "react";

const Filtersec = ({ title, selected, onClick }) => {
  return (
    <>
      <div
        onClick={onClick}
        className={`px-2 py-1 sm:px-4 sm:py-2 overflow-hidden rounded-md text-sm sm:text-base  cursor-pointer ${
          selected
            ? "bg-primary-color text-white font-bold"
            : "bg-[#F2F2F2] text-primary-text font-normal"
        }`}
      >
        <h1>{title}</h1>
      </div>
    </>
  );
};

export default Filtersec;
