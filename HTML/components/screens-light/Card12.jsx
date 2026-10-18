import { DollarDocument2 } from './DollarDocument2.jsx';
import { RightUpBox } from './RightUpBox.jsx';
import { RightUpLine } from './RightUpLine.jsx';

// figma node: 9181:32820 Card
export function Card12(_p = {}) {
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
              backgroundColor: "var(--purple-50)",
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
                  color: "var(--purple-600)",
                }}>{props.icon1 ?? <DollarDocument2 style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
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
            }}>{props.text1 ?? "Today Payments"}</span>
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
            }}>{props.text2 ?? "$9,256"}</span>
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
                }}>{props.text4 ?? "10%"}</span>
              </div>
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 106,
            height: 58,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={106} height={58} viewBox="0 0 106 58" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 106,
              height: 58,
            }}>
              <path d={"M 12.564 26.943 L 0 37.14 L 0 58 L 106 58 L 106 36.632 L 88.729 36.632 C 88.288 36.632 87.9 36.343 87.772 35.921 L 76.902 0 L 69.573 26.911 C 69.417 27.484 68.799 27.795 68.246 27.58 L 58.076 23.626 C 57.725 23.49 57.326 23.562 57.046 23.814 L 39.26 39.778 C 38.977 40.032 38.574 40.103 38.22 39.962 L 26.265 35.173 C 24.466 34.452 22.765 33.507 21.203 32.36 L 13.786 26.913 C 13.419 26.644 12.917 26.656 12.564 26.943 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <svg width={106} height={40.193} viewBox="0 0 106 40.193" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 106,
              height: 40.193,
              color: "var(--purple-600)",
            }}>
              <path d={"M 76.902 0 L 77.859 -0.29 L 76.851 -3.62 L 75.937 -0.263 L 76.902 0 Z M 87.772 35.921 L 86.815 36.211 L 87.772 35.921 Z M 68.246 27.58 L 67.883 28.512 L 68.246 27.58 Z M 69.573 26.911 L 68.608 26.648 L 69.573 26.911 Z M 58.076 23.626 L 58.439 22.694 L 58.076 23.626 Z M 38.22 39.962 L 38.592 39.034 L 38.22 39.962 Z M 21.203 32.36 L 20.611 33.166 L 21.203 32.36 Z M 12.564 26.943 L 11.934 26.166 L 12.564 26.943 Z M 13.786 26.913 L 13.194 27.719 L 13.786 26.913 Z M 0.63 37.917 L 13.194 27.719 L 11.934 26.166 L -0.63 36.364 L 0.63 37.917 Z M 13.194 27.719 L 20.611 33.166 L 21.795 31.554 L 14.378 26.107 L 13.194 27.719 Z M 25.893 36.101 L 37.848 40.89 L 38.592 39.034 L 26.637 34.245 L 25.893 36.101 Z M 39.928 40.522 L 57.714 24.558 L 56.378 23.07 L 38.592 39.034 L 39.928 40.522 Z M 57.714 24.558 L 67.883 28.512 L 68.608 26.648 L 58.439 22.694 L 57.714 24.558 Z M 70.538 27.173 L 77.867 0.263 L 75.937 -0.263 L 68.608 26.648 L 70.538 27.173 Z M 75.945 0.29 L 86.815 36.211 L 88.729 35.632 L 77.859 -0.29 L 75.945 0.29 Z M 88.729 37.632 L 106 37.632 L 106 35.632 L 88.729 35.632 L 88.729 37.632 Z M 86.815 36.211 C 87.07 37.055 87.848 37.632 88.729 37.632 L 88.729 35.632 L 88.729 35.632 L 86.815 36.211 Z M 67.883 28.512 C 68.99 28.942 70.226 28.319 70.538 27.173 L 68.608 26.648 L 68.608 26.648 L 67.883 28.512 Z M 57.714 24.558 L 57.714 24.558 L 58.439 22.694 C 57.736 22.421 56.939 22.566 56.378 23.07 L 57.714 24.558 Z M 37.848 40.89 C 38.555 41.173 39.361 41.03 39.928 40.522 L 38.592 39.034 L 38.592 39.034 L 37.848 40.89 Z M 20.611 33.166 C 22.241 34.363 24.016 35.349 25.893 36.101 L 26.637 34.245 C 24.916 33.555 23.289 32.651 21.795 31.554 L 20.611 33.166 Z M 13.194 27.719 L 13.194 27.719 L 14.378 26.107 C 13.644 25.569 12.64 25.593 11.934 26.166 L 13.194 27.719 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card12;
