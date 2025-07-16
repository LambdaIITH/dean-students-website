import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import NavBar from "../components/common/navbar/NavBar";
import Footer from "../components/common/footer/Footer";

// Initialize fonts
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Dean Students - IIT Hyderabad</title>
      </head>
      <body className="antialiased">
        <div className="min-h-screen flex flex-col">
          <NavBar />
          <main className="flex-grow pt-24 bg-[#ECEEEF]">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
