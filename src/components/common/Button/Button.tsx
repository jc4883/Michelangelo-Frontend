import React from "react";
import { ButtonType } from "./types/Button";

interface ComponentProps {
  children: React.ReactNode;
  className?: string;
  clickHandler?: () => void;
  type?: ButtonType;
}

const Button = (props: ComponentProps) => {
  const { children, className, clickHandler, type } = props;
  return (
    <button type={type} onClick={clickHandler} className={className}>
      {children}
    </button>
  );
};

export default Button;
