import { ArrowLeft2 } from './ArrowLeft2.jsx';
import { ArrowRight22 } from './ArrowRight22.jsx';

// figma node: 9023:1973 Tab Menu (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function TabMenu2(_p = {}) {
  const props = { ..._p, state: _p.state ?? "active", leftIcon: _p.leftIcon ?? true, rightIcon: _p.rightIcon ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
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
      {props.leftIcon && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <ArrowLeft2 />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Host Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--text-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Week"}</span>
      {props.rightIcon && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <ArrowRight22 />}</div>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
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
      {props.leftIcon && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <ArrowLeft2 />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Host Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--text-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Day"}</span>
      {props.rightIcon && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <ArrowRight22 />}</div>
      )}
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
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
      {props.leftIcon && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <ArrowLeft2 />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Host Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--text-secondary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Day"}</span>
      {props.rightIcon && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <ArrowRight22 />}</div>
      )}
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
export default TabMenu2;
