// figma node: 9001:64864 Minus 4
export function Minus4(_p = {}) {
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
      <svg width={12} height={1.500} viewBox="0 -0.750 12 1.500" fill="none" style={{
        position: "absolute",
        left: 6,
        top: 12,
        width: 12,
        height: 1.5,
      }}>
        <path d={"M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 -0.75 Z M 12 0.75 C 12.414 0.75 12.75 0.414 12.75 0 C 12.75 -0.414 12.414 -0.75 12 -0.75 L 12 0.75 Z M 0 0.75 L 12 0.75 L 12 -0.75 L 0 -0.75 L 0 0.75 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default Minus4;
