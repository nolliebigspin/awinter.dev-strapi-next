import { RouteEntity } from "@/lib/genTypes";
import Link from "next/link";

export type FooterProps = {
  routes?: RouteEntity[];
};
const Footer = ({ routes }: FooterProps) => {
  return (
    <footer className="p-4">
      <ul className="flex items-center justify-center space-x-6">
        {routes &&
          routes.map((route) => (
            <li key={route.attributes?.label}>
              <Link
                href={`${
                  route.attributes?.page?.data?.attributes?.slug || "/"
                }${
                  route.attributes?.anchor ? `#${route.attributes.anchor}` : ""
                }`}
                className="hover:underline"
              >
                {route.attributes?.label}
              </Link>
            </li>
          ))}
      </ul>
    </footer>
  );
};

export default Footer;
