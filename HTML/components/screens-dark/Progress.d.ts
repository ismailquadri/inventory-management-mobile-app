import * as React from 'react';
export interface ProgressProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "100%" | "10%" | "20%" | "30%" | "40%" | "50%" | "60%" | "70%" | "80%" | "90%";
  /** Text content; defaults to "10%". */
  text1?: string;
}
export declare const Progress: React.FC<ProgressProps>;
export default Progress;
