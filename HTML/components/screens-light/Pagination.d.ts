import * as React from 'react';
export interface PaginationProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "2". */
  text1?: string;
  /** Text content; defaults to "3". */
  text2?: string;
  /** Text content; defaults to "...". */
  text3?: string;
  /** Text content; defaults to "10". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}
export declare const Pagination: React.FC<PaginationProps>;
export default Pagination;
