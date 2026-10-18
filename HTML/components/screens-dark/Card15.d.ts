import * as React from 'react';
export interface Card15Props {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "All Vendors". */
  text1?: string;
  /** Text content; defaults to "43,123.10". */
  text2?: string;
  /** Text content; defaults to "last month". */
  text3?: string;
  /** Text content; defaults to "34%". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const Card15: React.FC<Card15Props>;
export default Card15;
