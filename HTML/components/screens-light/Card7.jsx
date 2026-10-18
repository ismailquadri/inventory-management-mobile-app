import { Delivery2 } from './Delivery2.jsx';
import { InfoMenu3 } from './InfoMenu3.jsx';
import { RightDownLine } from './RightDownLine.jsx';

// figma node: 9181:31538 Card
export function Card7(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 277,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--background-bg-secondary)",
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
        gap: 8,
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
              width: 42,
              height: 42,
              borderRadius: 21,
              backgroundColor: "var(--purple-100)",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "3px 3px 3px 3px",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                width: 36,
                borderRadius: 18,
                backgroundColor: "var(--badge-purple-shade)",
                boxShadow: "0px 2px 16px 0px rgba(0,0,0,0.12)",
                display: "flex",
                flexDirection: "row",
                gap: 10,
                padding: "8px 8px 8px 8px",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <div style={{
                    position: "relative",
                    width: 20,
                    flexShrink: 0,
                    alignSelf: "stretch",
                    height: "auto",
                  }}>{props.icon1 ?? <Delivery2 />}</div>
              </div>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 500,
              fontSize: 16,
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "var(--text-primary)",
              flexShrink: 0,
            }}>{props.text1 ?? "New Orders"}</span>
          </div>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>{props.icon2 ?? <InfoMenu3 style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        </div>
        <div style={{
          position: "relative",
          height: 66,
          display: "flex",
          flexDirection: "row",
          gap: 43,
          alignItems: "flex-end",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 110,
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
            }}>{props.text2 ?? "11,345.00"}</span>
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
                  }}>{props.icon3 ?? <RightDownLine style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
                <span style={{
                  position: "relative",
                  fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 12,
                  whiteSpace: "nowrap",
                  lineHeight: "16px",
                  color: "var(--red-600)",
                  flexShrink: 0,
                }}>{props.text3 ?? "10%"}</span>
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
            display: "flex",
            flexDirection: "row",
            gap: 4,
            alignItems: "flex-end",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 12,
              borderRadius: 2,
              background: "linear-gradient(180deg, rgb(221,208,255) 0.00%, rgb(255,255,255) 103.00%)",
              flexShrink: 0,
              alignSelf: "stretch",
            }} />
            <div style={{
              position: "relative",
              width: 12,
              height: 40,
              borderRadius: 2,
              background: "linear-gradient(180deg, rgb(221,208,255) 0.00%, rgb(255,255,255) 103.00%)",
              flexShrink: 0,
            }} />
            <div style={{
              position: "relative",
              width: 12,
              height: 27,
              borderRadius: 2,
              background: "linear-gradient(180deg, rgb(221,208,255) 0.00%, rgb(255,255,255) 103.00%)",
              flexShrink: 0,
            }} />
            <div style={{
              position: "relative",
              width: 12,
              height: 17,
              borderRadius: 2,
              background: "linear-gradient(180deg, rgb(140,98,255) 0.00%, rgb(255,255,255) 99.41%)",
              flexShrink: 0,
            }} />
            <div style={{
              position: "relative",
              width: 12,
              height: 54,
              borderRadius: 2,
              background: "linear-gradient(180deg, rgb(221,208,255) 0.00%, rgb(255,255,255) 103.00%)",
              flexShrink: 0,
            }} />
            <div style={{
              position: "relative",
              width: 12,
              height: 33,
              borderRadius: 2,
              background: "linear-gradient(180deg, rgb(221,208,255) 0.00%, rgb(255,255,255) 103.00%)",
              flexShrink: 0,
            }} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card7;
