import * as React from 'react';
export interface Card21Props {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Today Purchase Orders". */
  text1?: string;
  /** Text content; defaults to "41". */
  text2?: string;
  /** Text content; defaults to "04%". */
  text3?: string;
  /** Text content; defaults to "last Week". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Card21: React.FC<Card21Props>;
export default Card21;
