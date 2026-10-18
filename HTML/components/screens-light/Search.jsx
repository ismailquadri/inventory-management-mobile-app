// figma node: 9004:3013 Search
export function Search(_p = {}) {
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
        left: 2.778,
        top: 2.778,
        width: 18.764,
        height: 19.222,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 18.764,
          height: 19.222,
          overflow: "hidden",
        }}>
          <svg width={17.977} height={17.977} viewBox="0 0 17.977 17.977" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 17.977,
            height: 17.977,
          }}>
            <path d={"M 17.227 8.989 C 17.227 13.539 13.539 17.227 8.989 17.227 L 8.989 18.727 C 14.367 18.727 18.727 14.367 18.727 8.989 L 17.227 8.989 Z M 8.989 17.227 C 4.439 17.227 0.75 13.539 0.75 8.989 L -0.75 8.989 C -0.75 14.367 3.61 18.727 8.989 18.727 L 8.989 17.227 Z M 0.75 8.989 C 0.75 4.439 4.439 0.75 8.989 0.75 L 8.989 -0.75 C 3.61 -0.75 -0.75 3.61 -0.75 8.989 L 0.75 8.989 Z M 8.989 0.75 C 13.539 0.75 17.227 4.439 17.227 8.989 L 18.727 8.989 C 18.727 3.61 14.367 -0.75 8.989 -0.75 L 8.989 0.75 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={3.524} height={3.515} viewBox="0 0 3.524 3.515" fill="none" style={{
            position: "absolute",
            left: 15.24,
            top: 15.707,
            width: 3.524,
            height: 3.515,
          }}>
            <path d={"M 0.53 -0.531 C 0.236 -0.824 -0.239 -0.823 -0.531 -0.53 C -0.824 -0.236 -0.823 0.239 -0.53 0.531 L 0.53 -0.531 Z M 2.994 4.046 C 3.288 4.338 3.763 4.338 4.055 4.045 C 4.348 3.751 4.347 3.276 4.054 2.984 L 2.994 4.046 Z M -0.53 0.531 L 2.994 4.046 L 4.054 2.984 L 0.53 -0.531 L -0.53 0.531 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
}
export default Search;
