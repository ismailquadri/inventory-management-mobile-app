import { MoneyPaperDrop2 } from './MoneyPaperDrop2.jsx';
import { RightUpBox } from './RightUpBox.jsx';
import { RightUpLine } from './RightUpLine.jsx';

// figma node: 9181:32818 Card
export function Card10(_p = {}) {
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
        gap: 16,
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
              borderRadius: 50,
              backgroundColor: "var(--success-50)",
              display: "flex",
              flexDirection: "row",
              gap: 10,
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
                  flexShrink: 0,
                  color: "var(--success-600)",
                }}>{props.icon1 ?? <MoneyPaperDrop2 style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
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
            }}>{props.text1 ?? "Total Payments"}</span>
          </div>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
            }}>{props.icon2 ?? <RightUpBox />}</div>
        </div>
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
          <div style={{
            position: "relative",
            width: 120,
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
            }}>{props.text2 ?? "$11,321.00"}</span>
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
              <span style={{
                position: "relative",
                fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 12,
                whiteSpace: "nowrap",
                lineHeight: "16px",
                color: "var(--text-secondary)",
                flexShrink: 0,
              }}>{props.text3 ?? "last month"}</span>
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
                  }}>{props.icon3 ?? <RightUpLine style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
                <span style={{
                  position: "relative",
                  fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 12,
                  whiteSpace: "nowrap",
                  lineHeight: "16px",
                  color: "var(--success-600)",
                  flexShrink: 0,
                }}>{props.text4 ?? "12%"}</span>
              </div>
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 107,
            height: 49,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={107} height={49} viewBox="0 0 107 49" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 107,
              height: 49,
            }}>
              <path d={"M 13.896 15.4 L 0 30.1 L 0 49 L 107 49 L 107 28 L 87.545 28 L 79.208 16.8 L 69.481 16.1 L 61.838 0 L 54.89 14 L 44.468 24.5 L 25.013 26.6 L 13.896 15.4 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <svg width={107} height={30.100} viewBox="0 0 107 30.100" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 107,
              height: 30.1,
              color: "var(--success-600)",
            }}>
              <path d={"M 13.896 15.4 L 14.606 14.696 L 13.879 13.963 L 13.169 14.713 L 13.896 15.4 Z M 61.838 0 L 62.741 -0.429 L 61.858 -2.29 L 60.942 -0.445 L 61.838 0 Z M 86.946 27.194 L 86.144 27.791 L 86.946 27.194 Z M 68.98 15.047 L 69.884 14.618 L 68.98 15.047 Z M 70.644 16.184 L 70.572 17.181 L 70.644 16.184 Z M 54.091 14.804 L 53.382 14.1 L 54.091 14.804 Z M 55.393 12.985 L 56.289 13.429 L 55.393 12.985 Z M 45.217 23.745 L 45.927 24.449 L 45.217 23.745 Z M 79.755 17.535 L 78.953 18.132 L 79.755 17.535 Z M 0.727 30.787 L 14.623 16.087 L 13.169 14.713 L -0.727 29.413 L 0.727 30.787 Z M 13.186 16.104 L 23.287 26.28 L 24.706 24.871 L 14.606 14.696 L 13.186 16.104 Z M 26.555 27.439 L 43.517 25.608 L 43.302 23.62 L 26.34 25.451 L 26.555 27.439 Z M 45.927 24.449 L 54.801 15.509 L 53.382 14.1 L 44.507 23.04 L 45.927 24.449 Z M 56.289 13.429 L 62.733 0.445 L 60.942 -0.445 L 54.498 12.54 L 56.289 13.429 Z M 60.934 0.429 L 68.077 15.475 L 69.884 14.618 L 62.741 -0.429 L 60.934 0.429 Z M 70.572 17.181 L 78.222 17.732 L 78.366 15.737 L 70.715 15.186 L 70.572 17.181 Z M 78.953 18.132 L 86.144 27.791 L 87.748 26.597 L 80.557 16.938 L 78.953 18.132 Z M 88.55 29 L 107 29 L 107 27 L 88.55 27 L 88.55 29 Z M 86.144 27.791 C 86.71 28.552 87.602 29 88.55 29 L 88.55 27 C 88.234 27 87.936 26.851 87.748 26.597 L 86.144 27.791 Z M 68.077 15.475 C 68.541 16.452 69.494 17.104 70.572 17.181 L 70.715 15.186 C 70.356 15.16 70.038 14.943 69.884 14.618 L 68.077 15.475 Z M 54.801 15.509 C 55.405 14.9 55.908 14.198 56.289 13.429 L 54.498 12.54 C 54.212 13.117 53.835 13.643 53.382 14.1 L 54.801 15.509 Z M 43.517 25.608 C 44.429 25.51 45.28 25.101 45.927 24.449 L 44.507 23.04 C 44.184 23.366 43.759 23.571 43.302 23.62 L 43.517 25.608 Z M 78.222 17.732 C 78.512 17.753 78.779 17.899 78.953 18.132 L 80.557 16.938 C 80.036 16.238 79.236 15.799 78.366 15.737 L 78.222 17.732 Z M 23.287 26.28 C 24.143 27.143 25.346 27.57 26.555 27.439 L 26.34 25.451 C 25.736 25.516 25.135 25.303 24.706 24.871 L 23.287 26.28 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card10;
