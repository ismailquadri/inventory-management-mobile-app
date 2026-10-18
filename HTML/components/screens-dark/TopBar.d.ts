import * as React from 'react';
export interface TopBarProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Hello, Tahsan Khan!". */
  text1?: string;
  /** Text content; defaults to "Search anything". */
  text2?: string;
  /** Text content; defaults to "⌘". */
  text3?: string;
  /** Text content; defaults to "F". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const TopBar: React.FC<TopBarProps>;
export default TopBar;
