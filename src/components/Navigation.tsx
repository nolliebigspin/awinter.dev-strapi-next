"use client";

import Link from "next/link";
import React, { useState } from "react";
import Logo from "/public/LogoIMG.png";
import Image from "next/image";

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
    <nav className="sticky top-0 p-4 backdrop-blur-sm bg-lightGray bg-opacity-20 dark:bg-opacity-10 z-40 bg-blend-multiply ring-2 ring-lightGray dark:ring-darkGray">
      <div className="flex justify-between items-center">
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo"
            width={40}
            height={40}
            unoptimized
            className="hover:scale-110 transition transform duration-200"
          />
        </Link>
        <div className="md:flex hidden">
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
            className="flex flex-col h-12 w-12 justify-center items-center group"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div
              className={`${hamburgerBar} ${
                isMobileMenuOpen
                  ? "rotate-45 translate-y-3 group-hover:scale-110"
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
                  ? "-rotate-45 -translate-y-3 group-hover:scale-110"
                  : "group-hover:scale-110"
              }`}
            />
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <ul className="text-white text-xl p-4 space-y-2">
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
