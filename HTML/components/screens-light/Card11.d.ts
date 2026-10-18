import * as React from 'react';
export interface Card11Props {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "New Payments". */
  text1?: string;
  /** Text content; defaults to "$2,335". */
  text2?: string;
  /** Text content; defaults to "last month". */
  text3?: string;
  /** Text content; defaults to "02%". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}
export declare const Card11: React.FC<Card11Props>;
export default Card11;
