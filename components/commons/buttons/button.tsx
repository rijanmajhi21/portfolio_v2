"use client";

import Link from 'next/link';
import { FunctionComponent } from 'react';

interface ButtonProps {
  variant?: 'dark' | 'light' | 'transparent';
  text: string;
  href: string;
  className?: string;
}

const Button: FunctionComponent<ButtonProps> = ({ variant = 'dark', text, href, className = '' }) => {
  const commonStyles = "flex h-auto text-center w-auto px-6 py-3 rounded-md items-center justify-center cursor-pointer transition-all duration-300 hover:shadow-base";

  const variantStyles = variant === 'dark'
    ? "bg-neutral-950 text-white hover:px-8"
    : variant === 'light'
    ? "bg-white text-neutral-950 border border-black hover:px-8"
    : "bg-transparent text-white border border-white hover:px-8";

  return (
    <Link href={href} className={`${commonStyles} ${variantStyles} ${className}`}>
      <span className="text-body-base">{text}</span>
    </Link>
  );
};

export default Button;
