import { Logo2 } from './Logo2.jsx';

// figma node: 9003:1575 Logo
export function Logo3(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 248,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "16px 20px 16px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 51,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 12,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <Logo2 style={{
              position: "relative",
              width: 36,
              height: 36,
              flexShrink: 0,
              color: "var(--general-white)",
            }} />
          <span style={{
            position: "relative",
            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 24,
            whiteSpace: "nowrap",
            lineHeight: "32px",
            color: "var(--general-white)",
            flexShrink: 0,
          }}>Interoly</span>
        </div>
        <div style={{
          position: "relative",
          transform: "matrix(1,0,0,-1,0,0)",
          width: 24,
          height: 24,
          flexShrink: 0,
        }}>
          <svg width={16} height={16} viewBox="0 0 16 16" fill="none" style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 16,
            height: 16,
            color: "rgb(145,153,146)",
          }}>
            <path d={"M 16.75 13.44 L 16.75 2.56 L 15.25 2.56 L 15.25 13.44 L 16.75 13.44 Z M 16.75 2.56 C 16.75 0.732 15.268 -0.75 13.44 -0.75 L 13.44 0.75 C 14.44 0.75 15.25 1.56 15.25 2.56 L 16.75 2.56 Z M 13.44 -0.75 L 2.56 -0.75 L 2.56 0.75 L 13.44 0.75 L 13.44 -0.75 Z M 2.56 -0.75 C 0.732 -0.75 -0.75 0.732 -0.75 2.56 L 0.75 2.56 C 0.75 1.56 1.56 0.75 2.56 0.75 L 2.56 -0.75 Z M -0.75 2.56 L -0.75 13.44 L 0.75 13.44 L 0.75 2.56 L -0.75 2.56 Z M -0.75 13.44 C -0.75 15.268 0.732 16.75 2.56 16.75 L 2.56 15.25 C 1.56 15.25 0.75 14.44 0.75 13.44 L -0.75 13.44 Z M 2.56 16.75 L 13.44 16.75 L 13.44 15.25 L 2.56 15.25 L 2.56 16.75 Z M 13.44 16.75 C 15.268 16.75 16.75 15.268 16.75 13.44 L 15.25 13.44 C 15.25 14.44 14.44 15.25 13.44 15.25 L 13.44 16.75 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={1.500} height={8} viewBox="-0.750 0 1.500 8" fill="none" style={{
            position: "absolute",
            left: 8,
            top: 8,
            width: 1.5,
            height: 8,
            color: "rgb(145,153,146)",
          }}>
            <path d={"M 0.75 0 C 0.75 -0.414 0.414 -0.75 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 L 0.75 0 Z M -0.75 8 C -0.75 8.414 -0.414 8.75 0 8.75 C 0.414 8.75 0.75 8.414 0.75 8 L -0.75 8 Z M -0.75 0 L -0.75 8 L 0.75 8 L 0.75 0 L -0.75 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={3} height={6} viewBox="0 0 3 6" fill="none" style={{
            position: "absolute",
            left: 12,
            top: 9,
            width: 3,
            height: 6,
            color: "rgb(145,153,146)",
          }}>
            <path d={"M 3.53 0.53 C 3.823 0.237 3.823 -0.237 3.53 -0.53 C 3.237 -0.823 2.763 -0.823 2.47 -0.53 L 3.53 0.53 Z M 0 3 L -0.53 2.47 C -0.823 2.763 -0.823 3.237 -0.53 3.53 L 0 3 Z M 2.47 6.53 C 2.763 6.823 3.237 6.823 3.53 6.53 C 3.823 6.237 3.823 5.763 3.53 5.47 L 2.47 6.53 Z M 2.47 -0.53 L -0.53 2.47 L 0.53 3.53 L 3.53 0.53 L 2.47 -0.53 Z M -0.53 3.53 L 2.47 6.53 L 3.53 5.47 L 0.53 2.47 L -0.53 3.53 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 20,
        top: 67,
        width: 208,
        height: 1,
        outline: "1px dashed var(--grayscale-700)",
        outlineOffset: "-1px",
      }} />
    </div>
  );
}
export default Logo3;
