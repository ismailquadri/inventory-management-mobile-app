import * as React from 'react';
export interface TabMenu2Props {
  className?: string;
  style?: React.CSSProperties;
  state?: "active" | "default" | "hover";
  leftIcon?: boolean;
  rightIcon?: boolean;
  /** Text content; defaults to "Week". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const TabMenu2: React.FC<TabMenu2Props>;
export default TabMenu2;
