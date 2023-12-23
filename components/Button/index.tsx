import React from "react";
import type ButtonProps from "./type";

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="rounded-full bg-dark-gray-blue py-4 text-lg font-bold text-white hover:bg-gradient-to-b hover:from-light-slate-blue hover:to-light-royal-blue">
      {children}
    </button>
  );
};

export default Button;
