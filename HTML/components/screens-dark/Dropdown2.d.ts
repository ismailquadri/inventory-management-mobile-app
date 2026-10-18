import * as React from 'react';
export interface Dropdown2Props {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "New Custom Report". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Dropdown2: React.FC<Dropdown2Props>;
export default Dropdown2;
