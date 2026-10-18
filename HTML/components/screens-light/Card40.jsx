import { RightUpLine } from './RightUpLine.jsx';
import { User22 } from './User22.jsx';

// figma node: 9181:39483 Card
export function Card40(_p = {}) {
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
              background: "linear-gradient(180deg, rgb(253,245,246) 0.00%, rgb(255,255,255) 91.47%)",
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
                  color: "var(--red-600)",
                }}>{props.icon1 ?? <User22 />}</div>
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
            }}>{props.text1 ?? "New Customers"}</span>
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
            }}>{props.text2 ?? "1,132"}</span>
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
          height: 72,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <div style={{
            position: "absolute",
            left: 39,
            top: 11,
            width: 20,
            height: 61,
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 20,
              height: 61,
              borderRadius: 5,
              background: "linear-gradient(180deg, rgb(253,219,220) -0.00%, rgb(255,255,255) 90.82%)",
            }} />
            <div style={{
              position: "absolute",
              left: 5,
              top: 6,
              width: 10,
              height: 55,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: "var(--red-600)",
              }} />
              <div style={{
                position: "absolute",
                left: 4,
                top: 10,
                width: 2,
                height: 45,
              }} />
            </div>
          </div>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 122,
            height: 72,
            overflow: "hidden",
          }}>
            <svg width={122} height={72} viewBox="0 0 122 72" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 122,
              height: 72,
            }}>
              <path d={"M 12.933 5.496 C 6.725 -10.741 1.724 12.837 0 26.656 L 0 72 L 122 72 L 122 57.749 C 109.067 69.841 93.117 29.679 85.788 37.021 C 67.251 58.613 62.509 46.953 59.491 43.066 C 56.473 39.18 52.163 13.269 43.541 24.065 C 34.919 34.861 35.35 21.042 29.746 25.793 C 18.106 36.157 20.693 25.793 12.933 5.496 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <svg width={122} height={60.035} viewBox="0 0 122 60.035" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 122,
              height: 60.035,
              color: "var(--red-600)",
            }}>
              <path d={"M 12.933 5.496 L 13.4 5.317 L 12.933 5.496 Z M 29.746 25.793 L 29.422 25.411 L 29.413 25.419 L 29.746 25.793 Z M 85.788 37.021 L 85.434 36.667 L 85.421 36.681 L 85.409 36.695 L 85.788 37.021 Z M 0.496 26.718 C 1.358 19.813 3.033 10.519 5.249 4.991 C 5.802 3.611 6.378 2.494 6.967 1.713 C 7.565 0.918 8.112 0.556 8.588 0.506 C 9.034 0.46 9.597 0.675 10.281 1.496 C 10.964 2.317 11.698 3.665 12.466 5.675 L 13.4 5.317 C 12.616 3.268 11.836 1.801 11.05 0.857 C 10.265 -0.086 9.406 -0.585 8.484 -0.488 C 7.591 -0.395 6.823 0.242 6.168 1.111 C 5.504 1.993 4.889 3.203 4.321 4.619 C 2.054 10.276 0.367 19.681 -0.496 26.595 L 0.496 26.718 Z M 12.466 5.675 C 14.397 10.727 15.686 15.163 16.715 18.823 C 17.739 22.461 18.52 25.39 19.431 27.353 C 19.888 28.338 20.401 29.135 21.038 29.662 C 21.696 30.207 22.462 30.444 23.355 30.345 C 24.221 30.248 25.18 29.838 26.267 29.151 C 27.358 28.462 28.614 27.47 30.078 26.166 L 29.413 25.419 C 27.967 26.706 26.758 27.658 25.732 28.306 C 24.702 28.957 23.893 29.279 23.244 29.351 C 22.621 29.42 22.124 29.263 21.676 28.892 C 21.207 28.503 20.77 27.863 20.338 26.932 C 19.47 25.062 18.716 22.241 17.678 18.552 C 16.646 14.884 15.348 10.413 13.4 5.317 L 12.466 5.675 Z M 30.069 26.174 C 30.729 25.615 31.256 25.366 31.683 25.289 C 32.097 25.214 32.462 25.293 32.822 25.48 C 33.196 25.675 33.559 25.983 33.952 26.364 C 34.321 26.722 34.755 27.186 35.176 27.567 C 36.051 28.359 37.147 29.063 38.651 28.708 C 40.085 28.37 41.765 27.09 43.931 24.377 L 43.15 23.753 C 41.006 26.438 39.506 27.479 38.421 27.735 C 37.405 27.975 36.642 27.545 35.847 26.825 C 35.433 26.451 35.079 26.064 34.648 25.646 C 34.241 25.251 33.792 24.858 33.284 24.593 C 32.762 24.322 32.173 24.185 31.505 24.305 C 30.848 24.424 30.164 24.783 29.422 25.411 L 30.069 26.174 Z M 43.931 24.377 C 44.979 23.066 45.915 22.371 46.736 22.097 C 47.533 21.831 48.271 21.943 48.994 22.365 C 49.735 22.798 50.461 23.56 51.168 24.591 C 51.872 25.617 52.535 26.876 53.162 28.265 C 54.416 31.046 55.499 34.286 56.465 37.102 C 56.947 38.504 57.4 39.804 57.829 40.877 C 58.252 41.936 58.671 42.826 59.096 43.373 L 59.886 42.76 C 59.557 42.335 59.181 41.566 58.757 40.506 C 58.339 39.46 57.893 38.182 57.411 36.777 C 56.451 33.979 55.351 30.687 54.073 27.854 C 53.434 26.436 52.743 25.118 51.993 24.025 C 51.247 22.937 50.42 22.04 49.498 21.501 C 48.557 20.952 47.521 20.78 46.419 21.148 C 45.342 21.508 44.258 22.366 43.15 23.753 L 43.931 24.377 Z M 59.096 43.373 C 59.463 43.846 59.852 44.431 60.318 45.095 C 60.776 45.749 61.294 46.457 61.893 47.13 C 63.09 48.475 64.637 49.711 66.731 50.09 C 68.828 50.469 71.377 49.972 74.543 48.048 C 77.704 46.127 81.516 42.764 86.167 37.346 L 85.409 36.695 C 80.791 42.073 77.059 45.349 74.023 47.194 C 70.992 49.035 68.692 49.429 66.909 49.106 C 65.122 48.783 63.76 47.725 62.64 46.465 C 62.08 45.836 61.588 45.165 61.137 44.521 C 60.693 43.888 60.273 43.258 59.886 42.76 L 59.096 43.373 Z M 86.142 37.374 C 86.541 36.974 86.949 36.754 87.365 36.665 C 87.784 36.575 88.247 36.61 88.765 36.776 C 89.819 37.113 91.027 37.968 92.378 39.228 C 95.079 41.747 98.126 45.655 101.413 49.492 C 104.669 53.293 108.155 57.015 111.669 59.014 C 113.434 60.017 115.241 60.607 117.053 60.528 C 118.877 60.449 120.651 59.695 122.341 58.114 L 121.659 57.384 C 120.116 58.826 118.562 59.462 117.01 59.529 C 115.446 59.597 113.827 59.091 112.164 58.144 C 108.821 56.243 105.436 52.651 102.172 48.841 C 98.938 45.066 95.816 41.066 93.06 38.497 C 91.683 37.213 90.342 36.23 89.07 35.823 C 88.425 35.617 87.782 35.553 87.155 35.688 C 86.526 35.822 85.951 36.15 85.434 36.667 L 86.142 37.374 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card40;
