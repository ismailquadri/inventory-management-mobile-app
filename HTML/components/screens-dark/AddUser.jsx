// figma node: 9150:25865 Add User
export function AddUser(_p = {}) {
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
        left: 2,
        top: 2.5,
        width: 20,
        height: 19,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 19,
          overflow: "hidden",
        }}>
          <svg width={20} height={19} viewBox="0 0 20 19" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 20,
            height: 19,
          }}>
            <path d={"M 7.5 12.515 C 11.567 12.515 15 13.184 15 15.769 C 15 18.353 11.545 19 7.5 19 C 3.433 19 0 18.33 0 15.746 C 0 13.162 3.454 12.515 7.5 12.515 Z M 16.999 5 C 17.495 5 17.898 5.409 17.898 5.912 L 17.898 7.088 L 19.101 7.088 C 19.596 7.088 20 7.497 20 7.999 C 20 8.502 19.596 8.911 19.101 8.911 L 17.898 8.911 L 17.898 10.088 C 17.898 10.591 17.495 11 16.999 11 C 16.504 11 16.1 10.591 16.1 10.088 L 16.1 8.911 L 14.899 8.911 C 14.403 8.911 14 8.502 14 7.999 C 14 7.497 14.403 7.088 14.899 7.088 L 16.1 7.088 L 16.1 5.912 C 16.1 5.409 16.504 5 16.999 5 Z M 7.5 0 C 10.255 0 12.463 2.237 12.463 5.027 C 12.463 7.817 10.255 10.054 7.5 10.054 C 4.745 10.054 2.537 7.817 2.537 5.027 C 2.537 2.237 4.745 0 7.5 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
}
export default AddUser;
