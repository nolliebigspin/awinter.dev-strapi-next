"use client";

import { externalLinks } from "@/constants";
import { RouteEntity } from "@/lib/genTypes";
import Link from "next/link";
import React, { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

import IconButton from "./IconButton";
import Logo from "./Logo";
import ThemeSwitch from "./ThemeSwitch";

export type NavigationProps = {
  routes?: RouteEntity[];
};

const SocialIconLinks = () => (
  <>
    <IconButton
      icon={<FaGithub size={26} />}
      href={externalLinks.github}
      target="_blank"
    />
    <IconButton
      icon={<FaInstagram size={26} />}
      href={externalLinks.instagram}
      target="_blank"
    />
    <IconButton
      icon={<FaLinkedin size={26} />}
      href={externalLinks.linkedIn}
      target="_blank"
    />
  </>
);

const Navigation = ({ routes }: NavigationProps) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        <div className="hidden gap-4 md:flex">
          {routes && routes.length > 0 && (
            <ul className="flex gap-6 text-xl">
              {routes.map((route) => (
                <li
                  key={route.attributes?.label}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Link
                    href={route.attributes?.page?.data?.attributes?.slug || "/"}
                    className="font-bold hover:underline"
                  >
                    {route.attributes?.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          <SocialIconLinks />
          <ThemeSwitch />
        </div>
        <div className="flex gap-4 md:hidden">
          <SocialIconLinks />
          <ThemeSwitch />
          {routes && routes.length > 0 && (
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
          )}
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
          {routes && routes.length > 0 && (
            <ul className="space-y-2 p-4 text-xl">
              {routes.map((route) => (
                <li
                  key={route.attributes?.label}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Link
                    href={route.attributes?.page?.data?.attributes?.slug || "/"}
                    className="font-bold hover:underline"
                  >
                    {route.attributes?.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
