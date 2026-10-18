// figma node: 9043:33294 Close remove
export function CloseRemove(_p = {}) {
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
      <svg width={12} height={12} viewBox="0 0 12 12" fill="none" style={{
        position: "absolute",
        left: 6,
        top: 6,
        width: 12,
        height: 12,
      }}>
        <path d={"M 0.53 -0.53 C 0.237 -0.823 -0.237 -0.823 -0.53 -0.53 C -0.823 -0.237 -0.823 0.237 -0.53 0.53 L 0.53 -0.53 Z M 11.47 12.53 C 11.763 12.823 12.237 12.823 12.53 12.53 C 12.823 12.237 12.823 11.763 12.53 11.47 L 11.47 12.53 Z M -0.53 0.53 L 11.47 12.53 L 12.53 11.47 L 0.53 -0.53 L -0.53 0.53 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <svg width={12} height={12} viewBox="0 0 12 12" fill="none" style={{
        position: "absolute",
        left: 6,
        top: 6,
        width: 12,
        height: 12,
      }}>
        <path d={"M 12.53 0.53 C 12.823 0.237 12.823 -0.237 12.53 -0.53 C 12.237 -0.823 11.763 -0.823 11.47 -0.53 L 12.53 0.53 Z M -0.53 11.47 C -0.823 11.763 -0.823 12.237 -0.53 12.53 C -0.237 12.823 0.237 12.823 0.53 12.53 L -0.53 11.47 Z M 11.47 -0.53 L -0.53 11.47 L 0.53 12.53 L 12.53 0.53 L 11.47 -0.53 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default CloseRemove;
