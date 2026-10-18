import { Search } from './Search.jsx';

// figma node: 9001:64580 Search Input
export function SearchInput(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 191,
      height: 36,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--background-bg-secondary)",
      boxShadow: "inset 0 0 0 1px var(--border-border-primary), 0px 1px 2px 0px rgba(9,25,72,0.06)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "14px 10px 14px 10px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 162,
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <Search style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          letterSpacing: "0.060em",
          color: "var(--text-secondary)",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Search..."}</span>
      </div>
    </div>
  );
}
export default SearchInput;
