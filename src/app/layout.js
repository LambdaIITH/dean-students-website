// src/app/layout.js
import React from 'react';
import './globals.css'; // Import global styles

// Import Navbar and Footer components
import Navbar from "../components/common/NavBar/NavBar.js"; // Your unified Navbar
import Footer from "../components/common/Footer.js"; // Your colleague's Footer

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Dean Students - IIT Hyderabad</title>
      </head>
      <body className="font-lato bg-gray-100 text-gray-900 flex flex-col min-h-screen"> {/* Added flex-col min-h-screen */}
        {/* Navbar is now part of the global layout */}
        <Navbar />

        {/* This is the "spacer div" or "offset div" for the fixed Navbar.
            Its height should match the actual height of your Navbar.
            You might need to adjust 'h-32' (128px) after seeing the live preview. */}
        <div className="h-32 w-full"></div> {/* Adjust height as needed */}

        {/* The 'children' prop will render the content of your specific pages (e.g., page.js for Home, page.js for Contact) */}
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>

        {/* Footer is now part of the global layout */}
        <Footer />
      </body>
    </html>
  );
}

