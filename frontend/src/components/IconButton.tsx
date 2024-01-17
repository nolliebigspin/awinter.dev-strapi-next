import Link from "next/link";
import { HTMLAttributeAnchorTarget, ReactElement } from "react";

export type IconButtonProps = {
  icon: ReactElement;
  href: string;
  target: HTMLAttributeAnchorTarget;
  onClick?: () => void;
};

const IconButton = ({ icon, href, target, onClick }: IconButtonProps) => {
  return (
    <div className="flex items-center justify-center duration-200 hover:scale-110">
      {href ? (
        <Link href={href} target={target}>
          {icon}
        </Link>
      ) : (
        <button onClick={onClick}>{icon}</button>
      )}
    </div>
  );
};

export default IconButton;
