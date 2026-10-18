import * as React from 'react';
export interface Checkbox10Props {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "hover" | "focused" | "disabled";
  active?: "off" | "on";
  indeterminate?: "off";
}
export declare const Checkbox10: React.FC<Checkbox10Props>;
export default Checkbox10;
