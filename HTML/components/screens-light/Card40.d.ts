import * as React from 'react';
export interface Card40Props {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "New Customers". */
  text1?: string;
  /** Text content; defaults to "1,132". */
  text2?: string;
  /** Text content; defaults to "16%". */
  text3?: string;
  /** Text content; defaults to "last month". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const Card40: React.FC<Card40Props>;
export default Card40;
