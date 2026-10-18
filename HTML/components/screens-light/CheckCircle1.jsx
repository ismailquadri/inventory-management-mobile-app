// figma node: 9101:19134 Check circle - 1
export function CheckCircle1(_p = {}) {
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
      <svg width={18} height={18} viewBox="0 0 18 18" fill="none" style={{
        position: "absolute",
        left: 3,
        top: 3,
        width: 18,
        height: 18,
      }}>
        <path d={"M 18.75 9 C 18.75 3.615 14.385 -0.75 9 -0.75 L 9 0.75 C 13.557 0.75 17.25 4.443 17.25 9 L 18.75 9 Z M 9 -0.75 C 3.615 -0.75 -0.75 3.615 -0.75 9 L 0.75 9 C 0.75 4.443 4.443 0.75 9 0.75 L 9 -0.75 Z M -0.75 9 C -0.75 14.384 3.615 18.75 9 18.75 L 9 17.25 C 4.443 17.25 0.75 13.556 0.75 9 L -0.75 9 Z M 9 18.75 C 14.385 18.75 18.75 14.384 18.75 9 L 17.25 9 C 17.25 13.556 13.557 17.25 9 17.25 L 9 18.75 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <svg width={6.928} height={4.618} viewBox="0 0 6.928 4.618" fill="none" style={{
        position: "absolute",
        left: 8.535,
        top: 9.691,
        width: 6.928,
        height: 4.618,
      }}>
        <path d={"M 0.53 1.778 C 0.237 1.486 -0.238 1.486 -0.53 1.779 C -0.823 2.072 -0.823 2.547 -0.53 2.839 L 0.53 1.778 Z M 2.31 4.618 L 1.78 5.148 C 2.073 5.441 2.547 5.441 2.84 5.148 L 2.31 4.618 Z M 7.458 0.53 C 7.751 0.237 7.751 -0.237 7.458 -0.53 C 7.165 -0.823 6.69 -0.823 6.397 -0.53 L 7.458 0.53 Z M -0.53 2.839 L 1.78 5.148 L 2.84 4.087 L 0.53 1.778 L -0.53 2.839 Z M 2.84 5.148 L 7.458 0.53 L 6.397 -0.53 L 1.78 4.087 L 2.84 5.148 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default CheckCircle1;
