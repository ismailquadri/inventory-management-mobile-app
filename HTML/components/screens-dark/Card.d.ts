import * as React from 'react';
export interface CardProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Sales Activity". */
  text1?: string;
  /** Text content; defaults to "To be Shipped". */
  text2?: string;
  /** Text content; defaults to "212". */
  text3?: string;
  /** Text content; defaults to "+3.4%". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}
export declare const Card: React.FC<CardProps>;
export default Card;
