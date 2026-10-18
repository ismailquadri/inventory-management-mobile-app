// figma node: 9001:64357 Text Area (5 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function TextArea(_p = {}) {
  const props = { ..._p, state: _p.state ?? "default", showHintMessage: _p.showHintMessage ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 320,
      height: 160,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--padding-4) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 59,
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--2) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "rgb(0,0,0)",
          flexShrink: 0,
          filter: "drop-shadow(0px 1px 2px rgba(20,28,36,0.04))",
        }}>Text Area</span>
        <div style={{
          position: "relative",
          width: 18,
          height: 18,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={15} height={15} viewBox="0 0 15 15" fill="none" style={{
            position: "absolute",
            left: 1.5,
            top: 1.5,
            width: 15,
            height: 15,
            color: "rgb(151,161,175)",
          }}>
            <path d={"M 15 7.5 C 15 11.642 11.642 15 7.5 15 C 3.358 15 0 11.642 0 7.5 C 0 3.358 3.358 0 7.5 0 C 11.642 0 15 3.358 15 7.5 Z M 7.926 4.126 C 8.133 3.895 8.115 3.54 7.884 3.332 C 7.653 3.124 7.297 3.143 7.089 3.374 L 7.082 3.382 C 6.874 3.613 6.893 3.969 7.124 4.176 C 7.355 4.384 7.71 4.366 7.918 4.135 L 7.926 4.126 Z M 8.063 6.751 C 8.063 6.44 7.811 6.188 7.5 6.188 C 7.189 6.188 6.938 6.44 6.938 6.751 L 6.938 10.501 C 6.938 10.811 7.189 11.063 7.5 11.063 C 7.811 11.063 8.063 10.811 8.063 10.501 L 8.063 6.751 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        borderRadius: 10,
        backgroundColor: "var(--background-bg-secondary)",
        boxShadow: "inset 0 0 0 1px var(--border-border-primary), 0px 1px 2px 0px rgba(21,28,36,0.05)",
        display: "flex",
        flexDirection: "row",
        padding: "10px 8px 8px 12px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--padding-12) * 1px)",
        paddingTop: "calc(var(--padding-10) * 1px)",
        paddingRight: "calc(var(--padding-8) * 1px)",
        paddingBottom: "calc(var(--padding-8) * 1px)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "var(--text-secondary)",
          flexShrink: 0,
        }}>{props.text1 ?? "Message..."}</span>
        <span style={{
          position: "absolute",
          left: 277,
          top: 112,
          fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--text-tertiary)",
        }}>{props.text2 ?? "0/250"}</span>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--padding-4) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 59,
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--2) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "rgb(0,0,0)",
          flexShrink: 0,
          filter: "drop-shadow(0px 1px 2px rgba(20,28,36,0.04))",
        }}>Text Area</span>
        <div style={{
          position: "relative",
          width: 18,
          height: 18,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={15} height={15} viewBox="0 0 15 15" fill="none" style={{
            position: "absolute",
            left: 1.5,
            top: 1.5,
            width: 15,
            height: 15,
            color: "rgb(151,161,175)",
          }}>
            <path d={"M 15 7.5 C 15 11.642 11.642 15 7.5 15 C 3.358 15 0 11.642 0 7.5 C 0 3.358 3.358 0 7.5 0 C 11.642 0 15 3.358 15 7.5 Z M 7.926 4.126 C 8.133 3.895 8.115 3.54 7.884 3.332 C 7.653 3.124 7.297 3.143 7.089 3.374 L 7.082 3.382 C 6.874 3.613 6.893 3.969 7.124 4.176 C 7.355 4.384 7.71 4.366 7.918 4.135 L 7.926 4.126 Z M 8.063 6.751 C 8.063 6.44 7.811 6.188 7.5 6.188 C 7.189 6.188 6.938 6.44 6.938 6.751 L 6.938 10.501 C 6.938 10.811 7.189 11.063 7.5 11.063 C 7.811 11.063 8.063 10.811 8.063 10.501 L 8.063 6.751 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        height: 140,
        borderRadius: 10,
        backgroundColor: "var(--background-bg-secondary)",
        boxShadow: "inset 0 0 0 1px var(--badge-orange-border), 0px 1px 2px 0px rgba(12,17,15,0.1)",
        display: "flex",
        flexDirection: "row",
        padding: "10px 8px 8px 12px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--padding-12) * 1px)",
        paddingTop: "calc(var(--padding-10) * 1px)",
        paddingRight: "calc(var(--padding-8) * 1px)",
        paddingBottom: "calc(var(--padding-8) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "var(--text-secondary)",
          flexShrink: 0,
        }}>{props.text1 ?? "Message..."}</span>
      </div>
      {props.showHintMessage && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--4) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 18,
          height: 18,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={14.250} height={14.250} viewBox="0 0 14.250 14.250" fill="none" style={{
            position: "absolute",
            left: 1.875,
            top: 1.875,
            width: 14.25,
            height: 14.25,
            color: "var(--badge-red)",
          }}>
            <path d={"M 7.692 9.895 C 7.692 10.205 7.44 10.457 7.129 10.457 C 6.819 10.457 6.567 10.205 6.567 9.895 L 6.567 6.67 C 6.567 6.36 6.819 6.108 7.129 6.108 C 7.44 6.108 7.692 6.36 7.692 6.67 L 7.692 9.895 Z M 6.563 4.343 C 6.563 4.033 6.814 3.781 7.125 3.781 C 7.436 3.781 7.688 4.033 7.688 4.343 C 7.688 4.654 7.436 4.93 7.125 4.93 C 6.814 4.93 6.563 4.701 6.563 4.391 L 6.563 4.343 Z M 7.125 0 C 3.197 0 0 3.196 0 7.125 C 0 11.054 3.197 14.25 7.125 14.25 C 11.054 14.25 14.25 11.054 14.25 7.125 C 14.25 3.196 11.054 0 7.125 0 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "rgb(227,134,53)",
          flexShrink: 0,
          filter: "drop-shadow(0px 1px 2px rgba(20,28,36,0.04))",
        }}>Helper Text</span>
      </div>
      )}
      <span style={{
        position: "absolute",
        left: 277,
        top: 134,
        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--text-tertiary)",
      }}>{props.text2 ?? "0/250"}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 320,
      height: 160,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--padding-4) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 59,
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--2) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "rgb(0,0,0)",
          flexShrink: 0,
          filter: "drop-shadow(0px 1px 2px rgba(20,28,36,0.04))",
        }}>Text Area</span>
        <div style={{
          position: "relative",
          width: 18,
          height: 18,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={15} height={15} viewBox="0 0 15 15" fill="none" style={{
            position: "absolute",
            left: 1.5,
            top: 1.5,
            width: 15,
            height: 15,
            color: "rgb(151,161,175)",
          }}>
            <path d={"M 15 7.5 C 15 11.642 11.642 15 7.5 15 C 3.358 15 0 11.642 0 7.5 C 0 3.358 3.358 0 7.5 0 C 11.642 0 15 3.358 15 7.5 Z M 7.926 4.126 C 8.133 3.895 8.115 3.54 7.884 3.332 C 7.653 3.124 7.297 3.143 7.089 3.374 L 7.082 3.382 C 6.874 3.613 6.893 3.969 7.124 4.176 C 7.355 4.384 7.71 4.366 7.918 4.135 L 7.926 4.126 Z M 8.063 6.751 C 8.063 6.44 7.811 6.188 7.5 6.188 C 7.189 6.188 6.938 6.44 6.938 6.751 L 6.938 10.501 C 6.938 10.811 7.189 11.063 7.5 11.063 C 7.811 11.063 8.063 10.811 8.063 10.501 L 8.063 6.751 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        borderRadius: 10,
        backgroundColor: "var(--background-bg-secondary)",
        boxShadow: "inset 0 0 0 1px var(--border-border-primary), 0px 1px 2px 0px rgba(12,17,15,0.1)",
        display: "flex",
        flexDirection: "row",
        padding: "10px 8px 8px 12px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--padding-12) * 1px)",
        paddingTop: "calc(var(--padding-10) * 1px)",
        paddingRight: "calc(var(--padding-8) * 1px)",
        paddingBottom: "calc(var(--padding-8) * 1px)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "var(--text-secondary)",
          flexShrink: 0,
        }}>{props.text1 ?? "Message..."}</span>
      </div>
      <span style={{
        position: "absolute",
        left: 277,
        top: 134,
        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--text-tertiary)",
      }}>{props.text2 ?? "0/250"}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 320,
      height: 160,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--padding-4) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 59,
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--2) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "rgb(0,0,0)",
          flexShrink: 0,
          filter: "drop-shadow(0px 1px 2px rgba(20,28,36,0.04))",
        }}>Text Area</span>
        <div style={{
          position: "relative",
          width: 18,
          height: 18,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={15} height={15} viewBox="0 0 15 15" fill="none" style={{
            position: "absolute",
            left: 1.5,
            top: 1.5,
            width: 15,
            height: 15,
            color: "rgb(151,161,175)",
          }}>
            <path d={"M 15 7.5 C 15 11.642 11.642 15 7.5 15 C 3.358 15 0 11.642 0 7.5 C 0 3.358 3.358 0 7.5 0 C 11.642 0 15 3.358 15 7.5 Z M 7.926 4.126 C 8.133 3.895 8.115 3.54 7.884 3.332 C 7.653 3.124 7.297 3.143 7.089 3.374 L 7.082 3.382 C 6.874 3.613 6.893 3.969 7.124 4.176 C 7.355 4.384 7.71 4.366 7.918 4.135 L 7.926 4.126 Z M 8.063 6.751 C 8.063 6.44 7.811 6.188 7.5 6.188 C 7.189 6.188 6.938 6.44 6.938 6.751 L 6.938 10.501 C 6.938 10.811 7.189 11.063 7.5 11.063 C 7.811 11.063 8.063 10.811 8.063 10.501 L 8.063 6.751 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 10,
        backgroundColor: "var(--background-bg-secondary)",
        boxShadow: "inset 0 0 0 1px var(--border-border-primary), 0px 0px 0px 2px rgba(99,112,131,0.15)",
        display: "flex",
        flexDirection: "row",
        padding: "10px 8px 8px 12px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--padding-12) * 1px)",
        paddingTop: "calc(var(--padding-10) * 1px)",
        paddingRight: "calc(var(--padding-8) * 1px)",
        paddingBottom: "calc(var(--padding-8) * 1px)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "var(--text-secondary)",
          flexShrink: 0,
        }}>{props.text1 ?? "Message..."}</span>
      </div>
      <span style={{
        position: "absolute",
        left: 277,
        top: 134,
        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--text-tertiary)",
      }}>{props.text2 ?? "0/250"}</span>
    </div>
  );
  const __impls = {
    // figma: State=Default
    "state=default": __body0,
    // figma: State=Error
    "state=error": __body1,
    // figma: State=Hover
    "state=hover": __body2,
    // figma: State=Filled
    "state=filled": __body2,
    // figma: State=Focused
    "state=focused": __body3,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default TextArea;
