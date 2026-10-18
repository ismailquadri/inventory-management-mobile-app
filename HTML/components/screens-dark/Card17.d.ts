import * as React from 'react';
export interface Card17Props {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Total Visits Vendors". */
  text1?: string;
  /** Text content; defaults to "04,234.04". */
  text2?: string;
  /** Text content; defaults to "last month". */
  text3?: string;
  /** Text content; defaults to "42%". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const Card17: React.FC<Card17Props>;
export default Card17;
