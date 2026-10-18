import * as React from 'react';
export interface DropdownProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "New Bill". */
  text1?: string;
  /** Text content; defaults to "New Expense". */
  text2?: string;
  /** Text content; defaults to "New Purchase Order". */
  text3?: string;
  /** Text content; defaults to "New Vendor Credits". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}
export declare const Dropdown: React.FC<DropdownProps>;
export default Dropdown;
