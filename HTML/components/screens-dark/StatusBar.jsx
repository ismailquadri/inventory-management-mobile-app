// figma node: 9001:64664 Status Bar
export function StatusBar(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 375,
      height: 44,
      backgroundColor: "var(--background-bg-secondary)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 24,
        top: 12,
        width: 326.998,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Host Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--text-primary)",
          flexShrink: 0,
        }}>{props.text1 ?? "12:00 AM"}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 18,
            height: 10,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={18} height={10} viewBox="0 0 18 10" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 18,
              height: 10,
              color: "var(--icon-primary)",
            }}>
              <path d={"M 17 0 L 16 0 C 15.448 0 15 0.42 15 0.938 L 15 9.063 C 15 9.58 15.448 10 16 10 L 17 10 C 17.552 10 18 9.58 18 9.063 L 18 0.938 C 18 0.42 17.552 0 17 0 Z M 11 2 L 12 2 C 12.552 2 13 2.43 13 2.96 L 13 9.04 C 13 9.57 12.552 10 12 10 L 11 10 C 10.448 10 10 9.57 10 9.04 L 10 2.96 C 10 2.43 10.448 2 11 2 Z M 7 4 L 6 4 C 5.448 4 5 4.448 5 5 L 5 9 C 5 9.552 5.448 10 6 10 L 7 10 C 7.552 10 8 9.552 8 9 L 8 5 C 8 4.448 7.552 4 7 4 Z M 2 6 L 1 6 C 0.448 6 0 6.448 0 7 L 0 9 C 0 9.552 0.448 10 1 10 L 2 10 C 2.552 10 3 9.552 3 9 L 3 7 C 3 6.448 2.552 6 2 6 Z"} fill="currentColor" fillRule="evenodd" />
            </svg>
          </div>
          <div style={{
            position: "relative",
            width: 15,
            height: 10,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={15} height={10} viewBox="0 0 15 10" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 15,
              height: 10,
              color: "var(--icon-primary)",
            }}>
              <path d={"M 7.5 2.077 C 9.677 2.077 11.77 2.853 13.347 4.246 C 13.466 4.353 13.656 4.352 13.773 4.243 L 14.908 3.179 C 14.967 3.123 15 3.048 15 2.97 C 15 2.892 14.966 2.818 14.906 2.763 C 10.766 -0.921 4.234 -0.921 0.095 2.763 C 0.035 2.818 0.001 2.892 0 2.97 C -0.001 3.048 0.032 3.123 0.092 3.179 L 1.227 4.243 C 1.344 4.352 1.534 4.354 1.653 4.246 C 3.23 2.853 5.324 2.077 7.5 2.077 Z M 7.502 5.538 C 8.698 5.538 9.851 5.951 10.737 6.696 C 10.857 6.802 11.046 6.8 11.163 6.691 L 12.297 5.627 C 12.356 5.571 12.39 5.496 12.389 5.417 C 12.388 5.338 12.353 5.263 12.292 5.208 C 9.593 2.877 5.413 2.877 2.714 5.208 C 2.653 5.263 2.618 5.338 2.617 5.417 C 2.616 5.496 2.65 5.571 2.71 5.627 L 3.843 6.691 C 3.96 6.8 4.149 6.802 4.269 6.696 C 5.155 5.951 6.307 5.539 7.502 5.538 Z M 9.77 7.867 C 9.772 7.946 9.739 8.022 9.678 8.077 L 7.716 9.916 C 7.659 9.97 7.58 10 7.499 10 C 7.417 10 7.338 9.97 7.281 9.916 L 5.319 8.077 C 5.258 8.022 5.225 7.946 5.227 7.867 C 5.228 7.788 5.265 7.713 5.328 7.661 C 6.581 6.677 8.416 6.677 9.669 7.661 C 9.732 7.713 9.769 7.788 9.77 7.867 Z"} fill="currentColor" fillRule="evenodd" />
            </svg>
          </div>
          <div style={{
            position: "relative",
            width: 25.998,
            height: 13,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 25.998,
              height: 13,
              overflow: "hidden",
            }}>
              <svg width={24.094} height={13} viewBox="0 0 24.094 13" fill="none" style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 24.094,
                height: 13,
                opacity: 0.35,
                borderRadius: 2.6666667461395264,
                color: "var(--icon-tertiary)",
              }}>
                <path d={"M 2.667 1 L 21.427 1 L 21.427 -1 L 2.667 -1 L 2.667 1 Z M 23.094 2.667 L 23.094 10.333 L 25.094 10.333 L 25.094 2.667 L 23.094 2.667 Z M 21.427 12 L 2.667 12 L 2.667 14 L 21.427 14 L 21.427 12 Z M 1 10.333 L 1 2.667 L -1 2.667 L -1 10.333 L 1 10.333 Z M 2.667 12 C 1.746 12 1 11.254 1 10.333 L -1 10.333 C -1 12.358 0.642 14 2.667 14 L 2.667 12 Z M 23.094 10.333 C 23.094 11.254 22.347 12 21.427 12 L 21.427 14 C 23.452 14 25.094 12.358 25.094 10.333 L 23.094 10.333 Z M 21.427 1 C 22.347 1 23.094 1.746 23.094 2.667 L 25.094 2.667 C 25.094 0.642 23.452 -1 21.427 -1 L 21.427 1 Z M 2.667 -1 C 0.642 -1 -1 0.642 -1 2.667 L 1 2.667 C 1 1.746 1.746 1 2.667 1 L 2.667 -1 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
              <svg width={1.280} height={4} viewBox="0 0 1.280 4" fill="none" style={{
                position: "absolute",
                left: 24.719,
                top: 5,
                width: 1.28,
                height: 4,
                opacity: 0.4,
                color: "var(--icon-tertiary)",
              }}>
                <path d={"M 0 0 L 0 4 C 0.776 3.661 1.28 2.873 1.28 2 C 1.28 1.127 0.776 0.339 0 0"} fill="currentColor" fillRule="nonzero" />
              </svg>
              <svg width={19.468} height={8.330} viewBox="0 0 19.468 8.330" fill="none" style={{
                position: "absolute",
                left: 2.214,
                top: 2.333,
                width: 19.468,
                height: 8.33,
                borderRadius: 1.3333333730697632,
                color: "var(--icon-primary)",
              }}>
                <path d={"M 0 1.333 C 0 0.597 0.597 0 1.333 0 L 18.134 0 C 18.871 0 19.468 0.597 19.468 1.333 L 19.468 6.997 C 19.468 7.733 18.871 8.33 18.134 8.33 L 1.333 8.33 C 0.597 8.33 0 7.733 0 6.997 L 0 1.333 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default StatusBar;
