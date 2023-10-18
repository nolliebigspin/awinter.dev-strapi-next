"use client";

import { useTheme } from "next-themes";

import Logo from "./Logo";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <button onClick={toggleTheme}>
        <Logo size={120} animation />
      </button>
      <em>click me</em>
    </>
  );
};

export default ThemeSwitch;
