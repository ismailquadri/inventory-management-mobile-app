import * as React from 'react';
export interface InputFieldProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "hover" | "typing" | "field" | "disabled" | "error";
  type?: "password" | "input text" | "trailing" | "trailing input";
  /** Text content; defaults to "Placeholder". */
  text1?: string;
  /** Text content; defaults to "www.untitledui.com". */
  text2?: string;
  /** Text content; defaults to "Copy". */
  text3?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}
export declare const InputField: React.FC<InputFieldProps>;
export default InputField;
