import * as React from 'react';
export interface Card5Props {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Purchase & Sales". */
  text1?: string;
  /** Text content; defaults to "Sales". */
  text2?: string;
  /** Text content; defaults to "Purchase". */
  text3?: string;
  /** Text content; defaults to "500". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Card5: React.FC<Card5Props>;
export default Card5;
