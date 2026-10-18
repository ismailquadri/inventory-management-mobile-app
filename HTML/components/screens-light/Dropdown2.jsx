import { ArrowDown2 } from './ArrowDown2.jsx';
import { Button } from './Button.jsx';
import { CloseRemove } from './CloseRemove.jsx';

// figma node: 9181:39435 Dropdown
export function Dropdown2(_p = {}) {
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
        gap: 24,
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
              fontSize: 18,
              lineHeight: "24px",
              color: "var(--text-primary)",
              flexShrink: 0,
              whiteSpace: "nowrap",
            }}>{props.text1 ?? "New Custom Report"}</span>
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
          height: 58,
          display: "flex",
          flexDirection: "column",
          gap: "calc(var(--padding-xxs) * 1px)",
          padding: "0px 24px 0px 24px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 483,
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
              fontWeight: 500,
              fontSize: 16,
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "rgb(0,0,0)",
              flexShrink: 0,
              filter: "drop-shadow(0px 1px 2px rgba(20,28,36,0.04))",
            }}>Select the report that you wannt to customize and create a new custom report.</span>
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
              }}>Select a report</span>
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
              text1={"Procced"}
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
export default Dropdown2;
