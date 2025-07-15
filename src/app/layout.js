// src/app/layout.js
import React from 'react';
// We don't import 'Head' directly here for meta tags in App Router.
// Meta tags and title are typically placed directly within the <head> tag inside the RootLayout function.
import './globals.css'; // This line is CRUCIAL for loading your Tailwind styles

export default function RootLayout({ children }) {
  return (
    // The <html> tag is required as the root element of your document.
    <html lang="en">
      {/* The <head> tag contains meta-information about the document. */}
      <head>
        <meta charSet="utf-8" /> {/* Recommended for character encoding */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Dean Academics - IIT Hyderabad</title>
        {/* The font import is handled in globals.css, so no direct <link> tag needed here for Lato */}
      </head>
      {/* The <body> tag contains all the contents of the HTML document. */}
      {/* Apply the 'font-lato' class here to ensure your custom font is used throughout the app.
          bg-gray-100 provides a light background for the entire page. */}
      <body className="font-lato bg-gray-100 text-gray-900">
        {children} {/* This prop represents the content of your pages (e.g., page.js, nested layouts) */}
      </body>
    </html>
  );
}