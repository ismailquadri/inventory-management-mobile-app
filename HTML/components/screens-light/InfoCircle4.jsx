// figma node: 9004:2921 info circle
export function InfoCircle4(_p = {}) {
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
        <path d={"M -0.75 9 C -0.75 14.384 3.615 18.75 9 18.75 L 9 17.25 C 4.443 17.25 0.75 13.556 0.75 9 L -0.75 9 Z M 9 18.75 C 14.385 18.75 18.75 14.384 18.75 9 L 17.25 9 C 17.25 13.556 13.557 17.25 9 17.25 L 9 18.75 Z M 18.75 9 C 18.75 3.615 14.385 -0.75 9 -0.75 L 9 0.75 C 13.557 0.75 17.25 4.443 17.25 9 L 18.75 9 Z M 9 -0.75 C 3.615 -0.75 -0.75 3.615 -0.75 9 L 0.75 9 C 0.75 4.443 4.443 0.75 9 0.75 L 9 -0.75 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <svg width={0.006} height={7.402} viewBox="0 0 0.006 7.402" fill="none" style={{
        position: "absolute",
        left: 12,
        top: 8.291,
        width: 0.006,
        height: 7.402,
      }}>
        <path d={"M -0.744 7.402 C -0.744 7.816 -0.409 8.152 0.006 8.152 C 0.42 8.152 0.756 7.816 0.756 7.402 L -0.744 7.402 Z M 0.756 3.103 C 0.756 2.688 0.42 2.353 0.006 2.353 C -0.409 2.353 -0.744 2.688 -0.744 3.103 L 0.756 3.103 Z M -0.75 0.063 C -0.75 0.477 -0.414 0.813 0 0.813 C 0.414 0.813 0.75 0.477 0.75 0.063 L -0.75 0.063 Z M 0.75 0 C 0.75 -0.414 0.414 -0.75 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 L 0.75 0 Z M 0.756 7.402 L 0.756 3.103 L -0.744 3.103 L -0.744 7.402 L 0.756 7.402 Z M 0.75 0.063 L 0.75 0 L -0.75 0 L -0.75 0.063 L 0.75 0.063 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default InfoCircle4;
