"use client";

import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function Dropdown({ id, title, links, className }) {
  return (
    <div className="relative group h-full">
      <button
        className={
          className +
          " flex items-center px-2 py-1 h-full text-[#171e27] font-medium hover:text-[#d1402a] hover:bg-[#f58a42]/10 rounded cursor-pointer transition-all duration-200"
        }
      >
        <span>{title}</span>
        <ChevronDownIcon className="w-3 h-3 ml-1 transform transition-transform duration-200 group-hover:rotate-180" />
      </button>

      {/* Dropdown */}
      <div className="absolute left-0 z-20 min-w-56 w-max bg-white/95 backdrop-blur-sm rounded-lg shadow-lg border border-gray-100 opacity-0 invisible transform translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 overflow-hidden">
        <div className="py-2">
          {links.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              target={link.external ? "_blank" : "_self"}
              className={`block px-4 py-2 text-sm transition-all duration-200 hover:bg-[#f58a42]/10 hover:text-[#9d0000] whitespace-nowrap ${
                link.red ? "text-[#d1402a]" : "text-[#171e27]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
