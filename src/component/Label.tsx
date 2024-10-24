import React from "react";

// Define the props interface
interface LabelImportantProps {
  children: React.ReactNode;
  htmlFor?: string;
}

interface LabelProps {
  children: React.ReactNode;
  htmlFor?: string;
}


export const LabelImportant: React.FC<LabelImportantProps> = ({ children, htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className="block mb-1 font-body">
      {children} <span className="text-sec8">*</span>
    </label>
  );
};

export const Label: React.FC<LabelProps> = ({ children, htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className="block mb-1 font-body">
      {children} 
    </label>
  );
};
