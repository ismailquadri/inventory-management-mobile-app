import * as React from 'react';
export interface Card3Props {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Top Selling Items". */
  text1?: string;
  /** Text content; defaults to "Ok - 5k". */
  text2?: string;
  /** Text content; defaults to "5k - 15k". */
  text3?: string;
  /** Text content; defaults to "15k - 25k". */
  text4?: string;
}
export declare const Card3: React.FC<Card3Props>;
export default Card3;
