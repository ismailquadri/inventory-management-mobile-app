import * as React from 'react';
export interface Card10Props {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Total Payments". */
  text1?: string;
  /** Text content; defaults to "$11,321.00". */
  text2?: string;
  /** Text content; defaults to "last month". */
  text3?: string;
  /** Text content; defaults to "12%". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}
export declare const Card10: React.FC<Card10Props>;
export default Card10;
