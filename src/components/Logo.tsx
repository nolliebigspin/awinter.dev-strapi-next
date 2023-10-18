"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

import LogoIMG from "/public/LogoIMG.png";

export type LogoProps = {
  size?: number;
  animation?: boolean;
  className?: string;
};

const Logo = ({ size = 40, animation = false, className }: LogoProps) => {
  return (
    <Image
      src={LogoIMG}
      alt="Logo"
      width={size}
      height={size}
      className={`${className} ${animation && "duration-200 hover:scale-110"}`}
      unoptimized
    />
  );
};

export default Logo;
