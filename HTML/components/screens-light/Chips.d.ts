import * as React from 'react';
export interface ChipsProps {
  className?: string;
  style?: React.CSSProperties;
  color?: "purple" | "verified" | "yellow" | "green" | "orange" | "neutral";
  type?: "filled" | "outline" | "shade" | "outline + shade";
  /** Text content; defaults to "Chips". */
  text1?: string;
}
export declare const Chips: React.FC<ChipsProps>;
export default Chips;
