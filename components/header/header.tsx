"use client";

import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import Button from "../commons/buttons/button";

const NavLink: FunctionComponent<{
  href: string;
  text: string;
  target?: string;
}> = ({ href, text, target = "_blank" }) => {
  return (
    <Link
      href={href}
      target={target}
      className="text-body-base cursor-pointer px-8 transition transform hover:-translate-y-1 duration-300"
    >
      {text}
    </Link>
  );
};

const Header: FunctionComponent = () => {
  const links = [
    { href: "https://www.linkedin.com", text: "LinkedIn" },
    { href: "/arts", text: "Arts" },
    { href: "/contact", text: "Contact  Me" },
  ];

  return (
    <section className="c-container mx-aut0 fixed top-0 bg-pure-white py-6 w-full z-[999]">
      <div className="relative flex items-center justify-between w-full">
        <Image src="/images/logo.png" alt="Logo" height={80} width={150} />
        <div className="flex items-center">
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
    </section>
  );
};

export default Header;
