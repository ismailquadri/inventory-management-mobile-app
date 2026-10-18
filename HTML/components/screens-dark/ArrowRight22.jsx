// figma node: 9008:2234 Arrow - Right 2
export function ArrowRight22(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "var(--icon-secondary)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 8.5,
        top: 5,
        width: 7,
        height: 14,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(0,-1,1,0,0,14)",
          transformOrigin: "0 0",
          width: 14,
          height: 7,
          overflow: "hidden",
        }}>
          <svg width={14} height={7} viewBox="0 0 14 7" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 14,
            height: 7,
          }}>
            <path d={"M 14.53 0.53 C 14.823 0.237 14.823 -0.237 14.53 -0.53 C 14.237 -0.823 13.763 -0.823 13.47 -0.53 L 14.53 0.53 Z M 7 7 L 6.47 7.53 C 6.763 7.823 7.237 7.823 7.53 7.53 L 7 7 Z M 0.53 -0.53 C 0.237 -0.823 -0.237 -0.823 -0.53 -0.53 C -0.823 -0.237 -0.823 0.237 -0.53 0.53 L 0.53 -0.53 Z M 13.47 -0.53 L 6.47 6.47 L 7.53 7.53 L 14.53 0.53 L 13.47 -0.53 Z M 7.53 6.47 L 0.53 -0.53 L -0.53 0.53 L 6.47 7.53 L 7.53 6.47 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
}
export default ArrowRight22;
