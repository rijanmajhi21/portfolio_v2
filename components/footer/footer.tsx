"use client";
import { FunctionComponent } from "react";

const Footer: FunctionComponent = () => {
  return (
    <footer className="bottom-0 w-full h-36 bg-neutral-800 flex items-center">
      <div className="c-container flex justify-between items-center w-full">
        <div className="text-body-base justify-start">
          <span className="text-pure-white">
            Rijan - Website handmade with Next.js 👋
          </span>
        </div>
        <div className="text-body-base justify-end">
          <span className="text-pure-white">
            © 2024 Rijan Majhi | All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
