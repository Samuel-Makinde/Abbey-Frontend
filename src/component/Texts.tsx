import React, { ReactNode } from "react";

// Define prop types for the Text component
interface TextProps {
  children: ReactNode;
  className?: string;
  size?: string;
  color?: string;
  weight?: string;
  lineHeight?: string;
}

// Text Component
export const Text: React.FC<TextProps> = ({
  children,
  className = "",
  size = "base",
  color = "black",
  weight = "font-normal",
  lineHeight = "leading-7",
}) => {
  return (
    <p
      className={`text-${size} font-body text-${color} ${weight} ${lineHeight} ${className}`}
    >
      {children}
    </p>
  );
};

// Define prop types for the Heading component
interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
  className?: string;
  size?: string;
  color?: string;
  weight?: string;
  lineHeight?: string;
  font?: string;
}

// Heading Component
export const Heading: React.FC<HeadingProps> = ({
  level = 1,
  children,
  className = "",
  size = "2xl",
  color = "black",
  weight = "font-normal",
  font = "font-body",
  lineHeight = "leading-7",
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag
      className={`text-${size} ${font} text-${color} font-bold ${className} ${weight} ${lineHeight}`}
    >
      {children}
    </Tag>
  );
};
