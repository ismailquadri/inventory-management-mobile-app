import * as React from 'react';
export interface Card12Props {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Today Payments". */
  text1?: string;
  /** Text content; defaults to "$9,256". */
  text2?: string;
  /** Text content; defaults to "last month". */
  text3?: string;
  /** Text content; defaults to "10%". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}
export declare const Card12: React.FC<Card12Props>;
export default Card12;
