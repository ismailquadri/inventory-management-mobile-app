import * as React from 'react';
export interface Card25Props {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Expenses Purchase". */
  text1?: string;
  /** Text content; defaults to "$6,432". */
  text2?: string;
  /** Text content; defaults to "04%". */
  text3?: string;
  /** Text content; defaults to "Decrease since last month.". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}
export declare const Card25: React.FC<Card25Props>;
export default Card25;
