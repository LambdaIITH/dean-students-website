import React from 'react';
import AntiRaggingPledge from '../../components/NewStudents/RegistrationForm';
import CampusMap from '../../components/NewStudents/CampusMap';
import FAQSection from '../../components/NewStudents/FAQSection';
import { Facebook, Twitter, Linkedin } from 'lucide-react';
const NewStudentsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white text-white py-6">
        <div className="container mx-auto px-6">
          <h1 className="text-black text-3xl font-bold">New Students</h1>
          <p className="text-black mt-2">Welcome to IIT Hyderabad - Everything you need to get started</p>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* ti-Ragging Registration Section */}
        <AntiRaggingPledge />



        {/* FAQs Section */}
        <FAQSection />

      {/*footer*/}
    <footer className="bg-gray-800 text-gray-300 py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
      {/* Academics Section */}
      <div className="col-span-1">
        <h3 className="text-white text-base sm:text-lg font-semibold mb-4 sm:mb-6 tracking-wide">ACADEMICS</h3>
        <ul className="space-y-2 sm:space-y-3">
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">AIMS</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">GIAN</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">CCE</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Office of Academic Affairs</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">RAIITH</a></li>
        </ul>
      </div>

      {/* Facilities Section */}
      <div className="col-span-1">
        <h3 className="text-white text-base sm:text-lg font-semibold mb-4 sm:mb-6 tracking-wide">FACILITIES</h3>
        <ul className="space-y-2 sm:space-y-3">
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Library</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Computer Centre</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Central Workshop</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Bus Schedule</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Campus Kitchen</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Medical Facilities</a></li>
        </ul>
      </div>

      {/* Campus Life Section */}
      <div className="col-span-1">
        <h3 className="text-white text-base sm:text-lg font-semibold mb-4 sm:mb-6 tracking-wide">CAMPUS LIFE</h3>
        <ul className="space-y-2 sm:space-y-3">
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Campus Services</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Getting Here</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Campus Navigation</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Security</a></li>
        </ul>
      </div>
    </div>

    {/* Social Media Icons */}
    <div className="flex justify-center space-x-4 sm:space-x-6 mb-6 sm:mb-8">
      <a href="#" className="text-gray-400 hover:text-white transition-colors">
        <Facebook size={20} className="w-5 h-5 sm:w-6 sm:h-6" />
      </a>
      <a href="#" className="text-gray-400 hover:text-white transition-colors">
        <Twitter size={20} className="w-5 h-5 sm:w-6 sm:h-6" />
      </a>
      <a href="#" className="text-gray-400 hover:text-white transition-colors">
        <Linkedin size={20} className="w-5 h-5 sm:w-6 sm:h-6" />
      </a>
    </div>

    {/* Footer Bottom */}
    <div className="border-t border-gray-700 pt-6 sm:pt-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 text-xs sm:text-sm mb-3 md:mb-0 text-center md:text-left">
          © 2025 Indian Institute of Technology Hyderabad, Kandi, Sangareddy, Telangana, India. All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-2">
          <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">Sitemap</a>
          <span className="text-gray-600 hidden sm:inline">|</span>
          <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">RTI</a>
          <span className="text-gray-600 hidden sm:inline">|</span>
          <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">Contact us</a>
        </div>
      </div>
      <p className="text-gray-500 text-xs sm:text-sm mt-3 sm:mt-4 text-center md:text-left">
        Last Updated: 14-July-2025
      </p>
    </div>
  </div>
</footer>
    </div>
    </div>
  );
};

export default NewStudentsPage;
