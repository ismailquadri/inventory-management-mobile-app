import * as React from 'react';
export interface SearchInputProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Search...". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const SearchInput: React.FC<SearchInputProps>;
export default SearchInput;
