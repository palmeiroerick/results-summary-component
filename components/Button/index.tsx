import React from "react";
import type ButtonProps from "./type";

const Button = ({ children }: ButtonProps) => {
  return <button>{children}</button>;
};

export default Button;
