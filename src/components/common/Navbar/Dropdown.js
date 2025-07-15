"use client";

import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function Dropdown({ id, title, links }) {
  return (
    <div className="relative group">
      <button
        className="flex flex-col items-left px-2 py-1 text-gray-700 cursor-pointer"
      >
        {title}
        <ChevronDownIcon className="w-4 h-4 ml-1" />
      </button>

      {/* Dropdown */}
      <div className="absolute left-0 z-10 mt-2 w-64 bg-white rounded shadow-sm opacity-0 invisible group-hover:visible group-hover:opacity-100">
          <div className="flex flex-col py-2">
            {links.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                target={link.external ? "_blank" : "_self"}
                className={`px-4 py-2 hover:bg-gray-100 text-sm ${
                  link.red ? "text-red-600" : "text-gray-800"
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
