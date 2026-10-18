import * as React from 'react';
export interface Card7Props {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "New Orders". */
  text1?: string;
  /** Text content; defaults to "11,345.00". */
  text2?: string;
  /** Text content; defaults to "10%". */
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
export declare const Card7: React.FC<Card7Props>;
export default Card7;
