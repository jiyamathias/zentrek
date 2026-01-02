"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinkClass = (path: string) =>
    `text-sm text-white transition relative hover:text-orange-500 ${
      pathname === path
        ? "after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-orange-500"
        : ""
    }`;

  return (
    <nav className="absolute top-1 md:top-10 left-0 right-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Zentrek logo" width={100} height={100} />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-bold">
            <Link href="/" className={navLinkClass("/")}>Home</Link>
            <Link href="/about" className={navLinkClass("/about")}>About</Link>
            <Link href="/gallery" className={navLinkClass("/gallery")}>Gallery</Link>
            <Link href="/explore" className={navLinkClass("/explore")}>Explore</Link>
          </div>

          {/* CTA */}
          <button className="bg-orange-500 hidden md:block hover:bg-orange-600 text-white px-6 py-2 rounded-lg text-sm font-semibold transition-all">
            Get In Touch
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 bg-slate-700/80 backdrop-blur-md px-4">
            <Link
              href="/"
              className={`block py-2 text-white ${pathname === "/" ? "underline decoration-secondary" : ""}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`block py-2 text-white ${pathname === "/about" ? "underline decoration-secondary" : ""}`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>

            <Link
              href="/gallery"
              className={`block py-2 text-white ${pathname === "/gallery" ? "underline decoration-secondary" : ""}`}
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>

            <Link
              href="/explore"
              className={`block py-2 text-white ${pathname === "/explore" ? "underline decoration-secondary" : ""}`}
              onClick={() => setIsOpen(false)}
            >
              Explore
            </Link>

            <button className="w-full bg-orange-500 text-white px-6 py-2 rounded-lg text-sm font-semibold mt-2">
              Get In Touch
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
