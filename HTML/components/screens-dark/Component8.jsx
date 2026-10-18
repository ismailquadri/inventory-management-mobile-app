// figma node: 9001:64637 Component 8 (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "property1=" + __venc(p.property1);

export function Component8(_p = {}) {
  const props = { ..._p, property1: _p.property1 ?? "active" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 21,
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "20px",
          letterSpacing: "0.060em",
          color: "var(--primary-600)",
          flexShrink: 0,
        }}>{props.text1 ?? "Overview"}</span>
      </div>
      <div style={{
        position: "absolute",
        left: -1,
        top: 32,
        width: 83,
        height: 2,
        backgroundColor: "var(--primary-600)",
      }} />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 21,
      display: "flex",
      flexDirection: "row",
      gap: 6,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "20px",
          letterSpacing: "0.060em",
          color: "var(--text-secondary)",
          flexShrink: 0,
        }}>{props.text1 ?? "Overview"}</span>
      </div>
    </div>
  );
  const __impls = {
    // figma: Property 1=Active
    "property1=active": __body0,
    // figma: Property 1=Default
    "property1=default": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Component8;
