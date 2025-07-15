// src/app/page.js
import React from "react";
import Header from "../components/Header.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import HomePageContent from "../components/HomePageContent.jsx";

export default function Home() {
  return (

    <div className="flex flex-col min-h-screen bg-gray-100 font-inter text-gray-900">
      <Header />
      <Navbar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
       
        <HomePageContent />
      </main>
      <Footer />
    </div>
  );
}