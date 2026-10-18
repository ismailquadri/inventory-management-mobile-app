// figma node: 9189:37405 check
export function Check(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(17,24,39)",
      ...props.style,
    }}>
      <svg width={17} height={12} viewBox="0 0 17 12" fill="none" style={{
        position: "absolute",
        left: 4,
        top: 6,
        width: 17,
        height: 12,
      }}>
        <path d={"M 16.707 0.293 C 17.098 0.683 17.098 1.317 16.707 1.707 L 6.707 11.707 C 6.317 12.098 5.683 12.098 5.293 11.707 L 0.293 6.707 C -0.098 6.317 -0.098 5.683 0.293 5.293 C 0.683 4.902 1.317 4.902 1.707 5.293 L 6 9.586 L 15.293 0.293 C 15.683 -0.098 16.317 -0.098 16.707 0.293 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
}
export default Check;
