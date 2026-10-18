import * as React from 'react';
export interface TextAreaProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "hover" | "focused" | "error" | "filled";
  showHintMessage?: boolean;
  /** Text content; defaults to "Message...". */
  text1?: string;
  /** Text content; defaults to "0/250". */
  text2?: string;
}
export declare const TextArea: React.FC<TextAreaProps>;
export default TextArea;
