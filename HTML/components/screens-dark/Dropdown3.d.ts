import * as React from 'react';
export interface Dropdown3Props {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Invite Members". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Dropdown3: React.FC<Dropdown3Props>;
export default Dropdown3;
