import * as React from 'react';
export interface Card41Props {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Today Join". */
  text1?: string;
  /** Text content; defaults to "324". */
  text2?: string;
  /** Text content; defaults to "02%". */
  text3?: string;
  /** Text content; defaults to "last month". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const Card41: React.FC<Card41Props>;
export default Card41;
