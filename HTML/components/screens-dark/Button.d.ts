import * as React from 'react';
export interface ButtonProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "hover" | "disabled";
  type?: "primary" | "secondary";
  size?: "lg" | "sm";
  rightIcon?: boolean;
  leftIcon?: boolean;
  /** Text content; defaults to "Button". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const Button: React.FC<ButtonProps>;
export default Button;
