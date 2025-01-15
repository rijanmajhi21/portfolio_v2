"use client";

import { ArrowRightCircleIcon } from "@heroicons/react/16/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent, useState } from "react";
import Button from "../commons/buttons/button";

const NavLink: FunctionComponent<{
  href: string;
  text: string;
  target?: string;
  withArrow?: boolean;
}> = ({ href, text, target = "_self", withArrow = false }) => {
  return (
    <Link
      href={href}
      target={target}
      className="flex items-center justify-between w-full lg:px-10 lg:py-2 py-4 font-anton lg:font-sans text-[3vh] lg:text-body-base cursor-pointer transition transform hover:-translate-y-1 duration-300 lg:border-none border-b border-neutral-200 animate-scale-in"
    >
      <span className="flex flex-wrap">{text}</span>
      {withArrow && <ArrowRightCircleIcon className="h-8 w-8 text-neutral-900" />}
    </Link>
  );
};

const Header: FunctionComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { href: "/projects", text: "Projects" },
    { href: "/arts", text: "Arts" },
    { href: "/contact", text: "Contact" },
  ];

  const mobileLinks = [
    ...links,
    { href: "/about", text: "About" },
  ];

  return (
    <nav className="c-container mx-auto fixed top-0 left-0 right-0 bg-pure-white py-6 z-[999]">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Logo"
            height={70}
            width={125}
            className="h-full w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:items-center">
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
              <XMarkIcon className="h-8 w-8 animate-scale-in" />
            ) : (
              <Bars3Icon className="h-8 w-8 animate-scale-in" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="c-container lg:hidden absolute top-20 left-0 right-0 bg-pure-white shadow-lg">
          <div className="flex flex-col items-center">
            {mobileLinks.map((link, index) => (
              <NavLink
                key={index}
                href={link.href}
                text={link.text}
                withArrow
              />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
