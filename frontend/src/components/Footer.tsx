import { LinkItem } from "@/types";
import Link from "next/link";

const Footer = () => {
  const footerItems: LinkItem[] = [
    { label: "imprint", href: "/imprint" },
    { label: "data policy", href: "/data-policy" },
  ];

  return (
    <footer className="p-4">
      <ul className="flex items-center justify-center space-x-6">
        {footerItems.map((item) => (
          <li key={item.label}>
            <Link href={item.href} className="hover:underline">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
