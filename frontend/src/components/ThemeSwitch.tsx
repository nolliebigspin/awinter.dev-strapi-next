"use client";

import { useTheme } from "next-themes";
import { GrMoon, GrSun } from "react-icons/gr";

export type ThemeSwitchProps = {
  size?: number;
};

const ThemeSwitch = ({ size = 28 }: ThemeSwitchProps) => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <button
        onClick={toggleTheme}
        className={`flex items-center justify-center duration-200 hover:scale-110 ${
          theme === "light" ? "text-dark" : "text-light"
        }`}
      >
        {theme === "light" ? <GrSun size={size} /> : <GrMoon size={size} />}
      </button>
    </>
  );
};

export default ThemeSwitch;
