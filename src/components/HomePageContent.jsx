"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image'; // For optimized image loading
import Link from 'next/link'; // For internal navigation
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'; // Icons for navigation

export default function HomePageContent() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const carouselIntervalRef = useRef(null); // Ref to store the interval ID

  // Array of image URLs for the carousel background
  const carouselImages = [
    'https://www.iith.ac.in/assets/images/slider/convocation-2025.jpg',
    'https://www.iith.ac.in/assets/images/slider/gya_1.jpeg',
    'https://www.iith.ac.in/assets/images/slider/gya_2.jpeg',
    'https://www.iith.ac.in/assets/images/slider/gya_3.jpeg',
    'https://www.iith.ac.in/assets/images/slider/gya_4.jpeg'
  ];

  // Function to start or reset the carousel auto-play interval
  const startCarouselInterval = useCallback(() => {
    if (carouselIntervalRef.current) {
      clearInterval(carouselIntervalRef.current); // Clear any existing interval
    }
    carouselIntervalRef.current = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % carouselImages.length
      );
    }, 5000); // Change image every 5 seconds
  }, [carouselImages.length]); // Recreate if carouselImages length changes

  useEffect(() => {
    // Basic fade-in animation for the main content
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    startCarouselInterval(); // Start auto-play on component mount

    return () => {
      clearTimeout(timer);
      if (carouselIntervalRef.current) {
        clearInterval(carouselIntervalRef.current); // Clean up interval on component unmount
      }
    };
  }, [startCarouselInterval]); // Effect depends on startCarouselInterval

  // Function to go to the previous image
  const goToPrev = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + carouselImages.length) % carouselImages.length
    );
    startCarouselInterval(); // Reset auto-play timer after manual navigation
  };

  // Function to go to the next image
  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex + 1) % carouselImages.length
    );
    startCarouselInterval(); // Reset auto-play timer after manual navigation
  };


  const newsItems = [
    {
      id: 1,
      title: 'PG Admissions Portal for July 2025 Closed',
      date: 'May 20, 2025',
      description: 'The admissions portal for Postgraduate programs for the July 2025 intake has officially closed.',
      link: 'https://www.iith.ac.in/news/',
    },
    {
      id: 2,
      title: 'Prof. Chandra Shekhar Sharma Elected INSA Associate Fellow',
      date: 'May 13, 2025',
      description: 'IIT Hyderabad congratulates Prof. Chandra Shekhar Sharma on his election as an INSA Associate Fellow (IAF) - 2025.',
      link: 'https://www.iith.ac.in/news/',
    },
  ];

  const eventItems = [
    {
      id: 1,
      title: 'PSB\'s FinTech Cybersecurity Hackathon 2025',
      date: 'June 01 - July 31, 2025',
      description: 'Bank of India (BOI) is proud to host PSB\'s FinTech & Cybersecurity Hackathon 2025 in collaboration with IIT Hyderabad.',
      link: 'https://www.iith.ac.in/events/',
    },
    {
      id: 2,
      title: 'International Conference on Chemistry For Sustainability',
      date: 'July 13 - July 16, 2025',
      description: 'This conference aims to bring together experts to discuss advancements in sustainable chemistry.',
      link: 'https://www.iith.ac.in/events/',
    },
  ];

  return (
    <div className={`transition-opacity duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* 1. Hero Section: Photo Carousel Background with IITH Logo Overlay */}
      {/* w-screen, left-1/2, -translate-x-1/2 force it to span full viewport width and center it */}
      <section className="relative w-screen h-screen overflow-hidden bg-black flex items-center justify-center left-1/2 transform -translate-x-1/2">

        {/* Carousel Background Images */}
        {carouselImages.map((imageSrc, index) => (
          <Image
            key={index}
            src={imageSrc}
            alt={`IIT Hyderabad Campus ${index + 1}`}
            layout="fill"
            objectFit="cover"
            quality={80}
            className={`absolute transition-opacity duration-1000 ease-in-out
                        ${index === currentImageIndex ? 'opacity-100 z-0' : 'opacity-0 -z-10'}`}
            priority={index === 0}
          />
        ))}

        {/* Overlay for tint */}
        <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

                {/* Navigation Buttons */}
        <button
          onClick={goToPrev}
          className="absolute left-4 z-30 p-3 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-75 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Previous image"
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 z-30 p-3 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-75 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Next image"
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      </section>

      {/* Main content wrapper */}
      <div className="w-full">
        {/* 2. About Us Section */}
        <section className="bg-white shadow-md rounded-lg p-8 container mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <h2 className="text-4xl font-extrabold text-center text-black mb-8 underline">
            About Us
          </h2>
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-black mb-4">
              Welcome to the Office of Dean Students, IIT Hyderabad
            </h3>
            <p className="text-xl text-gray-800 leading-relaxed max-w-4xl mx-auto">
              The Office of the Dean Students is dedicated to fostering a vibrant campus life,
              ensuring student welfare, and promoting a supporting learning environment for all.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700">
            <div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision & Approach</h4>
              <p className="mb-4">
                IIT Hyderabad stands for "Inventing and Innovating in Technology for Humanity." We are committed to fostering cutting-edge inventions and technological innovations through a strategic framework that promotes innovation, entrepreneurship, and research, often in collaboration with industry. Our aim is to develop human power with creativity, technology, and passion for the betterment of India and humankind.
              </p>
              <p>
                Our unique fractal academic curriculum exposes students to a wide breadth of knowledge while allowing for in-depth understanding and expertise development based on individual interests. We mandate interdisciplinary courses and credits in creative arts and humanities, shaping highly valued assets.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">Student Life & Research Ecosystem</h4>
              <p className="mb-4">
                Beyond academics, IIT Hyderabad offers a vibrant student life supported by various initiatives. The <span className="font-semibold text-iith-orange-dark">Gymkhana Council</span> oversees numerous student activities, including diverse <span className="font-semibold text-iith-orange-dark">technical and cultural clubs</span>, and interest groups (FICs). Our annual fests like <span className="font-semibold text-iith-orange-dark">Elan & ηVision</span> are major highlights.
              </p>
              <p>
                Our strong research culture is supported by state-of-the-art facilities and labs, including the <span className="font-semibold text-iith-orange-dark">TiHAN (Technology Innovation Hub on Autonomous Navigation)</span>, <span className="font-semibold text-iith-orange-dark">Design Innovation Center</span>, <span className="font-semibold text-iith-orange-dark">Nano-X Fabrication facility</span>, and various <span className="font-semibold text-iith-orange-dark">Centers of Excellence (CoE)</span> in fields like AI and Sustainable Development. We encourage students to engage in groundbreaking research that contributes to societal advancement.
              </p>
            </div>
          </div>
        </section>

        {/* 3. News & Events Section */}
        <section className="bg-white shadow-md rounded-lg p-8 mb-12 container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-center text-black mb-8 underline">
            News & Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* News Column */}
            <div>
              <h3 className="text-3xl font-bold text-black mb-6 text-center underline">Latest News</h3>
              <div className="space-y-6">
                {newsItems.map((news) => (
                  <div key={news.id} className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200 transition-all duration-200 ease-in-out transform hover:scale-[1.01] hover:shadow-md">
                    <h4 className="text-xl font-semibold text-iith-orange-dark mb-2">{news.title}</h4>
                    <p className="text-gray-600 text-sm mb-3">{news.date}</p>
                    <p className="text-gray-700 mb-4">{news.description}</p>
                    <Link href={news.link} className="text-blue-600 hover:text-blue-800 font-medium underline transition-colors duration-200">
                      Read More &rarr;
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Events Column */}
            <div>
              <h3 className="text-3xl font-bold text-black mb-6 text-center underline">Upcoming Events</h3>
              <div className="space-y-6">
                {eventItems.map((event) => (
                  <div key={event.id} className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200 transition-all duration-200 ease-in-out transform hover:scale-[1.01] hover:shadow-md">
                    <h4 className="text-xl font-semibold text-iith-orange-dark mb-2">{event.title}</h4>
                    <p className="text-gray-600 text-sm mb-3">{event.date}</p>
                    <p className="text-gray-700 mb-4">{event.description}</p>
                    <Link href={event.link} className="text-blue-600 hover:text-blue-800 font-medium underline transition-colors duration-200">
                      View Details &rarr;
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
