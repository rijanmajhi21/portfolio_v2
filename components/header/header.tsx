"use client";

import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
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
  const links = [
    { href: "/projects", text: "Projects" },
    { href: "/arts", text: "Arts" },
    { href: "https://www.linkedin.com", text: "LinkedIn" },
    { href: "", text: "Contact Me" },
  ];

  return (
    <nav className="c-container mx-auto fixed top-0 left-0 right-0 bg-pure-white py-6 z-[999]">
      <div className="flex items-center justify-between">
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

        <div className="flex items-center space-x-8">
          {links.map((link, index) => (
            <NavLink key={index} href={link.href} text={link.text} />
          ))}
          <Button
            variant="dark"
            text="rijanmajhi21@gmail.com"
            href="/contact"
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
