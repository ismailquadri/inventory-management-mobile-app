import { ArrowDown2 } from './ArrowDown2.jsx';
import { Avatar } from './Avatar.jsx';
import { Button } from './Button.jsx';
import { Checkbox10 } from './Checkbox10.jsx';
import { CloseRemove } from './CloseRemove.jsx';
import { Dashboard1 } from './Dashboard1.jsx';
import { Dropdown2 } from './Dropdown2.jsx';
import { Header } from './Header.jsx';
import { InfoMenu2 } from './InfoMenu2.jsx';
import { Logo2 } from './Logo2.jsx';
import { NativeHomeIndicator } from './NativeHomeIndicator.jsx';
import { Pagination } from './Pagination.jsx';
import { Plus4 } from './Plus4.jsx';
import { SearchInput } from './SearchInput.jsx';
import { StatusBar } from './StatusBar.jsx';
import { TabMenu } from './TabMenu.jsx';
import { TableComponent } from './TableComponent.jsx';
import { TopBar } from './TopBar.jsx';
import { VerticalBarChart1 } from './VerticalBarChart1.jsx';

// figma node: 9228:109691 Report
export function Report(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 4130,
      height: 2746,
      borderRadius: 2,
      backgroundColor: "var(--grayscale-800)",
      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.1)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 100,
        top: 100,
        width: 1440,
        height: 1024,
        overflow: "hidden",
        borderRadius: 16,
        backgroundColor: "var(--background-bg-primary)",
      }}>
        <div style={{
          position: "absolute",
          left: 12,
          top: 12,
          width: 248,
          height: 1000,
          maxWidth: 272,
          maxHeight: null,
          overflow: "hidden",
          borderRadius: 12,
          backgroundColor: "var(--grayscale-800)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 51,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "row",
                gap: 12,
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
              }}>
                <Logo2 style={{
                    position: "relative",
                    width: 36,
                    height: 36,
                    flexShrink: 0,
                    color: "var(--general-white)",
                  }} />
                <span style={{
                  position: "relative",
                  fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 700,
                  fontSize: 24,
                  whiteSpace: "nowrap",
                  lineHeight: "32px",
                  color: "var(--general-white)",
                  flexShrink: 0,
                }}>Interoly</span>
              </div>
              <div style={{
                position: "relative",
                transform: "matrix(1,0,0,-1,0,0)",
                width: 24,
                height: 24,
                flexShrink: 0,
              }}>
                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" style={{
                  position: "absolute",
                  left: 4,
                  top: 4,
                  width: 16,
                  height: 16,
                  color: "rgb(145,153,146)",
                }}>
                  <path d={"M 16.75 13.44 L 16.75 2.56 L 15.25 2.56 L 15.25 13.44 L 16.75 13.44 Z M 16.75 2.56 C 16.75 0.732 15.268 -0.75 13.44 -0.75 L 13.44 0.75 C 14.44 0.75 15.25 1.56 15.25 2.56 L 16.75 2.56 Z M 13.44 -0.75 L 2.56 -0.75 L 2.56 0.75 L 13.44 0.75 L 13.44 -0.75 Z M 2.56 -0.75 C 0.732 -0.75 -0.75 0.732 -0.75 2.56 L 0.75 2.56 C 0.75 1.56 1.56 0.75 2.56 0.75 L 2.56 -0.75 Z M -0.75 2.56 L -0.75 13.44 L 0.75 13.44 L 0.75 2.56 L -0.75 2.56 Z M -0.75 13.44 C -0.75 15.268 0.732 16.75 2.56 16.75 L 2.56 15.25 C 1.56 15.25 0.75 14.44 0.75 13.44 L -0.75 13.44 Z M 2.56 16.75 L 13.44 16.75 L 13.44 15.25 L 2.56 15.25 L 2.56 16.75 Z M 13.44 16.75 C 15.268 16.75 16.75 15.268 16.75 13.44 L 15.25 13.44 C 15.25 14.44 14.44 15.25 13.44 15.25 L 13.44 16.75 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <svg width={1.500} height={8} viewBox="-0.750 0 1.500 8" fill="none" style={{
                  position: "absolute",
                  left: 8,
                  top: 8,
                  width: 1.5,
                  height: 8,
                  color: "rgb(145,153,146)",
                }}>
                  <path d={"M 0.75 0 C 0.75 -0.414 0.414 -0.75 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 L 0.75 0 Z M -0.75 8 C -0.75 8.414 -0.414 8.75 0 8.75 C 0.414 8.75 0.75 8.414 0.75 8 L -0.75 8 Z M -0.75 0 L -0.75 8 L 0.75 8 L 0.75 0 L -0.75 0 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <svg width={3} height={6} viewBox="0 0 3 6" fill="none" style={{
                  position: "absolute",
                  left: 12,
                  top: 9,
                  width: 3,
                  height: 6,
                  color: "rgb(145,153,146)",
                }}>
                  <path d={"M 3.53 0.53 C 3.823 0.237 3.823 -0.237 3.53 -0.53 C 3.237 -0.823 2.763 -0.823 2.47 -0.53 L 3.53 0.53 Z M 0 3 L -0.53 2.47 C -0.823 2.763 -0.823 3.237 -0.53 3.53 L 0 3 Z M 2.47 6.53 C 2.763 6.823 3.237 6.823 3.53 6.53 C 3.823 6.237 3.823 5.763 3.53 5.47 L 2.47 6.53 Z M 2.47 -0.53 L -0.53 2.47 L 0.53 3.53 L 3.53 0.53 L 2.47 -0.53 Z M -0.53 3.53 L 2.47 6.53 L 3.53 5.47 L 0.53 2.47 L -0.53 3.53 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 20,
              top: 67,
              width: 208,
              height: 1,
              outline: "1px dashed var(--grayscale-700)",
              outlineOffset: "-1px",
            }} />
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 20,
            padding: "20px 20px 16px 20px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
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
              <span style={{
                position: "relative",
                fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 14,
                lineHeight: "20px",
                letterSpacing: "0.060em",
                color: "var(--grayscale-500)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Main</span>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: 4,
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <div style={{
                  position: "relative",
                  borderRadius: 8,
                  backgroundColor: "var(--grayscale-700)",
                  display: "flex",
                  flexDirection: "row",
                  gap: "calc(var(--radius-8) * 1px)",
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
                      height: 20,
                      flexShrink: 0,
                    }}>
                    <Dashboard1 style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />
                  </div>
                  <div style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "row",
                    gap: 6,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexGrow: 1,
                  }}>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 500,
                      fontSize: 14,
                      lineHeight: "20px",
                      letterSpacing: "0.060em",
                      color: "var(--grayscale-600)",
                      flexGrow: 1,
                    }}>Dashboard</span>
                    <div style={{
                        position: "relative",
                        width: 20,
                        height: 20,
                        flexShrink: 0,
                      }}>
                      <Plus4 style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  borderRadius: 8,
                  display: "flex",
                  flexDirection: "row",
                  gap: "calc(var(--radius-8) * 1px)",
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
                    height: 20,
                    overflow: "hidden",
                    flexShrink: 0,
                  }}>
                    <svg width={14.400} height={14.377} viewBox="0 0 14.400 14.377" fill="none" style={{
                      position: "absolute",
                      left: 3.079,
                      top: 2.812,
                      width: 14.4,
                      height: 14.377,
                      color: "var(--grayscale-500)",
                    }}>
                      <path d={"M 1.048 1.402 L 1.717 1.669 L 1.717 1.669 L 1.048 1.402 Z M 0.371 3.095 L -0.297 2.827 L -0.297 2.828 L 0.371 3.095 Z M 0.01 4.962 L 0.73 4.963 L 0.73 4.963 L 0.01 4.962 Z M 0 11.119 L 0.72 11.121 L 0.72 11.12 L 0 11.119 Z M 2.757 14.364 L 2.755 15.084 L 2.756 15.084 L 2.757 14.364 Z M 11.644 14.377 L 11.646 13.657 L 11.645 13.657 L 11.644 14.377 Z M 14.389 11.146 L 15.109 11.148 L 15.109 11.148 L 14.389 11.146 Z M 14.4 4.978 L 15.12 4.98 L 15.12 4.979 L 14.4 4.978 Z M 14.033 3.082 L 13.365 3.351 L 13.366 3.351 L 14.033 3.082 Z M 13.355 1.396 L 12.687 1.665 L 12.687 1.665 L 13.355 1.396 Z M 0.38 1.134 L -0.297 2.827 L 1.04 3.362 L 1.717 1.669 L 0.38 1.134 Z M -0.297 2.828 C -0.568 3.506 -0.709 4.231 -0.71 4.961 L 0.73 4.963 C 0.731 4.416 0.836 3.872 1.04 3.362 L -0.297 2.828 Z M -0.71 4.961 L -0.72 11.118 L 0.72 11.12 L 0.73 4.963 L -0.71 4.961 Z M -0.72 11.117 C -0.723 12.162 -0.489 13.153 0.099 13.897 C 0.707 14.668 1.619 15.081 2.755 15.084 L 2.759 13.644 C 1.995 13.642 1.526 13.382 1.23 13.006 C 0.912 12.603 0.718 11.974 0.72 11.121 L -0.72 11.117 Z M 2.756 15.084 L 11.643 15.097 L 11.645 13.657 L 2.758 13.644 L 2.756 15.084 Z M 11.642 15.097 C 12.778 15.099 13.688 14.691 14.293 13.92 C 14.876 13.177 15.107 12.188 15.109 11.148 L 13.669 11.145 C 13.667 12.002 13.474 12.631 13.161 13.03 C 12.869 13.401 12.409 13.658 11.646 13.657 L 11.642 15.097 Z M 15.109 11.148 L 15.12 4.98 L 13.68 4.977 L 13.669 11.145 L 15.109 11.148 Z M 15.12 4.979 C 15.121 4.237 14.979 3.501 14.701 2.812 L 13.366 3.351 C 13.574 3.867 13.681 4.42 13.68 4.978 L 15.12 4.979 Z M 14.701 2.813 L 14.022 1.127 L 12.687 1.665 L 13.365 3.351 L 14.701 2.813 Z M 14.023 1.128 C 13.573 0.011 12.49 -0.72 11.286 -0.72 L 11.286 0.72 C 11.903 0.72 12.457 1.094 12.687 1.665 L 14.023 1.128 Z M 11.286 -0.72 L 3.118 -0.72 L 3.118 0.72 L 11.286 0.72 L 11.286 -0.72 Z M 3.118 -0.72 C 1.913 -0.72 0.827 0.014 0.38 1.135 L 1.717 1.669 C 1.946 1.096 2.501 0.72 3.118 0.72 L 3.118 -0.72 Z"} fill="currentColor" fillRule="nonzero" />
                    </svg>
                    <svg width={2.397} height={1.440} viewBox="0 -0.720 2.397 1.440" fill="none" style={{
                      position: "absolute",
                      left: 6.364,
                      top: 13.582,
                      width: 2.397,
                      height: 1.4399999380111694,
                      color: "var(--grayscale-500)",
                    }}>
                      <path d={"M 0 -0.72 C -0.398 -0.72 -0.72 -0.398 -0.72 0 C -0.72 0.398 -0.398 0.72 0 0.72 L 0 -0.72 Z M 2.397 0.72 C 2.794 0.72 3.117 0.398 3.117 0 C 3.117 -0.398 2.794 -0.72 2.397 -0.72 L 2.397 0.72 Z M 0 0.72 L 2.397 0.72 L 2.397 -0.72 L 0 -0.72 L 0 0.72 Z"} fill="currentColor" fillRule="nonzero" />
                    </svg>
                    <svg width={14.180} height={1.440} viewBox="0 -0.720 14.180 1.440" fill="none" style={{
                      position: "absolute",
                      left: 3.191,
                      top: 6.805,
                      width: 14.18,
                      height: 1.4399999380111694,
                      color: "var(--grayscale-500)",
                    }}>
                      <path d={"M 0 -0.72 C -0.398 -0.72 -0.72 -0.398 -0.72 0 C -0.72 0.398 -0.398 0.72 0 0.72 L 0 -0.72 Z M 14.18 0.72 C 14.577 0.72 14.9 0.398 14.9 0 C 14.9 -0.398 14.577 -0.72 14.18 -0.72 L 14.18 0.72 Z M 0 0.72 L 14.18 0.72 L 14.18 -0.72 L 0 -0.72 L 0 0.72 Z"} fill="currentColor" fillRule="nonzero" />
                    </svg>
                    <svg width={1.440} height={3.994} viewBox="-0.720 0 1.440 3.994" fill="none" style={{
                      position: "absolute",
                      left: 10.28,
                      top: 2.812,
                      width: 1.4399999380111694,
                      height: 3.994,
                      color: "var(--grayscale-500)",
                    }}>
                      <path d={"M -0.72 3.994 C -0.72 4.392 -0.398 4.714 0 4.714 C 0.398 4.714 0.72 4.392 0.72 3.994 L -0.72 3.994 Z M 0.72 0 C 0.72 -0.398 0.398 -0.72 0 -0.72 C -0.398 -0.72 -0.72 -0.398 -0.72 0 L 0.72 0 Z M 0.72 3.994 L 0.72 0 L -0.72 0 L -0.72 3.994 L 0.72 3.994 Z"} fill="currentColor" fillRule="nonzero" />
                    </svg>
                  </div>
                  <div style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "row",
                    gap: 6,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexGrow: 1,
                  }}>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 500,
                      fontSize: 14,
                      lineHeight: "20px",
                      letterSpacing: "0.060em",
                      color: "var(--grayscale-500)",
                      flexGrow: 1,
                    }}>Inventory</span>
                    <div style={{
                        position: "relative",
                        width: 20,
                        height: 20,
                        flexShrink: 0,
                      }}>
                      <Plus4 style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  borderRadius: 8,
                  display: "flex",
                  flexDirection: "row",
                  gap: "calc(var(--radius-8) * 1px)",
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
                    height: 20,
                    overflow: "hidden",
                    flexShrink: 0,
                  }}>
                    <div style={{
                      position: "absolute",
                      left: 2.292,
                      top: 2.708,
                      width: 15.417,
                      height: 15.035,
                      overflow: "hidden",
                    }}>
                      <div style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: 18.5,
                        height: 18.042,
                        overflow: "hidden",
                      }}>
                        <svg width={18.500} height={13.486} viewBox="0 0 18.500 13.486" fill="none" style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          width: 18.5,
                          height: 13.486,
                          color: "var(--icon-secondary)",
                        }}>
                          <path d={"M 0.128 -0.739 C -0.28 -0.81 -0.668 -0.536 -0.739 -0.128 C -0.81 0.28 -0.536 0.668 -0.128 0.739 L 0.128 -0.739 Z M 2.08 0.36 L 2.827 0.297 C 2.799 -0.043 2.544 -0.321 2.208 -0.379 L 2.08 0.36 Z M 3.043 11.833 L 3.79 11.772 L 3.79 11.77 L 3.043 11.833 Z M 4.843 13.486 L 4.843 12.736 L 4.841 12.736 L 4.843 13.486 Z M 15.752 13.486 L 15.754 12.736 L 15.752 12.736 L 15.752 13.486 Z M 17.537 11.94 L 16.795 11.833 L 16.795 11.834 L 17.537 11.94 Z M 18.486 5.382 L 19.228 5.489 L 19.228 5.489 L 18.486 5.382 Z M 17.351 3.863 L 17.458 3.121 L 17.455 3.12 L 17.351 3.863 Z M 2.414 3.099 C 2 3.099 1.664 3.435 1.664 3.849 C 1.664 4.263 2 4.599 2.414 4.599 L 2.414 3.099 Z M -0.128 0.739 L 1.952 1.099 L 2.208 -0.379 L 0.128 -0.739 L -0.128 0.739 Z M 1.333 0.423 L 2.296 11.896 L 3.79 11.77 L 2.827 0.297 L 1.333 0.423 Z M 2.296 11.894 C 2.405 13.221 3.514 14.24 4.845 14.236 L 4.841 12.736 C 4.292 12.738 3.835 12.319 3.79 11.772 L 2.296 11.894 Z M 4.843 14.236 L 15.752 14.236 L 15.752 12.736 L 4.843 12.736 L 4.843 14.236 Z M 15.75 14.236 C 17.022 14.239 18.1 13.303 18.279 12.046 L 16.795 11.834 C 16.72 12.353 16.276 12.737 15.754 12.736 L 15.75 14.236 Z M 18.279 12.047 L 19.228 5.489 L 17.744 5.275 L 16.795 11.833 L 18.279 12.047 Z M 19.228 5.489 C 19.394 4.346 18.6 3.286 17.458 3.121 L 17.244 4.605 C 17.566 4.652 17.79 4.952 17.744 5.275 L 19.228 5.489 Z M 17.455 3.12 C 17.439 3.118 17.414 3.116 17.406 3.115 C 17.4 3.115 17.391 3.114 17.387 3.114 C 17.379 3.113 17.373 3.113 17.37 3.113 C 17.362 3.113 17.355 3.113 17.35 3.113 C 17.339 3.112 17.325 3.112 17.309 3.112 C 17.278 3.112 17.233 3.112 17.176 3.111 C 17.063 3.111 16.899 3.11 16.693 3.11 C 16.279 3.109 15.693 3.108 14.991 3.107 C 13.587 3.105 11.722 3.104 9.859 3.103 C 7.996 3.101 6.135 3.101 4.739 3.1 C 4.042 3.1 3.46 3.099 3.053 3.099 C 2.85 3.099 2.69 3.099 2.581 3.099 C 2.527 3.099 2.485 3.099 2.457 3.099 C 2.443 3.099 2.432 3.099 2.425 3.099 C 2.421 3.099 2.419 3.099 2.417 3.099 C 2.416 3.099 2.415 3.099 2.415 3.099 C 2.415 3.099 2.415 3.099 2.414 3.099 C 2.414 3.099 2.414 3.099 2.414 3.849 C 2.414 4.599 2.414 4.599 2.414 4.599 C 2.414 4.599 2.414 4.599 2.414 4.599 C 2.415 4.599 2.416 4.599 2.416 4.599 C 2.418 4.599 2.421 4.599 2.425 4.599 C 2.432 4.599 2.442 4.599 2.456 4.599 C 2.485 4.599 2.526 4.599 2.581 4.599 C 2.69 4.599 2.85 4.599 3.053 4.599 C 3.46 4.599 4.041 4.6 4.739 4.6 C 6.134 4.601 7.995 4.601 9.858 4.603 C 11.721 4.604 13.586 4.605 14.989 4.607 C 15.691 4.608 16.277 4.609 16.689 4.61 C 16.895 4.61 17.058 4.611 17.169 4.611 C 17.225 4.612 17.267 4.612 17.296 4.612 C 17.31 4.612 17.319 4.612 17.324 4.612 C 17.327 4.613 17.327 4.613 17.324 4.612 C 17.323 4.612 17.318 4.612 17.312 4.612 C 17.309 4.612 17.3 4.611 17.295 4.611 C 17.287 4.61 17.263 4.608 17.247 4.606 L 17.455 3.12 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                        <svg width={2.773} height={1.500} viewBox="0 -0.750 2.773 1.500" fill="none" style={{
                          position: "absolute",
                          left: 11.375,
                          top: 7.545,
                          width: 2.773,
                          height: 1.5,
                          color: "var(--icon-secondary)",
                        }}>
                          <path d={"M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 -0.75 Z M 2.773 0.75 C 3.187 0.75 3.523 0.414 3.523 0 C 3.523 -0.414 3.187 -0.75 2.773 -0.75 L 2.773 0.75 Z M 0 0.75 L 2.773 0.75 L 2.773 -0.75 L 0 -0.75 L 0 0.75 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                        <svg width={1.088} height={1.089} viewBox="0 0 1.088 1.089" fill="none" style={{
                          position: "absolute",
                          left: 3.86,
                          top: 16.953,
                          width: 1.088,
                          height: 1.089,
                          color: "var(--icon-secondary)",
                        }}>
                          <path d={"M 0.544 0 C 0.845 0 1.088 0.244 1.088 0.544 C 1.088 0.845 0.845 1.089 0.544 1.089 C 0.243 1.089 0 0.845 0 0.544 C 0 0.244 0.243 0 0.544 0 Z"} fill="currentColor" fillRule="evenodd" />
                          <path d={"M 0.544 0.75 C 0.43 0.75 0.338 0.657 0.338 0.544 L 1.838 0.544 C 1.838 -0.169 1.26 -0.75 0.544 -0.75 L 0.544 0.75 Z M 0.338 0.544 C 0.338 0.433 0.429 0.339 0.544 0.339 L 0.544 1.839 C 1.261 1.839 1.838 1.257 1.838 0.544 L 0.338 0.544 Z M 0.544 0.339 C 0.659 0.339 0.75 0.433 0.75 0.544 L -0.75 0.544 C -0.75 1.257 -0.173 1.839 0.544 1.839 L 0.544 0.339 Z M 0.75 0.544 C 0.75 0.657 0.658 0.75 0.544 0.75 L 0.544 -0.75 C -0.172 -0.75 -0.75 -0.169 -0.75 0.544 L 0.75 0.544 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                        <svg width={1.089} height={1.089} viewBox="0 0 1.089 1.089" fill="none" style={{
                          position: "absolute",
                          left: 15.141,
                          top: 16.953,
                          width: 1.089,
                          height: 1.089,
                          color: "var(--icon-secondary)",
                        }}>
                          <path d={"M 0.544 0 C 0.845 0 1.089 0.244 1.089 0.544 C 1.089 0.845 0.845 1.089 0.544 1.089 C 0.243 1.089 0 0.845 0 0.544 C 0 0.244 0.243 0 0.544 0 Z"} fill="currentColor" fillRule="evenodd" />
                          <path d={"M 0.544 0.75 C 0.432 0.75 0.339 0.659 0.339 0.544 L 1.839 0.544 C 1.839 -0.171 1.258 -0.75 0.544 -0.75 L 0.544 0.75 Z M 0.339 0.544 C 0.339 0.431 0.431 0.339 0.544 0.339 L 0.544 1.839 C 1.259 1.839 1.839 1.259 1.839 0.544 L 0.339 0.544 Z M 0.544 0.339 C 0.659 0.339 0.75 0.433 0.75 0.544 L -0.75 0.544 C -0.75 1.257 -0.173 1.839 0.544 1.839 L 0.544 0.339 Z M 0.75 0.544 C 0.75 0.657 0.658 0.75 0.544 0.75 L 0.544 -0.75 C -0.172 -0.75 -0.75 -0.169 -0.75 0.544 L 0.75 0.544 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "row",
                    gap: 6,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexGrow: 1,
                  }}>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 500,
                      fontSize: 14,
                      lineHeight: "20px",
                      letterSpacing: "0.060em",
                      color: "var(--grayscale-500)",
                      flexGrow: 1,
                    }}>Sales</span>
                    <div style={{
                        position: "relative",
                        width: 20,
                        height: 20,
                        flexShrink: 0,
                      }}>
                      <Plus4 style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  borderRadius: 8,
                  display: "flex",
                  flexDirection: "row",
                  gap: "calc(var(--radius-8) * 1px)",
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
                    height: 20,
                    overflow: "hidden",
                    flexShrink: 0,
                  }}>
                    <div style={{
                      position: "absolute",
                      left: 2.751,
                      top: 1.898,
                      width: 15.072,
                      height: 16.018,
                      overflow: "hidden",
                    }}>
                      <div style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: 18.087,
                        height: 19.222,
                        overflow: "hidden",
                      }}>
                        <svg width={18.087} height={14.682} viewBox="0 0 18.087 14.682" fill="none" style={{
                          position: "absolute",
                          left: 0,
                          top: 4.54,
                          width: 18.087,
                          height: 14.682,
                          color: "var(--icon-secondary)",
                        }}>
                          <path d={"M 0.114 9.117 L 0.856 9.228 C 0.857 9.223 0.857 9.218 0.858 9.213 L 0.114 9.117 Z M 0.892 3.076 L 0.155 2.939 C 0.152 2.952 0.15 2.966 0.148 2.98 L 0.892 3.076 Z M 17.222 3.076 L 17.966 2.98 C 17.963 2.958 17.959 2.936 17.954 2.914 L 17.222 3.076 Z M 18 9.117 L 17.256 9.213 L 17.257 9.223 L 18 9.117 Z M 13.213 13.932 L 4.865 13.932 L 4.865 15.432 L 13.213 15.432 L 13.213 13.932 Z M 4.865 13.932 C 3.384 13.932 2.276 13.657 1.603 13.024 C 0.968 12.428 0.54 11.335 0.856 9.228 L -0.628 9.006 C -0.98 11.356 -0.566 13.045 0.576 14.118 C 1.678 15.153 3.279 15.432 4.865 15.432 L 4.865 13.932 Z M 0.858 9.213 L 1.636 3.171 L 0.148 2.98 L -0.63 9.021 L 0.858 9.213 Z M 1.63 3.212 C 1.81 2.238 2.196 1.631 2.611 1.268 C 3.028 0.904 3.516 0.75 3.968 0.75 L 3.968 -0.75 C 3.174 -0.75 2.33 -0.478 1.624 0.139 C 0.915 0.758 0.386 1.689 0.155 2.939 L 1.63 3.212 Z M 3.968 0.75 L 14.146 0.75 L 14.146 -0.75 L 3.968 -0.75 L 3.968 0.75 Z M 14.146 0.75 C 14.985 0.75 16.072 1.345 16.489 3.237 L 17.954 2.914 C 17.419 0.486 15.834 -0.75 14.146 -0.75 L 14.146 0.75 Z M 16.478 3.171 L 17.256 9.213 L 18.744 9.021 L 17.966 2.98 L 16.478 3.171 Z M 17.257 9.223 C 17.519 11.045 17.107 12.174 16.435 12.856 C 15.742 13.558 14.632 13.932 13.213 13.932 L 13.213 15.432 C 14.86 15.432 16.426 15.001 17.503 13.909 C 18.6 12.796 19.048 11.143 18.742 9.01 L 17.257 9.223 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                        <svg width={8.659} height={4.320} viewBox="0 0 8.659 4.320" fill="none" style={{
                          position: "absolute",
                          left: 4.69,
                          top: 0,
                          width: 8.659,
                          height: 4.32,
                          color: "var(--icon-secondary)",
                        }}>
                          <path d={"M 7.909 4.32 C 7.909 4.735 8.245 5.07 8.659 5.07 C 9.073 5.07 9.409 4.735 9.409 4.32 L 7.909 4.32 Z M 4.339 0 L 4.336 0.75 L 4.339 0.75 L 4.339 0 Z M 1.272 1.259 L 1.801 1.79 L 1.801 1.79 L 1.272 1.259 Z M -0.75 4.32 C -0.75 4.735 -0.414 5.07 0 5.07 C 0.414 5.07 0.75 4.735 0.75 4.32 L -0.75 4.32 Z M 9.409 4.32 C 9.409 1.52 7.139 -0.75 4.339 -0.75 L 4.339 0.75 C 6.311 0.75 7.909 2.349 7.909 4.32 L 9.409 4.32 Z M 4.342 -0.75 C 2.993 -0.756 1.698 -0.224 0.743 0.728 L 1.801 1.79 C 2.474 1.12 3.386 0.746 4.336 0.75 L 4.342 -0.75 Z M 0.743 0.728 C -0.213 1.679 -0.75 2.972 -0.75 4.32 L 0.75 4.32 C 0.75 3.371 1.128 2.46 1.801 1.79 L 0.743 0.728 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                        <svg width={0.046} height={1.500} viewBox="0 -0.750 0.046 1.500" fill="none" style={{
                          position: "absolute",
                          left: 11.949,
                          top: 8.824,
                          width: 0.046,
                          height: 1.5,
                          color: "var(--icon-secondary)",
                        }}>
                          <path d={"M 0.046 0.75 C 0.46 0.75 0.796 0.414 0.796 0 C 0.796 -0.414 0.46 -0.75 0.046 -0.75 L 0.046 0.75 Z M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 -0.75 Z M 0.046 -0.75 L 0 -0.75 L 0 0.75 L 0.046 0.75 L 0.046 -0.75 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                        <svg width={0.046} height={1.500} viewBox="0 -0.750 0.046 1.500" fill="none" style={{
                          position: "absolute",
                          left: 6.119,
                          top: 8.824,
                          width: 0.046,
                          height: 1.5,
                          color: "var(--icon-secondary)",
                        }}>
                          <path d={"M 0.046 0.75 C 0.46 0.75 0.796 0.414 0.796 0 C 0.796 -0.414 0.46 -0.75 0.046 -0.75 L 0.046 0.75 Z M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 -0.75 Z M 0.046 -0.75 L 0 -0.75 L 0 0.75 L 0.046 0.75 L 0.046 -0.75 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "row",
                    gap: 6,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexGrow: 1,
                  }}>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 500,
                      fontSize: 14,
                      lineHeight: "20px",
                      letterSpacing: "0.060em",
                      color: "var(--grayscale-500)",
                      flexGrow: 1,
                    }}>Purchases</span>
                    <div style={{
                        position: "relative",
                        width: 20,
                        height: 20,
                        flexShrink: 0,
                      }}>
                      <Plus4 style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
              <span style={{
                position: "relative",
                fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 14,
                lineHeight: "20px",
                letterSpacing: "0.060em",
                color: "var(--grayscale-500)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Management</span>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: 4,
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <div style={{
                  position: "relative",
                  borderRadius: 8,
                  display: "flex",
                  flexDirection: "row",
                  gap: "calc(var(--radius-8) * 1px)",
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
                    height: 20,
                    overflow: "hidden",
                    flexShrink: 0,
                  }}>
                    <div style={{
                      position: "absolute",
                      left: 3.126,
                      top: 2.291,
                      width: 13.887,
                      height: 15.342,
                      overflow: "hidden",
                    }}>
                      <div style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: 16.665,
                        height: 18.41,
                        overflow: "hidden",
                      }}>
                        <svg width={7.220} height={1.500} viewBox="0 -0.750 7.220 1.500" fill="none" style={{
                          position: "absolute",
                          left: 4.745,
                          top: 13.474,
                          width: 7.22,
                          height: 1.5,
                          color: "var(--icon-secondary)",
                        }}>
                          <path d={"M 7.22 0.75 C 7.634 0.75 7.97 0.414 7.97 0 C 7.97 -0.414 7.634 -0.75 7.22 -0.75 L 7.22 0.75 Z M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 -0.75 Z M 7.22 -0.75 L 0 -0.75 L 0 0.75 L 7.22 0.75 L 7.22 -0.75 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                        <svg width={7.220} height={1.500} viewBox="0 -0.750 7.220 1.500" fill="none" style={{
                          position: "absolute",
                          left: 4.745,
                          top: 9.287,
                          width: 7.22,
                          height: 1.5,
                          color: "var(--icon-secondary)",
                        }}>
                          <path d={"M 7.22 0.75 C 7.634 0.75 7.97 0.414 7.97 0 C 7.97 -0.414 7.634 -0.75 7.22 -0.75 L 7.22 0.75 Z M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 -0.75 Z M 7.22 -0.75 L 0 -0.75 L 0 0.75 L 7.22 0.75 L 7.22 -0.75 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                        <svg width={2.755} height={1.500} viewBox="0 -0.750 2.755 1.500" fill="none" style={{
                          position: "absolute",
                          left: 4.746,
                          top: 5.11,
                          width: 2.755,
                          height: 1.5,
                          color: "var(--icon-secondary)",
                        }}>
                          <path d={"M 2.755 0.75 C 3.169 0.75 3.505 0.414 3.505 0 C 3.505 -0.414 3.169 -0.75 2.755 -0.75 L 2.755 0.75 Z M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 -0.75 Z M 2.755 -0.75 L 0 -0.75 L 0 0.75 L 2.755 0.75 L 2.755 -0.75 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                        <svg width={16.665} height={18.410} viewBox="0 0 16.665 18.410" fill="none" style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          width: 16.665,
                          height: 18.41,
                          color: "var(--icon-secondary)",
                        }}>
                          <path d={"M 12.158 0 L 12.158 -0.75 L 12.158 -0.75 L 12.158 0 Z M 4.469 0.004 L 4.469 -0.746 L 4.464 -0.746 L 4.469 0.004 Z M 4.506 18.41 L 4.506 19.16 L 4.506 19.16 L 4.506 18.41 Z M 12.195 18.407 L 12.195 19.157 L 12.2 19.157 L 12.195 18.407 Z M 12.158 0 C 12.158 -0.75 12.158 -0.75 12.158 -0.75 C 12.157 -0.75 12.157 -0.75 12.157 -0.75 C 12.157 -0.75 12.157 -0.75 12.156 -0.75 C 12.155 -0.75 12.154 -0.75 12.152 -0.75 C 12.148 -0.75 12.143 -0.75 12.136 -0.75 C 12.121 -0.75 12.1 -0.75 12.071 -0.75 C 12.015 -0.75 11.933 -0.75 11.828 -0.75 C 11.618 -0.75 11.318 -0.75 10.958 -0.749 C 10.238 -0.749 9.278 -0.748 8.318 -0.748 C 7.357 -0.747 6.396 -0.747 5.675 -0.747 C 5.314 -0.746 5.014 -0.746 4.802 -0.746 C 4.697 -0.746 4.614 -0.746 4.557 -0.746 C 4.528 -0.746 4.507 -0.746 4.492 -0.746 C 4.484 -0.746 4.479 -0.746 4.475 -0.746 C 4.471 -0.746 4.469 -0.746 4.469 -0.746 L 4.469 0.754 C 4.475 0.754 6.398 0.753 8.318 0.752 C 9.279 0.751 10.239 0.751 10.959 0.751 C 11.319 0.75 11.619 0.75 11.828 0.75 C 11.933 0.75 12.016 0.75 12.072 0.75 C 12.1 0.75 12.122 0.75 12.136 0.75 C 12.144 0.75 12.149 0.75 12.153 0.75 C 12.155 0.75 12.156 0.75 12.157 0.75 C 12.157 0.75 12.158 0.75 12.158 0.75 C 12.158 0.75 12.158 0.75 12.158 0.75 C 12.158 0.75 12.158 0.75 12.158 0 Z M 4.464 -0.746 C 2.916 -0.736 1.594 -0.218 0.659 0.753 C -0.273 1.721 -0.75 3.067 -0.75 4.607 L 0.75 4.607 C 0.75 3.377 1.127 2.43 1.74 1.793 C 2.35 1.159 3.262 0.761 4.474 0.754 L 4.464 -0.746 Z M -0.75 4.607 L -0.75 13.803 L 0.75 13.803 L 0.75 4.607 L -0.75 4.607 Z M -0.75 13.803 C -0.75 15.35 -0.269 16.703 0.67 17.672 C 1.612 18.645 2.946 19.16 4.506 19.16 L 4.506 17.66 C 3.282 17.66 2.363 17.263 1.748 16.629 C 1.13 15.991 0.75 15.04 0.75 13.803 L -0.75 13.803 Z M 4.506 18.41 C 4.506 19.16 4.506 19.16 4.506 19.16 C 4.506 19.16 4.507 19.16 4.507 19.16 C 4.507 19.16 4.507 19.16 4.508 19.16 C 4.509 19.16 4.51 19.16 4.512 19.16 C 4.516 19.16 4.521 19.16 4.528 19.16 C 4.543 19.16 4.564 19.16 4.593 19.16 C 4.649 19.16 4.731 19.16 4.836 19.16 C 5.046 19.16 5.346 19.16 5.706 19.16 C 6.426 19.159 7.386 19.159 8.346 19.158 C 9.306 19.158 10.267 19.158 10.988 19.157 C 11.349 19.157 11.65 19.157 11.861 19.157 C 11.967 19.157 12.05 19.157 12.107 19.157 C 12.135 19.157 12.157 19.157 12.172 19.157 C 12.18 19.157 12.185 19.157 12.189 19.157 C 12.191 19.157 12.193 19.157 12.194 19.157 C 12.195 19.157 12.195 19.157 12.195 19.157 L 12.195 17.657 C 12.188 17.657 10.266 17.658 8.345 17.659 C 7.385 17.659 6.425 17.659 5.705 17.66 C 5.345 17.66 5.045 17.66 4.836 17.66 C 4.731 17.66 4.648 17.66 4.592 17.66 C 4.564 17.66 4.542 17.66 4.528 17.66 C 4.52 17.66 4.515 17.66 4.511 17.66 C 4.509 17.66 4.508 17.66 4.507 17.66 C 4.507 17.66 4.506 17.66 4.506 17.66 C 4.506 17.66 4.506 17.66 4.506 17.66 C 4.506 17.66 4.506 17.66 4.506 18.41 Z M 12.2 19.157 C 13.748 19.147 15.071 18.629 16.005 17.657 C 16.937 16.689 17.415 15.343 17.415 13.803 L 15.915 13.803 C 15.915 15.033 15.538 15.98 14.925 16.617 C 14.314 17.251 13.402 17.65 12.19 17.657 L 12.2 19.157 Z M 17.415 13.803 L 17.415 4.607 L 15.915 4.607 L 15.915 13.803 L 17.415 13.803 Z M 17.415 4.607 C 17.415 3.06 16.934 1.707 15.994 0.738 C 15.052 -0.235 13.718 -0.75 12.158 -0.75 L 12.158 0.75 C 13.382 0.75 14.302 1.147 14.917 1.781 C 15.535 2.419 15.915 3.37 15.915 4.607 L 17.415 4.607 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "row",
                    gap: 6,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexGrow: 1,
                  }}>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 500,
                      fontSize: 14,
                      lineHeight: "20px",
                      letterSpacing: "0.060em",
                      color: "var(--grayscale-500)",
                      flexGrow: 1,
                    }}>Documents</span>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  borderRadius: 8,
                  display: "flex",
                  flexDirection: "row",
                  gap: "calc(var(--radius-8) * 1px)",
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
                    height: 20,
                    overflow: "hidden",
                    flexShrink: 0,
                  }}>
                    <svg width={3.455} height={3.454} viewBox="0 0 3.455 3.454" fill="none" style={{
                      position: "absolute",
                      left: 11.392,
                      top: 13.747,
                      width: 3.455,
                      height: 3.454,
                      color: "rgb(145,153,146)",
                    }}>
                      <path d={"M 3.455 1.739 L 4.175 1.744 L 4.175 1.744 L 3.455 1.739 Z M 1.716 3.454 L 1.72 2.734 L 1.718 2.734 L 1.716 3.454 Z M 0 1.727 L 0.72 1.729 L 0.72 1.727 L 0 1.727 Z M 0 1.716 L -0.72 1.71 L -0.72 1.716 L 0 1.716 Z M 1.739 0 L 1.744 -0.72 L 1.744 -0.72 L 1.739 0 Z M 2.735 1.734 C 2.73 2.29 2.277 2.737 1.72 2.734 L 1.711 4.174 C 3.062 4.183 4.165 3.095 4.175 1.744 L 2.735 1.734 Z M 1.718 2.734 C 1.165 2.732 0.718 2.282 0.72 1.729 L -0.72 1.724 C -0.724 3.073 0.365 4.169 1.713 4.174 L 1.718 2.734 Z M 0.72 1.727 L 0.72 1.716 L -0.72 1.716 L -0.72 1.727 L 0.72 1.727 Z M 0.72 1.721 C 0.724 1.164 1.178 0.716 1.734 0.72 L 1.744 -0.72 C 0.393 -0.729 -0.71 0.359 -0.72 1.71 L 0.72 1.721 Z M 1.734 0.72 C 2.29 0.724 2.738 1.177 2.735 1.734 L 4.175 1.744 C 4.183 0.392 3.095 -0.711 1.744 -0.72 L 1.734 0.72 Z"} fill="currentColor" fillRule="nonzero" />
                    </svg>
                    <svg width={3.455} height={3.454} viewBox="0 0 3.455 3.454" fill="none" style={{
                      position: "absolute",
                      left: 6.007,
                      top: 8.273,
                      width: 3.455,
                      height: 3.454,
                      color: "rgb(145,153,146)",
                    }}>
                      <path d={"M 3.455 1.738 L 4.174 1.743 L 4.174 1.743 L 3.455 1.738 Z M 1.716 3.454 L 1.72 2.734 L 1.718 2.734 L 1.716 3.454 Z M 0 1.727 L 0.72 1.729 L 0.72 1.727 L 0 1.727 Z M 0 1.715 L -0.72 1.71 L -0.72 1.715 L 0 1.715 Z M 1.739 0 L 1.734 0.72 L 1.734 0.72 L 1.739 0 Z M 2.735 1.733 C 2.73 2.29 2.276 2.737 1.72 2.734 L 1.711 4.174 C 3.062 4.183 4.165 3.095 4.174 1.743 L 2.735 1.733 Z M 1.718 2.734 C 1.165 2.732 0.718 2.282 0.72 1.729 L -0.72 1.724 C -0.724 3.072 0.365 4.169 1.713 4.174 L 1.718 2.734 Z M 0.72 1.727 L 0.72 1.715 L -0.72 1.715 L -0.72 1.727 L 0.72 1.727 Z M 0.72 1.72 C 0.724 1.164 1.178 0.716 1.734 0.72 L 1.744 -0.72 C 0.392 -0.73 -0.71 0.359 -0.72 1.71 L 0.72 1.72 Z M 1.734 0.72 C 2.29 0.724 2.738 1.178 2.735 1.734 L 4.174 1.743 C 4.183 0.392 3.095 -0.711 1.744 -0.72 L 1.734 0.72 Z"} fill="currentColor" fillRule="nonzero" />
                    </svg>
                    <svg width={3.455} height={3.454} viewBox="0 0 3.455 3.454" fill="none" style={{
                      position: "absolute",
                      left: 11.067,
                      top: 2.8,
                      width: 3.455,
                      height: 3.454,
                      color: "rgb(145,153,146)",
                    }}>
                      <path d={"M 3.454 1.739 L 4.174 1.744 L 4.174 1.744 L 3.454 1.739 Z M 1.716 3.454 L 1.72 2.734 L 1.718 2.734 L 1.716 3.454 Z M 0 1.727 L 0.72 1.729 L 0.72 1.727 L 0 1.727 Z M 0 1.716 L -0.72 1.71 L -0.72 1.716 L 0 1.716 Z M 1.739 0 L 1.734 0.72 L 1.734 0.72 L 1.739 0 Z M 2.735 1.734 C 2.73 2.29 2.277 2.737 1.72 2.734 L 1.711 4.174 C 3.062 4.183 4.165 3.095 4.174 1.744 L 2.735 1.734 Z M 1.718 2.734 C 1.165 2.732 0.718 2.282 0.72 1.729 L -0.72 1.724 C -0.724 3.073 0.365 4.169 1.713 4.174 L 1.718 2.734 Z M 0.72 1.727 L 0.72 1.716 L -0.72 1.716 L -0.72 1.727 L 0.72 1.727 Z M 0.72 1.721 C 0.724 1.164 1.178 0.716 1.734 0.72 L 1.744 -0.72 C 0.393 -0.729 -0.71 0.359 -0.72 1.71 L 0.72 1.721 Z M 1.734 0.72 C 2.29 0.724 2.738 1.177 2.735 1.734 L 4.174 1.744 C 4.183 0.392 3.095 -0.711 1.744 -0.72 L 1.734 0.72 Z"} fill="currentColor" fillRule="nonzero" />
                    </svg>
                    <svg width={13.330} height={1.440} viewBox="0 -0.720 13.330 1.440" fill="none" style={{
                      position: "absolute",
                      left: 3.719,
                      top: 15.473,
                      width: 13.33,
                      height: 1.4399999380111694,
                      color: "rgb(145,153,146)",
                    }}>
                      <path d={"M 0 -0.72 C -0.398 -0.72 -0.72 -0.398 -0.72 0 C -0.72 0.398 -0.398 0.72 0 0.72 L 0 -0.72 Z M 7.673 0.72 C 8.071 0.72 8.393 0.398 8.393 0 C 8.393 -0.398 8.071 -0.72 7.673 -0.72 L 7.673 0.72 Z M 11.13 -0.72 C 10.732 -0.72 10.41 -0.398 10.41 0 C 10.41 0.398 10.732 0.72 11.13 0.72 L 11.13 -0.72 Z M 13.33 0.72 C 13.728 0.72 14.05 0.398 14.05 0 C 14.05 -0.398 13.728 -0.72 13.33 -0.72 L 13.33 0.72 Z M 0 0.72 L 7.673 0.72 L 7.673 -0.72 L 0 -0.72 L 0 0.72 Z M 11.13 0.72 L 13.33 0.72 L 13.33 -0.72 L 11.13 -0.72 L 11.13 0.72 Z"} fill="currentColor" fillRule="nonzero" />
                    </svg>
                    <svg width={13.330} height={1.440} viewBox="0 -0.720 13.330 1.440" fill="none" style={{
                      position: "absolute",
                      left: 3.719,
                      top: 10.002,
                      width: 13.33,
                      height: 1.4399999380111694,
                      color: "rgb(145,153,146)",
                    }}>
                      <path d={"M 0 -0.72 C -0.398 -0.72 -0.72 -0.398 -0.72 0 C -0.72 0.398 -0.398 0.72 0 0.72 L 0 -0.72 Z M 2.288 0.72 C 2.685 0.72 3.008 0.398 3.008 0 C 3.008 -0.398 2.685 -0.72 2.288 -0.72 L 2.288 0.72 Z M 5.744 -0.72 C 5.346 -0.72 5.024 -0.398 5.024 0 C 5.024 0.398 5.346 0.72 5.744 0.72 L 5.744 -0.72 Z M 13.33 0.72 C 13.728 0.72 14.05 0.398 14.05 0 C 14.05 -0.398 13.728 -0.72 13.33 -0.72 L 13.33 0.72 Z M 0 0.72 L 2.288 0.72 L 2.288 -0.72 L 0 -0.72 L 0 0.72 Z M 5.744 0.72 L 13.33 0.72 L 13.33 -0.72 L 5.744 -0.72 L 5.744 0.72 Z"} fill="currentColor" fillRule="nonzero" />
                    </svg>
                    <svg width={13.329} height={1.440} viewBox="0 -0.720 13.329 1.440" fill="none" style={{
                      position: "absolute",
                      left: 3.719,
                      top: 4.527,
                      width: 13.329,
                      height: 1.4399999380111694,
                      color: "rgb(145,153,146)",
                    }}>
                      <path d={"M 0 -0.72 C -0.398 -0.72 -0.72 -0.398 -0.72 0 C -0.72 0.398 -0.398 0.72 0 0.72 L 0 -0.72 Z M 7.345 0.72 C 7.743 0.72 8.065 0.398 8.065 0 C 8.065 -0.398 7.743 -0.72 7.345 -0.72 L 7.345 0.72 Z M 10.8 -0.72 C 10.403 -0.72 10.08 -0.398 10.08 0 C 10.08 0.398 10.403 0.72 10.8 0.72 L 10.8 -0.72 Z M 13.329 0.72 C 13.727 0.72 14.049 0.398 14.049 0 C 14.049 -0.398 13.727 -0.72 13.329 -0.72 L 13.329 0.72 Z M 0 0.72 L 7.345 0.72 L 7.345 -0.72 L 0 -0.72 L 0 0.72 Z M 10.8 0.72 L 13.329 0.72 L 13.329 -0.72 L 10.8 -0.72 L 10.8 0.72 Z"} fill="currentColor" fillRule="nonzero" />
                    </svg>
                  </div>
                  <div style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "row",
                    gap: 6,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexGrow: 1,
                  }}>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 500,
                      fontSize: 14,
                      lineHeight: "20px",
                      letterSpacing: "0.060em",
                      color: "var(--grayscale-500)",
                      flexGrow: 1,
                    }}>Integrations</span>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  borderRadius: 8,
                  backgroundColor: "var(--grayscale-700)",
                  display: "flex",
                  flexDirection: "row",
                  gap: "calc(var(--radius-8) * 1px)",
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
                      height: 20,
                      flexShrink: 0,
                    }}>
                    <VerticalBarChart1 style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />
                  </div>
                  <div style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "row",
                    gap: 6,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexGrow: 1,
                  }}>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 500,
                      fontSize: 14,
                      lineHeight: "20px",
                      letterSpacing: "0.060em",
                      color: "var(--general-white)",
                      flexGrow: 1,
                    }}>Report</span>
                    <div style={{
                        position: "relative",
                        width: 20,
                        height: 20,
                        flexShrink: 0,
                      }}>
                      <Plus4 style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  borderRadius: 8,
                  display: "flex",
                  flexDirection: "row",
                  gap: "calc(var(--radius-8) * 1px)",
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
                    height: 20,
                    overflow: "hidden",
                    flexShrink: 0,
                  }}>
                    <div style={{
                      position: "absolute",
                      left: 2.291,
                      top: 2.708,
                      width: 15.4,
                      height: 14.631,
                      overflow: "hidden",
                    }}>
                      <div style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: 18.48,
                        height: 17.557,
                        overflow: "hidden",
                      }}>
                        <svg width={13.684} height={5.600} viewBox="0 0 13.684 5.600" fill="none" style={{
                          position: "absolute",
                          left: 0,
                          top: 11.957,
                          width: 13.684,
                          height: 5.6,
                          color: "var(--icon-secondary)",
                        }}>
                          <path d={"M 6.842 0.75 C 8.67 0.75 10.279 0.891 11.408 1.27 C 11.969 1.458 12.355 1.686 12.594 1.934 C 12.815 2.164 12.934 2.432 12.934 2.792 L 14.434 2.792 C 14.434 2.035 14.159 1.396 13.674 0.893 C 13.206 0.408 12.574 0.078 11.885 -0.152 C 10.515 -0.612 8.703 -0.75 6.842 -0.75 L 6.842 0.75 Z M 12.934 2.792 C 12.934 3.154 12.815 3.424 12.594 3.655 C 12.356 3.904 11.972 4.134 11.413 4.323 C 10.288 4.705 8.68 4.85 6.842 4.85 L 6.842 6.35 C 8.714 6.35 10.527 6.208 11.895 5.744 C 12.583 5.51 13.214 5.178 13.679 4.691 C 14.161 4.186 14.434 3.547 14.434 2.792 L 12.934 2.792 Z M 6.842 4.85 C 5.013 4.85 3.404 4.71 2.275 4.332 C 1.715 4.145 1.329 3.917 1.09 3.669 C 0.869 3.44 0.75 3.172 0.75 2.812 L -0.75 2.812 C -0.75 3.569 -0.475 4.208 0.01 4.711 C 0.478 5.195 1.111 5.525 1.799 5.755 C 3.169 6.213 4.981 6.35 6.842 6.35 L 6.842 4.85 Z M 0.75 2.812 C 0.75 2.45 0.869 2.179 1.09 1.948 C 1.328 1.698 1.712 1.468 2.271 1.278 C 3.396 0.896 5.004 0.75 6.842 0.75 L 6.842 -0.75 C 4.969 -0.75 3.156 -0.607 1.788 -0.142 C 1.1 0.092 0.47 0.425 0.005 0.912 C -0.478 1.418 -0.75 2.057 -0.75 2.812 L 0.75 2.812 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                        <svg width={8.771} height={8.770} viewBox="0 0 8.771 8.770" fill="none" style={{
                          position: "absolute",
                          left: 2.456,
                          top: 0,
                          width: 8.771,
                          height: 8.77,
                          color: "var(--icon-secondary)",
                        }}>
                          <path d={"M 8.771 4.385 L 8.021 4.385 L 8.021 4.388 L 8.771 4.385 Z M 4.417 8.77 L 4.417 9.52 L 4.42 9.52 L 4.417 8.77 Z M 4.386 8.02 C 2.378 8.02 0.75 6.393 0.75 4.385 L -0.75 4.385 C -0.75 7.221 1.55 9.52 4.386 9.52 L 4.386 8.02 Z M 0.75 4.385 C 0.75 2.377 2.378 0.75 4.386 0.75 L 4.386 -0.75 C 1.55 -0.75 -0.75 1.549 -0.75 4.385 L 0.75 4.385 Z M 4.386 0.75 C 6.393 0.75 8.021 2.377 8.021 4.385 L 9.521 4.385 C 9.521 1.549 7.221 -0.75 4.386 -0.75 L 4.386 0.75 Z M 8.021 4.388 C 8.028 6.386 6.413 8.013 4.414 8.02 L 4.42 9.52 C 7.247 9.509 9.532 7.21 9.521 4.382 L 8.021 4.388 Z M 4.417 8.02 L 4.386 8.02 L 4.386 9.52 L 4.417 9.52 L 4.417 8.02 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                        <svg width={2.837} height={6.518} viewBox="0 0 2.837 6.518" fill="none" style={{
                          position: "absolute",
                          left: 13.734,
                          top: 1.114,
                          width: 2.837,
                          height: 6.518,
                          color: "var(--icon-secondary)",
                        }}>
                          <path d={"M -0.104 5.775 C -0.515 5.833 -0.8 6.212 -0.743 6.622 C -0.685 7.033 -0.306 7.318 0.104 7.261 L -0.104 5.775 Z M 2.837 3.256 L 3.587 3.257 L 3.587 3.256 L 2.837 3.256 Z M 0.196 -0.74 C -0.212 -0.807 -0.598 -0.53 -0.665 -0.121 C -0.732 0.287 -0.455 0.673 -0.046 0.74 L 0.196 -0.74 Z M 0.104 7.261 C 2.07 6.984 3.583 5.299 3.587 3.257 L 2.087 3.255 C 2.085 4.539 1.132 5.602 -0.104 5.775 L 0.104 7.261 Z M 3.587 3.256 C 3.587 1.244 2.12 -0.425 0.196 -0.74 L -0.046 0.74 C 1.164 0.939 2.087 1.99 2.087 3.256 L 3.587 3.256 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                        <svg width={2.634} height={3.479} viewBox="0 0 2.634 3.479" fill="none" style={{
                          position: "absolute",
                          left: 15.846,
                          top: 11.482,
                          width: 2.634,
                          height: 3.479,
                          color: "var(--icon-secondary)",
                        }}>
                          <path d={"M 0.11 -0.742 C -0.299 -0.803 -0.681 -0.52 -0.742 -0.11 C -0.803 0.299 -0.52 0.681 -0.11 0.742 L 0.11 -0.742 Z M 1.034 2.778 C 0.646 2.925 0.452 3.358 0.599 3.745 C 0.746 4.133 1.179 4.327 1.566 4.18 L 1.034 2.778 Z M -0.11 0.742 C 0.624 0.851 1.157 1.024 1.487 1.241 C 1.78 1.433 1.884 1.632 1.884 1.895 L 3.384 1.895 C 3.384 1.038 2.946 0.405 2.31 -0.013 C 1.711 -0.406 0.927 -0.62 0.11 -0.742 L -0.11 0.742 Z M 1.884 1.895 C 1.884 2.097 1.823 2.238 1.714 2.362 C 1.591 2.501 1.378 2.647 1.034 2.778 L 1.566 4.18 C 2.046 3.998 2.5 3.738 2.838 3.356 C 3.19 2.958 3.384 2.464 3.384 1.895 L 1.884 1.895 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "row",
                    gap: 6,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexGrow: 1,
                  }}>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 500,
                      fontSize: 14,
                      lineHeight: "20px",
                      letterSpacing: "0.060em",
                      color: "var(--grayscale-500)",
                      flexGrow: 1,
                    }}>Customers</span>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  borderRadius: 8,
                  display: "flex",
                  flexDirection: "row",
                  gap: "calc(var(--radius-8) * 1px)",
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
                    height: 20,
                    overflow: "hidden",
                    flexShrink: 0,
                  }}>
                    <svg width={12.309} height={13.480} viewBox="0 0 12.309 13.480" fill="none" style={{
                      position: "absolute",
                      left: 4.891,
                      top: 2.909,
                      width: 12.309,
                      height: 13.48,
                      color: "var(--grayscale-500)",
                    }}>
                      <path d={"M 0 12.76 C -0.398 12.76 -0.72 13.083 -0.72 13.48 C -0.72 13.878 -0.398 14.2 0 14.2 L 0 12.76 Z M 12.302 10.543 L 11.582 10.542 L 11.582 10.543 L 12.302 10.543 Z M 12.309 1.362 L 13.029 1.362 L 13.029 1.362 L 12.309 1.362 Z M 11.123 0.549 L 10.795 -0.092 L 10.787 -0.088 L 11.123 0.549 Z M 10.601 0.824 L 10.934 1.463 L 10.937 1.461 L 10.601 0.824 Z M 9.604 0.853 L 9.312 1.51 L 9.317 1.513 L 9.604 0.853 Z M 8.129 0.196 L 8.421 -0.462 L 8.416 -0.465 L 8.129 0.196 Z M 6.264 0.196 L 5.977 -0.465 L 5.972 -0.462 L 6.264 0.196 Z M 4.789 0.853 L 5.076 1.513 L 5.081 1.51 L 4.789 0.853 Z M 3.792 0.824 L 3.456 1.461 L 3.458 1.462 L 3.792 0.824 Z M 3.27 0.549 L 3.606 -0.088 L 3.598 -0.092 L 3.27 0.549 Z M 1.364 1.362 L 1.364 4.807 L 2.804 4.807 L 2.804 1.362 L 1.364 1.362 Z M 1.364 4.807 L 1.364 11.396 L 2.804 11.396 L 2.804 4.807 L 1.364 4.807 Z M 1.364 11.396 C 1.364 12.15 0.754 12.76 0 12.76 L 0 14.2 C 1.549 14.2 2.804 12.945 2.804 11.396 L 1.364 11.396 Z M 0 14.2 L 9.71 14.2 L 9.71 12.76 L 0 12.76 L 0 14.2 Z M 9.71 14.2 C 10.715 14.2 11.577 13.855 12.176 13.163 C 12.762 12.486 13.022 11.564 13.022 10.543 L 11.582 10.543 C 11.582 11.336 11.38 11.882 11.087 12.22 C 10.807 12.544 10.372 12.76 9.71 12.76 L 9.71 14.2 Z M 13.022 10.543 L 13.029 1.362 L 11.589 1.361 L 11.582 10.542 L 13.022 10.543 Z M 13.029 1.362 C 13.029 0.254 11.906 -0.662 10.795 -0.092 L 11.452 1.19 C 11.47 1.18 11.479 1.181 11.483 1.181 C 11.489 1.182 11.501 1.184 11.517 1.195 C 11.547 1.216 11.589 1.266 11.589 1.362 L 13.029 1.362 Z M 10.787 -0.088 L 10.265 0.188 L 10.937 1.461 L 11.459 1.186 L 10.787 -0.088 Z M 10.267 0.186 C 10.158 0.244 10.027 0.251 9.892 0.192 L 9.317 1.513 C 9.833 1.737 10.421 1.731 10.934 1.463 L 10.267 0.186 Z M 9.897 0.195 L 8.421 -0.462 L 7.836 0.853 L 9.312 1.51 L 9.897 0.195 Z M 8.416 -0.465 C 7.632 -0.805 6.761 -0.805 5.977 -0.465 L 6.551 0.856 C 6.968 0.675 7.425 0.675 7.842 0.856 L 8.416 -0.465 Z M 5.972 -0.462 L 4.496 0.195 L 5.081 1.51 L 6.557 0.853 L 5.972 -0.462 Z M 4.501 0.192 C 4.366 0.251 4.234 0.243 4.126 0.187 L 3.458 1.462 C 3.971 1.731 4.561 1.737 5.076 1.513 L 4.501 0.192 Z M 4.128 0.188 L 3.606 -0.088 L 2.934 1.186 L 3.456 1.461 L 4.128 0.188 Z M 3.598 -0.092 C 2.482 -0.664 1.364 0.266 1.364 1.362 L 2.804 1.362 C 2.804 1.272 2.844 1.219 2.878 1.196 C 2.895 1.185 2.907 1.182 2.913 1.182 C 2.916 1.181 2.924 1.181 2.941 1.19 L 3.598 -0.092 Z"} fill="currentColor" fillRule="nonzero" />
                    </svg>
                    <svg width={2.987} height={3.802} viewBox="0 0 2.987 3.802" fill="none" style={{
                      position: "absolute",
                      left: 10.455,
                      top: 7.752,
                      width: 2.987,
                      height: 3.802,
                      color: "var(--grayscale-500)",
                    }}>
                      <path d={"M 2.716 0.72 C 3.113 0.72 3.436 0.398 3.436 0 C 3.436 -0.398 3.113 -0.72 2.716 -0.72 L 2.716 0.72 Z M 0.272 3.082 C -0.126 3.082 -0.448 3.405 -0.448 3.802 C -0.448 4.2 -0.126 4.522 0.272 4.522 L 0.272 3.082 Z M 2.716 -0.72 L 0.95 -0.72 L 0.95 0.72 L 2.716 0.72 L 2.716 -0.72 Z M 0.95 -0.72 C 0.028 -0.72 -0.72 0.028 -0.72 0.95 L 0.72 0.95 C 0.72 0.823 0.823 0.72 0.95 0.72 L 0.95 -0.72 Z M -0.72 0.95 C -0.72 1.874 0.028 2.621 0.95 2.621 L 0.95 1.181 C 0.823 1.181 0.72 1.078 0.72 0.95 L -0.72 0.95 Z M 0.95 2.621 L 2.037 2.621 L 2.037 1.181 L 0.95 1.181 L 0.95 2.621 Z M 2.037 2.621 C 2.164 2.621 2.267 2.724 2.267 2.852 L 3.707 2.852 C 3.707 1.929 2.96 1.181 2.037 1.181 L 2.037 2.621 Z M 2.267 2.852 C 2.267 2.979 2.164 3.082 2.037 3.082 L 2.037 4.522 C 2.959 4.522 3.707 3.774 3.707 2.852 L 2.267 2.852 Z M 2.037 3.082 L 0.272 3.082 L 0.272 4.522 L 2.037 4.522 L 2.037 3.082 Z"} fill="currentColor" fillRule="nonzero" />
                    </svg>
                    <svg width={1.440} height={5.403} viewBox="-0.720 0 1.440 5.403" fill="none" style={{
                      position: "absolute",
                      left: 11.948,
                      top: 6.948,
                      width: 1.4399999380111694,
                      height: 5.403,
                      color: "var(--grayscale-500)",
                    }}>
                      <path d={"M 0.72 4.605 C 0.72 4.207 0.398 3.885 0 3.885 C -0.398 3.885 -0.72 4.207 -0.72 4.605 L 0.72 4.605 Z M -0.72 5.403 C -0.72 5.8 -0.398 6.123 0 6.123 C 0.398 6.123 0.72 5.8 0.72 5.403 L -0.72 5.403 Z M 0.72 0 C 0.72 -0.398 0.398 -0.72 0 -0.72 C -0.398 -0.72 -0.72 -0.398 -0.72 0 L 0.72 0 Z M -0.72 0.805 C -0.72 1.202 -0.398 1.525 0 1.525 C 0.398 1.525 0.72 1.202 0.72 0.805 L -0.72 0.805 Z M -0.72 4.605 L -0.72 5.403 L 0.72 5.403 L 0.72 4.605 L -0.72 4.605 Z M -0.72 0 L -0.72 0.805 L 0.72 0.805 L 0.72 0 L -0.72 0 Z"} fill="currentColor" fillRule="nonzero" />
                    </svg>
                    <svg width={4.174} height={8.842} viewBox="0 0 4.174 8.842" fill="none" style={{
                      position: "absolute",
                      left: 2.8,
                      top: 7.547,
                      width: 4.174,
                      height: 8.842,
                      color: "var(--grayscale-500)",
                    }}>
                      <path d={"M 2.091 9.562 C 2.488 9.562 2.811 9.24 2.811 8.842 C 2.811 8.445 2.488 8.122 2.091 8.122 L 2.091 9.562 Z M 0.615 8.235 L 0.106 8.744 L 0.106 8.744 L 0.615 8.235 Z M 1.187 0.149 L 1.523 -0.488 L 1.516 -0.492 L 1.187 0.149 Z M 1.709 0.424 L 1.373 1.061 L 1.375 1.062 L 1.709 0.424 Z M 2.705 0.452 L 2.993 1.112 L 2.998 1.11 L 2.705 0.452 Z M 3.701 0.008 L 3.995 0.665 L 4.005 0.661 L 3.701 0.008 Z M 3.835 0.805 C 4.185 0.992 4.621 0.86 4.809 0.51 C 4.997 0.159 4.865 -0.277 4.514 -0.465 L 3.835 0.805 Z M 2.091 8.122 C 1.708 8.122 1.367 7.969 1.124 7.726 L 0.106 8.744 C 0.611 9.25 1.315 9.562 2.091 9.562 L 2.091 8.122 Z M 1.124 7.726 C 0.871 7.473 0.72 7.131 0.72 6.759 L -0.72 6.759 C -0.72 7.531 -0.404 8.234 0.106 8.744 L 1.124 7.726 Z M 0.72 6.759 L 0.72 0.961 L -0.72 0.961 L -0.72 6.759 L 0.72 6.759 Z M 0.72 0.961 C 0.72 0.866 0.762 0.815 0.792 0.795 C 0.808 0.784 0.82 0.781 0.827 0.781 C 0.831 0.78 0.84 0.78 0.859 0.789 L 1.516 -0.492 C 0.405 -1.061 -0.72 -0.149 -0.72 0.961 L 0.72 0.961 Z M 0.851 0.786 L 1.373 1.061 L 2.045 -0.213 L 1.523 -0.488 L 0.851 0.786 Z M 1.375 1.062 C 1.888 1.331 2.478 1.337 2.993 1.112 L 2.417 -0.208 C 2.283 -0.149 2.152 -0.157 2.043 -0.214 L 1.375 1.062 Z M 2.998 1.11 L 3.995 0.665 L 3.408 -0.65 L 2.412 -0.205 L 2.998 1.11 Z M 4.005 0.661 C 3.909 0.705 3.825 0.716 3.774 0.719 C 3.723 0.722 3.684 0.717 3.666 0.714 C 3.631 0.708 3.618 0.702 3.638 0.709 C 3.654 0.715 3.679 0.726 3.715 0.743 C 3.751 0.76 3.791 0.781 3.835 0.805 L 4.514 -0.465 C 4.41 -0.521 4.277 -0.589 4.147 -0.638 C 4.083 -0.662 3.994 -0.692 3.894 -0.708 C 3.814 -0.72 3.613 -0.745 3.398 -0.645 L 4.005 0.661 Z"} fill="currentColor" fillRule="nonzero" />
                    </svg>
                  </div>
                  <div style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "row",
                    gap: 6,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexGrow: 1,
                  }}>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 500,
                      fontSize: 14,
                      lineHeight: "20px",
                      letterSpacing: "0.060em",
                      color: "var(--grayscale-500)",
                      flexGrow: 1,
                    }}>Invoices</span>
                  </div>
                </div>
              </div>
            </div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 8,
              justifyContent: "flex-end",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "relative",
                fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 14,
                lineHeight: "20px",
                letterSpacing: "0.060em",
                color: "var(--grayscale-500)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Others</span>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: 4,
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <div style={{
                  position: "relative",
                  borderRadius: 8,
                  display: "flex",
                  flexDirection: "row",
                  gap: "calc(var(--radius-8) * 1px)",
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
                    height: 20,
                    overflow: "hidden",
                    flexShrink: 0,
                  }}>
                    <svg width={15} height={15} viewBox="0 0 15 15" fill="none" style={{
                      position: "absolute",
                      left: 2.5,
                      top: 2.5,
                      width: 15,
                      height: 15,
                      color: "var(--grayscale-500)",
                    }}>
                      <path d={"M 15.75 7.5 C 15.75 2.943 12.057 -0.75 7.5 -0.75 L 7.5 0.75 C 11.228 0.75 14.25 3.772 14.25 7.5 L 15.75 7.5 Z M 7.5 -0.75 C 2.943 -0.75 -0.75 2.943 -0.75 7.5 L 0.75 7.5 C 0.75 3.772 3.772 0.75 7.5 0.75 L 7.5 -0.75 Z M -0.75 7.5 C -0.75 12.056 2.943 15.75 7.5 15.75 L 7.5 14.25 C 3.772 14.25 0.75 11.227 0.75 7.5 L -0.75 7.5 Z M 7.5 15.75 C 12.057 15.75 15.75 12.056 15.75 7.5 L 14.25 7.5 C 14.25 11.227 11.228 14.25 7.5 14.25 L 7.5 15.75 Z"} fill="currentColor" fillRule="nonzero" />
                    </svg>
                    <svg width={1.500} height={0.024} viewBox="-0.750 0 1.500 0.024" fill="none" style={{
                      position: "absolute",
                      left: 9.956,
                      top: 13.497,
                      width: 1.5,
                      height: 0.024,
                      color: "var(--grayscale-500)",
                    }}>
                      <path d={"M -0.75 0.024 C -0.75 0.438 -0.414 0.774 0 0.774 C 0.414 0.774 0.75 0.438 0.75 0.024 L -0.75 0.024 Z M 0.75 0 C 0.75 -0.414 0.414 -0.75 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 L 0.75 0 Z M 0.75 0.024 L 0.75 0 L -0.75 0 L -0.75 0.024 L 0.75 0.024 Z"} fill="currentColor" fillRule="nonzero" />
                    </svg>
                    <svg width={3.980} height={4.954} viewBox="0 0 3.980 4.954" fill="none" style={{
                      position: "absolute",
                      left: 8.169,
                      top: 6.504,
                      width: 3.98,
                      height: 4.954,
                      color: "var(--grayscale-500)",
                    }}>
                      <path d={"M 1.036 4.964 C 1.042 5.378 1.382 5.709 1.796 5.704 C 2.21 5.699 2.542 5.358 2.536 4.944 L 1.036 4.964 Z M 2.954 3.611 L 2.592 2.954 L 2.582 2.959 L 2.954 3.611 Z M -0.75 1.991 C -0.75 2.405 -0.414 2.741 0 2.741 C 0.414 2.741 0.75 2.405 0.75 1.991 L -0.75 1.991 Z M 2.536 4.944 C 2.535 4.845 2.563 4.774 2.68 4.669 C 2.833 4.531 3.027 4.432 3.325 4.262 L 2.582 2.959 C 2.379 3.075 1.984 3.277 1.677 3.554 C 1.333 3.863 1.028 4.32 1.036 4.964 L 2.536 4.944 Z M 3.316 4.267 C 4.109 3.831 4.73 3.07 4.73 1.991 L 3.23 1.991 C 3.23 2.401 3.023 2.716 2.592 2.954 L 3.316 4.267 Z M 4.73 1.991 C 4.73 0.471 3.5 -0.75 1.991 -0.75 L 1.991 0.75 C 2.675 0.75 3.23 1.302 3.23 1.991 L 4.73 1.991 Z M 1.991 -0.75 C 0.472 -0.75 -0.75 0.472 -0.75 1.991 L 0.75 1.991 C 0.75 1.3 1.3 0.75 1.991 0.75 L 1.991 -0.75 Z"} fill="currentColor" fillRule="nonzero" />
                    </svg>
                  </div>
                  <div style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "row",
                    gap: 6,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexGrow: 1,
                  }}>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 500,
                      fontSize: 14,
                      lineHeight: "20px",
                      letterSpacing: "0.060em",
                      color: "var(--grayscale-500)",
                      flexGrow: 1,
                    }}>Help</span>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  borderRadius: 8,
                  display: "flex",
                  flexDirection: "row",
                  gap: "calc(var(--radius-8) * 1px)",
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
                    height: 20,
                    overflow: "hidden",
                    flexShrink: 0,
                  }}>
                    <div style={{
                      position: "absolute",
                      left: 2.732,
                      top: 1.898,
                      width: 14.822,
                      height: 16.018,
                      overflow: "hidden",
                    }}>
                      <div style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: 17.787,
                        height: 19.222,
                        overflow: "hidden",
                      }}>
                        <svg width={17.787} height={19.222} viewBox="0 0 17.787 19.222" fill="none" style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          width: 17.787,
                          height: 19.222,
                          color: "var(--icon-secondary)",
                        }}>
                          <path d={"M 17.528 5.346 L 18.278 5.346 C 18.278 5.214 18.244 5.085 18.178 4.971 L 17.528 5.346 Z M 16.906 4.265 L 16.256 4.64 L 16.256 4.64 L 16.906 4.265 Z M 14.297 3.561 L 13.924 2.91 L 13.916 2.914 L 14.297 3.561 Z M 11.688 2.883 L 12.335 2.504 L 12.333 2.501 L 11.688 2.883 Z M 11.432 1.968 L 10.682 1.946 C 10.682 1.956 10.682 1.966 10.682 1.976 L 11.432 1.968 Z M 9.519 0 L 9.519 0.75 L 9.519 0.75 L 9.519 0 Z M 6.361 1.913 L 7.111 1.924 C 7.111 1.919 7.111 1.914 7.111 1.909 L 6.361 1.913 Z M 4.448 3.799 L 4.44 4.549 L 4.448 4.549 L 4.448 3.799 Z M 3.533 3.542 L 3.916 2.897 L 3.906 2.892 L 3.533 3.542 Z M 0.924 4.247 L 1.565 4.637 C 1.568 4.632 1.571 4.627 1.574 4.622 L 0.924 4.247 Z M 0.256 5.346 L -0.385 4.956 C -0.388 4.961 -0.391 4.966 -0.394 4.971 L 0.256 5.346 Z M 0.951 7.954 L 0.574 8.603 L 0.576 8.604 L 0.951 7.954 Z M 0.951 11.268 L 0.576 10.618 L 0.576 10.619 L 0.951 11.268 Z M 0.256 13.867 L -0.394 14.242 L -0.393 14.243 L 0.256 13.867 Z M 0.887 14.957 L 1.543 14.593 C 1.541 14.589 1.539 14.585 1.536 14.58 L 0.887 14.957 Z M 2.038 15.869 L 2.243 15.148 L 2.038 15.869 Z M 3.496 15.698 L 3.863 16.352 L 3.874 16.346 L 3.496 15.698 Z M 6.096 16.394 L 5.445 16.766 L 5.451 16.776 L 6.096 16.394 Z M 6.352 17.309 L 7.102 17.309 L 7.102 17.301 L 6.352 17.309 Z M 11.432 17.318 L 12.182 17.322 L 12.182 17.314 L 11.432 17.318 Z M 11.99 15.963 L 12.52 16.493 L 12.52 16.493 L 11.99 15.963 Z M 13.345 15.405 L 13.365 14.655 C 13.36 14.655 13.354 14.655 13.349 14.655 L 13.345 15.405 Z M 14.26 15.661 L 14.635 15.011 L 14.633 15.01 L 14.26 15.661 Z M 16.869 14.966 L 16.226 14.58 L 16.221 14.589 L 16.869 14.966 Z M 17.528 13.867 L 18.171 14.253 L 18.176 14.245 L 17.528 13.867 Z M 17.723 12.418 L 18.447 12.225 L 18.447 12.225 L 17.723 12.418 Z M 15.942 10.099 L 16.667 9.906 L 16.667 9.906 L 15.942 10.099 Z M 16.137 8.65 L 16.785 9.027 L 16.788 9.023 L 16.137 8.65 Z M 16.832 7.954 L 17.205 8.605 L 17.211 8.602 L 16.832 7.954 Z M 17.528 5.355 L 16.778 5.355 C 16.778 5.485 16.812 5.613 16.877 5.726 L 17.528 5.355 Z M 18.178 4.971 L 17.555 3.891 L 16.256 4.64 L 16.878 5.72 L 18.178 4.971 Z M 17.556 3.891 C 16.823 2.619 15.198 2.18 13.924 2.91 L 14.67 4.211 C 15.226 3.893 15.936 4.084 16.256 4.64 L 17.556 3.891 Z M 13.916 2.914 C 13.652 3.07 13.337 3.114 13.041 3.037 L 12.664 4.489 C 13.346 4.666 14.07 4.565 14.678 4.207 L 13.916 2.914 Z M 13.041 3.037 C 12.744 2.96 12.49 2.768 12.335 2.504 L 11.041 3.263 C 11.398 3.871 11.982 4.312 12.664 4.489 L 13.041 3.037 Z M 12.333 2.501 C 12.236 2.337 12.184 2.15 12.182 1.96 L 10.682 1.976 C 10.687 2.43 10.811 2.875 11.043 3.266 L 12.333 2.501 Z M 12.182 1.989 C 12.202 1.27 11.931 0.573 11.429 0.057 L 10.354 1.102 C 10.573 1.328 10.691 1.632 10.682 1.946 L 12.182 1.989 Z M 11.429 0.057 C 10.928 -0.459 10.238 -0.75 9.519 -0.75 L 9.519 0.75 C 9.834 0.75 10.135 0.877 10.354 1.102 L 11.429 0.057 Z M 9.519 -0.75 L 8.265 -0.75 L 8.265 0.75 L 9.519 0.75 L 9.519 -0.75 Z M 8.265 -0.75 C 7.559 -0.75 6.882 -0.469 6.384 0.032 L 7.447 1.09 C 7.664 0.872 7.958 0.75 8.265 0.75 L 8.265 -0.75 Z M 6.384 0.032 C 5.886 0.532 5.608 1.211 5.611 1.917 L 7.111 1.909 C 7.11 1.602 7.23 1.308 7.447 1.09 L 6.384 0.032 Z M 5.611 1.902 C 5.602 2.538 5.084 3.049 4.448 3.049 L 4.448 4.549 C 5.904 4.549 7.09 3.38 7.111 1.924 L 5.611 1.902 Z M 4.456 3.049 C 4.266 3.047 4.079 2.995 3.915 2.897 L 3.15 4.187 C 3.541 4.419 3.986 4.544 4.44 4.549 L 4.456 3.049 Z M 3.906 2.892 C 2.632 2.162 1.007 2.6 0.274 3.873 L 1.574 4.622 C 1.894 4.066 2.603 3.874 3.16 4.193 L 3.906 2.892 Z M 0.283 3.857 L -0.385 4.956 L 0.897 5.735 L 1.565 4.637 L 0.283 3.857 Z M -0.394 4.971 C -1.126 6.242 -0.693 7.865 0.574 8.603 L 1.329 7.306 C 0.775 6.984 0.586 6.275 0.906 5.72 L -0.394 4.971 Z M 0.576 8.604 C 0.936 8.812 1.158 9.195 1.158 9.611 L 2.658 9.611 C 2.658 8.66 2.15 7.78 1.326 7.305 L 0.576 8.604 Z M 1.158 9.611 C 1.158 10.027 0.936 10.41 0.576 10.618 L 1.326 11.917 C 2.15 11.442 2.658 10.562 2.658 9.611 L 1.158 9.611 Z M 0.576 10.619 C -0.692 11.352 -1.126 12.974 -0.394 14.242 L 0.905 13.492 C 0.587 12.941 0.776 12.236 1.327 11.917 L 0.576 10.619 Z M -0.393 14.243 L 0.239 15.333 L 1.536 14.58 L 0.905 13.491 L -0.393 14.243 Z M 0.231 15.32 C 0.575 15.94 1.151 16.397 1.833 16.591 L 2.243 15.148 C 1.945 15.063 1.693 14.864 1.543 14.593 L 0.231 15.32 Z M 1.833 16.591 C 2.514 16.784 3.245 16.699 3.863 16.352 L 3.129 15.044 C 2.859 15.195 2.54 15.233 2.243 15.148 L 1.833 16.591 Z M 3.874 16.346 C 4.138 16.192 4.452 16.15 4.747 16.229 L 5.135 14.78 C 4.453 14.597 3.727 14.695 3.118 15.05 L 3.874 16.346 Z M 4.747 16.229 C 5.042 16.308 5.293 16.501 5.445 16.766 L 6.747 16.021 C 6.396 15.409 5.816 14.962 5.135 14.78 L 4.747 16.229 Z M 5.451 16.776 C 5.548 16.94 5.6 17.126 5.602 17.317 L 7.102 17.301 C 7.097 16.847 6.972 16.402 6.741 16.011 L 5.451 16.776 Z M 5.602 17.309 C 5.602 18.78 6.794 19.972 8.265 19.972 L 8.265 18.472 C 7.623 18.472 7.102 17.951 7.102 17.309 L 5.602 17.309 Z M 8.265 19.972 L 9.519 19.972 L 9.519 18.472 L 8.265 18.472 L 8.265 19.972 Z M 9.519 19.972 C 10.985 19.972 12.175 18.787 12.182 17.322 L 10.682 17.314 C 10.679 17.955 10.159 18.472 9.519 18.472 L 9.519 19.972 Z M 12.182 17.314 C 12.18 17.007 12.302 16.711 12.52 16.493 L 11.459 15.432 C 10.958 15.933 10.679 16.613 10.682 17.322 L 12.182 17.314 Z M 12.52 16.493 C 12.738 16.275 13.033 16.154 13.341 16.155 L 13.349 14.655 C 12.64 14.652 11.96 14.931 11.459 15.432 L 12.52 16.493 Z M 13.325 16.155 C 13.523 16.16 13.716 16.214 13.888 16.312 L 14.633 15.01 C 14.246 14.789 13.81 14.667 13.365 14.655 L 13.325 16.155 Z M 13.886 16.311 C 15.157 17.043 16.78 16.61 17.517 15.343 L 16.221 14.589 C 15.899 15.142 15.19 15.331 14.635 15.011 L 13.886 16.311 Z M 17.512 15.352 L 18.171 14.253 L 16.885 13.481 L 16.226 14.58 L 17.512 15.352 Z M 18.176 14.245 C 18.532 13.634 18.629 12.908 18.447 12.225 L 16.998 12.612 C 17.077 12.908 17.035 13.224 16.88 13.49 L 18.176 14.245 Z M 18.447 12.225 C 18.265 11.543 17.819 10.961 17.206 10.608 L 16.458 11.909 C 16.725 12.062 16.919 12.315 16.998 12.612 L 18.447 12.225 Z M 17.206 10.608 C 16.94 10.455 16.746 10.202 16.667 9.906 L 15.218 10.292 C 15.4 10.975 15.846 11.556 16.458 11.909 L 17.206 10.608 Z M 16.667 9.906 C 16.588 9.609 16.63 9.293 16.785 9.027 L 15.489 8.272 C 15.133 8.883 15.036 9.61 15.218 10.292 L 16.667 9.906 Z M 16.788 9.023 C 16.887 8.849 17.031 8.705 17.205 8.605 L 16.46 7.303 C 16.054 7.536 15.718 7.872 15.486 8.277 L 16.788 9.023 Z M 17.211 8.602 C 18.471 7.865 18.903 6.251 18.179 4.983 L 16.877 5.726 C 17.193 6.28 17.004 6.985 16.454 7.307 L 17.211 8.602 Z M 18.278 5.355 L 18.278 5.346 L 16.778 5.346 L 16.778 5.355 L 18.278 5.355 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                        <svg width={5.272} height={5.272} viewBox="0 0 5.272 5.272" fill="none" style={{
                          position: "absolute",
                          left: 6.261,
                          top: 6.975,
                          width: 5.272,
                          height: 5.272,
                          color: "var(--icon-secondary)",
                        }}>
                          <path d={"M 4.522 2.636 C 4.522 3.678 3.678 4.522 2.636 4.522 L 2.636 6.022 C 4.506 6.022 6.022 4.506 6.022 2.636 L 4.522 2.636 Z M 2.636 4.522 C 1.594 4.522 0.75 3.678 0.75 2.636 L -0.75 2.636 C -0.75 4.506 0.766 6.022 2.636 6.022 L 2.636 4.522 Z M 0.75 2.636 C 0.75 1.594 1.594 0.75 2.636 0.75 L 2.636 -0.75 C 0.766 -0.75 -0.75 0.766 -0.75 2.636 L 0.75 2.636 Z M 2.636 0.75 C 3.678 0.75 4.522 1.594 4.522 2.636 L 6.022 2.636 C 6.022 0.766 4.506 -0.75 2.636 -0.75 L 2.636 0.75 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "row",
                    gap: 6,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexGrow: 1,
                  }}>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 500,
                      fontSize: 14,
                      lineHeight: "20px",
                      letterSpacing: "0.060em",
                      color: "var(--grayscale-500)",
                      flexGrow: 1,
                    }}>Settings</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 10,
            padding: "20px 20px 20px 20px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 9,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                width: 48,
                height: 48,
                borderRadius: 150,
                display: "flex",
                flexDirection: "row",
                gap: 10,
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
              }}>
                <div className="fig-asset-c1c0b9ac7492426e" style={{
                  position: "relative",
                  width: 48,
                  borderRadius: 50,
                  flexShrink: 0,
                  alignSelf: "stretch",
                }} />
                <div style={{
                  position: "absolute",
                  left: 36,
                  top: 36,
                  width: 12,
                  height: 12,
                  overflow: "hidden",
                  borderRadius: 360,
                  boxShadow: "inset 0 0 0 1px var(--general-white)",
                }}>
                  <svg width={12} height={12} viewBox="0 0 12 12" fill="none" style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 12,
                    height: 12,
                    color: "var(--badge-success)",
                  }}>
                    <path d={"M 6 12 C 9.314 12 12 9.314 12 6 C 12 2.686 9.314 0 6 0 C 2.686 0 0 2.686 0 6 C 0 9.314 2.686 12 6 12 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
              </div>
              <div style={{
                position: "relative",
                width: 151,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 124,
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  flexShrink: 0,
                }}>
                  <span style={{
                    position: "relative",
                    fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 500,
                    fontSize: 16,
                    lineHeight: "22px",
                    color: "var(--general-white)",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>Tahsan Khan</span>
                  <span style={{
                    position: "relative",
                    fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 12,
                    lineHeight: "16px",
                    color: "var(--grayscale-500)",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>tahsankhan@gmail.com</span>
                </div>
                <div style={{
                    position: "relative",
                    width: 16,
                    height: 16,
                    flexShrink: 0,
                    color: "rgb(145,153,146)",
                  }}>
                  <InfoMenu2 style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0", color: "rgb(145,153,146)" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <TopBar style={{
            position: "absolute",
            left: 272,
            top: 12,
            width: 1156,
          }} />
        <div style={{
          position: "absolute",
          left: 272,
          top: 92,
          width: 1156,
          display: "flex",
          flexDirection: "column",
          gap: 16,
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 106,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              width: 855,
              fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 18,
              lineHeight: "24px",
              color: "var(--text-primary)",
              flexShrink: 0,
            }}>Reports Center</span>
            <div style={{
              position: "relative",
              height: 36,
              overflow: "hidden",
              borderRadius: 8,
              background: "linear-gradient(180deg, rgb(39,163,118) 0.00%, rgb(22,118,83) 100.00%)",
              boxShadow: "0px 0px 0px 1px rgb(31,130,94), 0px 4px 12px -2px rgba(31,130,94,0.72), 0px 0px 0px 2px rgb(245,253,250)",
              display: "flex",
              flexDirection: "row",
              gap: 6,
              padding: "12px 12px 12px 12px",
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
                overflow: "hidden",
                flexShrink: 0,
              }}>
                <svg width={10} height={1.500} viewBox="0 -0.750 10 1.500" fill="none" style={{
                  position: "absolute",
                  left: 5,
                  top: 10,
                  width: 10,
                  height: 1.5,
                  color: "var(--general-white)",
                }}>
                  <path d={"M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 -0.75 Z M 10 0.75 C 10.414 0.75 10.75 0.414 10.75 0 C 10.75 -0.414 10.414 -0.75 10 -0.75 L 10 0.75 Z M 0 0.75 L 10 0.75 L 10 -0.75 L 0 -0.75 L 0 0.75 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <svg width={1.500} height={10} viewBox="-0.750 0 1.500 10" fill="none" style={{
                  position: "absolute",
                  left: 10,
                  top: 5,
                  width: 1.5,
                  height: 10,
                  color: "var(--general-white)",
                }}>
                  <path d={"M 0.75 0 C 0.75 -0.414 0.414 -0.75 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 L 0.75 0 Z M -0.75 10 C -0.75 10.414 -0.414 10.75 0 10.75 C 0.414 10.75 0.75 10.414 0.75 10 L -0.75 10 Z M -0.75 0 L -0.75 10 L 0.75 10 L 0.75 0 L -0.75 0 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
              <span style={{
                position: "relative",
                fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 500,
                fontSize: 14,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                lineHeight: "20px",
                letterSpacing: "0.060em",
                color: "var(--general-white)",
                flexShrink: 0,
              }}>Create customer report</span>
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 1012,
            overflow: "hidden",
            borderRadius: 8,
            backgroundColor: "rgb(255,255,255)",
            display: "flex",
            flexDirection: "column",
            gap: 10,
            padding: "4px 4px 4px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
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
              <TabMenu
                style={{ position: "relative", width: 123, flexShrink: 0 }}
                text1={"Custom Reports"}
                state={"active"}
              />
              <TabMenu
                style={{ position: "relative", width: 67, flexShrink: 0 }}
                text1={"Sales"}
                state={"default"}
              />
              <TabMenu
                style={{ position: "relative", width: 84, flexShrink: 0 }}
                text1={"Inventory"}
                state={"default"}
              />
              <TabMenu
                style={{ position: "relative", width: 107, flexShrink: 0 }}
                text1={"Receivables"}
                state={"default"}
              />
              <TabMenu
                style={{ position: "relative", width: 142, flexShrink: 0 }}
                text1={"Payments Received"}
                state={"default"}
              />
              <TabMenu
                style={{ position: "relative", width: 86, flexShrink: 0 }}
                text1={"Payables"}
                state={"default"}
              />
              <TabMenu
                style={{ position: "relative", width: 176, flexShrink: 0 }}
                text1={"Purchases and Expenses"}
                state={"default"}
              />
              <TabMenu
                style={{ position: "relative", width: 77, flexShrink: 0 }}
                text1={"Activity"}
                state={"default"}
              />
              <TabMenu
                style={{ position: "relative", width: 94, flexShrink: 0 }}
                text1={"Automation"}
                state={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            height: 818,
            overflow: "hidden",
            borderRadius: 12,
            backgroundColor: "var(--background-bg-secondary)",
            boxShadow: "inset 0 0 0 1px var(--border-border-primary)",
            display: "flex",
            flexDirection: "column",
            gap: 10,
            padding: "16px 0px 16px 0px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 16,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                width: 1124,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
              }}>
                <SearchInput
                  style={{
                    position: "relative",
                    width: 272,
                    height: 36,
                    flexShrink: 0,
                  }}
                  text1={"Search reports"}
                />
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
                    width: 162,
                    overflow: "hidden",
                    borderRadius: 8,
                    backgroundColor: "var(--background-bg-secondary)",
                    boxShadow: "inset 0 0 0 1px var(--border-border-primary)",
                    display: "flex",
                    flexDirection: "row",
                    gap: 8,
                    padding: "8px 12px 8px 12px",
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
                      overflow: "hidden",
                      flexShrink: 0,
                    }}>
                      <div style={{
                        position: "absolute",
                        left: 3,
                        top: 3,
                        width: 18,
                        height: 18,
                        overflow: "hidden",
                      }}>
                        <div style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          width: 18,
                          height: 18,
                          overflow: "hidden",
                        }}>
                          <svg width={18} height={18} viewBox="0 0 18 18" fill="none" style={{
                            position: "absolute",
                            left: 0,
                            top: 0,
                            width: 18,
                            height: 18,
                            color: "var(--icon-secondary)",
                          }}>
                            <path d={"M 0.689 4.272 L 0.143 4.786 L 0.143 4.786 L 0.689 4.272 Z M 5.535 9.424 L 4.989 9.938 C 5.146 10.106 5.372 10.191 5.6 10.171 C 5.829 10.151 6.036 10.028 6.162 9.835 L 5.535 9.424 Z M 5.537 9.421 L 6.074 8.897 C 5.915 8.734 5.691 8.653 5.465 8.675 C 5.239 8.697 5.035 8.82 4.91 9.01 L 5.537 9.421 Z M 7.584 17.952 L 7.942 18.611 L 7.943 18.61 L 7.584 17.952 Z M 10.344 16.448 L 10.702 17.106 L 10.703 17.106 L 10.344 16.448 Z M 12.466 9.424 L 13.004 9.947 L 13.012 9.938 L 12.466 9.424 Z M 17.312 4.272 L 17.858 4.786 L 17.859 4.785 L 17.312 4.272 Z M 1.565 -0.75 C 0.275 -0.75 -0.75 0.31 -0.75 1.59 L 0.75 1.59 C 0.75 1.116 1.127 0.75 1.565 0.75 L 1.565 -0.75 Z M -0.75 1.59 L -0.75 2.526 L 0.75 2.526 L 0.75 1.59 L -0.75 1.59 Z M -0.75 2.526 C -0.75 3.366 -0.431 4.175 0.143 4.786 L 1.236 3.758 C 0.925 3.428 0.75 2.987 0.75 2.526 L -0.75 2.526 Z M 0.143 4.786 L 4.989 9.938 L 6.081 8.911 L 1.236 3.758 L 0.143 4.786 Z M 6.162 9.835 L 6.164 9.832 L 4.91 9.01 L 4.908 9.013 L 6.162 9.835 Z M 5.001 9.945 C 5.798 10.762 6.249 11.868 6.249 13.023 L 7.749 13.023 C 7.749 11.479 7.147 9.996 6.074 8.897 L 5.001 9.945 Z M 6.249 13.023 L 6.249 17.595 L 7.749 17.595 L 7.749 13.023 L 6.249 13.023 Z M 6.249 17.595 C 6.249 18.448 7.158 19.036 7.942 18.611 L 7.226 17.293 C 7.479 17.155 7.749 17.353 7.749 17.595 L 6.249 17.595 Z M 7.943 18.61 L 10.702 17.106 L 9.985 15.789 L 7.225 17.293 L 7.943 18.61 Z M 10.703 17.106 C 11.364 16.745 11.77 16.049 11.77 15.298 L 10.27 15.298 C 10.27 15.508 10.156 15.696 9.984 15.79 L 10.703 17.106 Z M 11.77 15.298 L 11.77 13.011 L 10.27 13.011 L 10.27 15.298 L 11.77 15.298 Z M 11.77 13.011 C 11.77 11.862 12.215 10.761 13.004 9.947 L 11.928 8.902 C 10.863 9.999 10.27 11.476 10.27 13.011 L 11.77 13.011 Z M 13.012 9.938 L 17.858 4.786 L 16.765 3.758 L 11.92 8.911 L 13.012 9.938 Z M 17.859 4.785 C 18.431 4.175 18.75 3.366 18.75 2.526 L 17.25 2.526 C 17.25 2.987 17.075 3.428 16.765 3.759 L 17.859 4.785 Z M 18.75 2.526 L 18.75 1.59 L 17.25 1.59 L 17.25 2.526 L 18.75 2.526 Z M 18.75 1.59 C 18.75 0.311 17.726 -0.75 16.436 -0.75 L 16.436 0.75 C 16.874 0.75 17.25 1.115 17.25 1.59 L 18.75 1.59 Z M 16.436 -0.75 L 1.565 -0.75 L 1.565 0.75 L 16.436 0.75 L 16.436 -0.75 Z"} fill="currentColor" fillRule="nonzero" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 500,
                      fontSize: 14,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      lineHeight: "20px",
                      letterSpacing: "0.060em",
                      color: "rgb(12,17,15)",
                      flexShrink: 0,
                    }}>Parent Report : All</span>
                    <div style={{
                      position: "relative",
                      width: 20,
                      height: 20,
                      overflow: "hidden",
                      flexShrink: 0,
                    }}>
                      <div style={{
                        position: "absolute",
                        left: 4.167,
                        top: 7.083,
                        width: 11.667,
                        height: 5.833,
                        overflow: "hidden",
                      }}>
                        <div style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          width: 14,
                          height: 7,
                          overflow: "hidden",
                        }}>
                          <svg width={14} height={7} viewBox="0 0 14 7" fill="none" style={{
                            position: "absolute",
                            left: 0,
                            top: 0,
                            width: 14,
                            height: 7,
                            color: "var(--icon-secondary)",
                          }}>
                            <path d={"M 14.53 0.53 C 14.823 0.237 14.823 -0.237 14.53 -0.53 C 14.237 -0.823 13.763 -0.823 13.47 -0.53 L 14.53 0.53 Z M 7 7 L 6.47 7.53 C 6.763 7.823 7.237 7.823 7.53 7.53 L 7 7 Z M 0.53 -0.53 C 0.237 -0.823 -0.237 -0.823 -0.53 -0.53 C -0.823 -0.237 -0.823 0.237 -0.53 0.53 L 0.53 -0.53 Z M 13.47 -0.53 L 6.47 6.47 L 7.53 7.53 L 14.53 0.53 L 13.47 -0.53 Z M 7.53 6.47 L 0.53 -0.53 L -0.53 0.53 L 6.47 7.53 L 7.53 6.47 Z"} fill="currentColor" fillRule="nonzero" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{
                    position: "relative",
                    width: 169,
                    overflow: "hidden",
                    borderRadius: 8,
                    backgroundColor: "var(--background-bg-secondary)",
                    boxShadow: "inset 0 0 0 1px var(--border-border-primary)",
                    display: "flex",
                    flexDirection: "row",
                    gap: 8,
                    padding: "8px 12px 8px 12px",
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
                      overflow: "hidden",
                      flexShrink: 0,
                    }}>
                      <div style={{
                        position: "absolute",
                        left: 3,
                        top: 3,
                        width: 18,
                        height: 18,
                        overflow: "hidden",
                      }}>
                        <div style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          width: 18,
                          height: 18,
                          overflow: "hidden",
                        }}>
                          <svg width={18} height={18} viewBox="0 0 18 18" fill="none" style={{
                            position: "absolute",
                            left: 0,
                            top: 0,
                            width: 18,
                            height: 18,
                            color: "var(--icon-secondary)",
                          }}>
                            <path d={"M 0.689 4.272 L 0.143 4.786 L 0.143 4.786 L 0.689 4.272 Z M 5.535 9.424 L 4.989 9.938 C 5.146 10.106 5.372 10.191 5.6 10.171 C 5.829 10.151 6.036 10.028 6.162 9.835 L 5.535 9.424 Z M 5.537 9.421 L 6.074 8.897 C 5.915 8.734 5.691 8.653 5.465 8.675 C 5.239 8.697 5.035 8.82 4.91 9.01 L 5.537 9.421 Z M 7.584 17.952 L 7.942 18.611 L 7.943 18.61 L 7.584 17.952 Z M 10.344 16.448 L 10.702 17.106 L 10.703 17.106 L 10.344 16.448 Z M 12.466 9.424 L 13.004 9.947 L 13.012 9.938 L 12.466 9.424 Z M 17.312 4.272 L 17.858 4.786 L 17.859 4.785 L 17.312 4.272 Z M 1.565 -0.75 C 0.275 -0.75 -0.75 0.31 -0.75 1.59 L 0.75 1.59 C 0.75 1.116 1.127 0.75 1.565 0.75 L 1.565 -0.75 Z M -0.75 1.59 L -0.75 2.526 L 0.75 2.526 L 0.75 1.59 L -0.75 1.59 Z M -0.75 2.526 C -0.75 3.366 -0.431 4.175 0.143 4.786 L 1.236 3.758 C 0.925 3.428 0.75 2.987 0.75 2.526 L -0.75 2.526 Z M 0.143 4.786 L 4.989 9.938 L 6.081 8.911 L 1.236 3.758 L 0.143 4.786 Z M 6.162 9.835 L 6.164 9.832 L 4.91 9.01 L 4.908 9.013 L 6.162 9.835 Z M 5.001 9.945 C 5.798 10.762 6.249 11.868 6.249 13.023 L 7.749 13.023 C 7.749 11.479 7.147 9.996 6.074 8.897 L 5.001 9.945 Z M 6.249 13.023 L 6.249 17.595 L 7.749 17.595 L 7.749 13.023 L 6.249 13.023 Z M 6.249 17.595 C 6.249 18.448 7.158 19.036 7.942 18.611 L 7.226 17.293 C 7.479 17.155 7.749 17.353 7.749 17.595 L 6.249 17.595 Z M 7.943 18.61 L 10.702 17.106 L 9.985 15.789 L 7.225 17.293 L 7.943 18.61 Z M 10.703 17.106 C 11.364 16.745 11.77 16.049 11.77 15.298 L 10.27 15.298 C 10.27 15.508 10.156 15.696 9.984 15.79 L 10.703 17.106 Z M 11.77 15.298 L 11.77 13.011 L 10.27 13.011 L 10.27 15.298 L 11.77 15.298 Z M 11.77 13.011 C 11.77 11.862 12.215 10.761 13.004 9.947 L 11.928 8.902 C 10.863 9.999 10.27 11.476 10.27 13.011 L 11.77 13.011 Z M 13.012 9.938 L 17.858 4.786 L 16.765 3.758 L 11.92 8.911 L 13.012 9.938 Z M 17.859 4.785 C 18.431 4.175 18.75 3.366 18.75 2.526 L 17.25 2.526 C 17.25 2.987 17.075 3.428 16.765 3.759 L 17.859 4.785 Z M 18.75 2.526 L 18.75 1.59 L 17.25 1.59 L 17.25 2.526 L 18.75 2.526 Z M 18.75 1.59 C 18.75 0.311 17.726 -0.75 16.436 -0.75 L 16.436 0.75 C 16.874 0.75 17.25 1.115 17.25 1.59 L 18.75 1.59 Z M 16.436 -0.75 L 1.565 -0.75 L 1.565 0.75 L 16.436 0.75 L 16.436 -0.75 Z"} fill="currentColor" fillRule="nonzero" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 500,
                      fontSize: 14,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      lineHeight: "20px",
                      letterSpacing: "0.060em",
                      color: "rgb(12,17,15)",
                      flexShrink: 0,
                    }}>Schedule Type : All</span>
                    <div style={{
                      position: "relative",
                      width: 20,
                      height: 20,
                      overflow: "hidden",
                      flexShrink: 0,
                    }}>
                      <div style={{
                        position: "absolute",
                        left: 4.167,
                        top: 7.083,
                        width: 11.667,
                        height: 5.833,
                        overflow: "hidden",
                      }}>
                        <div style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          width: 14,
                          height: 7,
                          overflow: "hidden",
                        }}>
                          <svg width={14} height={7} viewBox="0 0 14 7" fill="none" style={{
                            position: "absolute",
                            left: 0,
                            top: 0,
                            width: 14,
                            height: 7,
                            color: "var(--icon-secondary)",
                          }}>
                            <path d={"M 14.53 0.53 C 14.823 0.237 14.823 -0.237 14.53 -0.53 C 14.237 -0.823 13.763 -0.823 13.47 -0.53 L 14.53 0.53 Z M 7 7 L 6.47 7.53 C 6.763 7.823 7.237 7.823 7.53 7.53 L 7 7 Z M 0.53 -0.53 C 0.237 -0.823 -0.237 -0.823 -0.53 -0.53 C -0.823 -0.237 -0.823 0.237 -0.53 0.53 L 0.53 -0.53 Z M 13.47 -0.53 L 6.47 6.47 L 7.53 7.53 L 14.53 0.53 L 13.47 -0.53 Z M 7.53 6.47 L 0.53 -0.53 L -0.53 0.53 L 6.47 7.53 L 7.53 6.47 Z"} fill="currentColor" fillRule="nonzero" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{
                    position: "relative",
                    width: 101,
                    overflow: "hidden",
                    borderRadius: 8,
                    backgroundColor: "var(--background-bg-secondary)",
                    boxShadow: "inset 0 0 0 1px var(--border-border-primary)",
                    display: "flex",
                    flexDirection: "row",
                    gap: 8,
                    padding: "8px 12px 8px 12px",
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
                      overflow: "hidden",
                      flexShrink: 0,
                    }}>
                      <div style={{
                        position: "absolute",
                        left: 2.5,
                        top: 2.5,
                        width: 15,
                        height: 15,
                        overflow: "hidden",
                      }}>
                        <div style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          width: 18,
                          height: 18,
                          overflow: "hidden",
                        }}>
                          <svg width={18} height={18} viewBox="0 0 18 18" fill="none" style={{
                            position: "absolute",
                            left: 0,
                            top: 0,
                            width: 18,
                            height: 18,
                            color: "var(--icon-secondary)",
                          }}>
                            <path d={"M 0.689 4.272 L 0.143 4.786 L 0.143 4.786 L 0.689 4.272 Z M 5.535 9.424 L 4.989 9.938 C 5.146 10.106 5.372 10.191 5.6 10.171 C 5.829 10.151 6.036 10.028 6.162 9.835 L 5.535 9.424 Z M 5.537 9.421 L 6.074 8.897 C 5.915 8.734 5.691 8.653 5.465 8.675 C 5.239 8.697 5.035 8.82 4.91 9.01 L 5.537 9.421 Z M 7.584 17.952 L 7.942 18.611 L 7.943 18.61 L 7.584 17.952 Z M 10.344 16.448 L 10.702 17.106 L 10.703 17.106 L 10.344 16.448 Z M 12.466 9.424 L 13.004 9.947 L 13.012 9.938 L 12.466 9.424 Z M 17.312 4.272 L 17.858 4.786 L 17.859 4.785 L 17.312 4.272 Z M 1.565 -0.75 C 0.275 -0.75 -0.75 0.31 -0.75 1.59 L 0.75 1.59 C 0.75 1.116 1.127 0.75 1.565 0.75 L 1.565 -0.75 Z M -0.75 1.59 L -0.75 2.526 L 0.75 2.526 L 0.75 1.59 L -0.75 1.59 Z M -0.75 2.526 C -0.75 3.366 -0.431 4.175 0.143 4.786 L 1.236 3.758 C 0.925 3.428 0.75 2.987 0.75 2.526 L -0.75 2.526 Z M 0.143 4.786 L 4.989 9.938 L 6.081 8.911 L 1.236 3.758 L 0.143 4.786 Z M 6.162 9.835 L 6.164 9.832 L 4.91 9.01 L 4.908 9.013 L 6.162 9.835 Z M 5.001 9.945 C 5.798 10.762 6.249 11.868 6.249 13.023 L 7.749 13.023 C 7.749 11.479 7.147 9.996 6.074 8.897 L 5.001 9.945 Z M 6.249 13.023 L 6.249 17.595 L 7.749 17.595 L 7.749 13.023 L 6.249 13.023 Z M 6.249 17.595 C 6.249 18.448 7.158 19.036 7.942 18.611 L 7.226 17.293 C 7.479 17.155 7.749 17.353 7.749 17.595 L 6.249 17.595 Z M 7.943 18.61 L 10.702 17.106 L 9.985 15.789 L 7.225 17.293 L 7.943 18.61 Z M 10.703 17.106 C 11.364 16.745 11.77 16.049 11.77 15.298 L 10.27 15.298 C 10.27 15.508 10.156 15.696 9.984 15.79 L 10.703 17.106 Z M 11.77 15.298 L 11.77 13.011 L 10.27 13.011 L 10.27 15.298 L 11.77 15.298 Z M 11.77 13.011 C 11.77 11.862 12.215 10.761 13.004 9.947 L 11.928 8.902 C 10.863 9.999 10.27 11.476 10.27 13.011 L 11.77 13.011 Z M 13.012 9.938 L 17.858 4.786 L 16.765 3.758 L 11.92 8.911 L 13.012 9.938 Z M 17.859 4.785 C 18.431 4.175 18.75 3.366 18.75 2.526 L 17.25 2.526 C 17.25 2.987 17.075 3.428 16.765 3.759 L 17.859 4.785 Z M 18.75 2.526 L 18.75 1.59 L 17.25 1.59 L 17.25 2.526 L 18.75 2.526 Z M 18.75 1.59 C 18.75 0.311 17.726 -0.75 16.436 -0.75 L 16.436 0.75 C 16.874 0.75 17.25 1.115 17.25 1.59 L 18.75 1.59 Z M 16.436 -0.75 L 1.565 -0.75 L 1.565 0.75 L 16.436 0.75 L 16.436 -0.75 Z"} fill="currentColor" fillRule="nonzero" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 500,
                      fontSize: 14,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      lineHeight: "20px",
                      letterSpacing: "0.060em",
                      color: "rgb(12,17,15)",
                      flexShrink: 0,
                    }}>Filter by</span>
                    <div style={{
                      position: "relative",
                      width: 20,
                      height: 20,
                      overflow: "hidden",
                      flexShrink: 0,
                    }}>
                      <div style={{
                        position: "absolute",
                        left: 5,
                        top: 8.5,
                        width: 14,
                        height: 7,
                        overflow: "hidden",
                      }}>
                        <div style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          width: 14,
                          height: 7,
                          overflow: "hidden",
                        }}>
                          <svg width={14} height={7} viewBox="0 0 14 7" fill="none" style={{
                            position: "absolute",
                            left: 0,
                            top: 0,
                            width: 14,
                            height: 7,
                            color: "var(--icon-secondary)",
                          }}>
                            <path d={"M 14.53 0.53 C 14.823 0.237 14.823 -0.237 14.53 -0.53 C 14.237 -0.823 13.763 -0.823 13.47 -0.53 L 14.53 0.53 Z M 7 7 L 6.47 7.53 C 6.763 7.823 7.237 7.823 7.53 7.53 L 7 7 Z M 0.53 -0.53 C 0.237 -0.823 -0.237 -0.823 -0.53 -0.53 C -0.823 -0.237 -0.823 0.237 -0.53 0.53 L 0.53 -0.53 Z M 13.47 -0.53 L 6.47 6.47 L 7.53 7.53 L 14.53 0.53 L 13.47 -0.53 Z M 7.53 6.47 L 0.53 -0.53 L -0.53 0.53 L 6.47 7.53 L 7.53 6.47 Z"} fill="currentColor" fillRule="nonzero" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: -1,
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <div style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    width: 271,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                  }}>
                    <TableComponent
                      style={{
                        position: "relative",
                        height: 48,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        width: "auto",
                      }}
                      text1={"Report Name"}
                      state={"active"}
                      size={"lg"}
                      misc={"top bar"}
                    />
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <Checkbox10
                          style={{
                            position: "relative",
                            width: 20,
                            height: 20,
                            flexShrink: 0,
                          }}
                          state={"default"}
                          active={"off"}
                          indeterminate={"off"}
                        />
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(39,163,118)",
                            flexShrink: 0,
                          }}>Stock Level Report</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <Checkbox10
                          style={{
                            position: "relative",
                            width: 20,
                            height: 20,
                            flexShrink: 0,
                          }}
                          state={"default"}
                          active={"off"}
                          indeterminate={"off"}
                        />
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(39,163,118)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>Low Stock Alert Report</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <Checkbox10
                          style={{
                            position: "relative",
                            width: 20,
                            height: 20,
                            flexShrink: 0,
                          }}
                          state={"default"}
                          active={"off"}
                          indeterminate={"off"}
                        />
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(39,163,118)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>Inventory Valuation Report</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <Checkbox10
                          style={{
                            position: "relative",
                            width: 20,
                            height: 20,
                            flexShrink: 0,
                          }}
                          state={"default"}
                          active={"off"}
                          indeterminate={"off"}
                        />
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(39,163,118)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>Stock Movement Report</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <Checkbox10
                          style={{
                            position: "relative",
                            width: 20,
                            height: 20,
                            flexShrink: 0,
                          }}
                          state={"default"}
                          active={"off"}
                          indeterminate={"off"}
                        />
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(39,163,118)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>Dead Stock Report</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <Checkbox10
                          style={{
                            position: "relative",
                            width: 20,
                            height: 20,
                            flexShrink: 0,
                          }}
                          state={"default"}
                          active={"off"}
                          indeterminate={"off"}
                        />
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(39,163,118)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>Supplier Performance Report</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <Checkbox10
                          style={{
                            position: "relative",
                            width: 20,
                            height: 20,
                            flexShrink: 0,
                          }}
                          state={"default"}
                          active={"off"}
                          indeterminate={"off"}
                        />
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(39,163,118)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>Order Fulfillment Report</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <Checkbox10
                          style={{
                            position: "relative",
                            width: 20,
                            height: 20,
                            flexShrink: 0,
                          }}
                          state={"default"}
                          active={"off"}
                          indeterminate={"off"}
                        />
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(39,163,118)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>Inventory Turnover Report</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <Checkbox10
                          style={{
                            position: "relative",
                            width: 20,
                            height: 20,
                            flexShrink: 0,
                          }}
                          state={"default"}
                          active={"off"}
                          indeterminate={"off"}
                        />
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(39,163,118)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>Damaged &amp; Lost Stock Report</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <Checkbox10
                          style={{
                            position: "relative",
                            width: 20,
                            height: 20,
                            flexShrink: 0,
                          }}
                          state={"default"}
                          active={"off"}
                          indeterminate={"off"}
                        />
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(39,163,118)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>Sales vs. Stock Report</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{
                    position: "relative",
                    width: 189,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                  }}>
                    <TableComponent
                      style={{
                        position: "relative",
                        height: 48,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        width: "auto",
                      }}
                      text1={"Type"}
                      state={"active"}
                      size={"lg"}
                      misc={"top bar"}
                    />
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(12,175,96)",
                            flexShrink: 0,
                          }}>Sales by Item</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(12,175,96)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>Sales By Customer</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(12,175,96)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>Sales Return History</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(12,175,96)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>Sales By Sales Person</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(12,175,96)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>Sales by Item</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(12,175,96)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>Sales By Sales Person</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(12,175,96)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>Sales Return History</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(12,175,96)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>Sales By Customer</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(12,175,96)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>Sales By Customer</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(12,175,96)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>Sales by Item</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{
                    position: "relative",
                    width: 189,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                  }}>
                    <TableComponent
                      style={{
                        position: "relative",
                        height: 48,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        width: "auto",
                      }}
                      text1={"Created By"}
                      state={"active"}
                      size={"lg"}
                      misc={"top bar"}
                    />
                    <TableComponent
                      style={{
                        position: "relative",
                        height: 64,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        width: "auto",
                      }}
                      label={"Tahsan Khan"}
                      showDescription={false}
                      state={"default"}
                      size={"xl"}
                      misc={"avatar - title"}
                    />
                    <TableComponent
                      style={{
                        position: "relative",
                        height: 64,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        width: "auto",
                      }}
                      label={"Jayed Khan"}
                      showDescription={false}
                      icon2={<Avatar type={"avatar 13"} status={"lg"} size={"40"} style={{ width: "100%", height: "100%" }} />}
                      state={"default"}
                      size={"xl"}
                      misc={"avatar - title"}
                    />
                    <TableComponent
                      style={{
                        position: "relative",
                        height: 64,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        width: "auto",
                      }}
                      label={"Suyeb Khan"}
                      showDescription={false}
                      icon2={<Avatar type={"avatar 6"} status={"lg"} size={"40"} style={{ width: "100%", height: "100%" }} />}
                      state={"default"}
                      size={"xl"}
                      misc={"avatar - title"}
                    />
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <Avatar
                          style={{
                            position: "relative",
                            width: 40,
                            flexShrink: 0,
                            alignSelf: "stretch",
                            height: "auto",
                          }}
                          type={"avatar 4"}
                          status={"lg"}
                          size={"40"}
                        />
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "var(--text-primary)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>Hasan Khan</span>
                        </div>
                      </div>
                    </div>
                    <TableComponent
                      style={{
                        position: "relative",
                        height: 64,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        width: "auto",
                      }}
                      label={"Azam Khan"}
                      showDescription={false}
                      icon2={<Avatar type={"avatar 2"} status={"lg"} size={"40"} style={{ width: "100%", height: "100%" }} />}
                      state={"default"}
                      size={"xl"}
                      misc={"avatar - title"}
                    />
                    <TableComponent
                      style={{
                        position: "relative",
                        height: 64,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        width: "auto",
                      }}
                      label={"Tim David"}
                      showDescription={false}
                      icon2={<Avatar type={"avatar 1"} status={"lg"} size={"40"} style={{ width: "100%", height: "100%" }} />}
                      state={"default"}
                      size={"xl"}
                      misc={"avatar - title"}
                    />
                    <TableComponent
                      style={{
                        position: "relative",
                        height: 64,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        width: "auto",
                      }}
                      label={"David Warner"}
                      showDescription={false}
                      icon2={<Avatar type={"avatar 5"} status={"lg"} size={"40"} style={{ width: "100%", height: "100%" }} />}
                      state={"default"}
                      size={"xl"}
                      misc={"avatar - title"}
                    />
                    <TableComponent
                      style={{
                        position: "relative",
                        height: 64,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        width: "auto",
                      }}
                      label={"David Miller"}
                      showDescription={false}
                      icon2={<Avatar type={"avatar 12"} status={"lg"} size={"40"} style={{ width: "100%", height: "100%" }} />}
                      state={"default"}
                      size={"xl"}
                      misc={"avatar - title"}
                    />
                    <TableComponent
                      style={{
                        position: "relative",
                        height: 64,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        width: "auto",
                      }}
                      label={"Kagiso Rabada"}
                      showDescription={false}
                      icon2={<Avatar type={"avatar 3"} status={"lg"} size={"40"} style={{ width: "100%", height: "100%" }} />}
                      state={"default"}
                      size={"xl"}
                      misc={"avatar - title"}
                    />
                    <TableComponent
                      style={{
                        position: "relative",
                        height: 64,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        width: "auto",
                      }}
                      label={"Matt Henry"}
                      showDescription={false}
                      icon2={<Avatar type={"avatar 8"} status={"lg"} size={"40"} style={{ width: "100%", height: "100%" }} />}
                      state={"default"}
                      size={"xl"}
                      misc={"avatar - title"}
                    />
                  </div>
                  <div style={{
                    position: "relative",
                    width: 220,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                  }}>
                    <TableComponent
                      style={{
                        position: "relative",
                        height: 48,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        width: "auto",
                      }}
                      text1={"Created On"}
                      state={"active"}
                      size={"lg"}
                      misc={"top bar"}
                    />
                    <TableComponent
                      style={{
                        position: "relative",
                        height: 64,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        width: "auto",
                      }}
                      label={"04 Feb, 2025 - 05:53 PM"}
                      showDescription={false}
                      state={"default"}
                      size={"xl"}
                      misc={"avatar - title"}
                    />
                    <TableComponent
                      style={{
                        position: "relative",
                        height: 64,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        width: "auto",
                      }}
                      label={"05 Feb, 2025 - 09:43 PM"}
                      showDescription={false}
                      icon2={<Avatar type={"avatar 13"} status={"lg"} size={"40"} style={{ width: "100%", height: "100%" }} />}
                      state={"default"}
                      size={"xl"}
                      misc={"avatar - title"}
                    />
                    <TableComponent
                      style={{
                        position: "relative",
                        height: 64,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        width: "auto",
                      }}
                      label={"06 Feb, 2025 - 01:23 PM"}
                      showDescription={false}
                      icon2={<Avatar type={"avatar 6"} status={"lg"} size={"40"} style={{ width: "100%", height: "100%" }} />}
                      state={"default"}
                      size={"xl"}
                      misc={"avatar - title"}
                    />
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "var(--text-primary)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>07 Feb, 2025 - 12:16 PM</span>
                        </div>
                      </div>
                    </div>
                    <TableComponent
                      style={{
                        position: "relative",
                        height: 64,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        width: "auto",
                      }}
                      label={"08 Feb, 2025 - 07:23 PM"}
                      showDescription={false}
                      icon2={<Avatar type={"avatar 2"} status={"lg"} size={"40"} style={{ width: "100%", height: "100%" }} />}
                      state={"default"}
                      size={"xl"}
                      misc={"avatar - title"}
                    />
                    <TableComponent
                      style={{
                        position: "relative",
                        height: 64,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        width: "auto",
                      }}
                      label={"09 Feb, 2025 - 04:23 PM"}
                      showDescription={false}
                      icon2={<Avatar type={"avatar 1"} status={"lg"} size={"40"} style={{ width: "100%", height: "100%" }} />}
                      state={"default"}
                      size={"xl"}
                      misc={"avatar - title"}
                    />
                    <TableComponent
                      style={{
                        position: "relative",
                        height: 64,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        width: "auto",
                      }}
                      label={"10 Feb, 2025 - 09:53 PM"}
                      showDescription={false}
                      icon2={<Avatar type={"avatar 5"} status={"lg"} size={"40"} style={{ width: "100%", height: "100%" }} />}
                      state={"default"}
                      size={"xl"}
                      misc={"avatar - title"}
                    />
                    <TableComponent
                      style={{
                        position: "relative",
                        height: 64,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        width: "auto",
                      }}
                      label={"11 Feb, 2025 - 02:45 PM"}
                      showDescription={false}
                      icon2={<Avatar type={"avatar 12"} status={"lg"} size={"40"} style={{ width: "100%", height: "100%" }} />}
                      state={"default"}
                      size={"xl"}
                      misc={"avatar - title"}
                    />
                    <TableComponent
                      style={{
                        position: "relative",
                        height: 64,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        width: "auto",
                      }}
                      label={"12 Feb, 2025 - 05:34 AM"}
                      showDescription={false}
                      icon2={<Avatar type={"avatar 3"} status={"lg"} size={"40"} style={{ width: "100%", height: "100%" }} />}
                      state={"default"}
                      size={"xl"}
                      misc={"avatar - title"}
                    />
                    <TableComponent
                      style={{
                        position: "relative",
                        height: 64,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        width: "auto",
                      }}
                      label={"13 Feb, 2025 - 02:12 PM"}
                      showDescription={false}
                      icon2={<Avatar type={"avatar 3"} status={"lg"} size={"40"} style={{ width: "100%", height: "100%" }} />}
                      state={"default"}
                      size={"xl"}
                      misc={"avatar - title"}
                    />
                  </div>
                  <div style={{
                    position: "relative",
                    width: 118,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                  }}>
                    <TableComponent
                      style={{
                        position: "relative",
                        height: 48,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        width: "auto",
                      }}
                      text1={"Shared With"}
                      state={"active"}
                      size={"lg"}
                      misc={"top bar"}
                    />
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(12,175,96)",
                            flexShrink: 0,
                          }}>Only Me</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(12,175,96)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>Users</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(12,175,96)",
                            flexShrink: 0,
                          }}>Everyone</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(12,175,96)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>Only Me</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(12,175,96)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>Everyone</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(12,175,96)",
                            flexShrink: 0,
                          }}>Everyone</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(12,175,96)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>Users</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(12,175,96)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>Users</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(12,175,96)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>Only Me</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(12,175,96)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>Only Me</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{
                    position: "relative",
                    width: 168,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                  }}>
                    <TableComponent
                      style={{
                        position: "relative",
                        height: 48,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        width: "auto",
                      }}
                      text1={"Frequency"}
                      state={"active"}
                      size={"lg"}
                      misc={"top bar"}
                    />
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(12,175,96)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>Zoho Inventory</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(12,175,96)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>Cin7</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(12,175,96)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>NetSuite ERP</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(12,175,96)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>Fishbowl Inventory</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(12,175,96)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>inFlow Inventory</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(12,175,96)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>Ordoro</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(12,175,96)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>DEAR Inventory</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(12,175,96)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>Odoo Inventory</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(12,175,96)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>Zoho Inventory</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(12,175,96)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>Zoho Inventory</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Pagination style={{
                    position: "relative",
                    height: 63,
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 1640,
        top: 100,
        width: 375,
        height: 1322,
        overflow: "hidden",
        backgroundColor: "var(--background-bg-primary)",
      }}>
        <StatusBar style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 375,
            height: 44,
          }} />
        <Header style={{
            position: "absolute",
            left: 0,
            top: 44,
            width: 375,
          }} />
        <NativeHomeIndicator style={{
            position: "absolute",
            left: 0,
            top: 1288,
            width: 375,
            height: 34,
          }} />
        <div style={{
          position: "absolute",
          left: 24,
          top: 298,
          width: 1156,
          height: 966,
          overflow: "hidden",
          borderRadius: 12,
          backgroundColor: "var(--background-bg-secondary)",
          boxShadow: "inset 0 0 0 1px var(--border-border-primary)",
        }}>
          <div style={{
            position: "absolute",
            left: 16,
            top: 16,
            width: 311,
            display: "flex",
            flexDirection: "column",
            gap: 24,
            alignItems: "flex-start",
            flexWrap: "nowrap",
          }}>
            <SearchInput
              style={{
                position: "relative",
                height: 36,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              text1={"Search reports"}
            />
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 8,
              justifyContent: "center",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 8,
                backgroundColor: "var(--background-bg-secondary)",
                boxShadow: "inset 0 0 0 1px var(--border-border-primary)",
                display: "flex",
                flexDirection: "row",
                gap: 8,
                padding: "8px 12px 8px 12px",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <div style={{
                  position: "relative",
                  width: 20,
                  height: 20,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <div style={{
                    position: "absolute",
                    left: 3,
                    top: 3,
                    width: 18,
                    height: 18,
                    overflow: "hidden",
                  }}>
                    <div style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: 18,
                      height: 18,
                      overflow: "hidden",
                    }}>
                      <svg width={18} height={18} viewBox="0 0 18 18" fill="none" style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: 18,
                        height: 18,
                        color: "var(--icon-secondary)",
                      }}>
                        <path d={"M 0.689 4.272 L 0.143 4.786 L 0.143 4.786 L 0.689 4.272 Z M 5.535 9.424 L 4.989 9.938 C 5.146 10.106 5.372 10.191 5.6 10.171 C 5.829 10.151 6.036 10.028 6.162 9.835 L 5.535 9.424 Z M 5.537 9.421 L 6.074 8.897 C 5.915 8.734 5.691 8.653 5.465 8.675 C 5.239 8.697 5.035 8.82 4.91 9.01 L 5.537 9.421 Z M 7.584 17.952 L 7.942 18.611 L 7.943 18.61 L 7.584 17.952 Z M 10.344 16.448 L 10.702 17.106 L 10.703 17.106 L 10.344 16.448 Z M 12.466 9.424 L 13.004 9.947 L 13.012 9.938 L 12.466 9.424 Z M 17.312 4.272 L 17.858 4.786 L 17.859 4.785 L 17.312 4.272 Z M 1.565 -0.75 C 0.275 -0.75 -0.75 0.31 -0.75 1.59 L 0.75 1.59 C 0.75 1.116 1.127 0.75 1.565 0.75 L 1.565 -0.75 Z M -0.75 1.59 L -0.75 2.526 L 0.75 2.526 L 0.75 1.59 L -0.75 1.59 Z M -0.75 2.526 C -0.75 3.366 -0.431 4.175 0.143 4.786 L 1.236 3.758 C 0.925 3.428 0.75 2.987 0.75 2.526 L -0.75 2.526 Z M 0.143 4.786 L 4.989 9.938 L 6.081 8.911 L 1.236 3.758 L 0.143 4.786 Z M 6.162 9.835 L 6.164 9.832 L 4.91 9.01 L 4.908 9.013 L 6.162 9.835 Z M 5.001 9.945 C 5.798 10.762 6.249 11.868 6.249 13.023 L 7.749 13.023 C 7.749 11.479 7.147 9.996 6.074 8.897 L 5.001 9.945 Z M 6.249 13.023 L 6.249 17.595 L 7.749 17.595 L 7.749 13.023 L 6.249 13.023 Z M 6.249 17.595 C 6.249 18.448 7.158 19.036 7.942 18.611 L 7.226 17.293 C 7.479 17.155 7.749 17.353 7.749 17.595 L 6.249 17.595 Z M 7.943 18.61 L 10.702 17.106 L 9.985 15.789 L 7.225 17.293 L 7.943 18.61 Z M 10.703 17.106 C 11.364 16.745 11.77 16.049 11.77 15.298 L 10.27 15.298 C 10.27 15.508 10.156 15.696 9.984 15.79 L 10.703 17.106 Z M 11.77 15.298 L 11.77 13.011 L 10.27 13.011 L 10.27 15.298 L 11.77 15.298 Z M 11.77 13.011 C 11.77 11.862 12.215 10.761 13.004 9.947 L 11.928 8.902 C 10.863 9.999 10.27 11.476 10.27 13.011 L 11.77 13.011 Z M 13.012 9.938 L 17.858 4.786 L 16.765 3.758 L 11.92 8.911 L 13.012 9.938 Z M 17.859 4.785 C 18.431 4.175 18.75 3.366 18.75 2.526 L 17.25 2.526 C 17.25 2.987 17.075 3.428 16.765 3.759 L 17.859 4.785 Z M 18.75 2.526 L 18.75 1.59 L 17.25 1.59 L 17.25 2.526 L 18.75 2.526 Z M 18.75 1.59 C 18.75 0.311 17.726 -0.75 16.436 -0.75 L 16.436 0.75 C 16.874 0.75 17.25 1.115 17.25 1.59 L 18.75 1.59 Z M 16.436 -0.75 L 1.565 -0.75 L 1.565 0.75 L 16.436 0.75 L 16.436 -0.75 Z"} fill="currentColor" fillRule="nonzero" />
                      </svg>
                    </div>
                  </div>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: 14,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  lineHeight: "20px",
                  letterSpacing: "0.060em",
                  color: "rgb(12,17,15)",
                  flexShrink: 0,
                }}>Parent Report : All</span>
                <div style={{
                  position: "relative",
                  width: 20,
                  height: 20,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <div style={{
                    position: "absolute",
                    left: 4.167,
                    top: 7.083,
                    width: 11.667,
                    height: 5.833,
                    overflow: "hidden",
                  }}>
                    <div style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: 14,
                      height: 7,
                      overflow: "hidden",
                    }}>
                      <svg width={14} height={7} viewBox="0 0 14 7" fill="none" style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: 14,
                        height: 7,
                        color: "var(--icon-secondary)",
                      }}>
                        <path d={"M 14.53 0.53 C 14.823 0.237 14.823 -0.237 14.53 -0.53 C 14.237 -0.823 13.763 -0.823 13.47 -0.53 L 14.53 0.53 Z M 7 7 L 6.47 7.53 C 6.763 7.823 7.237 7.823 7.53 7.53 L 7 7 Z M 0.53 -0.53 C 0.237 -0.823 -0.237 -0.823 -0.53 -0.53 C -0.823 -0.237 -0.823 0.237 -0.53 0.53 L 0.53 -0.53 Z M 13.47 -0.53 L 6.47 6.47 L 7.53 7.53 L 14.53 0.53 L 13.47 -0.53 Z M 7.53 6.47 L 0.53 -0.53 L -0.53 0.53 L 6.47 7.53 L 7.53 6.47 Z"} fill="currentColor" fillRule="nonzero" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 8,
                backgroundColor: "var(--background-bg-secondary)",
                boxShadow: "inset 0 0 0 1px var(--border-border-primary)",
                display: "flex",
                flexDirection: "row",
                gap: 8,
                padding: "8px 12px 8px 12px",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <div style={{
                  position: "relative",
                  width: 20,
                  height: 20,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <div style={{
                    position: "absolute",
                    left: 3,
                    top: 3,
                    width: 18,
                    height: 18,
                    overflow: "hidden",
                  }}>
                    <div style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: 18,
                      height: 18,
                      overflow: "hidden",
                    }}>
                      <svg width={18} height={18} viewBox="0 0 18 18" fill="none" style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: 18,
                        height: 18,
                        color: "var(--icon-secondary)",
                      }}>
                        <path d={"M 0.689 4.272 L 0.143 4.786 L 0.143 4.786 L 0.689 4.272 Z M 5.535 9.424 L 4.989 9.938 C 5.146 10.106 5.372 10.191 5.6 10.171 C 5.829 10.151 6.036 10.028 6.162 9.835 L 5.535 9.424 Z M 5.537 9.421 L 6.074 8.897 C 5.915 8.734 5.691 8.653 5.465 8.675 C 5.239 8.697 5.035 8.82 4.91 9.01 L 5.537 9.421 Z M 7.584 17.952 L 7.942 18.611 L 7.943 18.61 L 7.584 17.952 Z M 10.344 16.448 L 10.702 17.106 L 10.703 17.106 L 10.344 16.448 Z M 12.466 9.424 L 13.004 9.947 L 13.012 9.938 L 12.466 9.424 Z M 17.312 4.272 L 17.858 4.786 L 17.859 4.785 L 17.312 4.272 Z M 1.565 -0.75 C 0.275 -0.75 -0.75 0.31 -0.75 1.59 L 0.75 1.59 C 0.75 1.116 1.127 0.75 1.565 0.75 L 1.565 -0.75 Z M -0.75 1.59 L -0.75 2.526 L 0.75 2.526 L 0.75 1.59 L -0.75 1.59 Z M -0.75 2.526 C -0.75 3.366 -0.431 4.175 0.143 4.786 L 1.236 3.758 C 0.925 3.428 0.75 2.987 0.75 2.526 L -0.75 2.526 Z M 0.143 4.786 L 4.989 9.938 L 6.081 8.911 L 1.236 3.758 L 0.143 4.786 Z M 6.162 9.835 L 6.164 9.832 L 4.91 9.01 L 4.908 9.013 L 6.162 9.835 Z M 5.001 9.945 C 5.798 10.762 6.249 11.868 6.249 13.023 L 7.749 13.023 C 7.749 11.479 7.147 9.996 6.074 8.897 L 5.001 9.945 Z M 6.249 13.023 L 6.249 17.595 L 7.749 17.595 L 7.749 13.023 L 6.249 13.023 Z M 6.249 17.595 C 6.249 18.448 7.158 19.036 7.942 18.611 L 7.226 17.293 C 7.479 17.155 7.749 17.353 7.749 17.595 L 6.249 17.595 Z M 7.943 18.61 L 10.702 17.106 L 9.985 15.789 L 7.225 17.293 L 7.943 18.61 Z M 10.703 17.106 C 11.364 16.745 11.77 16.049 11.77 15.298 L 10.27 15.298 C 10.27 15.508 10.156 15.696 9.984 15.79 L 10.703 17.106 Z M 11.77 15.298 L 11.77 13.011 L 10.27 13.011 L 10.27 15.298 L 11.77 15.298 Z M 11.77 13.011 C 11.77 11.862 12.215 10.761 13.004 9.947 L 11.928 8.902 C 10.863 9.999 10.27 11.476 10.27 13.011 L 11.77 13.011 Z M 13.012 9.938 L 17.858 4.786 L 16.765 3.758 L 11.92 8.911 L 13.012 9.938 Z M 17.859 4.785 C 18.431 4.175 18.75 3.366 18.75 2.526 L 17.25 2.526 C 17.25 2.987 17.075 3.428 16.765 3.759 L 17.859 4.785 Z M 18.75 2.526 L 18.75 1.59 L 17.25 1.59 L 17.25 2.526 L 18.75 2.526 Z M 18.75 1.59 C 18.75 0.311 17.726 -0.75 16.436 -0.75 L 16.436 0.75 C 16.874 0.75 17.25 1.115 17.25 1.59 L 18.75 1.59 Z M 16.436 -0.75 L 1.565 -0.75 L 1.565 0.75 L 16.436 0.75 L 16.436 -0.75 Z"} fill="currentColor" fillRule="nonzero" />
                      </svg>
                    </div>
                  </div>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: 14,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  lineHeight: "20px",
                  letterSpacing: "0.060em",
                  color: "rgb(12,17,15)",
                  flexShrink: 0,
                }}>Schedule Type : All</span>
                <div style={{
                  position: "relative",
                  width: 20,
                  height: 20,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <div style={{
                    position: "absolute",
                    left: 4.167,
                    top: 7.083,
                    width: 11.667,
                    height: 5.833,
                    overflow: "hidden",
                  }}>
                    <div style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: 14,
                      height: 7,
                      overflow: "hidden",
                    }}>
                      <svg width={14} height={7} viewBox="0 0 14 7" fill="none" style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: 14,
                        height: 7,
                        color: "var(--icon-secondary)",
                      }}>
                        <path d={"M 14.53 0.53 C 14.823 0.237 14.823 -0.237 14.53 -0.53 C 14.237 -0.823 13.763 -0.823 13.47 -0.53 L 14.53 0.53 Z M 7 7 L 6.47 7.53 C 6.763 7.823 7.237 7.823 7.53 7.53 L 7 7 Z M 0.53 -0.53 C 0.237 -0.823 -0.237 -0.823 -0.53 -0.53 C -0.823 -0.237 -0.823 0.237 -0.53 0.53 L 0.53 -0.53 Z M 13.47 -0.53 L 6.47 6.47 L 7.53 7.53 L 14.53 0.53 L 13.47 -0.53 Z M 7.53 6.47 L 0.53 -0.53 L -0.53 0.53 L 6.47 7.53 L 7.53 6.47 Z"} fill="currentColor" fillRule="nonzero" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 8,
                backgroundColor: "var(--background-bg-secondary)",
                boxShadow: "inset 0 0 0 1px var(--border-border-primary)",
                display: "flex",
                flexDirection: "row",
                gap: 8,
                padding: "8px 12px 8px 12px",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <div style={{
                  position: "relative",
                  width: 20,
                  height: 20,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <div style={{
                    position: "absolute",
                    left: 2.5,
                    top: 2.5,
                    width: 15,
                    height: 15,
                    overflow: "hidden",
                  }}>
                    <div style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: 18,
                      height: 18,
                      overflow: "hidden",
                    }}>
                      <svg width={18} height={18} viewBox="0 0 18 18" fill="none" style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: 18,
                        height: 18,
                        color: "var(--icon-secondary)",
                      }}>
                        <path d={"M 0.689 4.272 L 0.143 4.786 L 0.143 4.786 L 0.689 4.272 Z M 5.535 9.424 L 4.989 9.938 C 5.146 10.106 5.372 10.191 5.6 10.171 C 5.829 10.151 6.036 10.028 6.162 9.835 L 5.535 9.424 Z M 5.537 9.421 L 6.074 8.897 C 5.915 8.734 5.691 8.653 5.465 8.675 C 5.239 8.697 5.035 8.82 4.91 9.01 L 5.537 9.421 Z M 7.584 17.952 L 7.942 18.611 L 7.943 18.61 L 7.584 17.952 Z M 10.344 16.448 L 10.702 17.106 L 10.703 17.106 L 10.344 16.448 Z M 12.466 9.424 L 13.004 9.947 L 13.012 9.938 L 12.466 9.424 Z M 17.312 4.272 L 17.858 4.786 L 17.859 4.785 L 17.312 4.272 Z M 1.565 -0.75 C 0.275 -0.75 -0.75 0.31 -0.75 1.59 L 0.75 1.59 C 0.75 1.116 1.127 0.75 1.565 0.75 L 1.565 -0.75 Z M -0.75 1.59 L -0.75 2.526 L 0.75 2.526 L 0.75 1.59 L -0.75 1.59 Z M -0.75 2.526 C -0.75 3.366 -0.431 4.175 0.143 4.786 L 1.236 3.758 C 0.925 3.428 0.75 2.987 0.75 2.526 L -0.75 2.526 Z M 0.143 4.786 L 4.989 9.938 L 6.081 8.911 L 1.236 3.758 L 0.143 4.786 Z M 6.162 9.835 L 6.164 9.832 L 4.91 9.01 L 4.908 9.013 L 6.162 9.835 Z M 5.001 9.945 C 5.798 10.762 6.249 11.868 6.249 13.023 L 7.749 13.023 C 7.749 11.479 7.147 9.996 6.074 8.897 L 5.001 9.945 Z M 6.249 13.023 L 6.249 17.595 L 7.749 17.595 L 7.749 13.023 L 6.249 13.023 Z M 6.249 17.595 C 6.249 18.448 7.158 19.036 7.942 18.611 L 7.226 17.293 C 7.479 17.155 7.749 17.353 7.749 17.595 L 6.249 17.595 Z M 7.943 18.61 L 10.702 17.106 L 9.985 15.789 L 7.225 17.293 L 7.943 18.61 Z M 10.703 17.106 C 11.364 16.745 11.77 16.049 11.77 15.298 L 10.27 15.298 C 10.27 15.508 10.156 15.696 9.984 15.79 L 10.703 17.106 Z M 11.77 15.298 L 11.77 13.011 L 10.27 13.011 L 10.27 15.298 L 11.77 15.298 Z M 11.77 13.011 C 11.77 11.862 12.215 10.761 13.004 9.947 L 11.928 8.902 C 10.863 9.999 10.27 11.476 10.27 13.011 L 11.77 13.011 Z M 13.012 9.938 L 17.858 4.786 L 16.765 3.758 L 11.92 8.911 L 13.012 9.938 Z M 17.859 4.785 C 18.431 4.175 18.75 3.366 18.75 2.526 L 17.25 2.526 C 17.25 2.987 17.075 3.428 16.765 3.759 L 17.859 4.785 Z M 18.75 2.526 L 18.75 1.59 L 17.25 1.59 L 17.25 2.526 L 18.75 2.526 Z M 18.75 1.59 C 18.75 0.311 17.726 -0.75 16.436 -0.75 L 16.436 0.75 C 16.874 0.75 17.25 1.115 17.25 1.59 L 18.75 1.59 Z M 16.436 -0.75 L 1.565 -0.75 L 1.565 0.75 L 16.436 0.75 L 16.436 -0.75 Z"} fill="currentColor" fillRule="nonzero" />
                      </svg>
                    </div>
                  </div>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: 14,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  lineHeight: "20px",
                  letterSpacing: "0.060em",
                  color: "rgb(12,17,15)",
                  flexShrink: 0,
                }}>Filter by</span>
                <div style={{
                  position: "relative",
                  width: 20,
                  height: 20,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <div style={{
                    position: "absolute",
                    left: 5,
                    top: 8.5,
                    width: 14,
                    height: 7,
                    overflow: "hidden",
                  }}>
                    <div style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: 14,
                      height: 7,
                      overflow: "hidden",
                    }}>
                      <svg width={14} height={7} viewBox="0 0 14 7" fill="none" style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: 14,
                        height: 7,
                        color: "var(--icon-secondary)",
                      }}>
                        <path d={"M 14.53 0.53 C 14.823 0.237 14.823 -0.237 14.53 -0.53 C 14.237 -0.823 13.763 -0.823 13.47 -0.53 L 14.53 0.53 Z M 7 7 L 6.47 7.53 C 6.763 7.823 7.237 7.823 7.53 7.53 L 7 7 Z M 0.53 -0.53 C 0.237 -0.823 -0.237 -0.823 -0.53 -0.53 C -0.823 -0.237 -0.823 0.237 -0.53 0.53 L 0.53 -0.53 Z M 13.47 -0.53 L 6.47 6.47 L 7.53 7.53 L 14.53 0.53 L 13.47 -0.53 Z M 7.53 6.47 L 0.53 -0.53 L -0.53 0.53 L 6.47 7.53 L 7.53 6.47 Z"} fill="currentColor" fillRule="nonzero" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{
            position: "absolute",
            left: 0,
            top: 216,
            width: 1156,
            display: "flex",
            flexDirection: "column",
            gap: -1,
            alignItems: "flex-start",
            flexWrap: "nowrap",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                width: 271,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
              }}>
                <TableComponent
                  style={{
                    position: "relative",
                    height: 48,
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  text1={"Report Name"}
                  state={"active"}
                  size={"lg"}
                  misc={"top bar"}
                />
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <Checkbox10
                      style={{
                        position: "relative",
                        width: 20,
                        height: 20,
                        flexShrink: 0,
                      }}
                      state={"default"}
                      active={"off"}
                      indeterminate={"off"}
                    />
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(39,163,118)",
                        flexShrink: 0,
                      }}>Stock Level Report</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <Checkbox10
                      style={{
                        position: "relative",
                        width: 20,
                        height: 20,
                        flexShrink: 0,
                      }}
                      state={"default"}
                      active={"off"}
                      indeterminate={"off"}
                    />
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(39,163,118)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>Low Stock Alert Report</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <Checkbox10
                      style={{
                        position: "relative",
                        width: 20,
                        height: 20,
                        flexShrink: 0,
                      }}
                      state={"default"}
                      active={"off"}
                      indeterminate={"off"}
                    />
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(39,163,118)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>Inventory Valuation Report</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <Checkbox10
                      style={{
                        position: "relative",
                        width: 20,
                        height: 20,
                        flexShrink: 0,
                      }}
                      state={"default"}
                      active={"off"}
                      indeterminate={"off"}
                    />
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(39,163,118)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>Stock Movement Report</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <Checkbox10
                      style={{
                        position: "relative",
                        width: 20,
                        height: 20,
                        flexShrink: 0,
                      }}
                      state={"default"}
                      active={"off"}
                      indeterminate={"off"}
                    />
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(39,163,118)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>Dead Stock Report</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <Checkbox10
                      style={{
                        position: "relative",
                        width: 20,
                        height: 20,
                        flexShrink: 0,
                      }}
                      state={"default"}
                      active={"off"}
                      indeterminate={"off"}
                    />
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(39,163,118)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>Supplier Performance Report</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <Checkbox10
                      style={{
                        position: "relative",
                        width: 20,
                        height: 20,
                        flexShrink: 0,
                      }}
                      state={"default"}
                      active={"off"}
                      indeterminate={"off"}
                    />
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(39,163,118)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>Order Fulfillment Report</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <Checkbox10
                      style={{
                        position: "relative",
                        width: 20,
                        height: 20,
                        flexShrink: 0,
                      }}
                      state={"default"}
                      active={"off"}
                      indeterminate={"off"}
                    />
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(39,163,118)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>Inventory Turnover Report</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <Checkbox10
                      style={{
                        position: "relative",
                        width: 20,
                        height: 20,
                        flexShrink: 0,
                      }}
                      state={"default"}
                      active={"off"}
                      indeterminate={"off"}
                    />
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(39,163,118)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>Damaged &amp; Lost Stock Report</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <Checkbox10
                      style={{
                        position: "relative",
                        width: 20,
                        height: 20,
                        flexShrink: 0,
                      }}
                      state={"default"}
                      active={"off"}
                      indeterminate={"off"}
                    />
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(39,163,118)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>Sales vs. Stock Report</span>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{
                position: "relative",
                width: 189,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
              }}>
                <TableComponent
                  style={{
                    position: "relative",
                    height: 48,
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  text1={"Type"}
                  state={"active"}
                  size={"lg"}
                  misc={"top bar"}
                />
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(12,175,96)",
                        flexShrink: 0,
                      }}>Sales by Item</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(12,175,96)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>Sales By Customer</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(12,175,96)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>Sales Return History</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(12,175,96)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>Sales By Sales Person</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(12,175,96)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>Sales by Item</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(12,175,96)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>Sales By Sales Person</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(12,175,96)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>Sales Return History</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(12,175,96)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>Sales By Customer</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(12,175,96)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>Sales By Customer</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(12,175,96)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>Sales by Item</span>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{
                position: "relative",
                width: 189,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
              }}>
                <TableComponent
                  style={{
                    position: "relative",
                    height: 48,
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  text1={"Created By"}
                  state={"active"}
                  size={"lg"}
                  misc={"top bar"}
                />
                <TableComponent
                  style={{
                    position: "relative",
                    height: 64,
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  label={"Tahsan Khan"}
                  showDescription={false}
                  state={"default"}
                  size={"xl"}
                  misc={"avatar - title"}
                />
                <TableComponent
                  style={{
                    position: "relative",
                    height: 64,
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  label={"Jayed Khan"}
                  showDescription={false}
                  icon2={<Avatar type={"avatar 13"} status={"lg"} size={"40"} style={{ width: "100%", height: "100%" }} />}
                  state={"default"}
                  size={"xl"}
                  misc={"avatar - title"}
                />
                <TableComponent
                  style={{
                    position: "relative",
                    height: 64,
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  label={"Suyeb Khan"}
                  showDescription={false}
                  icon2={<Avatar type={"avatar 6"} status={"lg"} size={"40"} style={{ width: "100%", height: "100%" }} />}
                  state={"default"}
                  size={"xl"}
                  misc={"avatar - title"}
                />
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <Avatar
                      style={{
                        position: "relative",
                        width: 40,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        height: "auto",
                      }}
                      type={"avatar 4"}
                      status={"lg"}
                      size={"40"}
                    />
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "var(--text-primary)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>Hasan Khan</span>
                    </div>
                  </div>
                </div>
                <TableComponent
                  style={{
                    position: "relative",
                    height: 64,
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  label={"Azam Khan"}
                  showDescription={false}
                  icon2={<Avatar type={"avatar 2"} status={"lg"} size={"40"} style={{ width: "100%", height: "100%" }} />}
                  state={"default"}
                  size={"xl"}
                  misc={"avatar - title"}
                />
                <TableComponent
                  style={{
                    position: "relative",
                    height: 64,
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  label={"Tim David"}
                  showDescription={false}
                  icon2={<Avatar type={"avatar 1"} status={"lg"} size={"40"} style={{ width: "100%", height: "100%" }} />}
                  state={"default"}
                  size={"xl"}
                  misc={"avatar - title"}
                />
                <TableComponent
                  style={{
                    position: "relative",
                    height: 64,
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  label={"David Warner"}
                  showDescription={false}
                  icon2={<Avatar type={"avatar 5"} status={"lg"} size={"40"} style={{ width: "100%", height: "100%" }} />}
                  state={"default"}
                  size={"xl"}
                  misc={"avatar - title"}
                />
                <TableComponent
                  style={{
                    position: "relative",
                    height: 64,
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  label={"David Miller"}
                  showDescription={false}
                  icon2={<Avatar type={"avatar 12"} status={"lg"} size={"40"} style={{ width: "100%", height: "100%" }} />}
                  state={"default"}
                  size={"xl"}
                  misc={"avatar - title"}
                />
                <TableComponent
                  style={{
                    position: "relative",
                    height: 64,
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  label={"Kagiso Rabada"}
                  showDescription={false}
                  icon2={<Avatar type={"avatar 3"} status={"lg"} size={"40"} style={{ width: "100%", height: "100%" }} />}
                  state={"default"}
                  size={"xl"}
                  misc={"avatar - title"}
                />
                <TableComponent
                  style={{
                    position: "relative",
                    height: 64,
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  label={"Matt Henry"}
                  showDescription={false}
                  icon2={<Avatar type={"avatar 8"} status={"lg"} size={"40"} style={{ width: "100%", height: "100%" }} />}
                  state={"default"}
                  size={"xl"}
                  misc={"avatar - title"}
                />
              </div>
              <div style={{
                position: "relative",
                width: 220,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
              }}>
                <TableComponent
                  style={{
                    position: "relative",
                    height: 48,
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  text1={"Created On"}
                  state={"active"}
                  size={"lg"}
                  misc={"top bar"}
                />
                <TableComponent
                  style={{
                    position: "relative",
                    height: 64,
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  label={"04 Feb, 2025 - 05:53 PM"}
                  showDescription={false}
                  state={"default"}
                  size={"xl"}
                  misc={"avatar - title"}
                />
                <TableComponent
                  style={{
                    position: "relative",
                    height: 64,
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  label={"05 Feb, 2025 - 09:43 PM"}
                  showDescription={false}
                  icon2={<Avatar type={"avatar 13"} status={"lg"} size={"40"} style={{ width: "100%", height: "100%" }} />}
                  state={"default"}
                  size={"xl"}
                  misc={"avatar - title"}
                />
                <TableComponent
                  style={{
                    position: "relative",
                    height: 64,
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  label={"06 Feb, 2025 - 01:23 PM"}
                  showDescription={false}
                  icon2={<Avatar type={"avatar 6"} status={"lg"} size={"40"} style={{ width: "100%", height: "100%" }} />}
                  state={"default"}
                  size={"xl"}
                  misc={"avatar - title"}
                />
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "var(--text-primary)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>07 Feb, 2025 - 12:16 PM</span>
                    </div>
                  </div>
                </div>
                <TableComponent
                  style={{
                    position: "relative",
                    height: 64,
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  label={"08 Feb, 2025 - 07:23 PM"}
                  showDescription={false}
                  icon2={<Avatar type={"avatar 2"} status={"lg"} size={"40"} style={{ width: "100%", height: "100%" }} />}
                  state={"default"}
                  size={"xl"}
                  misc={"avatar - title"}
                />
                <TableComponent
                  style={{
                    position: "relative",
                    height: 64,
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  label={"09 Feb, 2025 - 04:23 PM"}
                  showDescription={false}
                  icon2={<Avatar type={"avatar 1"} status={"lg"} size={"40"} style={{ width: "100%", height: "100%" }} />}
                  state={"default"}
                  size={"xl"}
                  misc={"avatar - title"}
                />
                <TableComponent
                  style={{
                    position: "relative",
                    height: 64,
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  label={"10 Feb, 2025 - 09:53 PM"}
                  showDescription={false}
                  icon2={<Avatar type={"avatar 5"} status={"lg"} size={"40"} style={{ width: "100%", height: "100%" }} />}
                  state={"default"}
                  size={"xl"}
                  misc={"avatar - title"}
                />
                <TableComponent
                  style={{
                    position: "relative",
                    height: 64,
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  label={"11 Feb, 2025 - 02:45 PM"}
                  showDescription={false}
                  icon2={<Avatar type={"avatar 12"} status={"lg"} size={"40"} style={{ width: "100%", height: "100%" }} />}
                  state={"default"}
                  size={"xl"}
                  misc={"avatar - title"}
                />
                <TableComponent
                  style={{
                    position: "relative",
                    height: 64,
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  label={"12 Feb, 2025 - 05:34 AM"}
                  showDescription={false}
                  icon2={<Avatar type={"avatar 3"} status={"lg"} size={"40"} style={{ width: "100%", height: "100%" }} />}
                  state={"default"}
                  size={"xl"}
                  misc={"avatar - title"}
                />
                <TableComponent
                  style={{
                    position: "relative",
                    height: 64,
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  label={"13 Feb, 2025 - 02:12 PM"}
                  showDescription={false}
                  icon2={<Avatar type={"avatar 3"} status={"lg"} size={"40"} style={{ width: "100%", height: "100%" }} />}
                  state={"default"}
                  size={"xl"}
                  misc={"avatar - title"}
                />
              </div>
              <div style={{
                position: "relative",
                width: 118,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
              }}>
                <TableComponent
                  style={{
                    position: "relative",
                    height: 48,
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  text1={"Shared With"}
                  state={"active"}
                  size={"lg"}
                  misc={"top bar"}
                />
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(12,175,96)",
                        flexShrink: 0,
                      }}>Only Me</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(12,175,96)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>Users</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(12,175,96)",
                        flexShrink: 0,
                      }}>Everyone</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(12,175,96)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>Only Me</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(12,175,96)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>Everyone</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(12,175,96)",
                        flexShrink: 0,
                      }}>Everyone</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(12,175,96)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>Users</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(12,175,96)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>Users</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(12,175,96)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>Only Me</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(12,175,96)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>Only Me</span>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{
                position: "relative",
                width: 168,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
              }}>
                <TableComponent
                  style={{
                    position: "relative",
                    height: 48,
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  text1={"Frequency"}
                  state={"active"}
                  size={"lg"}
                  misc={"top bar"}
                />
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(12,175,96)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>Zoho Inventory</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(12,175,96)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>Cin7</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(12,175,96)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>NetSuite ERP</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(12,175,96)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>Fishbowl Inventory</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(12,175,96)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>inFlow Inventory</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(12,175,96)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>Ordoro</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(12,175,96)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>DEAR Inventory</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(12,175,96)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>Odoo Inventory</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(12,175,96)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>Zoho Inventory</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(12,175,96)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>Zoho Inventory</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Pagination style={{
                position: "relative",
                height: 63,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }} />
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 24,
          top: 132,
          width: 327,
          display: "flex",
          flexDirection: "column",
          gap: 24,
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 18,
            lineHeight: "24px",
            color: "var(--text-primary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Reports Center</span>
          <div style={{
            position: "relative",
            height: 36,
            overflow: "hidden",
            borderRadius: 8,
            background: "linear-gradient(180deg, rgb(39,163,118) 0.00%, rgb(22,118,83) 100.00%)",
            boxShadow: "0px 0px 0px 1px rgb(31,130,94), 0px 4px 12px -2px rgba(31,130,94,0.72), 0px 0px 0px 2px rgb(245,253,250)",
            display: "flex",
            flexDirection: "row",
            gap: 6,
            padding: "12px 12px 12px 12px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 20,
              height: 20,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={10} height={1.500} viewBox="0 -0.750 10 1.500" fill="none" style={{
                position: "absolute",
                left: 5,
                top: 10,
                width: 10,
                height: 1.5,
                color: "var(--general-white)",
              }}>
                <path d={"M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 -0.75 Z M 10 0.75 C 10.414 0.75 10.75 0.414 10.75 0 C 10.75 -0.414 10.414 -0.75 10 -0.75 L 10 0.75 Z M 0 0.75 L 10 0.75 L 10 -0.75 L 0 -0.75 L 0 0.75 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
              <svg width={1.500} height={10} viewBox="-0.750 0 1.500 10" fill="none" style={{
                position: "absolute",
                left: 10,
                top: 5,
                width: 1.5,
                height: 10,
                color: "var(--general-white)",
              }}>
                <path d={"M 0.75 0 C 0.75 -0.414 0.414 -0.75 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 L 0.75 0 Z M -0.75 10 C -0.75 10.414 -0.414 10.75 0 10.75 C 0.414 10.75 0.75 10.414 0.75 10 L -0.75 10 Z M -0.75 0 L -0.75 10 L 0.75 10 L 0.75 0 L -0.75 0 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 500,
              fontSize: 14,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "18px",
              color: "var(--general-white)",
              flexShrink: 0,
            }}>Create customer report</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 24,
          top: 240,
          width: 327,
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "rgb(255,255,255)",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "4px 4px 4px 4px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            width: 1004,
            display: "flex",
            flexDirection: "row",
            gap: 6,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <TabMenu
              style={{ position: "relative", width: 123, flexShrink: 0 }}
              text1={"Custom Reports"}
              state={"active"}
            />
            <TabMenu
              style={{ position: "relative", width: 67, flexShrink: 0 }}
              text1={"Sales"}
              state={"default"}
            />
            <TabMenu
              style={{ position: "relative", width: 104, flexShrink: 0 }}
              text1={"Inventory"}
              state={"default"}
            />
            <TabMenu
              style={{ position: "relative", width: 107, flexShrink: 0 }}
              text1={"Receivables"}
              state={"default"}
            />
            <TabMenu
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              text1={"Payments Received"}
              state={"default"}
            />
            <TabMenu
              style={{ position: "relative", width: 86, flexShrink: 0 }}
              text1={"Payables"}
              state={"default"}
            />
            <TabMenu
              style={{ position: "relative", width: 176, flexShrink: 0 }}
              text1={"Purchases and Expenses"}
              state={"default"}
            />
            <TabMenu
              style={{ position: "relative", width: 77, flexShrink: 0 }}
              text1={"Activity"}
              state={"default"}
            />
            <TabMenu
              style={{ position: "relative", width: 94, flexShrink: 0 }}
              text1={"Automation"}
              state={"default"}
            />
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 3655,
        top: 100,
        width: 375,
        height: 1322,
        overflow: "hidden",
        backgroundColor: "var(--background-bg-primary)",
      }}>
        <StatusBar style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 375,
            height: 44,
          }} />
        <Header style={{
            position: "absolute",
            left: 0,
            top: 44,
            width: 375,
          }} />
        <NativeHomeIndicator style={{
            position: "absolute",
            left: 0,
            top: 1288,
            width: 375,
            height: 34,
          }} />
        <div style={{
          position: "absolute",
          left: 24,
          top: 298,
          width: 1156,
          height: 966,
          overflow: "hidden",
          borderRadius: 12,
          backgroundColor: "var(--background-bg-secondary)",
          boxShadow: "inset 0 0 0 1px var(--border-border-primary)",
        }}>
          <div style={{
            position: "absolute",
            left: 16,
            top: 16,
            width: 311,
            display: "flex",
            flexDirection: "column",
            gap: 24,
            alignItems: "flex-start",
            flexWrap: "nowrap",
          }}>
            <SearchInput
              style={{
                position: "relative",
                height: 36,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              text1={"Search reports"}
            />
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 8,
              justifyContent: "center",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 8,
                backgroundColor: "var(--background-bg-secondary)",
                boxShadow: "inset 0 0 0 1px var(--border-border-primary)",
                display: "flex",
                flexDirection: "row",
                gap: 8,
                padding: "8px 12px 8px 12px",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <div style={{
                  position: "relative",
                  width: 20,
                  height: 20,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <div style={{
                    position: "absolute",
                    left: 3,
                    top: 3,
                    width: 18,
                    height: 18,
                    overflow: "hidden",
                  }}>
                    <div style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: 18,
                      height: 18,
                      overflow: "hidden",
                    }}>
                      <svg width={18} height={18} viewBox="0 0 18 18" fill="none" style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: 18,
                        height: 18,
                        color: "var(--icon-secondary)",
                      }}>
                        <path d={"M 0.689 4.272 L 0.143 4.786 L 0.143 4.786 L 0.689 4.272 Z M 5.535 9.424 L 4.989 9.938 C 5.146 10.106 5.372 10.191 5.6 10.171 C 5.829 10.151 6.036 10.028 6.162 9.835 L 5.535 9.424 Z M 5.537 9.421 L 6.074 8.897 C 5.915 8.734 5.691 8.653 5.465 8.675 C 5.239 8.697 5.035 8.82 4.91 9.01 L 5.537 9.421 Z M 7.584 17.952 L 7.942 18.611 L 7.943 18.61 L 7.584 17.952 Z M 10.344 16.448 L 10.702 17.106 L 10.703 17.106 L 10.344 16.448 Z M 12.466 9.424 L 13.004 9.947 L 13.012 9.938 L 12.466 9.424 Z M 17.312 4.272 L 17.858 4.786 L 17.859 4.785 L 17.312 4.272 Z M 1.565 -0.75 C 0.275 -0.75 -0.75 0.31 -0.75 1.59 L 0.75 1.59 C 0.75 1.116 1.127 0.75 1.565 0.75 L 1.565 -0.75 Z M -0.75 1.59 L -0.75 2.526 L 0.75 2.526 L 0.75 1.59 L -0.75 1.59 Z M -0.75 2.526 C -0.75 3.366 -0.431 4.175 0.143 4.786 L 1.236 3.758 C 0.925 3.428 0.75 2.987 0.75 2.526 L -0.75 2.526 Z M 0.143 4.786 L 4.989 9.938 L 6.081 8.911 L 1.236 3.758 L 0.143 4.786 Z M 6.162 9.835 L 6.164 9.832 L 4.91 9.01 L 4.908 9.013 L 6.162 9.835 Z M 5.001 9.945 C 5.798 10.762 6.249 11.868 6.249 13.023 L 7.749 13.023 C 7.749 11.479 7.147 9.996 6.074 8.897 L 5.001 9.945 Z M 6.249 13.023 L 6.249 17.595 L 7.749 17.595 L 7.749 13.023 L 6.249 13.023 Z M 6.249 17.595 C 6.249 18.448 7.158 19.036 7.942 18.611 L 7.226 17.293 C 7.479 17.155 7.749 17.353 7.749 17.595 L 6.249 17.595 Z M 7.943 18.61 L 10.702 17.106 L 9.985 15.789 L 7.225 17.293 L 7.943 18.61 Z M 10.703 17.106 C 11.364 16.745 11.77 16.049 11.77 15.298 L 10.27 15.298 C 10.27 15.508 10.156 15.696 9.984 15.79 L 10.703 17.106 Z M 11.77 15.298 L 11.77 13.011 L 10.27 13.011 L 10.27 15.298 L 11.77 15.298 Z M 11.77 13.011 C 11.77 11.862 12.215 10.761 13.004 9.947 L 11.928 8.902 C 10.863 9.999 10.27 11.476 10.27 13.011 L 11.77 13.011 Z M 13.012 9.938 L 17.858 4.786 L 16.765 3.758 L 11.92 8.911 L 13.012 9.938 Z M 17.859 4.785 C 18.431 4.175 18.75 3.366 18.75 2.526 L 17.25 2.526 C 17.25 2.987 17.075 3.428 16.765 3.759 L 17.859 4.785 Z M 18.75 2.526 L 18.75 1.59 L 17.25 1.59 L 17.25 2.526 L 18.75 2.526 Z M 18.75 1.59 C 18.75 0.311 17.726 -0.75 16.436 -0.75 L 16.436 0.75 C 16.874 0.75 17.25 1.115 17.25 1.59 L 18.75 1.59 Z M 16.436 -0.75 L 1.565 -0.75 L 1.565 0.75 L 16.436 0.75 L 16.436 -0.75 Z"} fill="currentColor" fillRule="nonzero" />
                      </svg>
                    </div>
                  </div>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: 14,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  lineHeight: "20px",
                  letterSpacing: "0.060em",
                  color: "rgb(12,17,15)",
                  flexShrink: 0,
                }}>Parent Report : All</span>
                <div style={{
                  position: "relative",
                  width: 20,
                  height: 20,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <div style={{
                    position: "absolute",
                    left: 4.167,
                    top: 7.083,
                    width: 11.667,
                    height: 5.833,
                    overflow: "hidden",
                  }}>
                    <div style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: 14,
                      height: 7,
                      overflow: "hidden",
                    }}>
                      <svg width={14} height={7} viewBox="0 0 14 7" fill="none" style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: 14,
                        height: 7,
                        color: "var(--icon-secondary)",
                      }}>
                        <path d={"M 14.53 0.53 C 14.823 0.237 14.823 -0.237 14.53 -0.53 C 14.237 -0.823 13.763 -0.823 13.47 -0.53 L 14.53 0.53 Z M 7 7 L 6.47 7.53 C 6.763 7.823 7.237 7.823 7.53 7.53 L 7 7 Z M 0.53 -0.53 C 0.237 -0.823 -0.237 -0.823 -0.53 -0.53 C -0.823 -0.237 -0.823 0.237 -0.53 0.53 L 0.53 -0.53 Z M 13.47 -0.53 L 6.47 6.47 L 7.53 7.53 L 14.53 0.53 L 13.47 -0.53 Z M 7.53 6.47 L 0.53 -0.53 L -0.53 0.53 L 6.47 7.53 L 7.53 6.47 Z"} fill="currentColor" fillRule="nonzero" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 8,
                backgroundColor: "var(--background-bg-secondary)",
                boxShadow: "inset 0 0 0 1px var(--border-border-primary)",
                display: "flex",
                flexDirection: "row",
                gap: 8,
                padding: "8px 12px 8px 12px",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <div style={{
                  position: "relative",
                  width: 20,
                  height: 20,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <div style={{
                    position: "absolute",
                    left: 3,
                    top: 3,
                    width: 18,
                    height: 18,
                    overflow: "hidden",
                  }}>
                    <div style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: 18,
                      height: 18,
                      overflow: "hidden",
                    }}>
                      <svg width={18} height={18} viewBox="0 0 18 18" fill="none" style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: 18,
                        height: 18,
                        color: "var(--icon-secondary)",
                      }}>
                        <path d={"M 0.689 4.272 L 0.143 4.786 L 0.143 4.786 L 0.689 4.272 Z M 5.535 9.424 L 4.989 9.938 C 5.146 10.106 5.372 10.191 5.6 10.171 C 5.829 10.151 6.036 10.028 6.162 9.835 L 5.535 9.424 Z M 5.537 9.421 L 6.074 8.897 C 5.915 8.734 5.691 8.653 5.465 8.675 C 5.239 8.697 5.035 8.82 4.91 9.01 L 5.537 9.421 Z M 7.584 17.952 L 7.942 18.611 L 7.943 18.61 L 7.584 17.952 Z M 10.344 16.448 L 10.702 17.106 L 10.703 17.106 L 10.344 16.448 Z M 12.466 9.424 L 13.004 9.947 L 13.012 9.938 L 12.466 9.424 Z M 17.312 4.272 L 17.858 4.786 L 17.859 4.785 L 17.312 4.272 Z M 1.565 -0.75 C 0.275 -0.75 -0.75 0.31 -0.75 1.59 L 0.75 1.59 C 0.75 1.116 1.127 0.75 1.565 0.75 L 1.565 -0.75 Z M -0.75 1.59 L -0.75 2.526 L 0.75 2.526 L 0.75 1.59 L -0.75 1.59 Z M -0.75 2.526 C -0.75 3.366 -0.431 4.175 0.143 4.786 L 1.236 3.758 C 0.925 3.428 0.75 2.987 0.75 2.526 L -0.75 2.526 Z M 0.143 4.786 L 4.989 9.938 L 6.081 8.911 L 1.236 3.758 L 0.143 4.786 Z M 6.162 9.835 L 6.164 9.832 L 4.91 9.01 L 4.908 9.013 L 6.162 9.835 Z M 5.001 9.945 C 5.798 10.762 6.249 11.868 6.249 13.023 L 7.749 13.023 C 7.749 11.479 7.147 9.996 6.074 8.897 L 5.001 9.945 Z M 6.249 13.023 L 6.249 17.595 L 7.749 17.595 L 7.749 13.023 L 6.249 13.023 Z M 6.249 17.595 C 6.249 18.448 7.158 19.036 7.942 18.611 L 7.226 17.293 C 7.479 17.155 7.749 17.353 7.749 17.595 L 6.249 17.595 Z M 7.943 18.61 L 10.702 17.106 L 9.985 15.789 L 7.225 17.293 L 7.943 18.61 Z M 10.703 17.106 C 11.364 16.745 11.77 16.049 11.77 15.298 L 10.27 15.298 C 10.27 15.508 10.156 15.696 9.984 15.79 L 10.703 17.106 Z M 11.77 15.298 L 11.77 13.011 L 10.27 13.011 L 10.27 15.298 L 11.77 15.298 Z M 11.77 13.011 C 11.77 11.862 12.215 10.761 13.004 9.947 L 11.928 8.902 C 10.863 9.999 10.27 11.476 10.27 13.011 L 11.77 13.011 Z M 13.012 9.938 L 17.858 4.786 L 16.765 3.758 L 11.92 8.911 L 13.012 9.938 Z M 17.859 4.785 C 18.431 4.175 18.75 3.366 18.75 2.526 L 17.25 2.526 C 17.25 2.987 17.075 3.428 16.765 3.759 L 17.859 4.785 Z M 18.75 2.526 L 18.75 1.59 L 17.25 1.59 L 17.25 2.526 L 18.75 2.526 Z M 18.75 1.59 C 18.75 0.311 17.726 -0.75 16.436 -0.75 L 16.436 0.75 C 16.874 0.75 17.25 1.115 17.25 1.59 L 18.75 1.59 Z M 16.436 -0.75 L 1.565 -0.75 L 1.565 0.75 L 16.436 0.75 L 16.436 -0.75 Z"} fill="currentColor" fillRule="nonzero" />
                      </svg>
                    </div>
                  </div>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: 14,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  lineHeight: "20px",
                  letterSpacing: "0.060em",
                  color: "rgb(12,17,15)",
                  flexShrink: 0,
                }}>Schedule Type : All</span>
                <div style={{
                  position: "relative",
                  width: 20,
                  height: 20,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <div style={{
                    position: "absolute",
                    left: 4.167,
                    top: 7.083,
                    width: 11.667,
                    height: 5.833,
                    overflow: "hidden",
                  }}>
                    <div style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: 14,
                      height: 7,
                      overflow: "hidden",
                    }}>
                      <svg width={14} height={7} viewBox="0 0 14 7" fill="none" style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: 14,
                        height: 7,
                        color: "var(--icon-secondary)",
                      }}>
                        <path d={"M 14.53 0.53 C 14.823 0.237 14.823 -0.237 14.53 -0.53 C 14.237 -0.823 13.763 -0.823 13.47 -0.53 L 14.53 0.53 Z M 7 7 L 6.47 7.53 C 6.763 7.823 7.237 7.823 7.53 7.53 L 7 7 Z M 0.53 -0.53 C 0.237 -0.823 -0.237 -0.823 -0.53 -0.53 C -0.823 -0.237 -0.823 0.237 -0.53 0.53 L 0.53 -0.53 Z M 13.47 -0.53 L 6.47 6.47 L 7.53 7.53 L 14.53 0.53 L 13.47 -0.53 Z M 7.53 6.47 L 0.53 -0.53 L -0.53 0.53 L 6.47 7.53 L 7.53 6.47 Z"} fill="currentColor" fillRule="nonzero" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 8,
                backgroundColor: "var(--background-bg-secondary)",
                boxShadow: "inset 0 0 0 1px var(--border-border-primary)",
                display: "flex",
                flexDirection: "row",
                gap: 8,
                padding: "8px 12px 8px 12px",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <div style={{
                  position: "relative",
                  width: 20,
                  height: 20,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <div style={{
                    position: "absolute",
                    left: 2.5,
                    top: 2.5,
                    width: 15,
                    height: 15,
                    overflow: "hidden",
                  }}>
                    <div style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: 18,
                      height: 18,
                      overflow: "hidden",
                    }}>
                      <svg width={18} height={18} viewBox="0 0 18 18" fill="none" style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: 18,
                        height: 18,
                        color: "var(--icon-secondary)",
                      }}>
                        <path d={"M 0.689 4.272 L 0.143 4.786 L 0.143 4.786 L 0.689 4.272 Z M 5.535 9.424 L 4.989 9.938 C 5.146 10.106 5.372 10.191 5.6 10.171 C 5.829 10.151 6.036 10.028 6.162 9.835 L 5.535 9.424 Z M 5.537 9.421 L 6.074 8.897 C 5.915 8.734 5.691 8.653 5.465 8.675 C 5.239 8.697 5.035 8.82 4.91 9.01 L 5.537 9.421 Z M 7.584 17.952 L 7.942 18.611 L 7.943 18.61 L 7.584 17.952 Z M 10.344 16.448 L 10.702 17.106 L 10.703 17.106 L 10.344 16.448 Z M 12.466 9.424 L 13.004 9.947 L 13.012 9.938 L 12.466 9.424 Z M 17.312 4.272 L 17.858 4.786 L 17.859 4.785 L 17.312 4.272 Z M 1.565 -0.75 C 0.275 -0.75 -0.75 0.31 -0.75 1.59 L 0.75 1.59 C 0.75 1.116 1.127 0.75 1.565 0.75 L 1.565 -0.75 Z M -0.75 1.59 L -0.75 2.526 L 0.75 2.526 L 0.75 1.59 L -0.75 1.59 Z M -0.75 2.526 C -0.75 3.366 -0.431 4.175 0.143 4.786 L 1.236 3.758 C 0.925 3.428 0.75 2.987 0.75 2.526 L -0.75 2.526 Z M 0.143 4.786 L 4.989 9.938 L 6.081 8.911 L 1.236 3.758 L 0.143 4.786 Z M 6.162 9.835 L 6.164 9.832 L 4.91 9.01 L 4.908 9.013 L 6.162 9.835 Z M 5.001 9.945 C 5.798 10.762 6.249 11.868 6.249 13.023 L 7.749 13.023 C 7.749 11.479 7.147 9.996 6.074 8.897 L 5.001 9.945 Z M 6.249 13.023 L 6.249 17.595 L 7.749 17.595 L 7.749 13.023 L 6.249 13.023 Z M 6.249 17.595 C 6.249 18.448 7.158 19.036 7.942 18.611 L 7.226 17.293 C 7.479 17.155 7.749 17.353 7.749 17.595 L 6.249 17.595 Z M 7.943 18.61 L 10.702 17.106 L 9.985 15.789 L 7.225 17.293 L 7.943 18.61 Z M 10.703 17.106 C 11.364 16.745 11.77 16.049 11.77 15.298 L 10.27 15.298 C 10.27 15.508 10.156 15.696 9.984 15.79 L 10.703 17.106 Z M 11.77 15.298 L 11.77 13.011 L 10.27 13.011 L 10.27 15.298 L 11.77 15.298 Z M 11.77 13.011 C 11.77 11.862 12.215 10.761 13.004 9.947 L 11.928 8.902 C 10.863 9.999 10.27 11.476 10.27 13.011 L 11.77 13.011 Z M 13.012 9.938 L 17.858 4.786 L 16.765 3.758 L 11.92 8.911 L 13.012 9.938 Z M 17.859 4.785 C 18.431 4.175 18.75 3.366 18.75 2.526 L 17.25 2.526 C 17.25 2.987 17.075 3.428 16.765 3.759 L 17.859 4.785 Z M 18.75 2.526 L 18.75 1.59 L 17.25 1.59 L 17.25 2.526 L 18.75 2.526 Z M 18.75 1.59 C 18.75 0.311 17.726 -0.75 16.436 -0.75 L 16.436 0.75 C 16.874 0.75 17.25 1.115 17.25 1.59 L 18.75 1.59 Z M 16.436 -0.75 L 1.565 -0.75 L 1.565 0.75 L 16.436 0.75 L 16.436 -0.75 Z"} fill="currentColor" fillRule="nonzero" />
                      </svg>
                    </div>
                  </div>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: 14,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  lineHeight: "20px",
                  letterSpacing: "0.060em",
                  color: "rgb(12,17,15)",
                  flexShrink: 0,
                }}>Filter by</span>
                <div style={{
                  position: "relative",
                  width: 20,
                  height: 20,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <div style={{
                    position: "absolute",
                    left: 5,
                    top: 8.5,
                    width: 14,
                    height: 7,
                    overflow: "hidden",
                  }}>
                    <div style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: 14,
                      height: 7,
                      overflow: "hidden",
                    }}>
                      <svg width={14} height={7} viewBox="0 0 14 7" fill="none" style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: 14,
                        height: 7,
                        color: "var(--icon-secondary)",
                      }}>
                        <path d={"M 14.53 0.53 C 14.823 0.237 14.823 -0.237 14.53 -0.53 C 14.237 -0.823 13.763 -0.823 13.47 -0.53 L 14.53 0.53 Z M 7 7 L 6.47 7.53 C 6.763 7.823 7.237 7.823 7.53 7.53 L 7 7 Z M 0.53 -0.53 C 0.237 -0.823 -0.237 -0.823 -0.53 -0.53 C -0.823 -0.237 -0.823 0.237 -0.53 0.53 L 0.53 -0.53 Z M 13.47 -0.53 L 6.47 6.47 L 7.53 7.53 L 14.53 0.53 L 13.47 -0.53 Z M 7.53 6.47 L 0.53 -0.53 L -0.53 0.53 L 6.47 7.53 L 7.53 6.47 Z"} fill="currentColor" fillRule="nonzero" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{
            position: "absolute",
            left: 0,
            top: 216,
            width: 1156,
            display: "flex",
            flexDirection: "column",
            gap: -1,
            alignItems: "flex-start",
            flexWrap: "nowrap",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                width: 271,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
              }}>
                <TableComponent
                  style={{
                    position: "relative",
                    height: 48,
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  text1={"Report Name"}
                  state={"active"}
                  size={"lg"}
                  misc={"top bar"}
                />
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <Checkbox10
                      style={{
                        position: "relative",
                        width: 20,
                        height: 20,
                        flexShrink: 0,
                      }}
                      state={"default"}
                      active={"off"}
                      indeterminate={"off"}
                    />
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(39,163,118)",
                        flexShrink: 0,
                      }}>Stock Level Report</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <Checkbox10
                      style={{
                        position: "relative",
                        width: 20,
                        height: 20,
                        flexShrink: 0,
                      }}
                      state={"default"}
                      active={"off"}
                      indeterminate={"off"}
                    />
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(39,163,118)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>Low Stock Alert Report</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <Checkbox10
                      style={{
                        position: "relative",
                        width: 20,
                        height: 20,
                        flexShrink: 0,
                      }}
                      state={"default"}
                      active={"off"}
                      indeterminate={"off"}
                    />
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(39,163,118)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>Inventory Valuation Report</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <Checkbox10
                      style={{
                        position: "relative",
                        width: 20,
                        height: 20,
                        flexShrink: 0,
                      }}
                      state={"default"}
                      active={"off"}
                      indeterminate={"off"}
                    />
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(39,163,118)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>Stock Movement Report</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <Checkbox10
                      style={{
                        position: "relative",
                        width: 20,
                        height: 20,
                        flexShrink: 0,
                      }}
                      state={"default"}
                      active={"off"}
                      indeterminate={"off"}
                    />
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(39,163,118)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>Dead Stock Report</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <Checkbox10
                      style={{
                        position: "relative",
                        width: 20,
                        height: 20,
                        flexShrink: 0,
                      }}
                      state={"default"}
                      active={"off"}
                      indeterminate={"off"}
                    />
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(39,163,118)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>Supplier Performance Report</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <Checkbox10
                      style={{
                        position: "relative",
                        width: 20,
                        height: 20,
                        flexShrink: 0,
                      }}
                      state={"default"}
                      active={"off"}
                      indeterminate={"off"}
                    />
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(39,163,118)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>Order Fulfillment Report</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <Checkbox10
                      style={{
                        position: "relative",
                        width: 20,
                        height: 20,
                        flexShrink: 0,
                      }}
                      state={"default"}
                      active={"off"}
                      indeterminate={"off"}
                    />
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(39,163,118)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>Inventory Turnover Report</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <Checkbox10
                      style={{
                        position: "relative",
                        width: 20,
                        height: 20,
                        flexShrink: 0,
                      }}
                      state={"default"}
                      active={"off"}
                      indeterminate={"off"}
                    />
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(39,163,118)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>Damaged &amp; Lost Stock Report</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <Checkbox10
                      style={{
                        position: "relative",
                        width: 20,
                        height: 20,
                        flexShrink: 0,
                      }}
                      state={"default"}
                      active={"off"}
                      indeterminate={"off"}
                    />
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(39,163,118)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>Sales vs. Stock Report</span>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{
                position: "relative",
                width: 189,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
              }}>
                <TableComponent
                  style={{
                    position: "relative",
                    height: 48,
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  text1={"Type"}
                  state={"active"}
                  size={"lg"}
                  misc={"top bar"}
                />
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(12,175,96)",
                        flexShrink: 0,
                      }}>Sales by Item</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(12,175,96)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>Sales By Customer</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(12,175,96)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>Sales Return History</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(12,175,96)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>Sales By Sales Person</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(12,175,96)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>Sales by Item</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(12,175,96)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>Sales By Sales Person</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(12,175,96)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>Sales Return History</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(12,175,96)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>Sales By Customer</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(12,175,96)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>Sales By Customer</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(12,175,96)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>Sales by Item</span>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{
                position: "relative",
                width: 189,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
              }}>
                <TableComponent
                  style={{
                    position: "relative",
                    height: 48,
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  text1={"Created By"}
                  state={"active"}
                  size={"lg"}
                  misc={"top bar"}
                />
                <TableComponent
                  style={{
                    position: "relative",
                    height: 64,
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  label={"Tahsan Khan"}
                  showDescription={false}
                  state={"default"}
                  size={"xl"}
                  misc={"avatar - title"}
                />
                <TableComponent
                  style={{
                    position: "relative",
                    height: 64,
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  label={"Jayed Khan"}
                  showDescription={false}
                  icon2={<Avatar type={"avatar 13"} status={"lg"} size={"40"} style={{ width: "100%", height: "100%" }} />}
                  state={"default"}
                  size={"xl"}
                  misc={"avatar - title"}
                />
                <TableComponent
                  style={{
                    position: "relative",
                    height: 64,
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  label={"Suyeb Khan"}
                  showDescription={false}
                  icon2={<Avatar type={"avatar 6"} status={"lg"} size={"40"} style={{ width: "100%", height: "100%" }} />}
                  state={"default"}
                  size={"xl"}
                  misc={"avatar - title"}
                />
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <Avatar
                      style={{
                        position: "relative",
                        width: 40,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        height: "auto",
                      }}
                      type={"avatar 4"}
                      status={"lg"}
                      size={"40"}
                    />
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "var(--text-primary)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>Hasan Khan</span>
                    </div>
                  </div>
                </div>
                <TableComponent
                  style={{
                    position: "relative",
                    height: 64,
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  label={"Azam Khan"}
                  showDescription={false}
                  icon2={<Avatar type={"avatar 2"} status={"lg"} size={"40"} style={{ width: "100%", height: "100%" }} />}
                  state={"default"}
                  size={"xl"}
                  misc={"avatar - title"}
                />
                <TableComponent
                  style={{
                    position: "relative",
                    height: 64,
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  label={"Tim David"}
                  showDescription={false}
                  icon2={<Avatar type={"avatar 1"} status={"lg"} size={"40"} style={{ width: "100%", height: "100%" }} />}
                  state={"default"}
                  size={"xl"}
                  misc={"avatar - title"}
                />
                <TableComponent
                  style={{
                    position: "relative",
                    height: 64,
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  label={"David Warner"}
                  showDescription={false}
                  icon2={<Avatar type={"avatar 5"} status={"lg"} size={"40"} style={{ width: "100%", height: "100%" }} />}
                  state={"default"}
                  size={"xl"}
                  misc={"avatar - title"}
                />
                <TableComponent
                  style={{
                    position: "relative",
                    height: 64,
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  label={"David Miller"}
                  showDescription={false}
                  icon2={<Avatar type={"avatar 12"} status={"lg"} size={"40"} style={{ width: "100%", height: "100%" }} />}
                  state={"default"}
                  size={"xl"}
                  misc={"avatar - title"}
                />
                <TableComponent
                  style={{
                    position: "relative",
                    height: 64,
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  label={"Kagiso Rabada"}
                  showDescription={false}
                  icon2={<Avatar type={"avatar 3"} status={"lg"} size={"40"} style={{ width: "100%", height: "100%" }} />}
                  state={"default"}
                  size={"xl"}
                  misc={"avatar - title"}
                />
                <TableComponent
                  style={{
                    position: "relative",
                    height: 64,
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  label={"Matt Henry"}
                  showDescription={false}
                  icon2={<Avatar type={"avatar 8"} status={"lg"} size={"40"} style={{ width: "100%", height: "100%" }} />}
                  state={"default"}
                  size={"xl"}
                  misc={"avatar - title"}
                />
              </div>
              <div style={{
                position: "relative",
                width: 220,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
              }}>
                <TableComponent
                  style={{
                    position: "relative",
                    height: 48,
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  text1={"Created On"}
                  state={"active"}
                  size={"lg"}
                  misc={"top bar"}
                />
                <TableComponent
                  style={{
                    position: "relative",
                    height: 64,
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  label={"04 Feb, 2025 - 05:53 PM"}
                  showDescription={false}
                  state={"default"}
                  size={"xl"}
                  misc={"avatar - title"}
                />
                <TableComponent
                  style={{
                    position: "relative",
                    height: 64,
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  label={"05 Feb, 2025 - 09:43 PM"}
                  showDescription={false}
                  icon2={<Avatar type={"avatar 13"} status={"lg"} size={"40"} style={{ width: "100%", height: "100%" }} />}
                  state={"default"}
                  size={"xl"}
                  misc={"avatar - title"}
                />
                <TableComponent
                  style={{
                    position: "relative",
                    height: 64,
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  label={"06 Feb, 2025 - 01:23 PM"}
                  showDescription={false}
                  icon2={<Avatar type={"avatar 6"} status={"lg"} size={"40"} style={{ width: "100%", height: "100%" }} />}
                  state={"default"}
                  size={"xl"}
                  misc={"avatar - title"}
                />
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "var(--text-primary)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>07 Feb, 2025 - 12:16 PM</span>
                    </div>
                  </div>
                </div>
                <TableComponent
                  style={{
                    position: "relative",
                    height: 64,
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  label={"08 Feb, 2025 - 07:23 PM"}
                  showDescription={false}
                  icon2={<Avatar type={"avatar 2"} status={"lg"} size={"40"} style={{ width: "100%", height: "100%" }} />}
                  state={"default"}
                  size={"xl"}
                  misc={"avatar - title"}
                />
                <TableComponent
                  style={{
                    position: "relative",
                    height: 64,
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  label={"09 Feb, 2025 - 04:23 PM"}
                  showDescription={false}
                  icon2={<Avatar type={"avatar 1"} status={"lg"} size={"40"} style={{ width: "100%", height: "100%" }} />}
                  state={"default"}
                  size={"xl"}
                  misc={"avatar - title"}
                />
                <TableComponent
                  style={{
                    position: "relative",
                    height: 64,
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  label={"10 Feb, 2025 - 09:53 PM"}
                  showDescription={false}
                  icon2={<Avatar type={"avatar 5"} status={"lg"} size={"40"} style={{ width: "100%", height: "100%" }} />}
                  state={"default"}
                  size={"xl"}
                  misc={"avatar - title"}
                />
                <TableComponent
                  style={{
                    position: "relative",
                    height: 64,
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  label={"11 Feb, 2025 - 02:45 PM"}
                  showDescription={false}
                  icon2={<Avatar type={"avatar 12"} status={"lg"} size={"40"} style={{ width: "100%", height: "100%" }} />}
                  state={"default"}
                  size={"xl"}
                  misc={"avatar - title"}
                />
                <TableComponent
                  style={{
                    position: "relative",
                    height: 64,
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  label={"12 Feb, 2025 - 05:34 AM"}
                  showDescription={false}
                  icon2={<Avatar type={"avatar 3"} status={"lg"} size={"40"} style={{ width: "100%", height: "100%" }} />}
                  state={"default"}
                  size={"xl"}
                  misc={"avatar - title"}
                />
                <TableComponent
                  style={{
                    position: "relative",
                    height: 64,
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  label={"13 Feb, 2025 - 02:12 PM"}
                  showDescription={false}
                  icon2={<Avatar type={"avatar 3"} status={"lg"} size={"40"} style={{ width: "100%", height: "100%" }} />}
                  state={"default"}
                  size={"xl"}
                  misc={"avatar - title"}
                />
              </div>
              <div style={{
                position: "relative",
                width: 118,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
              }}>
                <TableComponent
                  style={{
                    position: "relative",
                    height: 48,
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  text1={"Shared With"}
                  state={"active"}
                  size={"lg"}
                  misc={"top bar"}
                />
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(12,175,96)",
                        flexShrink: 0,
                      }}>Only Me</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(12,175,96)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>Users</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(12,175,96)",
                        flexShrink: 0,
                      }}>Everyone</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(12,175,96)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>Only Me</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(12,175,96)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>Everyone</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(12,175,96)",
                        flexShrink: 0,
                      }}>Everyone</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(12,175,96)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>Users</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(12,175,96)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>Users</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(12,175,96)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>Only Me</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(12,175,96)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>Only Me</span>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{
                position: "relative",
                width: 168,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
              }}>
                <TableComponent
                  style={{
                    position: "relative",
                    height: 48,
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  text1={"Frequency"}
                  state={"active"}
                  size={"lg"}
                  misc={"top bar"}
                />
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(12,175,96)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>Zoho Inventory</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(12,175,96)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>Cin7</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(12,175,96)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>NetSuite ERP</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(12,175,96)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>Fishbowl Inventory</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(12,175,96)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>inFlow Inventory</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(12,175,96)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>Ordoro</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(12,175,96)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>DEAR Inventory</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(12,175,96)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>Odoo Inventory</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(12,175,96)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>Zoho Inventory</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "var(--background-bg-secondary)",
                  borderTop: "1px solid var(--border-border-primary)",
                  borderRight: "1px solid var(--border-border-primary)",
                  borderBottom: "1px solid var(--border-border-primary)",
                  borderLeft: "1px solid var(--border-border-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xs) * 1px)",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--padding-sm) * 1px)",
                  paddingTop: "calc(var(--padding-sm) * 1px)",
                  paddingRight: "calc(var(--padding-sm) * 1px)",
                  paddingBottom: "calc(var(--padding-sm) * 1px)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        lineHeight: "20px",
                        color: "rgb(12,175,96)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>Zoho Inventory</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Pagination style={{
                position: "relative",
                height: 63,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }} />
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 24,
          top: 132,
          width: 327,
          display: "flex",
          flexDirection: "column",
          gap: 24,
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 18,
            lineHeight: "24px",
            color: "var(--text-primary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Reports Center</span>
          <div style={{
            position: "relative",
            height: 36,
            overflow: "hidden",
            borderRadius: 8,
            background: "linear-gradient(180deg, rgb(39,163,118) 0.00%, rgb(22,118,83) 100.00%)",
            boxShadow: "0px 0px 0px 1px rgb(31,130,94), 0px 4px 12px -2px rgba(31,130,94,0.72), 0px 0px 0px 2px rgb(245,253,250)",
            display: "flex",
            flexDirection: "row",
            gap: 6,
            padding: "12px 12px 12px 12px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 20,
              height: 20,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={10} height={1.500} viewBox="0 -0.750 10 1.500" fill="none" style={{
                position: "absolute",
                left: 5,
                top: 10,
                width: 10,
                height: 1.5,
                color: "var(--general-white)",
              }}>
                <path d={"M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 -0.75 Z M 10 0.75 C 10.414 0.75 10.75 0.414 10.75 0 C 10.75 -0.414 10.414 -0.75 10 -0.75 L 10 0.75 Z M 0 0.75 L 10 0.75 L 10 -0.75 L 0 -0.75 L 0 0.75 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
              <svg width={1.500} height={10} viewBox="-0.750 0 1.500 10" fill="none" style={{
                position: "absolute",
                left: 10,
                top: 5,
                width: 1.5,
                height: 10,
                color: "var(--general-white)",
              }}>
                <path d={"M 0.75 0 C 0.75 -0.414 0.414 -0.75 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 L 0.75 0 Z M -0.75 10 C -0.75 10.414 -0.414 10.75 0 10.75 C 0.414 10.75 0.75 10.414 0.75 10 L -0.75 10 Z M -0.75 0 L -0.75 10 L 0.75 10 L 0.75 0 L -0.75 0 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 500,
              fontSize: 14,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "18px",
              color: "var(--general-white)",
              flexShrink: 0,
            }}>Create customer report</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 24,
          top: 240,
          width: 327,
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "rgb(255,255,255)",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "4px 4px 4px 4px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            width: 1004,
            display: "flex",
            flexDirection: "row",
            gap: 6,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <TabMenu
              style={{ position: "relative", width: 123, flexShrink: 0 }}
              text1={"Custom Reports"}
              state={"active"}
            />
            <TabMenu
              style={{ position: "relative", width: 67, flexShrink: 0 }}
              text1={"Sales"}
              state={"default"}
            />
            <TabMenu
              style={{ position: "relative", width: 104, flexShrink: 0 }}
              text1={"Inventory"}
              state={"default"}
            />
            <TabMenu
              style={{ position: "relative", width: 107, flexShrink: 0 }}
              text1={"Receivables"}
              state={"default"}
            />
            <TabMenu
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              text1={"Payments Received"}
              state={"default"}
            />
            <TabMenu
              style={{ position: "relative", width: 86, flexShrink: 0 }}
              text1={"Payables"}
              state={"default"}
            />
            <TabMenu
              style={{ position: "relative", width: 176, flexShrink: 0 }}
              text1={"Purchases and Expenses"}
              state={"default"}
            />
            <TabMenu
              style={{ position: "relative", width: 77, flexShrink: 0 }}
              text1={"Activity"}
              state={"default"}
            />
            <TabMenu
              style={{ position: "relative", width: 94, flexShrink: 0 }}
              text1={"Automation"}
              state={"default"}
            />
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 375,
          height: 1322,
          backgroundColor: "rgba(0,0,0,0.4)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 984,
          width: 375,
          overflow: "hidden",
          backgroundColor: "var(--background-bg-secondary)",
          boxShadow: "inset 0 0 0 1px var(--border-border-primary)",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 24,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              boxShadow: "inset 0 0 0 1px var(--border-border-primary)",
              display: "flex",
              flexDirection: "column",
              gap: 10,
              padding: "24px 24px 24px 24px",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              boxSizing: "border-box",
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
                <span style={{
                  position: "relative",
                  fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 700,
                  fontSize: 24,
                  lineHeight: "34px",
                  color: "var(--text-primary)",
                  flexGrow: 1,
                }}>New Custom Report</span>
                <CloseRemove style={{
                    position: "relative",
                    width: 24,
                    height: 24,
                    flexShrink: 0,
                  }} />
              </div>
            </div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: "calc(var(--padding-xxs) * 1px)",
              padding: "0px 24px 0px 24px",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "row",
                gap: "calc(var(--2) * 1px)",
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: "20px",
                  color: "rgb(0,0,0)",
                  flexGrow: 1,
                  filter: "drop-shadow(0px 1px 2px rgba(20,28,36,0.04))",
                }}>Select the report that you wannt to customize and create a new custom report.</span>
                <div style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <svg width={12} height={12} viewBox="0 0 12 12" fill="none" style={{
                    position: "absolute",
                    left: 2,
                    top: 2,
                    width: 12,
                    height: 12,
                    color: "rgb(98,126,124)",
                  }}>
                    <path d={"M -0.6 6 C -0.6 9.645 2.355 12.6 6 12.6 L 6 11.4 C 3.017 11.4 0.6 8.982 0.6 6 L -0.6 6 Z M 6 12.6 C 9.645 12.6 12.6 9.645 12.6 6 L 11.4 6 C 11.4 8.982 8.983 11.4 6 11.4 L 6 12.6 Z M 12.6 6 C 12.6 2.355 9.645 -0.6 6 -0.6 L 6 0.6 C 8.983 0.6 11.4 3.017 11.4 6 L 12.6 6 Z M 6 -0.6 C 2.355 -0.6 -0.6 2.355 -0.6 6 L 0.6 6 C 0.6 3.017 3.017 0.6 6 0.6 L 6 -0.6 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                  <svg width={0.004} height={4.935} viewBox="0 0 0.004 4.935" fill="none" style={{
                    position: "absolute",
                    left: 8,
                    top: 5.527,
                    width: 0.004,
                    height: 4.935,
                    color: "rgb(98,126,124)",
                  }}>
                    <path d={"M -0.596 4.935 C -0.596 5.266 -0.328 5.535 0.004 5.535 C 0.335 5.535 0.604 5.266 0.604 4.935 L -0.596 4.935 Z M 0.604 2.068 C 0.604 1.737 0.335 1.468 0.004 1.468 C -0.328 1.468 -0.596 1.737 -0.596 2.068 L 0.604 2.068 Z M -0.6 0.042 C -0.6 0.374 -0.331 0.642 0 0.642 C 0.331 0.642 0.6 0.374 0.6 0.042 L -0.6 0.042 Z M 0.6 0 C 0.6 -0.331 0.331 -0.6 0 -0.6 C -0.331 -0.6 -0.6 -0.331 -0.6 0 L 0.6 0 Z M 0.604 4.935 L 0.604 2.068 L -0.596 2.068 L -0.596 4.935 L 0.604 4.935 Z M 0.6 0.042 L 0.6 0 L -0.6 0 L -0.6 0.042 L 0.6 0.042 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
              </div>
              <div style={{
                position: "relative",
                borderRadius: 8,
                backgroundColor: "var(--background-bg-secondary)",
                boxShadow: "inset 0 0 0 1px var(--border-border-primary), 0px 1px 2px 0px rgba(12,17,15,0.1)",
                display: "flex",
                flexDirection: "row",
                padding: "8px 12px 8px 12px",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                paddingLeft: "calc(var(--padding-sm) * 1px)",
                paddingTop: "calc(var(--padding-xs) * 1px)",
                paddingRight: "calc(var(--padding-sm) * 1px)",
                paddingBottom: "calc(var(--padding-xs) * 1px)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <div style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "row",
                  gap: "calc(var(--8) * 1px)",
                  alignItems: "center",
                  flexWrap: "nowrap",
                  paddingLeft: "calc(var(--padding-none-2) * 1px)",
                  paddingTop: "calc(var(--padding-none-2) * 1px)",
                  paddingRight: "calc(var(--padding-none-2) * 1px)",
                  paddingBottom: "calc(var(--padding-none-2) * 1px)",
                  flexGrow: 1,
                }}>
                  <span style={{
                    position: "relative",
                    fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 16,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    lineHeight: "22px",
                    color: "var(--text-secondary)",
                    flexShrink: 0,
                  }}>Select a report</span>
                </div>
                <div style={{
                    position: "relative",
                    width: 20,
                    height: 20,
                    flexShrink: 0,
                  }}>
                  <ArrowDown2 style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />
                </div>
              </div>
            </div>
            <div style={{
              position: "relative",
              height: 132,
              backgroundColor: "var(--background-bg-secondary)",
              boxShadow: "0px 5px 40px 0px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "24px 24px 24px 24px",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                width: 327,
                display: "flex",
                flexDirection: "column",
                gap: 12,
                justifyContent: "center",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <Button
                  style={{
                    position: "relative",
                    height: 36,
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  rightIcon={false}
                  leftIcon={false}
                  text1={"Procced"}
                  state={"default"}
                  type={"primary"}
                  size={"lg"}
                />
                <Button
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  rightIcon={false}
                  leftIcon={false}
                  text1={"Cancel"}
                  state={"default"}
                  type={"secondary"}
                  size={"lg"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 2115,
        top: 100,
        width: 1440,
        height: 1024,
        overflow: "hidden",
        borderRadius: 16,
        backgroundColor: "var(--background-bg-primary)",
      }}>
        <div style={{
          position: "absolute",
          left: 12,
          top: 12,
          width: 248,
          height: 1000,
          maxWidth: 272,
          maxHeight: null,
          overflow: "hidden",
          borderRadius: 12,
          backgroundColor: "var(--grayscale-800)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 51,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "row",
                gap: 12,
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
              }}>
                <Logo2 style={{
                    position: "relative",
                    width: 36,
                    height: 36,
                    flexShrink: 0,
                    color: "var(--general-white)",
                  }} />
                <span style={{
                  position: "relative",
                  fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 700,
                  fontSize: 24,
                  whiteSpace: "nowrap",
                  lineHeight: "32px",
                  color: "var(--general-white)",
                  flexShrink: 0,
                }}>Interoly</span>
              </div>
              <div style={{
                position: "relative",
                transform: "matrix(1,0,0,-1,0,0)",
                width: 24,
                height: 24,
                flexShrink: 0,
              }}>
                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" style={{
                  position: "absolute",
                  left: 4,
                  top: 4,
                  width: 16,
                  height: 16,
                  color: "rgb(145,153,146)",
                }}>
                  <path d={"M 16.75 13.44 L 16.75 2.56 L 15.25 2.56 L 15.25 13.44 L 16.75 13.44 Z M 16.75 2.56 C 16.75 0.732 15.268 -0.75 13.44 -0.75 L 13.44 0.75 C 14.44 0.75 15.25 1.56 15.25 2.56 L 16.75 2.56 Z M 13.44 -0.75 L 2.56 -0.75 L 2.56 0.75 L 13.44 0.75 L 13.44 -0.75 Z M 2.56 -0.75 C 0.732 -0.75 -0.75 0.732 -0.75 2.56 L 0.75 2.56 C 0.75 1.56 1.56 0.75 2.56 0.75 L 2.56 -0.75 Z M -0.75 2.56 L -0.75 13.44 L 0.75 13.44 L 0.75 2.56 L -0.75 2.56 Z M -0.75 13.44 C -0.75 15.268 0.732 16.75 2.56 16.75 L 2.56 15.25 C 1.56 15.25 0.75 14.44 0.75 13.44 L -0.75 13.44 Z M 2.56 16.75 L 13.44 16.75 L 13.44 15.25 L 2.56 15.25 L 2.56 16.75 Z M 13.44 16.75 C 15.268 16.75 16.75 15.268 16.75 13.44 L 15.25 13.44 C 15.25 14.44 14.44 15.25 13.44 15.25 L 13.44 16.75 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <svg width={1.500} height={8} viewBox="-0.750 0 1.500 8" fill="none" style={{
                  position: "absolute",
                  left: 8,
                  top: 8,
                  width: 1.5,
                  height: 8,
                  color: "rgb(145,153,146)",
                }}>
                  <path d={"M 0.75 0 C 0.75 -0.414 0.414 -0.75 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 L 0.75 0 Z M -0.75 8 C -0.75 8.414 -0.414 8.75 0 8.75 C 0.414 8.75 0.75 8.414 0.75 8 L -0.75 8 Z M -0.75 0 L -0.75 8 L 0.75 8 L 0.75 0 L -0.75 0 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <svg width={3} height={6} viewBox="0 0 3 6" fill="none" style={{
                  position: "absolute",
                  left: 12,
                  top: 9,
                  width: 3,
                  height: 6,
                  color: "rgb(145,153,146)",
                }}>
                  <path d={"M 3.53 0.53 C 3.823 0.237 3.823 -0.237 3.53 -0.53 C 3.237 -0.823 2.763 -0.823 2.47 -0.53 L 3.53 0.53 Z M 0 3 L -0.53 2.47 C -0.823 2.763 -0.823 3.237 -0.53 3.53 L 0 3 Z M 2.47 6.53 C 2.763 6.823 3.237 6.823 3.53 6.53 C 3.823 6.237 3.823 5.763 3.53 5.47 L 2.47 6.53 Z M 2.47 -0.53 L -0.53 2.47 L 0.53 3.53 L 3.53 0.53 L 2.47 -0.53 Z M -0.53 3.53 L 2.47 6.53 L 3.53 5.47 L 0.53 2.47 L -0.53 3.53 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 20,
              top: 67,
              width: 208,
              height: 1,
              outline: "1px dashed var(--grayscale-700)",
              outlineOffset: "-1px",
            }} />
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 20,
            padding: "20px 20px 16px 20px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
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
              <span style={{
                position: "relative",
                fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 14,
                lineHeight: "20px",
                letterSpacing: "0.060em",
                color: "var(--grayscale-500)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Main</span>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: 4,
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <div style={{
                  position: "relative",
                  borderRadius: 8,
                  backgroundColor: "var(--grayscale-700)",
                  display: "flex",
                  flexDirection: "row",
                  gap: "calc(var(--radius-8) * 1px)",
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
                      height: 20,
                      flexShrink: 0,
                    }}>
                    <Dashboard1 style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />
                  </div>
                  <div style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "row",
                    gap: 6,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexGrow: 1,
                  }}>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 500,
                      fontSize: 14,
                      lineHeight: "20px",
                      letterSpacing: "0.060em",
                      color: "var(--grayscale-600)",
                      flexGrow: 1,
                    }}>Dashboard</span>
                    <div style={{
                        position: "relative",
                        width: 20,
                        height: 20,
                        flexShrink: 0,
                      }}>
                      <Plus4 style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  borderRadius: 8,
                  display: "flex",
                  flexDirection: "row",
                  gap: "calc(var(--radius-8) * 1px)",
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
                    height: 20,
                    overflow: "hidden",
                    flexShrink: 0,
                  }}>
                    <svg width={14.400} height={14.377} viewBox="0 0 14.400 14.377" fill="none" style={{
                      position: "absolute",
                      left: 3.079,
                      top: 2.812,
                      width: 14.4,
                      height: 14.377,
                      color: "var(--grayscale-500)",
                    }}>
                      <path d={"M 1.048 1.402 L 1.717 1.669 L 1.717 1.669 L 1.048 1.402 Z M 0.371 3.095 L -0.297 2.827 L -0.297 2.828 L 0.371 3.095 Z M 0.01 4.962 L 0.73 4.963 L 0.73 4.963 L 0.01 4.962 Z M 0 11.119 L 0.72 11.121 L 0.72 11.12 L 0 11.119 Z M 2.757 14.364 L 2.755 15.084 L 2.756 15.084 L 2.757 14.364 Z M 11.644 14.377 L 11.646 13.657 L 11.645 13.657 L 11.644 14.377 Z M 14.389 11.146 L 15.109 11.148 L 15.109 11.148 L 14.389 11.146 Z M 14.4 4.978 L 15.12 4.98 L 15.12 4.979 L 14.4 4.978 Z M 14.033 3.082 L 13.365 3.351 L 13.366 3.351 L 14.033 3.082 Z M 13.355 1.396 L 12.687 1.665 L 12.687 1.665 L 13.355 1.396 Z M 0.38 1.134 L -0.297 2.827 L 1.04 3.362 L 1.717 1.669 L 0.38 1.134 Z M -0.297 2.828 C -0.568 3.506 -0.709 4.231 -0.71 4.961 L 0.73 4.963 C 0.731 4.416 0.836 3.872 1.04 3.362 L -0.297 2.828 Z M -0.71 4.961 L -0.72 11.118 L 0.72 11.12 L 0.73 4.963 L -0.71 4.961 Z M -0.72 11.117 C -0.723 12.162 -0.489 13.153 0.099 13.897 C 0.707 14.668 1.619 15.081 2.755 15.084 L 2.759 13.644 C 1.995 13.642 1.526 13.382 1.23 13.006 C 0.912 12.603 0.718 11.974 0.72 11.121 L -0.72 11.117 Z M 2.756 15.084 L 11.643 15.097 L 11.645 13.657 L 2.758 13.644 L 2.756 15.084 Z M 11.642 15.097 C 12.778 15.099 13.688 14.691 14.293 13.92 C 14.876 13.177 15.107 12.188 15.109 11.148 L 13.669 11.145 C 13.667 12.002 13.474 12.631 13.161 13.03 C 12.869 13.401 12.409 13.658 11.646 13.657 L 11.642 15.097 Z M 15.109 11.148 L 15.12 4.98 L 13.68 4.977 L 13.669 11.145 L 15.109 11.148 Z M 15.12 4.979 C 15.121 4.237 14.979 3.501 14.701 2.812 L 13.366 3.351 C 13.574 3.867 13.681 4.42 13.68 4.978 L 15.12 4.979 Z M 14.701 2.813 L 14.022 1.127 L 12.687 1.665 L 13.365 3.351 L 14.701 2.813 Z M 14.023 1.128 C 13.573 0.011 12.49 -0.72 11.286 -0.72 L 11.286 0.72 C 11.903 0.72 12.457 1.094 12.687 1.665 L 14.023 1.128 Z M 11.286 -0.72 L 3.118 -0.72 L 3.118 0.72 L 11.286 0.72 L 11.286 -0.72 Z M 3.118 -0.72 C 1.913 -0.72 0.827 0.014 0.38 1.135 L 1.717 1.669 C 1.946 1.096 2.501 0.72 3.118 0.72 L 3.118 -0.72 Z"} fill="currentColor" fillRule="nonzero" />
                    </svg>
                    <svg width={2.397} height={1.440} viewBox="0 -0.720 2.397 1.440" fill="none" style={{
                      position: "absolute",
                      left: 6.364,
                      top: 13.582,
                      width: 2.397,
                      height: 1.4399999380111694,
                      color: "var(--grayscale-500)",
                    }}>
                      <path d={"M 0 -0.72 C -0.398 -0.72 -0.72 -0.398 -0.72 0 C -0.72 0.398 -0.398 0.72 0 0.72 L 0 -0.72 Z M 2.397 0.72 C 2.794 0.72 3.117 0.398 3.117 0 C 3.117 -0.398 2.794 -0.72 2.397 -0.72 L 2.397 0.72 Z M 0 0.72 L 2.397 0.72 L 2.397 -0.72 L 0 -0.72 L 0 0.72 Z"} fill="currentColor" fillRule="nonzero" />
                    </svg>
                    <svg width={14.180} height={1.440} viewBox="0 -0.720 14.180 1.440" fill="none" style={{
                      position: "absolute",
                      left: 3.191,
                      top: 6.805,
                      width: 14.18,
                      height: 1.4399999380111694,
                      color: "var(--grayscale-500)",
                    }}>
                      <path d={"M 0 -0.72 C -0.398 -0.72 -0.72 -0.398 -0.72 0 C -0.72 0.398 -0.398 0.72 0 0.72 L 0 -0.72 Z M 14.18 0.72 C 14.577 0.72 14.9 0.398 14.9 0 C 14.9 -0.398 14.577 -0.72 14.18 -0.72 L 14.18 0.72 Z M 0 0.72 L 14.18 0.72 L 14.18 -0.72 L 0 -0.72 L 0 0.72 Z"} fill="currentColor" fillRule="nonzero" />
                    </svg>
                    <svg width={1.440} height={3.994} viewBox="-0.720 0 1.440 3.994" fill="none" style={{
                      position: "absolute",
                      left: 10.28,
                      top: 2.812,
                      width: 1.4399999380111694,
                      height: 3.994,
                      color: "var(--grayscale-500)",
                    }}>
                      <path d={"M -0.72 3.994 C -0.72 4.392 -0.398 4.714 0 4.714 C 0.398 4.714 0.72 4.392 0.72 3.994 L -0.72 3.994 Z M 0.72 0 C 0.72 -0.398 0.398 -0.72 0 -0.72 C -0.398 -0.72 -0.72 -0.398 -0.72 0 L 0.72 0 Z M 0.72 3.994 L 0.72 0 L -0.72 0 L -0.72 3.994 L 0.72 3.994 Z"} fill="currentColor" fillRule="nonzero" />
                    </svg>
                  </div>
                  <div style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "row",
                    gap: 6,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexGrow: 1,
                  }}>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 500,
                      fontSize: 14,
                      lineHeight: "20px",
                      letterSpacing: "0.060em",
                      color: "var(--grayscale-500)",
                      flexGrow: 1,
                    }}>Inventory</span>
                    <div style={{
                        position: "relative",
                        width: 20,
                        height: 20,
                        flexShrink: 0,
                      }}>
                      <Plus4 style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  borderRadius: 8,
                  display: "flex",
                  flexDirection: "row",
                  gap: "calc(var(--radius-8) * 1px)",
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
                    height: 20,
                    overflow: "hidden",
                    flexShrink: 0,
                  }}>
                    <div style={{
                      position: "absolute",
                      left: 2.292,
                      top: 2.708,
                      width: 15.417,
                      height: 15.035,
                      overflow: "hidden",
                    }}>
                      <div style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: 18.5,
                        height: 18.042,
                        overflow: "hidden",
                      }}>
                        <svg width={18.500} height={13.486} viewBox="0 0 18.500 13.486" fill="none" style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          width: 18.5,
                          height: 13.486,
                          color: "var(--icon-secondary)",
                        }}>
                          <path d={"M 0.128 -0.739 C -0.28 -0.81 -0.668 -0.536 -0.739 -0.128 C -0.81 0.28 -0.536 0.668 -0.128 0.739 L 0.128 -0.739 Z M 2.08 0.36 L 2.827 0.297 C 2.799 -0.043 2.544 -0.321 2.208 -0.379 L 2.08 0.36 Z M 3.043 11.833 L 3.79 11.772 L 3.79 11.77 L 3.043 11.833 Z M 4.843 13.486 L 4.843 12.736 L 4.841 12.736 L 4.843 13.486 Z M 15.752 13.486 L 15.754 12.736 L 15.752 12.736 L 15.752 13.486 Z M 17.537 11.94 L 16.795 11.833 L 16.795 11.834 L 17.537 11.94 Z M 18.486 5.382 L 19.228 5.489 L 19.228 5.489 L 18.486 5.382 Z M 17.351 3.863 L 17.458 3.121 L 17.455 3.12 L 17.351 3.863 Z M 2.414 3.099 C 2 3.099 1.664 3.435 1.664 3.849 C 1.664 4.263 2 4.599 2.414 4.599 L 2.414 3.099 Z M -0.128 0.739 L 1.952 1.099 L 2.208 -0.379 L 0.128 -0.739 L -0.128 0.739 Z M 1.333 0.423 L 2.296 11.896 L 3.79 11.77 L 2.827 0.297 L 1.333 0.423 Z M 2.296 11.894 C 2.405 13.221 3.514 14.24 4.845 14.236 L 4.841 12.736 C 4.292 12.738 3.835 12.319 3.79 11.772 L 2.296 11.894 Z M 4.843 14.236 L 15.752 14.236 L 15.752 12.736 L 4.843 12.736 L 4.843 14.236 Z M 15.75 14.236 C 17.022 14.239 18.1 13.303 18.279 12.046 L 16.795 11.834 C 16.72 12.353 16.276 12.737 15.754 12.736 L 15.75 14.236 Z M 18.279 12.047 L 19.228 5.489 L 17.744 5.275 L 16.795 11.833 L 18.279 12.047 Z M 19.228 5.489 C 19.394 4.346 18.6 3.286 17.458 3.121 L 17.244 4.605 C 17.566 4.652 17.79 4.952 17.744 5.275 L 19.228 5.489 Z M 17.455 3.12 C 17.439 3.118 17.414 3.116 17.406 3.115 C 17.4 3.115 17.391 3.114 17.387 3.114 C 17.379 3.113 17.373 3.113 17.37 3.113 C 17.362 3.113 17.355 3.113 17.35 3.113 C 17.339 3.112 17.325 3.112 17.309 3.112 C 17.278 3.112 17.233 3.112 17.176 3.111 C 17.063 3.111 16.899 3.11 16.693 3.11 C 16.279 3.109 15.693 3.108 14.991 3.107 C 13.587 3.105 11.722 3.104 9.859 3.103 C 7.996 3.101 6.135 3.101 4.739 3.1 C 4.042 3.1 3.46 3.099 3.053 3.099 C 2.85 3.099 2.69 3.099 2.581 3.099 C 2.527 3.099 2.485 3.099 2.457 3.099 C 2.443 3.099 2.432 3.099 2.425 3.099 C 2.421 3.099 2.419 3.099 2.417 3.099 C 2.416 3.099 2.415 3.099 2.415 3.099 C 2.415 3.099 2.415 3.099 2.414 3.099 C 2.414 3.099 2.414 3.099 2.414 3.849 C 2.414 4.599 2.414 4.599 2.414 4.599 C 2.414 4.599 2.414 4.599 2.414 4.599 C 2.415 4.599 2.416 4.599 2.416 4.599 C 2.418 4.599 2.421 4.599 2.425 4.599 C 2.432 4.599 2.442 4.599 2.456 4.599 C 2.485 4.599 2.526 4.599 2.581 4.599 C 2.69 4.599 2.85 4.599 3.053 4.599 C 3.46 4.599 4.041 4.6 4.739 4.6 C 6.134 4.601 7.995 4.601 9.858 4.603 C 11.721 4.604 13.586 4.605 14.989 4.607 C 15.691 4.608 16.277 4.609 16.689 4.61 C 16.895 4.61 17.058 4.611 17.169 4.611 C 17.225 4.612 17.267 4.612 17.296 4.612 C 17.31 4.612 17.319 4.612 17.324 4.612 C 17.327 4.613 17.327 4.613 17.324 4.612 C 17.323 4.612 17.318 4.612 17.312 4.612 C 17.309 4.612 17.3 4.611 17.295 4.611 C 17.287 4.61 17.263 4.608 17.247 4.606 L 17.455 3.12 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                        <svg width={2.773} height={1.500} viewBox="0 -0.750 2.773 1.500" fill="none" style={{
                          position: "absolute",
                          left: 11.375,
                          top: 7.545,
                          width: 2.773,
                          height: 1.5,
                          color: "var(--icon-secondary)",
                        }}>
                          <path d={"M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 -0.75 Z M 2.773 0.75 C 3.187 0.75 3.523 0.414 3.523 0 C 3.523 -0.414 3.187 -0.75 2.773 -0.75 L 2.773 0.75 Z M 0 0.75 L 2.773 0.75 L 2.773 -0.75 L 0 -0.75 L 0 0.75 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                        <svg width={1.088} height={1.089} viewBox="0 0 1.088 1.089" fill="none" style={{
                          position: "absolute",
                          left: 3.86,
                          top: 16.953,
                          width: 1.088,
                          height: 1.089,
                          color: "var(--icon-secondary)",
                        }}>
                          <path d={"M 0.544 0 C 0.845 0 1.088 0.244 1.088 0.544 C 1.088 0.845 0.845 1.089 0.544 1.089 C 0.243 1.089 0 0.845 0 0.544 C 0 0.244 0.243 0 0.544 0 Z"} fill="currentColor" fillRule="evenodd" />
                          <path d={"M 0.544 0.75 C 0.43 0.75 0.338 0.657 0.338 0.544 L 1.838 0.544 C 1.838 -0.169 1.26 -0.75 0.544 -0.75 L 0.544 0.75 Z M 0.338 0.544 C 0.338 0.433 0.429 0.339 0.544 0.339 L 0.544 1.839 C 1.261 1.839 1.838 1.257 1.838 0.544 L 0.338 0.544 Z M 0.544 0.339 C 0.659 0.339 0.75 0.433 0.75 0.544 L -0.75 0.544 C -0.75 1.257 -0.173 1.839 0.544 1.839 L 0.544 0.339 Z M 0.75 0.544 C 0.75 0.657 0.658 0.75 0.544 0.75 L 0.544 -0.75 C -0.172 -0.75 -0.75 -0.169 -0.75 0.544 L 0.75 0.544 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                        <svg width={1.089} height={1.089} viewBox="0 0 1.089 1.089" fill="none" style={{
                          position: "absolute",
                          left: 15.141,
                          top: 16.953,
                          width: 1.089,
                          height: 1.089,
                          color: "var(--icon-secondary)",
                        }}>
                          <path d={"M 0.544 0 C 0.845 0 1.089 0.244 1.089 0.544 C 1.089 0.845 0.845 1.089 0.544 1.089 C 0.243 1.089 0 0.845 0 0.544 C 0 0.244 0.243 0 0.544 0 Z"} fill="currentColor" fillRule="evenodd" />
                          <path d={"M 0.544 0.75 C 0.432 0.75 0.339 0.659 0.339 0.544 L 1.839 0.544 C 1.839 -0.171 1.258 -0.75 0.544 -0.75 L 0.544 0.75 Z M 0.339 0.544 C 0.339 0.431 0.431 0.339 0.544 0.339 L 0.544 1.839 C 1.259 1.839 1.839 1.259 1.839 0.544 L 0.339 0.544 Z M 0.544 0.339 C 0.659 0.339 0.75 0.433 0.75 0.544 L -0.75 0.544 C -0.75 1.257 -0.173 1.839 0.544 1.839 L 0.544 0.339 Z M 0.75 0.544 C 0.75 0.657 0.658 0.75 0.544 0.75 L 0.544 -0.75 C -0.172 -0.75 -0.75 -0.169 -0.75 0.544 L 0.75 0.544 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "row",
                    gap: 6,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexGrow: 1,
                  }}>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 500,
                      fontSize: 14,
                      lineHeight: "20px",
                      letterSpacing: "0.060em",
                      color: "var(--grayscale-500)",
                      flexGrow: 1,
                    }}>Sales</span>
                    <div style={{
                        position: "relative",
                        width: 20,
                        height: 20,
                        flexShrink: 0,
                      }}>
                      <Plus4 style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  borderRadius: 8,
                  display: "flex",
                  flexDirection: "row",
                  gap: "calc(var(--radius-8) * 1px)",
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
                    height: 20,
                    overflow: "hidden",
                    flexShrink: 0,
                  }}>
                    <div style={{
                      position: "absolute",
                      left: 2.751,
                      top: 1.898,
                      width: 15.072,
                      height: 16.018,
                      overflow: "hidden",
                    }}>
                      <div style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: 18.087,
                        height: 19.222,
                        overflow: "hidden",
                      }}>
                        <svg width={18.087} height={14.682} viewBox="0 0 18.087 14.682" fill="none" style={{
                          position: "absolute",
                          left: 0,
                          top: 4.54,
                          width: 18.087,
                          height: 14.682,
                          color: "var(--icon-secondary)",
                        }}>
                          <path d={"M 0.114 9.117 L 0.856 9.228 C 0.857 9.223 0.857 9.218 0.858 9.213 L 0.114 9.117 Z M 0.892 3.076 L 0.155 2.939 C 0.152 2.952 0.15 2.966 0.148 2.98 L 0.892 3.076 Z M 17.222 3.076 L 17.966 2.98 C 17.963 2.958 17.959 2.936 17.954 2.914 L 17.222 3.076 Z M 18 9.117 L 17.256 9.213 L 17.257 9.223 L 18 9.117 Z M 13.213 13.932 L 4.865 13.932 L 4.865 15.432 L 13.213 15.432 L 13.213 13.932 Z M 4.865 13.932 C 3.384 13.932 2.276 13.657 1.603 13.024 C 0.968 12.428 0.54 11.335 0.856 9.228 L -0.628 9.006 C -0.98 11.356 -0.566 13.045 0.576 14.118 C 1.678 15.153 3.279 15.432 4.865 15.432 L 4.865 13.932 Z M 0.858 9.213 L 1.636 3.171 L 0.148 2.98 L -0.63 9.021 L 0.858 9.213 Z M 1.63 3.212 C 1.81 2.238 2.196 1.631 2.611 1.268 C 3.028 0.904 3.516 0.75 3.968 0.75 L 3.968 -0.75 C 3.174 -0.75 2.33 -0.478 1.624 0.139 C 0.915 0.758 0.386 1.689 0.155 2.939 L 1.63 3.212 Z M 3.968 0.75 L 14.146 0.75 L 14.146 -0.75 L 3.968 -0.75 L 3.968 0.75 Z M 14.146 0.75 C 14.985 0.75 16.072 1.345 16.489 3.237 L 17.954 2.914 C 17.419 0.486 15.834 -0.75 14.146 -0.75 L 14.146 0.75 Z M 16.478 3.171 L 17.256 9.213 L 18.744 9.021 L 17.966 2.98 L 16.478 3.171 Z M 17.257 9.223 C 17.519 11.045 17.107 12.174 16.435 12.856 C 15.742 13.558 14.632 13.932 13.213 13.932 L 13.213 15.432 C 14.86 15.432 16.426 15.001 17.503 13.909 C 18.6 12.796 19.048 11.143 18.742 9.01 L 17.257 9.223 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                        <svg width={8.659} height={4.320} viewBox="0 0 8.659 4.320" fill="none" style={{
                          position: "absolute",
                          left: 4.69,
                          top: 0,
                          width: 8.659,
                          height: 4.32,
                          color: "var(--icon-secondary)",
                        }}>
                          <path d={"M 7.909 4.32 C 7.909 4.735 8.245 5.07 8.659 5.07 C 9.073 5.07 9.409 4.735 9.409 4.32 L 7.909 4.32 Z M 4.339 0 L 4.336 0.75 L 4.339 0.75 L 4.339 0 Z M 1.272 1.259 L 1.801 1.79 L 1.801 1.79 L 1.272 1.259 Z M -0.75 4.32 C -0.75 4.735 -0.414 5.07 0 5.07 C 0.414 5.07 0.75 4.735 0.75 4.32 L -0.75 4.32 Z M 9.409 4.32 C 9.409 1.52 7.139 -0.75 4.339 -0.75 L 4.339 0.75 C 6.311 0.75 7.909 2.349 7.909 4.32 L 9.409 4.32 Z M 4.342 -0.75 C 2.993 -0.756 1.698 -0.224 0.743 0.728 L 1.801 1.79 C 2.474 1.12 3.386 0.746 4.336 0.75 L 4.342 -0.75 Z M 0.743 0.728 C -0.213 1.679 -0.75 2.972 -0.75 4.32 L 0.75 4.32 C 0.75 3.371 1.128 2.46 1.801 1.79 L 0.743 0.728 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                        <svg width={0.046} height={1.500} viewBox="0 -0.750 0.046 1.500" fill="none" style={{
                          position: "absolute",
                          left: 11.949,
                          top: 8.824,
                          width: 0.046,
                          height: 1.5,
                          color: "var(--icon-secondary)",
                        }}>
                          <path d={"M 0.046 0.75 C 0.46 0.75 0.796 0.414 0.796 0 C 0.796 -0.414 0.46 -0.75 0.046 -0.75 L 0.046 0.75 Z M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 -0.75 Z M 0.046 -0.75 L 0 -0.75 L 0 0.75 L 0.046 0.75 L 0.046 -0.75 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                        <svg width={0.046} height={1.500} viewBox="0 -0.750 0.046 1.500" fill="none" style={{
                          position: "absolute",
                          left: 6.119,
                          top: 8.824,
                          width: 0.046,
                          height: 1.5,
                          color: "var(--icon-secondary)",
                        }}>
                          <path d={"M 0.046 0.75 C 0.46 0.75 0.796 0.414 0.796 0 C 0.796 -0.414 0.46 -0.75 0.046 -0.75 L 0.046 0.75 Z M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 -0.75 Z M 0.046 -0.75 L 0 -0.75 L 0 0.75 L 0.046 0.75 L 0.046 -0.75 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "row",
                    gap: 6,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexGrow: 1,
                  }}>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 500,
                      fontSize: 14,
                      lineHeight: "20px",
                      letterSpacing: "0.060em",
                      color: "var(--grayscale-500)",
                      flexGrow: 1,
                    }}>Purchases</span>
                    <div style={{
                        position: "relative",
                        width: 20,
                        height: 20,
                        flexShrink: 0,
                      }}>
                      <Plus4 style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
              <span style={{
                position: "relative",
                fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 14,
                lineHeight: "20px",
                letterSpacing: "0.060em",
                color: "var(--grayscale-500)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Management</span>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: 4,
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <div style={{
                  position: "relative",
                  borderRadius: 8,
                  display: "flex",
                  flexDirection: "row",
                  gap: "calc(var(--radius-8) * 1px)",
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
                    height: 20,
                    overflow: "hidden",
                    flexShrink: 0,
                  }}>
                    <div style={{
                      position: "absolute",
                      left: 3.126,
                      top: 2.291,
                      width: 13.887,
                      height: 15.342,
                      overflow: "hidden",
                    }}>
                      <div style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: 16.665,
                        height: 18.41,
                        overflow: "hidden",
                      }}>
                        <svg width={7.220} height={1.500} viewBox="0 -0.750 7.220 1.500" fill="none" style={{
                          position: "absolute",
                          left: 4.745,
                          top: 13.474,
                          width: 7.22,
                          height: 1.5,
                          color: "var(--icon-secondary)",
                        }}>
                          <path d={"M 7.22 0.75 C 7.634 0.75 7.97 0.414 7.97 0 C 7.97 -0.414 7.634 -0.75 7.22 -0.75 L 7.22 0.75 Z M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 -0.75 Z M 7.22 -0.75 L 0 -0.75 L 0 0.75 L 7.22 0.75 L 7.22 -0.75 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                        <svg width={7.220} height={1.500} viewBox="0 -0.750 7.220 1.500" fill="none" style={{
                          position: "absolute",
                          left: 4.745,
                          top: 9.287,
                          width: 7.22,
                          height: 1.5,
                          color: "var(--icon-secondary)",
                        }}>
                          <path d={"M 7.22 0.75 C 7.634 0.75 7.97 0.414 7.97 0 C 7.97 -0.414 7.634 -0.75 7.22 -0.75 L 7.22 0.75 Z M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 -0.75 Z M 7.22 -0.75 L 0 -0.75 L 0 0.75 L 7.22 0.75 L 7.22 -0.75 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                        <svg width={2.755} height={1.500} viewBox="0 -0.750 2.755 1.500" fill="none" style={{
                          position: "absolute",
                          left: 4.746,
                          top: 5.11,
                          width: 2.755,
                          height: 1.5,
                          color: "var(--icon-secondary)",
                        }}>
                          <path d={"M 2.755 0.75 C 3.169 0.75 3.505 0.414 3.505 0 C 3.505 -0.414 3.169 -0.75 2.755 -0.75 L 2.755 0.75 Z M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 -0.75 Z M 2.755 -0.75 L 0 -0.75 L 0 0.75 L 2.755 0.75 L 2.755 -0.75 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                        <svg width={16.665} height={18.410} viewBox="0 0 16.665 18.410" fill="none" style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          width: 16.665,
                          height: 18.41,
                          color: "var(--icon-secondary)",
                        }}>
                          <path d={"M 12.158 0 L 12.158 -0.75 L 12.158 -0.75 L 12.158 0 Z M 4.469 0.004 L 4.469 -0.746 L 4.464 -0.746 L 4.469 0.004 Z M 4.506 18.41 L 4.506 19.16 L 4.506 19.16 L 4.506 18.41 Z M 12.195 18.407 L 12.195 19.157 L 12.2 19.157 L 12.195 18.407 Z M 12.158 0 C 12.158 -0.75 12.158 -0.75 12.158 -0.75 C 12.157 -0.75 12.157 -0.75 12.157 -0.75 C 12.157 -0.75 12.157 -0.75 12.156 -0.75 C 12.155 -0.75 12.154 -0.75 12.152 -0.75 C 12.148 -0.75 12.143 -0.75 12.136 -0.75 C 12.121 -0.75 12.1 -0.75 12.071 -0.75 C 12.015 -0.75 11.933 -0.75 11.828 -0.75 C 11.618 -0.75 11.318 -0.75 10.958 -0.749 C 10.238 -0.749 9.278 -0.748 8.318 -0.748 C 7.357 -0.747 6.396 -0.747 5.675 -0.747 C 5.314 -0.746 5.014 -0.746 4.802 -0.746 C 4.697 -0.746 4.614 -0.746 4.557 -0.746 C 4.528 -0.746 4.507 -0.746 4.492 -0.746 C 4.484 -0.746 4.479 -0.746 4.475 -0.746 C 4.471 -0.746 4.469 -0.746 4.469 -0.746 L 4.469 0.754 C 4.475 0.754 6.398 0.753 8.318 0.752 C 9.279 0.751 10.239 0.751 10.959 0.751 C 11.319 0.75 11.619 0.75 11.828 0.75 C 11.933 0.75 12.016 0.75 12.072 0.75 C 12.1 0.75 12.122 0.75 12.136 0.75 C 12.144 0.75 12.149 0.75 12.153 0.75 C 12.155 0.75 12.156 0.75 12.157 0.75 C 12.157 0.75 12.158 0.75 12.158 0.75 C 12.158 0.75 12.158 0.75 12.158 0.75 C 12.158 0.75 12.158 0.75 12.158 0 Z M 4.464 -0.746 C 2.916 -0.736 1.594 -0.218 0.659 0.753 C -0.273 1.721 -0.75 3.067 -0.75 4.607 L 0.75 4.607 C 0.75 3.377 1.127 2.43 1.74 1.793 C 2.35 1.159 3.262 0.761 4.474 0.754 L 4.464 -0.746 Z M -0.75 4.607 L -0.75 13.803 L 0.75 13.803 L 0.75 4.607 L -0.75 4.607 Z M -0.75 13.803 C -0.75 15.35 -0.269 16.703 0.67 17.672 C 1.612 18.645 2.946 19.16 4.506 19.16 L 4.506 17.66 C 3.282 17.66 2.363 17.263 1.748 16.629 C 1.13 15.991 0.75 15.04 0.75 13.803 L -0.75 13.803 Z M 4.506 18.41 C 4.506 19.16 4.506 19.16 4.506 19.16 C 4.506 19.16 4.507 19.16 4.507 19.16 C 4.507 19.16 4.507 19.16 4.508 19.16 C 4.509 19.16 4.51 19.16 4.512 19.16 C 4.516 19.16 4.521 19.16 4.528 19.16 C 4.543 19.16 4.564 19.16 4.593 19.16 C 4.649 19.16 4.731 19.16 4.836 19.16 C 5.046 19.16 5.346 19.16 5.706 19.16 C 6.426 19.159 7.386 19.159 8.346 19.158 C 9.306 19.158 10.267 19.158 10.988 19.157 C 11.349 19.157 11.65 19.157 11.861 19.157 C 11.967 19.157 12.05 19.157 12.107 19.157 C 12.135 19.157 12.157 19.157 12.172 19.157 C 12.18 19.157 12.185 19.157 12.189 19.157 C 12.191 19.157 12.193 19.157 12.194 19.157 C 12.195 19.157 12.195 19.157 12.195 19.157 L 12.195 17.657 C 12.188 17.657 10.266 17.658 8.345 17.659 C 7.385 17.659 6.425 17.659 5.705 17.66 C 5.345 17.66 5.045 17.66 4.836 17.66 C 4.731 17.66 4.648 17.66 4.592 17.66 C 4.564 17.66 4.542 17.66 4.528 17.66 C 4.52 17.66 4.515 17.66 4.511 17.66 C 4.509 17.66 4.508 17.66 4.507 17.66 C 4.507 17.66 4.506 17.66 4.506 17.66 C 4.506 17.66 4.506 17.66 4.506 17.66 C 4.506 17.66 4.506 17.66 4.506 18.41 Z M 12.2 19.157 C 13.748 19.147 15.071 18.629 16.005 17.657 C 16.937 16.689 17.415 15.343 17.415 13.803 L 15.915 13.803 C 15.915 15.033 15.538 15.98 14.925 16.617 C 14.314 17.251 13.402 17.65 12.19 17.657 L 12.2 19.157 Z M 17.415 13.803 L 17.415 4.607 L 15.915 4.607 L 15.915 13.803 L 17.415 13.803 Z M 17.415 4.607 C 17.415 3.06 16.934 1.707 15.994 0.738 C 15.052 -0.235 13.718 -0.75 12.158 -0.75 L 12.158 0.75 C 13.382 0.75 14.302 1.147 14.917 1.781 C 15.535 2.419 15.915 3.37 15.915 4.607 L 17.415 4.607 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "row",
                    gap: 6,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexGrow: 1,
                  }}>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 500,
                      fontSize: 14,
                      lineHeight: "20px",
                      letterSpacing: "0.060em",
                      color: "var(--grayscale-500)",
                      flexGrow: 1,
                    }}>Documents</span>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  borderRadius: 8,
                  display: "flex",
                  flexDirection: "row",
                  gap: "calc(var(--radius-8) * 1px)",
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
                    height: 20,
                    overflow: "hidden",
                    flexShrink: 0,
                  }}>
                    <svg width={3.455} height={3.454} viewBox="0 0 3.455 3.454" fill="none" style={{
                      position: "absolute",
                      left: 11.392,
                      top: 13.747,
                      width: 3.455,
                      height: 3.454,
                      color: "rgb(145,153,146)",
                    }}>
                      <path d={"M 3.455 1.739 L 4.175 1.744 L 4.175 1.744 L 3.455 1.739 Z M 1.716 3.454 L 1.72 2.734 L 1.718 2.734 L 1.716 3.454 Z M 0 1.727 L 0.72 1.729 L 0.72 1.727 L 0 1.727 Z M 0 1.716 L -0.72 1.71 L -0.72 1.716 L 0 1.716 Z M 1.739 0 L 1.744 -0.72 L 1.744 -0.72 L 1.739 0 Z M 2.735 1.734 C 2.73 2.29 2.277 2.737 1.72 2.734 L 1.711 4.174 C 3.062 4.183 4.165 3.095 4.175 1.744 L 2.735 1.734 Z M 1.718 2.734 C 1.165 2.732 0.718 2.282 0.72 1.729 L -0.72 1.724 C -0.724 3.073 0.365 4.169 1.713 4.174 L 1.718 2.734 Z M 0.72 1.727 L 0.72 1.716 L -0.72 1.716 L -0.72 1.727 L 0.72 1.727 Z M 0.72 1.721 C 0.724 1.164 1.178 0.716 1.734 0.72 L 1.744 -0.72 C 0.393 -0.729 -0.71 0.359 -0.72 1.71 L 0.72 1.721 Z M 1.734 0.72 C 2.29 0.724 2.738 1.177 2.735 1.734 L 4.175 1.744 C 4.183 0.392 3.095 -0.711 1.744 -0.72 L 1.734 0.72 Z"} fill="currentColor" fillRule="nonzero" />
                    </svg>
                    <svg width={3.455} height={3.454} viewBox="0 0 3.455 3.454" fill="none" style={{
                      position: "absolute",
                      left: 6.007,
                      top: 8.273,
                      width: 3.455,
                      height: 3.454,
                      color: "rgb(145,153,146)",
                    }}>
                      <path d={"M 3.455 1.738 L 4.174 1.743 L 4.174 1.743 L 3.455 1.738 Z M 1.716 3.454 L 1.72 2.734 L 1.718 2.734 L 1.716 3.454 Z M 0 1.727 L 0.72 1.729 L 0.72 1.727 L 0 1.727 Z M 0 1.715 L -0.72 1.71 L -0.72 1.715 L 0 1.715 Z M 1.739 0 L 1.734 0.72 L 1.734 0.72 L 1.739 0 Z M 2.735 1.733 C 2.73 2.29 2.276 2.737 1.72 2.734 L 1.711 4.174 C 3.062 4.183 4.165 3.095 4.174 1.743 L 2.735 1.733 Z M 1.718 2.734 C 1.165 2.732 0.718 2.282 0.72 1.729 L -0.72 1.724 C -0.724 3.072 0.365 4.169 1.713 4.174 L 1.718 2.734 Z M 0.72 1.727 L 0.72 1.715 L -0.72 1.715 L -0.72 1.727 L 0.72 1.727 Z M 0.72 1.72 C 0.724 1.164 1.178 0.716 1.734 0.72 L 1.744 -0.72 C 0.392 -0.73 -0.71 0.359 -0.72 1.71 L 0.72 1.72 Z M 1.734 0.72 C 2.29 0.724 2.738 1.178 2.735 1.734 L 4.174 1.743 C 4.183 0.392 3.095 -0.711 1.744 -0.72 L 1.734 0.72 Z"} fill="currentColor" fillRule="nonzero" />
                    </svg>
                    <svg width={3.455} height={3.454} viewBox="0 0 3.455 3.454" fill="none" style={{
                      position: "absolute",
                      left: 11.067,
                      top: 2.8,
                      width: 3.455,
                      height: 3.454,
                      color: "rgb(145,153,146)",
                    }}>
                      <path d={"M 3.454 1.739 L 4.174 1.744 L 4.174 1.744 L 3.454 1.739 Z M 1.716 3.454 L 1.72 2.734 L 1.718 2.734 L 1.716 3.454 Z M 0 1.727 L 0.72 1.729 L 0.72 1.727 L 0 1.727 Z M 0 1.716 L -0.72 1.71 L -0.72 1.716 L 0 1.716 Z M 1.739 0 L 1.734 0.72 L 1.734 0.72 L 1.739 0 Z M 2.735 1.734 C 2.73 2.29 2.277 2.737 1.72 2.734 L 1.711 4.174 C 3.062 4.183 4.165 3.095 4.174 1.744 L 2.735 1.734 Z M 1.718 2.734 C 1.165 2.732 0.718 2.282 0.72 1.729 L -0.72 1.724 C -0.724 3.073 0.365 4.169 1.713 4.174 L 1.718 2.734 Z M 0.72 1.727 L 0.72 1.716 L -0.72 1.716 L -0.72 1.727 L 0.72 1.727 Z M 0.72 1.721 C 0.724 1.164 1.178 0.716 1.734 0.72 L 1.744 -0.72 C 0.393 -0.729 -0.71 0.359 -0.72 1.71 L 0.72 1.721 Z M 1.734 0.72 C 2.29 0.724 2.738 1.177 2.735 1.734 L 4.174 1.744 C 4.183 0.392 3.095 -0.711 1.744 -0.72 L 1.734 0.72 Z"} fill="currentColor" fillRule="nonzero" />
                    </svg>
                    <svg width={13.330} height={1.440} viewBox="0 -0.720 13.330 1.440" fill="none" style={{
                      position: "absolute",
                      left: 3.719,
                      top: 15.473,
                      width: 13.33,
                      height: 1.4399999380111694,
                      color: "rgb(145,153,146)",
                    }}>
                      <path d={"M 0 -0.72 C -0.398 -0.72 -0.72 -0.398 -0.72 0 C -0.72 0.398 -0.398 0.72 0 0.72 L 0 -0.72 Z M 7.673 0.72 C 8.071 0.72 8.393 0.398 8.393 0 C 8.393 -0.398 8.071 -0.72 7.673 -0.72 L 7.673 0.72 Z M 11.13 -0.72 C 10.732 -0.72 10.41 -0.398 10.41 0 C 10.41 0.398 10.732 0.72 11.13 0.72 L 11.13 -0.72 Z M 13.33 0.72 C 13.728 0.72 14.05 0.398 14.05 0 C 14.05 -0.398 13.728 -0.72 13.33 -0.72 L 13.33 0.72 Z M 0 0.72 L 7.673 0.72 L 7.673 -0.72 L 0 -0.72 L 0 0.72 Z M 11.13 0.72 L 13.33 0.72 L 13.33 -0.72 L 11.13 -0.72 L 11.13 0.72 Z"} fill="currentColor" fillRule="nonzero" />
                    </svg>
                    <svg width={13.330} height={1.440} viewBox="0 -0.720 13.330 1.440" fill="none" style={{
                      position: "absolute",
                      left: 3.719,
                      top: 10.002,
                      width: 13.33,
                      height: 1.4399999380111694,
                      color: "rgb(145,153,146)",
                    }}>
                      <path d={"M 0 -0.72 C -0.398 -0.72 -0.72 -0.398 -0.72 0 C -0.72 0.398 -0.398 0.72 0 0.72 L 0 -0.72 Z M 2.288 0.72 C 2.685 0.72 3.008 0.398 3.008 0 C 3.008 -0.398 2.685 -0.72 2.288 -0.72 L 2.288 0.72 Z M 5.744 -0.72 C 5.346 -0.72 5.024 -0.398 5.024 0 C 5.024 0.398 5.346 0.72 5.744 0.72 L 5.744 -0.72 Z M 13.33 0.72 C 13.728 0.72 14.05 0.398 14.05 0 C 14.05 -0.398 13.728 -0.72 13.33 -0.72 L 13.33 0.72 Z M 0 0.72 L 2.288 0.72 L 2.288 -0.72 L 0 -0.72 L 0 0.72 Z M 5.744 0.72 L 13.33 0.72 L 13.33 -0.72 L 5.744 -0.72 L 5.744 0.72 Z"} fill="currentColor" fillRule="nonzero" />
                    </svg>
                    <svg width={13.329} height={1.440} viewBox="0 -0.720 13.329 1.440" fill="none" style={{
                      position: "absolute",
                      left: 3.719,
                      top: 4.527,
                      width: 13.329,
                      height: 1.4399999380111694,
                      color: "rgb(145,153,146)",
                    }}>
                      <path d={"M 0 -0.72 C -0.398 -0.72 -0.72 -0.398 -0.72 0 C -0.72 0.398 -0.398 0.72 0 0.72 L 0 -0.72 Z M 7.345 0.72 C 7.743 0.72 8.065 0.398 8.065 0 C 8.065 -0.398 7.743 -0.72 7.345 -0.72 L 7.345 0.72 Z M 10.8 -0.72 C 10.403 -0.72 10.08 -0.398 10.08 0 C 10.08 0.398 10.403 0.72 10.8 0.72 L 10.8 -0.72 Z M 13.329 0.72 C 13.727 0.72 14.049 0.398 14.049 0 C 14.049 -0.398 13.727 -0.72 13.329 -0.72 L 13.329 0.72 Z M 0 0.72 L 7.345 0.72 L 7.345 -0.72 L 0 -0.72 L 0 0.72 Z M 10.8 0.72 L 13.329 0.72 L 13.329 -0.72 L 10.8 -0.72 L 10.8 0.72 Z"} fill="currentColor" fillRule="nonzero" />
                    </svg>
                  </div>
                  <div style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "row",
                    gap: 6,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexGrow: 1,
                  }}>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 500,
                      fontSize: 14,
                      lineHeight: "20px",
                      letterSpacing: "0.060em",
                      color: "var(--grayscale-500)",
                      flexGrow: 1,
                    }}>Integrations</span>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  borderRadius: 8,
                  backgroundColor: "var(--grayscale-700)",
                  display: "flex",
                  flexDirection: "row",
                  gap: "calc(var(--radius-8) * 1px)",
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
                      height: 20,
                      flexShrink: 0,
                    }}>
                    <VerticalBarChart1 style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />
                  </div>
                  <div style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "row",
                    gap: 6,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexGrow: 1,
                  }}>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 500,
                      fontSize: 14,
                      lineHeight: "20px",
                      letterSpacing: "0.060em",
                      color: "var(--general-white)",
                      flexGrow: 1,
                    }}>Report</span>
                    <div style={{
                        position: "relative",
                        width: 20,
                        height: 20,
                        flexShrink: 0,
                      }}>
                      <Plus4 style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  borderRadius: 8,
                  display: "flex",
                  flexDirection: "row",
                  gap: "calc(var(--radius-8) * 1px)",
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
                    height: 20,
                    overflow: "hidden",
                    flexShrink: 0,
                  }}>
                    <div style={{
                      position: "absolute",
                      left: 2.291,
                      top: 2.708,
                      width: 15.4,
                      height: 14.631,
                      overflow: "hidden",
                    }}>
                      <div style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: 18.48,
                        height: 17.557,
                        overflow: "hidden",
                      }}>
                        <svg width={13.684} height={5.600} viewBox="0 0 13.684 5.600" fill="none" style={{
                          position: "absolute",
                          left: 0,
                          top: 11.957,
                          width: 13.684,
                          height: 5.6,
                          color: "var(--icon-secondary)",
                        }}>
                          <path d={"M 6.842 0.75 C 8.67 0.75 10.279 0.891 11.408 1.27 C 11.969 1.458 12.355 1.686 12.594 1.934 C 12.815 2.164 12.934 2.432 12.934 2.792 L 14.434 2.792 C 14.434 2.035 14.159 1.396 13.674 0.893 C 13.206 0.408 12.574 0.078 11.885 -0.152 C 10.515 -0.612 8.703 -0.75 6.842 -0.75 L 6.842 0.75 Z M 12.934 2.792 C 12.934 3.154 12.815 3.424 12.594 3.655 C 12.356 3.904 11.972 4.134 11.413 4.323 C 10.288 4.705 8.68 4.85 6.842 4.85 L 6.842 6.35 C 8.714 6.35 10.527 6.208 11.895 5.744 C 12.583 5.51 13.214 5.178 13.679 4.691 C 14.161 4.186 14.434 3.547 14.434 2.792 L 12.934 2.792 Z M 6.842 4.85 C 5.013 4.85 3.404 4.71 2.275 4.332 C 1.715 4.145 1.329 3.917 1.09 3.669 C 0.869 3.44 0.75 3.172 0.75 2.812 L -0.75 2.812 C -0.75 3.569 -0.475 4.208 0.01 4.711 C 0.478 5.195 1.111 5.525 1.799 5.755 C 3.169 6.213 4.981 6.35 6.842 6.35 L 6.842 4.85 Z M 0.75 2.812 C 0.75 2.45 0.869 2.179 1.09 1.948 C 1.328 1.698 1.712 1.468 2.271 1.278 C 3.396 0.896 5.004 0.75 6.842 0.75 L 6.842 -0.75 C 4.969 -0.75 3.156 -0.607 1.788 -0.142 C 1.1 0.092 0.47 0.425 0.005 0.912 C -0.478 1.418 -0.75 2.057 -0.75 2.812 L 0.75 2.812 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                        <svg width={8.771} height={8.770} viewBox="0 0 8.771 8.770" fill="none" style={{
                          position: "absolute",
                          left: 2.456,
                          top: 0,
                          width: 8.771,
                          height: 8.77,
                          color: "var(--icon-secondary)",
                        }}>
                          <path d={"M 8.771 4.385 L 8.021 4.385 L 8.021 4.388 L 8.771 4.385 Z M 4.417 8.77 L 4.417 9.52 L 4.42 9.52 L 4.417 8.77 Z M 4.386 8.02 C 2.378 8.02 0.75 6.393 0.75 4.385 L -0.75 4.385 C -0.75 7.221 1.55 9.52 4.386 9.52 L 4.386 8.02 Z M 0.75 4.385 C 0.75 2.377 2.378 0.75 4.386 0.75 L 4.386 -0.75 C 1.55 -0.75 -0.75 1.549 -0.75 4.385 L 0.75 4.385 Z M 4.386 0.75 C 6.393 0.75 8.021 2.377 8.021 4.385 L 9.521 4.385 C 9.521 1.549 7.221 -0.75 4.386 -0.75 L 4.386 0.75 Z M 8.021 4.388 C 8.028 6.386 6.413 8.013 4.414 8.02 L 4.42 9.52 C 7.247 9.509 9.532 7.21 9.521 4.382 L 8.021 4.388 Z M 4.417 8.02 L 4.386 8.02 L 4.386 9.52 L 4.417 9.52 L 4.417 8.02 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                        <svg width={2.837} height={6.518} viewBox="0 0 2.837 6.518" fill="none" style={{
                          position: "absolute",
                          left: 13.734,
                          top: 1.114,
                          width: 2.837,
                          height: 6.518,
                          color: "var(--icon-secondary)",
                        }}>
                          <path d={"M -0.104 5.775 C -0.515 5.833 -0.8 6.212 -0.743 6.622 C -0.685 7.033 -0.306 7.318 0.104 7.261 L -0.104 5.775 Z M 2.837 3.256 L 3.587 3.257 L 3.587 3.256 L 2.837 3.256 Z M 0.196 -0.74 C -0.212 -0.807 -0.598 -0.53 -0.665 -0.121 C -0.732 0.287 -0.455 0.673 -0.046 0.74 L 0.196 -0.74 Z M 0.104 7.261 C 2.07 6.984 3.583 5.299 3.587 3.257 L 2.087 3.255 C 2.085 4.539 1.132 5.602 -0.104 5.775 L 0.104 7.261 Z M 3.587 3.256 C 3.587 1.244 2.12 -0.425 0.196 -0.74 L -0.046 0.74 C 1.164 0.939 2.087 1.99 2.087 3.256 L 3.587 3.256 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                        <svg width={2.634} height={3.479} viewBox="0 0 2.634 3.479" fill="none" style={{
                          position: "absolute",
                          left: 15.846,
                          top: 11.482,
                          width: 2.634,
                          height: 3.479,
                          color: "var(--icon-secondary)",
                        }}>
                          <path d={"M 0.11 -0.742 C -0.299 -0.803 -0.681 -0.52 -0.742 -0.11 C -0.803 0.299 -0.52 0.681 -0.11 0.742 L 0.11 -0.742 Z M 1.034 2.778 C 0.646 2.925 0.452 3.358 0.599 3.745 C 0.746 4.133 1.179 4.327 1.566 4.18 L 1.034 2.778 Z M -0.11 0.742 C 0.624 0.851 1.157 1.024 1.487 1.241 C 1.78 1.433 1.884 1.632 1.884 1.895 L 3.384 1.895 C 3.384 1.038 2.946 0.405 2.31 -0.013 C 1.711 -0.406 0.927 -0.62 0.11 -0.742 L -0.11 0.742 Z M 1.884 1.895 C 1.884 2.097 1.823 2.238 1.714 2.362 C 1.591 2.501 1.378 2.647 1.034 2.778 L 1.566 4.18 C 2.046 3.998 2.5 3.738 2.838 3.356 C 3.19 2.958 3.384 2.464 3.384 1.895 L 1.884 1.895 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "row",
                    gap: 6,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexGrow: 1,
                  }}>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 500,
                      fontSize: 14,
                      lineHeight: "20px",
                      letterSpacing: "0.060em",
                      color: "var(--grayscale-500)",
                      flexGrow: 1,
                    }}>Customers</span>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  borderRadius: 8,
                  display: "flex",
                  flexDirection: "row",
                  gap: "calc(var(--radius-8) * 1px)",
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
                    height: 20,
                    overflow: "hidden",
                    flexShrink: 0,
                  }}>
                    <svg width={12.309} height={13.480} viewBox="0 0 12.309 13.480" fill="none" style={{
                      position: "absolute",
                      left: 4.891,
                      top: 2.909,
                      width: 12.309,
                      height: 13.48,
                      color: "var(--grayscale-500)",
                    }}>
                      <path d={"M 0 12.76 C -0.398 12.76 -0.72 13.083 -0.72 13.48 C -0.72 13.878 -0.398 14.2 0 14.2 L 0 12.76 Z M 12.302 10.543 L 11.582 10.542 L 11.582 10.543 L 12.302 10.543 Z M 12.309 1.362 L 13.029 1.362 L 13.029 1.362 L 12.309 1.362 Z M 11.123 0.549 L 10.795 -0.092 L 10.787 -0.088 L 11.123 0.549 Z M 10.601 0.824 L 10.934 1.463 L 10.937 1.461 L 10.601 0.824 Z M 9.604 0.853 L 9.312 1.51 L 9.317 1.513 L 9.604 0.853 Z M 8.129 0.196 L 8.421 -0.462 L 8.416 -0.465 L 8.129 0.196 Z M 6.264 0.196 L 5.977 -0.465 L 5.972 -0.462 L 6.264 0.196 Z M 4.789 0.853 L 5.076 1.513 L 5.081 1.51 L 4.789 0.853 Z M 3.792 0.824 L 3.456 1.461 L 3.458 1.462 L 3.792 0.824 Z M 3.27 0.549 L 3.606 -0.088 L 3.598 -0.092 L 3.27 0.549 Z M 1.364 1.362 L 1.364 4.807 L 2.804 4.807 L 2.804 1.362 L 1.364 1.362 Z M 1.364 4.807 L 1.364 11.396 L 2.804 11.396 L 2.804 4.807 L 1.364 4.807 Z M 1.364 11.396 C 1.364 12.15 0.754 12.76 0 12.76 L 0 14.2 C 1.549 14.2 2.804 12.945 2.804 11.396 L 1.364 11.396 Z M 0 14.2 L 9.71 14.2 L 9.71 12.76 L 0 12.76 L 0 14.2 Z M 9.71 14.2 C 10.715 14.2 11.577 13.855 12.176 13.163 C 12.762 12.486 13.022 11.564 13.022 10.543 L 11.582 10.543 C 11.582 11.336 11.38 11.882 11.087 12.22 C 10.807 12.544 10.372 12.76 9.71 12.76 L 9.71 14.2 Z M 13.022 10.543 L 13.029 1.362 L 11.589 1.361 L 11.582 10.542 L 13.022 10.543 Z M 13.029 1.362 C 13.029 0.254 11.906 -0.662 10.795 -0.092 L 11.452 1.19 C 11.47 1.18 11.479 1.181 11.483 1.181 C 11.489 1.182 11.501 1.184 11.517 1.195 C 11.547 1.216 11.589 1.266 11.589 1.362 L 13.029 1.362 Z M 10.787 -0.088 L 10.265 0.188 L 10.937 1.461 L 11.459 1.186 L 10.787 -0.088 Z M 10.267 0.186 C 10.158 0.244 10.027 0.251 9.892 0.192 L 9.317 1.513 C 9.833 1.737 10.421 1.731 10.934 1.463 L 10.267 0.186 Z M 9.897 0.195 L 8.421 -0.462 L 7.836 0.853 L 9.312 1.51 L 9.897 0.195 Z M 8.416 -0.465 C 7.632 -0.805 6.761 -0.805 5.977 -0.465 L 6.551 0.856 C 6.968 0.675 7.425 0.675 7.842 0.856 L 8.416 -0.465 Z M 5.972 -0.462 L 4.496 0.195 L 5.081 1.51 L 6.557 0.853 L 5.972 -0.462 Z M 4.501 0.192 C 4.366 0.251 4.234 0.243 4.126 0.187 L 3.458 1.462 C 3.971 1.731 4.561 1.737 5.076 1.513 L 4.501 0.192 Z M 4.128 0.188 L 3.606 -0.088 L 2.934 1.186 L 3.456 1.461 L 4.128 0.188 Z M 3.598 -0.092 C 2.482 -0.664 1.364 0.266 1.364 1.362 L 2.804 1.362 C 2.804 1.272 2.844 1.219 2.878 1.196 C 2.895 1.185 2.907 1.182 2.913 1.182 C 2.916 1.181 2.924 1.181 2.941 1.19 L 3.598 -0.092 Z"} fill="currentColor" fillRule="nonzero" />
                    </svg>
                    <svg width={2.987} height={3.802} viewBox="0 0 2.987 3.802" fill="none" style={{
                      position: "absolute",
                      left: 10.455,
                      top: 7.752,
                      width: 2.987,
                      height: 3.802,
                      color: "var(--grayscale-500)",
                    }}>
                      <path d={"M 2.716 0.72 C 3.113 0.72 3.436 0.398 3.436 0 C 3.436 -0.398 3.113 -0.72 2.716 -0.72 L 2.716 0.72 Z M 0.272 3.082 C -0.126 3.082 -0.448 3.405 -0.448 3.802 C -0.448 4.2 -0.126 4.522 0.272 4.522 L 0.272 3.082 Z M 2.716 -0.72 L 0.95 -0.72 L 0.95 0.72 L 2.716 0.72 L 2.716 -0.72 Z M 0.95 -0.72 C 0.028 -0.72 -0.72 0.028 -0.72 0.95 L 0.72 0.95 C 0.72 0.823 0.823 0.72 0.95 0.72 L 0.95 -0.72 Z M -0.72 0.95 C -0.72 1.874 0.028 2.621 0.95 2.621 L 0.95 1.181 C 0.823 1.181 0.72 1.078 0.72 0.95 L -0.72 0.95 Z M 0.95 2.621 L 2.037 2.621 L 2.037 1.181 L 0.95 1.181 L 0.95 2.621 Z M 2.037 2.621 C 2.164 2.621 2.267 2.724 2.267 2.852 L 3.707 2.852 C 3.707 1.929 2.96 1.181 2.037 1.181 L 2.037 2.621 Z M 2.267 2.852 C 2.267 2.979 2.164 3.082 2.037 3.082 L 2.037 4.522 C 2.959 4.522 3.707 3.774 3.707 2.852 L 2.267 2.852 Z M 2.037 3.082 L 0.272 3.082 L 0.272 4.522 L 2.037 4.522 L 2.037 3.082 Z"} fill="currentColor" fillRule="nonzero" />
                    </svg>
                    <svg width={1.440} height={5.403} viewBox="-0.720 0 1.440 5.403" fill="none" style={{
                      position: "absolute",
                      left: 11.948,
                      top: 6.948,
                      width: 1.4399999380111694,
                      height: 5.403,
                      color: "var(--grayscale-500)",
                    }}>
                      <path d={"M 0.72 4.605 C 0.72 4.207 0.398 3.885 0 3.885 C -0.398 3.885 -0.72 4.207 -0.72 4.605 L 0.72 4.605 Z M -0.72 5.403 C -0.72 5.8 -0.398 6.123 0 6.123 C 0.398 6.123 0.72 5.8 0.72 5.403 L -0.72 5.403 Z M 0.72 0 C 0.72 -0.398 0.398 -0.72 0 -0.72 C -0.398 -0.72 -0.72 -0.398 -0.72 0 L 0.72 0 Z M -0.72 0.805 C -0.72 1.202 -0.398 1.525 0 1.525 C 0.398 1.525 0.72 1.202 0.72 0.805 L -0.72 0.805 Z M -0.72 4.605 L -0.72 5.403 L 0.72 5.403 L 0.72 4.605 L -0.72 4.605 Z M -0.72 0 L -0.72 0.805 L 0.72 0.805 L 0.72 0 L -0.72 0 Z"} fill="currentColor" fillRule="nonzero" />
                    </svg>
                    <svg width={4.174} height={8.842} viewBox="0 0 4.174 8.842" fill="none" style={{
                      position: "absolute",
                      left: 2.8,
                      top: 7.547,
                      width: 4.174,
                      height: 8.842,
                      color: "var(--grayscale-500)",
                    }}>
                      <path d={"M 2.091 9.562 C 2.488 9.562 2.811 9.24 2.811 8.842 C 2.811 8.445 2.488 8.122 2.091 8.122 L 2.091 9.562 Z M 0.615 8.235 L 0.106 8.744 L 0.106 8.744 L 0.615 8.235 Z M 1.187 0.149 L 1.523 -0.488 L 1.516 -0.492 L 1.187 0.149 Z M 1.709 0.424 L 1.373 1.061 L 1.375 1.062 L 1.709 0.424 Z M 2.705 0.452 L 2.993 1.112 L 2.998 1.11 L 2.705 0.452 Z M 3.701 0.008 L 3.995 0.665 L 4.005 0.661 L 3.701 0.008 Z M 3.835 0.805 C 4.185 0.992 4.621 0.86 4.809 0.51 C 4.997 0.159 4.865 -0.277 4.514 -0.465 L 3.835 0.805 Z M 2.091 8.122 C 1.708 8.122 1.367 7.969 1.124 7.726 L 0.106 8.744 C 0.611 9.25 1.315 9.562 2.091 9.562 L 2.091 8.122 Z M 1.124 7.726 C 0.871 7.473 0.72 7.131 0.72 6.759 L -0.72 6.759 C -0.72 7.531 -0.404 8.234 0.106 8.744 L 1.124 7.726 Z M 0.72 6.759 L 0.72 0.961 L -0.72 0.961 L -0.72 6.759 L 0.72 6.759 Z M 0.72 0.961 C 0.72 0.866 0.762 0.815 0.792 0.795 C 0.808 0.784 0.82 0.781 0.827 0.781 C 0.831 0.78 0.84 0.78 0.859 0.789 L 1.516 -0.492 C 0.405 -1.061 -0.72 -0.149 -0.72 0.961 L 0.72 0.961 Z M 0.851 0.786 L 1.373 1.061 L 2.045 -0.213 L 1.523 -0.488 L 0.851 0.786 Z M 1.375 1.062 C 1.888 1.331 2.478 1.337 2.993 1.112 L 2.417 -0.208 C 2.283 -0.149 2.152 -0.157 2.043 -0.214 L 1.375 1.062 Z M 2.998 1.11 L 3.995 0.665 L 3.408 -0.65 L 2.412 -0.205 L 2.998 1.11 Z M 4.005 0.661 C 3.909 0.705 3.825 0.716 3.774 0.719 C 3.723 0.722 3.684 0.717 3.666 0.714 C 3.631 0.708 3.618 0.702 3.638 0.709 C 3.654 0.715 3.679 0.726 3.715 0.743 C 3.751 0.76 3.791 0.781 3.835 0.805 L 4.514 -0.465 C 4.41 -0.521 4.277 -0.589 4.147 -0.638 C 4.083 -0.662 3.994 -0.692 3.894 -0.708 C 3.814 -0.72 3.613 -0.745 3.398 -0.645 L 4.005 0.661 Z"} fill="currentColor" fillRule="nonzero" />
                    </svg>
                  </div>
                  <div style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "row",
                    gap: 6,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexGrow: 1,
                  }}>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 500,
                      fontSize: 14,
                      lineHeight: "20px",
                      letterSpacing: "0.060em",
                      color: "var(--grayscale-500)",
                      flexGrow: 1,
                    }}>Invoices</span>
                  </div>
                </div>
              </div>
            </div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 8,
              justifyContent: "flex-end",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "relative",
                fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 14,
                lineHeight: "20px",
                letterSpacing: "0.060em",
                color: "var(--grayscale-500)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Others</span>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: 4,
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <div style={{
                  position: "relative",
                  borderRadius: 8,
                  display: "flex",
                  flexDirection: "row",
                  gap: "calc(var(--radius-8) * 1px)",
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
                    height: 20,
                    overflow: "hidden",
                    flexShrink: 0,
                  }}>
                    <svg width={15} height={15} viewBox="0 0 15 15" fill="none" style={{
                      position: "absolute",
                      left: 2.5,
                      top: 2.5,
                      width: 15,
                      height: 15,
                      color: "var(--grayscale-500)",
                    }}>
                      <path d={"M 15.75 7.5 C 15.75 2.943 12.057 -0.75 7.5 -0.75 L 7.5 0.75 C 11.228 0.75 14.25 3.772 14.25 7.5 L 15.75 7.5 Z M 7.5 -0.75 C 2.943 -0.75 -0.75 2.943 -0.75 7.5 L 0.75 7.5 C 0.75 3.772 3.772 0.75 7.5 0.75 L 7.5 -0.75 Z M -0.75 7.5 C -0.75 12.056 2.943 15.75 7.5 15.75 L 7.5 14.25 C 3.772 14.25 0.75 11.227 0.75 7.5 L -0.75 7.5 Z M 7.5 15.75 C 12.057 15.75 15.75 12.056 15.75 7.5 L 14.25 7.5 C 14.25 11.227 11.228 14.25 7.5 14.25 L 7.5 15.75 Z"} fill="currentColor" fillRule="nonzero" />
                    </svg>
                    <svg width={1.500} height={0.024} viewBox="-0.750 0 1.500 0.024" fill="none" style={{
                      position: "absolute",
                      left: 9.956,
                      top: 13.497,
                      width: 1.5,
                      height: 0.024,
                      color: "var(--grayscale-500)",
                    }}>
                      <path d={"M -0.75 0.024 C -0.75 0.438 -0.414 0.774 0 0.774 C 0.414 0.774 0.75 0.438 0.75 0.024 L -0.75 0.024 Z M 0.75 0 C 0.75 -0.414 0.414 -0.75 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 L 0.75 0 Z M 0.75 0.024 L 0.75 0 L -0.75 0 L -0.75 0.024 L 0.75 0.024 Z"} fill="currentColor" fillRule="nonzero" />
                    </svg>
                    <svg width={3.980} height={4.954} viewBox="0 0 3.980 4.954" fill="none" style={{
                      position: "absolute",
                      left: 8.169,
                      top: 6.504,
                      width: 3.98,
                      height: 4.954,
                      color: "var(--grayscale-500)",
                    }}>
                      <path d={"M 1.036 4.964 C 1.042 5.378 1.382 5.709 1.796 5.704 C 2.21 5.699 2.542 5.358 2.536 4.944 L 1.036 4.964 Z M 2.954 3.611 L 2.592 2.954 L 2.582 2.959 L 2.954 3.611 Z M -0.75 1.991 C -0.75 2.405 -0.414 2.741 0 2.741 C 0.414 2.741 0.75 2.405 0.75 1.991 L -0.75 1.991 Z M 2.536 4.944 C 2.535 4.845 2.563 4.774 2.68 4.669 C 2.833 4.531 3.027 4.432 3.325 4.262 L 2.582 2.959 C 2.379 3.075 1.984 3.277 1.677 3.554 C 1.333 3.863 1.028 4.32 1.036 4.964 L 2.536 4.944 Z M 3.316 4.267 C 4.109 3.831 4.73 3.07 4.73 1.991 L 3.23 1.991 C 3.23 2.401 3.023 2.716 2.592 2.954 L 3.316 4.267 Z M 4.73 1.991 C 4.73 0.471 3.5 -0.75 1.991 -0.75 L 1.991 0.75 C 2.675 0.75 3.23 1.302 3.23 1.991 L 4.73 1.991 Z M 1.991 -0.75 C 0.472 -0.75 -0.75 0.472 -0.75 1.991 L 0.75 1.991 C 0.75 1.3 1.3 0.75 1.991 0.75 L 1.991 -0.75 Z"} fill="currentColor" fillRule="nonzero" />
                    </svg>
                  </div>
                  <div style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "row",
                    gap: 6,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexGrow: 1,
                  }}>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 500,
                      fontSize: 14,
                      lineHeight: "20px",
                      letterSpacing: "0.060em",
                      color: "var(--grayscale-500)",
                      flexGrow: 1,
                    }}>Help</span>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  borderRadius: 8,
                  display: "flex",
                  flexDirection: "row",
                  gap: "calc(var(--radius-8) * 1px)",
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
                    height: 20,
                    overflow: "hidden",
                    flexShrink: 0,
                  }}>
                    <div style={{
                      position: "absolute",
                      left: 2.732,
                      top: 1.898,
                      width: 14.822,
                      height: 16.018,
                      overflow: "hidden",
                    }}>
                      <div style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: 17.787,
                        height: 19.222,
                        overflow: "hidden",
                      }}>
                        <svg width={17.787} height={19.222} viewBox="0 0 17.787 19.222" fill="none" style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          width: 17.787,
                          height: 19.222,
                          color: "var(--icon-secondary)",
                        }}>
                          <path d={"M 17.528 5.346 L 18.278 5.346 C 18.278 5.214 18.244 5.085 18.178 4.971 L 17.528 5.346 Z M 16.906 4.265 L 16.256 4.64 L 16.256 4.64 L 16.906 4.265 Z M 14.297 3.561 L 13.924 2.91 L 13.916 2.914 L 14.297 3.561 Z M 11.688 2.883 L 12.335 2.504 L 12.333 2.501 L 11.688 2.883 Z M 11.432 1.968 L 10.682 1.946 C 10.682 1.956 10.682 1.966 10.682 1.976 L 11.432 1.968 Z M 9.519 0 L 9.519 0.75 L 9.519 0.75 L 9.519 0 Z M 6.361 1.913 L 7.111 1.924 C 7.111 1.919 7.111 1.914 7.111 1.909 L 6.361 1.913 Z M 4.448 3.799 L 4.44 4.549 L 4.448 4.549 L 4.448 3.799 Z M 3.533 3.542 L 3.916 2.897 L 3.906 2.892 L 3.533 3.542 Z M 0.924 4.247 L 1.565 4.637 C 1.568 4.632 1.571 4.627 1.574 4.622 L 0.924 4.247 Z M 0.256 5.346 L -0.385 4.956 C -0.388 4.961 -0.391 4.966 -0.394 4.971 L 0.256 5.346 Z M 0.951 7.954 L 0.574 8.603 L 0.576 8.604 L 0.951 7.954 Z M 0.951 11.268 L 0.576 10.618 L 0.576 10.619 L 0.951 11.268 Z M 0.256 13.867 L -0.394 14.242 L -0.393 14.243 L 0.256 13.867 Z M 0.887 14.957 L 1.543 14.593 C 1.541 14.589 1.539 14.585 1.536 14.58 L 0.887 14.957 Z M 2.038 15.869 L 2.243 15.148 L 2.038 15.869 Z M 3.496 15.698 L 3.863 16.352 L 3.874 16.346 L 3.496 15.698 Z M 6.096 16.394 L 5.445 16.766 L 5.451 16.776 L 6.096 16.394 Z M 6.352 17.309 L 7.102 17.309 L 7.102 17.301 L 6.352 17.309 Z M 11.432 17.318 L 12.182 17.322 L 12.182 17.314 L 11.432 17.318 Z M 11.99 15.963 L 12.52 16.493 L 12.52 16.493 L 11.99 15.963 Z M 13.345 15.405 L 13.365 14.655 C 13.36 14.655 13.354 14.655 13.349 14.655 L 13.345 15.405 Z M 14.26 15.661 L 14.635 15.011 L 14.633 15.01 L 14.26 15.661 Z M 16.869 14.966 L 16.226 14.58 L 16.221 14.589 L 16.869 14.966 Z M 17.528 13.867 L 18.171 14.253 L 18.176 14.245 L 17.528 13.867 Z M 17.723 12.418 L 18.447 12.225 L 18.447 12.225 L 17.723 12.418 Z M 15.942 10.099 L 16.667 9.906 L 16.667 9.906 L 15.942 10.099 Z M 16.137 8.65 L 16.785 9.027 L 16.788 9.023 L 16.137 8.65 Z M 16.832 7.954 L 17.205 8.605 L 17.211 8.602 L 16.832 7.954 Z M 17.528 5.355 L 16.778 5.355 C 16.778 5.485 16.812 5.613 16.877 5.726 L 17.528 5.355 Z M 18.178 4.971 L 17.555 3.891 L 16.256 4.64 L 16.878 5.72 L 18.178 4.971 Z M 17.556 3.891 C 16.823 2.619 15.198 2.18 13.924 2.91 L 14.67 4.211 C 15.226 3.893 15.936 4.084 16.256 4.64 L 17.556 3.891 Z M 13.916 2.914 C 13.652 3.07 13.337 3.114 13.041 3.037 L 12.664 4.489 C 13.346 4.666 14.07 4.565 14.678 4.207 L 13.916 2.914 Z M 13.041 3.037 C 12.744 2.96 12.49 2.768 12.335 2.504 L 11.041 3.263 C 11.398 3.871 11.982 4.312 12.664 4.489 L 13.041 3.037 Z M 12.333 2.501 C 12.236 2.337 12.184 2.15 12.182 1.96 L 10.682 1.976 C 10.687 2.43 10.811 2.875 11.043 3.266 L 12.333 2.501 Z M 12.182 1.989 C 12.202 1.27 11.931 0.573 11.429 0.057 L 10.354 1.102 C 10.573 1.328 10.691 1.632 10.682 1.946 L 12.182 1.989 Z M 11.429 0.057 C 10.928 -0.459 10.238 -0.75 9.519 -0.75 L 9.519 0.75 C 9.834 0.75 10.135 0.877 10.354 1.102 L 11.429 0.057 Z M 9.519 -0.75 L 8.265 -0.75 L 8.265 0.75 L 9.519 0.75 L 9.519 -0.75 Z M 8.265 -0.75 C 7.559 -0.75 6.882 -0.469 6.384 0.032 L 7.447 1.09 C 7.664 0.872 7.958 0.75 8.265 0.75 L 8.265 -0.75 Z M 6.384 0.032 C 5.886 0.532 5.608 1.211 5.611 1.917 L 7.111 1.909 C 7.11 1.602 7.23 1.308 7.447 1.09 L 6.384 0.032 Z M 5.611 1.902 C 5.602 2.538 5.084 3.049 4.448 3.049 L 4.448 4.549 C 5.904 4.549 7.09 3.38 7.111 1.924 L 5.611 1.902 Z M 4.456 3.049 C 4.266 3.047 4.079 2.995 3.915 2.897 L 3.15 4.187 C 3.541 4.419 3.986 4.544 4.44 4.549 L 4.456 3.049 Z M 3.906 2.892 C 2.632 2.162 1.007 2.6 0.274 3.873 L 1.574 4.622 C 1.894 4.066 2.603 3.874 3.16 4.193 L 3.906 2.892 Z M 0.283 3.857 L -0.385 4.956 L 0.897 5.735 L 1.565 4.637 L 0.283 3.857 Z M -0.394 4.971 C -1.126 6.242 -0.693 7.865 0.574 8.603 L 1.329 7.306 C 0.775 6.984 0.586 6.275 0.906 5.72 L -0.394 4.971 Z M 0.576 8.604 C 0.936 8.812 1.158 9.195 1.158 9.611 L 2.658 9.611 C 2.658 8.66 2.15 7.78 1.326 7.305 L 0.576 8.604 Z M 1.158 9.611 C 1.158 10.027 0.936 10.41 0.576 10.618 L 1.326 11.917 C 2.15 11.442 2.658 10.562 2.658 9.611 L 1.158 9.611 Z M 0.576 10.619 C -0.692 11.352 -1.126 12.974 -0.394 14.242 L 0.905 13.492 C 0.587 12.941 0.776 12.236 1.327 11.917 L 0.576 10.619 Z M -0.393 14.243 L 0.239 15.333 L 1.536 14.58 L 0.905 13.491 L -0.393 14.243 Z M 0.231 15.32 C 0.575 15.94 1.151 16.397 1.833 16.591 L 2.243 15.148 C 1.945 15.063 1.693 14.864 1.543 14.593 L 0.231 15.32 Z M 1.833 16.591 C 2.514 16.784 3.245 16.699 3.863 16.352 L 3.129 15.044 C 2.859 15.195 2.54 15.233 2.243 15.148 L 1.833 16.591 Z M 3.874 16.346 C 4.138 16.192 4.452 16.15 4.747 16.229 L 5.135 14.78 C 4.453 14.597 3.727 14.695 3.118 15.05 L 3.874 16.346 Z M 4.747 16.229 C 5.042 16.308 5.293 16.501 5.445 16.766 L 6.747 16.021 C 6.396 15.409 5.816 14.962 5.135 14.78 L 4.747 16.229 Z M 5.451 16.776 C 5.548 16.94 5.6 17.126 5.602 17.317 L 7.102 17.301 C 7.097 16.847 6.972 16.402 6.741 16.011 L 5.451 16.776 Z M 5.602 17.309 C 5.602 18.78 6.794 19.972 8.265 19.972 L 8.265 18.472 C 7.623 18.472 7.102 17.951 7.102 17.309 L 5.602 17.309 Z M 8.265 19.972 L 9.519 19.972 L 9.519 18.472 L 8.265 18.472 L 8.265 19.972 Z M 9.519 19.972 C 10.985 19.972 12.175 18.787 12.182 17.322 L 10.682 17.314 C 10.679 17.955 10.159 18.472 9.519 18.472 L 9.519 19.972 Z M 12.182 17.314 C 12.18 17.007 12.302 16.711 12.52 16.493 L 11.459 15.432 C 10.958 15.933 10.679 16.613 10.682 17.322 L 12.182 17.314 Z M 12.52 16.493 C 12.738 16.275 13.033 16.154 13.341 16.155 L 13.349 14.655 C 12.64 14.652 11.96 14.931 11.459 15.432 L 12.52 16.493 Z M 13.325 16.155 C 13.523 16.16 13.716 16.214 13.888 16.312 L 14.633 15.01 C 14.246 14.789 13.81 14.667 13.365 14.655 L 13.325 16.155 Z M 13.886 16.311 C 15.157 17.043 16.78 16.61 17.517 15.343 L 16.221 14.589 C 15.899 15.142 15.19 15.331 14.635 15.011 L 13.886 16.311 Z M 17.512 15.352 L 18.171 14.253 L 16.885 13.481 L 16.226 14.58 L 17.512 15.352 Z M 18.176 14.245 C 18.532 13.634 18.629 12.908 18.447 12.225 L 16.998 12.612 C 17.077 12.908 17.035 13.224 16.88 13.49 L 18.176 14.245 Z M 18.447 12.225 C 18.265 11.543 17.819 10.961 17.206 10.608 L 16.458 11.909 C 16.725 12.062 16.919 12.315 16.998 12.612 L 18.447 12.225 Z M 17.206 10.608 C 16.94 10.455 16.746 10.202 16.667 9.906 L 15.218 10.292 C 15.4 10.975 15.846 11.556 16.458 11.909 L 17.206 10.608 Z M 16.667 9.906 C 16.588 9.609 16.63 9.293 16.785 9.027 L 15.489 8.272 C 15.133 8.883 15.036 9.61 15.218 10.292 L 16.667 9.906 Z M 16.788 9.023 C 16.887 8.849 17.031 8.705 17.205 8.605 L 16.46 7.303 C 16.054 7.536 15.718 7.872 15.486 8.277 L 16.788 9.023 Z M 17.211 8.602 C 18.471 7.865 18.903 6.251 18.179 4.983 L 16.877 5.726 C 17.193 6.28 17.004 6.985 16.454 7.307 L 17.211 8.602 Z M 18.278 5.355 L 18.278 5.346 L 16.778 5.346 L 16.778 5.355 L 18.278 5.355 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                        <svg width={5.272} height={5.272} viewBox="0 0 5.272 5.272" fill="none" style={{
                          position: "absolute",
                          left: 6.261,
                          top: 6.975,
                          width: 5.272,
                          height: 5.272,
                          color: "var(--icon-secondary)",
                        }}>
                          <path d={"M 4.522 2.636 C 4.522 3.678 3.678 4.522 2.636 4.522 L 2.636 6.022 C 4.506 6.022 6.022 4.506 6.022 2.636 L 4.522 2.636 Z M 2.636 4.522 C 1.594 4.522 0.75 3.678 0.75 2.636 L -0.75 2.636 C -0.75 4.506 0.766 6.022 2.636 6.022 L 2.636 4.522 Z M 0.75 2.636 C 0.75 1.594 1.594 0.75 2.636 0.75 L 2.636 -0.75 C 0.766 -0.75 -0.75 0.766 -0.75 2.636 L 0.75 2.636 Z M 2.636 0.75 C 3.678 0.75 4.522 1.594 4.522 2.636 L 6.022 2.636 C 6.022 0.766 4.506 -0.75 2.636 -0.75 L 2.636 0.75 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "row",
                    gap: 6,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexGrow: 1,
                  }}>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 500,
                      fontSize: 14,
                      lineHeight: "20px",
                      letterSpacing: "0.060em",
                      color: "var(--grayscale-500)",
                      flexGrow: 1,
                    }}>Settings</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 10,
            padding: "20px 20px 20px 20px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 9,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                width: 48,
                height: 48,
                borderRadius: 150,
                display: "flex",
                flexDirection: "row",
                gap: 10,
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
              }}>
                <div className="fig-asset-c1c0b9ac7492426e" style={{
                  position: "relative",
                  width: 48,
                  borderRadius: 50,
                  flexShrink: 0,
                  alignSelf: "stretch",
                }} />
                <div style={{
                  position: "absolute",
                  left: 36,
                  top: 36,
                  width: 12,
                  height: 12,
                  overflow: "hidden",
                  borderRadius: 360,
                  boxShadow: "inset 0 0 0 1px var(--general-white)",
                }}>
                  <svg width={12} height={12} viewBox="0 0 12 12" fill="none" style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 12,
                    height: 12,
                    color: "var(--badge-success)",
                  }}>
                    <path d={"M 6 12 C 9.314 12 12 9.314 12 6 C 12 2.686 9.314 0 6 0 C 2.686 0 0 2.686 0 6 C 0 9.314 2.686 12 6 12 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
              </div>
              <div style={{
                position: "relative",
                width: 151,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 124,
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  flexShrink: 0,
                }}>
                  <span style={{
                    position: "relative",
                    fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 500,
                    fontSize: 16,
                    lineHeight: "22px",
                    color: "var(--general-white)",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>Tahsan Khan</span>
                  <span style={{
                    position: "relative",
                    fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 12,
                    lineHeight: "16px",
                    color: "var(--grayscale-500)",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>tahsankhan@gmail.com</span>
                </div>
                <div style={{
                    position: "relative",
                    width: 16,
                    height: 16,
                    flexShrink: 0,
                    color: "rgb(145,153,146)",
                  }}>
                  <InfoMenu2 style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0", color: "rgb(145,153,146)" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <TopBar style={{
            position: "absolute",
            left: 272,
            top: 12,
            width: 1156,
          }} />
        <div style={{
          position: "absolute",
          left: 272,
          top: 92,
          width: 1156,
          display: "flex",
          flexDirection: "column",
          gap: 16,
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 106,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              width: 855,
              fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 18,
              lineHeight: "24px",
              color: "var(--text-primary)",
              flexShrink: 0,
            }}>Reports Center</span>
            <div style={{
              position: "relative",
              height: 36,
              overflow: "hidden",
              borderRadius: 8,
              background: "linear-gradient(180deg, rgb(39,163,118) 0.00%, rgb(22,118,83) 100.00%)",
              boxShadow: "0px 0px 0px 1px rgb(31,130,94), 0px 4px 12px -2px rgba(31,130,94,0.72), 0px 0px 0px 2px rgb(245,253,250)",
              display: "flex",
              flexDirection: "row",
              gap: 6,
              padding: "12px 12px 12px 12px",
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
                overflow: "hidden",
                flexShrink: 0,
              }}>
                <svg width={10} height={1.500} viewBox="0 -0.750 10 1.500" fill="none" style={{
                  position: "absolute",
                  left: 5,
                  top: 10,
                  width: 10,
                  height: 1.5,
                  color: "var(--general-white)",
                }}>
                  <path d={"M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 -0.75 Z M 10 0.75 C 10.414 0.75 10.75 0.414 10.75 0 C 10.75 -0.414 10.414 -0.75 10 -0.75 L 10 0.75 Z M 0 0.75 L 10 0.75 L 10 -0.75 L 0 -0.75 L 0 0.75 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <svg width={1.500} height={10} viewBox="-0.750 0 1.500 10" fill="none" style={{
                  position: "absolute",
                  left: 10,
                  top: 5,
                  width: 1.5,
                  height: 10,
                  color: "var(--general-white)",
                }}>
                  <path d={"M 0.75 0 C 0.75 -0.414 0.414 -0.75 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 L 0.75 0 Z M -0.75 10 C -0.75 10.414 -0.414 10.75 0 10.75 C 0.414 10.75 0.75 10.414 0.75 10 L -0.75 10 Z M -0.75 0 L -0.75 10 L 0.75 10 L 0.75 0 L -0.75 0 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
              <span style={{
                position: "relative",
                fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 500,
                fontSize: 14,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                lineHeight: "20px",
                letterSpacing: "0.060em",
                color: "var(--general-white)",
                flexShrink: 0,
              }}>Create customer report</span>
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 1012,
            overflow: "hidden",
            borderRadius: 8,
            backgroundColor: "rgb(255,255,255)",
            display: "flex",
            flexDirection: "column",
            gap: 10,
            padding: "4px 4px 4px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
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
              <TabMenu
                style={{ position: "relative", width: 123, flexShrink: 0 }}
                text1={"Custom Reports"}
                state={"active"}
              />
              <TabMenu
                style={{ position: "relative", width: 67, flexShrink: 0 }}
                text1={"Sales"}
                state={"default"}
              />
              <TabMenu
                style={{ position: "relative", width: 84, flexShrink: 0 }}
                text1={"Inventory"}
                state={"default"}
              />
              <TabMenu
                style={{ position: "relative", width: 107, flexShrink: 0 }}
                text1={"Receivables"}
                state={"default"}
              />
              <TabMenu
                style={{ position: "relative", width: 142, flexShrink: 0 }}
                text1={"Payments Received"}
                state={"default"}
              />
              <TabMenu
                style={{ position: "relative", width: 86, flexShrink: 0 }}
                text1={"Payables"}
                state={"default"}
              />
              <TabMenu
                style={{ position: "relative", width: 176, flexShrink: 0 }}
                text1={"Purchases and Expenses"}
                state={"default"}
              />
              <TabMenu
                style={{ position: "relative", width: 77, flexShrink: 0 }}
                text1={"Activity"}
                state={"default"}
              />
              <TabMenu
                style={{ position: "relative", width: 94, flexShrink: 0 }}
                text1={"Automation"}
                state={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            height: 818,
            overflow: "hidden",
            borderRadius: 12,
            backgroundColor: "var(--background-bg-secondary)",
            boxShadow: "inset 0 0 0 1px var(--border-border-primary)",
            display: "flex",
            flexDirection: "column",
            gap: 10,
            padding: "16px 0px 16px 0px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 16,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                width: 1124,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
              }}>
                <SearchInput
                  style={{
                    position: "relative",
                    width: 272,
                    height: 36,
                    flexShrink: 0,
                  }}
                  text1={"Search reports"}
                />
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
                    width: 162,
                    overflow: "hidden",
                    borderRadius: 8,
                    backgroundColor: "var(--background-bg-secondary)",
                    boxShadow: "inset 0 0 0 1px var(--border-border-primary)",
                    display: "flex",
                    flexDirection: "row",
                    gap: 8,
                    padding: "8px 12px 8px 12px",
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
                      overflow: "hidden",
                      flexShrink: 0,
                    }}>
                      <div style={{
                        position: "absolute",
                        left: 3,
                        top: 3,
                        width: 18,
                        height: 18,
                        overflow: "hidden",
                      }}>
                        <div style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          width: 18,
                          height: 18,
                          overflow: "hidden",
                        }}>
                          <svg width={18} height={18} viewBox="0 0 18 18" fill="none" style={{
                            position: "absolute",
                            left: 0,
                            top: 0,
                            width: 18,
                            height: 18,
                            color: "var(--icon-secondary)",
                          }}>
                            <path d={"M 0.689 4.272 L 0.143 4.786 L 0.143 4.786 L 0.689 4.272 Z M 5.535 9.424 L 4.989 9.938 C 5.146 10.106 5.372 10.191 5.6 10.171 C 5.829 10.151 6.036 10.028 6.162 9.835 L 5.535 9.424 Z M 5.537 9.421 L 6.074 8.897 C 5.915 8.734 5.691 8.653 5.465 8.675 C 5.239 8.697 5.035 8.82 4.91 9.01 L 5.537 9.421 Z M 7.584 17.952 L 7.942 18.611 L 7.943 18.61 L 7.584 17.952 Z M 10.344 16.448 L 10.702 17.106 L 10.703 17.106 L 10.344 16.448 Z M 12.466 9.424 L 13.004 9.947 L 13.012 9.938 L 12.466 9.424 Z M 17.312 4.272 L 17.858 4.786 L 17.859 4.785 L 17.312 4.272 Z M 1.565 -0.75 C 0.275 -0.75 -0.75 0.31 -0.75 1.59 L 0.75 1.59 C 0.75 1.116 1.127 0.75 1.565 0.75 L 1.565 -0.75 Z M -0.75 1.59 L -0.75 2.526 L 0.75 2.526 L 0.75 1.59 L -0.75 1.59 Z M -0.75 2.526 C -0.75 3.366 -0.431 4.175 0.143 4.786 L 1.236 3.758 C 0.925 3.428 0.75 2.987 0.75 2.526 L -0.75 2.526 Z M 0.143 4.786 L 4.989 9.938 L 6.081 8.911 L 1.236 3.758 L 0.143 4.786 Z M 6.162 9.835 L 6.164 9.832 L 4.91 9.01 L 4.908 9.013 L 6.162 9.835 Z M 5.001 9.945 C 5.798 10.762 6.249 11.868 6.249 13.023 L 7.749 13.023 C 7.749 11.479 7.147 9.996 6.074 8.897 L 5.001 9.945 Z M 6.249 13.023 L 6.249 17.595 L 7.749 17.595 L 7.749 13.023 L 6.249 13.023 Z M 6.249 17.595 C 6.249 18.448 7.158 19.036 7.942 18.611 L 7.226 17.293 C 7.479 17.155 7.749 17.353 7.749 17.595 L 6.249 17.595 Z M 7.943 18.61 L 10.702 17.106 L 9.985 15.789 L 7.225 17.293 L 7.943 18.61 Z M 10.703 17.106 C 11.364 16.745 11.77 16.049 11.77 15.298 L 10.27 15.298 C 10.27 15.508 10.156 15.696 9.984 15.79 L 10.703 17.106 Z M 11.77 15.298 L 11.77 13.011 L 10.27 13.011 L 10.27 15.298 L 11.77 15.298 Z M 11.77 13.011 C 11.77 11.862 12.215 10.761 13.004 9.947 L 11.928 8.902 C 10.863 9.999 10.27 11.476 10.27 13.011 L 11.77 13.011 Z M 13.012 9.938 L 17.858 4.786 L 16.765 3.758 L 11.92 8.911 L 13.012 9.938 Z M 17.859 4.785 C 18.431 4.175 18.75 3.366 18.75 2.526 L 17.25 2.526 C 17.25 2.987 17.075 3.428 16.765 3.759 L 17.859 4.785 Z M 18.75 2.526 L 18.75 1.59 L 17.25 1.59 L 17.25 2.526 L 18.75 2.526 Z M 18.75 1.59 C 18.75 0.311 17.726 -0.75 16.436 -0.75 L 16.436 0.75 C 16.874 0.75 17.25 1.115 17.25 1.59 L 18.75 1.59 Z M 16.436 -0.75 L 1.565 -0.75 L 1.565 0.75 L 16.436 0.75 L 16.436 -0.75 Z"} fill="currentColor" fillRule="nonzero" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 500,
                      fontSize: 14,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      lineHeight: "20px",
                      letterSpacing: "0.060em",
                      color: "rgb(12,17,15)",
                      flexShrink: 0,
                    }}>Parent Report : All</span>
                    <div style={{
                      position: "relative",
                      width: 20,
                      height: 20,
                      overflow: "hidden",
                      flexShrink: 0,
                    }}>
                      <div style={{
                        position: "absolute",
                        left: 4.167,
                        top: 7.083,
                        width: 11.667,
                        height: 5.833,
                        overflow: "hidden",
                      }}>
                        <div style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          width: 14,
                          height: 7,
                          overflow: "hidden",
                        }}>
                          <svg width={14} height={7} viewBox="0 0 14 7" fill="none" style={{
                            position: "absolute",
                            left: 0,
                            top: 0,
                            width: 14,
                            height: 7,
                            color: "var(--icon-secondary)",
                          }}>
                            <path d={"M 14.53 0.53 C 14.823 0.237 14.823 -0.237 14.53 -0.53 C 14.237 -0.823 13.763 -0.823 13.47 -0.53 L 14.53 0.53 Z M 7 7 L 6.47 7.53 C 6.763 7.823 7.237 7.823 7.53 7.53 L 7 7 Z M 0.53 -0.53 C 0.237 -0.823 -0.237 -0.823 -0.53 -0.53 C -0.823 -0.237 -0.823 0.237 -0.53 0.53 L 0.53 -0.53 Z M 13.47 -0.53 L 6.47 6.47 L 7.53 7.53 L 14.53 0.53 L 13.47 -0.53 Z M 7.53 6.47 L 0.53 -0.53 L -0.53 0.53 L 6.47 7.53 L 7.53 6.47 Z"} fill="currentColor" fillRule="nonzero" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{
                    position: "relative",
                    width: 169,
                    overflow: "hidden",
                    borderRadius: 8,
                    backgroundColor: "var(--background-bg-secondary)",
                    boxShadow: "inset 0 0 0 1px var(--border-border-primary)",
                    display: "flex",
                    flexDirection: "row",
                    gap: 8,
                    padding: "8px 12px 8px 12px",
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
                      overflow: "hidden",
                      flexShrink: 0,
                    }}>
                      <div style={{
                        position: "absolute",
                        left: 3,
                        top: 3,
                        width: 18,
                        height: 18,
                        overflow: "hidden",
                      }}>
                        <div style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          width: 18,
                          height: 18,
                          overflow: "hidden",
                        }}>
                          <svg width={18} height={18} viewBox="0 0 18 18" fill="none" style={{
                            position: "absolute",
                            left: 0,
                            top: 0,
                            width: 18,
                            height: 18,
                            color: "var(--icon-secondary)",
                          }}>
                            <path d={"M 0.689 4.272 L 0.143 4.786 L 0.143 4.786 L 0.689 4.272 Z M 5.535 9.424 L 4.989 9.938 C 5.146 10.106 5.372 10.191 5.6 10.171 C 5.829 10.151 6.036 10.028 6.162 9.835 L 5.535 9.424 Z M 5.537 9.421 L 6.074 8.897 C 5.915 8.734 5.691 8.653 5.465 8.675 C 5.239 8.697 5.035 8.82 4.91 9.01 L 5.537 9.421 Z M 7.584 17.952 L 7.942 18.611 L 7.943 18.61 L 7.584 17.952 Z M 10.344 16.448 L 10.702 17.106 L 10.703 17.106 L 10.344 16.448 Z M 12.466 9.424 L 13.004 9.947 L 13.012 9.938 L 12.466 9.424 Z M 17.312 4.272 L 17.858 4.786 L 17.859 4.785 L 17.312 4.272 Z M 1.565 -0.75 C 0.275 -0.75 -0.75 0.31 -0.75 1.59 L 0.75 1.59 C 0.75 1.116 1.127 0.75 1.565 0.75 L 1.565 -0.75 Z M -0.75 1.59 L -0.75 2.526 L 0.75 2.526 L 0.75 1.59 L -0.75 1.59 Z M -0.75 2.526 C -0.75 3.366 -0.431 4.175 0.143 4.786 L 1.236 3.758 C 0.925 3.428 0.75 2.987 0.75 2.526 L -0.75 2.526 Z M 0.143 4.786 L 4.989 9.938 L 6.081 8.911 L 1.236 3.758 L 0.143 4.786 Z M 6.162 9.835 L 6.164 9.832 L 4.91 9.01 L 4.908 9.013 L 6.162 9.835 Z M 5.001 9.945 C 5.798 10.762 6.249 11.868 6.249 13.023 L 7.749 13.023 C 7.749 11.479 7.147 9.996 6.074 8.897 L 5.001 9.945 Z M 6.249 13.023 L 6.249 17.595 L 7.749 17.595 L 7.749 13.023 L 6.249 13.023 Z M 6.249 17.595 C 6.249 18.448 7.158 19.036 7.942 18.611 L 7.226 17.293 C 7.479 17.155 7.749 17.353 7.749 17.595 L 6.249 17.595 Z M 7.943 18.61 L 10.702 17.106 L 9.985 15.789 L 7.225 17.293 L 7.943 18.61 Z M 10.703 17.106 C 11.364 16.745 11.77 16.049 11.77 15.298 L 10.27 15.298 C 10.27 15.508 10.156 15.696 9.984 15.79 L 10.703 17.106 Z M 11.77 15.298 L 11.77 13.011 L 10.27 13.011 L 10.27 15.298 L 11.77 15.298 Z M 11.77 13.011 C 11.77 11.862 12.215 10.761 13.004 9.947 L 11.928 8.902 C 10.863 9.999 10.27 11.476 10.27 13.011 L 11.77 13.011 Z M 13.012 9.938 L 17.858 4.786 L 16.765 3.758 L 11.92 8.911 L 13.012 9.938 Z M 17.859 4.785 C 18.431 4.175 18.75 3.366 18.75 2.526 L 17.25 2.526 C 17.25 2.987 17.075 3.428 16.765 3.759 L 17.859 4.785 Z M 18.75 2.526 L 18.75 1.59 L 17.25 1.59 L 17.25 2.526 L 18.75 2.526 Z M 18.75 1.59 C 18.75 0.311 17.726 -0.75 16.436 -0.75 L 16.436 0.75 C 16.874 0.75 17.25 1.115 17.25 1.59 L 18.75 1.59 Z M 16.436 -0.75 L 1.565 -0.75 L 1.565 0.75 L 16.436 0.75 L 16.436 -0.75 Z"} fill="currentColor" fillRule="nonzero" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 500,
                      fontSize: 14,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      lineHeight: "20px",
                      letterSpacing: "0.060em",
                      color: "rgb(12,17,15)",
                      flexShrink: 0,
                    }}>Schedule Type : All</span>
                    <div style={{
                      position: "relative",
                      width: 20,
                      height: 20,
                      overflow: "hidden",
                      flexShrink: 0,
                    }}>
                      <div style={{
                        position: "absolute",
                        left: 4.167,
                        top: 7.083,
                        width: 11.667,
                        height: 5.833,
                        overflow: "hidden",
                      }}>
                        <div style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          width: 14,
                          height: 7,
                          overflow: "hidden",
                        }}>
                          <svg width={14} height={7} viewBox="0 0 14 7" fill="none" style={{
                            position: "absolute",
                            left: 0,
                            top: 0,
                            width: 14,
                            height: 7,
                            color: "var(--icon-secondary)",
                          }}>
                            <path d={"M 14.53 0.53 C 14.823 0.237 14.823 -0.237 14.53 -0.53 C 14.237 -0.823 13.763 -0.823 13.47 -0.53 L 14.53 0.53 Z M 7 7 L 6.47 7.53 C 6.763 7.823 7.237 7.823 7.53 7.53 L 7 7 Z M 0.53 -0.53 C 0.237 -0.823 -0.237 -0.823 -0.53 -0.53 C -0.823 -0.237 -0.823 0.237 -0.53 0.53 L 0.53 -0.53 Z M 13.47 -0.53 L 6.47 6.47 L 7.53 7.53 L 14.53 0.53 L 13.47 -0.53 Z M 7.53 6.47 L 0.53 -0.53 L -0.53 0.53 L 6.47 7.53 L 7.53 6.47 Z"} fill="currentColor" fillRule="nonzero" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{
                    position: "relative",
                    width: 101,
                    overflow: "hidden",
                    borderRadius: 8,
                    backgroundColor: "var(--background-bg-secondary)",
                    boxShadow: "inset 0 0 0 1px var(--border-border-primary)",
                    display: "flex",
                    flexDirection: "row",
                    gap: 8,
                    padding: "8px 12px 8px 12px",
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
                      overflow: "hidden",
                      flexShrink: 0,
                    }}>
                      <div style={{
                        position: "absolute",
                        left: 2.5,
                        top: 2.5,
                        width: 15,
                        height: 15,
                        overflow: "hidden",
                      }}>
                        <div style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          width: 18,
                          height: 18,
                          overflow: "hidden",
                        }}>
                          <svg width={18} height={18} viewBox="0 0 18 18" fill="none" style={{
                            position: "absolute",
                            left: 0,
                            top: 0,
                            width: 18,
                            height: 18,
                            color: "var(--icon-secondary)",
                          }}>
                            <path d={"M 0.689 4.272 L 0.143 4.786 L 0.143 4.786 L 0.689 4.272 Z M 5.535 9.424 L 4.989 9.938 C 5.146 10.106 5.372 10.191 5.6 10.171 C 5.829 10.151 6.036 10.028 6.162 9.835 L 5.535 9.424 Z M 5.537 9.421 L 6.074 8.897 C 5.915 8.734 5.691 8.653 5.465 8.675 C 5.239 8.697 5.035 8.82 4.91 9.01 L 5.537 9.421 Z M 7.584 17.952 L 7.942 18.611 L 7.943 18.61 L 7.584 17.952 Z M 10.344 16.448 L 10.702 17.106 L 10.703 17.106 L 10.344 16.448 Z M 12.466 9.424 L 13.004 9.947 L 13.012 9.938 L 12.466 9.424 Z M 17.312 4.272 L 17.858 4.786 L 17.859 4.785 L 17.312 4.272 Z M 1.565 -0.75 C 0.275 -0.75 -0.75 0.31 -0.75 1.59 L 0.75 1.59 C 0.75 1.116 1.127 0.75 1.565 0.75 L 1.565 -0.75 Z M -0.75 1.59 L -0.75 2.526 L 0.75 2.526 L 0.75 1.59 L -0.75 1.59 Z M -0.75 2.526 C -0.75 3.366 -0.431 4.175 0.143 4.786 L 1.236 3.758 C 0.925 3.428 0.75 2.987 0.75 2.526 L -0.75 2.526 Z M 0.143 4.786 L 4.989 9.938 L 6.081 8.911 L 1.236 3.758 L 0.143 4.786 Z M 6.162 9.835 L 6.164 9.832 L 4.91 9.01 L 4.908 9.013 L 6.162 9.835 Z M 5.001 9.945 C 5.798 10.762 6.249 11.868 6.249 13.023 L 7.749 13.023 C 7.749 11.479 7.147 9.996 6.074 8.897 L 5.001 9.945 Z M 6.249 13.023 L 6.249 17.595 L 7.749 17.595 L 7.749 13.023 L 6.249 13.023 Z M 6.249 17.595 C 6.249 18.448 7.158 19.036 7.942 18.611 L 7.226 17.293 C 7.479 17.155 7.749 17.353 7.749 17.595 L 6.249 17.595 Z M 7.943 18.61 L 10.702 17.106 L 9.985 15.789 L 7.225 17.293 L 7.943 18.61 Z M 10.703 17.106 C 11.364 16.745 11.77 16.049 11.77 15.298 L 10.27 15.298 C 10.27 15.508 10.156 15.696 9.984 15.79 L 10.703 17.106 Z M 11.77 15.298 L 11.77 13.011 L 10.27 13.011 L 10.27 15.298 L 11.77 15.298 Z M 11.77 13.011 C 11.77 11.862 12.215 10.761 13.004 9.947 L 11.928 8.902 C 10.863 9.999 10.27 11.476 10.27 13.011 L 11.77 13.011 Z M 13.012 9.938 L 17.858 4.786 L 16.765 3.758 L 11.92 8.911 L 13.012 9.938 Z M 17.859 4.785 C 18.431 4.175 18.75 3.366 18.75 2.526 L 17.25 2.526 C 17.25 2.987 17.075 3.428 16.765 3.759 L 17.859 4.785 Z M 18.75 2.526 L 18.75 1.59 L 17.25 1.59 L 17.25 2.526 L 18.75 2.526 Z M 18.75 1.59 C 18.75 0.311 17.726 -0.75 16.436 -0.75 L 16.436 0.75 C 16.874 0.75 17.25 1.115 17.25 1.59 L 18.75 1.59 Z M 16.436 -0.75 L 1.565 -0.75 L 1.565 0.75 L 16.436 0.75 L 16.436 -0.75 Z"} fill="currentColor" fillRule="nonzero" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 500,
                      fontSize: 14,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      lineHeight: "20px",
                      letterSpacing: "0.060em",
                      color: "rgb(12,17,15)",
                      flexShrink: 0,
                    }}>Filter by</span>
                    <div style={{
                      position: "relative",
                      width: 20,
                      height: 20,
                      overflow: "hidden",
                      flexShrink: 0,
                    }}>
                      <div style={{
                        position: "absolute",
                        left: 5,
                        top: 8.5,
                        width: 14,
                        height: 7,
                        overflow: "hidden",
                      }}>
                        <div style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          width: 14,
                          height: 7,
                          overflow: "hidden",
                        }}>
                          <svg width={14} height={7} viewBox="0 0 14 7" fill="none" style={{
                            position: "absolute",
                            left: 0,
                            top: 0,
                            width: 14,
                            height: 7,
                            color: "var(--icon-secondary)",
                          }}>
                            <path d={"M 14.53 0.53 C 14.823 0.237 14.823 -0.237 14.53 -0.53 C 14.237 -0.823 13.763 -0.823 13.47 -0.53 L 14.53 0.53 Z M 7 7 L 6.47 7.53 C 6.763 7.823 7.237 7.823 7.53 7.53 L 7 7 Z M 0.53 -0.53 C 0.237 -0.823 -0.237 -0.823 -0.53 -0.53 C -0.823 -0.237 -0.823 0.237 -0.53 0.53 L 0.53 -0.53 Z M 13.47 -0.53 L 6.47 6.47 L 7.53 7.53 L 14.53 0.53 L 13.47 -0.53 Z M 7.53 6.47 L 0.53 -0.53 L -0.53 0.53 L 6.47 7.53 L 7.53 6.47 Z"} fill="currentColor" fillRule="nonzero" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: -1,
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <div style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    width: 271,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                  }}>
                    <TableComponent
                      style={{
                        position: "relative",
                        height: 48,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        width: "auto",
                      }}
                      text1={"Report Name"}
                      state={"active"}
                      size={"lg"}
                      misc={"top bar"}
                    />
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <Checkbox10
                          style={{
                            position: "relative",
                            width: 20,
                            height: 20,
                            flexShrink: 0,
                          }}
                          state={"default"}
                          active={"off"}
                          indeterminate={"off"}
                        />
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(39,163,118)",
                            flexShrink: 0,
                          }}>Stock Level Report</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <Checkbox10
                          style={{
                            position: "relative",
                            width: 20,
                            height: 20,
                            flexShrink: 0,
                          }}
                          state={"default"}
                          active={"off"}
                          indeterminate={"off"}
                        />
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(39,163,118)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>Low Stock Alert Report</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <Checkbox10
                          style={{
                            position: "relative",
                            width: 20,
                            height: 20,
                            flexShrink: 0,
                          }}
                          state={"default"}
                          active={"off"}
                          indeterminate={"off"}
                        />
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(39,163,118)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>Inventory Valuation Report</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <Checkbox10
                          style={{
                            position: "relative",
                            width: 20,
                            height: 20,
                            flexShrink: 0,
                          }}
                          state={"default"}
                          active={"off"}
                          indeterminate={"off"}
                        />
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(39,163,118)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>Stock Movement Report</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <Checkbox10
                          style={{
                            position: "relative",
                            width: 20,
                            height: 20,
                            flexShrink: 0,
                          }}
                          state={"default"}
                          active={"off"}
                          indeterminate={"off"}
                        />
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(39,163,118)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>Dead Stock Report</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <Checkbox10
                          style={{
                            position: "relative",
                            width: 20,
                            height: 20,
                            flexShrink: 0,
                          }}
                          state={"default"}
                          active={"off"}
                          indeterminate={"off"}
                        />
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(39,163,118)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>Supplier Performance Report</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <Checkbox10
                          style={{
                            position: "relative",
                            width: 20,
                            height: 20,
                            flexShrink: 0,
                          }}
                          state={"default"}
                          active={"off"}
                          indeterminate={"off"}
                        />
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(39,163,118)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>Order Fulfillment Report</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <Checkbox10
                          style={{
                            position: "relative",
                            width: 20,
                            height: 20,
                            flexShrink: 0,
                          }}
                          state={"default"}
                          active={"off"}
                          indeterminate={"off"}
                        />
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(39,163,118)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>Inventory Turnover Report</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <Checkbox10
                          style={{
                            position: "relative",
                            width: 20,
                            height: 20,
                            flexShrink: 0,
                          }}
                          state={"default"}
                          active={"off"}
                          indeterminate={"off"}
                        />
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(39,163,118)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>Damaged &amp; Lost Stock Report</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <Checkbox10
                          style={{
                            position: "relative",
                            width: 20,
                            height: 20,
                            flexShrink: 0,
                          }}
                          state={"default"}
                          active={"off"}
                          indeterminate={"off"}
                        />
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(39,163,118)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>Sales vs. Stock Report</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{
                    position: "relative",
                    width: 189,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                  }}>
                    <TableComponent
                      style={{
                        position: "relative",
                        height: 48,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        width: "auto",
                      }}
                      text1={"Type"}
                      state={"active"}
                      size={"lg"}
                      misc={"top bar"}
                    />
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(12,175,96)",
                            flexShrink: 0,
                          }}>Sales by Item</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(12,175,96)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>Sales By Customer</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(12,175,96)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>Sales Return History</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(12,175,96)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>Sales By Sales Person</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(12,175,96)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>Sales by Item</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(12,175,96)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>Sales By Sales Person</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(12,175,96)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>Sales Return History</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(12,175,96)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>Sales By Customer</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(12,175,96)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>Sales By Customer</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(12,175,96)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>Sales by Item</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{
                    position: "relative",
                    width: 189,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                  }}>
                    <TableComponent
                      style={{
                        position: "relative",
                        height: 48,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        width: "auto",
                      }}
                      text1={"Created By"}
                      state={"active"}
                      size={"lg"}
                      misc={"top bar"}
                    />
                    <TableComponent
                      style={{
                        position: "relative",
                        height: 64,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        width: "auto",
                      }}
                      label={"Tahsan Khan"}
                      showDescription={false}
                      state={"default"}
                      size={"xl"}
                      misc={"avatar - title"}
                    />
                    <TableComponent
                      style={{
                        position: "relative",
                        height: 64,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        width: "auto",
                      }}
                      label={"Jayed Khan"}
                      showDescription={false}
                      icon2={<Avatar type={"avatar 13"} status={"lg"} size={"40"} style={{ width: "100%", height: "100%" }} />}
                      state={"default"}
                      size={"xl"}
                      misc={"avatar - title"}
                    />
                    <TableComponent
                      style={{
                        position: "relative",
                        height: 64,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        width: "auto",
                      }}
                      label={"Suyeb Khan"}
                      showDescription={false}
                      icon2={<Avatar type={"avatar 6"} status={"lg"} size={"40"} style={{ width: "100%", height: "100%" }} />}
                      state={"default"}
                      size={"xl"}
                      misc={"avatar - title"}
                    />
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <Avatar
                          style={{
                            position: "relative",
                            width: 40,
                            flexShrink: 0,
                            alignSelf: "stretch",
                            height: "auto",
                          }}
                          type={"avatar 4"}
                          status={"lg"}
                          size={"40"}
                        />
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "var(--text-primary)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>Hasan Khan</span>
                        </div>
                      </div>
                    </div>
                    <TableComponent
                      style={{
                        position: "relative",
                        height: 64,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        width: "auto",
                      }}
                      label={"Azam Khan"}
                      showDescription={false}
                      icon2={<Avatar type={"avatar 2"} status={"lg"} size={"40"} style={{ width: "100%", height: "100%" }} />}
                      state={"default"}
                      size={"xl"}
                      misc={"avatar - title"}
                    />
                    <TableComponent
                      style={{
                        position: "relative",
                        height: 64,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        width: "auto",
                      }}
                      label={"Tim David"}
                      showDescription={false}
                      icon2={<Avatar type={"avatar 1"} status={"lg"} size={"40"} style={{ width: "100%", height: "100%" }} />}
                      state={"default"}
                      size={"xl"}
                      misc={"avatar - title"}
                    />
                    <TableComponent
                      style={{
                        position: "relative",
                        height: 64,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        width: "auto",
                      }}
                      label={"David Warner"}
                      showDescription={false}
                      icon2={<Avatar type={"avatar 5"} status={"lg"} size={"40"} style={{ width: "100%", height: "100%" }} />}
                      state={"default"}
                      size={"xl"}
                      misc={"avatar - title"}
                    />
                    <TableComponent
                      style={{
                        position: "relative",
                        height: 64,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        width: "auto",
                      }}
                      label={"David Miller"}
                      showDescription={false}
                      icon2={<Avatar type={"avatar 12"} status={"lg"} size={"40"} style={{ width: "100%", height: "100%" }} />}
                      state={"default"}
                      size={"xl"}
                      misc={"avatar - title"}
                    />
                    <TableComponent
                      style={{
                        position: "relative",
                        height: 64,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        width: "auto",
                      }}
                      label={"Kagiso Rabada"}
                      showDescription={false}
                      icon2={<Avatar type={"avatar 3"} status={"lg"} size={"40"} style={{ width: "100%", height: "100%" }} />}
                      state={"default"}
                      size={"xl"}
                      misc={"avatar - title"}
                    />
                    <TableComponent
                      style={{
                        position: "relative",
                        height: 64,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        width: "auto",
                      }}
                      label={"Matt Henry"}
                      showDescription={false}
                      icon2={<Avatar type={"avatar 8"} status={"lg"} size={"40"} style={{ width: "100%", height: "100%" }} />}
                      state={"default"}
                      size={"xl"}
                      misc={"avatar - title"}
                    />
                  </div>
                  <div style={{
                    position: "relative",
                    width: 220,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                  }}>
                    <TableComponent
                      style={{
                        position: "relative",
                        height: 48,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        width: "auto",
                      }}
                      text1={"Created On"}
                      state={"active"}
                      size={"lg"}
                      misc={"top bar"}
                    />
                    <TableComponent
                      style={{
                        position: "relative",
                        height: 64,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        width: "auto",
                      }}
                      label={"04 Feb, 2025 - 05:53 PM"}
                      showDescription={false}
                      state={"default"}
                      size={"xl"}
                      misc={"avatar - title"}
                    />
                    <TableComponent
                      style={{
                        position: "relative",
                        height: 64,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        width: "auto",
                      }}
                      label={"05 Feb, 2025 - 09:43 PM"}
                      showDescription={false}
                      icon2={<Avatar type={"avatar 13"} status={"lg"} size={"40"} style={{ width: "100%", height: "100%" }} />}
                      state={"default"}
                      size={"xl"}
                      misc={"avatar - title"}
                    />
                    <TableComponent
                      style={{
                        position: "relative",
                        height: 64,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        width: "auto",
                      }}
                      label={"06 Feb, 2025 - 01:23 PM"}
                      showDescription={false}
                      icon2={<Avatar type={"avatar 6"} status={"lg"} size={"40"} style={{ width: "100%", height: "100%" }} />}
                      state={"default"}
                      size={"xl"}
                      misc={"avatar - title"}
                    />
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "var(--text-primary)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>07 Feb, 2025 - 12:16 PM</span>
                        </div>
                      </div>
                    </div>
                    <TableComponent
                      style={{
                        position: "relative",
                        height: 64,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        width: "auto",
                      }}
                      label={"08 Feb, 2025 - 07:23 PM"}
                      showDescription={false}
                      icon2={<Avatar type={"avatar 2"} status={"lg"} size={"40"} style={{ width: "100%", height: "100%" }} />}
                      state={"default"}
                      size={"xl"}
                      misc={"avatar - title"}
                    />
                    <TableComponent
                      style={{
                        position: "relative",
                        height: 64,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        width: "auto",
                      }}
                      label={"09 Feb, 2025 - 04:23 PM"}
                      showDescription={false}
                      icon2={<Avatar type={"avatar 1"} status={"lg"} size={"40"} style={{ width: "100%", height: "100%" }} />}
                      state={"default"}
                      size={"xl"}
                      misc={"avatar - title"}
                    />
                    <TableComponent
                      style={{
                        position: "relative",
                        height: 64,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        width: "auto",
                      }}
                      label={"10 Feb, 2025 - 09:53 PM"}
                      showDescription={false}
                      icon2={<Avatar type={"avatar 5"} status={"lg"} size={"40"} style={{ width: "100%", height: "100%" }} />}
                      state={"default"}
                      size={"xl"}
                      misc={"avatar - title"}
                    />
                    <TableComponent
                      style={{
                        position: "relative",
                        height: 64,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        width: "auto",
                      }}
                      label={"11 Feb, 2025 - 02:45 PM"}
                      showDescription={false}
                      icon2={<Avatar type={"avatar 12"} status={"lg"} size={"40"} style={{ width: "100%", height: "100%" }} />}
                      state={"default"}
                      size={"xl"}
                      misc={"avatar - title"}
                    />
                    <TableComponent
                      style={{
                        position: "relative",
                        height: 64,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        width: "auto",
                      }}
                      label={"12 Feb, 2025 - 05:34 AM"}
                      showDescription={false}
                      icon2={<Avatar type={"avatar 3"} status={"lg"} size={"40"} style={{ width: "100%", height: "100%" }} />}
                      state={"default"}
                      size={"xl"}
                      misc={"avatar - title"}
                    />
                    <TableComponent
                      style={{
                        position: "relative",
                        height: 64,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        width: "auto",
                      }}
                      label={"13 Feb, 2025 - 02:12 PM"}
                      showDescription={false}
                      icon2={<Avatar type={"avatar 3"} status={"lg"} size={"40"} style={{ width: "100%", height: "100%" }} />}
                      state={"default"}
                      size={"xl"}
                      misc={"avatar - title"}
                    />
                  </div>
                  <div style={{
                    position: "relative",
                    width: 118,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                  }}>
                    <TableComponent
                      style={{
                        position: "relative",
                        height: 48,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        width: "auto",
                      }}
                      text1={"Shared With"}
                      state={"active"}
                      size={"lg"}
                      misc={"top bar"}
                    />
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(12,175,96)",
                            flexShrink: 0,
                          }}>Only Me</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(12,175,96)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>Users</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(12,175,96)",
                            flexShrink: 0,
                          }}>Everyone</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(12,175,96)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>Only Me</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(12,175,96)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>Everyone</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(12,175,96)",
                            flexShrink: 0,
                          }}>Everyone</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(12,175,96)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>Users</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(12,175,96)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>Users</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(12,175,96)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>Only Me</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(12,175,96)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>Only Me</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{
                    position: "relative",
                    width: 168,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                  }}>
                    <TableComponent
                      style={{
                        position: "relative",
                        height: 48,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        width: "auto",
                      }}
                      text1={"Frequency"}
                      state={"active"}
                      size={"lg"}
                      misc={"top bar"}
                    />
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(12,175,96)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>Zoho Inventory</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(12,175,96)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>Cin7</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(12,175,96)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>NetSuite ERP</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(12,175,96)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>Fishbowl Inventory</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(12,175,96)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>inFlow Inventory</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(12,175,96)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>Ordoro</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(12,175,96)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>DEAR Inventory</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(12,175,96)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>Odoo Inventory</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(12,175,96)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>Zoho Inventory</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      height: 64,
                      overflow: "hidden",
                      backgroundColor: "var(--background-bg-secondary)",
                      borderTop: "1px solid var(--border-border-primary)",
                      borderRight: "1px solid var(--border-border-primary)",
                      borderBottom: "1px solid var(--border-border-primary)",
                      borderLeft: "1px solid var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xs) * 1px)",
                      padding: "12px 12px 12px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      paddingLeft: "calc(var(--padding-sm) * 1px)",
                      paddingTop: "calc(var(--padding-sm) * 1px)",
                      paddingRight: "calc(var(--padding-sm) * 1px)",
                      paddingBottom: "calc(var(--padding-sm) * 1px)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 40,
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: "calc(var(--padding-xxs) * 1px)",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(12,175,96)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }}>Zoho Inventory</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Pagination style={{
                    position: "relative",
                    height: 63,
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }} />
              </div>
            </div>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1440,
          height: 1024,
          backgroundColor: "rgba(0,0,0,0.4)",
        }} />
        <Dropdown2 style={{
            position: "absolute",
            left: 315,
            top: 379,
            width: 811,
          }} />
      </div>
    </div>
  );
}
export default Report;
