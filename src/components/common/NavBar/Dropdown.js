"use client";

import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function Dropdown({
  id,
  title,
  links,
  isActive = false,
  openAccordion,
  setOpenAccordion,
  pathname,
  onChildClick,
}) {
  const isOpen = openAccordion === id;

  const toggleAccordion = () => {
    setOpenAccordion(isOpen ? null : id);
  };

  return (
    <div>
      <button
        onClick={toggleAccordion}
        className={`w-full flex justify-between items-center font-medium text-xs tracking-wide py-2 px-3 rounded-xl transition-all duration-200 ${
          isActive
            ? "text-[#f58a42]"
            : "text-[#171e27] hover:bg-[#f58a42]/15 hover:text-[#9d0000]"
        }`}
        aria-expanded={isOpen}
        aria-controls={`dropdown-menu-${id}`}
        id={`dropdown-button-${id}`}
      >
        {title}
        <ChevronDownIcon
          className={`h-4 w-4 ml-2 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <div
          id={`dropdown-menu-${id}`}
          className="ml-4 mt-1 space-y-1"
          role="menu"
          aria-labelledby={`dropdown-button-${id}`}
        >
          {links.map(({ label, href, external }) =>
            external ? (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xs text-[#171e27] hover:text-[#f58a42] px-3 py-1 rounded-md"
                role="menuitem"
                onClick={onChildClick}
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
                role="menuitem"
                onClick={onChildClick}
                aria-current={pathname === href ? "page" : undefined}
              >
                {label}
              </Link>
            )
          )}
        </div>
      )}
    </div>
  );
}
