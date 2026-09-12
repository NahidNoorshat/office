import React from "react";
import Link from "next/link";

const Mainbutton = () => {
  return (
    <Link
      href="/contact"
      className="relative min-w-28 w-full max-w-44 flex items-center justify-center px-4 py-2 rounded-lg cursor-pointer overflow-hidden group"
    >
      {/* Base button background */}
      <div className="absolute inset-0 bg-primary-color"></div>

      {/* Hover animation overlay */}
      <div className="pointer-events-none absolute inset-0 -translate-x-full rounded-lg bg-gradient-to-r from-[#ce6c6c] to-[#10e2bf] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></div>

      {/* Text content with hover color change */}
      <span className="relative z-10 text-center font-semibold text-base leading-6 tracking-wide text-white group-hover:text-black">
        Contact Us
      </span>
    </Link>
  );
};

export default Mainbutton;
