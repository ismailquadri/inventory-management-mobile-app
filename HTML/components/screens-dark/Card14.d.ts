import * as React from 'react';
export interface Card14Props {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "New Vendors". */
  text1?: string;
  /** Text content; defaults to "13,535.00". */
  text2?: string;
  /** Text content; defaults to "last month". */
  text3?: string;
  /** Text content; defaults to "40%". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const Card14: React.FC<Card14Props>;
export default Card14;
