import React from "react";
import cx from "classnames";
import { Spinner } from "../../public/svg";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg";
  custom_size?: string;
  custom_color?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
  loadingText?: string;
}

const sizes = {
  sm: "py-1 px-2 text-sm",
  md: "py-2 px-4 text-base",
  lg: "py-3 px-6 text-lg",
};

const Button = React.forwardRef<HTMLButtonElement, Props>(
  (
    {
      children,
      size = "md",
      custom_size,
      custom_color,
      leftIcon,
      rightIcon,
      isLoading,
      loadingText,
      ...props
    },
    ref
  ) => (
    <button
      ref={ref}
      {...props}
      className={cx(
        "inline-flex select-none flex-row items-center justify-center gap-4 rounded-md font-medium",
        "focus:outline-none focus-visible:ring focus-visible:ring-electric-pink-500 focus-visible:ring-opacity-75",
        "transition-all duration-200",
        // Register all radix states
        "group",
        "radix-state-open:bg-gray-900",
        "radix-state-on:bg-gray-900",
        "radix-state-delayed-open:bg-gray-50",
        {
          [sizes[size]]: !custom_size,
          [`${custom_size}`]: !!custom_size,
          "bg-electric-pink-500 text-gray-200 hover:bg-electric-pink-600":
            !custom_color,
          [`${custom_color}`]: !!custom_color,
          "cursor-progress brightness-50": isLoading,
        }
      )}
    >
      {(isLoading || leftIcon) && (
        <div className="flex items-center justify-center stroke-white">
          {isLoading ? <Spinner transform="scale(0.8)" /> : leftIcon}
        </div>
      )}
      {isLoading && loadingText ? loadingText : children}
      {rightIcon && (
        <div className="flex items-center justify-center stroke-white">
          {rightIcon}
        </div>
      )}
    </button>
  )
);

Button.displayName = "Button";

export default Button;
