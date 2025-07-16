
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import NavBar from "../components/common/navbar/NavBar";
import Footer from "../components/common/footer/Footer";

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <NavBar />
          <main className="flex-grow pt-24 bg-[#ECEEEF]">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

