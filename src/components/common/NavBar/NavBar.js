"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Dropdown from "./Dropdown";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItemStyle =
    "text-[#d1402a] font-medium tracking-wide text-sm px-4 py-2 rounded-xl hover:bg-[#f58a42]/15 hover:text-[#9d0000] transition-all duration-200 inline-flex items-center";

  const mobileLinks = [
    { label: "Home", href: "/" },
    { label: "New Students", href: "/new-students" },
    { label: "Anti-Ragging", href: "/anti-ragging" },
    { label: "Student Activities", href: "/student-activities" },
    { label: "Sports", href: "/sports" },
    { label: "Sunshine", href: "/mental-well-being" },
    { label: "Hostels", href: "/hostels" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-200">
      <div className="flex items-center justify-between px-6 py-4 container mx-auto text-sm">
        {/* Logo with centered shadow */}
        <Link
          href="/"
          className="flex-shrink-0 transition-transform hover:scale-[1.03]"
        >
          <div className="p-1.5 rounded-xl">
            <Image
              src="/horzlogolong.png"
              alt="IITH Logo"
              width={220}
              height={65}
              className="object-contain h-12 w-auto"
              priority
            />
          </div>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="xl:hidden focus:outline-none p-2 rounded-lg hover:bg-[#f58a42]/10 transition duration-200"
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6 text-[#171e27]" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-[#171e27]" />
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center space-x-1">
          <Link href="/" className={navItemStyle}>
            HOME
          </Link>

          <Dropdown
            id="new-students"
            title="NEW STUDENTS"
            className={navItemStyle}
            links={[
              {
                href: "/new-students/anti-ragging-pledge/",
                label: "Anti-ragging Pledge",
              },
              { href: "/new-students/campus-map/", label: "Campus Map" },
              { href: "/new-students/faqs/", label: "FAQs" },
            ]}
          />

          <Dropdown
            id="anti-ragging"
            title="ANTI RAGGING"
            links={[]}
            className={navItemStyle}
          />

          <Dropdown
            id="student-activities"
            title="STUDENT ACTIVITIES"
            className={navItemStyle}
            links={[
              {
                href: "https://gymkhana.iith.ac.in/",
                label: "Gymkhana Council",
                external: true,
              },
              { href: "/student-activities/clubs/", label: "Clubs" },
              { href: "/student-activities/fics/", label: "FICs" },
            ]}
          />

          <Dropdown
            id="sports"
            title="SPORTS"
            className={navItemStyle}
            links={[
              { href: "/sports/facilities/", label: "Sports Facilities" },
              { href: "/sports/nso/", label: "NSO" },
              { href: "/sports/fics/", label: "FICs (Sports)" },
            ]}
          />

          <Dropdown
            id="mental-well-being"
            title="MENTAL WELL-BEING"
            className={navItemStyle}
            links={[
              {
                href: "https://sunshine.iith.ac.in/",
                label: "Faculty",
                external: true,
              },
              { href: "/mental-well-being/fics/", label: "FICs (Sunshine)" },
              { href: "/mental-well-being/counsellors/", label: "Counsellors" },
            ]}
          />

          <Dropdown
            id="hostels"
            title="HOSTELS"
            className={navItemStyle}
            links={[
              { href: "/hostels/hostel-info/", label: "Hostel Information" },
              { href: "/hostels/hcu/", label: "HCU" },
            ]}
          />

          <Link href="/contact" className={navItemStyle}>
            CONTACT
          </Link>
        </nav>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="xl:hidden bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-100 px-6 py-4 space-y-2">
          {mobileLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="block text-[#171e27] font-medium text-sm tracking-wide py-2 px-3 rounded-xl hover:bg-[#f58a42]/15 hover:text-[#9d0000] transition-all duration-200"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
