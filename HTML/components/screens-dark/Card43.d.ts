import * as React from 'react';
export interface Card43Props {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Unpaid Invoice". */
  text1?: string;
  /** Text content; defaults to "$3,847". */
  text2?: string;
  /** Text content; defaults to "03%". */
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
export declare const Card43: React.FC<Card43Props>;
export default Card43;
