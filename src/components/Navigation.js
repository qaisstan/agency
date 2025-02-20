"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#top" },
    { name: "Services", href: "#services" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#still-have-questions" },
  ];

  const scrollToTop = (e) => {
    if (e.target.getAttribute("href") === "#top") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-32 flex items-center justify-between bg-neutral-950/80 backdrop-blur-sm">
        {/* Logo */}
        <div className="flex-shrink-0 md:w-96">
          <Link href="/" className="block">
            <Image
              src="/logo.png"
              alt="Your Agency Logo"
              width={400}
              height={400}
              className="h-24 w-auto md:h-28"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:justify-center md:flex-1">
          <NavigationMenu>
            <NavigationMenuList className="space-x-4">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className="text-neutral-200 hover:text-white px-4 py-2 text-sm font-medium"
                      onClick={scrollToTop}
                    >
                      {item.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Navigation Button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md text-neutral-200 hover:text-white"
          >
            <span className="sr-only">Open main menu</span>
            {!isMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-neutral-950/80 backdrop-blur-sm">
            {/* Mobile Logo */}
            <div className="flex justify-center mb-4">
              <Image
                src="/logo.png"
                alt="Your Agency Logo"
                width={400}
                height={400}
                className="h-24 w-auto"
              />
            </div>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-neutral-200 hover:text-white hover:bg-neutral-800/50"
                onClick={(e) => {
                  setIsMenuOpen(false);
                  scrollToTop(e);
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
