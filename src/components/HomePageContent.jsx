"use client";

import React, { useState, useEffect } from 'react';

const HomePageContent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Delay for the "late popup" effect

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={`
        bg-white shadow-md rounded-lg p-8 mb-8 text-center
        transition-all duration-1000 ease-out transform
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
      `}
    >

      <h2 className="text-4xl sm:text-5xl font-bold text-[#FC5407] mb-6">
        Welcome to the Office of Dean (Students), IIT Hyderabad
      </h2>
      <p className="text-xl sm:text-2xl text-gray-800 leading-relaxed max-w-4xl mx-auto">
        The Office of the Dean Students is dedicated to fostering a vibrant campus life,
        ensuring student welfare, and promoting a supporting learning environment for all.
      </p>
    </section>
  );
};

export default HomePageContent;


