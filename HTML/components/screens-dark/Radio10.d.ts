import * as React from 'react';
export interface Radio10Props {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "hover" | "focused" | "disabled";
  active?: "off" | "on";
}
export declare const Radio10: React.FC<Radio10Props>;
export default Radio10;
