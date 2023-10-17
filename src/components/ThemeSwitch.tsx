"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

import Logo from "/public/LogoIMG.png";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <button onClick={toggleTheme}>
        <Image
          src={Logo}
          alt="Logo"
          width={120}
          height={120}
          className="duration-200 hover:scale-110"
          unoptimized
        />
      </button>
      <em>click me</em>
    </>
  );
};

export default ThemeSwitch;
