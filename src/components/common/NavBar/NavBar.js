"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Dropdown from "./Dropdown";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-sm">
      <div className="flex items-center justify-between px-6 py-2 container mx-auto text-sm">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/horzlogolong.png"
            alt="IITH Logo"
            width={245}
            height={70}
            className="object-contain"
          />
        </Link>

        {/* Hamburger Button (Mobile only) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="xl:hidden focus:outline-none"
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6 text-gray-700" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-gray-700" />
          )}
        </button>

        {/* Navigation */}
        <nav className="hidden xl:flex space-x-0">
          <Link href="/" className="text-[#d1402a] font-medium px-2 py-1">
            HOME
          </Link>

          <Dropdown
            id="new-students"
            title="NEW STUDENTS"
            links={[
              {
                href: "/new-students/anti-ragging-pledge/",
                label: "Anti-ragging Pledge",
              },
              { href: "/new-students/campus-map/", label: "Campus Map" },
              { href: "/new-students/faqs/", label: "FAQs" },
            ]}
          />

          <Dropdown id="anti-ragging" title="ANTI RAGGING" links={[]} />

          <Dropdown
            id="student-activities"
            title="STUDENT ACTIVITIES"
            links={[
              {
                href: "https://gymkhana.iith.ac.in/",
                label: "Gymkhana Council",
                external: true,
              },
              {
                href: "/student-activities/clubs/",
                label: "Clubs",
              },
              { href: "/student-activities/fics/", label: "FICs" },
            ]}
          />

          <Dropdown
            id="sports"
            title="SPORTS"
            links={[
              { href: "/sports/facilities/", label: "Sports Facilities" },
              { href: "/sports/nso/", label: "NSO" },
              { href: "/sports/fics/", label: "FICs (Sports)" },
            ]}
          />

          <Dropdown
            id="mental-well-being"
            title="MENTAL WELL-BEING"
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
            links={[
              { href: "/hostels/hostel-info/", label: "Hostel Information" },
              { href: "/hostels/hcu/", label: "HCU" },
            ]}
          />

          <Link
            href="/contact"
            className="text-[#d1402a] font-medium px-2 py-1"
          >
            CONTACT
          </Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="xl:hidden bg-white shadow-sm px-6 py-4 space-y-2">
          <Link href="/" className="block text-[#333333] font-medium">
            Home
          </Link>
          <Link href="/" className="block text-[#333333] font-medium">
            New Students
          </Link>
          <Link href="/" className="block text-[#333333] font-medium">
            Anti-Ragging
          </Link>
          <Link href="/" className="block text-[#333333] font-medium">
            Student Activities
          </Link>
          <Link href="/" className="block text-[#333333] font-medium">
            Sports
          </Link>
          <Link href="/" className="block text-[#333333] font-medium">
            Sunshine
          </Link>
          <Link href="/" className="block text-[#333333] font-medium">
            Hostels
          </Link>
          <Link href="/" className="block text-[#333333] font-medium">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
