"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // Add Heroicons
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent, useState } from "react";
import Button from "../commons/buttons/button";

const NavLink: FunctionComponent<{
  href: string;
  text: string;
  target?: string;
}> = ({ href, text, target = "_self" }) => {
  return (
    <Link
      href={href}
      target={target}
      className="text-body-base cursor-pointer px-4 transition transform hover:-translate-y-1 duration-300"
    >
      {text}
    </Link>
  );
};

const Header: FunctionComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { href: "/projects", text: "Projects" },
    { href: "/arts", text: "Arts" },
    { href: "/contact", text: "Contact Me" },
  ];

  const mobileLinks = [
    ...links,
    { href: "/about", text: "About Me" },
  ];

  return (
    <nav className="c-container mx-auto fixed top-0 left-0 right-0 bg-pure-white py-6 z-[999]">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo.png"
            layout="intrinsic"
            alt="Logo"
            height={70}
            width={125}
            className="h-full w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {links.map((link, index) => (
            <NavLink key={index} href={link.href} text={link.text} />
          ))}
          <Button
            variant="dark"
            text="rijanmajhi21@gmail.com"
            href="/contact"
          />
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
            className="text-black focus:outline-none"
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-8 w-8" />
            ) : (
              <Bars3Icon className="h-8 w-8" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 bg-pure-white shadow-lg">
          <div className="flex flex-col items-center space-y-4 py-4">
            {mobileLinks.map((link, index) => (
              <NavLink key={index} href={link.href} text={link.text} />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
