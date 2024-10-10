"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Resume",
    path: "/resume",
  },
  {
    name: "Gallery",
    path: "/doc",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {Links.map((item, index) => (
        <Link
          href={item.path}
          key={index}
          className={`${
            item.path === pathname && "text-accent border-b-2 border-accent"
          } capitalize font-medium hover:text-accent`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
