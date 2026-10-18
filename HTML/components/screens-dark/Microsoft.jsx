// figma node: 9137:26186 microsoft
export function Microsoft(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 32,
      height: 32,
      overflow: "hidden",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 5,
        top: 5,
        width: 22,
        height: 22,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 12,
          top: 12,
          width: 10,
          height: 10,
          backgroundColor: "rgb(244,189,66)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 12,
          width: 10,
          height: 10,
          backgroundColor: "rgb(74,163,234)",
        }} />
        <div style={{
          position: "absolute",
          left: 12,
          top: 0,
          width: 10,
          height: 10,
          backgroundColor: "rgb(141,186,58)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 10,
          height: 10,
          backgroundColor: "rgb(224,94,55)",
        }} />
      </div>
    </div>
  );
}
export default Microsoft;
