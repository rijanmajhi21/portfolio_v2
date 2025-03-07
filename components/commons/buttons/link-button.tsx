import { FunctionComponent, ReactNode } from "react";
import Link from "next/link";
import clsx from "clsx";

interface ButtonProps {
  variant?: "dark" | "light" | "transparent";
  text: string;
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
  children?: ReactNode;
}

const LinkButton: FunctionComponent<ButtonProps> = ({
  variant = "dark",
  text,
  href = "",
  target,
  rel,
  className = "",
  children,
}) => {
  const commonStyles =
    "flex h-auto text-center px-6 py-3 rounded-md items-center justify-center cursor-pointer transition-all duration-300 hover:shadow-base whitespace-nowrap";

  const variantStyles =
    variant === "dark"
      ? "bg-neutral-950 text-white hover:px-8"
      : variant === "light"
      ? "bg-white text-neutral-950 border border-black hover:px-8"
      : "bg-transparent text-white border border-white hover:px-8";

  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={clsx(commonStyles, variantStyles, className)}
    >
      {children || <span className="text-body-base">{text}</span>}
    </Link>
  );
};

export default LinkButton;
