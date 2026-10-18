import * as React from 'react';
export interface Card2Props {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Top Sellings Category". */
  text1?: string;
  /** Text content; defaults to "Ergonomic Office Chai". */
  text2?: string;
  /** Text content; defaults to "40%". */
  text3?: string;
  /** Text content; defaults to "Minimalist Leather Wallet". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const Card2: React.FC<Card2Props>;
export default Card2;
