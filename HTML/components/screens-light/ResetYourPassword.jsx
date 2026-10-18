import { ArrowLeft2 } from './ArrowLeft2.jsx';
import { ArrowRight22 } from './ArrowRight22.jsx';
import { Button } from './Button.jsx';
import { Card2 } from './Card2.jsx';
import { Card5 } from './Card5.jsx';
import { Check } from './Check.jsx';
import { Email1 } from './Email1.jsx';
import { EmailOpen3 } from './EmailOpen3.jsx';
import { Hide } from './Hide.jsx';
import { Lock } from './Lock.jsx';
import { Logo2 } from './Logo2.jsx';
import { StatusBar } from './StatusBar.jsx';

// figma node: 9231:140296 Reset your password
export function ResetYourPassword(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 10175,
      height: 1224,
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
          left: 125,
          top: 265,
          width: 479,
          height: 494,
          overflow: "hidden",
          borderRadius: 12,
          backgroundColor: "var(--background-bg-secondary)",
        }}>
          <div style={{
            position: "absolute",
            left: 6,
            top: 6,
            width: 467,
            height: 482,
            overflow: "hidden",
            borderRadius: 12,
            background: "linear-gradient(180.055deg, rgb(205,239,227) -8.43%, rgb(255,255,255) 17.64%, rgb(255,255,255) 99.95%)",
          }}>
            <div style={{
              position: "absolute",
              left: 34,
              top: 34,
              width: 399,
              display: "flex",
              flexDirection: "column",
              gap: 40,
              alignItems: "center",
              flexWrap: "nowrap",
            }}>
              <div style={{
                position: "relative",
                width: 92,
                height: 92,
                display: "flex",
                flexDirection: "row",
                padding: "2px 0px 2px 0px",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                gap: "calc(var(--spacing-0) * 1px)",
                paddingLeft: "calc(var(--spacing-0) * 1px)",
                paddingRight: "calc(var(--spacing-0) * 1px)",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 92,
                  height: 92,
                  opacity: 0.92,
                  overflow: "hidden",
                  borderRadius: 50,
                  background: "linear-gradient(180.651deg, rgb(223,255,243) 6.22%, rgb(183,253,228) 96.95%)",
                  flexShrink: 0,
                }}>
                  <div style={{
                    position: "absolute",
                    left: 13,
                    top: 13,
                    overflow: "hidden",
                    borderRadius: 96,
                    background: "linear-gradient(188.664deg, rgb(163,217,197) 9.57%, rgb(39,163,118) 85.41%)",
                    boxShadow: "0px 2px 4px 0px rgba(27,28,29,0.04)",
                    display: "flex",
                    flexDirection: "row",
                    gap: 14,
                    padding: "18px 18px 18px 18px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "nowrap",
                    boxSizing: "border-box",
                  }}>
                    <div style={{
                        position: "relative",
                        width: 30,
                        height: 30,
                        flexShrink: 0,
                      }}>
                      <Lock style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
                    </div>
                  </div>
                </div>
              </div>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: 24,
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <div style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <span style={{
                    position: "relative",
                    fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 700,
                    fontSize: 32,
                    textAlign: "center",
                    lineHeight: "42px",
                    color: "var(--text-primary)",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>Forgot Password</span>
                  <span style={{
                    position: "relative",
                    fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 18,
                    textAlign: "center",
                    lineHeight: "24px",
                    color: "var(--text-secondary)",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>Enter your email for instruction.</span>
                </div>
                <div style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--padding-xxs) * 1px)",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    width: 33,
                    display: "flex",
                    flexDirection: "row",
                    gap: "calc(var(--2) * 1px)",
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                  }}>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 500,
                      fontSize: 16,
                      whiteSpace: "nowrap",
                      lineHeight: "20px",
                      color: "rgb(0,0,0)",
                      flexShrink: 0,
                      filter: "drop-shadow(0px 1px 2px rgba(20,28,36,0.04))",
                    }}>Email</span>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 400,
                      fontSize: 14,
                      whiteSpace: "nowrap",
                      lineHeight: "18px",
                      color: "rgb(98,126,124)",
                      flexShrink: 0,
                      filter: "drop-shadow(0px 1px 2px rgba(20,28,36,0.04))",
                    }}>(optional)</span>
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
                      <Email1 style={{
                          position: "relative",
                          width: 24,
                          height: 24,
                          flexShrink: 0,
                        }} />
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
                      }}>Enter your email</span>
                    </div>
                  </div>
                </div>
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
                    <svg width={12} height={1.500} viewBox="0 -0.750 12 1.500" fill="none" style={{
                      position: "absolute",
                      left: 6,
                      top: 12,
                      width: 12,
                      height: 1.5,
                      color: "var(--general-white)",
                    }}>
                      <path d={"M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 -0.75 Z M 12 0.75 C 12.414 0.75 12.75 0.414 12.75 0 C 12.75 -0.414 12.414 -0.75 12 -0.75 L 12 0.75 Z M 0 0.75 L 12 0.75 L 12 -0.75 L 0 -0.75 L 0 0.75 Z"} fill="currentColor" fillRule="nonzero" />
                    </svg>
                    <svg width={1.500} height={12} viewBox="-0.750 0 1.500 12" fill="none" style={{
                      position: "absolute",
                      left: 12,
                      top: 6,
                      width: 1.5,
                      height: 12,
                      color: "var(--general-white)",
                    }}>
                      <path d={"M 0.75 0 C 0.75 -0.414 0.414 -0.75 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 L 0.75 0 Z M -0.75 12 C -0.75 12.414 -0.414 12.75 0 12.75 C 0.414 12.75 0.75 12.414 0.75 12 L -0.75 12 Z M -0.75 0 L -0.75 12 L 0.75 12 L 0.75 0 L -0.75 0 Z"} fill="currentColor" fillRule="nonzero" />
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
                  }}>Forgot Password</span>
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
                    <svg width={12} height={1.500} viewBox="0 -0.750 12 1.500" fill="none" style={{
                      position: "absolute",
                      left: 6,
                      top: 12,
                      width: 12,
                      height: 1.5,
                      color: "var(--general-white)",
                    }}>
                      <path d={"M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 -0.75 Z M 12 0.75 C 12.414 0.75 12.75 0.414 12.75 0 C 12.75 -0.414 12.414 -0.75 12 -0.75 L 12 0.75 Z M 0 0.75 L 12 0.75 L 12 -0.75 L 0 -0.75 L 0 0.75 Z"} fill="currentColor" fillRule="nonzero" />
                    </svg>
                    <svg width={1.500} height={12} viewBox="-0.750 0 1.500 12" fill="none" style={{
                      position: "absolute",
                      left: 12,
                      top: 6,
                      width: 1.5,
                      height: 12,
                      color: "var(--general-white)",
                    }}>
                      <path d={"M 0.75 0 C 0.75 -0.414 0.414 -0.75 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 L 0.75 0 Z M -0.75 12 C -0.75 12.414 -0.414 12.75 0 12.75 C 0.414 12.75 0.75 12.414 0.75 12 L -0.75 12 Z M -0.75 0 L -0.75 12 L 0.75 12 L 0.75 0 L -0.75 0 Z"} fill="currentColor" fillRule="nonzero" />
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
                    color: "var(--text-primary)",
                    flexShrink: 0,
                  }}>Back to Sign In</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 728,
          top: 12,
          width: 700,
          height: 1000,
          overflow: "hidden",
          borderRadius: 12,
          backgroundColor: "var(--primary-600)",
        }}>
          <div style={{
            position: "absolute",
            left: -144,
            top: -56,
            width: 1205.006,
            height: 1277.859,
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 200.834,
              top: 0,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 401.668,
              top: 0,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              backgroundColor: "rgb(44,170,124)",
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 602.502,
              top: 0,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 803.336,
              top: 0,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 1004.172,
              top: 0,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 0,
              top: 182.551,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 200.834,
              top: 182.551,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 401.668,
              top: 182.551,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 602.502,
              top: 182.551,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 803.336,
              top: 182.551,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 1004.172,
              top: 182.551,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 0,
              top: 365.102,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              backgroundColor: "rgb(44,170,124)",
              boxShadow: "inset 0 0 0 0.500px rgb(44,170,124), 0 0 0 0.500px rgb(44,170,124)",
            }} />
            <div style={{
              position: "absolute",
              left: 200.834,
              top: 365.102,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 401.668,
              top: 365.102,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              backgroundColor: "rgb(44,170,124)",
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 602.502,
              top: 365.102,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 803.336,
              top: 365.102,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              backgroundColor: "rgb(44,170,124)",
              boxShadow: "inset 0 0 0 0.500px rgb(44,170,124), 0 0 0 0.500px rgb(44,170,124)",
            }} />
            <div style={{
              position: "absolute",
              left: 1004.172,
              top: 365.102,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 0,
              top: 547.654,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 200.834,
              top: 547.654,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 401.668,
              top: 547.654,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 602.502,
              top: 547.654,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 803.336,
              top: 547.654,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 1004.172,
              top: 547.654,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 0,
              top: 730.205,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 200.834,
              top: 730.205,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              backgroundColor: "rgb(44,170,124)",
              boxShadow: "inset 0 0 0 0.500px rgb(44,170,124), 0 0 0 0.500px rgb(44,170,124)",
            }} />
            <div style={{
              position: "absolute",
              left: 401.668,
              top: 730.205,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 602.502,
              top: 730.205,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 803.336,
              top: 730.205,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              backgroundColor: "rgb(44,170,124)",
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 1004.172,
              top: 730.205,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 0,
              top: 912.756,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 200.834,
              top: 912.756,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 401.668,
              top: 912.756,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 602.502,
              top: 912.756,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 803.336,
              top: 912.756,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 1004.172,
              top: 912.756,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 0,
              top: 1095.307,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              backgroundColor: "rgb(44,170,124)",
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 200.834,
              top: 1095.307,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 401.668,
              top: 1095.307,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 602.502,
              top: 1095.307,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 803.336,
              top: 1095.307,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 1004.172,
              top: 1095.307,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              backgroundColor: "rgb(51,174,129)",
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
          </div>
          <div style={{
            position: "absolute",
            left: 198,
            top: 886,
            display: "flex",
            flexDirection: "row",
            gap: 24,
            alignItems: "center",
            flexWrap: "nowrap",
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <ArrowLeft2 style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />
            </div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 8,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <svg width={24} height={8} viewBox="0 0 24 8" fill="none" style={{
                position: "relative",
                width: 24,
                height: 8,
                overflow: "hidden",
                borderRadius: 16,
                flexShrink: 0,
                color: "var(--primary-50)",
              }}>
                <path d={"M 0 4 C 0 1.791 1.791 0 4 0 L 20 0 C 22.209 0 24 1.791 24 4 L 24 4 C 24 6.209 22.209 8 20 8 L 4 8 C 1.791 8 0 6.209 0 4 L 0 4 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
              <svg width={24} height={8} viewBox="0 0 24 8" fill="none" style={{
                position: "relative",
                width: 24,
                height: 8,
                overflow: "hidden",
                borderRadius: 16,
                flexShrink: 0,
                color: "var(--primary-500)",
              }}>
                <path d={"M 0 4 C 0 1.791 1.791 0 4 0 L 20 0 C 22.209 0 24 1.791 24 4 L 24 4 C 24 6.209 22.209 8 20 8 L 4 8 C 1.791 8 0 6.209 0 4 L 0 4 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
              <svg width={24} height={8} viewBox="0 0 24 8" fill="none" style={{
                position: "relative",
                width: 24,
                height: 8,
                overflow: "hidden",
                borderRadius: 16,
                flexShrink: 0,
                color: "var(--primary-500)",
              }}>
                <path d={"M 0 4 C 0 1.791 1.791 0 4 0 L 20 0 C 22.209 0 24 1.791 24 4 L 24 4 C 24 6.209 22.209 8 20 8 L 4 8 C 1.791 8 0 6.209 0 4 L 0 4 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
              <svg width={24} height={8} viewBox="0 0 24 8" fill="none" style={{
                position: "relative",
                width: 24,
                height: 8,
                overflow: "hidden",
                borderRadius: 16,
                flexShrink: 0,
                color: "var(--primary-500)",
              }}>
                <path d={"M 0 4 C 0 1.791 1.791 0 4 0 L 20 0 C 22.209 0 24 1.791 24 4 L 24 4 C 24 6.209 22.209 8 20 8 L 4 8 C 1.791 8 0 6.209 0 4 L 0 4 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
              <svg width={24} height={8} viewBox="0 0 24 8" fill="none" style={{
                position: "relative",
                width: 24,
                height: 8,
                overflow: "hidden",
                borderRadius: 16,
                flexShrink: 0,
                color: "var(--primary-500)",
              }}>
                <path d={"M 0 4 C 0 1.791 1.791 0 4 0 L 20 0 C 22.209 0 24 1.791 24 4 L 24 4 C 24 6.209 22.209 8 20 8 L 4 8 C 1.791 8 0 6.209 0 4 L 0 4 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
              <svg width={24} height={8} viewBox="0 0 24 8" fill="none" style={{
                position: "relative",
                width: 24,
                height: 8,
                overflow: "hidden",
                borderRadius: 16,
                flexShrink: 0,
                color: "var(--primary-500)",
              }}>
                <path d={"M 0 4 C 0 1.791 1.791 0 4 0 L 20 0 C 22.209 0 24 1.791 24 4 L 24 4 C 24 6.209 22.209 8 20 8 L 4 8 C 1.791 8 0 6.209 0 4 L 0 4 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
              <svg width={24} height={8} viewBox="0 0 24 8" fill="none" style={{
                position: "relative",
                width: 24,
                height: 8,
                overflow: "hidden",
                borderRadius: 16,
                flexShrink: 0,
                color: "var(--primary-500)",
              }}>
                <path d={"M 0 4 C 0 1.791 1.791 0 4 0 L 20 0 C 22.209 0 24 1.791 24 4 L 24 4 C 24 6.209 22.209 8 20 8 L 4 8 C 1.791 8 0 6.209 0 4 L 0 4 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <ArrowRight22 style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />
            </div>
          </div>
          <div style={{
            position: "absolute",
            left: 24,
            top: 24,
            display: "flex",
            flexDirection: "row",
            gap: 51,
            alignItems: "center",
            flexWrap: "nowrap",
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
                color: "rgb(12,17,15)",
                flexShrink: 0,
              }}>Interoly</span>
            </div>
          </div>
          <svg width={526} height={165} viewBox="0 0 526 165" fill="none" style={{
            position: "absolute",
            left: 72,
            top: 550,
            width: 526,
            height: 165,
            overflow: "hidden",
            borderRadius: 16,
            color: "rgba(255,255,255,0.8)",
          }}>
            <path d={"M 0 16 C 0 7.163 7.163 0 16 0 L 510 0 C 518.837 0 526 7.163 526 16 L 526 149 C 526 157.837 518.837 165 510 165 L 16 165 C 7.163 165 0 157.837 0 149 L 0 16 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={486} height={165} viewBox="0 0 486 165" fill="none" style={{
            position: "absolute",
            left: 92,
            top: 570,
            width: 486,
            height: 165,
            overflow: "hidden",
            borderRadius: 16,
            color: "rgba(255,255,255,0.6)",
          }}>
            <path d={"M 0 16 C 0 7.163 7.163 0 16 0 L 470 0 C 478.837 0 486 7.163 486 16 L 486 149 C 486 157.837 478.837 165 470 165 L 16 165 C 7.163 165 0 157.837 0 149 L 0 16 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={446} height={165} viewBox="0 0 446 165" fill="none" style={{
            position: "absolute",
            left: 112,
            top: 590,
            width: 446,
            height: 165,
            overflow: "hidden",
            borderRadius: 16,
            color: "rgba(255,255,255,0.4)",
          }}>
            <path d={"M 0 16 C 0 7.163 7.163 0 16 0 L 430 0 C 438.837 0 446 7.163 446 16 L 446 149 C 446 157.837 438.837 165 430 165 L 16 165 C 7.163 165 0 157.837 0 149 L 0 16 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <Card5 style={{
              position: "absolute",
              left: 52,
              top: 371,
              width: 566,
            }} />
          <Card2 style={{
              position: "absolute",
              left: 510,
              top: 322,
              width: 160,
              height: 173,
            }} />
          <div style={{
            position: "absolute",
            left: 52,
            top: 107,
            width: 596,
            display: "flex",
            flexDirection: "column",
            gap: 12,
            alignItems: "flex-start",
            flexWrap: "nowrap",
          }}>
            <span style={{
              position: "relative",
              width: 592,
              fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 32,
              textAlign: "center",
              lineHeight: "42px",
              color: "var(--general-white)",
              flexShrink: 0,
            }}>Sign Up Interoly Smart Inventory Management System</span>
            <span style={{
              position: "relative",
              fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 18,
              textAlign: "center",
              lineHeight: "24px",
              color: "var(--grayscale-200)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Access your Interoly Inventory Management system to track stock levels, manage orders, and streamline your supply chain. Sign up to stay in control of your inventory anytime, anywhere.</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 1640,
        top: 100,
        width: 375,
        height: 554,
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
        <div style={{
          position: "absolute",
          left: 24,
          top: 68,
          width: 327,
          height: 462,
          overflow: "hidden",
          borderRadius: 12,
          backgroundColor: "var(--background-bg-secondary)",
        }}>
          <div style={{
            position: "absolute",
            left: 6,
            top: 6,
            width: 315,
            height: 450,
            overflow: "hidden",
            borderRadius: 12,
            background: "linear-gradient(180.040deg, rgb(205,239,227) -8.46%, rgb(255,255,255) 17.63%, rgb(255,255,255) 99.98%)",
          }}>
            <div style={{
              position: "absolute",
              left: 24,
              top: 24,
              width: 267,
              display: "flex",
              flexDirection: "column",
              gap: 40,
              alignItems: "center",
              flexWrap: "nowrap",
            }}>
              <div style={{
                position: "relative",
                width: 92,
                height: 92,
                opacity: 0.92,
                overflow: "hidden",
                borderRadius: 50,
                background: "linear-gradient(180.651deg, rgb(223,255,243) 6.22%, rgb(183,253,228) 96.95%)",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "absolute",
                  left: 13,
                  top: 13,
                  overflow: "hidden",
                  borderRadius: 96,
                  background: "linear-gradient(188.664deg, rgb(163,217,197) 9.57%, rgb(39,163,118) 85.41%)",
                  boxShadow: "0px 2px 4px 0px rgba(27,28,29,0.04)",
                  display: "flex",
                  flexDirection: "row",
                  gap: 14,
                  padding: "18px 18px 18px 18px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                }}>
                  <div style={{
                      position: "relative",
                      width: 30,
                      height: 30,
                      flexShrink: 0,
                    }}>
                    <Lock style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
                  </div>
                </div>
              </div>
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
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <span style={{
                    position: "relative",
                    fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 700,
                    fontSize: 32,
                    textAlign: "center",
                    lineHeight: "42px",
                    color: "var(--text-primary)",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>Forgot Password</span>
                  <span style={{
                    position: "relative",
                    fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 18,
                    textAlign: "center",
                    lineHeight: "24px",
                    color: "var(--text-secondary)",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>Enter your email for instruction.</span>
                </div>
                <div style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  gap: 24,
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  flexShrink: 0,
                  alignSelf: "stretch",
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
                        flexDirection: "column",
                        gap: "calc(var(--padding-xxs) * 1px)",
                        alignItems: "flex-start",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                          position: "relative",
                          width: 33,
                          display: "flex",
                          flexDirection: "row",
                          gap: "calc(var(--2) * 1px)",
                          alignItems: "center",
                          flexWrap: "nowrap",
                          flexShrink: 0,
                        }}>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            lineHeight: "20px",
                            color: "rgb(0,0,0)",
                            flexShrink: 0,
                            filter: "drop-shadow(0px 1px 2px rgba(20,28,36,0.04))",
                          }}>Email</span>
                          <span style={{
                            position: "relative",
                            fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                            fontWeight: 400,
                            fontSize: 14,
                            whiteSpace: "nowrap",
                            lineHeight: "18px",
                            color: "rgb(98,126,124)",
                            flexShrink: 0,
                            filter: "drop-shadow(0px 1px 2px rgba(20,28,36,0.04))",
                          }}>(optional)</span>
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
                            <Email1 style={{
                                position: "relative",
                                width: 24,
                                height: 24,
                                flexShrink: 0,
                              }} />
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
                            }}>Enter your email</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                      <svg width={12} height={1.500} viewBox="0 -0.750 12 1.500" fill="none" style={{
                        position: "absolute",
                        left: 6,
                        top: 12,
                        width: 12,
                        height: 1.5,
                        color: "var(--general-white)",
                      }}>
                        <path d={"M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 -0.75 Z M 12 0.75 C 12.414 0.75 12.75 0.414 12.75 0 C 12.75 -0.414 12.414 -0.75 12 -0.75 L 12 0.75 Z M 0 0.75 L 12 0.75 L 12 -0.75 L 0 -0.75 L 0 0.75 Z"} fill="currentColor" fillRule="nonzero" />
                      </svg>
                      <svg width={1.500} height={12} viewBox="-0.750 0 1.500 12" fill="none" style={{
                        position: "absolute",
                        left: 12,
                        top: 6,
                        width: 1.5,
                        height: 12,
                        color: "var(--general-white)",
                      }}>
                        <path d={"M 0.75 0 C 0.75 -0.414 0.414 -0.75 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 L 0.75 0 Z M -0.75 12 C -0.75 12.414 -0.414 12.75 0 12.75 C 0.414 12.75 0.75 12.414 0.75 12 L -0.75 12 Z M -0.75 0 L -0.75 12 L 0.75 12 L 0.75 0 L -0.75 0 Z"} fill="currentColor" fillRule="nonzero" />
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
                    }}>Forgot Password</span>
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
                      <svg width={12} height={1.500} viewBox="0 -0.750 12 1.500" fill="none" style={{
                        position: "absolute",
                        left: 6,
                        top: 12,
                        width: 12,
                        height: 1.5,
                        color: "var(--general-white)",
                      }}>
                        <path d={"M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 -0.75 Z M 12 0.75 C 12.414 0.75 12.75 0.414 12.75 0 C 12.75 -0.414 12.414 -0.75 12 -0.75 L 12 0.75 Z M 0 0.75 L 12 0.75 L 12 -0.75 L 0 -0.75 L 0 0.75 Z"} fill="currentColor" fillRule="nonzero" />
                      </svg>
                      <svg width={1.500} height={12} viewBox="-0.750 0 1.500 12" fill="none" style={{
                        position: "absolute",
                        left: 12,
                        top: 6,
                        width: 1.5,
                        height: 12,
                        color: "var(--general-white)",
                      }}>
                        <path d={"M 0.75 0 C 0.75 -0.414 0.414 -0.75 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 L 0.75 0 Z M -0.75 12 C -0.75 12.414 -0.414 12.75 0 12.75 C 0.414 12.75 0.75 12.414 0.75 12 L -0.75 12 Z M -0.75 0 L -0.75 12 L 0.75 12 L 0.75 0 L -0.75 0 Z"} fill="currentColor" fillRule="nonzero" />
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
                      color: "var(--text-primary)",
                      flexShrink: 0,
                    }}>Back to Sign In</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 3655,
        top: 100,
        width: 375,
        height: 554,
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
        <div style={{
          position: "absolute",
          left: 24,
          top: 68,
          width: 327,
          height: 462,
          overflow: "hidden",
          borderRadius: 12,
          backgroundColor: "var(--background-bg-secondary)",
        }}>
          <div style={{
            position: "absolute",
            left: 6,
            top: 6,
            width: 315,
            height: 450,
            overflow: "hidden",
            borderRadius: 12,
            background: "linear-gradient(180.040deg, rgb(205,239,227) -8.46%, rgb(255,255,255) 17.63%, rgb(255,255,255) 99.98%)",
          }}>
            <div style={{
              position: "absolute",
              left: 24,
              top: 24,
              width: 267,
              display: "flex",
              flexDirection: "column",
              gap: 40,
              alignItems: "center",
              flexWrap: "nowrap",
            }}>
              <div style={{
                position: "relative",
                width: 92,
                height: 92,
                display: "flex",
                flexDirection: "row",
                padding: "2px 0px 2px 0px",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                gap: "calc(var(--spacing-0) * 1px)",
                paddingLeft: "calc(var(--spacing-0) * 1px)",
                paddingRight: "calc(var(--spacing-0) * 1px)",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 92,
                  height: 92,
                  opacity: 0.92,
                  overflow: "hidden",
                  borderRadius: 50,
                  background: "linear-gradient(180.651deg, rgb(223,255,243) 6.22%, rgb(183,253,228) 96.95%)",
                  flexShrink: 0,
                }}>
                  <div style={{
                    position: "absolute",
                    left: 13,
                    top: 13,
                    overflow: "hidden",
                    borderRadius: 96,
                    background: "linear-gradient(188.664deg, rgb(163,217,197) 9.57%, rgb(39,163,118) 85.41%)",
                    boxShadow: "0px 2px 4px 0px rgba(27,28,29,0.04)",
                    display: "flex",
                    flexDirection: "row",
                    gap: 14,
                    padding: "18px 18px 18px 18px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "nowrap",
                    boxSizing: "border-box",
                  }}>
                    <div style={{
                        position: "relative",
                        width: 30,
                        height: 30,
                        flexShrink: 0,
                      }}>
                      <Email1 style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
                    </div>
                  </div>
                </div>
              </div>
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
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <span style={{
                    position: "relative",
                    fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 700,
                    fontSize: 32,
                    textAlign: "center",
                    lineHeight: "42px",
                    color: "var(--text-primary)",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>Check your email</span>
                  <span style={{
                    position: "relative",
                    fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 18,
                    textAlign: "center",
                    lineHeight: "24px",
                    color: "var(--text-secondary)",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>We sent a password reset link to your email. Please check your inbox</span>
                </div>
                <div style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  gap: 24,
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
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
                      <svg width={12} height={1.500} viewBox="0 -0.750 12 1.500" fill="none" style={{
                        position: "absolute",
                        left: 6,
                        top: 12,
                        width: 12,
                        height: 1.5,
                        color: "var(--general-white)",
                      }}>
                        <path d={"M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 -0.75 Z M 12 0.75 C 12.414 0.75 12.75 0.414 12.75 0 C 12.75 -0.414 12.414 -0.75 12 -0.75 L 12 0.75 Z M 0 0.75 L 12 0.75 L 12 -0.75 L 0 -0.75 L 0 0.75 Z"} fill="currentColor" fillRule="nonzero" />
                      </svg>
                      <svg width={1.500} height={12} viewBox="-0.750 0 1.500 12" fill="none" style={{
                        position: "absolute",
                        left: 12,
                        top: 6,
                        width: 1.5,
                        height: 12,
                        color: "var(--general-white)",
                      }}>
                        <path d={"M 0.75 0 C 0.75 -0.414 0.414 -0.75 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 L 0.75 0 Z M -0.75 12 C -0.75 12.414 -0.414 12.75 0 12.75 C 0.414 12.75 0.75 12.414 0.75 12 L -0.75 12 Z M -0.75 0 L -0.75 12 L 0.75 12 L 0.75 0 L -0.75 0 Z"} fill="currentColor" fillRule="nonzero" />
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
                    }}>Open Email</span>
                  </div>
                  <span style={{
                    position: "relative",
                    fontFamily: "\"Host Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 500,
                    fontSize: 16,
                    textAlign: "center",
                    lineHeight: "20px",
                    color: "rgb(51,57,74)",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    whiteSpace: "pre-wrap",
                  }}><span style={{ color: "rgb(145,153,146)" }}>{"Didn’t received the email?"}</span>{" "}<span style={{ color: "rgb(39,163,118)", textDecoration: "underline" }}>{"Resend"}</span></span>
                </div>
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
          left: 125,
          top: 303,
          width: 479,
          height: 418,
          overflow: "hidden",
          borderRadius: 12,
          backgroundColor: "var(--background-bg-secondary)",
        }}>
          <div style={{
            position: "absolute",
            left: 6,
            top: 6,
            width: 467,
            height: 406,
            overflow: "hidden",
            borderRadius: 12,
            background: "linear-gradient(180.065deg, rgb(205,239,227) -8.41%, rgb(255,255,255) 17.66%, rgb(255,255,255) 99.93%)",
          }}>
            <div style={{
              position: "absolute",
              left: 34,
              top: 34,
              width: 399,
              display: "flex",
              flexDirection: "column",
              gap: 40,
              alignItems: "center",
              flexWrap: "nowrap",
            }}>
              <div style={{
                position: "relative",
                width: 92,
                height: 92,
                display: "flex",
                flexDirection: "row",
                padding: "2px 0px 2px 0px",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                gap: "calc(var(--spacing-0) * 1px)",
                paddingLeft: "calc(var(--spacing-0) * 1px)",
                paddingRight: "calc(var(--spacing-0) * 1px)",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 92,
                  height: 92,
                  opacity: 0.92,
                  overflow: "hidden",
                  borderRadius: 50,
                  background: "linear-gradient(180.651deg, rgb(223,255,243) 6.22%, rgb(183,253,228) 96.95%)",
                  flexShrink: 0,
                }}>
                  <div style={{
                    position: "absolute",
                    left: 13,
                    top: 13,
                    overflow: "hidden",
                    borderRadius: 96,
                    background: "linear-gradient(188.664deg, rgb(163,217,197) 9.57%, rgb(39,163,118) 85.41%)",
                    boxShadow: "0px 2px 4px 0px rgba(27,28,29,0.04)",
                    display: "flex",
                    flexDirection: "row",
                    gap: 14,
                    padding: "18px 18px 18px 18px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "nowrap",
                    boxSizing: "border-box",
                  }}>
                    <div style={{
                        position: "relative",
                        width: 30,
                        height: 30,
                        flexShrink: 0,
                      }}>
                      <Email1 style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
                    </div>
                  </div>
                </div>
              </div>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: 24,
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <div style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <span style={{
                    position: "relative",
                    fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 700,
                    fontSize: 32,
                    textAlign: "center",
                    lineHeight: "42px",
                    color: "var(--text-primary)",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>Check your email</span>
                  <span style={{
                    position: "relative",
                    fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 18,
                    textAlign: "center",
                    lineHeight: "24px",
                    color: "var(--text-secondary)",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>We sent a password reset link to your email. Please check your inbox</span>
                </div>
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
                    <svg width={12} height={1.500} viewBox="0 -0.750 12 1.500" fill="none" style={{
                      position: "absolute",
                      left: 6,
                      top: 12,
                      width: 12,
                      height: 1.5,
                      color: "var(--general-white)",
                    }}>
                      <path d={"M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 -0.75 Z M 12 0.75 C 12.414 0.75 12.75 0.414 12.75 0 C 12.75 -0.414 12.414 -0.75 12 -0.75 L 12 0.75 Z M 0 0.75 L 12 0.75 L 12 -0.75 L 0 -0.75 L 0 0.75 Z"} fill="currentColor" fillRule="nonzero" />
                    </svg>
                    <svg width={1.500} height={12} viewBox="-0.750 0 1.500 12" fill="none" style={{
                      position: "absolute",
                      left: 12,
                      top: 6,
                      width: 1.5,
                      height: 12,
                      color: "var(--general-white)",
                    }}>
                      <path d={"M 0.75 0 C 0.75 -0.414 0.414 -0.75 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 L 0.75 0 Z M -0.75 12 C -0.75 12.414 -0.414 12.75 0 12.75 C 0.414 12.75 0.75 12.414 0.75 12 L -0.75 12 Z M -0.75 0 L -0.75 12 L 0.75 12 L 0.75 0 L -0.75 0 Z"} fill="currentColor" fillRule="nonzero" />
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
                  }}>Open Email</span>
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "\"Host Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: 16,
                  textAlign: "center",
                  lineHeight: "20px",
                  color: "rgb(51,57,74)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  whiteSpace: "pre-wrap",
                }}><span style={{ color: "rgb(145,153,146)" }}>{"Didn’t received the email?"}</span>{" "}<span style={{ color: "rgb(39,163,118)", textDecoration: "underline" }}>{"Resend"}</span></span>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 728,
          top: 12,
          width: 700,
          height: 1000,
          overflow: "hidden",
          borderRadius: 12,
          backgroundColor: "var(--primary-600)",
        }}>
          <div style={{
            position: "absolute",
            left: -144,
            top: -56,
            width: 1205.006,
            height: 1277.859,
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 200.834,
              top: 0,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 401.668,
              top: 0,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              backgroundColor: "rgb(44,170,124)",
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 602.502,
              top: 0,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 803.336,
              top: 0,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 1004.172,
              top: 0,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 0,
              top: 182.551,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 200.834,
              top: 182.551,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 401.668,
              top: 182.551,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 602.502,
              top: 182.551,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 803.336,
              top: 182.551,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 1004.172,
              top: 182.551,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 0,
              top: 365.102,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              backgroundColor: "rgb(44,170,124)",
              boxShadow: "inset 0 0 0 0.500px rgb(44,170,124), 0 0 0 0.500px rgb(44,170,124)",
            }} />
            <div style={{
              position: "absolute",
              left: 200.834,
              top: 365.102,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 401.668,
              top: 365.102,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              backgroundColor: "rgb(44,170,124)",
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 602.502,
              top: 365.102,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 803.336,
              top: 365.102,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              backgroundColor: "rgb(44,170,124)",
              boxShadow: "inset 0 0 0 0.500px rgb(44,170,124), 0 0 0 0.500px rgb(44,170,124)",
            }} />
            <div style={{
              position: "absolute",
              left: 1004.172,
              top: 365.102,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 0,
              top: 547.654,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 200.834,
              top: 547.654,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 401.668,
              top: 547.654,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 602.502,
              top: 547.654,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 803.336,
              top: 547.654,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 1004.172,
              top: 547.654,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 0,
              top: 730.205,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 200.834,
              top: 730.205,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              backgroundColor: "rgb(44,170,124)",
              boxShadow: "inset 0 0 0 0.500px rgb(44,170,124), 0 0 0 0.500px rgb(44,170,124)",
            }} />
            <div style={{
              position: "absolute",
              left: 401.668,
              top: 730.205,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 602.502,
              top: 730.205,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 803.336,
              top: 730.205,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              backgroundColor: "rgb(44,170,124)",
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 1004.172,
              top: 730.205,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 0,
              top: 912.756,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 200.834,
              top: 912.756,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 401.668,
              top: 912.756,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 602.502,
              top: 912.756,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 803.336,
              top: 912.756,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 1004.172,
              top: 912.756,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 0,
              top: 1095.307,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              backgroundColor: "rgb(44,170,124)",
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 200.834,
              top: 1095.307,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 401.668,
              top: 1095.307,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 602.502,
              top: 1095.307,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 803.336,
              top: 1095.307,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 1004.172,
              top: 1095.307,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              backgroundColor: "rgb(51,174,129)",
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
          </div>
          <div style={{
            position: "absolute",
            left: 198,
            top: 886,
            display: "flex",
            flexDirection: "row",
            gap: 24,
            alignItems: "center",
            flexWrap: "nowrap",
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <ArrowLeft2 style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />
            </div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 8,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <svg width={24} height={8} viewBox="0 0 24 8" fill="none" style={{
                position: "relative",
                width: 24,
                height: 8,
                overflow: "hidden",
                borderRadius: 16,
                flexShrink: 0,
                color: "var(--primary-50)",
              }}>
                <path d={"M 0 4 C 0 1.791 1.791 0 4 0 L 20 0 C 22.209 0 24 1.791 24 4 L 24 4 C 24 6.209 22.209 8 20 8 L 4 8 C 1.791 8 0 6.209 0 4 L 0 4 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
              <svg width={24} height={8} viewBox="0 0 24 8" fill="none" style={{
                position: "relative",
                width: 24,
                height: 8,
                overflow: "hidden",
                borderRadius: 16,
                flexShrink: 0,
                color: "var(--primary-500)",
              }}>
                <path d={"M 0 4 C 0 1.791 1.791 0 4 0 L 20 0 C 22.209 0 24 1.791 24 4 L 24 4 C 24 6.209 22.209 8 20 8 L 4 8 C 1.791 8 0 6.209 0 4 L 0 4 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
              <svg width={24} height={8} viewBox="0 0 24 8" fill="none" style={{
                position: "relative",
                width: 24,
                height: 8,
                overflow: "hidden",
                borderRadius: 16,
                flexShrink: 0,
                color: "var(--primary-500)",
              }}>
                <path d={"M 0 4 C 0 1.791 1.791 0 4 0 L 20 0 C 22.209 0 24 1.791 24 4 L 24 4 C 24 6.209 22.209 8 20 8 L 4 8 C 1.791 8 0 6.209 0 4 L 0 4 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
              <svg width={24} height={8} viewBox="0 0 24 8" fill="none" style={{
                position: "relative",
                width: 24,
                height: 8,
                overflow: "hidden",
                borderRadius: 16,
                flexShrink: 0,
                color: "var(--primary-500)",
              }}>
                <path d={"M 0 4 C 0 1.791 1.791 0 4 0 L 20 0 C 22.209 0 24 1.791 24 4 L 24 4 C 24 6.209 22.209 8 20 8 L 4 8 C 1.791 8 0 6.209 0 4 L 0 4 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
              <svg width={24} height={8} viewBox="0 0 24 8" fill="none" style={{
                position: "relative",
                width: 24,
                height: 8,
                overflow: "hidden",
                borderRadius: 16,
                flexShrink: 0,
                color: "var(--primary-500)",
              }}>
                <path d={"M 0 4 C 0 1.791 1.791 0 4 0 L 20 0 C 22.209 0 24 1.791 24 4 L 24 4 C 24 6.209 22.209 8 20 8 L 4 8 C 1.791 8 0 6.209 0 4 L 0 4 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
              <svg width={24} height={8} viewBox="0 0 24 8" fill="none" style={{
                position: "relative",
                width: 24,
                height: 8,
                overflow: "hidden",
                borderRadius: 16,
                flexShrink: 0,
                color: "var(--primary-500)",
              }}>
                <path d={"M 0 4 C 0 1.791 1.791 0 4 0 L 20 0 C 22.209 0 24 1.791 24 4 L 24 4 C 24 6.209 22.209 8 20 8 L 4 8 C 1.791 8 0 6.209 0 4 L 0 4 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
              <svg width={24} height={8} viewBox="0 0 24 8" fill="none" style={{
                position: "relative",
                width: 24,
                height: 8,
                overflow: "hidden",
                borderRadius: 16,
                flexShrink: 0,
                color: "var(--primary-500)",
              }}>
                <path d={"M 0 4 C 0 1.791 1.791 0 4 0 L 20 0 C 22.209 0 24 1.791 24 4 L 24 4 C 24 6.209 22.209 8 20 8 L 4 8 C 1.791 8 0 6.209 0 4 L 0 4 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <ArrowRight22 style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />
            </div>
          </div>
          <div style={{
            position: "absolute",
            left: 24,
            top: 24,
            display: "flex",
            flexDirection: "row",
            gap: 51,
            alignItems: "center",
            flexWrap: "nowrap",
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
                color: "rgb(12,17,15)",
                flexShrink: 0,
              }}>Interoly</span>
            </div>
          </div>
          <svg width={526} height={165} viewBox="0 0 526 165" fill="none" style={{
            position: "absolute",
            left: 72,
            top: 550,
            width: 526,
            height: 165,
            overflow: "hidden",
            borderRadius: 16,
            color: "rgba(255,255,255,0.8)",
          }}>
            <path d={"M 0 16 C 0 7.163 7.163 0 16 0 L 510 0 C 518.837 0 526 7.163 526 16 L 526 149 C 526 157.837 518.837 165 510 165 L 16 165 C 7.163 165 0 157.837 0 149 L 0 16 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={486} height={165} viewBox="0 0 486 165" fill="none" style={{
            position: "absolute",
            left: 92,
            top: 570,
            width: 486,
            height: 165,
            overflow: "hidden",
            borderRadius: 16,
            color: "rgba(255,255,255,0.6)",
          }}>
            <path d={"M 0 16 C 0 7.163 7.163 0 16 0 L 470 0 C 478.837 0 486 7.163 486 16 L 486 149 C 486 157.837 478.837 165 470 165 L 16 165 C 7.163 165 0 157.837 0 149 L 0 16 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={446} height={165} viewBox="0 0 446 165" fill="none" style={{
            position: "absolute",
            left: 112,
            top: 590,
            width: 446,
            height: 165,
            overflow: "hidden",
            borderRadius: 16,
            color: "rgba(255,255,255,0.4)",
          }}>
            <path d={"M 0 16 C 0 7.163 7.163 0 16 0 L 430 0 C 438.837 0 446 7.163 446 16 L 446 149 C 446 157.837 438.837 165 430 165 L 16 165 C 7.163 165 0 157.837 0 149 L 0 16 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <Card5 style={{
              position: "absolute",
              left: 52,
              top: 371,
              width: 566,
            }} />
          <Card2 style={{
              position: "absolute",
              left: 510,
              top: 322,
              width: 160,
              height: 173,
            }} />
          <div style={{
            position: "absolute",
            left: 52,
            top: 107,
            width: 596,
            display: "flex",
            flexDirection: "column",
            gap: 12,
            alignItems: "flex-start",
            flexWrap: "nowrap",
          }}>
            <span style={{
              position: "relative",
              width: 592,
              fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 32,
              textAlign: "center",
              lineHeight: "42px",
              color: "var(--general-white)",
              flexShrink: 0,
            }}>Sign Up Interoly Smart Inventory Management System</span>
            <span style={{
              position: "relative",
              fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 18,
              textAlign: "center",
              lineHeight: "24px",
              color: "var(--grayscale-200)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Access your Interoly Inventory Management system to track stock levels, manage orders, and streamline your supply chain. Sign up to stay in control of your inventory anytime, anywhere.</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 4130,
        top: 100,
        width: 1440,
        height: 1024,
        overflow: "hidden",
        borderRadius: 16,
        backgroundColor: "var(--background-bg-primary)",
      }}>
        <div style={{
          position: "absolute",
          left: 125,
          top: 277,
          width: 479,
          height: 470,
          overflow: "hidden",
          borderRadius: 12,
          backgroundColor: "var(--background-bg-secondary)",
        }}>
          <div style={{
            position: "absolute",
            left: 6,
            top: 6,
            width: 467,
            height: 458,
            overflow: "hidden",
            borderRadius: 12,
            background: "linear-gradient(180.058deg, rgb(205,239,227) -8.43%, rgb(255,255,255) 17.65%, rgb(255,255,255) 99.95%)",
          }}>
            <div style={{
              position: "absolute",
              left: 34,
              top: 34,
              width: 399,
              display: "flex",
              flexDirection: "column",
              gap: 40,
              alignItems: "center",
              flexWrap: "nowrap",
            }}>
              <div style={{
                position: "relative",
                width: 92,
                height: 92,
                display: "flex",
                flexDirection: "row",
                padding: "2px 0px 2px 0px",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                gap: "calc(var(--spacing-0) * 1px)",
                paddingLeft: "calc(var(--spacing-0) * 1px)",
                paddingRight: "calc(var(--spacing-0) * 1px)",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 92,
                  height: 92,
                  opacity: 0.92,
                  overflow: "hidden",
                  borderRadius: 50,
                  background: "linear-gradient(180.651deg, rgb(223,255,243) 6.22%, rgb(183,253,228) 96.95%)",
                  flexShrink: 0,
                }}>
                  <div style={{
                    position: "absolute",
                    left: 13,
                    top: 13,
                    overflow: "hidden",
                    borderRadius: 96,
                    background: "linear-gradient(188.664deg, rgb(163,217,197) 9.57%, rgb(39,163,118) 85.41%)",
                    boxShadow: "0px 2px 4px 0px rgba(27,28,29,0.04)",
                    display: "flex",
                    flexDirection: "row",
                    gap: 14,
                    padding: "18px 18px 18px 18px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "nowrap",
                    boxSizing: "border-box",
                  }}>
                    <div style={{
                        position: "relative",
                        width: 30,
                        height: 30,
                        flexShrink: 0,
                      }}>
                      <EmailOpen3 style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
                    </div>
                  </div>
                </div>
              </div>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: 24,
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
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
                    flexDirection: "column",
                    gap: 12,
                    alignItems: "flex-start",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 700,
                      fontSize: 32,
                      textAlign: "center",
                      lineHeight: "42px",
                      color: "var(--text-primary)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>OTP Verification</span>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 400,
                      fontSize: 18,
                      textAlign: "center",
                      lineHeight: "24px",
                      color: "var(--text-secondary)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                      whiteSpace: "pre-wrap",
                    }}>{"We have sent a verification code to email address "}{"\n"}<span style={{ color: "rgb(12,17,15)" }}>{"tahsankhan380@gmail.com"}</span>{" "}<span style={{ color: "rgb(39,163,118)", textDecoration: "underline" }}>{"Wrong Email?"}</span></span>
                  </div>
                  <div style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    gap: 24,
                    alignItems: "flex-start",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "row",
                      gap: 16,
                      alignItems: "center",
                      flexWrap: "nowrap",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <Button
                        style={{ position: "relative", width: 89, flexShrink: 0 }}
                        rightIcon={false}
                        leftIcon={false}
                        text1={"7"}
                        state={"default"}
                        type={"secondary"}
                        size={"lg"}
                      />
                      <Button
                        style={{ position: "relative", width: 89, flexShrink: 0 }}
                        rightIcon={false}
                        leftIcon={false}
                        text1={"5"}
                        state={"default"}
                        type={"secondary"}
                        size={"lg"}
                      />
                      <Button
                        style={{ position: "relative", width: 86, flexShrink: 0 }}
                        rightIcon={false}
                        leftIcon={false}
                        text1={"4"}
                        state={"default"}
                        type={"secondary"}
                        size={"lg"}
                      />
                      <div style={{
                        position: "relative",
                        width: 87,
                        height: 36,
                        overflow: "hidden",
                        borderRadius: 8,
                        backgroundColor: "var(--background-bg-secondary-hover)",
                        boxShadow: "inset 0 0 0 1px var(--border-border-secondary)",
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
                          color: "var(--primary-600)",
                          flexShrink: 0,
                          alignSelf: "stretch",
                        }}>|</span>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: 24,
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
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
                          <svg width={12} height={1.500} viewBox="0 -0.750 12 1.500" fill="none" style={{
                            position: "absolute",
                            left: 6,
                            top: 12,
                            width: 12,
                            height: 1.5,
                            color: "var(--general-white)",
                          }}>
                            <path d={"M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 -0.75 Z M 12 0.75 C 12.414 0.75 12.75 0.414 12.75 0 C 12.75 -0.414 12.414 -0.75 12 -0.75 L 12 0.75 Z M 0 0.75 L 12 0.75 L 12 -0.75 L 0 -0.75 L 0 0.75 Z"} fill="currentColor" fillRule="nonzero" />
                          </svg>
                          <svg width={1.500} height={12} viewBox="-0.750 0 1.500 12" fill="none" style={{
                            position: "absolute",
                            left: 12,
                            top: 6,
                            width: 1.5,
                            height: 12,
                            color: "var(--general-white)",
                          }}>
                            <path d={"M 0.75 0 C 0.75 -0.414 0.414 -0.75 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 L 0.75 0 Z M -0.75 12 C -0.75 12.414 -0.414 12.75 0 12.75 C 0.414 12.75 0.75 12.414 0.75 12 L -0.75 12 Z M -0.75 0 L -0.75 12 L 0.75 12 L 0.75 0 L -0.75 0 Z"} fill="currentColor" fillRule="nonzero" />
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
                        }}>Submit</span>
                      </div>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Host Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        textAlign: "center",
                        lineHeight: "20px",
                        color: "rgb(51,57,74)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                        whiteSpace: "pre-wrap",
                      }}><span style={{ color: "rgb(145,153,146)" }}>{"Didn’t received the email?"}</span>{" "}<span style={{ color: "rgb(39,163,118)", textDecoration: "underline" }}>{"Resend"}</span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 728,
          top: 12,
          width: 700,
          height: 1000,
          overflow: "hidden",
          borderRadius: 12,
          backgroundColor: "var(--primary-600)",
        }}>
          <div style={{
            position: "absolute",
            left: -144,
            top: -56,
            width: 1205.006,
            height: 1277.859,
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 200.834,
              top: 0,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 401.668,
              top: 0,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              backgroundColor: "rgb(44,170,124)",
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 602.502,
              top: 0,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 803.336,
              top: 0,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 1004.172,
              top: 0,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 0,
              top: 182.551,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 200.834,
              top: 182.551,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 401.668,
              top: 182.551,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 602.502,
              top: 182.551,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 803.336,
              top: 182.551,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 1004.172,
              top: 182.551,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 0,
              top: 365.102,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              backgroundColor: "rgb(44,170,124)",
              boxShadow: "inset 0 0 0 0.500px rgb(44,170,124), 0 0 0 0.500px rgb(44,170,124)",
            }} />
            <div style={{
              position: "absolute",
              left: 200.834,
              top: 365.102,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 401.668,
              top: 365.102,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              backgroundColor: "rgb(44,170,124)",
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 602.502,
              top: 365.102,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 803.336,
              top: 365.102,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              backgroundColor: "rgb(44,170,124)",
              boxShadow: "inset 0 0 0 0.500px rgb(44,170,124), 0 0 0 0.500px rgb(44,170,124)",
            }} />
            <div style={{
              position: "absolute",
              left: 1004.172,
              top: 365.102,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 0,
              top: 547.654,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 200.834,
              top: 547.654,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 401.668,
              top: 547.654,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 602.502,
              top: 547.654,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 803.336,
              top: 547.654,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 1004.172,
              top: 547.654,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 0,
              top: 730.205,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 200.834,
              top: 730.205,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              backgroundColor: "rgb(44,170,124)",
              boxShadow: "inset 0 0 0 0.500px rgb(44,170,124), 0 0 0 0.500px rgb(44,170,124)",
            }} />
            <div style={{
              position: "absolute",
              left: 401.668,
              top: 730.205,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 602.502,
              top: 730.205,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 803.336,
              top: 730.205,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              backgroundColor: "rgb(44,170,124)",
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 1004.172,
              top: 730.205,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 0,
              top: 912.756,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 200.834,
              top: 912.756,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 401.668,
              top: 912.756,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 602.502,
              top: 912.756,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 803.336,
              top: 912.756,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 1004.172,
              top: 912.756,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 0,
              top: 1095.307,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              backgroundColor: "rgb(44,170,124)",
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 200.834,
              top: 1095.307,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 401.668,
              top: 1095.307,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 602.502,
              top: 1095.307,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 803.336,
              top: 1095.307,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 1004.172,
              top: 1095.307,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              backgroundColor: "rgb(51,174,129)",
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
          </div>
          <div style={{
            position: "absolute",
            left: 198,
            top: 886,
            display: "flex",
            flexDirection: "row",
            gap: 24,
            alignItems: "center",
            flexWrap: "nowrap",
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <ArrowLeft2 style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />
            </div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 8,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <svg width={24} height={8} viewBox="0 0 24 8" fill="none" style={{
                position: "relative",
                width: 24,
                height: 8,
                overflow: "hidden",
                borderRadius: 16,
                flexShrink: 0,
                color: "var(--primary-50)",
              }}>
                <path d={"M 0 4 C 0 1.791 1.791 0 4 0 L 20 0 C 22.209 0 24 1.791 24 4 L 24 4 C 24 6.209 22.209 8 20 8 L 4 8 C 1.791 8 0 6.209 0 4 L 0 4 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
              <svg width={24} height={8} viewBox="0 0 24 8" fill="none" style={{
                position: "relative",
                width: 24,
                height: 8,
                overflow: "hidden",
                borderRadius: 16,
                flexShrink: 0,
                color: "var(--primary-500)",
              }}>
                <path d={"M 0 4 C 0 1.791 1.791 0 4 0 L 20 0 C 22.209 0 24 1.791 24 4 L 24 4 C 24 6.209 22.209 8 20 8 L 4 8 C 1.791 8 0 6.209 0 4 L 0 4 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
              <svg width={24} height={8} viewBox="0 0 24 8" fill="none" style={{
                position: "relative",
                width: 24,
                height: 8,
                overflow: "hidden",
                borderRadius: 16,
                flexShrink: 0,
                color: "var(--primary-500)",
              }}>
                <path d={"M 0 4 C 0 1.791 1.791 0 4 0 L 20 0 C 22.209 0 24 1.791 24 4 L 24 4 C 24 6.209 22.209 8 20 8 L 4 8 C 1.791 8 0 6.209 0 4 L 0 4 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
              <svg width={24} height={8} viewBox="0 0 24 8" fill="none" style={{
                position: "relative",
                width: 24,
                height: 8,
                overflow: "hidden",
                borderRadius: 16,
                flexShrink: 0,
                color: "var(--primary-500)",
              }}>
                <path d={"M 0 4 C 0 1.791 1.791 0 4 0 L 20 0 C 22.209 0 24 1.791 24 4 L 24 4 C 24 6.209 22.209 8 20 8 L 4 8 C 1.791 8 0 6.209 0 4 L 0 4 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
              <svg width={24} height={8} viewBox="0 0 24 8" fill="none" style={{
                position: "relative",
                width: 24,
                height: 8,
                overflow: "hidden",
                borderRadius: 16,
                flexShrink: 0,
                color: "var(--primary-500)",
              }}>
                <path d={"M 0 4 C 0 1.791 1.791 0 4 0 L 20 0 C 22.209 0 24 1.791 24 4 L 24 4 C 24 6.209 22.209 8 20 8 L 4 8 C 1.791 8 0 6.209 0 4 L 0 4 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
              <svg width={24} height={8} viewBox="0 0 24 8" fill="none" style={{
                position: "relative",
                width: 24,
                height: 8,
                overflow: "hidden",
                borderRadius: 16,
                flexShrink: 0,
                color: "var(--primary-500)",
              }}>
                <path d={"M 0 4 C 0 1.791 1.791 0 4 0 L 20 0 C 22.209 0 24 1.791 24 4 L 24 4 C 24 6.209 22.209 8 20 8 L 4 8 C 1.791 8 0 6.209 0 4 L 0 4 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
              <svg width={24} height={8} viewBox="0 0 24 8" fill="none" style={{
                position: "relative",
                width: 24,
                height: 8,
                overflow: "hidden",
                borderRadius: 16,
                flexShrink: 0,
                color: "var(--primary-500)",
              }}>
                <path d={"M 0 4 C 0 1.791 1.791 0 4 0 L 20 0 C 22.209 0 24 1.791 24 4 L 24 4 C 24 6.209 22.209 8 20 8 L 4 8 C 1.791 8 0 6.209 0 4 L 0 4 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <ArrowRight22 style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />
            </div>
          </div>
          <div style={{
            position: "absolute",
            left: 24,
            top: 24,
            display: "flex",
            flexDirection: "row",
            gap: 51,
            alignItems: "center",
            flexWrap: "nowrap",
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
                color: "rgb(12,17,15)",
                flexShrink: 0,
              }}>Interoly</span>
            </div>
          </div>
          <svg width={526} height={165} viewBox="0 0 526 165" fill="none" style={{
            position: "absolute",
            left: 72,
            top: 550,
            width: 526,
            height: 165,
            overflow: "hidden",
            borderRadius: 16,
            color: "rgba(255,255,255,0.8)",
          }}>
            <path d={"M 0 16 C 0 7.163 7.163 0 16 0 L 510 0 C 518.837 0 526 7.163 526 16 L 526 149 C 526 157.837 518.837 165 510 165 L 16 165 C 7.163 165 0 157.837 0 149 L 0 16 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={486} height={165} viewBox="0 0 486 165" fill="none" style={{
            position: "absolute",
            left: 92,
            top: 570,
            width: 486,
            height: 165,
            overflow: "hidden",
            borderRadius: 16,
            color: "rgba(255,255,255,0.6)",
          }}>
            <path d={"M 0 16 C 0 7.163 7.163 0 16 0 L 470 0 C 478.837 0 486 7.163 486 16 L 486 149 C 486 157.837 478.837 165 470 165 L 16 165 C 7.163 165 0 157.837 0 149 L 0 16 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={446} height={165} viewBox="0 0 446 165" fill="none" style={{
            position: "absolute",
            left: 112,
            top: 590,
            width: 446,
            height: 165,
            overflow: "hidden",
            borderRadius: 16,
            color: "rgba(255,255,255,0.4)",
          }}>
            <path d={"M 0 16 C 0 7.163 7.163 0 16 0 L 430 0 C 438.837 0 446 7.163 446 16 L 446 149 C 446 157.837 438.837 165 430 165 L 16 165 C 7.163 165 0 157.837 0 149 L 0 16 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <Card5 style={{
              position: "absolute",
              left: 52,
              top: 371,
              width: 566,
            }} />
          <Card2 style={{
              position: "absolute",
              left: 510,
              top: 322,
              width: 160,
              height: 173,
            }} />
          <div style={{
            position: "absolute",
            left: 52,
            top: 107,
            width: 596,
            display: "flex",
            flexDirection: "column",
            gap: 12,
            alignItems: "flex-start",
            flexWrap: "nowrap",
          }}>
            <span style={{
              position: "relative",
              width: 592,
              fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 32,
              textAlign: "center",
              lineHeight: "42px",
              color: "var(--general-white)",
              flexShrink: 0,
            }}>Sign Up Interoly Smart Inventory Management System</span>
            <span style={{
              position: "relative",
              fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 18,
              textAlign: "center",
              lineHeight: "24px",
              color: "var(--grayscale-200)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Access your Interoly Inventory Management system to track stock levels, manage orders, and streamline your supply chain. Sign up to stay in control of your inventory anytime, anywhere.</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 5670,
        top: 100,
        width: 375,
        height: 570,
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
        <div style={{
          position: "absolute",
          left: 24,
          top: 68,
          width: 327,
          height: 478,
          overflow: "hidden",
          borderRadius: 12,
          backgroundColor: "var(--background-bg-secondary)",
        }}>
          <div style={{
            position: "absolute",
            left: 6,
            top: 6,
            width: 315,
            height: 466,
            overflow: "hidden",
            borderRadius: 12,
            background: "linear-gradient(180.038deg, rgb(205,239,227) -8.46%, rgb(255,255,255) 17.63%, rgb(255,255,255) 99.98%)",
          }}>
            <div style={{
              position: "absolute",
              left: 24,
              top: 24,
              width: 267,
              display: "flex",
              flexDirection: "column",
              gap: 40,
              alignItems: "center",
              flexWrap: "nowrap",
            }}>
              <div style={{
                position: "relative",
                width: 92,
                height: 92,
                display: "flex",
                flexDirection: "row",
                padding: "2px 0px 2px 0px",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                gap: "calc(var(--spacing-0) * 1px)",
                paddingLeft: "calc(var(--spacing-0) * 1px)",
                paddingRight: "calc(var(--spacing-0) * 1px)",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 92,
                  height: 92,
                  opacity: 0.92,
                  overflow: "hidden",
                  borderRadius: 50,
                  background: "linear-gradient(180.651deg, rgb(223,255,243) 6.22%, rgb(183,253,228) 96.95%)",
                  flexShrink: 0,
                }}>
                  <div style={{
                    position: "absolute",
                    left: 13,
                    top: 13,
                    overflow: "hidden",
                    borderRadius: 96,
                    background: "linear-gradient(188.664deg, rgb(163,217,197) 9.57%, rgb(39,163,118) 85.41%)",
                    boxShadow: "0px 2px 4px 0px rgba(27,28,29,0.04)",
                    display: "flex",
                    flexDirection: "row",
                    gap: 14,
                    padding: "18px 18px 18px 18px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "nowrap",
                    boxSizing: "border-box",
                  }}>
                    <div style={{
                        position: "relative",
                        width: 30,
                        height: 30,
                        flexShrink: 0,
                      }}>
                      <EmailOpen3 style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
                    </div>
                  </div>
                </div>
              </div>
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
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <span style={{
                    position: "relative",
                    fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 700,
                    fontSize: 32,
                    textAlign: "center",
                    lineHeight: "42px",
                    color: "var(--text-primary)",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>OTP Verification</span>
                  <span style={{
                    position: "relative",
                    fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 16,
                    textAlign: "center",
                    lineHeight: "20px",
                    color: "var(--text-secondary)",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    whiteSpace: "pre-wrap",
                  }}>{"We have sent a verification code to email address"}<span style={{ fontSize: 18 }}>{" "}</span>{"\n"}<span style={{ color: "rgb(12,17,15)" }}>{"tahsankhan380@gmail.com"}</span><span style={{ fontSize: 18 }}>{" "}</span><span style={{ color: "rgb(39,163,118)", textDecoration: "underline" }}>{"Wrong Email?"}</span></span>
                  <div style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    gap: 24,
                    alignItems: "flex-start",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "row",
                      gap: 16,
                      alignItems: "center",
                      flexWrap: "nowrap",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <Button
                        style={{ position: "relative", width: 55, flexShrink: 0 }}
                        rightIcon={false}
                        leftIcon={false}
                        text1={"7"}
                        state={"default"}
                        type={"secondary"}
                        size={"lg"}
                      />
                      <Button
                        style={{ position: "relative", width: 55, flexShrink: 0 }}
                        rightIcon={false}
                        leftIcon={false}
                        text1={"5"}
                        state={"default"}
                        type={"secondary"}
                        size={"lg"}
                      />
                      <Button
                        style={{ position: "relative", width: 53, flexShrink: 0 }}
                        rightIcon={false}
                        leftIcon={false}
                        text1={"4"}
                        state={"default"}
                        type={"secondary"}
                        size={"lg"}
                      />
                      <div style={{
                        position: "relative",
                        width: 56,
                        height: 36,
                        overflow: "hidden",
                        borderRadius: 8,
                        backgroundColor: "var(--background-bg-secondary-hover)",
                        boxShadow: "inset 0 0 0 1px var(--border-border-secondary)",
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
                          color: "var(--primary-600)",
                          flexShrink: 0,
                          alignSelf: "stretch",
                        }}>|</span>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: 24,
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
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
                          <svg width={12} height={1.500} viewBox="0 -0.750 12 1.500" fill="none" style={{
                            position: "absolute",
                            left: 6,
                            top: 12,
                            width: 12,
                            height: 1.5,
                            color: "var(--general-white)",
                          }}>
                            <path d={"M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 -0.75 Z M 12 0.75 C 12.414 0.75 12.75 0.414 12.75 0 C 12.75 -0.414 12.414 -0.75 12 -0.75 L 12 0.75 Z M 0 0.75 L 12 0.75 L 12 -0.75 L 0 -0.75 L 0 0.75 Z"} fill="currentColor" fillRule="nonzero" />
                          </svg>
                          <svg width={1.500} height={12} viewBox="-0.750 0 1.500 12" fill="none" style={{
                            position: "absolute",
                            left: 12,
                            top: 6,
                            width: 1.5,
                            height: 12,
                            color: "var(--general-white)",
                          }}>
                            <path d={"M 0.75 0 C 0.75 -0.414 0.414 -0.75 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 L 0.75 0 Z M -0.75 12 C -0.75 12.414 -0.414 12.75 0 12.75 C 0.414 12.75 0.75 12.414 0.75 12 L -0.75 12 Z M -0.75 0 L -0.75 12 L 0.75 12 L 0.75 0 L -0.75 0 Z"} fill="currentColor" fillRule="nonzero" />
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
                        }}>Submit</span>
                      </div>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Host Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        textAlign: "center",
                        lineHeight: "20px",
                        color: "rgb(51,57,74)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                        whiteSpace: "pre-wrap",
                      }}><span style={{ color: "rgb(145,153,146)" }}>{"Didn’t received the email?"}</span>{" "}<span style={{ color: "rgb(39,163,118)", textDecoration: "underline" }}>{"Resend"}</span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 7685,
        top: 100,
        width: 375,
        height: 622,
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
        <div style={{
          position: "absolute",
          left: 24,
          top: 68,
          width: 327,
          height: 530,
          overflow: "hidden",
          borderRadius: 12,
          backgroundColor: "var(--background-bg-secondary)",
        }}>
          <div style={{
            position: "absolute",
            left: 6,
            top: 6,
            width: 315,
            height: 518,
            overflow: "hidden",
            borderRadius: 12,
            background: "linear-gradient(180.034deg, rgb(205,239,227) -8.46%, rgb(255,255,255) 17.63%, rgb(255,255,255) 99.98%)",
          }}>
            <div style={{
              position: "absolute",
              left: 24,
              top: 24,
              width: 267,
              display: "flex",
              flexDirection: "column",
              gap: 40,
              alignItems: "center",
              flexWrap: "nowrap",
            }}>
              <div style={{
                position: "relative",
                width: 92,
                height: 92,
                display: "flex",
                flexDirection: "row",
                padding: "2px 0px 2px 0px",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                gap: "calc(var(--spacing-0) * 1px)",
                paddingLeft: "calc(var(--spacing-0) * 1px)",
                paddingRight: "calc(var(--spacing-0) * 1px)",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 92,
                  height: 92,
                  opacity: 0.92,
                  overflow: "hidden",
                  borderRadius: 50,
                  background: "linear-gradient(180.651deg, rgb(223,255,243) 6.22%, rgb(183,253,228) 96.95%)",
                  flexShrink: 0,
                }}>
                  <div style={{
                    position: "absolute",
                    left: 13,
                    top: 13,
                    overflow: "hidden",
                    borderRadius: 96,
                    background: "linear-gradient(188.664deg, rgb(163,217,197) 9.57%, rgb(39,163,118) 85.41%)",
                    boxShadow: "0px 2px 4px 0px rgba(27,28,29,0.04)",
                    display: "flex",
                    flexDirection: "row",
                    gap: 14,
                    padding: "18px 18px 18px 18px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "nowrap",
                    boxSizing: "border-box",
                  }}>
                    <div style={{
                        position: "relative",
                        width: 30,
                        height: 30,
                        flexShrink: 0,
                      }}>
                      <Lock style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
                    </div>
                  </div>
                </div>
              </div>
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
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <span style={{
                    position: "relative",
                    fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 700,
                    fontSize: 32,
                    textAlign: "center",
                    lineHeight: "42px",
                    color: "var(--text-primary)",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>Create a new password</span>
                  <span style={{
                    position: "relative",
                    fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 18,
                    textAlign: "center",
                    lineHeight: "24px",
                    color: "var(--text-secondary)",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>Set your new password with minimum 8 characters with a combination of letters and numbers</span>
                </div>
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 24,
              top: 286,
              width: 267,
              display: "flex",
              flexDirection: "column",
              gap: 24,
              alignItems: "flex-start",
              flexWrap: "nowrap",
            }}>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: "calc(var(--padding-xxs) * 1px)",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <div style={{
                  position: "relative",
                  width: 92,
                  display: "flex",
                  flexDirection: "row",
                  gap: "calc(var(--2) * 1px)",
                  alignItems: "center",
                  flexWrap: "nowrap",
                  flexShrink: 0,
                }}>
                  <span style={{
                    position: "relative",
                    fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 500,
                    fontSize: 16,
                    whiteSpace: "nowrap",
                    lineHeight: "20px",
                    color: "rgb(0,0,0)",
                    flexShrink: 0,
                    filter: "drop-shadow(0px 1px 2px rgba(20,28,36,0.04))",
                  }}>New Password</span>
                  <span style={{
                    position: "relative",
                    fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 14,
                    whiteSpace: "nowrap",
                    lineHeight: "18px",
                    color: "rgb(144,147,146)",
                    flexShrink: 0,
                    filter: "drop-shadow(0px 1px 2px rgba(20,28,36,0.04))",
                  }}>(optional)</span>
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
                    <Lock style={{
                        position: "relative",
                        width: 24,
                        height: 24,
                        flexShrink: 0,
                      }} />
                    <div style={{
                      position: "relative",
                      height: 20,
                      display: "flex",
                      flexDirection: "row",
                      gap: 5,
                      alignItems: "center",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <div style={{
                        position: "relative",
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        backgroundColor: "var(--text-secondary)",
                        flexShrink: 0,
                      }} />
                      <div style={{
                        position: "relative",
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        backgroundColor: "var(--text-secondary)",
                        flexShrink: 0,
                      }} />
                      <div style={{
                        position: "relative",
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        backgroundColor: "var(--text-secondary)",
                        flexShrink: 0,
                      }} />
                      <div style={{
                        position: "relative",
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        backgroundColor: "var(--text-secondary)",
                        flexShrink: 0,
                      }} />
                      <div style={{
                        position: "relative",
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        backgroundColor: "var(--text-secondary)",
                        flexShrink: 0,
                      }} />
                      <div style={{
                        position: "relative",
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        backgroundColor: "var(--text-secondary)",
                        flexShrink: 0,
                      }} />
                      <div style={{
                        position: "relative",
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        backgroundColor: "var(--text-secondary)",
                        flexShrink: 0,
                      }} />
                      <div style={{
                        position: "relative",
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        backgroundColor: "var(--text-secondary)",
                        flexShrink: 0,
                      }} />
                      <div style={{
                        position: "relative",
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        backgroundColor: "var(--text-secondary)",
                        flexShrink: 0,
                      }} />
                      <div style={{
                        position: "relative",
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        backgroundColor: "var(--text-secondary)",
                        flexShrink: 0,
                      }} />
                    </div>
                  </div>
                  <div style={{
                      position: "relative",
                      width: 20,
                      height: 20,
                      flexShrink: 0,
                    }}>
                    <Hide style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />
                  </div>
                </div>
              </div>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: "calc(var(--padding-xxs) * 1px)",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <div style={{
                  position: "relative",
                  width: 176,
                  display: "flex",
                  flexDirection: "row",
                  gap: "calc(var(--2) * 1px)",
                  alignItems: "center",
                  flexWrap: "nowrap",
                  flexShrink: 0,
                }}>
                  <span style={{
                    position: "relative",
                    fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 500,
                    fontSize: 16,
                    whiteSpace: "nowrap",
                    lineHeight: "20px",
                    color: "rgb(0,0,0)",
                    flexShrink: 0,
                    filter: "drop-shadow(0px 1px 2px rgba(20,28,36,0.04))",
                  }}>Confirmation New Password</span>
                  <span style={{
                    position: "relative",
                    fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 14,
                    whiteSpace: "nowrap",
                    lineHeight: "18px",
                    color: "rgb(144,147,146)",
                    flexShrink: 0,
                    filter: "drop-shadow(0px 1px 2px rgba(20,28,36,0.04))",
                  }}>(optional)</span>
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
                    <Lock style={{
                        position: "relative",
                        width: 24,
                        height: 24,
                        flexShrink: 0,
                      }} />
                    <div style={{
                      position: "relative",
                      height: 20,
                      display: "flex",
                      flexDirection: "row",
                      gap: 5,
                      alignItems: "center",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <div style={{
                        position: "relative",
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        backgroundColor: "var(--text-secondary)",
                        flexShrink: 0,
                      }} />
                      <div style={{
                        position: "relative",
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        backgroundColor: "var(--text-secondary)",
                        flexShrink: 0,
                      }} />
                      <div style={{
                        position: "relative",
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        backgroundColor: "var(--text-secondary)",
                        flexShrink: 0,
                      }} />
                      <div style={{
                        position: "relative",
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        backgroundColor: "var(--text-secondary)",
                        flexShrink: 0,
                      }} />
                      <div style={{
                        position: "relative",
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        backgroundColor: "var(--text-secondary)",
                        flexShrink: 0,
                      }} />
                      <div style={{
                        position: "relative",
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        backgroundColor: "var(--text-secondary)",
                        flexShrink: 0,
                      }} />
                      <div style={{
                        position: "relative",
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        backgroundColor: "var(--text-secondary)",
                        flexShrink: 0,
                      }} />
                      <div style={{
                        position: "relative",
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        backgroundColor: "var(--text-secondary)",
                        flexShrink: 0,
                      }} />
                      <div style={{
                        position: "relative",
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        backgroundColor: "var(--text-secondary)",
                        flexShrink: 0,
                      }} />
                      <div style={{
                        position: "relative",
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        backgroundColor: "var(--text-secondary)",
                        flexShrink: 0,
                      }} />
                    </div>
                  </div>
                  <div style={{
                      position: "relative",
                      width: 20,
                      height: 20,
                      flexShrink: 0,
                    }}>
                    <Hide style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />
                  </div>
                </div>
              </div>
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
                  <svg width={12} height={1.500} viewBox="0 -0.750 12 1.500" fill="none" style={{
                    position: "absolute",
                    left: 6,
                    top: 12,
                    width: 12,
                    height: 1.5,
                    color: "var(--general-white)",
                  }}>
                    <path d={"M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 -0.75 Z M 12 0.75 C 12.414 0.75 12.75 0.414 12.75 0 C 12.75 -0.414 12.414 -0.75 12 -0.75 L 12 0.75 Z M 0 0.75 L 12 0.75 L 12 -0.75 L 0 -0.75 L 0 0.75 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                  <svg width={1.500} height={12} viewBox="-0.750 0 1.500 12" fill="none" style={{
                    position: "absolute",
                    left: 12,
                    top: 6,
                    width: 1.5,
                    height: 12,
                    color: "var(--general-white)",
                  }}>
                    <path d={"M 0.75 0 C 0.75 -0.414 0.414 -0.75 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 L 0.75 0 Z M -0.75 12 C -0.75 12.414 -0.414 12.75 0 12.75 C 0.414 12.75 0.75 12.414 0.75 12 L -0.75 12 Z M -0.75 0 L -0.75 12 L 0.75 12 L 0.75 0 L -0.75 0 Z"} fill="currentColor" fillRule="nonzero" />
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
                }}>Submit</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 9700,
        top: 100,
        width: 375,
        height: 534,
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
        <div style={{
          position: "absolute",
          left: 24,
          top: 68,
          width: 327,
          height: 442,
          overflow: "hidden",
          borderRadius: 12,
          backgroundColor: "var(--background-bg-secondary)",
        }}>
          <div style={{
            position: "absolute",
            left: 6,
            top: 6,
            width: 315,
            height: 430,
            overflow: "hidden",
            borderRadius: 12,
            background: "linear-gradient(180.041deg, rgb(205,239,227) -8.45%, rgb(255,255,255) 17.63%, rgb(255,255,255) 99.97%)",
          }}>
            <div style={{
              position: "absolute",
              left: 24,
              top: 192,
              width: 267,
              display: "flex",
              flexDirection: "column",
              gap: 12,
              alignItems: "flex-start",
              flexWrap: "nowrap",
            }}>
              <span style={{
                position: "relative",
                fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 32,
                textAlign: "center",
                lineHeight: "42px",
                color: "var(--text-primary)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Well Done Your Password Change Successfully</span>
              <span style={{
                position: "relative",
                fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 18,
                textAlign: "center",
                lineHeight: "24px",
                color: "var(--text-secondary)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Always remember the password for account at Interoly.</span>
            </div>
            <div style={{
              position: "absolute",
              left: 24,
              top: 370,
              width: 267,
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
            }}>
              <div style={{
                position: "relative",
                width: 20,
                height: 20,
                overflow: "hidden",
                flexShrink: 0,
              }}>
                <svg width={12} height={1.500} viewBox="0 -0.750 12 1.500" fill="none" style={{
                  position: "absolute",
                  left: 6,
                  top: 12,
                  width: 12,
                  height: 1.5,
                  color: "var(--general-white)",
                }}>
                  <path d={"M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 -0.75 Z M 12 0.75 C 12.414 0.75 12.75 0.414 12.75 0 C 12.75 -0.414 12.414 -0.75 12 -0.75 L 12 0.75 Z M 0 0.75 L 12 0.75 L 12 -0.75 L 0 -0.75 L 0 0.75 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <svg width={1.500} height={12} viewBox="-0.750 0 1.500 12" fill="none" style={{
                  position: "absolute",
                  left: 12,
                  top: 6,
                  width: 1.5,
                  height: 12,
                  color: "var(--general-white)",
                }}>
                  <path d={"M 0.75 0 C 0.75 -0.414 0.414 -0.75 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 L 0.75 0 Z M -0.75 12 C -0.75 12.414 -0.414 12.75 0 12.75 C 0.414 12.75 0.75 12.414 0.75 12 L -0.75 12 Z M -0.75 0 L -0.75 12 L 0.75 12 L 0.75 0 L -0.75 0 Z"} fill="currentColor" fillRule="nonzero" />
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
              }}>Back to Sign In</span>
            </div>
            <div style={{
              position: "absolute",
              left: -106,
              top: 24,
              width: 512,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
            }}>
              <div style={{
                position: "absolute",
                left: 36,
                top: -38,
                width: 440,
                height: 199,
              }}>
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 440,
                  height: 199,
                  clipPath: "inset(-96px 0px 0px -20px)",
                }}>
                  <div style={{
                    position: "absolute",
                    left: 55,
                    top: -78,
                    width: 330,
                    height: 306,
                  }}>
                    <div style={{
                      position: "absolute",
                      left: -75,
                      top: -18,
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                    }}>
                      <div style={{
                        position: "relative",
                        width: 480,
                        height: 480,
                        overflow: "hidden",
                        boxShadow: "inset 0 0 0 1px var(--border-border-primary)",
                        display: "flex",
                        flexDirection: "row",
                        gap: "calc(var(--spacing-4xl) * 1px)",
                        alignItems: "flex-start",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                      }}>
                        <svg width={480} height={1} viewBox="0 -0.500 480 1" fill="none" style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          transform: "matrix(0,1,-1,0,0,0)",
                          transformOrigin: "0 0",
                          width: 480,
                          height: 1,
                          color: "var(--border-border-primary)",
                        }}>
                          <path d={"M 0 0 L 480 0 L 480 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                        <svg width={480} height={1} viewBox="0 -0.500 480 1" fill="none" style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          transform: "matrix(0,1,-1,0,32,0)",
                          transformOrigin: "0 0",
                          width: 480,
                          height: 1,
                          color: "var(--border-border-primary)",
                        }}>
                          <path d={"M 0 0 L 480 0 L 480 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                        <svg width={480} height={1} viewBox="0 -0.500 480 1" fill="none" style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          transform: "matrix(0,1,-1,0,64,0)",
                          transformOrigin: "0 0",
                          width: 480,
                          height: 1,
                          color: "var(--border-border-primary)",
                        }}>
                          <path d={"M 0 0 L 480 0 L 480 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                        <svg width={480} height={1} viewBox="0 -0.500 480 1" fill="none" style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          transform: "matrix(0,1,-1,0,96,0)",
                          transformOrigin: "0 0",
                          width: 480,
                          height: 1,
                          color: "var(--border-border-primary)",
                        }}>
                          <path d={"M 0 0 L 480 0 L 480 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                        <svg width={480} height={1} viewBox="0 -0.500 480 1" fill="none" style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          transform: "matrix(0,1,-1,0,128,0)",
                          transformOrigin: "0 0",
                          width: 480,
                          height: 1,
                          color: "var(--border-border-primary)",
                        }}>
                          <path d={"M 0 0 L 480 0 L 480 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                        <svg width={480} height={1} viewBox="0 -0.500 480 1" fill="none" style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          transform: "matrix(0,1,-1,0,160,0)",
                          transformOrigin: "0 0",
                          width: 480,
                          height: 1,
                          color: "var(--border-border-primary)",
                        }}>
                          <path d={"M 0 0 L 480 0 L 480 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                        <svg width={480} height={1} viewBox="0 -0.500 480 1" fill="none" style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          transform: "matrix(0,1,-1,0,192,0)",
                          transformOrigin: "0 0",
                          width: 480,
                          height: 1,
                          color: "var(--border-border-primary)",
                        }}>
                          <path d={"M 0 0 L 480 0 L 480 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                        <svg width={480} height={1} viewBox="0 -0.500 480 1" fill="none" style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          transform: "matrix(0,1,-1,0,224,0)",
                          transformOrigin: "0 0",
                          width: 480,
                          height: 1,
                          color: "var(--border-border-primary)",
                        }}>
                          <path d={"M 0 0 L 480 0 L 480 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                        <svg width={480} height={1} viewBox="0 -0.500 480 1" fill="none" style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          transform: "matrix(0,1,-1,0,256,0)",
                          transformOrigin: "0 0",
                          width: 480,
                          height: 1,
                          color: "var(--border-border-primary)",
                        }}>
                          <path d={"M 0 0 L 480 0 L 480 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                        <svg width={480} height={1} viewBox="0 -0.500 480 1" fill="none" style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          transform: "matrix(0,1,-1,0,288,0)",
                          transformOrigin: "0 0",
                          width: 480,
                          height: 1,
                          color: "var(--border-border-primary)",
                        }}>
                          <path d={"M 0 0 L 480 0 L 480 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                        <svg width={480} height={1} viewBox="0 -0.500 480 1" fill="none" style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          transform: "matrix(0,1,-1,0,320,0)",
                          transformOrigin: "0 0",
                          width: 480,
                          height: 1,
                          color: "var(--border-border-primary)",
                        }}>
                          <path d={"M 0 0 L 480 0 L 480 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                        <svg width={480} height={1} viewBox="0 -0.500 480 1" fill="none" style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          transform: "matrix(0,1,-1,0,352,0)",
                          transformOrigin: "0 0",
                          width: 480,
                          height: 1,
                          color: "var(--border-border-primary)",
                        }}>
                          <path d={"M 0 0 L 480 0 L 480 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                        <svg width={480} height={1} viewBox="0 -0.500 480 1" fill="none" style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          transform: "matrix(0,1,-1,0,384,0)",
                          transformOrigin: "0 0",
                          width: 480,
                          height: 1,
                          color: "var(--border-border-primary)",
                        }}>
                          <path d={"M 0 0 L 480 0 L 480 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                        <svg width={480} height={1} viewBox="0 -0.500 480 1" fill="none" style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          transform: "matrix(0,1,-1,0,416,0)",
                          transformOrigin: "0 0",
                          width: 480,
                          height: 1,
                          color: "var(--border-border-primary)",
                        }}>
                          <path d={"M 0 0 L 480 0 L 480 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                        <svg width={480} height={1} viewBox="0 -0.500 480 1" fill="none" style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          transform: "matrix(0,1,-1,0,448,0)",
                          transformOrigin: "0 0",
                          width: 480,
                          height: 1,
                          color: "var(--border-border-primary)",
                        }}>
                          <path d={"M 0 0 L 480 0 L 480 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                        <svg width={480} height={1} viewBox="0 -0.500 480 1" fill="none" style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          transform: "matrix(0,1,-1,0,480,0)",
                          transformOrigin: "0 0",
                          width: 480,
                          height: 1,
                          color: "var(--border-border-primary)",
                        }}>
                          <path d={"M 0 0 L 480 0 L 480 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                      </div>
                      <div style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: 480,
                        overflow: "hidden",
                        boxShadow: "inset 0 0 0 1px var(--border-border-primary)",
                        display: "flex",
                        flexDirection: "column",
                        gap: "calc(var(--spacing-4xl) * 1px)",
                        alignItems: "flex-start",
                        flexWrap: "nowrap",
                      }}>
                        <svg height={1} viewBox="0 -0.500 480 1" fill="none" style={{
                          position: "relative",
                          height: 1,
                          flexShrink: 0,
                          alignSelf: "stretch",
                          color: "var(--border-border-primary)",
                        }}>
                          <path d={"M 0 0 L 480 0 L 480 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                        <svg height={1} viewBox="0 -0.500 480 1" fill="none" style={{
                          position: "relative",
                          height: 1,
                          flexShrink: 0,
                          alignSelf: "stretch",
                          color: "var(--border-border-primary)",
                        }}>
                          <path d={"M 0 0 L 480 0 L 480 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                        <svg height={1} viewBox="0 -0.500 480 1" fill="none" style={{
                          position: "relative",
                          height: 1,
                          flexShrink: 0,
                          alignSelf: "stretch",
                          color: "var(--border-border-primary)",
                        }}>
                          <path d={"M 0 0 L 480 0 L 480 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                        <svg height={1} viewBox="0 -0.500 480 1" fill="none" style={{
                          position: "relative",
                          height: 1,
                          flexShrink: 0,
                          alignSelf: "stretch",
                          color: "var(--border-border-primary)",
                        }}>
                          <path d={"M 0 0 L 480 0 L 480 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                        <svg height={1} viewBox="0 -0.500 480 1" fill="none" style={{
                          position: "relative",
                          height: 1,
                          flexShrink: 0,
                          alignSelf: "stretch",
                          color: "var(--border-border-primary)",
                        }}>
                          <path d={"M 0 0 L 480 0 L 480 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                        <svg height={1} viewBox="0 -0.500 480 1" fill="none" style={{
                          position: "relative",
                          height: 1,
                          flexShrink: 0,
                          alignSelf: "stretch",
                          color: "var(--border-border-primary)",
                        }}>
                          <path d={"M 0 0 L 480 0 L 480 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                        <svg height={1} viewBox="0 -0.500 480 1" fill="none" style={{
                          position: "relative",
                          height: 1,
                          flexShrink: 0,
                          alignSelf: "stretch",
                          color: "var(--border-border-primary)",
                        }}>
                          <path d={"M 0 0 L 480 0 L 480 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                        <svg height={1} viewBox="0 -0.500 480 1" fill="none" style={{
                          position: "relative",
                          height: 1,
                          flexShrink: 0,
                          alignSelf: "stretch",
                          color: "var(--border-border-primary)",
                        }}>
                          <path d={"M 0 0 L 480 0 L 480 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                        <svg height={1} viewBox="0 -0.500 480 1" fill="none" style={{
                          position: "relative",
                          height: 1,
                          flexShrink: 0,
                          alignSelf: "stretch",
                          color: "var(--border-border-primary)",
                        }}>
                          <path d={"M 0 0 L 480 0 L 480 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                        <svg height={1} viewBox="0 -0.500 480 1" fill="none" style={{
                          position: "relative",
                          height: 1,
                          flexShrink: 0,
                          alignSelf: "stretch",
                          color: "var(--border-border-primary)",
                        }}>
                          <path d={"M 0 0 L 480 0 L 480 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                        <svg height={1} viewBox="0 -0.500 480 1" fill="none" style={{
                          position: "relative",
                          height: 1,
                          flexShrink: 0,
                          alignSelf: "stretch",
                          color: "var(--border-border-primary)",
                        }}>
                          <path d={"M 0 0 L 480 0 L 480 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                        <svg height={1} viewBox="0 -0.500 480 1" fill="none" style={{
                          position: "relative",
                          height: 1,
                          flexShrink: 0,
                          alignSelf: "stretch",
                          color: "var(--border-border-primary)",
                        }}>
                          <path d={"M 0 0 L 480 0 L 480 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                        <svg height={1} viewBox="0 -0.500 480 1" fill="none" style={{
                          position: "relative",
                          height: 1,
                          flexShrink: 0,
                          alignSelf: "stretch",
                          color: "var(--border-border-primary)",
                        }}>
                          <path d={"M 0 0 L 480 0 L 480 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                        <svg height={1} viewBox="0 -0.500 480 1" fill="none" style={{
                          position: "relative",
                          height: 1,
                          flexShrink: 0,
                          alignSelf: "stretch",
                          color: "var(--border-border-primary)",
                        }}>
                          <path d={"M 0 0 L 480 0 L 480 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                        <svg height={1} viewBox="0 -0.500 480 1" fill="none" style={{
                          position: "relative",
                          height: 1,
                          flexShrink: 0,
                          alignSelf: "stretch",
                          color: "var(--border-border-primary)",
                        }}>
                          <path d={"M 0 0 L 480 0 L 480 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                        <svg height={1} viewBox="0 -0.500 480 1" fill="none" style={{
                          position: "relative",
                          height: 1,
                          flexShrink: 0,
                          alignSelf: "stretch",
                          color: "var(--border-border-primary)",
                        }}>
                          <path d={"M 0 0 L 480 0 L 480 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: "calc(var(--spacing-4xl) * 1px)",
                alignItems: "center",
                flexWrap: "nowrap",
                flexGrow: 1,
              }}>
                <div style={{
                  position: "relative",
                  width: 172,
                  height: 128,
                  flexShrink: 0,
                }}>
                  <div style={{
                    position: "absolute",
                    left: 22,
                    top: 0,
                    width: 128,
                    height: 128,
                    borderRadius: "50%",
                    backgroundColor: "var(--background-bg-primary)",
                  }} />
                  <div style={{
                    position: "absolute",
                    left: 14,
                    top: 14,
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    backgroundColor: "var(--background-bg-primary-hover)",
                  }} />
                  <div style={{
                    position: "absolute",
                    left: 9,
                    top: 104,
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    backgroundColor: "var(--background-bg-primary-hover)",
                  }} />
                  <div style={{
                    position: "absolute",
                    left: 152,
                    top: 28,
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    backgroundColor: "var(--primary-100)",
                  }} />
                  <div style={{
                    position: "absolute",
                    left: 144,
                    top: 4,
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    backgroundColor: "var(--primary-100)",
                  }} />
                  <div style={{
                    position: "absolute",
                    left: 16,
                    top: 16,
                    width: 140,
                    height: 80,
                    boxShadow: "0px 20px 24px -4px rgba(16,24,40,0.08), 0px 8px 8px -4px rgba(16,24,40,0.03)",
                  }}>
                    <svg width={140} height={80} viewBox="0 0 140 80" fill="none" style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: 140,
                      height: 80,
                      color: "var(--background-bg-primary)",
                    }}>
                      <path d={"M 72 0 C 58.534 0 46.622 6.654 39.373 16.854 C 37.006 16.295 34.538 16 32 16 C 14.327 16 0 30.327 0 48 C 0 65.673 14.327 80 32 80 L 112 80 C 127.464 80 140 67.464 140 52 C 140 36.536 127.464 24 112 24 C 110.902 24 109.818 24.063 108.752 24.186 C 102.623 9.96 88.475 0 72 0 Z"} fill="currentColor" fillRule="nonzero" />
                    </svg>
                    <div style={{
                      position: "absolute",
                      left: 0,
                      top: 16,
                      width: 64,
                      height: 64,
                      borderRadius: "50%",
                      background: "linear-gradient(133.210deg, rgb(226,231,239) 14.20%, rgba(255,255,255,0) 44.29%)",
                    }} />
                    <div style={{
                      position: "absolute",
                      left: 32,
                      top: 0,
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      background: "linear-gradient(133.210deg, rgb(226,231,239) 14.20%, rgba(255,255,255,0) 44.29%)",
                    }} />
                    <div style={{
                      position: "absolute",
                      left: 84,
                      top: 24,
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      background: "linear-gradient(133.210deg, rgb(226,231,239) 14.20%, rgba(255,255,255,0) 44.29%)",
                    }} />
                    <div style={{
                      position: "absolute",
                      left: 35,
                      top: 22,
                      width: 70,
                      height: 70,
                      borderRadius: 100,
                      backgroundColor: "var(--success-600)",
                      display: "flex",
                      flexDirection: "row",
                      gap: 20,
                      padding: "20px 20px 20px 20px",
                      justifyContent: "center",
                      alignItems: "center",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                    }}>
                      <div style={{
                        position: "relative",
                        borderRadius: 100,
                        backgroundColor: "var(--background-bg-secondary)",
                        boxShadow: "0px 20px 40px 0px rgba(0,0,0,0.3)",
                        display: "flex",
                        flexDirection: "row",
                        gap: 10,
                        padding: "10px 10px 10px 10px",
                        justifyContent: "center",
                        alignItems: "center",
                        flexWrap: "nowrap",
                        boxSizing: "border-box",
                        flexGrow: 1,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                            position: "relative",
                            width: 20,
                            height: 20,
                            flexShrink: 0,
                            color: "var(--icon-primary)",
                          }}>
                          <Check style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0", color: "var(--icon-primary)" }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 6145,
        top: 100,
        width: 1440,
        height: 1024,
        overflow: "hidden",
        borderRadius: 16,
        backgroundColor: "var(--background-bg-primary)",
      }}>
        <div style={{
          position: "absolute",
          left: 125,
          top: 239,
          width: 479,
          height: 546,
          overflow: "hidden",
          borderRadius: 12,
          backgroundColor: "var(--background-bg-secondary)",
        }}>
          <div style={{
            position: "absolute",
            left: 6,
            top: 6,
            width: 467,
            height: 534,
            overflow: "hidden",
            borderRadius: 12,
            background: "linear-gradient(180.049deg, rgb(205,239,227) -8.44%, rgb(255,255,255) 17.64%, rgb(255,255,255) 99.96%)",
          }}>
            <div style={{
              position: "absolute",
              left: 34,
              top: 34,
              width: 399,
              display: "flex",
              flexDirection: "column",
              gap: 40,
              alignItems: "center",
              flexWrap: "nowrap",
            }}>
              <div style={{
                position: "relative",
                width: 92,
                height: 92,
                display: "flex",
                flexDirection: "row",
                padding: "2px 0px 2px 0px",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                gap: "calc(var(--spacing-0) * 1px)",
                paddingLeft: "calc(var(--spacing-0) * 1px)",
                paddingRight: "calc(var(--spacing-0) * 1px)",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 92,
                  height: 92,
                  opacity: 0.92,
                  overflow: "hidden",
                  borderRadius: 50,
                  background: "linear-gradient(180.651deg, rgb(223,255,243) 6.22%, rgb(183,253,228) 96.95%)",
                  flexShrink: 0,
                }}>
                  <div style={{
                    position: "absolute",
                    left: 13,
                    top: 13,
                    overflow: "hidden",
                    borderRadius: 96,
                    background: "linear-gradient(188.664deg, rgb(163,217,197) 9.57%, rgb(39,163,118) 85.41%)",
                    boxShadow: "0px 2px 4px 0px rgba(27,28,29,0.04)",
                    display: "flex",
                    flexDirection: "row",
                    gap: 14,
                    padding: "18px 18px 18px 18px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "nowrap",
                    boxSizing: "border-box",
                  }}>
                    <div style={{
                        position: "relative",
                        width: 30,
                        height: 30,
                        flexShrink: 0,
                      }}>
                      <Lock style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
                    </div>
                  </div>
                </div>
              </div>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: 24,
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <div style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  gap: 24,
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                    alignItems: "flex-start",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 700,
                      fontSize: 32,
                      textAlign: "center",
                      lineHeight: "42px",
                      color: "var(--text-primary)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>Create a new password</span>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 400,
                      fontSize: 18,
                      textAlign: "center",
                      lineHeight: "24px",
                      color: "var(--text-secondary)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>Set your new password with minimum 8 characters with a combination of letters and numbers</span>
                  </div>
                  <div style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    gap: 24,
                    alignItems: "flex-start",
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
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        width: 92,
                        display: "flex",
                        flexDirection: "row",
                        gap: "calc(var(--2) * 1px)",
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                      }}>
                        <span style={{
                          position: "relative",
                          fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                          fontWeight: 500,
                          fontSize: 16,
                          whiteSpace: "nowrap",
                          lineHeight: "20px",
                          color: "rgb(0,0,0)",
                          flexShrink: 0,
                          filter: "drop-shadow(0px 1px 2px rgba(20,28,36,0.04))",
                        }}>New Password</span>
                        <span style={{
                          position: "relative",
                          fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                          fontWeight: 400,
                          fontSize: 14,
                          whiteSpace: "nowrap",
                          lineHeight: "18px",
                          color: "rgb(144,147,146)",
                          flexShrink: 0,
                          filter: "drop-shadow(0px 1px 2px rgba(20,28,36,0.04))",
                        }}>(optional)</span>
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
                          <Lock style={{
                              position: "relative",
                              width: 24,
                              height: 24,
                              flexShrink: 0,
                            }} />
                          <div style={{
                            position: "relative",
                            height: 20,
                            display: "flex",
                            flexDirection: "row",
                            gap: 5,
                            alignItems: "center",
                            flexWrap: "nowrap",
                            flexGrow: 1,
                          }}>
                            <div style={{
                              position: "relative",
                              width: 6,
                              height: 6,
                              borderRadius: "50%",
                              backgroundColor: "var(--text-secondary)",
                              flexShrink: 0,
                            }} />
                            <div style={{
                              position: "relative",
                              width: 6,
                              height: 6,
                              borderRadius: "50%",
                              backgroundColor: "var(--text-secondary)",
                              flexShrink: 0,
                            }} />
                            <div style={{
                              position: "relative",
                              width: 6,
                              height: 6,
                              borderRadius: "50%",
                              backgroundColor: "var(--text-secondary)",
                              flexShrink: 0,
                            }} />
                            <div style={{
                              position: "relative",
                              width: 6,
                              height: 6,
                              borderRadius: "50%",
                              backgroundColor: "var(--text-secondary)",
                              flexShrink: 0,
                            }} />
                            <div style={{
                              position: "relative",
                              width: 6,
                              height: 6,
                              borderRadius: "50%",
                              backgroundColor: "var(--text-secondary)",
                              flexShrink: 0,
                            }} />
                            <div style={{
                              position: "relative",
                              width: 6,
                              height: 6,
                              borderRadius: "50%",
                              backgroundColor: "var(--text-secondary)",
                              flexShrink: 0,
                            }} />
                            <div style={{
                              position: "relative",
                              width: 6,
                              height: 6,
                              borderRadius: "50%",
                              backgroundColor: "var(--text-secondary)",
                              flexShrink: 0,
                            }} />
                            <div style={{
                              position: "relative",
                              width: 6,
                              height: 6,
                              borderRadius: "50%",
                              backgroundColor: "var(--text-secondary)",
                              flexShrink: 0,
                            }} />
                            <div style={{
                              position: "relative",
                              width: 6,
                              height: 6,
                              borderRadius: "50%",
                              backgroundColor: "var(--text-secondary)",
                              flexShrink: 0,
                            }} />
                            <div style={{
                              position: "relative",
                              width: 6,
                              height: 6,
                              borderRadius: "50%",
                              backgroundColor: "var(--text-secondary)",
                              flexShrink: 0,
                            }} />
                          </div>
                        </div>
                        <div style={{
                            position: "relative",
                            width: 20,
                            height: 20,
                            flexShrink: 0,
                          }}>
                          <Hide style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--padding-xxs) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        width: 176,
                        display: "flex",
                        flexDirection: "row",
                        gap: "calc(var(--2) * 1px)",
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                      }}>
                        <span style={{
                          position: "relative",
                          fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                          fontWeight: 500,
                          fontSize: 16,
                          whiteSpace: "nowrap",
                          lineHeight: "20px",
                          color: "rgb(0,0,0)",
                          flexShrink: 0,
                          filter: "drop-shadow(0px 1px 2px rgba(20,28,36,0.04))",
                        }}>Confirmation New Password</span>
                        <span style={{
                          position: "relative",
                          fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                          fontWeight: 400,
                          fontSize: 14,
                          whiteSpace: "nowrap",
                          lineHeight: "18px",
                          color: "rgb(144,147,146)",
                          flexShrink: 0,
                          filter: "drop-shadow(0px 1px 2px rgba(20,28,36,0.04))",
                        }}>(optional)</span>
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
                          <Lock style={{
                              position: "relative",
                              width: 24,
                              height: 24,
                              flexShrink: 0,
                            }} />
                          <div style={{
                            position: "relative",
                            height: 20,
                            display: "flex",
                            flexDirection: "row",
                            gap: 5,
                            alignItems: "center",
                            flexWrap: "nowrap",
                            flexGrow: 1,
                          }}>
                            <div style={{
                              position: "relative",
                              width: 6,
                              height: 6,
                              borderRadius: "50%",
                              backgroundColor: "var(--text-secondary)",
                              flexShrink: 0,
                            }} />
                            <div style={{
                              position: "relative",
                              width: 6,
                              height: 6,
                              borderRadius: "50%",
                              backgroundColor: "var(--text-secondary)",
                              flexShrink: 0,
                            }} />
                            <div style={{
                              position: "relative",
                              width: 6,
                              height: 6,
                              borderRadius: "50%",
                              backgroundColor: "var(--text-secondary)",
                              flexShrink: 0,
                            }} />
                            <div style={{
                              position: "relative",
                              width: 6,
                              height: 6,
                              borderRadius: "50%",
                              backgroundColor: "var(--text-secondary)",
                              flexShrink: 0,
                            }} />
                            <div style={{
                              position: "relative",
                              width: 6,
                              height: 6,
                              borderRadius: "50%",
                              backgroundColor: "var(--text-secondary)",
                              flexShrink: 0,
                            }} />
                            <div style={{
                              position: "relative",
                              width: 6,
                              height: 6,
                              borderRadius: "50%",
                              backgroundColor: "var(--text-secondary)",
                              flexShrink: 0,
                            }} />
                            <div style={{
                              position: "relative",
                              width: 6,
                              height: 6,
                              borderRadius: "50%",
                              backgroundColor: "var(--text-secondary)",
                              flexShrink: 0,
                            }} />
                            <div style={{
                              position: "relative",
                              width: 6,
                              height: 6,
                              borderRadius: "50%",
                              backgroundColor: "var(--text-secondary)",
                              flexShrink: 0,
                            }} />
                            <div style={{
                              position: "relative",
                              width: 6,
                              height: 6,
                              borderRadius: "50%",
                              backgroundColor: "var(--text-secondary)",
                              flexShrink: 0,
                            }} />
                            <div style={{
                              position: "relative",
                              width: 6,
                              height: 6,
                              borderRadius: "50%",
                              backgroundColor: "var(--text-secondary)",
                              flexShrink: 0,
                            }} />
                          </div>
                        </div>
                        <div style={{
                            position: "relative",
                            width: 20,
                            height: 20,
                            flexShrink: 0,
                          }}>
                          <Hide style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />
                        </div>
                      </div>
                    </div>
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
                        <svg width={12} height={1.500} viewBox="0 -0.750 12 1.500" fill="none" style={{
                          position: "absolute",
                          left: 6,
                          top: 12,
                          width: 12,
                          height: 1.5,
                          color: "var(--general-white)",
                        }}>
                          <path d={"M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 -0.75 Z M 12 0.75 C 12.414 0.75 12.75 0.414 12.75 0 C 12.75 -0.414 12.414 -0.75 12 -0.75 L 12 0.75 Z M 0 0.75 L 12 0.75 L 12 -0.75 L 0 -0.75 L 0 0.75 Z"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                        <svg width={1.500} height={12} viewBox="-0.750 0 1.500 12" fill="none" style={{
                          position: "absolute",
                          left: 12,
                          top: 6,
                          width: 1.5,
                          height: 12,
                          color: "var(--general-white)",
                        }}>
                          <path d={"M 0.75 0 C 0.75 -0.414 0.414 -0.75 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 L 0.75 0 Z M -0.75 12 C -0.75 12.414 -0.414 12.75 0 12.75 C 0.414 12.75 0.75 12.414 0.75 12 L -0.75 12 Z M -0.75 0 L -0.75 12 L 0.75 12 L 0.75 0 L -0.75 0 Z"} fill="currentColor" fillRule="nonzero" />
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
                      }}>Submit</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 728,
          top: 12,
          width: 700,
          height: 1000,
          overflow: "hidden",
          borderRadius: 12,
          backgroundColor: "var(--primary-600)",
        }}>
          <div style={{
            position: "absolute",
            left: -144,
            top: -56,
            width: 1205.006,
            height: 1277.859,
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 200.834,
              top: 0,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 401.668,
              top: 0,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              backgroundColor: "rgb(44,170,124)",
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 602.502,
              top: 0,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 803.336,
              top: 0,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 1004.172,
              top: 0,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 0,
              top: 182.551,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 200.834,
              top: 182.551,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 401.668,
              top: 182.551,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 602.502,
              top: 182.551,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 803.336,
              top: 182.551,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 1004.172,
              top: 182.551,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 0,
              top: 365.102,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              backgroundColor: "rgb(44,170,124)",
              boxShadow: "inset 0 0 0 0.500px rgb(44,170,124), 0 0 0 0.500px rgb(44,170,124)",
            }} />
            <div style={{
              position: "absolute",
              left: 200.834,
              top: 365.102,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 401.668,
              top: 365.102,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              backgroundColor: "rgb(44,170,124)",
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 602.502,
              top: 365.102,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 803.336,
              top: 365.102,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              backgroundColor: "rgb(44,170,124)",
              boxShadow: "inset 0 0 0 0.500px rgb(44,170,124), 0 0 0 0.500px rgb(44,170,124)",
            }} />
            <div style={{
              position: "absolute",
              left: 1004.172,
              top: 365.102,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 0,
              top: 547.654,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 200.834,
              top: 547.654,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 401.668,
              top: 547.654,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 602.502,
              top: 547.654,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 803.336,
              top: 547.654,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 1004.172,
              top: 547.654,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 0,
              top: 730.205,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 200.834,
              top: 730.205,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              backgroundColor: "rgb(44,170,124)",
              boxShadow: "inset 0 0 0 0.500px rgb(44,170,124), 0 0 0 0.500px rgb(44,170,124)",
            }} />
            <div style={{
              position: "absolute",
              left: 401.668,
              top: 730.205,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 602.502,
              top: 730.205,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 803.336,
              top: 730.205,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              backgroundColor: "rgb(44,170,124)",
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 1004.172,
              top: 730.205,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 0,
              top: 912.756,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 200.834,
              top: 912.756,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 401.668,
              top: 912.756,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 602.502,
              top: 912.756,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 803.336,
              top: 912.756,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 1004.172,
              top: 912.756,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 0,
              top: 1095.307,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              backgroundColor: "rgb(44,170,124)",
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 200.834,
              top: 1095.307,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 401.668,
              top: 1095.307,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 602.502,
              top: 1095.307,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 803.336,
              top: 1095.307,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 1004.172,
              top: 1095.307,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              backgroundColor: "rgb(51,174,129)",
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
          </div>
          <div style={{
            position: "absolute",
            left: 198,
            top: 886,
            display: "flex",
            flexDirection: "row",
            gap: 24,
            alignItems: "center",
            flexWrap: "nowrap",
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <ArrowLeft2 style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />
            </div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 8,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <svg width={24} height={8} viewBox="0 0 24 8" fill="none" style={{
                position: "relative",
                width: 24,
                height: 8,
                overflow: "hidden",
                borderRadius: 16,
                flexShrink: 0,
                color: "var(--primary-50)",
              }}>
                <path d={"M 0 4 C 0 1.791 1.791 0 4 0 L 20 0 C 22.209 0 24 1.791 24 4 L 24 4 C 24 6.209 22.209 8 20 8 L 4 8 C 1.791 8 0 6.209 0 4 L 0 4 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
              <svg width={24} height={8} viewBox="0 0 24 8" fill="none" style={{
                position: "relative",
                width: 24,
                height: 8,
                overflow: "hidden",
                borderRadius: 16,
                flexShrink: 0,
                color: "var(--primary-500)",
              }}>
                <path d={"M 0 4 C 0 1.791 1.791 0 4 0 L 20 0 C 22.209 0 24 1.791 24 4 L 24 4 C 24 6.209 22.209 8 20 8 L 4 8 C 1.791 8 0 6.209 0 4 L 0 4 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
              <svg width={24} height={8} viewBox="0 0 24 8" fill="none" style={{
                position: "relative",
                width: 24,
                height: 8,
                overflow: "hidden",
                borderRadius: 16,
                flexShrink: 0,
                color: "var(--primary-500)",
              }}>
                <path d={"M 0 4 C 0 1.791 1.791 0 4 0 L 20 0 C 22.209 0 24 1.791 24 4 L 24 4 C 24 6.209 22.209 8 20 8 L 4 8 C 1.791 8 0 6.209 0 4 L 0 4 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
              <svg width={24} height={8} viewBox="0 0 24 8" fill="none" style={{
                position: "relative",
                width: 24,
                height: 8,
                overflow: "hidden",
                borderRadius: 16,
                flexShrink: 0,
                color: "var(--primary-500)",
              }}>
                <path d={"M 0 4 C 0 1.791 1.791 0 4 0 L 20 0 C 22.209 0 24 1.791 24 4 L 24 4 C 24 6.209 22.209 8 20 8 L 4 8 C 1.791 8 0 6.209 0 4 L 0 4 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
              <svg width={24} height={8} viewBox="0 0 24 8" fill="none" style={{
                position: "relative",
                width: 24,
                height: 8,
                overflow: "hidden",
                borderRadius: 16,
                flexShrink: 0,
                color: "var(--primary-500)",
              }}>
                <path d={"M 0 4 C 0 1.791 1.791 0 4 0 L 20 0 C 22.209 0 24 1.791 24 4 L 24 4 C 24 6.209 22.209 8 20 8 L 4 8 C 1.791 8 0 6.209 0 4 L 0 4 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
              <svg width={24} height={8} viewBox="0 0 24 8" fill="none" style={{
                position: "relative",
                width: 24,
                height: 8,
                overflow: "hidden",
                borderRadius: 16,
                flexShrink: 0,
                color: "var(--primary-500)",
              }}>
                <path d={"M 0 4 C 0 1.791 1.791 0 4 0 L 20 0 C 22.209 0 24 1.791 24 4 L 24 4 C 24 6.209 22.209 8 20 8 L 4 8 C 1.791 8 0 6.209 0 4 L 0 4 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
              <svg width={24} height={8} viewBox="0 0 24 8" fill="none" style={{
                position: "relative",
                width: 24,
                height: 8,
                overflow: "hidden",
                borderRadius: 16,
                flexShrink: 0,
                color: "var(--primary-500)",
              }}>
                <path d={"M 0 4 C 0 1.791 1.791 0 4 0 L 20 0 C 22.209 0 24 1.791 24 4 L 24 4 C 24 6.209 22.209 8 20 8 L 4 8 C 1.791 8 0 6.209 0 4 L 0 4 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <ArrowRight22 style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />
            </div>
          </div>
          <div style={{
            position: "absolute",
            left: 24,
            top: 24,
            display: "flex",
            flexDirection: "row",
            gap: 51,
            alignItems: "center",
            flexWrap: "nowrap",
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
                color: "rgb(12,17,15)",
                flexShrink: 0,
              }}>Interoly</span>
            </div>
          </div>
          <svg width={526} height={165} viewBox="0 0 526 165" fill="none" style={{
            position: "absolute",
            left: 72,
            top: 550,
            width: 526,
            height: 165,
            overflow: "hidden",
            borderRadius: 16,
            color: "rgba(255,255,255,0.8)",
          }}>
            <path d={"M 0 16 C 0 7.163 7.163 0 16 0 L 510 0 C 518.837 0 526 7.163 526 16 L 526 149 C 526 157.837 518.837 165 510 165 L 16 165 C 7.163 165 0 157.837 0 149 L 0 16 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={486} height={165} viewBox="0 0 486 165" fill="none" style={{
            position: "absolute",
            left: 92,
            top: 570,
            width: 486,
            height: 165,
            overflow: "hidden",
            borderRadius: 16,
            color: "rgba(255,255,255,0.6)",
          }}>
            <path d={"M 0 16 C 0 7.163 7.163 0 16 0 L 470 0 C 478.837 0 486 7.163 486 16 L 486 149 C 486 157.837 478.837 165 470 165 L 16 165 C 7.163 165 0 157.837 0 149 L 0 16 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={446} height={165} viewBox="0 0 446 165" fill="none" style={{
            position: "absolute",
            left: 112,
            top: 590,
            width: 446,
            height: 165,
            overflow: "hidden",
            borderRadius: 16,
            color: "rgba(255,255,255,0.4)",
          }}>
            <path d={"M 0 16 C 0 7.163 7.163 0 16 0 L 430 0 C 438.837 0 446 7.163 446 16 L 446 149 C 446 157.837 438.837 165 430 165 L 16 165 C 7.163 165 0 157.837 0 149 L 0 16 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <Card5 style={{
              position: "absolute",
              left: 52,
              top: 371,
              width: 566,
            }} />
          <Card2 style={{
              position: "absolute",
              left: 510,
              top: 322,
              width: 160,
              height: 173,
            }} />
          <div style={{
            position: "absolute",
            left: 52,
            top: 107,
            width: 596,
            display: "flex",
            flexDirection: "column",
            gap: 12,
            alignItems: "flex-start",
            flexWrap: "nowrap",
          }}>
            <span style={{
              position: "relative",
              width: 592,
              fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 32,
              textAlign: "center",
              lineHeight: "42px",
              color: "var(--general-white)",
              flexShrink: 0,
            }}>Sign Up Interoly Smart Inventory Management System</span>
            <span style={{
              position: "relative",
              fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 18,
              textAlign: "center",
              lineHeight: "24px",
              color: "var(--grayscale-200)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Access your Interoly Inventory Management system to track stock levels, manage orders, and streamline your supply chain. Sign up to stay in control of your inventory anytime, anywhere.</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 8160,
        top: 100,
        width: 1440,
        height: 1024,
        overflow: "hidden",
        borderRadius: 16,
        backgroundColor: "var(--background-bg-primary)",
      }}>
        <div style={{
          position: "absolute",
          left: 728,
          top: 12,
          width: 700,
          height: 1000,
          overflow: "hidden",
          borderRadius: 12,
          backgroundColor: "var(--primary-600)",
        }}>
          <div style={{
            position: "absolute",
            left: -144,
            top: -56,
            width: 1205.006,
            height: 1277.859,
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 200.836,
              top: 0,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 401.668,
              top: 0,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              backgroundColor: "rgb(44,170,124)",
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 602.504,
              top: 0,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 803.336,
              top: 0,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 1004.172,
              top: 0,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 0,
              top: 182.551,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 200.836,
              top: 182.551,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 401.668,
              top: 182.551,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 602.504,
              top: 182.551,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 803.336,
              top: 182.551,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 1004.172,
              top: 182.551,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 0,
              top: 365.102,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              backgroundColor: "rgb(44,170,124)",
              boxShadow: "inset 0 0 0 0.500px rgb(44,170,124), 0 0 0 0.500px rgb(44,170,124)",
            }} />
            <div style={{
              position: "absolute",
              left: 200.836,
              top: 365.102,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 401.668,
              top: 365.102,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              backgroundColor: "rgb(44,170,124)",
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 602.504,
              top: 365.102,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 803.336,
              top: 365.102,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              backgroundColor: "rgb(44,170,124)",
              boxShadow: "inset 0 0 0 0.500px rgb(44,170,124), 0 0 0 0.500px rgb(44,170,124)",
            }} />
            <div style={{
              position: "absolute",
              left: 1004.172,
              top: 365.102,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 0,
              top: 547.654,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 200.836,
              top: 547.654,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 401.668,
              top: 547.654,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 602.504,
              top: 547.654,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 803.336,
              top: 547.654,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 1004.172,
              top: 547.654,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 0,
              top: 730.205,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 200.836,
              top: 730.205,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              backgroundColor: "rgb(44,170,124)",
              boxShadow: "inset 0 0 0 0.500px rgb(44,170,124), 0 0 0 0.500px rgb(44,170,124)",
            }} />
            <div style={{
              position: "absolute",
              left: 401.668,
              top: 730.205,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 602.504,
              top: 730.205,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 803.336,
              top: 730.205,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              backgroundColor: "rgb(44,170,124)",
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 1004.172,
              top: 730.205,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 0,
              top: 912.756,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 200.836,
              top: 912.756,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 401.668,
              top: 912.756,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 602.504,
              top: 912.756,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 803.336,
              top: 912.756,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 1004.172,
              top: 912.756,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 0,
              top: 1095.307,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              backgroundColor: "rgb(44,170,124)",
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 200.836,
              top: 1095.307,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 401.668,
              top: 1095.307,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 602.504,
              top: 1095.307,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 803.336,
              top: 1095.307,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
            <div style={{
              position: "absolute",
              left: 1004.172,
              top: 1095.307,
              width: 200.834,
              height: 182.551,
              borderRadius: 4.597701549530029,
              backgroundColor: "rgb(51,174,129)",
              boxShadow: "inset 0 0 0 0.500px rgb(51,174,129), 0 0 0 0.500px rgb(51,174,129)",
            }} />
          </div>
          <div style={{
            position: "absolute",
            left: 198,
            top: 886,
            display: "flex",
            flexDirection: "row",
            gap: 24,
            alignItems: "center",
            flexWrap: "nowrap",
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <ArrowLeft2 style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />
            </div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 8,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <svg width={24} height={8} viewBox="0 0 24 8" fill="none" style={{
                position: "relative",
                width: 24,
                height: 8,
                overflow: "hidden",
                borderRadius: 16,
                flexShrink: 0,
                color: "var(--primary-50)",
              }}>
                <path d={"M 0 4 C 0 1.791 1.791 0 4 0 L 20 0 C 22.209 0 24 1.791 24 4 L 24 4 C 24 6.209 22.209 8 20 8 L 4 8 C 1.791 8 0 6.209 0 4 L 0 4 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
              <svg width={24} height={8} viewBox="0 0 24 8" fill="none" style={{
                position: "relative",
                width: 24,
                height: 8,
                overflow: "hidden",
                borderRadius: 16,
                flexShrink: 0,
                color: "var(--primary-500)",
              }}>
                <path d={"M 0 4 C 0 1.791 1.791 0 4 0 L 20 0 C 22.209 0 24 1.791 24 4 L 24 4 C 24 6.209 22.209 8 20 8 L 4 8 C 1.791 8 0 6.209 0 4 L 0 4 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
              <svg width={24} height={8} viewBox="0 0 24 8" fill="none" style={{
                position: "relative",
                width: 24,
                height: 8,
                overflow: "hidden",
                borderRadius: 16,
                flexShrink: 0,
                color: "var(--primary-500)",
              }}>
                <path d={"M 0 4 C 0 1.791 1.791 0 4 0 L 20 0 C 22.209 0 24 1.791 24 4 L 24 4 C 24 6.209 22.209 8 20 8 L 4 8 C 1.791 8 0 6.209 0 4 L 0 4 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
              <svg width={24} height={8} viewBox="0 0 24 8" fill="none" style={{
                position: "relative",
                width: 24,
                height: 8,
                overflow: "hidden",
                borderRadius: 16,
                flexShrink: 0,
                color: "var(--primary-500)",
              }}>
                <path d={"M 0 4 C 0 1.791 1.791 0 4 0 L 20 0 C 22.209 0 24 1.791 24 4 L 24 4 C 24 6.209 22.209 8 20 8 L 4 8 C 1.791 8 0 6.209 0 4 L 0 4 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
              <svg width={24} height={8} viewBox="0 0 24 8" fill="none" style={{
                position: "relative",
                width: 24,
                height: 8,
                overflow: "hidden",
                borderRadius: 16,
                flexShrink: 0,
                color: "var(--primary-500)",
              }}>
                <path d={"M 0 4 C 0 1.791 1.791 0 4 0 L 20 0 C 22.209 0 24 1.791 24 4 L 24 4 C 24 6.209 22.209 8 20 8 L 4 8 C 1.791 8 0 6.209 0 4 L 0 4 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
              <svg width={24} height={8} viewBox="0 0 24 8" fill="none" style={{
                position: "relative",
                width: 24,
                height: 8,
                overflow: "hidden",
                borderRadius: 16,
                flexShrink: 0,
                color: "var(--primary-500)",
              }}>
                <path d={"M 0 4 C 0 1.791 1.791 0 4 0 L 20 0 C 22.209 0 24 1.791 24 4 L 24 4 C 24 6.209 22.209 8 20 8 L 4 8 C 1.791 8 0 6.209 0 4 L 0 4 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
              <svg width={24} height={8} viewBox="0 0 24 8" fill="none" style={{
                position: "relative",
                width: 24,
                height: 8,
                overflow: "hidden",
                borderRadius: 16,
                flexShrink: 0,
                color: "var(--primary-500)",
              }}>
                <path d={"M 0 4 C 0 1.791 1.791 0 4 0 L 20 0 C 22.209 0 24 1.791 24 4 L 24 4 C 24 6.209 22.209 8 20 8 L 4 8 C 1.791 8 0 6.209 0 4 L 0 4 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <ArrowRight22 style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />
            </div>
          </div>
          <div style={{
            position: "absolute",
            left: 24,
            top: 24,
            display: "flex",
            flexDirection: "row",
            gap: 51,
            alignItems: "center",
            flexWrap: "nowrap",
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
                color: "rgb(12,17,15)",
                flexShrink: 0,
              }}>Interoly</span>
            </div>
          </div>
          <svg width={526} height={165} viewBox="0 0 526 165" fill="none" style={{
            position: "absolute",
            left: 72,
            top: 550,
            width: 526,
            height: 165,
            overflow: "hidden",
            borderRadius: 16,
            color: "rgba(255,255,255,0.8)",
          }}>
            <path d={"M 0 16 C 0 7.163 7.163 0 16 0 L 510 0 C 518.837 0 526 7.163 526 16 L 526 149 C 526 157.837 518.837 165 510 165 L 16 165 C 7.163 165 0 157.837 0 149 L 0 16 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={486} height={165} viewBox="0 0 486 165" fill="none" style={{
            position: "absolute",
            left: 92,
            top: 570,
            width: 486,
            height: 165,
            overflow: "hidden",
            borderRadius: 16,
            color: "rgba(255,255,255,0.6)",
          }}>
            <path d={"M 0 16 C 0 7.163 7.163 0 16 0 L 470 0 C 478.837 0 486 7.163 486 16 L 486 149 C 486 157.837 478.837 165 470 165 L 16 165 C 7.163 165 0 157.837 0 149 L 0 16 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={446} height={165} viewBox="0 0 446 165" fill="none" style={{
            position: "absolute",
            left: 112,
            top: 590,
            width: 446,
            height: 165,
            overflow: "hidden",
            borderRadius: 16,
            color: "rgba(255,255,255,0.4)",
          }}>
            <path d={"M 0 16 C 0 7.163 7.163 0 16 0 L 430 0 C 438.837 0 446 7.163 446 16 L 446 149 C 446 157.837 438.837 165 430 165 L 16 165 C 7.163 165 0 157.837 0 149 L 0 16 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <Card5 style={{
              position: "absolute",
              left: 52,
              top: 371,
              width: 566,
            }} />
          <Card2 style={{
              position: "absolute",
              left: 510,
              top: 322,
              width: 160,
              height: 173,
            }} />
          <div style={{
            position: "absolute",
            left: 52,
            top: 107,
            width: 596,
            display: "flex",
            flexDirection: "column",
            gap: 12,
            alignItems: "flex-start",
            flexWrap: "nowrap",
          }}>
            <span style={{
              position: "relative",
              width: 592,
              fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 32,
              textAlign: "center",
              lineHeight: "42px",
              color: "var(--general-white)",
              flexShrink: 0,
            }}>Sign Up Interoly Smart Inventory Management System</span>
            <span style={{
              position: "relative",
              fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 18,
              textAlign: "center",
              lineHeight: "24px",
              color: "var(--grayscale-200)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Access your Interoly Inventory Management system to track stock levels, manage orders, and streamline your supply chain. Sign up to stay in control of your inventory anytime, anywhere.</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 125,
          top: 282,
          width: 479,
          height: 460,
          overflow: "hidden",
          borderRadius: 12,
          backgroundColor: "var(--background-bg-secondary)",
        }}>
          <svg width={467} height={448} viewBox="0 0 467 448" fill="none" style={{
            position: "absolute",
            left: 6,
            top: 6,
            width: 467,
            height: 448,
            overflow: "hidden",
            borderRadius: 12,
          }}>
            <path d={"M 0 12 C 0 5.373 5.373 0 12 0 L 455 0 C 461.627 0 467 5.373 467 12 L 467 436 C 467 442.627 461.627 448 455 448 L 12 448 C 5.373 448 0 442.627 0 436 L 0 12 Z"} fill="currentColor" fillRule="nonzero" />
            <path d={"M 12 1 L 455 1 L 455 -1 L 12 -1 L 12 1 Z M 466 12 L 466 436 L 468 436 L 468 12 L 466 12 Z M 455 447 L 12 447 L 12 449 L 455 449 L 455 447 Z M 1 436 L 1 12 L -1 12 L -1 436 L 1 436 Z M 12 447 C 5.925 447 1 442.075 1 436 L -1 436 C -1 443.18 4.82 449 12 449 L 12 447 Z M 466 436 C 466 442.075 461.075 447 455 447 L 455 449 C 462.18 449 468 443.18 468 436 L 466 436 Z M 455 1 C 461.075 1 466 5.925 466 12 L 468 12 C 468 4.82 462.18 -1 455 -1 L 455 1 Z M 12 -1 C 4.82 -1 -1 4.82 -1 12 L 1 12 C 1 5.925 5.925 1 12 1 L 12 -1 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div style={{
            position: "absolute",
            left: 40,
            top: 384,
            width: 399,
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
          }}>
            <div style={{
              position: "relative",
              width: 20,
              height: 20,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={12} height={1.500} viewBox="0 -0.750 12 1.500" fill="none" style={{
                position: "absolute",
                left: 6,
                top: 12,
                width: 12,
                height: 1.5,
                color: "var(--general-white)",
              }}>
                <path d={"M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 -0.75 Z M 12 0.75 C 12.414 0.75 12.75 0.414 12.75 0 C 12.75 -0.414 12.414 -0.75 12 -0.75 L 12 0.75 Z M 0 0.75 L 12 0.75 L 12 -0.75 L 0 -0.75 L 0 0.75 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
              <svg width={1.500} height={12} viewBox="-0.750 0 1.500 12" fill="none" style={{
                position: "absolute",
                left: 12,
                top: 6,
                width: 1.5,
                height: 12,
                color: "var(--general-white)",
              }}>
                <path d={"M 0.75 0 C 0.75 -0.414 0.414 -0.75 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 L 0.75 0 Z M -0.75 12 C -0.75 12.414 -0.414 12.75 0 12.75 C 0.414 12.75 0.75 12.414 0.75 12 L -0.75 12 Z M -0.75 0 L -0.75 12 L 0.75 12 L 0.75 0 L -0.75 0 Z"} fill="currentColor" fillRule="nonzero" />
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
            }}>Back to Sign In</span>
          </div>
          <div style={{
            position: "absolute",
            left: -16,
            top: 48,
            width: 512,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
          }}>
            <div style={{
              position: "absolute",
              left: 36,
              top: -38,
              width: 440,
              height: 199,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 440,
                height: 199,
                clipPath: "inset(-96px 0px 0px -20px)",
              }}>
                <div style={{
                  position: "absolute",
                  left: 55,
                  top: -78,
                  width: 330,
                  height: 306,
                }}>
                  <div style={{
                    position: "absolute",
                    left: -75,
                    top: -18,
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    flexWrap: "nowrap",
                  }}>
                    <div style={{
                      position: "relative",
                      width: 480,
                      height: 480,
                      overflow: "hidden",
                      boxShadow: "inset 0 0 0 1px var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "row",
                      gap: "calc(var(--spacing-4xl) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexShrink: 0,
                    }}>
                      <svg width={480} height={1} viewBox="0 -0.500 480 1" fill="none" style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        transform: "matrix(0,1,-1,0,0,0)",
                        transformOrigin: "0 0",
                        width: 480,
                        height: 1,
                        color: "var(--border-border-primary)",
                      }}>
                        <path d={"M 0 0 L 480 0 L 480 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                      </svg>
                      <svg width={480} height={1} viewBox="0 -0.500 480 1" fill="none" style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        transform: "matrix(0,1,-1,0,32,0)",
                        transformOrigin: "0 0",
                        width: 480,
                        height: 1,
                        color: "var(--border-border-primary)",
                      }}>
                        <path d={"M 0 0 L 480 0 L 480 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                      </svg>
                      <svg width={480} height={1} viewBox="0 -0.500 480 1" fill="none" style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        transform: "matrix(0,1,-1,0,64,0)",
                        transformOrigin: "0 0",
                        width: 480,
                        height: 1,
                        color: "var(--border-border-primary)",
                      }}>
                        <path d={"M 0 0 L 480 0 L 480 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                      </svg>
                      <svg width={480} height={1} viewBox="0 -0.500 480 1" fill="none" style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        transform: "matrix(0,1,-1,0,96,0)",
                        transformOrigin: "0 0",
                        width: 480,
                        height: 1,
                        color: "var(--border-border-primary)",
                      }}>
                        <path d={"M 0 0 L 480 0 L 480 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                      </svg>
                      <svg width={480} height={1} viewBox="0 -0.500 480 1" fill="none" style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        transform: "matrix(0,1,-1,0,128,0)",
                        transformOrigin: "0 0",
                        width: 480,
                        height: 1,
                        color: "var(--border-border-primary)",
                      }}>
                        <path d={"M 0 0 L 480 0 L 480 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                      </svg>
                      <svg width={480} height={1} viewBox="0 -0.500 480 1" fill="none" style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        transform: "matrix(0,1,-1,0,160,0)",
                        transformOrigin: "0 0",
                        width: 480,
                        height: 1,
                        color: "var(--border-border-primary)",
                      }}>
                        <path d={"M 0 0 L 480 0 L 480 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                      </svg>
                      <svg width={480} height={1} viewBox="0 -0.500 480 1" fill="none" style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        transform: "matrix(0,1,-1,0,192,0)",
                        transformOrigin: "0 0",
                        width: 480,
                        height: 1,
                        color: "var(--border-border-primary)",
                      }}>
                        <path d={"M 0 0 L 480 0 L 480 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                      </svg>
                      <svg width={480} height={1} viewBox="0 -0.500 480 1" fill="none" style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        transform: "matrix(0,1,-1,0,224,0)",
                        transformOrigin: "0 0",
                        width: 480,
                        height: 1,
                        color: "var(--border-border-primary)",
                      }}>
                        <path d={"M 0 0 L 480 0 L 480 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                      </svg>
                      <svg width={480} height={1} viewBox="0 -0.500 480 1" fill="none" style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        transform: "matrix(0,1,-1,0,256,0)",
                        transformOrigin: "0 0",
                        width: 480,
                        height: 1,
                        color: "var(--border-border-primary)",
                      }}>
                        <path d={"M 0 0 L 480 0 L 480 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                      </svg>
                      <svg width={480} height={1} viewBox="0 -0.500 480 1" fill="none" style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        transform: "matrix(0,1,-1,0,288,0)",
                        transformOrigin: "0 0",
                        width: 480,
                        height: 1,
                        color: "var(--border-border-primary)",
                      }}>
                        <path d={"M 0 0 L 480 0 L 480 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                      </svg>
                      <svg width={480} height={1} viewBox="0 -0.500 480 1" fill="none" style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        transform: "matrix(0,1,-1,0,320,0)",
                        transformOrigin: "0 0",
                        width: 480,
                        height: 1,
                        color: "var(--border-border-primary)",
                      }}>
                        <path d={"M 0 0 L 480 0 L 480 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                      </svg>
                      <svg width={480} height={1} viewBox="0 -0.500 480 1" fill="none" style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        transform: "matrix(0,1,-1,0,352,0)",
                        transformOrigin: "0 0",
                        width: 480,
                        height: 1,
                        color: "var(--border-border-primary)",
                      }}>
                        <path d={"M 0 0 L 480 0 L 480 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                      </svg>
                      <svg width={480} height={1} viewBox="0 -0.500 480 1" fill="none" style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        transform: "matrix(0,1,-1,0,384,0)",
                        transformOrigin: "0 0",
                        width: 480,
                        height: 1,
                        color: "var(--border-border-primary)",
                      }}>
                        <path d={"M 0 0 L 480 0 L 480 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                      </svg>
                      <svg width={480} height={1} viewBox="0 -0.500 480 1" fill="none" style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        transform: "matrix(0,1,-1,0,416,0)",
                        transformOrigin: "0 0",
                        width: 480,
                        height: 1,
                        color: "var(--border-border-primary)",
                      }}>
                        <path d={"M 0 0 L 480 0 L 480 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                      </svg>
                      <svg width={480} height={1} viewBox="0 -0.500 480 1" fill="none" style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        transform: "matrix(0,1,-1,0,448,0)",
                        transformOrigin: "0 0",
                        width: 480,
                        height: 1,
                        color: "var(--border-border-primary)",
                      }}>
                        <path d={"M 0 0 L 480 0 L 480 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                      </svg>
                      <svg width={480} height={1} viewBox="0 -0.500 480 1" fill="none" style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        transform: "matrix(0,1,-1,0,480,0)",
                        transformOrigin: "0 0",
                        width: 480,
                        height: 1,
                        color: "var(--border-border-primary)",
                      }}>
                        <path d={"M 0 0 L 480 0 L 480 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                      </svg>
                    </div>
                    <div style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: 480,
                      overflow: "hidden",
                      boxShadow: "inset 0 0 0 1px var(--border-border-primary)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "calc(var(--spacing-4xl) * 1px)",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                    }}>
                      <svg height={1} viewBox="0 -0.500 480 1" fill="none" style={{
                        position: "relative",
                        height: 1,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        color: "var(--border-border-primary)",
                      }}>
                        <path d={"M 0 0 L 480 0 L 480 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                      </svg>
                      <svg height={1} viewBox="0 -0.500 480 1" fill="none" style={{
                        position: "relative",
                        height: 1,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        color: "var(--border-border-primary)",
                      }}>
                        <path d={"M 0 0 L 480 0 L 480 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                      </svg>
                      <svg height={1} viewBox="0 -0.500 480 1" fill="none" style={{
                        position: "relative",
                        height: 1,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        color: "var(--border-border-primary)",
                      }}>
                        <path d={"M 0 0 L 480 0 L 480 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                      </svg>
                      <svg height={1} viewBox="0 -0.500 480 1" fill="none" style={{
                        position: "relative",
                        height: 1,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        color: "var(--border-border-primary)",
                      }}>
                        <path d={"M 0 0 L 480 0 L 480 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                      </svg>
                      <svg height={1} viewBox="0 -0.500 480 1" fill="none" style={{
                        position: "relative",
                        height: 1,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        color: "var(--border-border-primary)",
                      }}>
                        <path d={"M 0 0 L 480 0 L 480 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                      </svg>
                      <svg height={1} viewBox="0 -0.500 480 1" fill="none" style={{
                        position: "relative",
                        height: 1,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        color: "var(--border-border-primary)",
                      }}>
                        <path d={"M 0 0 L 480 0 L 480 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                      </svg>
                      <svg height={1} viewBox="0 -0.500 480 1" fill="none" style={{
                        position: "relative",
                        height: 1,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        color: "var(--border-border-primary)",
                      }}>
                        <path d={"M 0 0 L 480 0 L 480 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                      </svg>
                      <svg height={1} viewBox="0 -0.500 480 1" fill="none" style={{
                        position: "relative",
                        height: 1,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        color: "var(--border-border-primary)",
                      }}>
                        <path d={"M 0 0 L 480 0 L 480 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                      </svg>
                      <svg height={1} viewBox="0 -0.500 480 1" fill="none" style={{
                        position: "relative",
                        height: 1,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        color: "var(--border-border-primary)",
                      }}>
                        <path d={"M 0 0 L 480 0 L 480 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                      </svg>
                      <svg height={1} viewBox="0 -0.500 480 1" fill="none" style={{
                        position: "relative",
                        height: 1,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        color: "var(--border-border-primary)",
                      }}>
                        <path d={"M 0 0 L 480 0 L 480 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                      </svg>
                      <svg height={1} viewBox="0 -0.500 480 1" fill="none" style={{
                        position: "relative",
                        height: 1,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        color: "var(--border-border-primary)",
                      }}>
                        <path d={"M 0 0 L 480 0 L 480 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                      </svg>
                      <svg height={1} viewBox="0 -0.500 480 1" fill="none" style={{
                        position: "relative",
                        height: 1,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        color: "var(--border-border-primary)",
                      }}>
                        <path d={"M 0 0 L 480 0 L 480 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                      </svg>
                      <svg height={1} viewBox="0 -0.500 480 1" fill="none" style={{
                        position: "relative",
                        height: 1,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        color: "var(--border-border-primary)",
                      }}>
                        <path d={"M 0 0 L 480 0 L 480 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                      </svg>
                      <svg height={1} viewBox="0 -0.500 480 1" fill="none" style={{
                        position: "relative",
                        height: 1,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        color: "var(--border-border-primary)",
                      }}>
                        <path d={"M 0 0 L 480 0 L 480 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                      </svg>
                      <svg height={1} viewBox="0 -0.500 480 1" fill="none" style={{
                        position: "relative",
                        height: 1,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        color: "var(--border-border-primary)",
                      }}>
                        <path d={"M 0 0 L 480 0 L 480 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                      </svg>
                      <svg height={1} viewBox="0 -0.500 480 1" fill="none" style={{
                        position: "relative",
                        height: 1,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        color: "var(--border-border-primary)",
                      }}>
                        <path d={"M 0 0 L 480 0 L 480 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: "calc(var(--spacing-4xl) * 1px)",
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <div style={{
                position: "relative",
                width: 172,
                height: 128,
                flexShrink: 0,
              }}>
                <div style={{
                  position: "absolute",
                  left: 22,
                  top: 0,
                  width: 128,
                  height: 128,
                  borderRadius: "50%",
                  backgroundColor: "var(--background-bg-primary)",
                }} />
                <div style={{
                  position: "absolute",
                  left: 14,
                  top: 14,
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  backgroundColor: "var(--background-bg-primary-hover)",
                }} />
                <div style={{
                  position: "absolute",
                  left: 9,
                  top: 104,
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  backgroundColor: "var(--background-bg-primary-hover)",
                }} />
                <div style={{
                  position: "absolute",
                  left: 152,
                  top: 28,
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  backgroundColor: "var(--primary-100)",
                }} />
                <div style={{
                  position: "absolute",
                  left: 144,
                  top: 4,
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor: "var(--primary-100)",
                }} />
                <div style={{
                  position: "absolute",
                  left: 16,
                  top: 16,
                  width: 140,
                  height: 80,
                  boxShadow: "0px 20px 24px -4px rgba(16,24,40,0.08), 0px 8px 8px -4px rgba(16,24,40,0.03)",
                }}>
                  <svg width={140} height={80} viewBox="0 0 140 80" fill="none" style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 140,
                    height: 80,
                    color: "var(--background-bg-primary)",
                  }}>
                    <path d={"M 72 0 C 58.534 0 46.622 6.654 39.373 16.854 C 37.006 16.295 34.538 16 32 16 C 14.327 16 0 30.327 0 48 C 0 65.673 14.327 80 32 80 L 112 80 C 127.464 80 140 67.464 140 52 C 140 36.536 127.464 24 112 24 C 110.902 24 109.818 24.063 108.752 24.186 C 102.623 9.96 88.475 0 72 0 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                  <div style={{
                    position: "absolute",
                    left: 0,
                    top: 16,
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    background: "linear-gradient(133.210deg, rgb(226,231,239) 14.20%, rgba(255,255,255,0) 44.29%)",
                  }} />
                  <div style={{
                    position: "absolute",
                    left: 32,
                    top: 0,
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    background: "linear-gradient(133.210deg, rgb(226,231,239) 14.20%, rgba(255,255,255,0) 44.29%)",
                  }} />
                  <div style={{
                    position: "absolute",
                    left: 84,
                    top: 24,
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: "linear-gradient(133.210deg, rgb(226,231,239) 14.20%, rgba(255,255,255,0) 44.29%)",
                  }} />
                  <div style={{
                    position: "absolute",
                    left: 35,
                    top: 22,
                    width: 70,
                    height: 70,
                    borderRadius: 100,
                    backgroundColor: "var(--success-600)",
                    display: "flex",
                    flexDirection: "row",
                    gap: 20,
                    padding: "20px 20px 20px 20px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "nowrap",
                    boxSizing: "border-box",
                  }}>
                    <div style={{
                      position: "relative",
                      borderRadius: 100,
                      backgroundColor: "var(--background-bg-secondary)",
                      boxShadow: "0px 20px 40px 0px rgba(0,0,0,0.3)",
                      display: "flex",
                      flexDirection: "row",
                      gap: 10,
                      padding: "10px 10px 10px 10px",
                      justifyContent: "center",
                      alignItems: "center",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
                      flexGrow: 1,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                          position: "relative",
                          width: 20,
                          height: 20,
                          flexShrink: 0,
                          color: "var(--icon-primary)",
                        }}>
                        <Check style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0", color: "var(--icon-primary)" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{
            position: "absolute",
            left: 40,
            top: 216,
            width: 399,
            display: "flex",
            flexDirection: "column",
            gap: 12,
            alignItems: "flex-start",
            flexWrap: "nowrap",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 32,
              textAlign: "center",
              lineHeight: "42px",
              color: "var(--text-primary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Well Done Your Password Change Successfully</span>
            <span style={{
              position: "relative",
              fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 18,
              textAlign: "center",
              lineHeight: "24px",
              color: "var(--text-secondary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Always remember the password for account at Interoly.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ResetYourPassword;
