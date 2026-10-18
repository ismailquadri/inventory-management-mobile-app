import * as React from 'react';
export interface Card23Props {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Today Expenses". */
  text1?: string;
  /** Text content; defaults to "$529". */
  text2?: string;
  /** Text content; defaults to "02%". */
  text3?: string;
  /** Text content; defaults to "Decrease since last month.". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}
export declare const Card23: React.FC<Card23Props>;
export default Card23;
