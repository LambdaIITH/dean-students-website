"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import Dropdown from "./Dropdown";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);

  const pathname = usePathname();
  console.log(`pathname: ${pathname}`);
  const topLevel = pathname.split("/")[1] || "";
  console.log(`toplevel: ${topLevel}`);

  const activeColor = "text-[#fc1900]";
  const defaultColor = "text-[#171e27]";
  const navItemStyle =
    "font-medium tracking-wide text-[1rem] px-4 py-2 rounded-xl hover:bg-[#f58a42]/15 hover:text-[#9d0000] transition-all duration-200 inline-flex items-center";

  const mobileLinks = [
    { label: "Home", href: "/" },
    {
      label: "New Students",
      id: "new-students",
      children: [
        {
          href: "/new-students/anti-ragging-pledge/",
          label: "Anti-ragging Pledge",
        },
        { href: "/new-students/campus-map/", label: "Campus Map" },
        { href: "/new-students/faqs/", label: "FAQs" },
      ],
    },
    {
      label: "Anti-Ragging",
      id: "anti-ragging",
      children: [],
    },
    {
      label: "Student Activities",
      id: "student-activities",
      children: [
        {
          href: "https://gymkhana.iith.ac.in/",
          label: "Gymkhana Council",
          external: true,
        },
        { href: "/student-activities/clubs/", label: "Clubs" },
        { href: "/student-activities/fics/", label: "FICs" },
      ],
    },
    {
      label: "Sports",
      id: "sports",
      children: [
        { href: "/sports/facilities/", label: "Sports Facilities" },
        { href: "/sports/nso/", label: "NSO" },
        { href: "/sports/fics/", label: "FICs (Sports)" },
      ],
    },
    {
      label: "Sunshine",
      id: "mental-well-being",
      children: [
        {
          href: "https://sunshine.iith.ac.in/",
          label: "Faculty",
          external: true,
        },
        { href: "/mental-well-being/fics/", label: "FICs (Sunshine)" },
        { href: "/mental-well-being/counsellors/", label: "Counsellors" },
      ],
    },
    {
      label: "Hostels",
      id: "hostels",
      children: [
        { href: "/hostels/hostel-info/", label: "Hostel Information" },
        { href: "/hostels/hcu/", label: "HCU" },
      ],
    },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-200">
      <div className="flex items-center justify-between px-6 py-4 container mx-auto text-[1rem]">
        <Link
          href="/"
          className="flex-shrink-0 transition-transform hover:scale-[1.1]"
        >
          <div className="p-1.5 rounded-xl">
            <Image
              src="/assets/horzlogolong.png"
              alt="IITH Logo"
              width={220}
              height={65}
              className="object-contain h-12 w-auto"
              priority
            />
          </div>
        </Link>

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

        <nav className="hidden xl:flex items-center space-x-1 text-[1rem]">
          <Link
            href="/"
            className={`${navItemStyle} ${
              pathname === "/" ? activeColor : defaultColor
            }`}
          >
            Home
          </Link>

          {mobileLinks
            .filter((item) => item.id)
            .map(({ label, id, children }) => (
              <Dropdown
                key={id}
                id={id}
                title={label}
                className={`${topLevel === id ? activeColor : defaultColor}`}
                links={children}
              />
            ))}

          <Link
            href="/contact"
            className={`${navItemStyle} ${
              topLevel === "contact" ? activeColor : defaultColor
            }`}
          >
            Contact
          </Link>
        </nav>
      </div>

      {isOpen && (
        <div className="xl:hidden bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-100 px-6 py-4 space-y-2">
          {mobileLinks.map(({ label, href, id, children }) => {
            const isDropdown = !!id;
            const isActive =
              topLevel === id || topLevel === (href?.split("/")[1] || "");

            if (!isDropdown) {
              return (
                <Link
                  key={label}
                  href={href}
                  className={`block font-medium text-xs tracking-wide py-2 px-3 rounded-xl transition-all duration-200 ${
                    isActive
                      ? "text-[#f58a42] font-semibold"
                      : "text-[#171e27] hover:bg-[#f58a42]/15 hover:text-[#9d0000]"
                  }`}
                >
                  {label}
                </Link>
              );
            }

            return (
              <div key={id}>
                <button
                  onClick={() =>
                    setOpenAccordion(openAccordion === id ? null : id)
                  }
                  className={`w-full flex justify-between items-center font-medium text-xs tracking-wide py-2 px-3 rounded-xl transition-all duration-200 ${
                    isActive
                      ? "text-[#f58a42]"
                      : "text-[#171e27] hover:bg-[#f58a42]/15 hover:text-[#9d0000]"
                  }`}
                >
                  {label}
                  <ChevronDownIcon
                    className={`h-4 w-4 ml-2 transform transition-transform duration-200 ${
                      openAccordion === id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openAccordion === id && (
                  <div className="ml-4 mt-1 space-y-1">
                    {children.map(({ label, href, external }) =>
                      external ? (
                        <a
                          key={label}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-xs text-[#171e27] hover:text-[#f58a42] px-3 py-1 rounded-md"
                        >
                          {label}
                        </a>
                      ) : (
                        <Link
                          key={label}
                          href={href}
                          className={`block text-xs px-3 py-1 rounded-md ${
                            pathname === href
                              ? "text-[#f58a42] font-semibold"
                              : "text-[#171e27] hover:text-[#f58a42]"
                          }`}
                        >
                          {label}
                        </Link>
                      )
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </header>
  );
}
