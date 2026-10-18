import { Button } from './Button.jsx';

// figma node: 9001:64645 Pagination
export function Pagination(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 1156,
      height: 101,
      backgroundColor: "var(--background-bg-secondary)",
      boxShadow: "inset 0 0 0 1px var(--border-border-primary)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "16px 16px 16px 16px",
      justifyContent: "center",
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
          gap: 24,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{ position: "relative", width: 32, flexShrink: 0 }}>{props.icon1 ?? <Button rightIcon={false} leftIcon={true} state={"default"} type={"secondary"} size={"sm"} />}</div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 32,
              overflow: "hidden",
              borderRadius: 8,
              backgroundColor: "var(--background-bg-secondary-hover)",
              boxShadow: "inset 0 0 0 1px var(--border-border-secondary)",
              display: "flex",
              flexDirection: "row",
              gap: 8,
              padding: "8px 12px 8px 12px",
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
                  left: 5.667,
                  top: 3.333,
                  width: 4.667,
                  height: 9.333,
                  overflow: "hidden",
                }}>
                  <div style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    transform: "matrix(0,1,-1,0,4.667,0)",
                    transformOrigin: "0 0",
                    width: 9.333,
                    height: 4.667,
                    overflow: "hidden",
                  }}>
                    <svg width={9.333} height={4.667} viewBox="0 0 9.333 4.667" fill="none" style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: 9.333,
                      height: 4.667,
                      color: "rgb(16,23,23)",
                    }}>
                      <path d={"M 9.864 0.53 C 10.157 0.237 10.157 -0.237 9.864 -0.53 C 9.571 -0.823 9.096 -0.823 8.803 -0.53 L 9.864 0.53 Z M 4.667 4.667 L 4.136 5.197 C 4.429 5.49 4.904 5.49 5.197 5.197 L 4.667 4.667 Z M 0.53 -0.53 C 0.237 -0.823 -0.237 -0.823 -0.53 -0.53 C -0.823 -0.237 -0.823 0.237 -0.53 0.53 L 0.53 -0.53 Z M 8.803 -0.53 L 4.136 4.136 L 5.197 5.197 L 9.864 0.53 L 8.803 -0.53 Z M 5.197 4.136 L 0.53 -0.53 L -0.53 0.53 L 4.136 5.197 L 5.197 4.136 Z"} fill="currentColor" fillRule="nonzero" />
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
                color: "rgb(0,0,0)",
                flexShrink: 0,
              }}>1</span>
              <div style={{
                position: "relative",
                width: 16,
                height: 16,
                overflow: "hidden",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "absolute",
                  left: 5.667,
                  top: 3.333,
                  width: 4.667,
                  height: 9.333,
                  overflow: "hidden",
                }}>
                  <div style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    transform: "matrix(0,-1,1,0,0,9.333)",
                    transformOrigin: "0 0",
                    width: 9.333,
                    height: 4.667,
                    overflow: "hidden",
                  }}>
                    <svg width={9.333} height={4.667} viewBox="0 0 9.333 4.667" fill="none" style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: 9.333,
                      height: 4.667,
                      color: "rgb(16,23,23)",
                    }}>
                      <path d={"M 9.864 0.53 C 10.157 0.237 10.157 -0.237 9.864 -0.53 C 9.571 -0.823 9.096 -0.823 8.803 -0.53 L 9.864 0.53 Z M 4.667 4.667 L 4.136 5.197 C 4.429 5.49 4.904 5.49 5.197 5.197 L 4.667 4.667 Z M 0.53 -0.53 C 0.237 -0.823 -0.237 -0.823 -0.53 -0.53 C -0.823 -0.237 -0.823 0.237 -0.53 0.53 L 0.53 -0.53 Z M 8.803 -0.53 L 4.136 4.136 L 5.197 5.197 L 9.864 0.53 L 8.803 -0.53 Z M 5.197 4.136 L 0.53 -0.53 L -0.53 0.53 L 4.136 5.197 L 5.197 4.136 Z"} fill="currentColor" fillRule="nonzero" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                width: 32,
                height: 32,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                gap: 10,
                padding: "5px 14px 5px 14px",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexShrink: 0,
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "\"Host Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: 14,
                  whiteSpace: "nowrap",
                  lineHeight: "18px",
                  color: "var(--text-primary)",
                  flexShrink: 0,
                }}>{props.text1 ?? "2"}</span>
              </div>
              <div style={{
                position: "relative",
                width: 32,
                height: 32,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                gap: 10,
                padding: "5px 14px 5px 14px",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexShrink: 0,
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "\"Host Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: 14,
                  whiteSpace: "nowrap",
                  lineHeight: "18px",
                  color: "var(--text-primary)",
                  flexShrink: 0,
                }}>{props.text2 ?? "3"}</span>
              </div>
              <div style={{
                position: "relative",
                width: 32,
                height: 32,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                gap: 10,
                padding: "5px 12px 5px 12px",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexShrink: 0,
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "\"Host Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: 14,
                  whiteSpace: "nowrap",
                  lineHeight: "18px",
                  color: "var(--text-primary)",
                  flexShrink: 0,
                }}>{props.text3 ?? "..."}</span>
              </div>
              <div style={{
                position: "relative",
                width: 32,
                height: 32,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                gap: 10,
                padding: "5px 11px 5px 11px",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexShrink: 0,
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "\"Host Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: 14,
                  whiteSpace: "nowrap",
                  lineHeight: "18px",
                  color: "var(--text-primary)",
                  flexShrink: 0,
                }}>{props.text4 ?? "10"}</span>
              </div>
            </div>
          </div>
          <div style={{ position: "relative", width: 32, flexShrink: 0 }}>{props.icon3 ?? <Button rightIcon={true} leftIcon={false} state={"default"} type={"secondary"} size={"sm"} />}</div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 16,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Host Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "var(--text-secondary)",
            flexShrink: 0,
          }}>Showing 1 to 8 of 50 entries</span>
          <div style={{
            position: "relative",
            width: 95,
            overflow: "hidden",
            borderRadius: 8,
            backgroundColor: "var(--background-bg-secondary)",
            boxShadow: "inset 0 0 0 1px var(--border-border-primary)",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            padding: "8px 12px 8px 12px",
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
                left: 5.667,
                top: 3.333,
                width: 4.667,
                height: 9.333,
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  transform: "matrix(0,1,-1,0,4.667,0)",
                  transformOrigin: "0 0",
                  width: 9.333,
                  height: 4.667,
                  overflow: "hidden",
                }}>
                  <svg width={9.333} height={4.667} viewBox="0 0 9.333 4.667" fill="none" style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 9.333,
                    height: 4.667,
                    color: "var(--icon-primary)",
                  }}>
                    <path d={"M 9.864 0.53 C 10.157 0.237 10.157 -0.237 9.864 -0.53 C 9.571 -0.823 9.096 -0.823 8.803 -0.53 L 9.864 0.53 Z M 4.667 4.667 L 4.136 5.197 C 4.429 5.49 4.904 5.49 5.197 5.197 L 4.667 4.667 Z M 0.53 -0.53 C 0.237 -0.823 -0.237 -0.823 -0.53 -0.53 C -0.823 -0.237 -0.823 0.237 -0.53 0.53 L 0.53 -0.53 Z M 8.803 -0.53 L 4.136 4.136 L 5.197 5.197 L 9.864 0.53 L 8.803 -0.53 Z M 5.197 4.136 L 0.53 -0.53 L -0.53 0.53 L 4.136 5.197 L 5.197 4.136 Z"} fill="currentColor" fillRule="nonzero" />
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
              color: "var(--text-primary)",
              flexShrink: 0,
            }}>Show 8</span>
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
                  transform: "matrix(-1,0,0,-1,14,7)",
                  transformOrigin: "0 0",
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
      </div>
    </div>
  );
}
export default Pagination;
