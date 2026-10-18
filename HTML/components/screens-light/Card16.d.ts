import * as React from 'react';
export interface Card16Props {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Active Vendors". */
  text1?: string;
  /** Text content; defaults to "08,432.09". */
  text2?: string;
  /** Text content; defaults to "last month". */
  text3?: string;
  /** Text content; defaults to "12%". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const Card16: React.FC<Card16Props>;
export default Card16;
