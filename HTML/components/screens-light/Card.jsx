import { TrendDownGraph } from './TrendDownGraph.jsx';
import { TrendUpGraph } from './TrendUpGraph.jsx';

// figma node: 9181:30615 Card 
export function Card(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 574,
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
        gap: 19,
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
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 24,
            whiteSpace: "nowrap",
            lineHeight: "30px",
            letterSpacing: "0.113px",
            color: "var(--text-primary)",
            flexShrink: 0,
          }}>{props.text1 ?? "Sales Activity"}</span>
          <div style={{
            position: "relative",
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
              <svg width={2.667} height={2.667} viewBox="0 0 2.667 2.667" fill="none" style={{
                position: "absolute",
                left: 2,
                top: 6.667,
                width: 2.667,
                height: 2.667,
                color: "var(--text-secondary)",
              }}>
                <path d={"M 1.333 0 C 0.598 0 0 0.598 0 1.333 C 0 2.069 0.598 2.667 1.333 2.667 C 2.069 2.667 2.667 2.069 2.667 1.333 C 2.667 0.598 2.069 0 1.333 0 Z"} fill="currentColor" fillRule="evenodd" />
              </svg>
              <svg width={2.667} height={2.667} viewBox="0 0 2.667 2.667" fill="none" style={{
                position: "absolute",
                left: 6.667,
                top: 6.667,
                width: 2.667,
                height: 2.667,
                color: "var(--text-secondary)",
              }}>
                <path d={"M 1.333 0 C 0.598 0 0 0.598 0 1.333 C 0 2.069 0.598 2.667 1.333 2.667 C 2.069 2.667 2.667 2.069 2.667 1.333 C 2.667 0.598 2.069 0 1.333 0 Z"} fill="currentColor" fillRule="evenodd" />
              </svg>
              <svg width={2.667} height={2.667} viewBox="0 0 2.667 2.667" fill="none" style={{
                position: "absolute",
                left: 11.333,
                top: 6.667,
                width: 2.667,
                height: 2.667,
                color: "var(--text-secondary)",
              }}>
                <path d={"M 1.333 0 C 0.598 0 0 0.598 0 1.333 C 0 2.069 0.598 2.667 1.333 2.667 C 2.069 2.667 2.667 2.069 2.667 1.333 C 2.667 0.598 2.069 0 1.333 0 Z"} fill="currentColor" fillRule="evenodd" />
              </svg>
            </div>
            <div style={{
              position: "relative",
              width: 16,
              height: 16,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={11.467} height={12.833} viewBox="0 0 11.467 12.833" fill="none" style={{
                position: "absolute",
                left: 2.267,
                top: 1.583,
                width: 11.467,
                height: 12.833,
                color: "rgb(89,99,117)",
              }}>
                <path d={"M 8.565 5.77 L 2.901 5.77 C 2.625 5.77 2.401 5.546 2.401 5.27 C 2.401 4.994 2.625 4.77 2.901 4.77 L 8.565 4.77 C 8.841 4.77 9.065 4.994 9.065 5.27 C 9.065 5.546 8.841 5.77 8.565 5.77 Z M 10.645 1.968 C 10.163 1.485 9.476 1.212 8.657 1.144 L 8.657 0.5 C 8.657 0.224 8.433 0 8.157 0 C 7.881 0 7.657 0.224 7.657 0.5 L 7.657 2.866 C 7.614 2.878 7.571 2.893 7.524 2.893 C 7.248 2.893 7.024 2.669 7.024 2.393 L 7.024 1.247 C 7.024 1.174 6.964 1.114 6.891 1.114 L 3.809 1.114 L 3.809 0.5 C 3.809 0.224 3.585 0 3.309 0 C 3.033 0 2.809 0.224 2.809 0.5 L 2.809 2.866 C 2.765 2.878 2.723 2.893 2.675 2.893 C 2.399 2.893 2.175 2.669 2.175 2.393 L 2.175 1.417 C 2.175 1.33 2.094 1.266 2.011 1.291 C 0.738 1.675 0 2.709 0 4.233 L 0 9.663 C 0 11.649 1.195 12.833 3.195 12.833 L 8.271 12.833 C 10.272 12.833 11.467 11.665 11.467 9.709 L 11.467 4.234 C 11.469 3.293 11.185 2.509 10.645 1.968 Z"} fill="currentColor" fillRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
        <div style={{
          position: "relative",
          height: 202,
          display: "flex",
          flexDirection: "row",
          gap: 13,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 172,
            borderRadius: 10,
            backgroundColor: "var(--background-bg-primary)",
            display: "flex",
            flexDirection: "column",
            gap: 16,
            padding: "16px 16px 16px 16px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 10,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 14,
                lineHeight: "16px",
                color: "var(--text-secondary)",
                flexShrink: 0,
                alignSelf: "stretch",
                whiteSpace: "nowrap",
              }}>{props.text2 ?? "To be Shipped"}</span>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "row",
                gap: 2,
                alignItems: "flex-end",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 600,
                  fontSize: 20,
                  lineHeight: "18px",
                  color: "var(--text-primary)",
                  flexShrink: 0,
                  whiteSpace: "nowrap",
                }}>{props.text3 ?? "212"}</span>
                <div style={{
                    position: "relative",
                    width: 16,
                    height: 16,
                    flexShrink: 0,
                  }}>{props.icon2 ?? <TrendUpGraph style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
                <span style={{
                  position: "relative",
                  fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 14,
                  textAlign: "right",
                  lineHeight: "16px",
                  color: "var(--badge-success)",
                  flexShrink: 0,
                  whiteSpace: "nowrap",
                }}>{props.text4 ?? "+3.4%"}</span>
              </div>
            </div>
            <div style={{
              position: "relative",
              height: 102,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 86,
                width: 140,
                display: "flex",
                flexDirection: "row",
                gap: 9,
                alignItems: "flex-start",
                flexWrap: "nowrap",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 12,
                  whiteSpace: "nowrap",
                  lineHeight: "16px",
                  color: "var(--text-secondary)",
                  flexShrink: 0,
                }}>Mon</span>
                <span style={{
                  position: "relative",
                  fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 12,
                  whiteSpace: "nowrap",
                  lineHeight: "16px",
                  color: "var(--text-secondary)",
                  flexShrink: 0,
                }}>Tue</span>
                <span style={{
                  position: "relative",
                  fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 12,
                  whiteSpace: "nowrap",
                  lineHeight: "16px",
                  color: "var(--text-secondary)",
                  flexShrink: 0,
                }}>Wed</span>
                <span style={{
                  position: "relative",
                  fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 12,
                  whiteSpace: "nowrap",
                  lineHeight: "16px",
                  color: "var(--text-secondary)",
                  flexShrink: 0,
                }}>Thu</span>
                <span style={{
                  position: "relative",
                  fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 12,
                  whiteSpace: "nowrap",
                  lineHeight: "16px",
                  color: "var(--text-secondary)",
                  flexShrink: 0,
                }}>Fri</span>
              </div>
              <div style={{
                position: "absolute",
                left: 84,
                top: 44,
                width: 29,
                height: 32,
                overflow: "hidden",
              }}>
                <svg width={29} height={32} viewBox="0 0 29 32" fill="none" style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 29,
                  height: 32,
                }}>
                  <path d={"M 0 13.945 C 0 12.694 0.469 11.488 1.314 10.566 L 9.514 1.621 C 10.461 0.588 11.798 0 13.2 0 L 16.658 0 C 18.142 0 19.549 0.659 20.499 1.799 L 27.841 10.609 C 28.59 11.508 29 12.641 29 13.81 L 29 32 L 0 32 L 0 13.945 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 31,
                  width: 29,
                  height: 1,
                  backgroundColor: "var(--primary-600)",
                }} />
              </div>
              <div style={{
                position: "absolute",
                left: 0,
                top: 26,
                width: 140,
                height: 50,
                overflow: "hidden",
              }}>
                <svg width={140} height={50} viewBox="0 0 140 50" fill="none" style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 140,
                  height: 50,
                }}>
                  <path d={"M 12.263 0 L 0 7.614 L 0 50 L 140 50 L 140 17.259 L 119.051 42.64 L 97.847 22.589 L 76.387 35.533 L 55.182 0 L 33.723 30.203 L 12.263 0 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <svg width={140} height={42.640} viewBox="0 0 140 42.640" fill="none" style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 140,
                  height: 42.64,
                  borderRadius: 2,
                  color: "var(--primary-600)",
                }}>
                  <path d={"M 117.496 41.17 L 118.184 40.443 L 117.496 41.17 Z M 120.413 40.989 L 121.184 41.626 L 120.413 40.989 Z M 96.545 23.374 L 97.061 24.231 L 96.545 23.374 Z M 98.952 23.634 L 98.265 24.36 L 98.952 23.634 Z M 75.357 33.807 L 74.498 34.32 L 75.357 33.807 Z M 78.108 34.495 L 78.624 35.351 L 78.108 34.495 Z M 56.754 2.633 L 57.613 2.121 L 56.754 2.633 Z M 32.092 27.908 L 31.277 28.488 L 32.092 27.908 Z M 10.666 0.991 L 10.139 0.142 L 10.666 0.991 Z M 0.528 8.464 L 11.194 1.841 L 10.139 0.142 L -0.528 6.765 L 0.528 8.464 Z M 12.536 2.111 L 31.277 28.488 L 32.907 27.329 L 14.167 0.953 L 12.536 2.111 Z M 36.168 28.488 L 54.221 3.079 L 52.591 1.921 L 34.538 27.329 L 36.168 28.488 Z M 55.895 3.146 L 74.498 34.32 L 76.216 33.295 L 57.613 2.121 L 55.895 3.146 Z M 78.624 35.351 L 97.061 24.231 L 96.028 22.518 L 77.591 33.639 L 78.624 35.351 Z M 98.265 24.36 L 116.809 41.896 L 118.184 40.443 L 99.639 22.907 L 98.265 24.36 Z M 121.184 41.626 L 140.771 17.895 L 139.229 16.622 L 119.642 40.353 L 121.184 41.626 Z M 116.809 41.896 C 118.071 43.089 120.079 42.965 121.184 41.626 L 119.642 40.353 C 119.273 40.799 118.604 40.841 118.184 40.443 L 116.809 41.896 Z M 97.061 24.231 C 97.446 23.998 97.938 24.052 98.265 24.36 L 99.639 22.907 C 98.659 21.981 97.182 21.822 96.028 22.518 L 97.061 24.231 Z M 74.498 34.32 C 75.35 35.747 77.201 36.21 78.624 35.351 L 77.591 33.639 C 77.117 33.925 76.5 33.771 76.216 33.295 L 74.498 34.32 Z M 54.221 3.079 C 54.64 2.49 55.525 2.526 55.895 3.146 L 57.613 2.121 C 56.502 0.26 53.846 0.154 52.591 1.921 L 54.221 3.079 Z M 31.277 28.488 C 32.473 30.171 34.972 30.171 36.168 28.488 L 34.538 27.329 C 34.139 27.89 33.306 27.89 32.907 27.329 L 31.277 28.488 Z M 11.194 1.841 C 11.642 1.562 12.23 1.681 12.536 2.111 L 14.167 0.953 C 13.249 -0.339 11.485 -0.694 10.139 0.142 L 11.194 1.841 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
              <div style={{
                position: "absolute",
                left: 93,
                top: 43,
                display: "flex",
                flexDirection: "row",
                gap: 10,
                alignItems: "flex-start",
                flexWrap: "nowrap",
              }}>
                <div style={{
                  position: "relative",
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  backgroundColor: "var(--background-bg-secondary)",
                  boxShadow: "0px 4px 17px 0px rgba(0,0,0,0.25)",
                  flexShrink: 0,
                }} />
                <div style={{
                  position: "absolute",
                  left: 2,
                  top: 2,
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: "var(--primary-600)",
                }} />
              </div>
              <div style={{
                position: "absolute",
                left: 75,
                top: 4,
                display: "flex",
                flexDirection: "column",
                gap: 10,
                alignItems: "flex-start",
                flexWrap: "nowrap",
              }}>
                <svg width={47} height={29} viewBox="0 0 47 29" fill="none" style={{
                  position: "relative",
                  width: 47,
                  height: 29,
                  flexShrink: 0,
                  filter: "drop-shadow(0px 9px 22px rgba(0,0,0,0.06))",
                  color: "var(--background-bg-secondary)",
                }}>
                  <path d={"M 4 0 C 1.791 0 0 1.791 0 4 L 0 20 C 0 22.209 1.791 24 4 24 L 18.876 24 L 23 29 L 27.124 24 L 43 24 C 45.209 24 47 22.209 47 20 L 47 4 C 47 1.791 45.209 0 43 0 L 4 0 Z"} fill="currentColor" fillRule="evenodd" />
                </svg>
                <span style={{
                  position: "absolute",
                  left: 4,
                  top: 4,
                  width: 39,
                  height: 16,
                  fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: 14,
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  color: "var(--text-primary)",
                }}>$3,345</span>
              </div>
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 172,
            borderRadius: 10,
            backgroundColor: "var(--background-bg-primary)",
            display: "flex",
            flexDirection: "column",
            gap: 16,
            padding: "16px 16px 16px 16px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 10,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 14,
                lineHeight: "16px",
                color: "var(--text-secondary)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>To be Packed</span>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-end",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  width: 87,
                  fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 600,
                  fontSize: 20,
                  lineHeight: "18px",
                  color: "var(--text-primary)",
                  flexShrink: 0,
                }}> 324</span>
                <div style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "row",
                  gap: 2,
                  alignItems: "center",
                  flexWrap: "nowrap",
                  flexShrink: 0,
                }}>
                  <div style={{
                      position: "relative",
                      width: 16,
                      height: 16,
                      flexShrink: 0,
                    }}>{props.icon3 ?? <TrendUpGraph style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
                  <span style={{
                    position: "relative",
                    width: 33,
                    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 14,
                    textAlign: "right",
                    lineHeight: "16px",
                    color: "var(--badge-success)",
                    flexShrink: 0,
                  }}>+4.5%</span>
                </div>
              </div>
            </div>
            <div style={{
              position: "relative",
              height: 102,
              display: "flex",
              flexDirection: "row",
              gap: 8,
              alignItems: "flex-end",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                width: 140,
                height: 98,
                overflow: "hidden",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 49,
                  width: 6.364,
                  height: 49,
                  borderRadius: 3,
                  backgroundColor: "var(--blue-600)",
                }} />
                <div style={{
                  position: "absolute",
                  left: 14.849,
                  top: 32.667,
                  width: 6.364,
                  height: 49,
                  borderRadius: 3,
                  backgroundColor: "var(--blue-600)",
                }} />
                <div style={{
                  position: "absolute",
                  left: 74.242,
                  top: 10.051,
                  width: 6.364,
                  height: 38.949,
                  borderRadius: 3,
                  backgroundColor: "var(--blue-600)",
                }} />
                <div style={{
                  position: "absolute",
                  left: 89.091,
                  top: 3.769,
                  width: 6.364,
                  height: 56.538,
                  borderRadius: 3,
                  backgroundColor: "var(--blue-600)",
                }} />
                <div style={{
                  position: "absolute",
                  left: 103.939,
                  top: 23.872,
                  width: 6.364,
                  height: 56.538,
                  borderRadius: 3,
                  backgroundColor: "var(--blue-600)",
                }} />
                <div style={{
                  position: "absolute",
                  left: 118.788,
                  top: 42.718,
                  width: 6.364,
                  height: 51.513,
                  borderRadius: 3,
                  backgroundColor: "var(--blue-600)",
                }} />
                <div style={{
                  position: "absolute",
                  left: 44.546,
                  top: 16.333,
                  width: 6.364,
                  height: 71.615,
                  borderRadius: 3,
                  backgroundColor: "var(--blue-600)",
                }} />
                <div style={{
                  position: "absolute",
                  left: 30,
                  top: 32.667,
                  width: 6,
                  height: 37.692,
                  borderRadius: 3,
                  backgroundColor: "var(--blue-600)",
                }} />
                <div style={{
                  position: "absolute",
                  left: 134,
                  top: 70.359,
                  width: 6,
                  height: 27.641,
                  borderRadius: 3,
                  backgroundColor: "var(--blue-600)",
                }} />
                <div style={{
                  position: "absolute",
                  left: 59.394,
                  top: 0,
                  width: 6.364,
                  height: 65.333,
                  borderRadius: 3,
                  backgroundColor: "var(--blue-600)",
                }} />
              </div>
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 172,
            borderRadius: 10,
            backgroundColor: "var(--background-bg-primary)",
            display: "flex",
            flexDirection: "column",
            gap: 16,
            padding: "16px 16px 16px 16px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 10,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 14,
                lineHeight: "16px",
                color: "var(--text-secondary)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>To be Invoiced</span>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-end",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  width: 89,
                  fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 600,
                  fontSize: 20,
                  lineHeight: "18px",
                  color: "var(--text-primary)",
                  flexShrink: 0,
                }}>123</span>
                <div style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "row",
                  gap: 2,
                  alignItems: "center",
                  flexWrap: "nowrap",
                  flexShrink: 0,
                }}>
                  <div style={{
                      position: "relative",
                      width: 16,
                      height: 16,
                      flexShrink: 0,
                    }}>{props.icon4 ?? <TrendDownGraph style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
                  <span style={{
                    position: "relative",
                    width: 33,
                    fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 12,
                    textAlign: "right",
                    lineHeight: "16px",
                    color: "var(--badge-red)",
                    flexShrink: 0,
                  }}>-1.6%</span>
                </div>
              </div>
            </div>
            <div style={{
              position: "relative",
              height: 102,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "absolute",
                left: 30,
                top: 11,
                width: 80,
                height: 80,
                borderRadius: "50%",
                backgroundColor: "var(--background-bg-secondary)",
              }} />
              <div style={{
                position: "absolute",
                left: 30,
                top: 11,
                width: 80,
                height: 80,
                borderRadius: "50%",
                boxShadow: "inset 0 0 0 6px var(--yellow-600)",
              }} />
              <div style={{
                position: "absolute",
                left: 30,
                top: 11,
                width: 80,
                height: 80,
                borderRadius: "50%",
                backgroundColor: "rgb(10,175,255)",
                boxShadow: "inset 0 0 0 6px var(--red-600)",
              }} />
              <span style={{
                position: "absolute",
                left: 38,
                top: 42,
                width: 64,
                height: 19,
                fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 20,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "var(--text-primary)",
              }}>40%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
