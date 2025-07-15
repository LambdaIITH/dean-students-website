// src/app/page.js
import React from "react";
// import Header from "../components/common/Header.jsx";
import Navbar from "../components/common/Navbar/NavBar.js";
import Footer from "../components/common/Footer.js";
import HomePageContent from "../components/HomePageContent.jsx";

export default function Home() {
  return (

    <div className="flex flex-col min-h-screen bg-gray-100 font-inter text-gray-900">
  
      
      <Navbar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-50">
       
        <HomePageContent />
      </main>
      <Footer />
    </div>
  );
}