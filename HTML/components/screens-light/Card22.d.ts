import * as React from 'react';
export interface Card22Props {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Total Expenses". */
  text1?: string;
  /** Text content; defaults to "$21,563.00". */
  text2?: string;
  /** Text content; defaults to "16%". */
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
export declare const Card22: React.FC<Card22Props>;
export default Card22;
