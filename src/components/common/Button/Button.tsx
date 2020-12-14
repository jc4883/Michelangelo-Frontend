import React from "react";
import classNames from "classnames";
import { ButtonType } from "./types/Button";
import styles from "./Button.module.scss";

interface ComponentProps {
  children: React.ReactNode;
  className?: string;
  clickHandler?: () => void;
  type?: ButtonType;
}

const Button = (props: ComponentProps) => {
  const { children, className, clickHandler, type } = props;
  let cx = classNames.bind(styles);
  let cnInput = {
    Button: true,
  };
  if (className) {
    cnInput = {
      ...cnInput,
      [className]: true,
    };
  }
  const cn = cx(cnInput);
  return (
    <button type={type} onClick={clickHandler} className={cn}>
      {children}
    </button>
  );
};

export default Button;
