import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Name */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Arun<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Dekstop Navbar */}
        <div className="hidden xl:flex items-center gap-8">
          <Navbar />
        </div>

        {/* Mobile Navbar */}
        <div className="xl:hidden">
          <MobileNavbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
