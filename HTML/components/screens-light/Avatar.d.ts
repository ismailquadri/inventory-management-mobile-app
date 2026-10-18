import * as React from 'react';
export interface AvatarProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "avatar 11" | "avatar 1" | "avatar 2" | "avatar 3" | "avatar 4" | "avatar 7" | "avatar 8" | "avatar 10" | "avatar 5" | "avatar 6" | "avatar 9" | "avatar 12" | "avatar 13" | "avatar 14";
  status?: "big large" | "lg" | "md" | "sm" | "xs";
  size?: "48" | "40" | "36" | "32" | "24";
}
export declare const Avatar: React.FC<AvatarProps>;
export default Avatar;
