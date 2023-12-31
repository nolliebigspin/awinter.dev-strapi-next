"use client";

import { LinkItem } from "@/types";
import Link from "next/link";
import React, { useState } from "react";

import Logo from "./Logo";

const Navigation = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigationItems: LinkItem[] = [
    { label: "about", href: "/about" },
    { label: "blog", href: "/blog" },
  ];

  const hamburgerBar =
    "h-1 w-8 my-1 rounded-full bg-dark dark:bg-light transform duration-200";

  return (
    <nav
      className={`sticky top-0 z-40 bg-gray ${
        isMobileMenuOpen
          ? "bg-opacity-40 dark:bg-opacity-20"
          : "bg-opacity-20 dark:bg-opacity-10"
      } p-4 bg-blend-multiply backdrop-blur-sm transition-all duration-200`}
    >
      <div className="flex items-center justify-between">
        <Link href="/" onClick={() => setMobileMenuOpen(false)}>
          <Logo size={40} animation />
        </Link>
        <div className="hidden md:flex">
          <ul className="flex space-x-6 text-xl">
            {navigationItems.map((item) => (
              <li key={item.label} onClick={() => setMobileMenuOpen(false)}>
                <Link href={item.href} className="font-bold hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:hidden">
          <button
            className="group flex h-12 w-12 flex-col items-center justify-center"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div
              className={`${hamburgerBar} ${
                isMobileMenuOpen
                  ? "translate-y-3 rotate-45 group-hover:scale-110"
                  : "group-hover:scale-110"
              }`}
            />
            <div
              className={`${hamburgerBar} ${
                isMobileMenuOpen ? "opacity-0" : "group-hover:scale-110"
              }`}
            />
            <div
              className={`${hamburgerBar} ${
                isMobileMenuOpen
                  ? "-translate-y-3 -rotate-45 group-hover:scale-110"
                  : "group-hover:scale-110"
              }`}
            />
          </button>
        </div>
      </div>
      <div
        role="region"
        aria-labelledby={`navigation-mobile-toggle`}
        className={`grid overflow-hidden text-sm duration-200 lg:hidden ${
          isMobileMenuOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <ul className="space-y-2 p-4 text-xl">
            {navigationItems.map((item) => (
              <li key={item.label} onClick={() => setMobileMenuOpen(false)}>
                <Link href={item.href} className="font-bold hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
