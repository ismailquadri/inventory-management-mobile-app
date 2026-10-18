import * as React from 'react';
export interface Card18Props {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Total Purchase Orders". */
  text1?: string;
  /** Text content; defaults to "324". */
  text2?: string;
  /** Text content; defaults to "23%". */
  text3?: string;
  /** Text content; defaults to "last Week". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Card18: React.FC<Card18Props>;
export default Card18;
