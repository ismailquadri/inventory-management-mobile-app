// figma node: 9001:64573 Tab Menu (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function TabMenu(_p = {}) {
  const props = { ..._p, state: _p.state ?? "active", leftIcon: _p.leftIcon ?? true, rightIcon: _p.rightIcon ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 76,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "var(--background-bg-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "4px 6px 4px 6px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "0.060em",
        color: "var(--text-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Week"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 70,
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "4px 6px 4px 6px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "0.060em",
        color: "var(--text-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Day"}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 76,
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "4px 6px 4px 6px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "0.060em",
        color: "var(--text-secondary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Day"}</span>
    </div>
  );
  const __impls = {
    // figma: State=Active
    "state=active": __body0,
    // figma: State=Hover
    "state=hover": __body1,
    // figma: State=Default
    "state=default": __body2,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default TabMenu;
