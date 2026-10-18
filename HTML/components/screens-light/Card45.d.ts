import * as React from 'react';
export interface Card45Props {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Overdue Invoice". */
  text1?: string;
  /** Text content; defaults to "$4,212". */
  text2?: string;
  /** Text content; defaults to "02%". */
  text3?: string;
  /** Text content; defaults to "last month". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}
export declare const Card45: React.FC<Card45Props>;
export default Card45;
