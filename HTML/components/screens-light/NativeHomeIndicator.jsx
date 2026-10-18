// figma node: 9001:64684 Native / Home Indicator
export function NativeHomeIndicator(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 375,
      height: 34,
      backgroundColor: "var(--background-bg-secondary)",
      position: "relative",
      color: "var(--text-primary)",
      ...props.style,
    }}>
      <svg width={148} height={5} viewBox="0 0 148 5" fill="none" style={{
        position: "absolute",
        left: 114,
        top: 15,
        width: 148,
        height: 5,
        borderRadius: 100,
      }}>
        <path d={"M 0 2.5 C 0 1.119 1.119 0 2.5 0 L 145.5 0 C 146.881 0 148 1.119 148 2.5 L 148 2.5 C 148 3.881 146.881 5 145.5 5 L 2.5 5 C 1.119 5 0 3.881 0 2.5 L 0 2.5 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
}
export default NativeHomeIndicator;
