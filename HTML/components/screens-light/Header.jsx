import { ArrowDown2 } from './ArrowDown2.jsx';
import { Avatar } from './Avatar.jsx';

// figma node: 9001:64686 Header
export function Header(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 375,
      overflow: "hidden",
      backgroundColor: "var(--background-bg-secondary)",
      borderTop: "1px solid var(--border-border-primary)",
      borderRight: "1px solid var(--border-border-primary)",
      borderBottom: "1px solid var(--border-border-primary)",
      borderLeft: "1px solid var(--border-border-primary)",
      display: "flex",
      flexDirection: "row",
      padding: "16px 24px 16px 24px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 32,
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
          width: 16,
          overflow: "hidden",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 2.667,
            top: 4,
            width: 10.667,
            height: 8,
            overflow: "hidden",
          }}>
            <svg width={16} height={2} viewBox="0 -1 16 2" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 12,
              width: 16,
              height: 2,
              color: "var(--icon-secondary)",
            }}>
              <path d={"M 0 -1 C -0.552 -1 -1 -0.552 -1 0 C -1 0.552 -0.552 1 0 1 L 0 -1 Z M 16 1 C 16.552 1 17 0.552 17 0 C 17 -0.552 16.552 -1 16 -1 L 16 1 Z M 0 1 L 16 1 L 16 -1 L 0 -1 L 0 1 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <svg width={16} height={2} viewBox="0 -1 16 2" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 6,
              width: 16,
              height: 2,
              color: "var(--icon-secondary)",
            }}>
              <path d={"M 0 -1 C -0.552 -1 -1 -0.552 -1 0 C -1 0.552 -0.552 1 0 1 L 0 -1 Z M 16 1 C 16.552 1 17 0.552 17 0 C 17 -0.552 16.552 -1 16 -1 L 16 1 Z M 0 1 L 16 1 L 16 -1 L 0 -1 L 0 1 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <svg width={16} height={2} viewBox="0 -1 16 2" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 16,
              height: 2,
              color: "var(--icon-secondary)",
            }}>
              <path d={"M 0 -1 C -0.552 -1 -1 -0.552 -1 0 C -1 0.552 -0.552 1 0 1 L 0 -1 Z M 16 1 C 16.552 1 17 0.552 17 0 C 17 -0.552 16.552 -1 16 -1 L 16 1 Z M 0 1 L 16 1 L 16 -1 L 0 -1 L 0 1 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <div style={{
          position: "relative",
          width: 16,
          overflow: "hidden",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 5.667,
            top: 3.333,
            width: 4.667,
            height: 9.333,
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              transform: "matrix(0,-1,1,0,0,9.333)",
              transformOrigin: "0 0",
              width: 9.333,
              height: 4.667,
              overflow: "hidden",
            }}>
              <svg width={9.333} height={4.667} viewBox="0 0 9.333 4.667" fill="none" style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 9.333,
                height: 4.667,
                color: "var(--icon-primary)",
              }}>
                <path d={"M 9.864 0.53 C 10.157 0.237 10.157 -0.237 9.864 -0.53 C 9.571 -0.823 9.096 -0.823 8.803 -0.53 L 9.864 0.53 Z M 4.667 4.667 L 4.136 5.197 C 4.429 5.49 4.904 5.49 5.197 5.197 L 4.667 4.667 Z M 0.53 -0.53 C 0.237 -0.823 -0.237 -0.823 -0.53 -0.53 C -0.823 -0.237 -0.823 0.237 -0.53 0.53 L 0.53 -0.53 Z M 8.803 -0.53 L 4.136 4.136 L 5.197 5.197 L 9.864 0.53 L 8.803 -0.53 Z M 5.197 4.136 L 0.53 -0.53 L -0.53 0.53 L 4.136 5.197 L 5.197 4.136 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 32,
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
            width: 16,
            overflow: "hidden",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "absolute",
              left: 1.852,
              top: 1.852,
              width: 12.51,
              height: 12.815,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 18.764,
                height: 19.222,
                overflow: "hidden",
              }}>
                <svg width={17.977} height={17.977} viewBox="0 0 17.977 17.977" fill="none" style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 17.977,
                  height: 17.977,
                  color: "var(--icon-secondary)",
                }}>
                  <path d={"M 17.227 8.989 C 17.227 13.539 13.539 17.227 8.989 17.227 L 8.989 18.727 C 14.367 18.727 18.727 14.367 18.727 8.989 L 17.227 8.989 Z M 8.989 17.227 C 4.439 17.227 0.75 13.539 0.75 8.989 L -0.75 8.989 C -0.75 14.367 3.61 18.727 8.989 18.727 L 8.989 17.227 Z M 0.75 8.989 C 0.75 4.439 4.439 0.75 8.989 0.75 L 8.989 -0.75 C 3.61 -0.75 -0.75 3.61 -0.75 8.989 L 0.75 8.989 Z M 8.989 0.75 C 13.539 0.75 17.227 4.439 17.227 8.989 L 18.727 8.989 C 18.727 3.61 14.367 -0.75 8.989 -0.75 L 8.989 0.75 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <svg width={3.524} height={3.515} viewBox="0 0 3.524 3.515" fill="none" style={{
                  position: "absolute",
                  left: 15.24,
                  top: 15.707,
                  width: 3.524,
                  height: 3.515,
                  color: "var(--icon-secondary)",
                }}>
                  <path d={"M 0.53 -0.531 C 0.236 -0.824 -0.239 -0.823 -0.531 -0.53 C -0.824 -0.236 -0.823 0.239 -0.53 0.531 L 0.53 -0.531 Z M 2.994 4.046 C 3.288 4.338 3.763 4.338 4.055 4.045 C 4.348 3.751 4.347 3.276 4.054 2.984 L 2.994 4.046 Z M -0.53 0.531 L 2.994 4.046 L 4.054 2.984 L 0.53 -0.531 L -0.53 0.531 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 16,
            overflow: "hidden",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "absolute",
              left: 5.667,
              top: 3.333,
              width: 4.667,
              height: 9.333,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                transform: "matrix(0,-1,1,0,0,9.333)",
                transformOrigin: "0 0",
                width: 9.333,
                height: 4.667,
                overflow: "hidden",
              }}>
                <svg width={9.333} height={4.667} viewBox="0 0 9.333 4.667" fill="none" style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 9.333,
                  height: 4.667,
                  color: "var(--icon-primary)",
                }}>
                  <path d={"M 9.864 0.53 C 10.157 0.237 10.157 -0.237 9.864 -0.53 C 9.571 -0.823 9.096 -0.823 8.803 -0.53 L 9.864 0.53 Z M 4.667 4.667 L 4.136 5.197 C 4.429 5.49 4.904 5.49 5.197 5.197 L 4.667 4.667 Z M 0.53 -0.53 C 0.237 -0.823 -0.237 -0.823 -0.53 -0.53 C -0.823 -0.237 -0.823 0.237 -0.53 0.53 L 0.53 -0.53 Z M 8.803 -0.53 L 4.136 4.136 L 5.197 5.197 L 9.864 0.53 L 8.803 -0.53 Z M 5.197 4.136 L 0.53 -0.53 L -0.53 0.53 L 4.136 5.197 L 5.197 4.136 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          position: "relative",
          width: 32,
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
            width: 16,
            overflow: "hidden",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "absolute",
              left: 2,
              top: 1.333,
              width: 12,
              height: 13.333,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 18,
                height: 20,
                overflow: "hidden",
              }}>
                <svg width={17.824} height={1.500} viewBox="0 -0.750 17.824 1.500" fill="none" style={{
                  position: "absolute",
                  left: 0.093,
                  top: 7.404,
                  width: 17.824,
                  height: 1.5,
                  color: "var(--icon-secondary)",
                }}>
                  <path d={"M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 -0.75 Z M 17.824 0.75 C 18.238 0.75 18.574 0.414 18.574 0 C 18.574 -0.414 18.238 -0.75 17.824 -0.75 L 17.824 0.75 Z M 0 0.75 L 17.824 0.75 L 17.824 -0.75 L 0 -0.75 L 0 0.75 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <svg width={0.009} height={1.500} viewBox="0 -0.750 0.009 1.500" fill="none" style={{
                  position: "absolute",
                  left: 13.442,
                  top: 11.31,
                  width: 0.009,
                  height: 1.5,
                  color: "var(--icon-secondary)",
                }}>
                  <path d={"M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 -0.75 Z M 0.009 0.75 C 0.423 0.75 0.759 0.414 0.759 0 C 0.759 -0.414 0.423 -0.75 0.009 -0.75 L 0.009 0.75 Z M 0 0.75 L 0.009 0.75 L 0.009 -0.75 L 0 -0.75 L 0 0.75 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <svg width={0.009} height={1.500} viewBox="0 -0.750 0.009 1.500" fill="none" style={{
                  position: "absolute",
                  left: 9.005,
                  top: 11.31,
                  width: 0.009,
                  height: 1.5,
                  color: "var(--icon-secondary)",
                }}>
                  <path d={"M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 -0.75 Z M 0.009 0.75 C 0.423 0.75 0.759 0.414 0.759 0 C 0.759 -0.414 0.423 -0.75 0.009 -0.75 L 0.009 0.75 Z M 0 0.75 L 0.009 0.75 L 0.009 -0.75 L 0 -0.75 L 0 0.75 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <svg width={0.009} height={1.500} viewBox="0 -0.750 0.009 1.500" fill="none" style={{
                  position: "absolute",
                  left: 4.558,
                  top: 11.31,
                  width: 0.009,
                  height: 1.5,
                  color: "var(--icon-secondary)",
                }}>
                  <path d={"M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 -0.75 Z M 0.009 0.75 C 0.423 0.75 0.759 0.414 0.759 0 C 0.759 -0.414 0.423 -0.75 0.009 -0.75 L 0.009 0.75 Z M 0 0.75 L 0.009 0.75 L 0.009 -0.75 L 0 -0.75 L 0 0.75 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <svg width={0.009} height={1.500} viewBox="0 -0.750 0.009 1.500" fill="none" style={{
                  position: "absolute",
                  left: 13.442,
                  top: 15.196,
                  width: 0.009,
                  height: 1.5,
                  color: "var(--icon-secondary)",
                }}>
                  <path d={"M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 -0.75 Z M 0.009 0.75 C 0.423 0.75 0.759 0.414 0.759 0 C 0.759 -0.414 0.423 -0.75 0.009 -0.75 L 0.009 0.75 Z M 0 0.75 L 0.009 0.75 L 0.009 -0.75 L 0 -0.75 L 0 0.75 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <svg width={0.009} height={1.500} viewBox="0 -0.750 0.009 1.500" fill="none" style={{
                  position: "absolute",
                  left: 9.005,
                  top: 15.196,
                  width: 0.009,
                  height: 1.5,
                  color: "var(--icon-secondary)",
                }}>
                  <path d={"M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 -0.75 Z M 0.009 0.75 C 0.423 0.75 0.759 0.414 0.759 0 C 0.759 -0.414 0.423 -0.75 0.009 -0.75 L 0.009 0.75 Z M 0 0.75 L 0.009 0.75 L 0.009 -0.75 L 0 -0.75 L 0 0.75 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <svg width={0.009} height={1.500} viewBox="0 -0.750 0.009 1.500" fill="none" style={{
                  position: "absolute",
                  left: 4.558,
                  top: 15.196,
                  width: 0.009,
                  height: 1.5,
                  color: "var(--icon-secondary)",
                }}>
                  <path d={"M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 -0.75 Z M 0.009 0.75 C 0.423 0.75 0.759 0.414 0.759 0 C 0.759 -0.414 0.423 -0.75 0.009 -0.75 L 0.009 0.75 Z M 0 0.75 L 0.009 0.75 L 0.009 -0.75 L 0 -0.75 L 0 0.75 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <svg width={1.500} height={3.291} viewBox="-0.750 0 1.500 3.291" fill="none" style={{
                  position: "absolute",
                  left: 13.044,
                  top: 0,
                  width: 1.5,
                  height: 3.291,
                  color: "var(--icon-secondary)",
                }}>
                  <path d={"M 0.75 0 C 0.75 -0.414 0.414 -0.75 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 L 0.75 0 Z M -0.75 3.291 C -0.75 3.705 -0.414 4.041 0 4.041 C 0.414 4.041 0.75 3.705 0.75 3.291 L -0.75 3.291 Z M -0.75 0 L -0.75 3.291 L 0.75 3.291 L 0.75 0 L -0.75 0 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <svg width={1.500} height={3.291} viewBox="-0.750 0 1.500 3.291" fill="none" style={{
                  position: "absolute",
                  left: 4.966,
                  top: 0,
                  width: 1.5,
                  height: 3.291,
                  color: "var(--icon-secondary)",
                }}>
                  <path d={"M 0.75 0 C 0.75 -0.414 0.414 -0.75 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 L 0.75 0 Z M -0.75 3.291 C -0.75 3.705 -0.414 4.041 0 4.041 C 0.414 4.041 0.75 3.705 0.75 3.291 L -0.75 3.291 Z M -0.75 0 L -0.75 3.291 L 0.75 3.291 L 0.75 0 L -0.75 0 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <svg width={18} height={18.421} viewBox="0 0 18 18.421" fill="none" style={{
                  position: "absolute",
                  left: 0,
                  top: 1.579,
                  width: 18,
                  height: 18.421,
                  color: "var(--icon-secondary)",
                }}>
                  <path d={"M 18 4.643 L 17.25 4.641 L 17.25 4.643 L 18 4.643 Z M 13.238 -0.75 L 4.771 -0.75 L 4.771 0.75 L 13.238 0.75 L 13.238 -0.75 Z M 4.771 -0.75 C 3.168 -0.75 1.769 -0.302 0.767 0.65 C -0.24 1.608 -0.75 2.984 -0.75 4.643 L 0.75 4.643 C 0.75 3.295 1.157 2.349 1.801 1.737 C 2.451 1.12 3.438 0.75 4.771 0.75 L 4.771 -0.75 Z M -0.75 4.643 L -0.75 13.693 L 0.75 13.693 L 0.75 4.643 L -0.75 4.643 Z M -0.75 13.693 C -0.75 15.372 -0.242 16.767 0.762 17.741 C 1.763 18.711 3.163 19.171 4.771 19.171 L 4.771 17.671 C 3.442 17.671 2.457 17.294 1.806 16.664 C 1.159 16.037 0.75 15.068 0.75 13.693 L -0.75 13.693 Z M 4.771 19.171 L 13.229 19.171 L 13.229 17.671 L 4.771 17.671 L 4.771 19.171 Z M 13.229 19.171 C 14.838 19.171 16.237 18.72 17.237 17.765 C 18.243 16.804 18.75 15.426 18.75 13.768 L 17.25 13.768 C 17.25 15.118 16.844 16.066 16.201 16.68 C 15.553 17.299 14.566 17.671 13.229 17.671 L 13.229 19.171 Z M 18.75 13.768 L 18.75 4.643 L 17.25 4.643 L 17.25 13.768 L 18.75 13.768 Z M 18.75 4.645 C 18.755 2.987 18.251 1.61 17.245 0.651 C 16.245 -0.302 14.846 -0.75 13.238 -0.75 L 13.238 0.75 C 14.577 0.75 15.563 1.12 16.21 1.737 C 16.851 2.348 17.254 3.292 17.25 4.641 L 18.75 4.645 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 16,
            overflow: "hidden",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "absolute",
              left: 5.667,
              top: 3.333,
              width: 4.667,
              height: 9.333,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                transform: "matrix(0,-1,1,0,0,9.333)",
                transformOrigin: "0 0",
                width: 9.333,
                height: 4.667,
                overflow: "hidden",
              }}>
                <svg width={9.333} height={4.667} viewBox="0 0 9.333 4.667" fill="none" style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 9.333,
                  height: 4.667,
                  color: "var(--icon-primary)",
                }}>
                  <path d={"M 9.864 0.53 C 10.157 0.237 10.157 -0.237 9.864 -0.53 C 9.571 -0.823 9.096 -0.823 8.803 -0.53 L 9.864 0.53 Z M 4.667 4.667 L 4.136 5.197 C 4.429 5.49 4.904 5.49 5.197 5.197 L 4.667 4.667 Z M 0.53 -0.53 C 0.237 -0.823 -0.237 -0.823 -0.53 -0.53 C -0.823 -0.237 -0.823 0.237 -0.53 0.53 L 0.53 -0.53 Z M 8.803 -0.53 L 4.136 4.136 L 5.197 5.197 L 9.864 0.53 L 8.803 -0.53 Z M 5.197 4.136 L 0.53 -0.53 L -0.53 0.53 L 4.136 5.197 L 5.197 4.136 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          position: "relative",
          width: 32,
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
            width: 16,
            overflow: "hidden",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={9.346} height={8.665} viewBox="0 0 9.346 8.665" fill="none" style={{
              position: "absolute",
              left: 3.327,
              top: 3.467,
              width: 9.346,
              height: 8.665,
              color: "var(--icon-secondary)",
            }}>
              <path d={"M 0.717 3.956 L 1.467 3.956 L 1.467 3.956 L 0.717 3.956 Z M 8.629 3.956 L 7.879 3.956 L 7.879 3.956 L 8.629 3.956 Z M 8.629 4.75 L 9.379 4.75 L 9.379 4.75 L 8.629 4.75 Z M 8.933 6.108 L 9.611 5.789 L 9.611 5.789 L 8.933 6.108 Z M 9.214 6.705 L 9.892 6.386 L 9.892 6.386 L 9.214 6.705 Z M 0.132 6.705 L -0.546 6.386 L -0.546 6.386 L 0.132 6.705 Z M 0.413 6.108 L 1.092 6.428 L 1.092 6.428 L 0.413 6.108 Z M 0.717 4.75 L -0.033 4.75 L -0.033 4.75 L 0.717 4.75 Z M 1.467 3.956 C 1.467 2.185 2.903 0.75 4.673 0.75 L 4.673 -0.75 C 2.074 -0.75 -0.033 1.357 -0.033 3.956 L 1.467 3.956 Z M 4.673 0.75 C 6.443 0.75 7.879 2.185 7.879 3.956 L 9.379 3.956 C 9.379 1.357 7.272 -0.75 4.673 -0.75 L 4.673 0.75 Z M 7.879 3.956 L 7.879 4.751 L 9.379 4.75 L 9.379 3.955 L 7.879 3.956 Z M 7.879 4.75 C 7.879 5.33 8.007 5.903 8.254 6.428 L 9.611 5.789 C 9.458 5.464 9.379 5.11 9.379 4.75 L 7.879 4.75 Z M 8.254 6.428 L 8.535 7.025 L 9.892 6.386 L 9.611 5.789 L 8.254 6.428 Z M 8.535 7.024 C 8.73 7.439 8.427 7.915 7.97 7.915 L 7.97 9.415 C 9.527 9.415 10.555 7.795 9.892 6.386 L 8.535 7.024 Z M 7.97 7.915 L 1.377 7.915 L 1.377 9.415 L 7.97 9.415 L 7.97 7.915 Z M 1.377 7.915 C 0.919 7.915 0.616 7.439 0.811 7.024 L -0.546 6.386 C -1.209 7.795 -0.182 9.415 1.377 9.415 L 1.377 7.915 Z M 0.811 7.025 L 1.092 6.428 L -0.265 5.789 L -0.546 6.386 L 0.811 7.025 Z M 1.092 6.428 C 1.339 5.903 1.467 5.33 1.467 4.75 L -0.033 4.75 C -0.033 5.109 -0.113 5.464 -0.265 5.789 L 1.092 6.428 Z M 1.467 4.751 L 1.467 3.956 L -0.033 3.955 L -0.033 4.75 L 1.467 4.751 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <svg width={3.734} height={1.867} viewBox="0 0 3.734 1.867" fill="none" style={{
              position: "absolute",
              left: 6.133,
              top: 12.133,
              width: 3.734,
              height: 1.867,
              color: "var(--icon-secondary)",
            }}>
              <path d={"M 0.75 0 C 0.75 -0.414 0.414 -0.75 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 L 0.75 0 Z M 4.484 0 C 4.484 -0.414 4.148 -0.75 3.734 -0.75 C 3.32 -0.75 2.984 -0.414 2.984 0 L 4.484 0 Z M -0.75 0 C -0.75 1.445 0.422 2.617 1.867 2.617 L 1.867 1.117 C 1.25 1.117 0.75 0.617 0.75 0 L -0.75 0 Z M 1.867 2.617 C 3.313 2.617 4.484 1.445 4.484 0 L 2.984 0 C 2.984 0.617 2.484 1.117 1.867 1.117 L 1.867 2.617 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <svg width={2.140} height={1.609} viewBox="0 0 2.140 1.609" fill="none" style={{
              position: "absolute",
              left: 6.93,
              top: 2,
              width: 2.14,
              height: 1.609,
              color: "var(--icon-secondary)",
            }}>
              <path d={"M 1.39 1.609 C 1.39 2.024 1.726 2.359 2.14 2.359 C 2.554 2.359 2.89 2.024 2.89 1.609 L 1.39 1.609 Z M -0.75 1.609 C -0.75 2.024 -0.414 2.359 0 2.359 C 0.414 2.359 0.75 2.024 0.75 1.609 L -0.75 1.609 Z M 2.89 1.609 L 2.89 1.07 L 1.39 1.07 L 1.39 1.609 L 2.89 1.609 Z M 2.89 1.07 C 2.89 0.064 2.074 -0.75 1.07 -0.75 L 1.07 0.75 C 1.247 0.75 1.39 0.893 1.39 1.07 L 2.89 1.07 Z M 1.07 -0.75 C 0.065 -0.75 -0.75 0.064 -0.75 1.07 L 0.75 1.07 C 0.75 0.893 0.893 0.75 1.07 0.75 L 1.07 -0.75 Z M -0.75 1.07 L -0.75 1.609 L 0.75 1.609 L 0.75 1.07 L -0.75 1.07 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "relative",
            width: 16,
            overflow: "hidden",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "absolute",
              left: 5.667,
              top: 3.333,
              width: 4.667,
              height: 9.333,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                transform: "matrix(0,-1,1,0,0,9.333)",
                transformOrigin: "0 0",
                width: 9.333,
                height: 4.667,
                overflow: "hidden",
              }}>
                <svg width={9.333} height={4.667} viewBox="0 0 9.333 4.667" fill="none" style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 9.333,
                  height: 4.667,
                  color: "var(--icon-primary)",
                }}>
                  <path d={"M 9.864 0.53 C 10.157 0.237 10.157 -0.237 9.864 -0.53 C 9.571 -0.823 9.096 -0.823 8.803 -0.53 L 9.864 0.53 Z M 4.667 4.667 L 4.136 5.197 C 4.429 5.49 4.904 5.49 5.197 5.197 L 4.667 4.667 Z M 0.53 -0.53 C 0.237 -0.823 -0.237 -0.823 -0.53 -0.53 C -0.823 -0.237 -0.823 0.237 -0.53 0.53 L 0.53 -0.53 Z M 8.803 -0.53 L 4.136 4.136 L 5.197 5.197 L 9.864 0.53 L 8.803 -0.53 Z M 5.197 4.136 L 0.53 -0.53 L -0.53 0.53 L 4.136 5.197 L 5.197 4.136 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <Avatar
            style={{
              position: "relative",
              width: 32,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}
            type={"avatar 14"}
            status={"sm"}
            size={"32"}
          />
          <div style={{
              position: "relative",
              width: 16,
              height: 16,
              flexShrink: 0,
            }}>
            <ArrowDown2 style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
