import * as React from 'react';
export interface TabMenuProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "active" | "default" | "hover";
  leftIcon?: boolean;
  rightIcon?: boolean;
  /** Text content; defaults to "Week". */
  text1?: string;
}
export declare const TabMenu: React.FC<TabMenuProps>;
export default TabMenu;
