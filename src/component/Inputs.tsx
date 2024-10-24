import  { forwardRef, InputHTMLAttributes } from "react";

// Define the interface for props, overriding the 'size' type to accept a string
interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  placeholder?: string;
  className?: string;
  size?: string; // Use string type for custom 'size' prop
  color?: string;
  weight?: string;
  lineHeight?: string;
}

// ShortInputWithPlaceholder Component
export const ShortInputWithPlaceholder = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      placeholder = "Enter text...",
      className = "",
      size = "base", // Overriding size to be a string here
      color = "gray-500",
      weight = "font-normal",
      lineHeight = "leading-7",
      ...rest
    },
    ref
  ) => {
    return (
      <input
        ref={ref}
        className={`font-body bg-sec4 rounded border text-${size} placeholder-${color} ${weight} ${lineHeight} ${className} border p-2 outline-none`}
        placeholder={placeholder}
        {...rest}
      />
    );
  }
);

// LongInputWithPlaceholder Component
export const LongInputWithPlaceholder = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      placeholder = "Enter text...",
      className = "",
      size = "base",
      color = "gray-500",
      weight = "font-normal",
      lineHeight = "leading-7",
      ...rest
    },
    ref
  ) => {
    return (
      <input
        ref={ref}
        className={`w-full h-12 font-body rounded border text-${size} placeholder-${color} ${weight} ${lineHeight} ${className} border p-2 outline-none`}
        placeholder={placeholder}
        {...rest}
      />
    );
  }
);

export const MediumInputWithPlaceholder = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      placeholder = "Enter text...",
      className = "",
      size = "base",
      color = "gray-500",
      ...rest
    },
    ref
  ) => {
    return (
      <input
        ref={ref}
        className={`w-full h-12 font-body rounded border p-2 outline-none ${className} text-${size} placeholder-${color}`}
        placeholder={placeholder}
        {...rest}
      />
    );
  }
);
