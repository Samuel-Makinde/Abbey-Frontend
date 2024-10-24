import React from "react";

// Define props interface for each component
interface ButtonProps {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  width?: string;
  bg?: string;
  padding?: string;
}

// ButtonSmallPurple Component
export const ButtonSmallPurple: React.FC<ButtonProps> = ({
  onClick,
  type = "button",
  children,
  disabled = false,
  className = "",
  width = "w-[202px]",
  bg = "primary3",
}) => {
  return (
    <button
      className={`${width} h-14 font-body rounded p-4 text-primary1 bg-${bg} opacity-80 hover:opacity-100 ${
        disabled ? "opacity-70" : "opacity-100"
      } ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

// ButtonLongPurple Component
export const ButtonLongPurple: React.FC<ButtonProps> = ({
  onClick,
  type = "button",
  children,
  disabled = false,
  className = "",
  width = "w-[202px]", // Default width
}) => {
  return (
    <button
      className={`${width} font-body h-14 rounded p-4 text-primary1 bg-primary3 opacity-80 hover:opacity-100 ${
        disabled ? "opacity-70" : "opacity-100"
      } ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

// ButtonSmallWhite Component
export const ButtonSmallWhite: React.FC<ButtonProps> = ({
  onClick,
  type = "button",
  children,
  disabled = false,
  className = "",
  width = "w-[202px]",
  padding = "4",
}) => {
  return (
    <button
      className={`${width} font-body h-14 rounded p-${padding} text-primary4 bg-primary1 border border-primary3 opacity-80 hover:opacity-100 ${
        disabled ? "opacity-70" : "opacity-100"
      } ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
