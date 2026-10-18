// figma node: 9001:64869 Info menu - 2
export function InfoMenu2(_p = {}) {
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
      <svg width={4} height={4} viewBox="0 0 4 4" fill="none" style={{
        position: "absolute",
        left: 10,
        top: 17,
        width: 4,
        height: 4,
      }}>
        <path d={"M 2 0 C 0.897 0 0 0.897 0 2 C 0 3.103 0.897 4 2 4 C 3.103 4 4 3.103 4 2 C 4 0.897 3.103 0 2 0 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
      <svg width={4} height={4} viewBox="0 0 4 4" fill="none" style={{
        position: "absolute",
        left: 10,
        top: 3,
        width: 4,
        height: 4,
      }}>
        <path d={"M 2 4 C 3.103 4 4 3.103 4 2 C 4 0.897 3.103 0 2 0 C 0.897 0 0 0.897 0 2 C 0 3.103 0.897 4 2 4 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
      <svg width={4} height={4} viewBox="0 0 4 4" fill="none" style={{
        position: "absolute",
        left: 10,
        top: 10,
        width: 4,
        height: 4,
      }}>
        <path d={"M 2 0 C 0.897 0 0 0.897 0 2 C 0 3.103 0.897 4 2 4 C 3.103 4 4 3.103 4 2 C 4 0.897 3.103 0 2 0 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
}
export default InfoMenu2;
