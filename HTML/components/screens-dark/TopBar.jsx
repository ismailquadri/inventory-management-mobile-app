import { Search } from './Search.jsx';
import { Sun03 } from './Sun03.jsx';

// figma node: 9009:2356 Top Bar
export function TopBar(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 1192,
      borderRadius: 12,
      backgroundColor: "var(--background-bg-secondary)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "14px 16px 14px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
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
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
              color: "var(--yellow-500)",
            }}>{props.icon1 ?? <Sun03 />}</div>
          <span style={{
            position: "relative",
            fontFamily: "\"Host Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 18,
            whiteSpace: "nowrap",
            lineHeight: "24px",
            color: "var(--text-primary)",
            flexShrink: 0,
          }}>{props.text1 ?? "Hello, Tahsan Khan!"}</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 320,
            height: 36,
            borderRadius: 8,
            backgroundColor: "var(--background-bg-secondary)",
            boxShadow: "inset 0 0 0 1px var(--border-border-primary), 0px 1px 2px 0px rgba(9,25,72,0.06)",
            display: "flex",
            flexDirection: "row",
            gap: 12,
            padding: "8px 8px 8px 8px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                flexShrink: 0,
                alignSelf: "stretch",
                height: "auto",
              }}>{props.icon2 ?? <Search />}</div>
            <span style={{
              position: "relative",
              fontFamily: "\"Host Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "18px",
              color: "var(--text-secondary)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>{props.text2 ?? "Search anything"}</span>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 4,
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                width: 20,
                borderRadius: 4,
                backgroundColor: "var(--background-bg-secondary)",
                boxShadow: "0px 1px 3px 0px rgba(24,35,34,0.1), 0px 1px 2px 0px rgba(24,35,34,0.06)",
                display: "flex",
                flexDirection: "column",
                gap: 8,
                padding: "2px 4px 2px 4px",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 16,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  lineHeight: "20px",
                  color: "var(--icon-secondary)",
                  flexShrink: 0,
                }}>{props.text3 ?? "⌘"}</span>
              </div>
              <div style={{
                position: "relative",
                width: 20,
                borderRadius: 4,
                backgroundColor: "var(--background-bg-secondary)",
                boxShadow: "0px 1px 3px 0px rgba(24,35,34,0.1), 0px 1px 2px 0px rgba(24,35,34,0.06)",
                display: "flex",
                flexDirection: "column",
                gap: 8,
                padding: "2px 4px 2px 4px",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 16,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  lineHeight: "20px",
                  color: "var(--icon-secondary)",
                  flexShrink: 0,
                }}>{props.text4 ?? "F"}</span>
              </div>
            </div>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
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
                width: 20,
                height: 20,
                overflow: "hidden",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "absolute",
                  left: 2.5,
                  top: 1.667,
                  width: 15,
                  height: 16.667,
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
              <div style={{
                position: "relative",
                width: 20,
                height: 20,
                overflow: "hidden",
                flexShrink: 0,
              }}>
                <svg width={14.333} height={16.042} viewBox="0 0 14.333 16.042" fill="none" style={{
                  position: "absolute",
                  left: 2.833,
                  top: 1.979,
                  width: 14.333,
                  height: 16.042,
                  color: "rgb(89,99,117)",
                }}>
                  <path d={"M 10.707 7.213 L 3.627 7.213 C 3.282 7.213 3.002 6.932 3.002 6.588 C 3.002 6.243 3.282 5.963 3.627 5.963 L 10.707 5.963 C 11.052 5.963 11.332 6.243 11.332 6.588 C 11.332 6.932 11.052 7.213 10.707 7.213 Z M 13.307 2.46 C 12.704 1.856 11.845 1.515 10.822 1.43 L 10.822 0.625 C 10.822 0.28 10.542 0 10.197 0 C 9.852 0 9.572 0.28 9.572 0.625 L 9.572 3.582 C 9.517 3.598 9.464 3.616 9.405 3.616 C 9.06 3.616 8.78 3.336 8.78 2.991 L 8.78 1.559 C 8.78 1.467 8.705 1.393 8.613 1.393 L 4.761 1.393 L 4.761 0.625 C 4.761 0.28 4.481 0 4.136 0 C 3.791 0 3.511 0.28 3.511 0.625 L 3.511 3.582 C 3.457 3.598 3.403 3.616 3.344 3.616 C 2.999 3.616 2.719 3.336 2.719 2.991 L 2.719 1.771 C 2.719 1.662 2.617 1.583 2.513 1.614 C 0.922 2.093 0 3.386 0 5.292 L 0 12.079 C 0 14.561 1.493 16.042 3.994 16.042 L 10.338 16.042 C 12.84 16.042 14.333 14.582 14.333 12.137 L 14.333 5.293 C 14.337 4.116 13.982 3.137 13.307 2.46 Z"} fill="currentColor" fillRule="evenodd" />
                </svg>
              </div>
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
              padding: "8px 8px 8px 8px",
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
                <svg width={11.682} height={10.832} viewBox="0 0 11.682 10.832" fill="none" style={{
                  position: "absolute",
                  left: 4.159,
                  top: 4.334,
                  width: 11.682,
                  height: 10.832,
                  color: "rgb(145,153,146)",
                }}>
                  <path d={"M 0.897 4.944 L 1.647 4.945 L 1.647 4.944 L 0.897 4.944 Z M 10.786 4.944 L 10.036 4.944 L 10.036 4.945 L 10.786 4.944 Z M 10.787 5.938 L 11.537 5.938 L 11.537 5.937 L 10.787 5.938 Z M 11.166 7.636 L 11.845 7.316 L 11.844 7.316 L 11.166 7.636 Z M 11.517 8.382 L 12.196 8.062 L 12.196 8.062 L 11.517 8.382 Z M 0.165 8.382 L -0.513 8.062 L -0.513 8.062 L 0.165 8.382 Z M 0.517 7.636 L 1.195 7.955 L 1.195 7.955 L 0.517 7.636 Z M 0.896 5.938 L 0.146 5.937 L 0.146 5.938 L 0.896 5.938 Z M 1.647 4.944 C 1.647 2.628 3.525 0.75 5.841 0.75 L 5.841 -0.75 C 2.696 -0.75 0.147 1.799 0.147 4.944 L 1.647 4.944 Z M 5.841 0.75 C 8.158 0.75 10.036 2.628 10.036 4.944 L 11.536 4.944 C 11.536 1.799 8.986 -0.75 5.841 -0.75 L 5.841 0.75 Z M 10.036 4.945 L 10.037 5.938 L 11.537 5.937 L 11.536 4.944 L 10.036 4.945 Z M 10.037 5.938 C 10.037 6.635 10.19 7.324 10.488 7.956 L 11.844 7.316 C 11.641 6.885 11.537 6.415 11.537 5.938 L 10.037 5.938 Z M 10.487 7.955 L 10.838 8.701 L 12.196 8.062 L 11.845 7.316 L 10.487 7.955 Z M 10.838 8.701 C 11.141 9.343 10.671 10.082 9.962 10.082 L 9.962 11.582 C 11.771 11.582 12.966 9.7 12.196 8.062 L 10.838 8.701 Z M 9.962 10.082 L 1.721 10.082 L 1.721 11.582 L 9.962 11.582 L 9.962 10.082 Z M 1.721 10.082 C 1.011 10.082 0.542 9.344 0.844 8.701 L -0.513 8.062 C -1.283 9.7 -0.089 11.582 1.721 11.582 L 1.721 10.082 Z M 0.844 8.701 L 1.195 7.955 L -0.162 7.316 L -0.513 8.062 L 0.844 8.701 Z M 1.195 7.955 C 1.492 7.324 1.646 6.635 1.646 5.938 L 0.146 5.938 C 0.146 6.414 0.041 6.885 -0.162 7.316 L 1.195 7.955 Z M 1.646 5.938 L 1.647 4.945 L 0.147 4.944 L 0.146 5.937 L 1.646 5.938 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <svg width={4.667} height={2.334} viewBox="0 0 4.667 2.334" fill="none" style={{
                  position: "absolute",
                  left: 7.666,
                  top: 15.167,
                  width: 4.667,
                  height: 2.334,
                  color: "rgb(145,153,146)",
                }}>
                  <path d={"M 0.75 0 C 0.75 -0.414 0.414 -0.75 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 L 0.75 0 Z M 5.417 0 C 5.417 -0.414 5.081 -0.75 4.667 -0.75 C 4.253 -0.75 3.917 -0.414 3.917 0 L 5.417 0 Z M -0.75 0 C -0.75 1.703 0.631 3.084 2.334 3.084 L 2.334 1.584 C 1.459 1.584 0.75 0.874 0.75 0 L -0.75 0 Z M 2.334 3.084 C 4.037 3.084 5.417 1.702 5.417 0 L 3.917 0 C 3.917 0.874 3.208 1.584 2.334 1.584 L 2.334 3.084 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <svg width={2.675} height={2.012} viewBox="0 0 2.675 2.012" fill="none" style={{
                  position: "absolute",
                  left: 8.662,
                  top: 2.5,
                  width: 2.675,
                  height: 2.012,
                  color: "rgb(145,153,146)",
                }}>
                  <path d={"M 1.925 2.012 C 1.925 2.426 2.261 2.762 2.675 2.762 C 3.089 2.762 3.425 2.426 3.425 2.012 L 1.925 2.012 Z M -0.75 2.012 C -0.75 2.426 -0.414 2.762 0 2.762 C 0.414 2.762 0.75 2.426 0.75 2.012 L -0.75 2.012 Z M 3.425 2.012 L 3.425 1.337 L 1.925 1.337 L 1.925 2.012 L 3.425 2.012 Z M 3.425 1.337 C 3.425 0.184 2.489 -0.75 1.337 -0.75 L 1.337 0.75 C 1.662 0.75 1.925 1.013 1.925 1.337 L 3.425 1.337 Z M 1.337 -0.75 C 0.184 -0.75 -0.75 0.184 -0.75 1.337 L 0.75 1.337 C 0.75 1.013 1.013 0.75 1.337 0.75 L 1.337 -0.75 Z M -0.75 1.337 L -0.75 2.012 L 0.75 2.012 L 0.75 1.337 L -0.75 1.337 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
              <div style={{
                position: "relative",
                width: 20,
                height: 20,
                overflow: "hidden",
                flexShrink: 0,
              }}>
                <svg width={14.333} height={16.042} viewBox="0 0 14.333 16.042" fill="none" style={{
                  position: "absolute",
                  left: 2.833,
                  top: 1.979,
                  width: 14.333,
                  height: 16.042,
                  color: "rgb(89,99,117)",
                }}>
                  <path d={"M 10.707 7.213 L 3.627 7.213 C 3.282 7.213 3.002 6.932 3.002 6.588 C 3.002 6.243 3.282 5.963 3.627 5.963 L 10.707 5.963 C 11.052 5.963 11.332 6.243 11.332 6.588 C 11.332 6.932 11.052 7.213 10.707 7.213 Z M 13.307 2.46 C 12.704 1.856 11.845 1.515 10.822 1.43 L 10.822 0.625 C 10.822 0.28 10.542 0 10.197 0 C 9.852 0 9.572 0.28 9.572 0.625 L 9.572 3.582 C 9.517 3.598 9.464 3.616 9.405 3.616 C 9.06 3.616 8.78 3.336 8.78 2.991 L 8.78 1.559 C 8.78 1.467 8.705 1.393 8.613 1.393 L 4.761 1.393 L 4.761 0.625 C 4.761 0.28 4.481 0 4.136 0 C 3.791 0 3.511 0.28 3.511 0.625 L 3.511 3.582 C 3.457 3.598 3.403 3.616 3.344 3.616 C 2.999 3.616 2.719 3.336 2.719 2.991 L 2.719 1.771 C 2.719 1.662 2.617 1.583 2.513 1.614 C 0.922 2.093 0 3.386 0 5.292 L 0 12.079 C 0 14.561 1.493 16.042 3.994 16.042 L 10.338 16.042 C 12.84 16.042 14.333 14.582 14.333 12.137 L 14.333 5.293 C 14.337 4.116 13.982 3.137 13.307 2.46 Z"} fill="currentColor" fillRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TopBar;
