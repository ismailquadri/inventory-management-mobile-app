import * as React from 'react';
export interface Card8Props {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Pending Orders". */
  text1?: string;
  /** Text content; defaults to "01,123.00". */
  text2?: string;
  /** Text content; defaults to "2%". */
  text3?: string;
  /** Text content; defaults to "last month". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}
export declare const Card8: React.FC<Card8Props>;
export default Card8;
