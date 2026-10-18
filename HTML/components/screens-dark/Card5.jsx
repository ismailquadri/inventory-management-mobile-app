import { Radio10 } from './Radio10.jsx';

// figma node: 9181:30644 Card
export function Card5(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 566,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--background-bg-secondary)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "0px 0px 16px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 16,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "var(--background-bg-secondary)",
          borderTop: "1px solid var(--border-border-primary)",
          borderRight: "1px solid var(--border-border-primary)",
          borderBottom: "1px solid var(--border-border-primary)",
          borderLeft: "1px solid var(--border-border-primary)",
          display: "flex",
          flexDirection: "row",
          padding: "12px 16px 12px 16px",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--text-primary)",
            flexShrink: 0,
          }}>{props.text1 ?? "Purchase & Sales"}</span>
          <div style={{
            position: "relative",
            width: 132,
            overflow: "hidden",
            borderRadius: 8,
            backgroundColor: "var(--background-bg-secondary)",
            boxShadow: "inset 0 0 0 1px var(--border-border-primary)",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            padding: "8px 8px 8px 8px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 16,
              height: 16,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <div style={{
                position: "absolute",
                left: 2,
                top: 1.333,
                width: 12,
                height: 13.333,
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 18,
                  height: 20,
                  overflow: "hidden",
                }}>
                  <svg width={17.824} height={1.500} viewBox="0 -0.750 17.824 1.500" fill="none" style={{
                    position: "absolute",
                    left: 0.093,
                    top: 7.404,
                    width: 17.824,
                    height: 1.5,
                    color: "var(--icon-secondary)",
                  }}>
                    <path d={"M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 -0.75 Z M 17.824 0.75 C 18.238 0.75 18.574 0.414 18.574 0 C 18.574 -0.414 18.238 -0.75 17.824 -0.75 L 17.824 0.75 Z M 0 0.75 L 17.824 0.75 L 17.824 -0.75 L 0 -0.75 L 0 0.75 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                  <svg width={0.009} height={1.500} viewBox="0 -0.750 0.009 1.500" fill="none" style={{
                    position: "absolute",
                    left: 13.442,
                    top: 11.31,
                    width: 0.009,
                    height: 1.5,
                    color: "var(--icon-secondary)",
                  }}>
                    <path d={"M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 -0.75 Z M 0.009 0.75 C 0.423 0.75 0.759 0.414 0.759 0 C 0.759 -0.414 0.423 -0.75 0.009 -0.75 L 0.009 0.75 Z M 0 0.75 L 0.009 0.75 L 0.009 -0.75 L 0 -0.75 L 0 0.75 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                  <svg width={0.009} height={1.500} viewBox="0 -0.750 0.009 1.500" fill="none" style={{
                    position: "absolute",
                    left: 9.005,
                    top: 11.31,
                    width: 0.009,
                    height: 1.5,
                    color: "var(--icon-secondary)",
                  }}>
                    <path d={"M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 -0.75 Z M 0.009 0.75 C 0.423 0.75 0.759 0.414 0.759 0 C 0.759 -0.414 0.423 -0.75 0.009 -0.75 L 0.009 0.75 Z M 0 0.75 L 0.009 0.75 L 0.009 -0.75 L 0 -0.75 L 0 0.75 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                  <svg width={0.009} height={1.500} viewBox="0 -0.750 0.009 1.500" fill="none" style={{
                    position: "absolute",
                    left: 4.558,
                    top: 11.31,
                    width: 0.009,
                    height: 1.5,
                    color: "var(--icon-secondary)",
                  }}>
                    <path d={"M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 -0.75 Z M 0.009 0.75 C 0.423 0.75 0.759 0.414 0.759 0 C 0.759 -0.414 0.423 -0.75 0.009 -0.75 L 0.009 0.75 Z M 0 0.75 L 0.009 0.75 L 0.009 -0.75 L 0 -0.75 L 0 0.75 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                  <svg width={0.009} height={1.500} viewBox="0 -0.750 0.009 1.500" fill="none" style={{
                    position: "absolute",
                    left: 13.442,
                    top: 15.196,
                    width: 0.009,
                    height: 1.5,
                    color: "var(--icon-secondary)",
                  }}>
                    <path d={"M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 -0.75 Z M 0.009 0.75 C 0.423 0.75 0.759 0.414 0.759 0 C 0.759 -0.414 0.423 -0.75 0.009 -0.75 L 0.009 0.75 Z M 0 0.75 L 0.009 0.75 L 0.009 -0.75 L 0 -0.75 L 0 0.75 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                  <svg width={0.009} height={1.500} viewBox="0 -0.750 0.009 1.500" fill="none" style={{
                    position: "absolute",
                    left: 9.005,
                    top: 15.196,
                    width: 0.009,
                    height: 1.5,
                    color: "var(--icon-secondary)",
                  }}>
                    <path d={"M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 -0.75 Z M 0.009 0.75 C 0.423 0.75 0.759 0.414 0.759 0 C 0.759 -0.414 0.423 -0.75 0.009 -0.75 L 0.009 0.75 Z M 0 0.75 L 0.009 0.75 L 0.009 -0.75 L 0 -0.75 L 0 0.75 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                  <svg width={0.009} height={1.500} viewBox="0 -0.750 0.009 1.500" fill="none" style={{
                    position: "absolute",
                    left: 4.558,
                    top: 15.196,
                    width: 0.009,
                    height: 1.5,
                    color: "var(--icon-secondary)",
                  }}>
                    <path d={"M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 -0.75 Z M 0.009 0.75 C 0.423 0.75 0.759 0.414 0.759 0 C 0.759 -0.414 0.423 -0.75 0.009 -0.75 L 0.009 0.75 Z M 0 0.75 L 0.009 0.75 L 0.009 -0.75 L 0 -0.75 L 0 0.75 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                  <svg width={1.500} height={3.291} viewBox="-0.750 0 1.500 3.291" fill="none" style={{
                    position: "absolute",
                    left: 13.044,
                    top: 0,
                    width: 1.5,
                    height: 3.291,
                    color: "var(--icon-secondary)",
                  }}>
                    <path d={"M 0.75 0 C 0.75 -0.414 0.414 -0.75 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 L 0.75 0 Z M -0.75 3.291 C -0.75 3.705 -0.414 4.041 0 4.041 C 0.414 4.041 0.75 3.705 0.75 3.291 L -0.75 3.291 Z M -0.75 0 L -0.75 3.291 L 0.75 3.291 L 0.75 0 L -0.75 0 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                  <svg width={1.500} height={3.291} viewBox="-0.750 0 1.500 3.291" fill="none" style={{
                    position: "absolute",
                    left: 4.966,
                    top: 0,
                    width: 1.5,
                    height: 3.291,
                    color: "var(--icon-secondary)",
                  }}>
                    <path d={"M 0.75 0 C 0.75 -0.414 0.414 -0.75 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 L 0.75 0 Z M -0.75 3.291 C -0.75 3.705 -0.414 4.041 0 4.041 C 0.414 4.041 0.75 3.705 0.75 3.291 L -0.75 3.291 Z M -0.75 0 L -0.75 3.291 L 0.75 3.291 L 0.75 0 L -0.75 0 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                  <svg width={18} height={18.421} viewBox="0 0 18 18.421" fill="none" style={{
                    position: "absolute",
                    left: 0,
                    top: 1.579,
                    width: 18,
                    height: 18.421,
                    color: "var(--icon-secondary)",
                  }}>
                    <path d={"M 18 4.643 L 17.25 4.641 L 17.25 4.643 L 18 4.643 Z M 13.238 -0.75 L 4.771 -0.75 L 4.771 0.75 L 13.238 0.75 L 13.238 -0.75 Z M 4.771 -0.75 C 3.168 -0.75 1.769 -0.302 0.767 0.65 C -0.24 1.608 -0.75 2.984 -0.75 4.643 L 0.75 4.643 C 0.75 3.295 1.157 2.349 1.801 1.737 C 2.451 1.12 3.438 0.75 4.771 0.75 L 4.771 -0.75 Z M -0.75 4.643 L -0.75 13.693 L 0.75 13.693 L 0.75 4.643 L -0.75 4.643 Z M -0.75 13.693 C -0.75 15.372 -0.242 16.767 0.762 17.741 C 1.763 18.711 3.163 19.171 4.771 19.171 L 4.771 17.671 C 3.442 17.671 2.457 17.294 1.806 16.664 C 1.159 16.037 0.75 15.068 0.75 13.693 L -0.75 13.693 Z M 4.771 19.171 L 13.229 19.171 L 13.229 17.671 L 4.771 17.671 L 4.771 19.171 Z M 13.229 19.171 C 14.838 19.171 16.237 18.72 17.237 17.765 C 18.243 16.804 18.75 15.426 18.75 13.768 L 17.25 13.768 C 17.25 15.118 16.844 16.066 16.201 16.68 C 15.553 17.299 14.566 17.671 13.229 17.671 L 13.229 19.171 Z M 18.75 13.768 L 18.75 4.643 L 17.25 4.643 L 17.25 13.768 L 18.75 13.768 Z M 18.75 4.645 C 18.755 2.987 18.251 1.61 17.245 0.651 C 16.245 -0.302 14.846 -0.75 13.238 -0.75 L 13.238 0.75 C 14.577 0.75 15.563 1.12 16.21 1.737 C 16.851 2.348 17.254 3.292 17.25 4.641 L 18.75 4.645 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
              </div>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 500,
              fontSize: 12,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "16px",
              color: "rgb(12,17,15)",
              flexShrink: 0,
            }}>This Month</span>
            <div style={{
              position: "relative",
              width: 16,
              height: 16,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <div style={{
                position: "absolute",
                left: 3.333,
                top: 5.667,
                width: 9.333,
                height: 4.667,
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
        <div style={{
          position: "relative",
          width: 534,
          display: "flex",
          flexDirection: "column",
          gap: 24,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 12,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
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
                  width: 20,
                  height: 20,
                  flexShrink: 0,
                }}>{props.icon1 ?? <Radio10 state={"default"} active={"on"} />}</div>
              <span style={{
                position: "relative",
                fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 14,
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "var(--text-primary)",
                flexShrink: 0,
              }}>{props.text2 ?? "Sales"}</span>
            </div>
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
                width: 20,
                height: 20,
                overflow: "hidden",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "absolute",
                  left: 2,
                  top: 2,
                  width: 16,
                  height: 16,
                  borderRadius: 96,
                  backgroundColor: "var(--purple-600)",
                  boxShadow: "inset 0px 2px 2px 0px rgba(22,38,100,0.32)",
                }} />
                <div style={{
                  position: "absolute",
                  left: 6,
                  top: 6,
                  width: 8,
                  height: 8,
                  borderRadius: 96,
                  backgroundColor: "var(--general-white)",
                  boxShadow: "inset 0 0 0 1px var(--general-white), inset 0px -2px 3px 0px rgb(207,209,211), 0px 2px 2px 0px rgba(27,28,29,0.12)",
                }} />
              </div>
              <span style={{
                position: "relative",
                fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 14,
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "var(--text-primary)",
                flexShrink: 0,
              }}>{props.text3 ?? "Purchase"}</span>
            </div>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 23,
              display: "flex",
              flexDirection: "column",
              gap: 14,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 12,
                textAlign: "right",
                lineHeight: "16px",
                color: "var(--text-secondary)",
                flexShrink: 0,
                alignSelf: "stretch",
                whiteSpace: "nowrap",
              }}>{props.text4 ?? "500"}</span>
              <span style={{
                position: "relative",
                fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 12,
                textAlign: "right",
                lineHeight: "16px",
                color: "var(--text-secondary)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>400</span>
              <span style={{
                position: "relative",
                fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 12,
                textAlign: "right",
                lineHeight: "16px",
                color: "var(--text-secondary)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>300</span>
              <span style={{
                position: "relative",
                fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 12,
                textAlign: "right",
                lineHeight: "16px",
                color: "var(--text-secondary)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>200</span>
              <span style={{
                position: "relative",
                fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 12,
                textAlign: "right",
                lineHeight: "16px",
                color: "var(--text-secondary)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>100</span>
              <span style={{
                position: "relative",
                fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 12,
                textAlign: "right",
                lineHeight: "16px",
                color: "var(--text-secondary)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>0 </span>
            </div>
            <div style={{
              position: "relative",
              width: 496,
              display: "flex",
              flexDirection: "column",
              gap: 13,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                height: 163,
                display: "flex",
                flexDirection: "column",
                gap: -300,
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <div style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "row",
                  gap: -1,
                  alignItems: "center",
                  flexWrap: "nowrap",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    width: 50,
                    height: 163,
                    overflow: "hidden",
                    borderTop: "1px dashed var(--border-border-primary)",
                    borderRight: "1px dashed var(--border-border-primary)",
                    borderBottom: "1px dashed var(--border-border-primary)",
                    borderLeft: "1px dashed var(--border-border-primary)",
                    flexShrink: 0,
                  }}>
                    <div style={{
                      position: "absolute",
                      left: 7,
                      top: 0,
                      height: 163,
                      display: "flex",
                      flexDirection: "row",
                      gap: 6,
                      alignItems: "flex-end",
                      flexWrap: "nowrap",
                    }}>
                      <div style={{
                        position: "relative",
                        width: 8,
                        height: 32,
                        opacity: 0.6,
                        borderRadius: 2,
                        backgroundColor: "var(--border-border-primary)",
                        flexShrink: 0,
                      }} />
                      <div style={{
                        position: "relative",
                        width: 8,
                        height: 76,
                        opacity: 0.6,
                        borderRadius: 2,
                        backgroundColor: "var(--border-border-primary)",
                        flexShrink: 0,
                      }} />
                      <div style={{
                        position: "relative",
                        width: 8,
                        height: 126,
                        opacity: 0.6,
                        borderRadius: 2,
                        backgroundColor: "var(--border-border-primary)",
                        flexShrink: 0,
                      }} />
                    </div>
                  </div>
                  <div style={{
                    position: "relative",
                    width: 50,
                    height: 163,
                    overflow: "hidden",
                    borderTop: "1px dashed var(--border-border-primary)",
                    borderRight: "1px dashed var(--border-border-primary)",
                    borderBottom: "1px dashed var(--border-border-primary)",
                    borderLeft: "1px dashed var(--border-border-primary)",
                    flexShrink: 0,
                  }}>
                    <div style={{
                      position: "absolute",
                      left: 7,
                      top: 0,
                      height: 163,
                      display: "flex",
                      flexDirection: "row",
                      gap: 6,
                      alignItems: "flex-end",
                      flexWrap: "nowrap",
                    }}>
                      <div style={{
                        position: "relative",
                        width: 8,
                        height: 52,
                        opacity: 0.6,
                        borderRadius: 2,
                        backgroundColor: "var(--border-border-primary)",
                        flexShrink: 0,
                      }} />
                      <div style={{
                        position: "relative",
                        width: 8,
                        height: 42,
                        opacity: 0.6,
                        borderRadius: 2,
                        backgroundColor: "var(--border-border-primary)",
                        flexShrink: 0,
                      }} />
                      <div style={{
                        position: "relative",
                        width: 8,
                        height: 26,
                        opacity: 0.6,
                        borderRadius: 2,
                        backgroundColor: "var(--border-border-primary)",
                        flexShrink: 0,
                      }} />
                    </div>
                  </div>
                  <div style={{
                    position: "relative",
                    width: 50,
                    height: 163,
                    overflow: "hidden",
                    borderTop: "1px dashed var(--border-border-primary)",
                    borderRight: "1px dashed var(--border-border-primary)",
                    borderBottom: "1px dashed var(--border-border-primary)",
                    borderLeft: "1px dashed var(--border-border-primary)",
                    flexShrink: 0,
                  }}>
                    <div style={{
                      position: "absolute",
                      left: 7,
                      top: 0,
                      height: 163,
                      display: "flex",
                      flexDirection: "row",
                      gap: 6,
                      alignItems: "flex-end",
                      flexWrap: "nowrap",
                    }}>
                      <div style={{
                        position: "relative",
                        width: 8,
                        height: 7,
                        opacity: 0.6,
                        borderRadius: 2,
                        backgroundColor: "var(--border-border-primary)",
                        flexShrink: 0,
                      }} />
                      <div style={{
                        position: "relative",
                        width: 8,
                        height: 44,
                        opacity: 0.6,
                        borderRadius: 2,
                        backgroundColor: "var(--border-border-primary)",
                        flexShrink: 0,
                      }} />
                      <div style={{
                        position: "relative",
                        width: 8,
                        height: 34,
                        opacity: 0.6,
                        borderRadius: 2,
                        backgroundColor: "var(--border-border-primary)",
                        flexShrink: 0,
                      }} />
                    </div>
                  </div>
                  <div style={{
                    position: "relative",
                    width: 50,
                    height: 163,
                    overflow: "hidden",
                    borderTop: "1px dashed var(--border-border-primary)",
                    borderRight: "1px dashed var(--border-border-primary)",
                    borderBottom: "1px dashed var(--border-border-primary)",
                    borderLeft: "1px dashed var(--border-border-primary)",
                    flexShrink: 0,
                  }}>
                    <div style={{
                      position: "absolute",
                      left: 7,
                      top: 0,
                      height: 163,
                      display: "flex",
                      flexDirection: "row",
                      gap: 6,
                      alignItems: "flex-end",
                      flexWrap: "nowrap",
                    }}>
                      <div style={{
                        position: "relative",
                        width: 8,
                        height: 67,
                        opacity: 0.6,
                        borderRadius: 2,
                        backgroundColor: "var(--border-border-primary)",
                        flexShrink: 0,
                      }} />
                      <div style={{
                        position: "relative",
                        width: 8,
                        height: 8,
                        opacity: 0.6,
                        borderRadius: 2,
                        backgroundColor: "var(--border-border-primary)",
                        flexShrink: 0,
                      }} />
                      <div style={{
                        position: "relative",
                        width: 8,
                        height: 14,
                        opacity: 0.6,
                        borderRadius: 2,
                        backgroundColor: "var(--border-border-primary)",
                        flexShrink: 0,
                      }} />
                    </div>
                  </div>
                  <div style={{
                    position: "relative",
                    width: 50,
                    height: 163,
                    overflow: "hidden",
                    borderTop: "1px dashed var(--border-border-primary)",
                    borderRight: "1px dashed var(--border-border-primary)",
                    borderBottom: "1px dashed var(--border-border-primary)",
                    borderLeft: "1px dashed var(--border-border-primary)",
                    flexShrink: 0,
                  }}>
                    <div style={{
                      position: "absolute",
                      left: 7,
                      top: 0,
                      height: 163,
                      display: "flex",
                      flexDirection: "row",
                      gap: 6,
                      alignItems: "flex-end",
                      flexWrap: "nowrap",
                    }}>
                      <div style={{
                        position: "relative",
                        width: 8,
                        height: 19,
                        opacity: 0.6,
                        borderRadius: 2,
                        backgroundColor: "var(--border-border-primary)",
                        flexShrink: 0,
                      }} />
                      <div style={{
                        position: "relative",
                        width: 8,
                        height: 26,
                        opacity: 0.6,
                        borderRadius: 2,
                        backgroundColor: "var(--border-border-primary)",
                        flexShrink: 0,
                      }} />
                      <div style={{
                        position: "relative",
                        width: 8,
                        height: 91,
                        opacity: 0.6,
                        borderRadius: 2,
                        backgroundColor: "var(--border-border-primary)",
                        flexShrink: 0,
                      }} />
                    </div>
                  </div>
                  <div style={{
                    position: "relative",
                    width: 50,
                    height: 163,
                    overflow: "hidden",
                    borderTop: "1px dashed var(--border-border-primary)",
                    borderRight: "1px dashed var(--border-border-primary)",
                    borderBottom: "1px dashed var(--border-border-primary)",
                    borderLeft: "1px dashed var(--border-border-primary)",
                    flexShrink: 0,
                  }}>
                    <div style={{
                      position: "absolute",
                      left: 7,
                      top: 0,
                      height: 163,
                      display: "flex",
                      flexDirection: "row",
                      gap: 6,
                      alignItems: "flex-end",
                      flexWrap: "nowrap",
                    }}>
                      <div style={{
                        position: "relative",
                        width: 8,
                        height: 47,
                        opacity: 0.6,
                        borderRadius: 2,
                        backgroundColor: "var(--border-border-primary)",
                        flexShrink: 0,
                      }} />
                      <div style={{
                        position: "relative",
                        width: 8,
                        height: 20,
                        opacity: 0.6,
                        borderRadius: 2,
                        backgroundColor: "var(--border-border-primary)",
                        flexShrink: 0,
                      }} />
                      <div style={{
                        position: "relative",
                        width: 8,
                        height: 14,
                        opacity: 0.6,
                        borderRadius: 2,
                        backgroundColor: "var(--border-border-primary)",
                        flexShrink: 0,
                      }} />
                    </div>
                  </div>
                  <div style={{
                    position: "relative",
                    width: 50,
                    height: 163,
                    overflow: "hidden",
                    borderTop: "1px dashed var(--border-border-primary)",
                    borderRight: "1px dashed var(--border-border-primary)",
                    borderBottom: "1px dashed var(--border-border-primary)",
                    borderLeft: "1px dashed var(--border-border-primary)",
                    flexShrink: 0,
                  }}>
                    <div style={{
                      position: "absolute",
                      left: 7,
                      top: 0,
                      height: 163,
                      display: "flex",
                      flexDirection: "row",
                      gap: 6,
                      alignItems: "flex-end",
                      flexWrap: "nowrap",
                    }}>
                      <div style={{
                        position: "relative",
                        width: 8,
                        height: 58,
                        opacity: 0.6,
                        borderRadius: 2,
                        backgroundColor: "var(--border-border-primary)",
                        flexShrink: 0,
                      }} />
                      <div style={{
                        position: "relative",
                        width: 8,
                        height: 19,
                        opacity: 0.6,
                        borderRadius: 2,
                        backgroundColor: "var(--border-border-primary)",
                        flexShrink: 0,
                      }} />
                      <div style={{
                        position: "relative",
                        width: 8,
                        height: 42,
                        opacity: 0.6,
                        borderRadius: 2,
                        backgroundColor: "var(--border-border-primary)",
                        flexShrink: 0,
                      }} />
                    </div>
                  </div>
                  <div style={{
                    position: "relative",
                    width: 50,
                    height: 163,
                    overflow: "hidden",
                    borderTop: "1px dashed var(--icon-primary)",
                    borderRight: "1px dashed var(--icon-primary)",
                    borderBottom: "1px dashed var(--icon-primary)",
                    borderLeft: "1px dashed var(--icon-primary)",
                    flexShrink: 0,
                  }}>
                    <div style={{
                      position: "absolute",
                      left: 7,
                      top: 0,
                      height: 163,
                      display: "flex",
                      flexDirection: "row",
                      gap: 6,
                      alignItems: "flex-end",
                      flexWrap: "nowrap",
                    }}>
                      <div style={{
                        position: "relative",
                        width: 8,
                        height: 20,
                        opacity: 0.6,
                        borderRadius: 2,
                        backgroundColor: "var(--border-border-primary)",
                        flexShrink: 0,
                      }} />
                      <div style={{
                        position: "relative",
                        width: 8,
                        height: 23,
                        opacity: 0.6,
                        borderRadius: 2,
                        backgroundColor: "var(--border-border-primary)",
                        flexShrink: 0,
                      }} />
                      <div style={{
                        position: "relative",
                        width: 8,
                        height: 14,
                        opacity: 0.6,
                        borderRadius: 2,
                        backgroundColor: "var(--border-border-primary)",
                        flexShrink: 0,
                      }} />
                    </div>
                  </div>
                  <div style={{
                    position: "relative",
                    width: 50,
                    height: 163,
                    overflow: "hidden",
                    borderTop: "1px dashed var(--border-border-primary)",
                    borderRight: "1px dashed var(--border-border-primary)",
                    borderBottom: "1px dashed var(--border-border-primary)",
                    borderLeft: "1px dashed var(--border-border-primary)",
                    flexShrink: 0,
                  }}>
                    <div style={{
                      position: "absolute",
                      left: 7,
                      top: 0,
                      height: 163,
                      display: "flex",
                      flexDirection: "row",
                      gap: 6,
                      alignItems: "flex-end",
                      flexWrap: "nowrap",
                    }}>
                      <div style={{
                        position: "relative",
                        width: 8,
                        height: 52,
                        opacity: 0.6,
                        borderRadius: 2,
                        backgroundColor: "var(--border-border-primary)",
                        flexShrink: 0,
                      }} />
                      <div style={{
                        position: "relative",
                        width: 8,
                        height: 81,
                        opacity: 0.6,
                        borderRadius: 2,
                        backgroundColor: "var(--border-border-primary)",
                        flexShrink: 0,
                      }} />
                      <div style={{
                        position: "relative",
                        width: 8,
                        height: 35,
                        opacity: 0.6,
                        borderRadius: 2,
                        backgroundColor: "var(--border-border-primary)",
                        flexShrink: 0,
                      }} />
                    </div>
                  </div>
                  <div style={{
                    position: "relative",
                    width: 50,
                    height: 163,
                    overflow: "hidden",
                    borderTop: "1px dashed var(--border-border-primary)",
                    borderRight: "1px dashed var(--border-border-primary)",
                    borderBottom: "1px dashed var(--border-border-primary)",
                    borderLeft: "1px dashed var(--border-border-primary)",
                    flexShrink: 0,
                  }}>
                    <div style={{
                      position: "absolute",
                      left: 7,
                      top: 0,
                      height: 163,
                      display: "flex",
                      flexDirection: "row",
                      gap: 6,
                      alignItems: "flex-end",
                      flexWrap: "nowrap",
                    }}>
                      <div style={{
                        position: "relative",
                        width: 8,
                        height: 10,
                        opacity: 0.6,
                        borderRadius: 2,
                        backgroundColor: "var(--border-border-primary)",
                        flexShrink: 0,
                      }} />
                      <div style={{
                        position: "relative",
                        width: 8,
                        height: 26,
                        opacity: 0.6,
                        borderRadius: 2,
                        backgroundColor: "var(--border-border-primary)",
                        flexShrink: 0,
                      }} />
                      <div style={{
                        position: "relative",
                        width: 8,
                        height: 124,
                        opacity: 0.6,
                        borderRadius: 2,
                        backgroundColor: "var(--border-border-primary)",
                        flexShrink: 0,
                      }} />
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 147,
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <svg width={496} height={60} viewBox="0 0 496 60" fill="none" style={{
                    position: "absolute",
                    left: 0,
                    top: 34,
                    width: 496,
                    height: 60,
                    filter: "drop-shadow(0px 73px 74px rgba(39,163,118,0.57)) drop-shadow(0px 22px 22px rgba(39,163,118,0.38)) drop-shadow(0px 9px 9px rgba(39,163,118,0.28)) drop-shadow(0px 3px 3.351px rgba(39,163,118,0.1986))",
                    color: "var(--primary-600)",
                  }}>
                    <path d={"M 0 31.346 C -0.552 31.346 -1 31.793 -1 32.346 C -1 32.898 -0.552 33.346 0 33.346 L 0 31.346 Z M 496 49.597 C 496.552 49.597 497 49.15 497 48.597 C 497 48.045 496.552 47.597 496 47.597 L 496 49.597 Z M 0 33.346 C 5.696 33.346 9.613 34.068 12.713 35.127 C 15.827 36.19 18.154 37.603 20.737 39.085 C 23.316 40.564 26.1 42.08 30.009 43.215 C 33.912 44.348 38.893 45.089 45.887 45.089 L 45.887 43.089 C 39.035 43.089 34.248 42.363 30.566 41.294 C 26.89 40.227 24.271 38.806 21.732 37.35 C 19.197 35.896 16.692 34.373 13.36 33.234 C 10.014 32.091 5.873 31.346 0 31.346 L 0 33.346 Z M 45.887 45.089 C 59.489 45.089 66.976 48.977 73.594 52.905 C 80.255 56.858 86.227 61 96.537 61 L 96.537 59 C 86.864 59 81.359 55.187 74.615 51.185 C 67.827 47.156 59.981 43.089 45.887 43.089 L 45.887 45.089 Z M 96.537 61 C 101.806 61 106.197 59.024 110.154 56.142 C 114.085 53.28 117.655 49.47 121.251 45.764 C 128.516 38.275 135.971 31.136 147.421 31.136 L 147.421 29.136 C 135.032 29.136 127.036 36.928 119.815 44.372 C 116.167 48.132 112.735 51.788 108.977 54.525 C 105.245 57.243 101.259 59 96.537 59 L 96.537 61 Z M 147.421 31.136 C 159.564 31.136 167.564 27.649 174.788 24.217 C 182.007 20.788 188.327 17.492 197.354 17.492 L 197.354 15.492 C 187.801 15.492 181.073 19.018 173.93 22.41 C 166.792 25.801 159.116 29.136 147.421 29.136 L 147.421 31.136 Z M 197.354 17.492 C 201.631 17.492 205.71 19.778 209.783 23.44 C 213.851 27.096 217.769 31.989 221.746 36.969 C 225.695 41.915 229.704 46.948 233.888 50.736 C 238.065 54.518 242.567 57.199 247.524 57.199 L 247.524 55.199 C 243.309 55.199 239.276 52.917 235.23 49.253 C 231.19 45.596 227.286 40.703 223.309 35.721 C 219.358 30.774 215.335 25.741 211.12 21.952 C 206.911 18.168 202.366 15.492 197.354 15.492 L 197.354 17.492 Z M 247.524 57.199 C 251.928 57.199 256.321 54.678 260.581 51.158 C 264.865 47.619 269.195 42.915 273.464 38.279 C 277.759 33.616 281.992 29.022 286.15 25.587 C 290.331 22.133 294.259 20.005 297.933 20.005 L 297.933 18.005 C 293.529 18.005 289.137 20.526 284.876 24.045 C 280.592 27.584 276.262 32.289 271.993 36.924 C 267.699 41.587 263.465 46.182 259.307 49.616 C 255.126 53.071 251.198 55.199 247.524 55.199 L 247.524 57.199 Z M 297.933 20.005 C 307.084 20.005 315.453 15.083 323.523 10.366 C 331.708 5.581 339.594 1 348.104 1 L 348.104 -1 C 338.952 -1 330.583 3.922 322.514 8.639 C 314.328 13.424 306.442 18.005 297.933 18.005 L 297.933 20.005 Z M 348.104 1 C 352.114 1 356.109 3.444 360.214 7.421 C 364.3 11.378 368.315 16.673 372.392 22.052 C 376.443 27.397 380.555 32.826 384.772 36.912 C 388.97 40.978 393.454 43.896 398.274 43.896 L 398.274 41.896 C 394.264 41.896 390.269 39.452 386.164 35.475 C 382.078 31.518 378.063 26.223 373.986 20.844 C 369.935 15.499 365.823 10.07 361.606 5.984 C 357.407 1.918 352.924 -1 348.104 -1 L 348.104 1 Z M 398.274 43.896 C 402.963 43.896 407.4 42.233 411.65 39.82 C 415.893 37.412 420.027 34.209 424.091 31.062 C 428.18 27.896 432.198 24.787 436.294 22.462 C 440.384 20.14 444.473 18.647 448.683 18.647 L 448.683 16.647 C 443.994 16.647 439.557 18.31 435.307 20.723 C 431.064 23.131 426.93 26.334 422.866 29.481 C 418.777 32.647 414.759 35.756 410.662 38.081 C 406.573 40.403 402.484 41.896 398.274 41.896 L 398.274 43.896 Z M 448.683 18.647 C 452.758 18.647 456.602 20.445 460.406 23.284 C 464.217 26.128 467.883 29.932 471.621 33.816 C 475.331 37.67 479.114 41.603 483.08 44.563 C 487.052 47.527 491.314 49.597 496 49.597 L 496 47.597 C 491.924 47.597 488.081 45.799 484.276 42.96 C 480.466 40.117 476.8 36.312 473.062 32.429 C 469.351 28.574 465.569 24.641 461.603 21.682 C 457.631 18.718 453.369 16.647 448.683 16.647 L 448.683 18.647 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                  <svg width={496} height={11} viewBox="0 0 496 11" fill="none" style={{
                    position: "absolute",
                    left: 0,
                    top: 98,
                    width: 496,
                    height: 11,
                    filter: "drop-shadow(0px 100px 80px rgba(140,98,255,0.34)) drop-shadow(0px 42px 34px rgba(140,98,255,0.24)) drop-shadow(0px 22px 18px rgba(140,98,255,0.2)) drop-shadow(0px 12px 10px rgba(140,98,255,0.17)) drop-shadow(0px 6px 5px rgba(140,98,255,0.14)) drop-shadow(0px 2px 2px rgba(140,98,255,0.1))",
                    color: "var(--purple-600)",
                  }}>
                    <path d={"M 0 5.395 C -0.552 5.395 -1 5.843 -1 6.395 C -1 6.948 -0.552 7.395 0 7.395 L 0 5.395 Z M 496 7.395 C 496.552 7.395 497 6.948 497 6.395 C 497 5.843 496.552 5.395 496 5.395 L 496 7.395 Z M 0 7.395 C 11.513 7.395 16.016 8.03 21.111 8.667 C 26.268 9.311 31.997 9.953 45.887 9.953 L 45.887 7.953 C 32.083 7.953 26.437 7.317 21.359 6.682 C 16.217 6.04 11.625 5.395 0 5.395 L 0 7.395 Z M 45.887 9.953 C 59.702 9.953 65.54 10.464 70.411 10.971 C 75.33 11.484 79.314 12 89.357 12 L 89.357 10 C 79.418 10 75.515 9.493 70.618 8.982 C 65.674 8.467 59.767 7.953 45.887 7.953 L 45.887 9.953 Z M 89.357 12 C 99.46 12 104.979 10.701 110.909 9.419 C 116.782 8.15 123.105 6.884 134.931 6.884 L 134.931 4.884 C 122.918 4.884 116.446 6.176 110.487 7.464 C 104.586 8.74 99.237 10 89.357 10 L 89.357 12 Z M 134.931 6.884 C 146.867 6.884 154.066 6.643 160.603 6.403 C 167.132 6.164 172.988 5.924 182.257 5.924 L 182.257 3.924 C 172.947 3.924 167.058 4.165 160.529 4.405 C 154.007 4.644 146.834 4.884 134.931 4.884 L 134.931 6.884 Z M 182.257 5.924 C 191.471 5.924 198.567 6.922 205.693 7.929 C 212.822 8.937 219.983 9.953 229.233 9.953 L 229.233 7.953 C 220.138 7.953 213.1 6.956 205.973 5.949 C 198.842 4.941 191.624 3.924 182.257 3.924 L 182.257 5.924 Z M 229.233 9.953 C 237.44 9.953 243.846 8.423 250.148 6.92 C 256.452 5.417 262.652 3.942 270.599 3.942 L 270.599 1.942 C 262.392 1.942 255.987 3.472 249.684 4.975 C 243.381 6.478 237.18 7.953 229.233 7.953 L 229.233 9.953 Z M 270.599 3.942 C 279.488 3.942 286.426 3.201 293.317 2.465 C 300.207 1.73 307.05 1 315.822 1 L 315.822 -1 C 306.934 -1 299.996 -0.259 293.105 0.477 C 286.215 1.212 279.371 1.942 270.599 1.942 L 270.599 3.942 Z M 315.822 1 C 324.473 1 331.026 3.186 337.718 5.425 C 344.408 7.663 351.238 9.953 360.248 9.953 L 360.248 7.953 C 351.597 7.953 345.044 5.767 338.352 3.528 C 331.662 1.29 324.832 -1 315.822 -1 L 315.822 1 Z M 360.248 9.953 C 369.24 9.953 376.459 8.724 383.601 7.509 C 390.745 6.294 397.814 5.093 406.619 5.093 L 406.619 3.093 C 397.626 3.093 390.408 4.322 383.266 5.537 C 376.121 6.753 369.053 7.953 360.248 7.953 L 360.248 9.953 Z M 406.619 5.093 C 415.462 5.093 422.451 4.059 429.376 3.036 C 436.301 2.013 443.161 1 451.842 1 L 451.842 -1 C 442.999 -1 436.009 0.034 429.084 1.057 C 422.159 2.08 415.3 3.093 406.619 3.093 L 406.619 5.093 Z M 451.842 1 C 460.679 1 467.133 2.572 473.684 4.169 C 480.245 5.769 486.903 7.395 496 7.395 L 496 5.395 C 487.163 5.395 480.708 3.824 474.158 2.226 C 467.596 0.626 460.939 -1 451.842 -1 L 451.842 1 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                  <div style={{
                    position: "absolute",
                    left: 337,
                    top: 26,
                    width: 15,
                    height: 15,
                    borderRadius: 7.5,
                    backgroundColor: "var(--background-bg-secondary)",
                    boxShadow: "0px 100px 80px 0px rgba(39,163,118,0.25), 0px 42px 34px 0px rgba(39,163,118,0.18), 0px 22px 18px 0px rgba(39,163,118,0.15), 0px 12px 10px 0px rgba(39,163,118,0.12), 0px 6px 5px 0px rgba(39,163,118,0.101), 0px 2px 2px 0px rgba(39,163,118,0.07)",
                    display: "flex",
                    flexDirection: "row",
                    gap: 10,
                    padding: "3px 3px 3px 3px",
                    alignItems: "center",
                    flexWrap: "nowrap",
                    boxSizing: "border-box",
                  }}>
                    <div style={{
                      position: "relative",
                      width: 9,
                      borderRadius: "50%",
                      backgroundColor: "var(--primary-600)",
                      boxShadow: "0px 100px 80px 0px rgba(39,163,118,0.26), 0px 42px 33px 0px rgba(39,163,118,0.18), 0px 22px 18px 0px rgba(39,163,118,0.16), 0px 12px 10px 0px rgba(39,163,118,0.13), 0px 6px 5px 0px rgba(39,163,118,0.1091), 0px 2px 2px 0px rgba(39,163,118,0.08)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }} />
                  </div>
                  <div style={{
                    position: "absolute",
                    left: 337,
                    top: 96,
                    width: 15,
                    height: 15,
                    borderRadius: 7.5,
                    backgroundColor: "var(--background-bg-secondary)",
                    boxShadow: "0px 100px 80px 0px rgba(140,98,255,0.07), 0px 42px 33px 0px rgba(140,98,255,0.05), 0px 22px 18px 0px rgba(140,98,255,0.04), 0px 12px 10px 0px rgba(140,98,255,0.03), 0px 6px 5px 0px rgba(140,98,255,0.03), 0px 2px 2px 0px rgba(140,98,255,0.02)",
                    display: "flex",
                    flexDirection: "row",
                    gap: 10,
                    padding: "3px 3px 3px 3px",
                    alignItems: "center",
                    flexWrap: "nowrap",
                    boxSizing: "border-box",
                  }}>
                    <div style={{
                      position: "relative",
                      width: 9,
                      borderRadius: "50%",
                      backgroundColor: "var(--purple-600)",
                      boxShadow: "0px 100px 80px 0px rgba(140,98,255,0.27), 0px 42px 33px 0px rgba(140,98,255,0.2), 0px 22px 18px 0px rgba(140,98,255,0.16), 0px 12px 10px 0px rgba(140,98,255,0.14), 0px 6px 5px 0px rgba(140,98,255,0.1), 0px 2px 2px 0px rgba(140,98,255,0.08)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }} />
                  </div>
                  <div style={{
                    position: "absolute",
                    left: 354,
                    top: 20,
                    width: 104,
                    height: 32,
                    boxShadow: "0px 0px 16px 0px rgba(0,0,0,0.06), 0px 14px 46px 0px rgba(0,0,0,0.12)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    padding: "8px 15px 8px 15px",
                    alignItems: "flex-start",
                    flexWrap: "nowrap",
                    boxSizing: "border-box",
                  }}>
                    <svg width={104.000} height={32} viewBox="0 0 104.000 32" fill="none" style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: 104,
                      height: 32,
                      color: "var(--background-bg-secondary)",
                    }}>
                      <path d={"M 11 0 C 8.791 0 7 1.791 7 4 L 7 11.823 L 0 16.001 L 7 19.908 L 7 28 C 7 30.209 8.791 32 11 32 L 100 32 C 102.209 32 104 30.209 104 28 L 104 4 C 104 1.791 102.209 0 100 0 L 11 0 Z"} fill="currentColor" fillRule="evenodd" />
                    </svg>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "row",
                      gap: 4,
                      alignItems: "center",
                      flexWrap: "nowrap",
                      flexShrink: 0,
                    }}>
                      <div style={{
                        position: "relative",
                        width: 10,
                        height: 10,
                        borderRadius: 7.5,
                        backgroundColor: "var(--background-bg-secondary)",
                        boxShadow: "0px 1px 4px 0px rgba(0,0,0,0.12)",
                        display: "flex",
                        flexDirection: "row",
                        gap: 10,
                        padding: "3px 3px 3px 3px",
                        justifyContent: "center",
                        alignItems: "center",
                        flexWrap: "nowrap",
                        boxSizing: "border-box",
                        flexShrink: 0,
                      }}>
                        <div style={{
                          position: "relative",
                          width: 6,
                          borderRadius: "50%",
                          backgroundColor: "var(--primary-600)",
                          boxShadow: "0px 100px 80px 0px rgba(39,163,118,0.26), 0px 42px 33px 0px rgba(39,163,118,0.18), 0px 22px 18px 0px rgba(39,163,118,0.16), 0px 12px 10px 0px rgba(39,163,118,0.13), 0px 6px 5px 0px rgba(39,163,118,0.1091), 0px 2px 2px 0px rgba(39,163,118,0.08)",
                          flexShrink: 0,
                          alignSelf: "stretch",
                        }} />
                      </div>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 400,
                        fontSize: 12,
                        textAlign: "right",
                        whiteSpace: "nowrap",
                        lineHeight: "16px",
                        color: "var(--text-primary)",
                        flexShrink: 0,
                      }}>Feb 20 - 250</span>
                    </div>
                  </div>
                  <div style={{
                    position: "absolute",
                    left: 229,
                    top: 87,
                    width: 97,
                    height: 32,
                    boxShadow: "0px 0px 16px 0px rgba(0,0,0,0.06), 0px 14px 46px 0px rgba(0,0,0,0.12)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    padding: "8px 8px 8px 8px",
                    alignItems: "flex-start",
                    flexWrap: "nowrap",
                    boxSizing: "border-box",
                  }}>
                    <svg width={104.000} height={32} viewBox="0 0 104.000 32" fill="none" style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: 104,
                      height: 32,
                      color: "var(--background-bg-secondary)",
                    }}>
                      <path d={"M 4 0 C 1.791 0 0 1.791 0 4 L 0 28 C 0 30.209 1.791 32 4 32 L 93 32 C 95.209 32 97 30.209 97 28 L 97 20.177 L 104 16.001 L 97 12.093 L 97 4 C 97 1.791 95.209 0 93 0 L 4 0 Z"} fill="currentColor" fillRule="evenodd" />
                    </svg>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "row",
                      gap: 4,
                      alignItems: "center",
                      flexWrap: "nowrap",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        width: 10,
                        height: 10,
                        borderRadius: 7.5,
                        backgroundColor: "var(--background-bg-secondary)",
                        boxShadow: "0px 1px 4px 0px rgba(0,0,0,0.12)",
                        display: "flex",
                        flexDirection: "row",
                        gap: 10,
                        padding: "3px 3px 3px 3px",
                        justifyContent: "center",
                        alignItems: "center",
                        flexWrap: "nowrap",
                        boxSizing: "border-box",
                        flexShrink: 0,
                      }}>
                        <div style={{
                          position: "relative",
                          width: 6,
                          borderRadius: "50%",
                          backgroundColor: "var(--purple-600)",
                          boxShadow: "0px 100px 80px 0px rgba(39,163,118,0.26), 0px 42px 33px 0px rgba(39,163,118,0.18), 0px 22px 18px 0px rgba(39,163,118,0.16), 0px 12px 10px 0px rgba(39,163,118,0.13), 0px 6px 5px 0px rgba(39,163,118,0.1091), 0px 2px 2px 0px rgba(39,163,118,0.08)",
                          flexShrink: 0,
                          alignSelf: "stretch",
                        }} />
                      </div>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 400,
                        fontSize: 12,
                        textAlign: "right",
                        whiteSpace: "nowrap",
                        lineHeight: "16px",
                        color: "var(--text-primary)",
                        flexShrink: 0,
                      }}>Feb 20 - 150</span>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 12,
                  textAlign: "right",
                  whiteSpace: "nowrap",
                  lineHeight: "16px",
                  color: "var(--text-secondary)",
                  flexShrink: 0,
                }}>01 February</span>
                <span style={{
                  position: "relative",
                  fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 12,
                  textAlign: "right",
                  whiteSpace: "nowrap",
                  lineHeight: "16px",
                  color: "var(--text-secondary)",
                  flexShrink: 0,
                }}>28 February</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card5;
