// figma node: 9182:42107 File Upload Area [1.0]
export function FileUploadArea102(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 780,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--background-bg-primary)",
      outline: "1px dashed var(--border-border-primary)",
      outlineOffset: "-1px",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      padding: "32px 24px 32px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-20b444beda67fdab" style={{
        position: "relative",
        width: 72,
        height: 72,
        flexShrink: 0,
      }} />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "center",
          lineHeight: "18px",
          color: "var(--text-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Attach File to Invoice"}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          textAlign: "center",
          lineHeight: "16px",
          color: "var(--text-secondary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text2 ?? "You Can upload a maximum of 5 files, 10MB each"}</span>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 8,
        backgroundColor: "var(--background-bg-secondary)",
        boxShadow: "inset 0 0 0 1px var(--border-border-primary)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "8px 16px 8px 16px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          height: 20,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={15} height={10.678} viewBox="0 0 15 10.678" fill="none" style={{
            position: "absolute",
            left: 2.5,
            top: 3.789,
            width: 15,
            height: 10.678,
            color: "var(--icon-primary)",
          }}>
            <path d={"M 12.661 9.994 C 12.283 10.165 12.116 10.609 12.286 10.986 C 12.457 11.364 12.901 11.532 13.279 11.361 L 12.661 9.994 Z M 11.581 4.082 L 10.831 4.082 C 10.831 4.497 11.166 4.832 11.581 4.832 L 11.581 4.082 Z M 3.419 4.082 L 3.426 4.832 C 3.837 4.829 4.169 4.494 4.169 4.082 L 3.419 4.082 Z M 1.722 11.361 C 2.099 11.532 2.543 11.364 2.714 10.986 C 2.884 10.609 2.716 10.165 2.339 9.994 L 1.722 11.361 Z M 13.279 11.361 C 14.734 10.703 15.75 9.237 15.75 7.532 L 14.25 7.532 C 14.25 8.626 13.599 9.57 12.661 9.994 L 13.279 11.361 Z M 15.75 7.532 C 15.75 6.266 15.299 5.201 14.519 4.455 C 13.746 3.714 12.698 3.333 11.581 3.332 L 11.581 4.832 C 12.358 4.833 13.019 5.095 13.482 5.538 C 13.939 5.976 14.25 6.636 14.25 7.532 L 15.75 7.532 Z M 12.331 4.082 C 12.331 3.245 12.014 2.064 11.269 1.078 C 10.5 0.062 9.268 -0.75 7.5 -0.75 L 7.5 0.75 C 8.746 0.75 9.554 1.298 10.072 1.984 C 10.614 2.699 10.831 3.56 10.831 4.082 L 12.331 4.082 Z M 7.5 -0.75 C 5.732 -0.75 4.5 0.062 3.731 1.079 C 2.986 2.064 2.669 3.245 2.669 4.082 L 4.169 4.082 C 4.169 3.56 4.386 2.699 4.928 1.984 C 5.446 1.298 6.254 0.75 7.5 0.75 L 7.5 -0.75 Z M 3.413 3.332 C 2.302 3.342 1.256 3.722 0.482 4.46 C -0.297 5.204 -0.75 6.265 -0.75 7.532 L 0.75 7.532 C 0.75 6.637 1.061 5.981 1.518 5.545 C 1.981 5.103 2.645 4.839 3.426 4.832 L 3.413 3.332 Z M -0.75 7.532 C -0.75 9.237 0.265 10.703 1.722 11.361 L 2.339 9.994 C 1.4 9.57 0.75 8.627 0.75 7.532 L -0.75 7.532 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={4.618} height={2.309} viewBox="0 0 4.618 2.309" fill="none" style={{
            position: "absolute",
            left: 7.69,
            top: 10.381,
            width: 4.618,
            height: 2.309,
            color: "var(--icon-primary)",
          }}>
            <path d={"M -0.53 1.779 C -0.823 2.072 -0.823 2.547 -0.53 2.84 C -0.237 3.132 0.237 3.132 0.53 2.84 L -0.53 1.779 Z M 2.309 0 L 2.839 -0.53 C 2.699 -0.671 2.508 -0.75 2.309 -0.75 C 2.11 -0.75 1.919 -0.671 1.779 -0.53 L 2.309 0 Z M 4.088 2.84 C 4.381 3.132 4.856 3.132 5.149 2.84 C 5.442 2.547 5.442 2.072 5.149 1.779 L 4.088 2.84 Z M 0.53 2.84 L 2.839 0.53 L 1.779 -0.53 L -0.53 1.779 L 0.53 2.84 Z M 1.779 0.53 L 4.088 2.84 L 5.149 1.779 L 2.839 -0.53 L 1.779 0.53 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={0.000} height={5.829} viewBox="0 0 0.000 5.829" fill="none" style={{
            position: "absolute",
            left: 10,
            top: 10.381,
            width: 0.000499725341796875,
            height: 5.829,
            color: "var(--icon-primary)",
          }}>
            <path d={"M 0.75 0 C 0.75 -0.414 0.414 -0.75 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 L 0.75 0 Z M -0.75 5.829 C -0.749 6.243 -0.414 6.579 0.001 6.579 C 0.415 6.578 0.751 6.243 0.75 5.828 L -0.75 5.829 Z M -0.75 0 L -0.75 5.829 L 0.75 5.828 L 0.75 0 L -0.75 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "20px",
          letterSpacing: "0.060em",
          color: "var(--text-primary)",
          flexShrink: 0,
        }}>Uploard File</span>
        <div style={{
          position: "relative",
          width: 20,
          height: 20,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <div style={{
            position: "absolute",
            left: 4.167,
            top: 7.083,
            width: 11.667,
            height: 5.833,
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 14,
              height: 7,
              overflow: "hidden",
            }}>
              <svg width={14} height={7} viewBox="0 0 14 7" fill="none" style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 14,
                height: 7,
                color: "var(--icon-secondary)",
              }}>
                <path d={"M 14.53 0.53 C 14.823 0.237 14.823 -0.237 14.53 -0.53 C 14.237 -0.823 13.763 -0.823 13.47 -0.53 L 14.53 0.53 Z M 7 7 L 6.47 7.53 C 6.763 7.823 7.237 7.823 7.53 7.53 L 7 7 Z M 0.53 -0.53 C 0.237 -0.823 -0.237 -0.823 -0.53 -0.53 C -0.823 -0.237 -0.823 0.237 -0.53 0.53 L 0.53 -0.53 Z M 13.47 -0.53 L 6.47 6.47 L 7.53 7.53 L 14.53 0.53 L 13.47 -0.53 Z M 7.53 6.47 L 0.53 -0.53 L -0.53 0.53 L 6.47 7.53 L 7.53 6.47 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FileUploadArea102;
