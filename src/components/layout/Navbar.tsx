"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Leaf } from "lucide-react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Diet Plans", href: "/diet-plans" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-emerald-50 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-emerald-100 p-2 rounded-xl group-hover:bg-emerald-500 transition-colors duration-300">
                <Leaf className="h-6 w-6 text-emerald-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <span className="font-heading font-bold text-2xl text-stone-900">
                Dr. Prashant
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  "px-3 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  pathname === link.href
                    ? "bg-emerald-50 text-emerald-700"
                    : "text-stone-600 hover:text-emerald-600 hover:bg-emerald-50/50"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 px-6 py-2.5 rounded-full bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-200 transition-all duration-300"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-stone-600 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu View */}
      <div
        className={clsx(
          "md:hidden absolute w-full bg-white border-b border-stone-100 shadow-xl overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100 visible" : "max-h-0 opacity-0 invisible"
        )}
      >
        <div className="px-4 pt-2 pb-6 space-y-1 sm:px-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={clsx(
                "block px-3 py-3 rounded-xl text-base font-medium transition-colors",
                pathname === link.href
                  ? "bg-emerald-50 text-emerald-700"
                  : "text-stone-600 hover:text-emerald-600 hover:bg-emerald-50/50"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-6 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors shadow-none"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
