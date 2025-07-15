import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-white py-2 px-12 sm:px-8 w-full mx-auto flex items-center justify-between shadow-2xl rounded-b-lg">
      <div className="w-50 h-30 flex-shrink-0 mr-4 flex items-center justify-center">
        <img
          src="assets/iith_logo.png"
          alt="IIT Hyderabad Logo"
          className="w-full h-full object-contain"
        />
      </div>
      <h1 className="flex-grow text-right text-xl sm:text-2xl md:text-3xl font-semibold text-iith-orange-dark">
        Dean Academics IIT Hyderabad
      </h1>
    </header>
  );
};

export default Header;
