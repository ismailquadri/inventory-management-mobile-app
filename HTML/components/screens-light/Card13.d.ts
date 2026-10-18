import * as React from 'react';
export interface Card13Props {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Receive Payments". */
  text1?: string;
  /** Text content; defaults to "$8,764". */
  text2?: string;
  /** Text content; defaults to "last month". */
  text3?: string;
  /** Text content; defaults to "04%". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}
export declare const Card13: React.FC<Card13Props>;
export default Card13;
