"use client";
import Link from "next/link";
import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";

export default function Button(props) {
  const {
    children,
    intent,
    size,
    shape,
    icon,
    className,
    disabled,
    isLoading,
    active,
    ...rest
  } = props;

  const buttonClasses = cva(
    [
      "rounded-full",
      "font-medium",
      "hover:scale-100",
      "active:scale-100",
      "transition",
      "duration-200",
      "ease-in-out",
      isLoading ? "text-white" : "",
      disabled
        ? "opacity-50 cursor-not-allowed pointer-events-none bg-gray-300"
        : "",
    ],
    {
      variants: {
        intent: {
          primary: [
            "bg-primary-500",
            "text-white",
            "border",
            "border-primary-600",
            "hover:bg-primary-700",
          ],
          secondary: [
            "bg-primary-50",
            "text-primary-600",
            "border",
            "border-primary-200",
            "hover:bg-primary-600",
            "hover:text-white",
          ],
          secondaryColor: [
            "bg-white",
            "text-primary-600",
            "border",
            "border-primary-600",
            "hover:bg-primary-600",
            "hover:text-white",
          ],
          white: [
            "bg-white",
            "text-gray-600",
            "border",
            "border-gray-300",
            "hover:bg-gray-100",
            "hover:text-gray-600",
          ],
          secondaryGray: [
            "bg-white",
            "text-white",
            "border",
            "border-primary-600",
            "hover:bg-primary-700",
          ],
          socialGoogle: [
            "bg-white",
            "text-black",
            "border",
            "border-gray-300",
            "hover:bg-gray-100",
          ],
          danger: [
            "bg-red-600",
            "text-white",
            "border",
            "border-red-600",
            "hover:bg-red-700",
          ],
        },
        size: {
          small: ["text-sm", "py-1.5", "px-2"],
          medium: ["text-md", "px-6", "py-2.5"],
          large: ["text-xl", "px-8", "py-4"],
          xl: ["text-md", "px-5", "py-3"],
          twoXl: ["text-lg", "px-7", "py-4"],
        },
      },
      defaultVariants: {
        intent: "primary",
        size: "medium",
      },
    }
  );

  const handleClick = (e) => {
    const { onClick } = props;
    if (disabled || isLoading) {
      e.preventDefault();
      return;
    }
    onClick?.(e);
  };

  const renderChildren = () => {
    if (isLoading && children) {
      return <div className="flex items-center justify-center">{children}</div>;
    }

    if (icon && children && !isLoading) {
      return (
        <span className="flex items-center justify-center">
          <span className="text-lg mr-3">{icon}</span>
          <span className="mr-1 ">{children}</span>
        </span>
      );
    }

    return <>{children}</>;
  };

  return (
    <button
      className={buttonClasses({ intent, size, className })}
      onClick={handleClick}
      {...rest}
    >
      {renderChildren()}
    </button>
  );
}
