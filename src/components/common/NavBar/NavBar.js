"use client";

import { useState, useCallback, useMemo } from "react";
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

  // Close mobile menu when route changes
  const closeMobileMenu = useCallback(() => {
    setIsOpen(false);
    setOpenAccordion(null);
  }, []);

  // Memoized navigation items with proper hrefs
  const navItems = useMemo(
    () => [
      { label: "Home", href: "/" },
      { label: "New Students", href: "/new-students", id: "new-students" },
      { label: "Anti-Ragging", href: "/anti-ragging", id: "anti-ragging" },
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
        href: "/student-wellbeing",
        id: "student-wellbeing",
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
    ],
    []
  );

  // Check if item is active
  const isItemActive = useCallback(
    (item) => {
      const topLevel = pathname.split("/")[1] || "";

      if (item.href) {
        const itemTopLevel = item.href.split("/")[1] || "";
        return topLevel === itemTopLevel;
      }

      if (item.id) {
        const isParentActive = topLevel === item.id;
        const isChildActive = item.children?.some((child) => {
          if (child.external) return false;
          const childTopLevel = child.href.split("/")[1] || "";
          return topLevel === childTopLevel;
        });

        return isParentActive || isChildActive;
      }

      return false;
    },
    [pathname]
  );

  // Active styles
  const activeColor = "text-[#fc1900]";
  const defaultColor = "text-[#171e27]";
  const navItemStyle = `font-medium tracking-wide text-[1rem] px-4 py-2 rounded-xl hover:bg-[#f58a42]/15 hover:text-[#9d0000] transition-all duration-200 inline-flex items-center`;

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-200">
      <div className="flex items-center justify-between px-6 py-4 container mx-auto text-[1rem]">
        {/* Logo */}
        <Link
          href="/"
          className="flex-shrink-0 transition-transform hover:scale-[1.1] focus:outline-none focus:ring-2 focus:ring-[#f58a42]/50 rounded-xl"
          aria-label="Home"
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

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="xl:hidden focus:outline-none p-2 rounded-lg hover:bg-[#f58a42]/10 transition duration-200 focus:ring-2 focus:ring-[#f58a42]/50"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6 text-[#171e27]" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-[#171e27]" />
          )}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center space-x-1 text-[1rem]">
          {navItems.map((item) => {
            const isActive = isItemActive(item);
            const hasChildren =
              Array.isArray(item.children) && item.children.length > 0;

            if (hasChildren) {
              return (
                <div key={item.id} className="relative group">
                  <button
                    className={`${navItemStyle} ${
                      isActive ? activeColor : defaultColor
                    } inline-flex items-center`}
                    aria-haspopup="true"
                    aria-expanded={false}
                  >
                    <span>{item.label}</span>
                    <ChevronDownIcon className="h-4 w-4 ml-1" />
                  </button>
                  <div
                    className="absolute hidden group-hover:block bg-white shadow-lg rounded-xl p-2 min-w-[200px] z-50"
                    role="menu"
                  >
                    {item.children.map((child) =>
                      child.external ? (
                        <a
                          key={child.label}
                          href={child.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 rounded-lg hover:bg-[#f58a42]/15 hover:text-[#9d0000] transition-colors duration-200 text-[1rem]"
                          role="menuitem"
                        >
                          {child.label}
                        </a>
                      ) : (
                        <Link
                          key={child.label}
                          href={child.href}
                          className={`block px-4 py-2 rounded-lg hover:bg-[#f58a42]/15 hover:text-[#9d0000] transition-colors duration-200 ${
                            pathname === child.href ? activeColor : defaultColor
                          }`}
                          role="menuitem"
                        >
                          {child.label}
                        </Link>
                      )
                    )}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`${navItemStyle} ${
                  isActive ? activeColor : defaultColor
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div
          className="xl:hidden bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-100 px-6 py-4 space-y-2"
          role="menu"
        >
          {navItems.map((item) => {
            const isActive = isItemActive(item);
            const hasChildren =
              Array.isArray(item.children) && item.children.length > 0;

            if (!hasChildren) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`block font-medium text-xs tracking-wide py-2 px-3 rounded-xl transition-all duration-200 ${
                    isActive
                      ? "text-[#f58a42] font-semibold"
                      : "text-[#171e27] hover:bg-[#f58a42]/15 hover:text-[#9d0000]"
                  }`}
                  onClick={closeMobileMenu}
                  role="menuitem"
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <Dropdown
                key={item.id}
                id={item.id}
                title={item.label}
                links={item.children}
                isActive={isActive}
                openAccordion={openAccordion}
                setOpenAccordion={setOpenAccordion}
                pathname={pathname}
                onChildClick={closeMobileMenu}
              />
            );
          })}
        </div>
      )}
    </header>
  );
}
