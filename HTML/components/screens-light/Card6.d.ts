import * as React from 'react';
export interface Card6Props {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Total Orders". */
  text1?: string;
  /** Text content; defaults to "12,657.00". */
  text2?: string;
  /** Text content; defaults to "43%". */
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
export declare const Card6: React.FC<Card6Props>;
export default Card6;
