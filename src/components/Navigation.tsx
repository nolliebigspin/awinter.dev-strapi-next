"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import Logo from "/public/LogoIMG.png";

export type NavigationItem = {
  label: string;
  href: string;
};

const Navigation = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigationItems: NavigationItem[] = [
    { label: "about", href: "/about" },
    { label: "blog", href: "/blog" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const hamburgerBar =
    "h-1 w-8 my-1 rounded-full bg-dark dark:bg-light transition transform duration-200";

  return (
    <nav className="sticky top-0 z-40 bg-lightGray bg-opacity-20 p-4 bg-blend-multiply ring-2 ring-lightGray backdrop-blur-sm dark:bg-opacity-10 dark:ring-darkGray">
      <div className="flex items-center justify-between">
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo"
            width={40}
            height={40}
            unoptimized
            className="transform transition duration-200 hover:scale-110"
          />
        </Link>
        <div className="hidden md:flex">
          <ul className="flex space-x-6 text-xl">
            {navigationItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-white font-bold hover:underline"
                >
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
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <ul className="text-white space-y-2 p-4 text-xl">
            {navigationItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-white font-bold hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
