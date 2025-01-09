"use client";

import clsx from "clsx";
import { FunctionComponent, InputHTMLAttributes } from "react";

interface FloatingLabelInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className?: string;
  name: string;
  error?: string;
  placeholder?: string;
}

const FloatingLabelInput: FunctionComponent<FloatingLabelInputProps> = ({
  type = "text",
  label,
  name,
  error,
  className,
  placeholder,
  ...otherProps
}) => {
  return (
    <label
      htmlFor={name}
      className={clsx(
        "relative block w-full rounded-md border px-4 py-3 focus-within:border-neutral-950",
        { "border border-accent-red-base": error }
      )}
    >
      <input
        id={name}
        name={name}
        type={type}
        className={clsx(
          "peer w-full border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0",
          className
        )}
        placeholder={placeholder}
        required={true}
        {...otherProps}
      />
      <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white px-0.5 text-xs text-neutral-sub-text transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs">
        {label}
      </span>
    </label>
  );
};

export default FloatingLabelInput;
