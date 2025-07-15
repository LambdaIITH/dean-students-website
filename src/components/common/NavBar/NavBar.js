"use client";

import Link from "next/link";
import Image from "next/image";
import Dropdown from "./Dropdown";

export default function NavBar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-sm">
      <div className="flex items-center justify-between px-10 py-2 container mx-auto text-sm">
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

        {/* Navigation */}
        <nav className="hidden md:flex space-x-0">
          <Link href="/" className="text-[#d1402a] font-medium px-2 py-1">
            HOME
          </Link>

          <Dropdown
            id="new-students"
            title="NEW STUDENTS"
            links={[
              { href: "/new-students/anti-ragging-pledge/", label: "Anti-ragging Pledge" },
              { href: "/new-students/campus-map/", label: "Campus Map" },
              { href: "/new-students/faqs/", label: "FAQs" },
            ]}
          />

          <Dropdown
            id="anti-ragging"
            title="ANTI RAGGING"
            links={[]}
          />

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
              { href: "/sports/aboutiith/", label: "Sports Facilities" },
              {
                href: "/sports/nso/",
                label: "NSO",
                external: true,
              },
              { href: "/sports/fics/", label: "FICs (Sports)" },
            ]}
          />

          <Dropdown
            id="mental-well-being"
            title="MENTAL WELL-BEING"
            links={[
              { href: "https://sunshine.iith.ac.in/", label: "Faculty", external: true, },
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
    </header>
  );
}
