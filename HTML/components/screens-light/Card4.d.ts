import * as React from 'react';
export interface Card4Props {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Total Product Details". */
  text1?: string;
  /** Text content; defaults to "Total Stock Items". */
  text2?: string;
  /** Text content; defaults to "High Stock Items". */
  text3?: string;
  /** Text content; defaults to "Low Stock Items". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Card4: React.FC<Card4Props>;
export default Card4;
