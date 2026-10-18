import * as React from 'react';
export interface Card24Props {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "New Expenses". */
  text1?: string;
  /** Text content; defaults to "$1,536". */
  text2?: string;
  /** Text content; defaults to "23%". */
  text3?: string;
  /** Text content; defaults to "Increase since last month.". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}
export declare const Card24: React.FC<Card24Props>;
export default Card24;
