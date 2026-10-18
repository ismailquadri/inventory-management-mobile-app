import * as React from 'react';
export interface Card19Props {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "New Purchase Orders". */
  text1?: string;
  /** Text content; defaults to "213". */
  text2?: string;
  /** Text content; defaults to "12%". */
  text3?: string;
  /** Text content; defaults to "last Week". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Card19: React.FC<Card19Props>;
export default Card19;
