import { RightDownLine } from './RightDownLine.jsx';
import { UserStory } from './UserStory.jsx';

// figma node: 9181:39484 Card
export function Card41(_p = {}) {
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
        flexDirection: "row",
        gap: -39,
        alignItems: "flex-end",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 162,
          display: "flex",
          flexDirection: "column",
          gap: 16,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
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
              width: 32,
              height: 32,
              borderRadius: 50,
              background: "linear-gradient(180deg, rgb(253,249,236) 0.00%, rgb(255,255,255) 91.47%)",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "7px 7px 7px 7px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <div style={{
                  position: "relative",
                  width: 16,
                  flexShrink: 0,
                  alignSelf: "stretch",
                  height: "auto",
                  color: "var(--yellow-600)",
                }}>{props.icon1 ?? <UserStory />}</div>
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
            }}>{props.text1 ?? "Today Join"}</span>
          </div>
          <div style={{
            position: "relative",
            width: 106,
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
            }}>{props.text2 ?? "324"}</span>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 4,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                width: 47,
                borderRadius: 4,
                backgroundColor: "var(--badge-red-shade)",
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
                    }}>{props.icon2 ?? <RightDownLine style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
                  <span style={{
                    position: "relative",
                    fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 12,
                    whiteSpace: "nowrap",
                    lineHeight: "16px",
                    color: "var(--red-600)",
                    flexShrink: 0,
                  }}>{props.text3 ?? "02%"}</span>
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
        </div>
        <div style={{
          position: "relative",
          width: 122,
          height: 65,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <div style={{
            position: "absolute",
            left: 54,
            top: 6,
            width: 20,
            height: 59,
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 20,
              height: 59,
              borderRadius: 5,
              background: "linear-gradient(180deg, rgb(250,234,174) -0.00%, rgba(250,234,174,0) 82.97%)",
            }} />
            <div style={{
              position: "absolute",
              left: 5,
              top: 6,
              width: 10,
              height: 53,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: "var(--yellow-600)",
              }} />
              <div style={{
                position: "absolute",
                left: 4,
                top: 10,
                width: 2,
                height: 43,
              }} />
            </div>
          </div>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 122,
            height: 65,
            overflow: "hidden",
          }}>
            <svg width={122} height={65} viewBox="0 0 122 65" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 122,
              height: 65,
            }}>
              <path d={"M 25.345 4.962 C 20.19 7.344 6.3 2.646 0 0 L 0 65 L 122 65 L 122 33.244 C 114.268 53.588 107.824 49.122 105.246 44.656 C 102.669 40.191 97.944 35.229 90.211 43.168 C 82.479 51.107 72.599 37.71 69.162 24.313 C 65.725 10.916 57.134 18.359 52.838 22.824 C 48.542 27.29 45.535 32.748 39.951 19.351 C 34.366 5.954 31.789 1.985 25.345 4.962 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <svg width={122} height={48.446} viewBox="0 0 122 48.446" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 122,
              height: 48.446,
              color: "var(--yellow-600)",
            }}>
              <path d={"M 25.345 4.962 L 25.135 4.508 L 25.345 4.962 Z M -0.194 0.461 C 2.974 1.792 8.047 3.637 12.983 4.852 C 15.45 5.459 17.897 5.913 20.062 6.062 C 22.211 6.211 24.149 6.065 25.555 5.416 L 25.135 4.508 C 23.963 5.049 22.232 5.21 20.131 5.065 C 18.044 4.921 15.659 4.481 13.222 3.881 C 8.349 2.681 3.326 0.855 0.194 -0.461 L -0.194 0.461 Z M 25.555 5.416 C 27.122 4.691 28.391 4.42 29.495 4.566 C 30.586 4.71 31.587 5.27 32.605 6.358 C 33.631 7.454 34.653 9.064 35.773 11.26 C 36.892 13.451 38.094 16.196 39.489 19.544 L 40.412 19.159 C 39.015 15.808 37.801 13.033 36.664 10.805 C 35.529 8.581 34.457 6.873 33.335 5.675 C 32.205 4.467 31.005 3.756 29.626 3.575 C 28.259 3.394 26.79 3.744 25.135 4.508 L 25.555 5.416 Z M 39.489 19.544 C 40.892 22.908 42.151 25.138 43.339 26.502 C 44.535 27.875 45.72 28.435 46.94 28.282 C 48.105 28.137 49.16 27.35 50.143 26.411 C 51.119 25.478 52.163 24.247 53.198 23.171 L 52.478 22.478 C 51.365 23.635 50.422 24.761 49.452 25.688 C 48.488 26.61 47.637 27.188 46.816 27.29 C 46.048 27.386 45.166 27.077 44.093 25.845 C 43.012 24.604 41.802 22.493 40.412 19.159 L 39.489 19.544 Z M 53.198 23.171 C 54.264 22.063 55.587 20.781 57.021 19.687 C 58.461 18.588 59.98 17.705 61.438 17.357 C 62.875 17.013 64.236 17.189 65.448 18.187 C 66.686 19.206 67.83 21.134 68.678 24.437 L 69.646 24.189 C 68.775 20.794 67.557 18.628 66.083 17.415 C 64.583 16.179 62.884 15.983 61.206 16.384 C 59.55 16.78 57.901 17.757 56.414 18.892 C 54.922 20.03 53.559 21.353 52.478 22.478 L 53.198 23.171 Z M 68.678 24.437 C 70.41 31.192 73.772 37.976 77.715 42.087 C 79.685 44.142 81.844 45.574 84.06 45.948 C 86.312 46.328 88.539 45.602 90.569 43.517 L 89.853 42.819 C 88.018 44.703 86.11 45.28 84.227 44.962 C 82.309 44.638 80.333 43.373 78.437 41.395 C 74.647 37.444 71.35 30.831 69.646 24.189 L 68.678 24.437 Z M 90.569 43.517 C 94.37 39.615 97.295 39.014 99.507 39.736 C 101.788 40.48 103.534 42.689 104.813 44.906 L 105.68 44.407 C 104.382 42.158 102.476 39.653 99.817 38.785 C 97.089 37.895 93.785 38.782 89.853 42.819 L 90.569 43.517 Z M 104.813 44.906 C 105.48 46.062 106.413 47.247 107.586 48.033 C 108.772 48.829 110.214 49.218 111.834 48.733 C 113.43 48.255 115.122 46.95 116.886 44.533 C 118.654 42.111 120.526 38.53 122.467 33.422 L 121.533 33.067 C 119.608 38.13 117.774 41.62 116.079 43.943 C 114.38 46.27 112.85 47.384 111.547 47.775 C 110.266 48.158 109.131 47.865 108.143 47.203 C 107.141 46.531 106.301 45.484 105.68 44.407 L 104.813 44.906 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card41;
