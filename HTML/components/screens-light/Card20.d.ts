import * as React from 'react';
export interface Card20Props {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Returns Purchase Orders". */
  text1?: string;
  /** Text content; defaults to "123". */
  text2?: string;
  /** Text content; defaults to "17%". */
  text3?: string;
  /** Text content; defaults to "last Week". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Card20: React.FC<Card20Props>;
export default Card20;
