import { DollarUp } from './DollarUp.jsx';
import { RightDownLine } from './RightDownLine.jsx';
import { RightUpBox } from './RightUpBox.jsx';

// figma node: 9181:32821 Card
export function Card13(_p = {}) {
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
              backgroundColor: "var(--red-50)",
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
                  color: "var(--red-600)",
                }}>{props.icon1 ?? <DollarUp style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
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
            }}>{props.text1 ?? "Receive Payments"}</span>
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
            }}>{props.text2 ?? "$8,764"}</span>
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
                }}>{props.text4 ?? "04%"}</span>
              </div>
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 105,
            height: 58,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={105.000} height={58} viewBox="0 0 105.000 58" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 105,
              height: 58,
            }}>
              <path d={"M 10.98 13.385 L 0 41.429 L 0 58 L 105 58 L 105 39.516 L 88.561 39.516 C 87.223 39.516 85.942 38.981 85.002 38.029 L 80.385 33.351 C 79.425 32.379 78.233 31.668 76.921 31.288 L 70.316 29.371 C 68.819 28.936 67.611 27.829 67.047 26.376 L 61.765 12.747 L 52.157 31.231 L 41.176 0 L 24.706 38.879 L 10.98 13.385 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <svg width={105.000} height={41.429} viewBox="0 0 105.000 41.429" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 105,
              height: 41.429,
              color: "var(--red-600)",
            }}>
              <path d={"M 10.98 13.385 L 11.861 12.911 L 10.837 11.008 L 10.049 13.02 L 10.98 13.385 Z M 24.706 38.879 L 23.825 39.353 L 24.814 41.189 L 25.627 39.269 L 24.706 38.879 Z M 41.176 0 L 42.12 -0.332 L 41.263 -2.768 L 40.256 -0.39 L 41.176 0 Z M 52.157 31.231 L 51.213 31.562 L 51.979 33.741 L 53.044 31.692 L 52.157 31.231 Z M 61.765 12.747 L 62.697 12.386 L 61.898 10.323 L 60.877 12.286 L 61.765 12.747 Z M 85.002 38.029 L 85.714 37.326 L 85.002 38.029 Z M 76.921 31.288 L 76.642 32.248 L 76.921 31.288 Z M 80.385 33.351 L 79.673 34.053 L 80.385 33.351 Z M 67.047 26.376 L 66.115 26.737 L 67.047 26.376 Z M 70.316 29.371 L 70.037 30.331 L 70.316 29.371 Z M 0.931 41.793 L 11.912 13.749 L 10.049 13.02 L -0.931 41.064 L 0.931 41.793 Z M 10.1 13.859 L 23.825 39.353 L 25.586 38.405 L 11.861 12.911 L 10.1 13.859 Z M 25.627 39.269 L 42.097 0.39 L 40.256 -0.39 L 23.785 38.489 L 25.627 39.269 Z M 40.233 0.332 L 51.213 31.562 L 53.1 30.899 L 42.12 -0.332 L 40.233 0.332 Z M 53.044 31.692 L 62.652 13.208 L 60.877 12.286 L 51.27 30.77 L 53.044 31.692 Z M 60.832 13.109 L 66.115 26.737 L 67.98 26.014 L 62.697 12.386 L 60.832 13.109 Z M 70.037 30.331 L 76.642 32.248 L 77.2 30.327 L 70.595 28.41 L 70.037 30.331 Z M 79.673 34.053 L 84.29 38.731 L 85.714 37.326 L 81.097 32.648 L 79.673 34.053 Z M 88.561 40.516 L 105 40.516 L 105 38.516 L 88.561 38.516 L 88.561 40.516 Z M 84.29 38.731 C 85.418 39.874 86.956 40.516 88.561 40.516 L 88.561 38.516 C 87.491 38.516 86.465 38.088 85.714 37.326 L 84.29 38.731 Z M 76.642 32.248 C 77.79 32.581 78.833 33.203 79.673 34.053 L 81.097 32.648 C 80.017 31.555 78.675 30.755 77.2 30.327 L 76.642 32.248 Z M 66.115 26.737 C 66.791 28.481 68.241 29.81 70.037 30.331 L 70.595 28.41 C 69.397 28.063 68.43 27.177 67.98 26.014 L 66.115 26.737 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card13;
