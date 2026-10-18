import { ArrowDown2 } from './ArrowDown2.jsx';
import { Button } from './Button.jsx';
import { CloseRemove } from './CloseRemove.jsx';
import { Component8 } from './Component8.jsx';

// figma node: 9182:41991 Dropdown
export function Dropdown3(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 811,
      overflow: "hidden",
      borderRadius: 16,
      backgroundColor: "var(--background-bg-secondary)",
      boxShadow: "inset 0 0 0 1px var(--border-border-primary)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
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
          boxShadow: "inset 0 0 0 1px var(--border-border-primary)",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "24px 24px 24px 24px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
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
            <span style={{
              position: "relative",
              fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 24,
              lineHeight: "34px",
              color: "var(--text-primary)",
              flexShrink: 0,
              whiteSpace: "nowrap",
            }}>{props.text1 ?? "Invite Members"}</span>
            <div style={{
                position: "relative",
                width: 24,
                height: 24,
                flexShrink: 0,
              }}>{props.icon1 ?? <CloseRemove />}</div>
          </div>
        </div>
        <div style={{
          position: "relative",
          width: 763,
          display: "flex",
          flexDirection: "column",
          gap: 16,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            height: 44,
            backgroundColor: "var(--background-bg-secondary)",
            borderTop: "1px solid var(--border-border-primary)",
            borderRight: "1px solid var(--border-border-primary)",
            borderBottom: "1px solid var(--border-border-primary)",
            borderLeft: "1px solid var(--border-border-primary)",
            display: "flex",
            flexDirection: "column",
            gap: 10,
            padding: "10px 0px 10px 0px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 16,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <Component8
                style={{
                  position: "relative",
                  height: 21,
                  width: 114,
                  flexShrink: 0,
                }}
                text1={"Invite via email"}
                property1={"active"}
              />
              <Component8
                style={{
                  position: "relative",
                  height: 21,
                  width: 147,
                  flexShrink: 0,
                }}
                text1={"Invite via link"}
                property1={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            height: 114,
            display: "flex",
            flexDirection: "column",
            gap: "calc(var(--padding-4) * 1px)",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
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
              }}>name@company.com, name@company.com,...</span>
              <span style={{
                position: "absolute",
                left: 720,
                top: 88,
                width: 31,
                height: 16,
                fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 12,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "16px",
                color: "var(--text-tertiary)",
              }}>0/250</span>
            </div>
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
                width: 17,
                height: 17,
                overflow: "hidden",
                flexShrink: 0,
              }}>
                <svg width={14.167} height={14.167} viewBox="0 0 14.167 14.167" fill="none" style={{
                  position: "absolute",
                  left: 1.417,
                  top: 1.417,
                  width: 14.167,
                  height: 14.167,
                  color: "rgb(246,44,44)",
                }}>
                  <path d={"M 14.167 7.083 C 14.167 10.995 10.995 14.167 7.083 14.167 C 3.171 14.167 0 10.995 0 7.083 C 0 3.171 3.171 0 7.083 0 C 10.995 0 14.167 3.171 14.167 7.083 Z M 7.615 3.542 C 7.615 3.248 7.377 3.01 7.083 3.01 C 6.79 3.01 6.552 3.248 6.552 3.542 L 6.552 7.792 C 6.552 8.085 6.79 8.323 7.083 8.323 C 7.377 8.323 7.615 8.085 7.615 7.792 L 7.615 3.542 Z M 7.485 10.98 C 7.682 10.762 7.664 10.426 7.446 10.229 C 7.228 10.033 6.892 10.051 6.696 10.269 L 6.688 10.277 C 6.492 10.495 6.51 10.831 6.728 11.027 C 6.946 11.223 7.282 11.206 7.478 10.987 L 7.485 10.98 Z"} fill="currentColor" fillRule="evenodd" />
                </svg>
              </div>
              <span style={{
                position: "relative",
                fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 14,
                whiteSpace: "nowrap",
                lineHeight: "20px",
                color: "var(--text-text-tertiary)",
                flexShrink: 0,
                filter: "drop-shadow(0px 1px 2px rgba(20,28,36,0.04))",
              }}>Helper Text</span>
            </div>
          </div>
          <div style={{
            position: "relative",
            height: 36,
            display: "flex",
            flexDirection: "column",
            gap: "calc(var(--padding-xxs) * 1px)",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 34,
              display: "flex",
              flexDirection: "row",
              gap: "calc(var(--2) * 1px)",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 14,
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgb(98,126,124)",
                flexShrink: 0,
                filter: "drop-shadow(0px 1px 2px rgba(20,28,36,0.04))",
              }}>(optional)</span>
              <div style={{
                position: "relative",
                width: 16,
                height: 16,
                overflow: "hidden",
                flexShrink: 0,
              }}>
                <svg width={12} height={12} viewBox="0 0 12 12" fill="none" style={{
                  position: "absolute",
                  left: 2,
                  top: 2,
                  width: 12,
                  height: 12,
                  color: "rgb(98,126,124)",
                }}>
                  <path d={"M -0.6 6 C -0.6 9.645 2.355 12.6 6 12.6 L 6 11.4 C 3.017 11.4 0.6 8.982 0.6 6 L -0.6 6 Z M 6 12.6 C 9.645 12.6 12.6 9.645 12.6 6 L 11.4 6 C 11.4 8.982 8.983 11.4 6 11.4 L 6 12.6 Z M 12.6 6 C 12.6 2.355 9.645 -0.6 6 -0.6 L 6 0.6 C 8.983 0.6 11.4 3.017 11.4 6 L 12.6 6 Z M 6 -0.6 C 2.355 -0.6 -0.6 2.355 -0.6 6 L 0.6 6 C 0.6 3.017 3.017 0.6 6 0.6 L 6 -0.6 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <svg width={0.004} height={4.935} viewBox="0 0 0.004 4.935" fill="none" style={{
                  position: "absolute",
                  left: 8,
                  top: 5.527,
                  width: 0.004,
                  height: 4.935,
                  color: "rgb(98,126,124)",
                }}>
                  <path d={"M -0.596 4.935 C -0.596 5.266 -0.328 5.535 0.004 5.535 C 0.335 5.535 0.604 5.266 0.604 4.935 L -0.596 4.935 Z M 0.604 2.068 C 0.604 1.737 0.335 1.468 0.004 1.468 C -0.328 1.468 -0.596 1.737 -0.596 2.068 L 0.604 2.068 Z M -0.6 0.042 C -0.6 0.374 -0.331 0.642 0 0.642 C 0.331 0.642 0.6 0.374 0.6 0.042 L -0.6 0.042 Z M 0.6 0 C 0.6 -0.331 0.331 -0.6 0 -0.6 C -0.331 -0.6 -0.6 -0.331 -0.6 0 L 0.6 0 Z M 0.604 4.935 L 0.604 2.068 L -0.596 2.068 L -0.596 4.935 L 0.604 4.935 Z M 0.6 0.042 L 0.6 0 L -0.6 0 L -0.6 0.042 L 0.6 0.042 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
            <div style={{
              position: "relative",
              borderRadius: 8,
              backgroundColor: "var(--background-bg-secondary)",
              boxShadow: "inset 0 0 0 1px var(--border-border-primary), 0px 1px 2px 0px rgba(12,17,15,0.1)",
              display: "flex",
              flexDirection: "row",
              padding: "8px 12px 8px 12px",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              paddingLeft: "calc(var(--padding-sm) * 1px)",
              paddingTop: "calc(var(--padding-xs) * 1px)",
              paddingRight: "calc(var(--padding-sm) * 1px)",
              paddingBottom: "calc(var(--padding-xs) * 1px)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "row",
                gap: "calc(var(--8) * 1px)",
                alignItems: "center",
                flexWrap: "nowrap",
                paddingLeft: "calc(var(--padding-none-2) * 1px)",
                paddingTop: "calc(var(--padding-none-2) * 1px)",
                paddingRight: "calc(var(--padding-none-2) * 1px)",
                paddingBottom: "calc(var(--padding-none-2) * 1px)",
                flexGrow: 1,
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 16,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  lineHeight: "22px",
                  color: "var(--text-secondary)",
                  flexShrink: 0,
                }}>Member</span>
              </div>
              <div style={{
                  position: "relative",
                  width: 20,
                  height: 20,
                  flexShrink: 0,
                }}>
                <ArrowDown2 style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />
              </div>
            </div>
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
                width: 16,
                height: 16,
                overflow: "hidden",
                flexShrink: 0,
              }}>
                <svg width={12} height={12} viewBox="0 0 12 12" fill="none" style={{
                  position: "absolute",
                  left: 2,
                  top: 2,
                  width: 12,
                  height: 12,
                  color: "rgb(145,153,146)",
                }}>
                  <path d={"M -0.6 6 C -0.6 9.645 2.355 12.6 6 12.6 L 6 11.4 C 3.017 11.4 0.6 8.982 0.6 6 L -0.6 6 Z M 6 12.6 C 9.645 12.6 12.6 9.645 12.6 6 L 11.4 6 C 11.4 8.982 8.983 11.4 6 11.4 L 6 12.6 Z M 12.6 6 C 12.6 2.355 9.645 -0.6 6 -0.6 L 6 0.6 C 8.983 0.6 11.4 3.017 11.4 6 L 12.6 6 Z M 6 -0.6 C 2.355 -0.6 -0.6 2.355 -0.6 6 L 0.6 6 C 0.6 3.017 3.017 0.6 6 0.6 L 6 -0.6 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <svg width={0.004} height={4.935} viewBox="0 0 0.004 4.935" fill="none" style={{
                  position: "absolute",
                  left: 8,
                  top: 5.527,
                  width: 0.004,
                  height: 4.935,
                  color: "rgb(145,153,146)",
                }}>
                  <path d={"M -0.596 4.935 C -0.596 5.266 -0.328 5.535 0.004 5.535 C 0.335 5.535 0.604 5.266 0.604 4.935 L -0.596 4.935 Z M 0.604 2.068 C 0.604 1.737 0.335 1.468 0.004 1.468 C -0.328 1.468 -0.596 1.737 -0.596 2.068 L 0.604 2.068 Z M -0.6 0.042 C -0.6 0.374 -0.331 0.642 0 0.642 C 0.331 0.642 0.6 0.374 0.6 0.042 L -0.6 0.042 Z M 0.6 0 C 0.6 -0.331 0.331 -0.6 0 -0.6 C -0.331 -0.6 -0.6 -0.331 -0.6 0 L 0.6 0 Z M 0.604 4.935 L 0.604 2.068 L -0.596 2.068 L -0.596 4.935 L 0.604 4.935 Z M 0.6 0.042 L 0.6 0 L -0.6 0 L -0.6 0.042 L 0.6 0.042 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
              <span style={{
                position: "relative",
                fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 14,
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "var(--text-secondary)",
                flexShrink: 0,
                filter: "drop-shadow(0px 1px 2px rgba(20,28,36,0.04))",
              }}>Helper Text</span>
            </div>
          </div>
        </div>
        <div style={{
          position: "relative",
          height: 77,
          backgroundColor: "var(--background-bg-secondary)",
          boxShadow: "0px 5px 40px 0px rgba(0,0,0,0.1)",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "20px 40px 20px 40px",
          justifyContent: "flex-end",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 12,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <Button
              style={{
                position: "relative",
                width: 80,
                flexShrink: 0,
                alignSelf: "stretch",
                height: "auto",
              }}
              rightIcon={false}
              leftIcon={false}
              text1={"Cancel"}
              state={"default"}
              type={"secondary"}
              size={"lg"}
            />
            <Button
              style={{
                position: "relative",
                width: 92,
                flexShrink: 0,
                alignSelf: "stretch",
                height: "auto",
              }}
              rightIcon={false}
              leftIcon={false}
              text1={"Invite"}
              state={"default"}
              type={"primary"}
              size={"lg"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dropdown3;
