import React from "react";

const Mainbutton = () => {
  return (
    <div className="relative min-w-28 w-full max-w-44 flex items-center justify-center px-5 py-2 rounded-lg cursor-pointer overflow-hidden group">
      {/* Base button background */}
      <div className="absolute inset-0 bg-primary-color"></div>

      {/* Hover animation overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#ce6c6c] to-[#10e2bf] transform -translate-x-full transition-transform duration-500 ease-in-out group-hover:animate-slideLeftRight group-hover:translate-x-0"></div>

      {/* Text content with hover color change */}
      <h1 className="relative z-10 text-center font-semibold text-base leading-6 tracking-wide text-white group-hover:text-black">
        Contact Us
      </h1>
    </div>
  );
};

export default Mainbutton;
