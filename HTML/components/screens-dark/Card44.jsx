import { DollarBadge } from './DollarBadge.jsx';
import { RightUpBox } from './RightUpBox.jsx';
import { RightUpLine } from './RightUpLine.jsx';

// figma node: 9182:40529 Card
export function Card44(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 277,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--background-bg-secondary)",
      boxShadow: "inset 0 0 0 1px var(--border-border-primary)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "16px 16px 16px 16px",
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
        gap: 12,
        alignItems: "flex-start",
        flexWrap: "nowrap",
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
              width: 36,
              height: 36,
              borderRadius: 18,
              backgroundColor: "var(--badge-pending-shade)",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 8px 8px 8px",
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
                  color: "var(--badge-pending)",
                }}>{props.icon1 ?? <DollarBadge />}</div>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "var(--text-secondary)",
              flexShrink: 0,
            }}>{props.text1 ?? "Pending Invoice"}</span>
          </div>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>{props.icon2 ?? <RightUpBox style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 16,
          alignItems: "flex-end",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 113,
            display: "flex",
            flexDirection: "column",
            gap: 8,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 24,
              lineHeight: "34px",
              color: "var(--text-primary)",
              flexShrink: 0,
              alignSelf: "stretch",
              whiteSpace: "nowrap",
            }}>{props.text2 ?? "$2,567"}</span>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 6,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                width: 47,
                borderRadius: 4,
                backgroundColor: "var(--badge-success-shade)",
                display: "flex",
                flexDirection: "column",
                gap: 10,
                padding: "2px 4px 2px 4px",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "row",
                  gap: 2,
                  justifyContent: "center",
                  alignItems: "center",
                  flexWrap: "nowrap",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                      position: "relative",
                      width: 16,
                      height: 16,
                      flexShrink: 0,
                    }}>{props.icon3 ?? <RightUpLine style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
                  <span style={{
                    position: "relative",
                    fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 12,
                    whiteSpace: "nowrap",
                    lineHeight: "16px",
                    color: "var(--badge-success)",
                    flexShrink: 0,
                  }}>{props.text3 ?? "12%"}</span>
                </div>
              </div>
              <span style={{
                position: "relative",
                fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 12,
                whiteSpace: "nowrap",
                lineHeight: "16px",
                color: "var(--text-secondary)",
                flexShrink: 0,
              }}>{props.text4 ?? "last month"}</span>
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 116,
            height: 56,
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 50,
              width: 4,
              height: 6,
              borderRadius: 100,
              backgroundColor: "var(--yellow-600)",
            }} />
            <div style={{
              position: "absolute",
              left: 14,
              top: 48,
              width: 4,
              height: 8,
              borderRadius: 100,
              backgroundColor: "var(--yellow-600)",
            }} />
            <div style={{
              position: "absolute",
              left: 28,
              top: 44,
              width: 4,
              height: 12,
              borderRadius: 100,
              backgroundColor: "var(--yellow-600)",
            }} />
            <div style={{
              position: "absolute",
              left: 42,
              top: 38,
              width: 4,
              height: 18,
              borderRadius: 100,
              backgroundColor: "var(--yellow-600)",
            }} />
            <div style={{
              position: "absolute",
              left: 56,
              top: 30,
              width: 4,
              height: 26,
              borderRadius: 100,
              backgroundColor: "var(--yellow-600)",
            }} />
            <div style={{
              position: "absolute",
              left: 70,
              top: 22,
              width: 4,
              height: 34,
              borderRadius: 100,
              backgroundColor: "var(--yellow-600)",
            }} />
            <div style={{
              position: "absolute",
              left: 84,
              top: 15,
              width: 4,
              height: 41,
              borderRadius: 100,
              backgroundColor: "var(--yellow-600)",
            }} />
            <div style={{
              position: "absolute",
              left: 98,
              top: 7,
              width: 4,
              height: 49,
              borderRadius: 100,
              backgroundColor: "var(--yellow-600)",
            }} />
            <div style={{
              position: "absolute",
              left: 112,
              top: 0,
              width: 4,
              height: 56,
              borderRadius: 100,
              backgroundColor: "var(--yellow-600)",
            }} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card44;
