"use client";

import { useTheme } from "next-themes";
import Logo from "/public/LogoIMG.png";
import Image from "next/image";

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
          className="hover:scale-110 duration-200"
          unoptimized
        />
      </button>
      <em>click me</em>
    </>
  );
};

export default ThemeSwitch;
