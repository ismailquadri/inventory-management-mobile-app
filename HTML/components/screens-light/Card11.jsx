import { MoneyPaperTotal2 } from './MoneyPaperTotal2.jsx';
import { RightDownLine } from './RightDownLine.jsx';
import { RightUpBox } from './RightUpBox.jsx';

// figma node: 9181:32819 Card
export function Card11(_p = {}) {
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
              backgroundColor: "var(--blue-50)",
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
                  color: "var(--blue-600)",
                }}>{props.icon1 ?? <MoneyPaperTotal2 style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
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
            }}>{props.text1 ?? "New Payments"}</span>
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
            }}>{props.text2 ?? "$2,335"}</span>
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
                }}>{props.text4 ?? "02%"}</span>
              </div>
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 97,
            height: 58,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={97} height={58} viewBox="0 0 97 58" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 97,
              height: 58,
            }}>
              <path d={"M 13.227 25.02 L 0 36.392 L 0 58 L 97 58 L 97 35.255 L 79.364 35.255 L 73.065 26.157 L 62.987 26.157 L 57.318 11.373 L 48.5 27.294 L 38.422 0 L 23.935 35.255 L 13.227 25.02 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <svg width={97} height={36.392} viewBox="0 0 97 36.392" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 97,
              height: 36.392,
              color: "var(--blue-600)",
            }}>
              <path d={"M 23.935 35.255 L 23.244 35.978 L 24.303 36.99 L 24.86 35.635 L 23.935 35.255 Z M 38.422 0 L 39.36 -0.346 L 38.472 -2.752 L 37.497 -0.38 L 38.422 0 Z M 48.5 27.294 L 47.562 27.64 L 48.318 29.687 L 49.375 27.779 L 48.5 27.294 Z M 57.318 11.373 L 58.252 11.015 L 57.483 9.01 L 56.443 10.888 L 57.318 11.373 Z M 78.767 34.393 L 77.945 34.963 L 78.767 34.393 Z M 73.661 27.018 L 74.484 26.449 L 73.661 27.018 Z M 62.495 24.873 L 61.561 25.231 L 62.495 24.873 Z M 13.883 25.646 L 13.192 26.369 L 13.883 25.646 Z M 0.652 37.15 L 13.192 26.369 L 11.888 24.852 L -0.652 35.634 L 0.652 37.15 Z M 13.192 26.369 L 23.244 35.978 L 24.626 34.532 L 14.574 24.923 L 13.192 26.369 Z M 24.86 35.635 L 39.347 0.38 L 37.497 -0.38 L 23.01 34.875 L 24.86 35.635 Z M 37.484 0.346 L 47.562 27.64 L 49.438 26.948 L 39.36 -0.346 L 37.484 0.346 Z M 49.375 27.779 L 58.193 11.857 L 56.443 10.888 L 47.625 26.81 L 49.375 27.779 Z M 56.384 11.731 L 61.561 25.231 L 63.428 24.515 L 58.252 11.015 L 56.384 11.731 Z M 64.362 27.157 L 72.017 27.157 L 72.017 25.157 L 64.362 25.157 L 64.362 27.157 Z M 72.839 27.588 L 77.945 34.963 L 79.589 33.824 L 74.484 26.449 L 72.839 27.588 Z M 80.412 36.255 L 97 36.255 L 97 34.255 L 80.412 34.255 L 80.412 36.255 Z M 77.945 34.963 C 78.505 35.772 79.427 36.255 80.412 36.255 L 80.412 34.255 C 80.083 34.255 79.776 34.094 79.589 33.824 L 77.945 34.963 Z M 72.017 27.157 C 72.345 27.157 72.652 27.318 72.839 27.588 L 74.484 26.449 C 73.923 25.64 73.001 25.157 72.017 25.157 L 72.017 27.157 Z M 61.561 25.231 C 62.006 26.391 63.12 27.157 64.362 27.157 L 64.362 25.157 C 63.948 25.157 63.577 24.902 63.428 24.515 L 61.561 25.231 Z M 13.192 26.369 L 13.192 26.369 L 14.574 24.923 C 13.83 24.212 12.668 24.182 11.888 24.852 L 13.192 26.369 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card11;
