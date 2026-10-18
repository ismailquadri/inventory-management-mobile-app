import { AddUser } from './AddUser.jsx';
import { RightDownLine } from './RightDownLine.jsx';

// figma node: 9181:39482 Card
export function Card39(_p = {}) {
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
              background: "linear-gradient(180deg, rgb(239,245,255) 0.00%, rgb(255,255,255) 91.47%)",
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
                  color: "var(--blue-600)",
                }}>{props.icon1 ?? <AddUser />}</div>
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
            }}>{props.text1 ?? "Active Customers"}</span>
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
            }}>{props.text2 ?? "456"}</span>
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
                  }}>{props.text3 ?? "05%"}</span>
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
          height: 75,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <div style={{
            position: "absolute",
            left: 86,
            top: 0,
            width: 20,
            height: 75,
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 20,
              height: 75,
              borderRadius: 5,
              background: "linear-gradient(180deg, rgb(193,215,250) 0.00%, rgba(193,215,250,0) 93.61%)",
            }} />
            <div style={{
              position: "absolute",
              left: 5,
              top: 6,
              width: 10,
              height: 69,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: "var(--blue-600)",
              }} />
              <div style={{
                position: "absolute",
                left: 4,
                top: 10,
                width: 2,
                height: 59,
              }} />
            </div>
          </div>
          <div style={{
            position: "absolute",
            left: 0,
            top: 4,
            width: 122,
            height: 71,
            overflow: "hidden",
          }}>
            <svg width={122} height={71} viewBox="0 0 122 71" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 122,
              height: 71,
            }}>
              <path d={"M 28.021 50.65 C 20.779 34.37 6.323 31.955 0 32.782 L 0 71 L 122 71 L 122 3.001 C 81.477 -14.867 90.099 52.635 72.424 58.591 C 54.749 64.548 53.025 48.665 46.989 43.205 C 40.954 37.745 32.763 60.577 28.021 50.65 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <svg width={122} height={59.907} viewBox="0 0 122 59.907" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 122,
              height: 59.907,
              color: "var(--blue-600)",
            }}>
              <path d={"M 28.021 50.65 L 27.564 50.853 L 27.57 50.866 L 28.021 50.65 Z M 0.065 33.278 C 6.225 32.472 20.433 34.823 27.564 50.853 L 28.478 50.447 C 21.124 33.917 6.421 31.437 -0.065 32.286 L 0.065 33.278 Z M 27.57 50.866 C 28.185 52.153 28.896 52.998 29.731 53.406 C 30.588 53.824 31.479 53.735 32.335 53.366 C 33.177 53.003 34.023 52.354 34.855 51.584 C 35.691 50.81 36.543 49.883 37.393 48.936 C 39.112 47.02 40.804 45.044 42.439 43.867 C 43.251 43.281 44 42.932 44.687 42.862 C 45.346 42.795 45.997 42.981 46.654 43.576 L 47.325 42.834 C 46.473 42.064 45.547 41.769 44.586 41.867 C 43.65 41.962 42.732 42.423 41.854 43.055 C 40.108 44.313 38.324 46.401 36.648 48.269 C 35.8 49.214 34.975 50.11 34.176 50.85 C 33.372 51.594 32.625 52.152 31.939 52.448 C 31.265 52.738 30.691 52.761 30.169 52.507 C 29.625 52.241 29.043 51.628 28.472 50.435 L 27.57 50.866 Z M 46.654 43.576 C 48.097 44.881 49.3 46.829 50.594 49.005 C 51.873 51.156 53.231 53.511 54.964 55.507 C 56.706 57.512 58.848 59.181 61.712 59.951 C 64.574 60.72 68.1 60.576 72.584 59.065 L 72.264 58.118 C 67.911 59.585 64.593 59.689 61.972 58.985 C 59.353 58.281 57.373 56.755 55.719 54.851 C 54.058 52.938 52.748 50.671 51.454 48.494 C 50.175 46.344 48.899 44.258 47.325 42.834 L 46.654 43.576 Z M 72.584 59.065 C 74.94 58.271 76.818 56.464 78.387 54.031 C 79.955 51.598 81.242 48.496 82.402 45.039 C 83.563 41.579 84.606 37.733 85.675 33.805 C 86.746 29.871 87.844 25.851 89.118 22.02 C 91.675 14.335 94.91 7.519 99.945 3.71 C 104.923 -0.056 111.776 -0.96 121.798 3.459 L 122.202 2.544 C 111.962 -1.971 104.697 -1.139 99.342 2.913 C 94.044 6.921 90.732 14.002 88.17 21.704 C 86.885 25.566 85.78 29.612 84.71 33.542 C 83.639 37.478 82.604 41.294 81.454 44.721 C 80.304 48.15 79.048 51.16 77.547 53.489 C 76.045 55.817 74.326 57.423 72.264 58.118 L 72.584 59.065 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card39;
