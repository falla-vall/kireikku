import React, { useRef } from "react";
import cx from "classnames";
import tinyColor from "tinycolor2";
import BeatLoader from "react-spinners/BeatLoader";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary" | "quaternary";
  size?: "small" | "medium" | "large";
  isLoading?: boolean;
}

const override: React.CSSProperties = {
  display: "block",
  margin: "0 auto",
};

const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  isLoading,
  children,
  ...props
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  const bgColor = window
    ?.getComputedStyle(ref.current as Element, null)
    .getPropertyValue("background-color");
  const color = window
    ?.getComputedStyle(ref.current as Element, null)
    .getPropertyValue("color");
  const isDark = tinyColor(bgColor).isDark();
  return (
    <button
      {...props}
      ref={ref}
      className={cx(
        "px-4 py-2 text-sm font-medium",
        className,
        {
          "bg-primary-500 text-white hover:bg-primary-600":
            variant === "primary",
          "bg-secondary-500 text-white hover:bg-secondary-600":
            variant === "secondary",
          "bg-tertiary-500 text-white hover:bg-tertiary-600":
            variant === "tertiary",
          "bg-quaternary-500 text-white hover:bg-quaternary-600":
            variant === "quaternary",
        },
        {
          "px-2 py-1 text-xs": size === "small",
          "px-4 py-2 text-sm": size === "medium",
          "px-6 py-3 text-base": size === "large",
        }
      )}
    >
      {isLoading ? (
        <BeatLoader
          color={isDark ? "#FFFFFF" : color}
          loading={isLoading}
          size={8}
          cssOverride={override}
        />
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
