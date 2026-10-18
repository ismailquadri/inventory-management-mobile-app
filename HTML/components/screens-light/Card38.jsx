import { RightUpLine } from './RightUpLine.jsx';
import { User3 } from './User3.jsx';

// figma node: 9181:39481 Card
export function Card38(_p = {}) {
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
        gap: -28,
        alignItems: "flex-end",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 151,
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
              background: "linear-gradient(180deg, rgb(241,253,249) 0.00%, rgb(255,255,255) 91.47%)",
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
                  color: "var(--primary-600)",
                }}>{props.icon1 ?? <User3 />}</div>
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
            }}>{props.text1 ?? "Total Customers"}</span>
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
            }}>{props.text2 ?? "2,425"}</span>
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
                    }}>{props.icon2 ?? <RightUpLine style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
                  <span style={{
                    position: "relative",
                    fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 12,
                    whiteSpace: "nowrap",
                    lineHeight: "16px",
                    color: "var(--success-600)",
                    flexShrink: 0,
                  }}>{props.text3 ?? "16%"}</span>
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
          height: 90,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <div style={{
            position: "absolute",
            left: 69.999,
            top: 31,
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
              background: "linear-gradient(180deg, rgb(208,245,227) -0.00%, rgba(208,245,227,0) 93.61%)",
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
                backgroundColor: "var(--success-600)",
              }} />
              <div style={{
                position: "absolute",
                left: 3.898,
                top: 10,
                width: 1.718,
                height: 43,
              }} />
            </div>
          </div>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 122,
            height: 90,
            overflow: "hidden",
          }}>
            <svg width={122} height={90} viewBox="0 0 122 90" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 122,
              height: 90,
            }}>
              <path d={"M 11.169 65 C 9.451 69 3.007 74.001 0 76.001 L 0 90 L 122 90 L 122 0 C 116.415 1 103.958 13 100.951 24 C 98.821 31.792 96.758 35.193 92.437 39.341 C 91.307 40.426 89.759 40.93 88.194 40.994 C 78.41 41.397 74.43 47.012 70.451 52 C 65.983 57.6 59.282 44.5 56.275 41.5 C 48.113 35.5 46.458 44.135 42.099 43.5 C 35.225 42.499 35.225 46 31.359 53 C 27.493 60 23.627 57.5 20.62 58 C 17.613 58.5 13.317 60 11.169 65 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <svg width={122} height={76.001} viewBox="0 0 122 76.001" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 122,
              height: 76.001,
              color: "var(--success-600)",
            }}>
              <path d={"M 42.099 43.5 L 42.171 43.005 L 42.099 43.5 Z M 56.275 41.5 L 56.628 41.146 L 56.601 41.12 L 56.571 41.097 L 56.275 41.5 Z M 70.451 52 L 70.06 51.688 L 70.451 52 Z M 100.951 24 L 100.468 23.868 L 100.951 24 Z M 88.194 40.994 L 88.215 41.494 L 88.194 40.994 Z M 92.437 39.341 L 92.09 38.981 L 92.437 39.341 Z M 0.277 76.417 C 1.798 75.405 4.181 73.64 6.404 71.621 C 8.611 69.615 10.724 67.304 11.628 65.198 L 10.71 64.803 C 9.896 66.697 7.927 68.886 5.732 70.88 C 3.551 72.861 1.209 74.596 -0.277 75.584 L 0.277 76.417 Z M 11.628 65.198 C 13.679 60.424 17.771 58.981 20.702 58.494 L 20.538 57.507 C 17.454 58.02 12.955 59.577 10.71 64.803 L 11.628 65.198 Z M 20.702 58.494 C 21.384 58.38 22.125 58.436 22.99 58.492 C 23.834 58.546 24.774 58.598 25.752 58.431 C 27.764 58.086 29.811 56.838 31.797 53.242 L 30.921 52.759 C 29.042 56.163 27.222 57.165 25.583 57.445 C 24.735 57.59 23.903 57.549 23.055 57.494 C 22.229 57.44 21.359 57.371 20.538 57.507 L 20.702 58.494 Z M 31.797 53.242 C 32.77 51.481 33.503 49.932 34.149 48.647 C 34.801 47.348 35.356 46.332 35.987 45.568 C 36.605 44.82 37.289 44.323 38.203 44.058 C 39.134 43.789 40.343 43.75 42.027 43.995 L 42.171 43.005 C 40.418 42.75 39.049 42.773 37.926 43.098 C 36.786 43.427 35.94 44.055 35.216 44.932 C 34.504 45.793 33.905 46.903 33.255 48.198 C 32.598 49.507 31.882 51.02 30.921 52.759 L 31.797 53.242 Z M 42.027 43.995 C 43.303 44.181 44.355 43.676 45.291 43.021 C 45.758 42.695 46.216 42.316 46.663 41.952 C 47.117 41.582 47.566 41.221 48.039 40.903 C 48.98 40.271 49.985 39.831 51.213 39.87 C 52.449 39.91 53.987 40.439 55.978 41.903 L 56.571 41.097 C 54.481 39.561 52.751 38.919 51.245 38.871 C 49.732 38.822 48.52 39.375 47.482 40.073 C 46.966 40.42 46.484 40.807 46.032 41.176 C 45.573 41.55 45.148 41.901 44.718 42.202 C 43.863 42.8 43.074 43.137 42.171 43.005 L 42.027 43.995 Z M 55.922 41.854 C 56.636 42.567 57.589 43.903 58.724 45.485 C 59.843 47.045 61.116 48.809 62.44 50.306 C 63.753 51.79 65.172 53.079 66.599 53.612 C 67.325 53.884 68.075 53.968 68.816 53.761 C 69.557 53.555 70.234 53.073 70.842 52.312 L 70.06 51.688 C 69.55 52.327 69.041 52.661 68.548 52.798 C 68.056 52.935 67.526 52.891 66.949 52.676 C 65.768 52.234 64.487 51.11 63.189 49.644 C 61.904 48.191 60.659 46.468 59.536 44.902 C 58.429 43.359 57.417 41.933 56.628 41.146 L 55.922 41.854 Z M 70.842 52.312 C 72.846 49.799 74.794 47.207 77.449 45.175 C 80.085 43.158 83.427 41.691 88.215 41.494 L 88.174 40.495 C 83.177 40.7 79.637 42.242 76.842 44.381 C 74.066 46.504 72.035 49.213 70.06 51.688 L 70.842 52.312 Z M 92.783 39.702 C 94.966 37.606 96.598 35.681 97.951 33.283 C 99.301 30.889 100.363 28.047 101.433 24.132 L 100.468 23.868 C 99.409 27.745 98.374 30.499 97.08 32.791 C 95.789 35.079 94.228 36.928 92.09 38.981 L 92.783 39.702 Z M 101.433 24.132 C 102.907 18.74 106.716 13.059 110.875 8.591 C 112.95 6.361 115.101 4.446 117.07 3.031 C 119.053 1.606 120.804 0.722 122.088 0.492 L 121.912 -0.492 C 120.403 -0.222 118.504 0.769 116.486 2.219 C 114.455 3.679 112.256 5.639 110.143 7.909 C 105.925 12.441 102.001 18.26 100.468 23.868 L 101.433 24.132 Z M 88.215 41.494 C 89.866 41.426 91.543 40.893 92.783 39.702 L 92.09 38.981 C 91.071 39.959 89.652 40.434 88.174 40.495 L 88.215 41.494 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card38;
