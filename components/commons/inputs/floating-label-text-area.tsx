"use client";

import clsx from "clsx";
import { FunctionComponent, TextareaHTMLAttributes } from "react";

interface FloatingLabelTextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  rows?: number;
  cols?: number;
}

const FloatingLabelTextArea: FunctionComponent<FloatingLabelTextAreaProps> = ({
  label,
  name,
  rows = 4,
  cols,
  placeholder,
  error,
  disabled,
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
      <textarea
        id={name}
        name={name}
        rows={rows}
        cols={cols}
        className="peer h-32 w-full border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
        placeholder={placeholder}
        disabled={disabled}
        required
        {...otherProps}
      />
      <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white px-0.5 text-xs text-neutral-sub-text transition-all peer-placeholder-shown:top-[15%] peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs">
        {label}
      </span>
    </label>
  );
};

export default FloatingLabelTextArea;
