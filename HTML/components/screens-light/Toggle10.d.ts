import * as React from 'react';
export interface Toggle10Props {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "hover" | "pressed";
  active?: "off" | "on";
}
export declare const Toggle10: React.FC<Toggle10Props>;
export default Toggle10;
