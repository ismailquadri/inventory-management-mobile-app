import * as React from 'react';
export interface TableComponentProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "active";
  size?: "lg" | "xl";
  misc?: "icon button" | "avatar - title" | "badge" | "top bar" | "single button" | "progress bar" | "title";
  showDescription?: boolean;
  description?: string;
  checkMark?: boolean;
  avatar?: boolean;
  title?: boolean;
  label?: string;
  /** Text content; defaults to "Top Title". */
  text1?: string;
  /** Text content; defaults to "Description". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const TableComponent: React.FC<TableComponentProps>;
export default TableComponent;
