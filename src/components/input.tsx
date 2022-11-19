import React from "react";
import cx from "classnames";

interface Props
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: "sm" | "md" | "lg";
  variant?: "filled" | "outline" | "unstyled";
  leftAddon?: React.ReactNode;
  rightAddon?: React.ReactNode;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
}

const Input: React.FC<Props> = ({
  size = "sm",
  variant = "unstyled",
  leftAddon,
  rightAddon,
  leftElement,
  rightElement,
  ...props
}) => {
  const sizes = {
    sm: `h-8 ${
      leftElement && rightElement
        ? "px-8"
        : leftElement
        ? "pl-8 pr-2"
        : rightElement
        ? "pl-2 pr-8"
        : "px-2"
    } text-sm`,
    md: `h-10 ${
      leftElement && rightElement
        ? "px-9"
        : leftElement
        ? "pl-9 pr-3"
        : rightElement
        ? "pl-3 pr-9"
        : "px-3"
    } text-base`,
    lg: `h-12 ${
      leftElement && rightElement
        ? "px-10"
        : leftElement
        ? "pl-10 pr-4"
        : rightElement
        ? "pl-4 pr-10"
        : "px-4"
    } text-lg`,
  };

  const variants = {
    filled: "bg-gray-900 border border-gray-900",
    outline: "bg-transparent border border-gray-900",
    unstyled: "bg-transparent border-none",
  };

  return (
    <div className="relative flex">
      {leftAddon && (
        <div className="flex items-center justify-center rounded-l-sm bg-gray-700 px-4 text-xs">
          {leftAddon}
        </div>
      )}
      {leftElement && (
        <div className="absolute left-0 top-0 flex h-full items-center px-2">
          {leftElement}
        </div>
      )}
      <input
        className={cx("rounded-sm", variants[variant], sizes[size])}
        {...props}
      />
      {rightElement && (
        <div className="absolute right-0 top-0 flex h-full items-center px-2">
          {rightElement}
        </div>
      )}
      {rightAddon && (
        <div className="flex items-center justify-center rounded-r-sm bg-gray-700 px-4 text-xs">
          {rightAddon}
        </div>
      )}
    </div>
  );
};

export default Input;
