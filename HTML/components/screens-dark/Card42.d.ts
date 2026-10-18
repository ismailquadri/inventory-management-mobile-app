import * as React from 'react';
export interface Card42Props {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Paid Invoice". */
  text1?: string;
  /** Text content; defaults to "$1,637". */
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
export declare const Card42: React.FC<Card42Props>;
export default Card42;
