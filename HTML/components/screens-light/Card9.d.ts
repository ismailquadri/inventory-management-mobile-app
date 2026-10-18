import * as React from 'react';
export interface Card9Props {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Orders  items". */
  text1?: string;
  /** Text content; defaults to "06,231.00". */
  text2?: string;
  /** Text content; defaults to "19%". */
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
export declare const Card9: React.FC<Card9Props>;
export default Card9;
