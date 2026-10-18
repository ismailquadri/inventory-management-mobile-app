import { Avatar } from './Avatar.jsx';
import { Card } from './Card.jsx';
import { Card3 } from './Card3.jsx';
import { Card5 } from './Card5.jsx';
import { Component9 } from './Component9.jsx';
import { Header } from './Header.jsx';
import { NativeHomeIndicator } from './NativeHomeIndicator.jsx';
import { Radio10 } from './Radio10.jsx';
import { StatusBar } from './StatusBar.jsx';
import { TabMenu2 } from './TabMenu2.jsx';
import { TableComponent } from './TableComponent.jsx';
import { TopBar } from './TopBar.jsx';
import { TrendDownGraph } from './TrendDownGraph.jsx';
import { TrendUpGraph } from './TrendUpGraph.jsx';

// figma node: 9233:141070 Dashboard
export function Dashboard(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 2115,
      height: 2746,
      borderRadius: 2,
      backgroundColor: "var(--grayscale-700)",
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
        backgroundColor: "rgb(12,17,15)",
      }}>
        <Component9
          style={{
            position: "absolute",
            left: 12,
            top: 12,
            width: 248,
            height: 1000,
          }}
          property1={"sidebar [navigation] [1]"}
        />
        <TopBar style={{
            position: "absolute",
            left: 272,
            top: 12,
            width: 1156,
          }} />
        <div style={{
          position: "absolute",
          left: 268,
          top: 741,
          width: 1156,
          height: 271,
          overflow: "hidden",
          borderRadius: 12,
          backgroundColor: "rgb(44,52,47)",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }}>
          <div style={{
            position: "relative",
            height: 271,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              backgroundColor: "rgb(44,52,47)",
              borderTop: "1px solid rgb(74,89,80)",
              borderRight: "1px solid rgb(74,89,80)",
              borderBottom: "1px solid rgb(74,89,80)",
              borderLeft: "1px solid rgb(74,89,80)",
              display: "flex",
              flexDirection: "row",
              padding: "12px 16px 12px 16px",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "relative",
                fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 500,
                fontSize: 16,
                whiteSpace: "nowrap",
                lineHeight: "20px",
                color: "rgb(244,246,246)",
                flexShrink: 0,
              }}>Sales Order</span>
              <div style={{
                position: "relative",
                width: 132,
                overflow: "hidden",
                borderRadius: 8,
                backgroundColor: "rgb(44,52,47)",
                boxShadow: "inset 0 0 0 1px rgb(74,89,80)",
                display: "flex",
                flexDirection: "row",
                gap: 8,
                padding: "8px 8px 8px 8px",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  overflow: "hidden",
                  flexShrink: 0,
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
                <span style={{
                  position: "relative",
                  fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: 12,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  lineHeight: "16px",
                  color: "rgb(12,17,15)",
                  flexShrink: 0,
                }}>This Years</span>
                <div style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <div style={{
                    position: "absolute",
                    left: 3.333,
                    top: 5.667,
                    width: 9.333,
                    height: 4.667,
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
                width: 252,
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
                  text1={"Customers Name"}
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
                  label={"Anwar Hussen"}
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
                  label={"Tahsan Khan"}
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
                  label={"Hasan Khan"}
                  showDescription={false}
                  icon2={<Avatar type={"avatar 13"} status={"lg"} size={"40"} style={{ width: "100%", height: "100%" }} />}
                  state={"default"}
                  size={"xl"}
                  misc={"avatar - title"}
                />
              </div>
              <div style={{
                position: "relative",
                width: 102,
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
                  text1={"Packed"}
                  state={"active"}
                  size={"lg"}
                  misc={"top bar"}
                />
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "rgb(44,52,47)",
                  borderTop: "1px solid rgb(74,89,80)",
                  borderRight: "1px solid rgb(74,89,80)",
                  borderBottom: "1px solid rgb(74,89,80)",
                  borderLeft: "1px solid rgb(74,89,80)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
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
                    overflow: "hidden",
                    borderRadius: 6,
                    backgroundColor: "var(--badge-red)",
                    boxShadow: "0 0 0 1px var(--red-700), inset 0px -3px 2px 0px rgb(236,239,241)",
                    display: "flex",
                    flexDirection: "row",
                    gap: "calc(var(--padding-xs) * 1px)",
                    padding: "4px 12px 4px 12px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "nowrap",
                    boxSizing: "border-box",
                    paddingLeft: "calc(var(--padding-sm) * 1px)",
                    paddingTop: "calc(var(--padding-xxs) * 1px)",
                    paddingRight: "calc(var(--padding-sm) * 1px)",
                    paddingBottom: "calc(var(--padding-xxs) * 1px)",
                    flexShrink: 0,
                  }}>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 500,
                      fontSize: 14,
                      whiteSpace: "nowrap",
                      lineHeight: "20px",
                      letterSpacing: "0.060em",
                      color: "var(--badge-success)",
                      flexShrink: 0,
                    }}>4</span>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "rgb(44,52,47)",
                  borderTop: "1px solid rgb(74,89,80)",
                  borderRight: "1px solid rgb(74,89,80)",
                  borderBottom: "1px solid rgb(74,89,80)",
                  borderLeft: "1px solid rgb(74,89,80)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
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
                    overflow: "hidden",
                    borderRadius: 6,
                    backgroundColor: "var(--badge-red)",
                    boxShadow: "0 0 0 1px var(--red-700), inset 0px -3px 2px 0px rgb(236,239,241)",
                    display: "flex",
                    flexDirection: "row",
                    gap: "calc(var(--padding-xs) * 1px)",
                    padding: "4px 12px 4px 12px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "nowrap",
                    boxSizing: "border-box",
                    paddingLeft: "calc(var(--padding-sm) * 1px)",
                    paddingTop: "calc(var(--padding-xxs) * 1px)",
                    paddingRight: "calc(var(--padding-sm) * 1px)",
                    paddingBottom: "calc(var(--padding-xxs) * 1px)",
                    flexShrink: 0,
                  }}>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 500,
                      fontSize: 14,
                      whiteSpace: "nowrap",
                      lineHeight: "20px",
                      letterSpacing: "0.060em",
                      color: "var(--badge-pending)",
                      flexShrink: 0,
                    }}>3</span>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "rgb(44,52,47)",
                  borderTop: "1px solid rgb(74,89,80)",
                  borderRight: "1px solid rgb(74,89,80)",
                  borderBottom: "1px solid rgb(74,89,80)",
                  borderLeft: "1px solid rgb(74,89,80)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
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
                    overflow: "hidden",
                    borderRadius: 6,
                    backgroundColor: "var(--badge-red)",
                    boxShadow: "0 0 0 1px var(--red-700), inset 0px -3px 2px 0px rgb(236,239,241)",
                    display: "flex",
                    flexDirection: "row",
                    gap: "calc(var(--padding-xs) * 1px)",
                    padding: "4px 12px 4px 12px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "nowrap",
                    boxSizing: "border-box",
                    paddingLeft: "calc(var(--padding-sm) * 1px)",
                    paddingTop: "calc(var(--padding-xxs) * 1px)",
                    paddingRight: "calc(var(--padding-sm) * 1px)",
                    paddingBottom: "calc(var(--padding-xxs) * 1px)",
                    flexShrink: 0,
                  }}>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 500,
                      fontSize: 14,
                      whiteSpace: "nowrap",
                      lineHeight: "20px",
                      letterSpacing: "0.060em",
                      color: "var(--badge-verified)",
                      flexShrink: 0,
                    }}>2</span>
                  </div>
                </div>
              </div>
              <div style={{
                position: "relative",
                width: 134,
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
                  text1={"Date"}
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
                  label={"Feb 01,2025"}
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
                  label={"Feb 01,2025"}
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
                  label={"Feb 01,2025"}
                  showDescription={false}
                  state={"default"}
                  size={"xl"}
                  misc={"avatar - title"}
                />
              </div>
              <div style={{
                position: "relative",
                width: 111,
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
                  text1={"Shipped"}
                  state={"active"}
                  size={"lg"}
                  misc={"top bar"}
                />
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "rgb(44,52,47)",
                  borderTop: "1px solid rgb(74,89,80)",
                  borderRight: "1px solid rgb(74,89,80)",
                  borderBottom: "1px solid rgb(74,89,80)",
                  borderLeft: "1px solid rgb(74,89,80)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
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
                    overflow: "hidden",
                    borderRadius: 6,
                    backgroundColor: "var(--badge-red)",
                    boxShadow: "0 0 0 1px var(--red-700)",
                    display: "flex",
                    flexDirection: "row",
                    gap: "calc(var(--padding-xs) * 1px)",
                    padding: "4px 12px 4px 12px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "nowrap",
                    boxSizing: "border-box",
                    paddingLeft: "calc(var(--padding-sm) * 1px)",
                    paddingTop: "calc(var(--padding-xxs) * 1px)",
                    paddingRight: "calc(var(--padding-sm) * 1px)",
                    paddingBottom: "calc(var(--padding-xxs) * 1px)",
                    flexShrink: 0,
                  }}>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 500,
                      fontSize: 14,
                      whiteSpace: "nowrap",
                      lineHeight: "20px",
                      letterSpacing: "0.060em",
                      color: "var(--badge-success)",
                      flexShrink: 0,
                    }}>6</span>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "rgb(44,52,47)",
                  borderTop: "1px solid rgb(74,89,80)",
                  borderRight: "1px solid rgb(74,89,80)",
                  borderBottom: "1px solid rgb(74,89,80)",
                  borderLeft: "1px solid rgb(74,89,80)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
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
                    overflow: "hidden",
                    borderRadius: 6,
                    backgroundColor: "var(--badge-red)",
                    boxShadow: "0 0 0 1px var(--red-700)",
                    display: "flex",
                    flexDirection: "row",
                    gap: "calc(var(--padding-xs) * 1px)",
                    padding: "4px 12px 4px 12px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "nowrap",
                    boxSizing: "border-box",
                    paddingLeft: "calc(var(--padding-sm) * 1px)",
                    paddingTop: "calc(var(--padding-xxs) * 1px)",
                    paddingRight: "calc(var(--padding-sm) * 1px)",
                    paddingBottom: "calc(var(--padding-xxs) * 1px)",
                    flexShrink: 0,
                  }}>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 500,
                      fontSize: 14,
                      whiteSpace: "nowrap",
                      lineHeight: "20px",
                      letterSpacing: "0.060em",
                      color: "var(--badge-purple)",
                      flexShrink: 0,
                    }}>9</span>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "rgb(44,52,47)",
                  borderTop: "1px solid rgb(74,89,80)",
                  borderRight: "1px solid rgb(74,89,80)",
                  borderBottom: "1px solid rgb(74,89,80)",
                  borderLeft: "1px solid rgb(74,89,80)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
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
                    overflow: "hidden",
                    borderRadius: 6,
                    backgroundColor: "var(--badge-red)",
                    boxShadow: "0 0 0 1px var(--red-700)",
                    display: "flex",
                    flexDirection: "row",
                    gap: "calc(var(--padding-xs) * 1px)",
                    padding: "4px 12px 4px 12px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "nowrap",
                    boxSizing: "border-box",
                    paddingLeft: "calc(var(--padding-sm) * 1px)",
                    paddingTop: "calc(var(--padding-xxs) * 1px)",
                    paddingRight: "calc(var(--padding-sm) * 1px)",
                    paddingBottom: "calc(var(--padding-xxs) * 1px)",
                    flexShrink: 0,
                  }}>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 500,
                      fontSize: 14,
                      whiteSpace: "nowrap",
                      lineHeight: "20px",
                      letterSpacing: "0.060em",
                      color: "var(--badge-red)",
                      flexShrink: 0,
                    }}>3</span>
                  </div>
                </div>
              </div>
              <div style={{
                position: "relative",
                width: 146,
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
                  text1={"Order Status"}
                  state={"active"}
                  size={"lg"}
                  misc={"top bar"}
                />
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "rgb(44,52,47)",
                  borderTop: "1px solid rgb(74,89,80)",
                  borderRight: "1px solid rgb(74,89,80)",
                  borderBottom: "1px solid rgb(74,89,80)",
                  borderLeft: "1px solid rgb(74,89,80)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: 6,
                    backgroundColor: "var(--badge-red)",
                    boxShadow: "0 0 0 1px var(--red-700)",
                    display: "flex",
                    flexDirection: "row",
                    gap: "calc(var(--padding-xs) * 1px)",
                    padding: "4px 12px 4px 12px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "nowrap",
                    boxSizing: "border-box",
                    paddingLeft: "calc(var(--padding-sm) * 1px)",
                    paddingTop: "calc(var(--padding-xxs) * 1px)",
                    paddingRight: "calc(var(--padding-sm) * 1px)",
                    paddingBottom: "calc(var(--padding-xxs) * 1px)",
                    flexShrink: 0,
                  }}>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 500,
                      fontSize: 14,
                      whiteSpace: "nowrap",
                      lineHeight: "20px",
                      letterSpacing: "0.060em",
                      color: "var(--badge-success)",
                      flexShrink: 0,
                    }}>Confirmed</span>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "rgb(44,52,47)",
                  borderTop: "1px solid rgb(74,89,80)",
                  borderRight: "1px solid rgb(74,89,80)",
                  borderBottom: "1px solid rgb(74,89,80)",
                  borderLeft: "1px solid rgb(74,89,80)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    width: 91,
                    overflow: "hidden",
                    borderRadius: 6,
                    backgroundColor: "var(--badge-red)",
                    boxShadow: "0 0 0 1px var(--red-700)",
                    display: "flex",
                    flexDirection: "row",
                    gap: 8,
                    padding: "4px 12px 4px 12px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "nowrap",
                    boxSizing: "border-box",
                    paddingLeft: "calc(var(--padding-lg) * 1px)",
                    paddingRight: "calc(var(--padding-lg) * 1px)",
                    flexShrink: 0,
                  }}>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 500,
                      fontSize: 14,
                      whiteSpace: "nowrap",
                      lineHeight: "20px",
                      letterSpacing: "0.060em",
                      color: "var(--badge-pending)",
                      flexShrink: 0,
                    }}>Pending</span>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "rgb(44,52,47)",
                  borderTop: "1px solid rgb(74,89,80)",
                  borderRight: "1px solid rgb(74,89,80)",
                  borderBottom: "1px solid rgb(74,89,80)",
                  borderLeft: "1px solid rgb(74,89,80)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    width: 91,
                    overflow: "hidden",
                    borderRadius: 6,
                    backgroundColor: "var(--badge-red)",
                    boxShadow: "0 0 0 1px var(--red-700)",
                    display: "flex",
                    flexDirection: "row",
                    gap: 8,
                    padding: "4px 12px 4px 12px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "nowrap",
                    boxSizing: "border-box",
                    paddingLeft: "calc(var(--padding-xl) * 1px)",
                    paddingRight: "calc(var(--padding-xl) * 1px)",
                    flexShrink: 0,
                  }}>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 500,
                      fontSize: 14,
                      whiteSpace: "nowrap",
                      lineHeight: "20px",
                      letterSpacing: "0.060em",
                      color: "var(--badge-red)",
                      flexShrink: 0,
                    }}>Cancel</span>
                  </div>
                </div>
              </div>
              <div style={{
                position: "relative",
                width: 134,
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
                  text1={"Amount"}
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
                  label={"$34.00"}
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
                  label={"$134.00"}
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
                  label={"$38.00"}
                  showDescription={false}
                  state={"default"}
                  size={"xl"}
                  misc={"avatar - title"}
                />
              </div>
              <div style={{
                position: "relative",
                width: 137,
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
                  text1={"Invoiced"}
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
                  label={"INV-000003"}
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
                  label={"INV-000004"}
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
                  label={"INV-000005"}
                  showDescription={false}
                  state={"default"}
                  size={"xl"}
                  misc={"avatar - title"}
                />
              </div>
              <div style={{
                position: "relative",
                width: 140,
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
                  text1={"Action"}
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
                  showDescription={false}
                  label={"INV-000003"}
                  state={"default"}
                  size={"xl"}
                  misc={"icon button"}
                />
                <TableComponent
                  style={{
                    position: "relative",
                    height: 64,
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  showDescription={false}
                  label={"INV-000003"}
                  state={"default"}
                  size={"xl"}
                  misc={"icon button"}
                />
                <TableComponent
                  style={{
                    position: "relative",
                    height: 64,
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  showDescription={false}
                  label={"INV-000003"}
                  state={"default"}
                  size={"xl"}
                  misc={"icon button"}
                />
              </div>
            </div>
          </div>
        </div>
        <Card style={{
            position: "absolute",
            left: 272,
            top: 92,
            width: 574,
          }} />
        <div style={{
          position: "absolute",
          left: 862,
          top: 92,
          overflow: "hidden",
          borderRadius: 12,
          backgroundColor: "rgb(44,52,47)",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "0px 0px 16px 0px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            width: 275,
            display: "flex",
            flexDirection: "column",
            gap: 15,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              backgroundColor: "var(--background-bg-secondary)",
              borderTop: "1px solid var(--border-border-primary)",
              borderRight: "1px solid var(--border-border-primary)",
              borderBottom: "1px solid var(--border-border-primary)",
              borderLeft: "1px solid var(--border-border-primary)",
              display: "flex",
              flexDirection: "row",
              padding: "12px 16px 12px 16px",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
              alignSelf: "stretch",
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
              }}>Top Sellings Category</span>
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
                padding: "8px 8px 8px 8px",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <svg width={2.667} height={2.667} viewBox="0 0 2.667 2.667" fill="none" style={{
                    position: "absolute",
                    left: 6.667,
                    top: 11.333,
                    width: 2.667,
                    height: 2.667,
                    color: "var(--text-secondary)",
                  }}>
                    <path d={"M 1.333 0 C 0.598 0 0 0.598 0 1.333 C 0 2.069 0.598 2.667 1.333 2.667 C 2.069 2.667 2.667 2.069 2.667 1.333 C 2.667 0.598 2.069 0 1.333 0 Z"} fill="currentColor" fillRule="evenodd" />
                  </svg>
                  <svg width={2.667} height={2.667} viewBox="0 0 2.667 2.667" fill="none" style={{
                    position: "absolute",
                    left: 6.667,
                    top: 2,
                    width: 2.667,
                    height: 2.667,
                    color: "var(--text-secondary)",
                  }}>
                    <path d={"M 1.333 2.667 C 2.069 2.667 2.667 2.069 2.667 1.333 C 2.667 0.598 2.069 0 1.333 0 C 0.598 0 0 0.598 0 1.333 C 0 2.069 0.598 2.667 1.333 2.667 Z"} fill="currentColor" fillRule="evenodd" />
                  </svg>
                  <svg width={2.667} height={2.667} viewBox="0 0 2.667 2.667" fill="none" style={{
                    position: "absolute",
                    left: 6.667,
                    top: 6.667,
                    width: 2.667,
                    height: 2.667,
                    color: "var(--text-secondary)",
                  }}>
                    <path d={"M 1.333 0 C 0.598 0 0 0.598 0 1.333 C 0 2.069 0.598 2.667 1.333 2.667 C 2.069 2.667 2.667 2.069 2.667 1.333 C 2.667 0.598 2.069 0 1.333 0 Z"} fill="currentColor" fillRule="evenodd" />
                  </svg>
                </div>
                <div style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <svg width={2.667} height={2.667} viewBox="0 0 2.667 2.667" fill="none" style={{
                    position: "absolute",
                    left: 2,
                    top: 6.667,
                    width: 2.667,
                    height: 2.667,
                    color: "var(--icon-secondary)",
                  }}>
                    <path d={"M 1.333 0 C 0.598 0 0 0.598 0 1.333 C 0 2.069 0.598 2.667 1.333 2.667 C 2.069 2.667 2.667 2.069 2.667 1.333 C 2.667 0.598 2.069 0 1.333 0 Z"} fill="currentColor" fillRule="evenodd" />
                  </svg>
                  <svg width={2.667} height={2.667} viewBox="0 0 2.667 2.667" fill="none" style={{
                    position: "absolute",
                    left: 6.667,
                    top: 6.667,
                    width: 2.667,
                    height: 2.667,
                    color: "var(--icon-secondary)",
                  }}>
                    <path d={"M 1.333 0 C 0.598 0 0 0.598 0 1.333 C 0 2.069 0.598 2.667 1.333 2.667 C 2.069 2.667 2.667 2.069 2.667 1.333 C 2.667 0.598 2.069 0 1.333 0 Z"} fill="currentColor" fillRule="evenodd" />
                  </svg>
                  <svg width={2.667} height={2.667} viewBox="0 0 2.667 2.667" fill="none" style={{
                    position: "absolute",
                    left: 11.333,
                    top: 6.667,
                    width: 2.667,
                    height: 2.667,
                    color: "var(--icon-secondary)",
                  }}>
                    <path d={"M 1.333 0 C 0.598 0 0 0.598 0 1.333 C 0 2.069 0.598 2.667 1.333 2.667 C 2.069 2.667 2.667 2.069 2.667 1.333 C 2.667 0.598 2.069 0 1.333 0 Z"} fill="currentColor" fillRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            <div style={{
              position: "relative",
              width: 243,
              display: "flex",
              flexDirection: "column",
              gap: 12,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 6,
                backgroundColor: "var(--background-bg-primary)",
                display: "flex",
                flexDirection: "column",
                gap: 10,
                padding: "4px 4px 4px 4px",
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
                  gap: 4,
                  alignItems: "center",
                  flexWrap: "nowrap",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <TabMenu2
                    style={{ position: "relative", flexShrink: 0 }}
                    leftIcon={false}
                    rightIcon={false}
                    text1={"Week"}
                    state={"default"}
                  />
                  <TabMenu2
                    style={{ position: "relative", width: 67, flexShrink: 0 }}
                    leftIcon={false}
                    rightIcon={false}
                    text1={"Month"}
                    state={"active"}
                  />
                  <TabMenu2
                    style={{ position: "relative", width: 73, flexShrink: 0 }}
                    leftIcon={false}
                    rightIcon={false}
                    text1={"Year"}
                    state={"default"}
                  />
                </div>
              </div>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: 14,
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
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
                  <div style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <span style={{
                      position: "relative",
                      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 400,
                      fontSize: 12,
                      whiteSpace: "nowrap",
                      lineHeight: "100%",
                      letterSpacing: "-0.011em",
                      color: "var(--text-primary)",
                      flexShrink: 0,
                    }}>Ergonomic Office Chai</span>
                    <span style={{
                      position: "relative",
                      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 500,
                      fontSize: 12,
                      whiteSpace: "nowrap",
                      lineHeight: "100%",
                      letterSpacing: "-0.011em",
                      color: "var(--background-bg-color)",
                      flexShrink: 0,
                    }}>40%</span>
                  </div>
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
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--border-border-color)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--border-border-color)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--border-border-color)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--border-border-color)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--border-border-color)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--border-border-color)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--border-border-color)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--border-border-color)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--border-border-color)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--border-border-color)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--border-border-color)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--border-border-color)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--border-border-color)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--border-border-color)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--border-border-color)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--border-border-focused)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--border-border-focused)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--border-border-focused)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--border-border-focused)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--border-border-focused)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--border-border-focused)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--border-border-focused)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--border-border-focused)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--border-border-focused)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--border-border-focused)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--border-border-focused)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--border-border-focused)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--border-border-focused)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--border-border-focused)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--border-border-focused)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 3,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--border-border-focused)",
                      flexShrink: 0,
                    }} />
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
                  <div style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <span style={{
                      position: "relative",
                      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 400,
                      fontSize: 12,
                      whiteSpace: "nowrap",
                      lineHeight: "100%",
                      letterSpacing: "-0.011em",
                      color: "var(--text-primary)",
                      flexShrink: 0,
                    }}>Minimalist Leather Wallet</span>
                    <span style={{
                      position: "relative",
                      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 500,
                      fontSize: 12,
                      whiteSpace: "nowrap",
                      lineHeight: "100%",
                      letterSpacing: "-0.011em",
                      color: "var(--badge-pending)",
                      flexShrink: 0,
                    }}>15%</span>
                  </div>
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
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--badge-pending)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--badge-pending)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--badge-pending)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--badge-pending)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--badge-pending)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--badge-pending)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--badge-pending)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--badge-pending)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--badge-pending)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--badge-pending)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--badge-pending)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "rgb(102,83,14)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "rgb(102,83,14)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "rgb(102,83,14)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "rgb(102,83,14)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "rgb(102,83,14)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "rgb(102,83,14)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "rgb(102,83,14)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "rgb(102,83,14)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "rgb(102,83,14)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "rgb(102,83,14)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "rgb(102,83,14)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "rgb(102,83,14)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "rgb(102,83,14)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "rgb(102,83,14)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "rgb(102,83,14)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "rgb(102,83,14)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "rgb(102,83,14)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "rgb(102,83,14)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "rgb(102,83,14)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 3,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "rgb(102,83,14)",
                      flexShrink: 0,
                    }} />
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
                  <div style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <span style={{
                      position: "relative",
                      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 400,
                      fontSize: 12,
                      whiteSpace: "nowrap",
                      lineHeight: "100%",
                      letterSpacing: "-0.011em",
                      color: "var(--text-primary)",
                      flexShrink: 0,
                    }}>Smartwatch with Fitness Tracking</span>
                    <span style={{
                      position: "relative",
                      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 500,
                      fontSize: 12,
                      whiteSpace: "nowrap",
                      lineHeight: "100%",
                      letterSpacing: "-0.011em",
                      color: "var(--badge-verified)",
                      flexShrink: 0,
                    }}>45%</span>
                  </div>
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
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--badge-verified)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--badge-verified)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--badge-verified)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--badge-verified)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--badge-verified)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--badge-verified)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--badge-verified)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--badge-verified)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--badge-verified)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--badge-verified)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--badge-verified)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--badge-verified)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--badge-verified)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--badge-verified)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--badge-verified)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--badge-verified)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--badge-verified)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--badge-verified)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--badge-verified)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--badge-verified)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "rgb(193,215,250)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "rgb(193,215,250)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "rgb(193,215,250)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "rgb(193,215,250)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "rgb(193,215,250)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "rgb(193,215,250)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "rgb(193,215,250)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "rgb(193,215,250)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "rgb(193,215,250)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "rgb(193,215,250)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 3,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "rgb(193,215,250)",
                      flexShrink: 0,
                    }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Card3 style={{ position: "absolute", left: 1153, top: 92 }} />
        <div style={{
          position: "absolute",
          left: 272,
          top: 401,
          width: 574,
          overflow: "hidden",
          borderRadius: 12,
          backgroundColor: "rgb(44,52,47)",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "0px 0px 16px 0px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
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
              backgroundColor: "var(--background-bg-secondary)",
              borderTop: "1px solid var(--border-border-primary)",
              borderRight: "1px solid var(--border-border-primary)",
              borderBottom: "1px solid var(--border-border-primary)",
              borderLeft: "1px solid var(--border-border-primary)",
              display: "flex",
              flexDirection: "row",
              padding: "12px 16px 12px 16px",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
              alignSelf: "stretch",
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
              }}>Total Product Details</span>
              <div style={{
                position: "relative",
                width: 132,
                overflow: "hidden",
                borderRadius: 8,
                backgroundColor: "var(--background-bg-secondary)",
                boxShadow: "inset 0 0 0 1px var(--border-border-primary)",
                display: "flex",
                flexDirection: "row",
                gap: 8,
                padding: "8px 8px 8px 8px",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  overflow: "hidden",
                  flexShrink: 0,
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
                <span style={{
                  position: "relative",
                  fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: 12,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  lineHeight: "16px",
                  color: "rgb(12,17,15)",
                  flexShrink: 0,
                }}>This Years</span>
                <div style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <div style={{
                    position: "absolute",
                    left: 3.333,
                    top: 5.667,
                    width: 9.333,
                    height: 4.667,
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
            <div style={{
              position: "relative",
              width: 542,
              display: "flex",
              flexDirection: "column",
              gap: 23,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
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
                <div style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "row",
                  gap: 6,
                  alignItems: "center",
                  flexWrap: "nowrap",
                  flexShrink: 0,
                }}>
                  <Radio10
                    style={{
                      position: "relative",
                      width: 20,
                      height: 20,
                      flexShrink: 0,
                    }}
                    state={"default"}
                    active={"on"}
                  />
                  <span style={{
                    position: "relative",
                    fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 16,
                    whiteSpace: "nowrap",
                    lineHeight: "20px",
                    color: "var(--text-primary)",
                    flexShrink: 0,
                  }}>Total Stock Items</span>
                </div>
                <div style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "row",
                  gap: 6,
                  alignItems: "center",
                  flexWrap: "nowrap",
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
                      left: 2,
                      top: 2,
                      width: 16,
                      height: 16,
                      borderRadius: 96,
                      backgroundColor: "var(--purple-600)",
                      boxShadow: "inset 0px 2px 2px 0px rgba(22,38,100,0.32)",
                    }} />
                    <div style={{
                      position: "absolute",
                      left: 6,
                      top: 6,
                      width: 8,
                      height: 8,
                      borderRadius: 96,
                      backgroundColor: "var(--general-white)",
                      boxShadow: "inset 0 0 0 1px var(--general-white), inset 0px -2px 3px 0px rgb(207,209,211), 0px 2px 2px 0px rgba(27,28,29,0.12)",
                    }} />
                  </div>
                  <span style={{
                    position: "relative",
                    fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 14,
                    whiteSpace: "nowrap",
                    lineHeight: "18px",
                    color: "var(--text-primary)",
                    flexShrink: 0,
                  }}>High Stock Items</span>
                </div>
                <div style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "row",
                  gap: 6,
                  alignItems: "center",
                  flexWrap: "nowrap",
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
                      left: 2,
                      top: 2,
                      width: 16,
                      height: 16,
                      borderRadius: 96,
                      backgroundColor: "var(--blue-600)",
                      boxShadow: "inset 0px 2px 2px 0px rgba(22,38,100,0.32)",
                    }} />
                    <div style={{
                      position: "absolute",
                      left: 6,
                      top: 6,
                      width: 8,
                      height: 8,
                      borderRadius: 96,
                      backgroundColor: "var(--general-white)",
                      boxShadow: "inset 0 0 0 1px var(--general-white), inset 0px -2px 3px 0px rgb(207,209,211), 0px 2px 2px 0px rgba(27,28,29,0.12)",
                    }} />
                  </div>
                  <span style={{
                    position: "relative",
                    fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 14,
                    whiteSpace: "nowrap",
                    lineHeight: "18px",
                    color: "var(--text-primary)",
                    flexShrink: 0,
                  }}>Low Stock Items</span>
                </div>
              </div>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: 15,
                alignItems: "flex-end",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
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
                    width: 18,
                    display: "flex",
                    flexDirection: "column",
                    gap: 20,
                    alignItems: "flex-start",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                  }}>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 400,
                      fontSize: 14,
                      lineHeight: "18px",
                      color: "var(--text-secondary)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>4 K</span>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 400,
                      fontSize: 14,
                      lineHeight: "18px",
                      color: "var(--text-secondary)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>3 K</span>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 400,
                      fontSize: 14,
                      lineHeight: "18px",
                      color: "var(--text-secondary)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>2 K</span>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 400,
                      fontSize: 14,
                      lineHeight: "18px",
                      color: "var(--text-secondary)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>1 K</span>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 400,
                      fontSize: 14,
                      lineHeight: "18px",
                      color: "var(--text-secondary)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>0 K</span>
                  </div>
                  <div style={{
                    position: "relative",
                    width: 513,
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    alignItems: "flex-start",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: 36,
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 1,
                        outline: "1px dashed var(--border-border-primary)",
                        outlineOffset: "-1px",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }} />
                      <div style={{
                        position: "relative",
                        height: 1,
                        outline: "1px dashed var(--border-border-primary)",
                        outlineOffset: "-1px",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }} />
                      <div style={{
                        position: "relative",
                        height: 1,
                        outline: "1px dashed var(--border-border-primary)",
                        outlineOffset: "-1px",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }} />
                      <div style={{
                        position: "relative",
                        height: 1,
                        outline: "1px dashed var(--border-border-primary)",
                        outlineOffset: "-1px",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }} />
                      <div style={{
                        position: "relative",
                        height: 1,
                        outline: "1px dashed var(--border-border-primary)",
                        outlineOffset: "-1px",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }} />
                    </div>
                    <div style={{
                      position: "absolute",
                      left: 0,
                      top: -5,
                      width: 513,
                      display: "flex",
                      flexDirection: "row",
                      gap: 9,
                      alignItems: "flex-end",
                      flexWrap: "nowrap",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 130,
                        display: "flex",
                        flexDirection: "row",
                        gap: 2,
                        alignItems: "flex-end",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                      }}>
                        <div style={{
                          position: "relative",
                          width: 10,
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexShrink: 0,
                          alignSelf: "stretch",
                        }}>
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(204,235,224)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(204,235,224)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(204,235,224)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(204,235,224)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(204,235,224)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(204,235,224)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(204,235,224)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(204,235,224)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(204,235,224)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(204,235,224)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(204,235,224)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                        </div>
                        <div style={{
                          position: "relative",
                          width: 10,
                          height: 82,
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                          justifyContent: "flex-end",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexShrink: 0,
                        }}>
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(193,215,250)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(193,215,250)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(193,215,250)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(193,215,250)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(193,215,250)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(193,215,250)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(193,215,250)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                        </div>
                        <div style={{
                          position: "relative",
                          width: 10,
                          height: 46,
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                          justifyContent: "flex-end",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexShrink: 0,
                        }}>
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(221,208,255)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(221,208,255)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(221,208,255)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(221,208,255)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                        </div>
                      </div>
                      <div style={{
                        position: "relative",
                        height: 130,
                        display: "flex",
                        flexDirection: "row",
                        gap: 2,
                        alignItems: "flex-end",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                      }}>
                        <div style={{
                          position: "relative",
                          width: 10,
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                          justifyContent: "flex-end",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexShrink: 0,
                          alignSelf: "stretch",
                        }}>
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                        </div>
                        <div style={{
                          position: "relative",
                          width: 10,
                          height: 82,
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                          justifyContent: "flex-end",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexShrink: 0,
                        }}>
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                        </div>
                        <div style={{
                          position: "relative",
                          width: 10,
                          height: 46,
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                          justifyContent: "flex-end",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexShrink: 0,
                        }}>
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                        </div>
                      </div>
                      <div style={{
                        position: "relative",
                        height: 130,
                        display: "flex",
                        flexDirection: "row",
                        gap: 2,
                        alignItems: "flex-end",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                      }}>
                        <div style={{
                          position: "relative",
                          width: 10,
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                          justifyContent: "flex-end",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexShrink: 0,
                          alignSelf: "stretch",
                        }}>
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                        </div>
                        <div style={{
                          position: "relative",
                          width: 10,
                          height: 82,
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                          justifyContent: "flex-end",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexShrink: 0,
                        }}>
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                        </div>
                        <div style={{
                          position: "relative",
                          width: 10,
                          height: 46,
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                          justifyContent: "flex-end",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexShrink: 0,
                        }}>
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                        </div>
                      </div>
                      <div style={{
                        position: "relative",
                        height: 130,
                        display: "flex",
                        flexDirection: "row",
                        gap: 2,
                        alignItems: "flex-end",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                      }}>
                        <div style={{
                          position: "relative",
                          width: 10,
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                          justifyContent: "flex-end",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexShrink: 0,
                          alignSelf: "stretch",
                        }}>
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                        </div>
                        <div style={{
                          position: "relative",
                          width: 10,
                          height: 82,
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                          justifyContent: "flex-end",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexShrink: 0,
                        }}>
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                        </div>
                        <div style={{
                          position: "relative",
                          width: 10,
                          height: 46,
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                          justifyContent: "flex-end",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexShrink: 0,
                        }}>
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                        </div>
                      </div>
                      <div style={{
                        position: "relative",
                        height: 130,
                        display: "flex",
                        flexDirection: "row",
                        gap: 2,
                        alignItems: "flex-end",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                      }}>
                        <div style={{
                          position: "relative",
                          width: 10,
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                          justifyContent: "flex-end",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexShrink: 0,
                          alignSelf: "stretch",
                        }}>
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                        </div>
                        <div style={{
                          position: "relative",
                          width: 10,
                          height: 82,
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                          justifyContent: "flex-end",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexShrink: 0,
                        }}>
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                        </div>
                        <div style={{
                          position: "relative",
                          width: 10,
                          height: 46,
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                          justifyContent: "flex-end",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexShrink: 0,
                        }}>
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                        </div>
                      </div>
                      <div style={{
                        position: "relative",
                        height: 148,
                        display: "flex",
                        flexDirection: "row",
                        gap: 2,
                        alignItems: "flex-end",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                      }}>
                        <div style={{
                          position: "relative",
                          width: 10,
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                          justifyContent: "flex-end",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexShrink: 0,
                          alignSelf: "stretch",
                        }}>
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                        </div>
                        <div style={{
                          position: "relative",
                          width: 10,
                          height: 130,
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                          justifyContent: "flex-end",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexShrink: 0,
                        }}>
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                        </div>
                        <div style={{
                          position: "relative",
                          width: 10,
                          height: 94,
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                          justifyContent: "flex-end",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexShrink: 0,
                        }}>
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                        </div>
                      </div>
                      <div style={{
                        position: "relative",
                        height: 148,
                        display: "flex",
                        flexDirection: "row",
                        gap: 2,
                        alignItems: "flex-end",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                      }}>
                        <div style={{
                          position: "relative",
                          width: 10,
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                          justifyContent: "flex-end",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexShrink: 0,
                          alignSelf: "stretch",
                        }}>
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-600)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-600)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-600)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-600)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-600)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                        </div>
                        <div style={{
                          position: "relative",
                          width: 10,
                          height: 130,
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                          justifyContent: "flex-end",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexShrink: 0,
                        }}>
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--blue-600)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--blue-600)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                        </div>
                        <div style={{
                          position: "relative",
                          width: 10,
                          height: 130,
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                          justifyContent: "flex-end",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexShrink: 0,
                        }}>
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-600)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-600)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-600)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-600)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-600)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-600)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-600)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-600)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-600)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-600)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                        </div>
                      </div>
                      <div style={{
                        position: "relative",
                        height: 148,
                        display: "flex",
                        flexDirection: "row",
                        gap: 2,
                        alignItems: "flex-end",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                      }}>
                        <div style={{
                          position: "relative",
                          width: 10,
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                          justifyContent: "flex-end",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexShrink: 0,
                          alignSelf: "stretch",
                        }}>
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                        </div>
                        <div style={{
                          position: "relative",
                          width: 10,
                          height: 130,
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                          justifyContent: "flex-end",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexShrink: 0,
                        }}>
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                        </div>
                        <div style={{
                          position: "relative",
                          width: 10,
                          height: 130,
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                          justifyContent: "flex-end",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexShrink: 0,
                        }}>
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                        </div>
                      </div>
                      <div style={{
                        position: "relative",
                        height: 148,
                        display: "flex",
                        flexDirection: "row",
                        gap: 2,
                        alignItems: "flex-end",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                      }}>
                        <div style={{
                          position: "relative",
                          width: 10,
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                          justifyContent: "flex-end",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexShrink: 0,
                          alignSelf: "stretch",
                        }}>
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                        </div>
                        <div style={{
                          position: "relative",
                          width: 10,
                          height: 130,
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                          justifyContent: "flex-end",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexShrink: 0,
                        }}>
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                        </div>
                        <div style={{
                          position: "relative",
                          width: 10,
                          height: 130,
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                          justifyContent: "flex-end",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexShrink: 0,
                        }}>
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                        </div>
                      </div>
                      <div style={{
                        position: "relative",
                        height: 154,
                        display: "flex",
                        flexDirection: "row",
                        gap: 2,
                        alignItems: "flex-end",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                      }}>
                        <div style={{
                          position: "relative",
                          width: 10,
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                          justifyContent: "flex-end",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexShrink: 0,
                          alignSelf: "stretch",
                        }}>
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                        </div>
                        <div style={{
                          position: "relative",
                          width: 10,
                          height: 130,
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                          justifyContent: "flex-end",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexShrink: 0,
                        }}>
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                        </div>
                        <div style={{
                          position: "relative",
                          width: 10,
                          height: 130,
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                          justifyContent: "flex-end",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexShrink: 0,
                        }}>
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                        </div>
                      </div>
                      <div style={{
                        position: "relative",
                        height: 148,
                        display: "flex",
                        flexDirection: "row",
                        gap: 2,
                        alignItems: "flex-end",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                      }}>
                        <div style={{
                          position: "relative",
                          width: 10,
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                          justifyContent: "flex-end",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexShrink: 0,
                          alignSelf: "stretch",
                        }}>
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                        </div>
                        <div style={{
                          position: "relative",
                          width: 10,
                          height: 130,
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                          justifyContent: "flex-end",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexShrink: 0,
                        }}>
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                        </div>
                        <div style={{
                          position: "relative",
                          width: 10,
                          height: 130,
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                          justifyContent: "flex-end",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexShrink: 0,
                        }}>
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                        </div>
                      </div>
                      <div style={{
                        position: "relative",
                        height: 148,
                        display: "flex",
                        flexDirection: "row",
                        gap: 2,
                        alignItems: "flex-end",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                      }}>
                        <div style={{
                          position: "relative",
                          width: 10,
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                          justifyContent: "flex-end",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexShrink: 0,
                          alignSelf: "stretch",
                        }}>
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                        </div>
                        <div style={{
                          position: "relative",
                          width: 10,
                          height: 130,
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                          justifyContent: "flex-end",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexShrink: 0,
                        }}>
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                        </div>
                        <div style={{
                          position: "relative",
                          width: 10,
                          height: 130,
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                          justifyContent: "flex-end",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexShrink: 0,
                        }}>
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  width: 513,
                  display: "flex",
                  flexDirection: "row",
                  gap: 21,
                  alignItems: "center",
                  flexWrap: "nowrap",
                  flexShrink: 0,
                }}>
                  <span style={{
                    position: "relative",
                    fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 14,
                    whiteSpace: "nowrap",
                    lineHeight: "18px",
                    color: "var(--text-secondary)",
                    flexShrink: 0,
                  }}>Jan</span>
                  <span style={{
                    position: "relative",
                    fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 14,
                    whiteSpace: "nowrap",
                    lineHeight: "18px",
                    color: "var(--text-secondary)",
                    flexShrink: 0,
                  }}>Feb</span>
                  <span style={{
                    position: "relative",
                    fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 14,
                    whiteSpace: "nowrap",
                    lineHeight: "18px",
                    color: "var(--text-secondary)",
                    flexShrink: 0,
                  }}>Mar</span>
                  <span style={{
                    position: "relative",
                    fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 14,
                    whiteSpace: "nowrap",
                    lineHeight: "18px",
                    color: "var(--text-secondary)",
                    flexShrink: 0,
                  }}>Apr</span>
                  <span style={{
                    position: "relative",
                    fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 14,
                    whiteSpace: "nowrap",
                    lineHeight: "18px",
                    color: "var(--text-secondary)",
                    flexShrink: 0,
                  }}>May</span>
                  <span style={{
                    position: "relative",
                    fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 14,
                    whiteSpace: "nowrap",
                    lineHeight: "18px",
                    color: "var(--text-secondary)",
                    flexShrink: 0,
                  }}>Jun</span>
                  <span style={{
                    position: "relative",
                    fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 500,
                    fontSize: 14,
                    whiteSpace: "nowrap",
                    lineHeight: "18px",
                    color: "var(--text-primary)",
                    flexShrink: 0,
                  }}>Jul</span>
                  <span style={{
                    position: "relative",
                    fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 14,
                    whiteSpace: "nowrap",
                    lineHeight: "18px",
                    color: "var(--text-secondary)",
                    flexShrink: 0,
                  }}>Aug</span>
                  <span style={{
                    position: "relative",
                    fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 14,
                    whiteSpace: "nowrap",
                    lineHeight: "18px",
                    color: "var(--text-secondary)",
                    flexShrink: 0,
                  }}>Sep</span>
                  <span style={{
                    position: "relative",
                    fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 14,
                    whiteSpace: "nowrap",
                    lineHeight: "18px",
                    color: "var(--text-secondary)",
                    flexShrink: 0,
                  }}>Oct</span>
                  <span style={{
                    position: "relative",
                    fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 14,
                    whiteSpace: "nowrap",
                    lineHeight: "18px",
                    color: "var(--text-secondary)",
                    flexShrink: 0,
                  }}>Nov</span>
                  <span style={{
                    position: "relative",
                    fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 14,
                    whiteSpace: "nowrap",
                    lineHeight: "18px",
                    color: "var(--text-secondary)",
                    flexShrink: 0,
                  }}>Dec</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Card5 style={{
            position: "absolute",
            left: 862,
            top: 401,
            width: 566,
            color: "rgb(44,52,47)",
          }} />
      </div>
      <div style={{
        position: "absolute",
        left: 1640,
        top: 100,
        width: 375,
        height: 2546,
        overflow: "hidden",
        backgroundColor: "rgb(12,17,15)",
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
        <div style={{
          position: "absolute",
          left: 24,
          top: 132,
          width: 327,
          height: 731,
          overflow: "hidden",
          borderRadius: 12,
          backgroundColor: "rgb(44,52,47)",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "0px 0px 16px 0px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            height: 731,
            display: "flex",
            flexDirection: "column",
            gap: 19,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              backgroundColor: "rgb(44,52,47)",
              borderTop: "1px solid rgb(74,89,80)",
              borderRight: "1px solid rgb(74,89,80)",
              borderBottom: "1px solid rgb(74,89,80)",
              borderLeft: "1px solid rgb(74,89,80)",
              display: "flex",
              flexDirection: "row",
              padding: "12px 16px 12px 16px",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "relative",
                fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 500,
                fontSize: 16,
                whiteSpace: "nowrap",
                lineHeight: "20px",
                color: "rgb(244,246,246)",
                flexShrink: 0,
              }}>Sales Activity</span>
              <div style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 8,
                backgroundColor: "rgb(44,52,47)",
                boxShadow: "inset 0 0 0 1px rgb(74,89,80)",
                display: "flex",
                flexDirection: "row",
                gap: 8,
                padding: "8px 8px 8px 8px",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <svg width={2.667} height={2.667} viewBox="0 0 2.667 2.667" fill="none" style={{
                    position: "absolute",
                    left: 2,
                    top: 6.667,
                    width: 2.667,
                    height: 2.667,
                    color: "var(--text-secondary)",
                  }}>
                    <path d={"M 1.333 0 C 0.598 0 0 0.598 0 1.333 C 0 2.069 0.598 2.667 1.333 2.667 C 2.069 2.667 2.667 2.069 2.667 1.333 C 2.667 0.598 2.069 0 1.333 0 Z"} fill="currentColor" fillRule="evenodd" />
                  </svg>
                  <svg width={2.667} height={2.667} viewBox="0 0 2.667 2.667" fill="none" style={{
                    position: "absolute",
                    left: 6.667,
                    top: 6.667,
                    width: 2.667,
                    height: 2.667,
                    color: "var(--text-secondary)",
                  }}>
                    <path d={"M 1.333 0 C 0.598 0 0 0.598 0 1.333 C 0 2.069 0.598 2.667 1.333 2.667 C 2.069 2.667 2.667 2.069 2.667 1.333 C 2.667 0.598 2.069 0 1.333 0 Z"} fill="currentColor" fillRule="evenodd" />
                  </svg>
                  <svg width={2.667} height={2.667} viewBox="0 0 2.667 2.667" fill="none" style={{
                    position: "absolute",
                    left: 11.333,
                    top: 6.667,
                    width: 2.667,
                    height: 2.667,
                    color: "var(--text-secondary)",
                  }}>
                    <path d={"M 1.333 0 C 0.598 0 0 0.598 0 1.333 C 0 2.069 0.598 2.667 1.333 2.667 C 2.069 2.667 2.667 2.069 2.667 1.333 C 2.667 0.598 2.069 0 1.333 0 Z"} fill="currentColor" fillRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            <div style={{
              position: "relative",
              height: 202,
              display: "flex",
              flexDirection: "column",
              gap: 13,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                width: 295,
                height: 202,
                borderRadius: 10,
                backgroundColor: "rgb(12,17,15)",
                display: "flex",
                flexDirection: "column",
                gap: 16,
                padding: "16px 16px 16px 16px",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
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
                    lineHeight: "18px",
                    color: "rgb(209,211,209)",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>To be Shipped</span>
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
                    <span style={{
                      position: "relative",
                      width: 82,
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 600,
                      fontSize: 18,
                      lineHeight: "24px",
                      color: "rgb(244,246,246)",
                      flexShrink: 0,
                    }}>212</span>
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
                        }}>
                        <TrendUpGraph style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />
                      </div>
                      <span style={{
                        position: "relative",
                        width: 38,
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 400,
                        fontSize: 12,
                        textAlign: "right",
                        lineHeight: "16px",
                        color: "rgb(99,206,154)",
                        flexShrink: 0,
                      }}>+3.4%</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 102,
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "absolute",
                    left: 0,
                    top: 86,
                    width: 263,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "nowrap",
                  }}>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 400,
                      fontSize: 12,
                      whiteSpace: "nowrap",
                      lineHeight: "16px",
                      color: "rgb(209,211,209)",
                      flexShrink: 0,
                    }}>Mon</span>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 400,
                      fontSize: 12,
                      whiteSpace: "nowrap",
                      lineHeight: "16px",
                      color: "rgb(209,211,209)",
                      flexShrink: 0,
                    }}>Tue</span>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 400,
                      fontSize: 12,
                      whiteSpace: "nowrap",
                      lineHeight: "16px",
                      color: "rgb(209,211,209)",
                      flexShrink: 0,
                    }}>Wed</span>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 400,
                      fontSize: 12,
                      whiteSpace: "nowrap",
                      lineHeight: "16px",
                      color: "rgb(209,211,209)",
                      flexShrink: 0,
                    }}>Thu</span>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 400,
                      fontSize: 12,
                      whiteSpace: "nowrap",
                      lineHeight: "16px",
                      color: "rgb(209,211,209)",
                      flexShrink: 0,
                    }}>Fri</span>
                  </div>
                  <div style={{
                    position: "absolute",
                    left: 84,
                    top: 44,
                    width: 29,
                    height: 32,
                    overflow: "hidden",
                  }}>
                    <svg width={29} height={32} viewBox="0 0 29 32" fill="none" style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: 29,
                      height: 32,
                    }}>
                      <path d={"M 0 13.945 C 0 12.694 0.469 11.488 1.314 10.566 L 9.514 1.621 C 10.461 0.588 11.798 0 13.2 0 L 16.658 0 C 18.142 0 19.549 0.659 20.499 1.799 L 27.841 10.609 C 28.59 11.508 29 12.641 29 13.81 L 29 32 L 0 32 L 0 13.945 Z"} fill="currentColor" fillRule="nonzero" />
                    </svg>
                    <div style={{
                      position: "absolute",
                      left: 0,
                      top: 31,
                      width: 29,
                      height: 1,
                      backgroundColor: "var(--primary-600)",
                    }} />
                  </div>
                  <div style={{
                    position: "absolute",
                    left: 0,
                    top: 26,
                    width: 263,
                    height: 50,
                    overflow: "hidden",
                  }}>
                    <svg width={263} height={50} viewBox="0 0 263 50" fill="none" style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: 263,
                      height: 50,
                    }}>
                      <path d={"M 23.036 0 L 0 7.614 L 0 50 L 263 50 L 263 17.259 L 223.646 42.64 L 183.812 22.589 L 143.498 35.533 L 103.664 0 L 63.35 30.203 L 23.036 0 Z"} fill="currentColor" fillRule="nonzero" />
                    </svg>
                    <svg width={263} height={42.640} viewBox="0 0 263 42.640" fill="none" style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: 263,
                      height: 42.64,
                      borderRadius: 2,
                      color: "var(--primary-600)",
                    }}>
                      <path d={"M 222.624 42.125 L 223.074 41.232 L 222.624 42.125 Z M 224.607 42.02 L 224.065 41.179 L 224.607 42.02 Z M 183.033 22.839 L 183.338 23.791 L 183.033 22.839 Z M 184.543 22.957 L 184.094 23.85 L 184.543 22.957 Z M 142.645 34.772 L 143.31 34.025 L 142.645 34.772 Z M 144.587 35.183 L 144.893 36.135 L 144.587 35.183 Z M 102.355 0.981 L 101.755 0.181 L 102.355 0.981 Z M 104.885 1.089 L 105.551 0.343 L 104.885 1.089 Z M 62.151 29.305 L 61.552 30.105 L 62.151 29.305 Z M 64.55 29.305 L 65.149 30.105 L 64.55 29.305 Z M 23.872 0.626 L 23.272 1.426 L 23.872 0.626 Z M 0.314 8.564 L 22.359 1.277 L 21.731 -0.622 L -0.314 6.665 L 0.314 8.564 Z M 23.272 1.426 L 61.552 30.105 L 62.751 28.504 L 24.472 -0.174 L 23.272 1.426 Z M 65.149 30.105 L 102.954 1.781 L 101.755 0.181 L 63.95 28.504 L 65.149 30.105 Z M 104.22 1.835 L 141.979 35.518 L 143.31 34.025 L 105.551 0.343 L 104.22 1.835 Z M 144.893 36.135 L 183.338 23.791 L 182.727 21.887 L 144.282 34.231 L 144.893 36.135 Z M 184.094 23.85 L 222.175 43.018 L 223.074 41.232 L 184.993 22.064 L 184.094 23.85 Z M 225.149 42.86 L 263.542 18.099 L 262.458 16.419 L 224.065 41.179 L 225.149 42.86 Z M 222.175 43.018 C 223.124 43.496 224.256 43.436 225.149 42.86 L 224.065 41.179 C 223.768 41.371 223.39 41.391 223.074 41.232 L 222.175 43.018 Z M 183.338 23.791 C 183.588 23.711 183.859 23.732 184.094 23.85 L 184.993 22.064 C 184.29 21.71 183.476 21.646 182.727 21.887 L 183.338 23.791 Z M 141.979 35.518 C 142.772 36.225 143.881 36.46 144.893 36.135 L 144.282 34.231 C 143.944 34.34 143.575 34.261 143.31 34.025 L 141.979 35.518 Z M 102.954 1.781 C 103.335 1.496 103.864 1.519 104.22 1.835 L 105.551 0.343 C 104.485 -0.607 102.898 -0.675 101.755 0.181 L 102.954 1.781 Z M 61.552 30.105 C 62.618 30.904 64.083 30.904 65.149 30.105 L 63.95 28.504 C 63.595 28.771 63.106 28.771 62.751 28.504 L 61.552 30.105 Z M 22.359 1.277 C 22.67 1.174 23.011 1.23 23.272 1.426 L 24.472 -0.174 C 23.686 -0.763 22.663 -0.93 21.731 -0.622 L 22.359 1.277 Z"} fill="currentColor" fillRule="nonzero" />
                    </svg>
                  </div>
                  <div style={{
                    position: "absolute",
                    left: 93,
                    top: 43,
                    display: "flex",
                    flexDirection: "row",
                    gap: 10,
                    alignItems: "flex-start",
                    flexWrap: "nowrap",
                  }}>
                    <div style={{
                      position: "relative",
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      backgroundColor: "rgb(44,52,47)",
                      boxShadow: "0px 4px 17px 0px rgba(0,0,0,0.25)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "absolute",
                      left: 2,
                      top: 2,
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: "var(--primary-600)",
                    }} />
                  </div>
                  <div style={{
                    position: "absolute",
                    left: 75,
                    top: 4,
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    alignItems: "flex-start",
                    flexWrap: "nowrap",
                  }}>
                    <svg width={47} height={29} viewBox="0 0 47 29" fill="none" style={{
                      position: "relative",
                      width: 47,
                      height: 29,
                      flexShrink: 0,
                      filter: "drop-shadow(0px 9px 22px rgba(0,0,0,0.06))",
                      color: "rgb(44,52,47)",
                    }}>
                      <path d={"M 4 0 C 1.791 0 0 1.791 0 4 L 0 20 C 0 22.209 1.791 24 4 24 L 18.876 24 L 23 29 L 27.124 24 L 43 24 C 45.209 24 47 22.209 47 20 L 47 4 C 47 1.791 45.209 0 43 0 L 4 0 Z"} fill="currentColor" fillRule="evenodd" />
                    </svg>
                    <span style={{
                      position: "absolute",
                      left: 4,
                      top: 4,
                      width: 39,
                      height: 16,
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 500,
                      fontSize: 12,
                      whiteSpace: "nowrap",
                      lineHeight: "16px",
                      color: "rgb(244,246,246)",
                    }}>$3,345</span>
                  </div>
                </div>
              </div>
              <div style={{
                position: "relative",
                width: 295,
                height: 202,
                borderRadius: 10,
                backgroundColor: "rgb(12,17,15)",
                display: "flex",
                flexDirection: "column",
                gap: 16,
                padding: "16px 16px 16px 16px",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
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
                    lineHeight: "18px",
                    color: "rgb(209,211,209)",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>To be Packed</span>
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
                    <span style={{
                      position: "relative",
                      width: 87,
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 600,
                      fontSize: 18,
                      lineHeight: "24px",
                      color: "rgb(244,246,246)",
                      flexShrink: 0,
                    }}> 324</span>
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
                        }}>
                        <TrendUpGraph style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />
                      </div>
                      <span style={{
                        position: "relative",
                        width: 33,
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 400,
                        fontSize: 12,
                        textAlign: "right",
                        lineHeight: "16px",
                        color: "rgb(99,206,154)",
                        flexShrink: 0,
                      }}>+4.5%</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 102,
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
                    width: 211.5,
                    height: 98,
                    overflow: "hidden",
                    flexShrink: 0,
                  }}>
                    <div style={{
                      position: "absolute",
                      left: 0,
                      top: 49,
                      width: 9.614,
                      height: 49,
                      borderRadius: 3,
                      backgroundColor: "var(--blue-600)",
                    }} />
                    <div style={{
                      position: "absolute",
                      left: 22.432,
                      top: 32.667,
                      width: 9.614,
                      height: 49,
                      borderRadius: 3,
                      backgroundColor: "var(--blue-600)",
                    }} />
                    <div style={{
                      position: "absolute",
                      left: 112.159,
                      top: 10.051,
                      width: 9.614,
                      height: 38.949,
                      borderRadius: 3,
                      backgroundColor: "var(--blue-600)",
                    }} />
                    <div style={{
                      position: "absolute",
                      left: 134.591,
                      top: 3.769,
                      width: 9.614,
                      height: 56.538,
                      borderRadius: 3,
                      backgroundColor: "var(--blue-600)",
                    }} />
                    <div style={{
                      position: "absolute",
                      left: 157.023,
                      top: 23.872,
                      width: 9.614,
                      height: 56.538,
                      borderRadius: 3,
                      backgroundColor: "var(--blue-600)",
                    }} />
                    <div style={{
                      position: "absolute",
                      left: 179.455,
                      top: 42.718,
                      width: 9.614,
                      height: 51.513,
                      borderRadius: 3,
                      backgroundColor: "var(--blue-600)",
                    }} />
                    <div style={{
                      position: "absolute",
                      left: 67.296,
                      top: 16.333,
                      width: 9.614,
                      height: 71.615,
                      borderRadius: 3,
                      backgroundColor: "var(--blue-600)",
                    }} />
                    <div style={{
                      position: "absolute",
                      left: 45.321,
                      top: 32.667,
                      width: 9.064,
                      height: 37.692,
                      borderRadius: 3,
                      backgroundColor: "var(--blue-600)",
                    }} />
                    <div style={{
                      position: "absolute",
                      left: 202.436,
                      top: 70.359,
                      width: 9.064,
                      height: 27.641,
                      borderRadius: 3,
                      backgroundColor: "var(--blue-600)",
                    }} />
                    <div style={{
                      position: "absolute",
                      left: 89.727,
                      top: 0,
                      width: 9.614,
                      height: 65.333,
                      borderRadius: 3,
                      backgroundColor: "var(--blue-600)",
                    }} />
                  </div>
                </div>
              </div>
              <div style={{
                position: "relative",
                width: 295,
                height: 202,
                borderRadius: 10,
                backgroundColor: "rgb(12,17,15)",
                display: "flex",
                flexDirection: "column",
                gap: 16,
                padding: "16px 16px 16px 16px",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
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
                    lineHeight: "18px",
                    color: "rgb(209,211,209)",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>To be Invoiced</span>
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
                    <span style={{
                      position: "relative",
                      width: 89,
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 600,
                      fontSize: 18,
                      lineHeight: "24px",
                      color: "rgb(244,246,246)",
                      flexShrink: 0,
                    }}>123</span>
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
                        }}>
                        <TrendDownGraph style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />
                      </div>
                      <span style={{
                        position: "relative",
                        width: 33,
                        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 400,
                        fontSize: 12,
                        textAlign: "right",
                        lineHeight: "16px",
                        color: "rgb(230,90,95)",
                        flexShrink: 0,
                      }}>-1.6%</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 102,
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "absolute",
                    left: 92,
                    top: 11,
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    backgroundColor: "rgb(44,52,47)",
                  }} />
                  <div style={{
                    position: "absolute",
                    left: 92,
                    top: 11,
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    boxShadow: "inset 0 0 0 6px var(--yellow-600)",
                  }} />
                  <div style={{
                    position: "absolute",
                    left: 92,
                    top: 11,
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    backgroundColor: "rgb(10,175,255)",
                    boxShadow: "inset 0 0 0 6px var(--red-600)",
                  }} />
                  <span style={{
                    position: "absolute",
                    left: 100,
                    top: 42,
                    width: 64,
                    height: 19,
                    fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 600,
                    fontSize: 18,
                    textAlign: "center",
                    whiteSpace: "nowrap",
                    lineHeight: "24px",
                    color: "rgb(244,246,246)",
                  }}>40%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 24,
          top: 887,
          width: 327,
          overflow: "hidden",
          borderRadius: 12,
          backgroundColor: "rgb(44,52,47)",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "0px 0px 16px 0px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 15,
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            <div style={{
              position: "relative",
              backgroundColor: "var(--background-bg-secondary)",
              borderTop: "1px solid var(--border-border-primary)",
              borderRight: "1px solid var(--border-border-primary)",
              borderBottom: "1px solid var(--border-border-primary)",
              borderLeft: "1px solid var(--border-border-primary)",
              display: "flex",
              flexDirection: "row",
              padding: "12px 16px 12px 16px",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
              alignSelf: "stretch",
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
              }}>Top Sellings Category</span>
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
                padding: "8px 8px 8px 8px",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <svg width={2.667} height={2.667} viewBox="0 0 2.667 2.667" fill="none" style={{
                    position: "absolute",
                    left: 6.667,
                    top: 11.333,
                    width: 2.667,
                    height: 2.667,
                    color: "var(--text-secondary)",
                  }}>
                    <path d={"M 1.333 0 C 0.598 0 0 0.598 0 1.333 C 0 2.069 0.598 2.667 1.333 2.667 C 2.069 2.667 2.667 2.069 2.667 1.333 C 2.667 0.598 2.069 0 1.333 0 Z"} fill="currentColor" fillRule="evenodd" />
                  </svg>
                  <svg width={2.667} height={2.667} viewBox="0 0 2.667 2.667" fill="none" style={{
                    position: "absolute",
                    left: 6.667,
                    top: 2,
                    width: 2.667,
                    height: 2.667,
                    color: "var(--text-secondary)",
                  }}>
                    <path d={"M 1.333 2.667 C 2.069 2.667 2.667 2.069 2.667 1.333 C 2.667 0.598 2.069 0 1.333 0 C 0.598 0 0 0.598 0 1.333 C 0 2.069 0.598 2.667 1.333 2.667 Z"} fill="currentColor" fillRule="evenodd" />
                  </svg>
                  <svg width={2.667} height={2.667} viewBox="0 0 2.667 2.667" fill="none" style={{
                    position: "absolute",
                    left: 6.667,
                    top: 6.667,
                    width: 2.667,
                    height: 2.667,
                    color: "var(--text-secondary)",
                  }}>
                    <path d={"M 1.333 0 C 0.598 0 0 0.598 0 1.333 C 0 2.069 0.598 2.667 1.333 2.667 C 2.069 2.667 2.667 2.069 2.667 1.333 C 2.667 0.598 2.069 0 1.333 0 Z"} fill="currentColor" fillRule="evenodd" />
                  </svg>
                </div>
                <div style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <svg width={2.667} height={2.667} viewBox="0 0 2.667 2.667" fill="none" style={{
                    position: "absolute",
                    left: 2,
                    top: 6.667,
                    width: 2.667,
                    height: 2.667,
                    color: "var(--icon-secondary)",
                  }}>
                    <path d={"M 1.333 0 C 0.598 0 0 0.598 0 1.333 C 0 2.069 0.598 2.667 1.333 2.667 C 2.069 2.667 2.667 2.069 2.667 1.333 C 2.667 0.598 2.069 0 1.333 0 Z"} fill="currentColor" fillRule="evenodd" />
                  </svg>
                  <svg width={2.667} height={2.667} viewBox="0 0 2.667 2.667" fill="none" style={{
                    position: "absolute",
                    left: 6.667,
                    top: 6.667,
                    width: 2.667,
                    height: 2.667,
                    color: "var(--icon-secondary)",
                  }}>
                    <path d={"M 1.333 0 C 0.598 0 0 0.598 0 1.333 C 0 2.069 0.598 2.667 1.333 2.667 C 2.069 2.667 2.667 2.069 2.667 1.333 C 2.667 0.598 2.069 0 1.333 0 Z"} fill="currentColor" fillRule="evenodd" />
                  </svg>
                  <svg width={2.667} height={2.667} viewBox="0 0 2.667 2.667" fill="none" style={{
                    position: "absolute",
                    left: 11.333,
                    top: 6.667,
                    width: 2.667,
                    height: 2.667,
                    color: "var(--icon-secondary)",
                  }}>
                    <path d={"M 1.333 0 C 0.598 0 0 0.598 0 1.333 C 0 2.069 0.598 2.667 1.333 2.667 C 2.069 2.667 2.667 2.069 2.667 1.333 C 2.667 0.598 2.069 0 1.333 0 Z"} fill="currentColor" fillRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 12,
              padding: "0px 16px 0px 16px",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 6,
                backgroundColor: "var(--background-bg-primary)",
                display: "flex",
                flexDirection: "column",
                gap: 10,
                padding: "4px 4px 4px 4px",
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
                  gap: 4,
                  alignItems: "center",
                  flexWrap: "nowrap",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <TabMenu2
                    style={{ position: "relative", flexShrink: 0 }}
                    leftIcon={false}
                    rightIcon={false}
                    text1={"Week"}
                    state={"default"}
                  />
                  <TabMenu2
                    style={{ position: "relative", width: 67, flexShrink: 0 }}
                    leftIcon={false}
                    rightIcon={false}
                    text1={"Month"}
                    state={"active"}
                  />
                  <TabMenu2
                    style={{ position: "relative", width: 73, flexShrink: 0 }}
                    leftIcon={false}
                    rightIcon={false}
                    text1={"Year"}
                    state={"default"}
                  />
                </div>
              </div>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: 14,
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
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
                  <div style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <span style={{
                      position: "relative",
                      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 400,
                      fontSize: 12,
                      whiteSpace: "nowrap",
                      lineHeight: "100%",
                      letterSpacing: "-0.011em",
                      color: "var(--text-primary)",
                      flexShrink: 0,
                    }}>Ergonomic Office Chai</span>
                    <span style={{
                      position: "relative",
                      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 500,
                      fontSize: 12,
                      whiteSpace: "nowrap",
                      lineHeight: "100%",
                      letterSpacing: "-0.011em",
                      color: "var(--background-bg-color)",
                      flexShrink: 0,
                    }}>40%</span>
                  </div>
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
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--border-border-color)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--border-border-color)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--border-border-color)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--border-border-color)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--border-border-color)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--border-border-color)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--border-border-color)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--border-border-color)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--border-border-color)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--border-border-color)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--border-border-color)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--border-border-color)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--border-border-color)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--border-border-color)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--border-border-color)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--border-border-focused)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--border-border-focused)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--border-border-focused)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--border-border-focused)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--border-border-focused)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--border-border-focused)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--border-border-focused)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--border-border-focused)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--border-border-focused)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--border-border-focused)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--border-border-focused)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--border-border-focused)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--border-border-focused)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--border-border-focused)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--border-border-focused)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 3,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--border-border-focused)",
                      flexShrink: 0,
                    }} />
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
                  <div style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <span style={{
                      position: "relative",
                      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 400,
                      fontSize: 12,
                      whiteSpace: "nowrap",
                      lineHeight: "100%",
                      letterSpacing: "-0.011em",
                      color: "var(--text-primary)",
                      flexShrink: 0,
                    }}>Minimalist Leather Wallet</span>
                    <span style={{
                      position: "relative",
                      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 500,
                      fontSize: 12,
                      whiteSpace: "nowrap",
                      lineHeight: "100%",
                      letterSpacing: "-0.011em",
                      color: "var(--badge-pending)",
                      flexShrink: 0,
                    }}>15%</span>
                  </div>
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
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--badge-pending)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--badge-pending)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--badge-pending)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--badge-pending)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--badge-pending)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--badge-pending)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--badge-pending)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--badge-pending)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--badge-pending)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--badge-pending)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--badge-pending)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "rgb(255,241,189)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "rgb(255,241,189)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "rgb(255,241,189)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "rgb(255,241,189)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "rgb(255,241,189)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "rgb(255,241,189)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "rgb(255,241,189)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "rgb(255,241,189)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "rgb(255,241,189)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "rgb(255,241,189)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "rgb(255,241,189)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "rgb(255,241,189)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "rgb(255,241,189)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "rgb(255,241,189)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "rgb(255,241,189)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "rgb(255,241,189)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "rgb(255,241,189)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "rgb(255,241,189)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "rgb(255,241,189)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 3,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "rgb(255,241,189)",
                      flexShrink: 0,
                    }} />
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
                  <div style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <span style={{
                      position: "relative",
                      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 400,
                      fontSize: 12,
                      whiteSpace: "nowrap",
                      lineHeight: "100%",
                      letterSpacing: "-0.011em",
                      color: "var(--text-primary)",
                      flexShrink: 0,
                    }}>Smartwatch with Fitness Tracking</span>
                    <span style={{
                      position: "relative",
                      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 500,
                      fontSize: 12,
                      whiteSpace: "nowrap",
                      lineHeight: "100%",
                      letterSpacing: "-0.011em",
                      color: "var(--badge-verified)",
                      flexShrink: 0,
                    }}>45%</span>
                  </div>
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
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--badge-verified)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--badge-verified)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--badge-verified)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--badge-verified)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--badge-verified)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--badge-verified)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--badge-verified)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--badge-verified)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--badge-verified)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--badge-verified)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--badge-verified)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--badge-verified)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--badge-verified)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--badge-verified)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--badge-verified)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--badge-verified)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--badge-verified)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--badge-verified)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--badge-verified)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "var(--badge-verified)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "rgb(193,215,250)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "rgb(193,215,250)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "rgb(193,215,250)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "rgb(193,215,250)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "rgb(193,215,250)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "rgb(193,215,250)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "rgb(193,215,250)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "rgb(193,215,250)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "rgb(193,215,250)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 4,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "rgb(193,215,250)",
                      flexShrink: 0,
                    }} />
                    <div style={{
                      position: "relative",
                      width: 3,
                      height: 20,
                      borderRadius: 2,
                      backgroundColor: "rgb(193,215,250)",
                      flexShrink: 0,
                    }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Card3 style={{
            position: "absolute",
            left: 24,
            top: 1204,
            width: 327,
          }} />
        <div style={{
          position: "absolute",
          left: 24,
          top: 1521,
          width: 327,
          overflow: "hidden",
          borderRadius: 12,
          backgroundColor: "rgb(44,52,47)",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "0px 0px 16px 0px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
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
              backgroundColor: "var(--background-bg-secondary)",
              borderTop: "1px solid var(--border-border-primary)",
              borderRight: "1px solid var(--border-border-primary)",
              borderBottom: "1px solid var(--border-border-primary)",
              borderLeft: "1px solid var(--border-border-primary)",
              display: "flex",
              flexDirection: "row",
              padding: "12px 16px 12px 16px",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
              alignSelf: "stretch",
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
              }}>Total Product Details</span>
              <div style={{
                position: "relative",
                width: 132,
                overflow: "hidden",
                borderRadius: 8,
                backgroundColor: "var(--background-bg-secondary)",
                boxShadow: "inset 0 0 0 1px var(--border-border-primary)",
                display: "flex",
                flexDirection: "row",
                gap: 8,
                padding: "8px 8px 8px 8px",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  overflow: "hidden",
                  flexShrink: 0,
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
                <span style={{
                  position: "relative",
                  fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: 12,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  lineHeight: "16px",
                  color: "rgb(12,17,15)",
                  flexShrink: 0,
                }}>This Years</span>
                <div style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <div style={{
                    position: "absolute",
                    left: 3.333,
                    top: 5.667,
                    width: 9.333,
                    height: 4.667,
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
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 23,
              padding: "0px 16px 0px 16px",
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
                gap: 28,
                alignItems: "center",
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
                }}>
                  <Radio10
                    style={{
                      position: "relative",
                      width: 20,
                      height: 20,
                      flexShrink: 0,
                    }}
                    state={"default"}
                    active={"on"}
                  />
                  <span style={{
                    position: "relative",
                    fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 16,
                    whiteSpace: "nowrap",
                    lineHeight: "20px",
                    color: "var(--text-primary)",
                    flexShrink: 0,
                  }}>Total Stock Items</span>
                </div>
                <div style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "row",
                  gap: 6,
                  alignItems: "center",
                  flexWrap: "nowrap",
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
                      left: 2,
                      top: 2,
                      width: 16,
                      height: 16,
                      borderRadius: 96,
                      backgroundColor: "var(--purple-600)",
                      boxShadow: "inset 0px 2px 2px 0px rgba(22,38,100,0.32)",
                    }} />
                    <div style={{
                      position: "absolute",
                      left: 6,
                      top: 6,
                      width: 8,
                      height: 8,
                      borderRadius: 96,
                      backgroundColor: "var(--general-white)",
                      boxShadow: "inset 0 0 0 1px var(--general-white), inset 0px -2px 3px 0px rgb(207,209,211), 0px 2px 2px 0px rgba(27,28,29,0.12)",
                    }} />
                  </div>
                  <span style={{
                    position: "relative",
                    fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 14,
                    whiteSpace: "nowrap",
                    lineHeight: "18px",
                    color: "var(--text-primary)",
                    flexShrink: 0,
                  }}>High Stock Items</span>
                </div>
                <div style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "row",
                  gap: 6,
                  alignItems: "center",
                  flexWrap: "nowrap",
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
                      left: 2,
                      top: 2,
                      width: 16,
                      height: 16,
                      borderRadius: 96,
                      backgroundColor: "var(--blue-600)",
                      boxShadow: "inset 0px 2px 2px 0px rgba(22,38,100,0.32)",
                    }} />
                    <div style={{
                      position: "absolute",
                      left: 6,
                      top: 6,
                      width: 8,
                      height: 8,
                      borderRadius: 96,
                      backgroundColor: "var(--general-white)",
                      boxShadow: "inset 0 0 0 1px var(--general-white), inset 0px -2px 3px 0px rgb(207,209,211), 0px 2px 2px 0px rgba(27,28,29,0.12)",
                    }} />
                  </div>
                  <span style={{
                    position: "relative",
                    fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 14,
                    whiteSpace: "nowrap",
                    lineHeight: "18px",
                    color: "var(--text-primary)",
                    flexShrink: 0,
                  }}>Low Stock Items</span>
                </div>
              </div>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: 15,
                alignItems: "flex-end",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <div style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "row",
                  gap: 11,
                  justifyContent: "flex-start",
                  alignItems: "flex-end",
                  flexWrap: "nowrap",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    width: 18,
                    display: "flex",
                    flexDirection: "column",
                    gap: 20,
                    alignItems: "flex-start",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                  }}>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 400,
                      fontSize: 14,
                      lineHeight: "18px",
                      color: "var(--text-secondary)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>4 K</span>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 400,
                      fontSize: 14,
                      lineHeight: "18px",
                      color: "var(--text-secondary)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>3 K</span>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 400,
                      fontSize: 14,
                      lineHeight: "18px",
                      color: "var(--text-secondary)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>2 K</span>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 400,
                      fontSize: 14,
                      lineHeight: "18px",
                      color: "var(--text-secondary)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>1 K</span>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 400,
                      fontSize: 14,
                      lineHeight: "18px",
                      color: "var(--text-secondary)",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>0 K</span>
                  </div>
                  <div style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    gap: 30,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    flexWrap: "nowrap",
                    flexGrow: 1,
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: 35,
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 1,
                        outline: "1px dashed var(--border-border-primary)",
                        outlineOffset: "-1px",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }} />
                      <div style={{
                        position: "relative",
                        height: 1,
                        outline: "1px dashed var(--border-border-primary)",
                        outlineOffset: "-1px",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }} />
                      <div style={{
                        position: "relative",
                        height: 1,
                        outline: "1px dashed var(--border-border-primary)",
                        outlineOffset: "-1px",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }} />
                      <div style={{
                        position: "relative",
                        height: 1,
                        outline: "1px dashed var(--border-border-primary)",
                        outlineOffset: "-1px",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }} />
                      <div style={{
                        position: "relative",
                        height: 1,
                        outline: "1px dashed var(--border-border-primary)",
                        outlineOffset: "-1px",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }} />
                    </div>
                    <div style={{
                      position: "absolute",
                      left: 0,
                      top: -5,
                      display: "flex",
                      flexDirection: "row",
                      gap: 12,
                      alignItems: "flex-end",
                      flexWrap: "nowrap",
                    }}>
                      <div style={{
                        position: "relative",
                        height: 130,
                        display: "flex",
                        flexDirection: "row",
                        gap: 2,
                        alignItems: "flex-end",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                      }}>
                        <div style={{
                          position: "relative",
                          width: 10,
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                          justifyContent: "flex-end",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexShrink: 0,
                          alignSelf: "stretch",
                        }}>
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                        </div>
                        <div style={{
                          position: "relative",
                          width: 10,
                          height: 82,
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                          justifyContent: "flex-end",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexShrink: 0,
                        }}>
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                        </div>
                        <div style={{
                          position: "relative",
                          width: 10,
                          height: 46,
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                          justifyContent: "flex-end",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexShrink: 0,
                        }}>
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                        </div>
                      </div>
                      <div style={{
                        position: "relative",
                        height: 130,
                        display: "flex",
                        flexDirection: "row",
                        gap: 2,
                        alignItems: "flex-end",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                      }}>
                        <div style={{
                          position: "relative",
                          width: 10,
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                          justifyContent: "flex-end",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexShrink: 0,
                          alignSelf: "stretch",
                        }}>
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                        </div>
                        <div style={{
                          position: "relative",
                          width: 10,
                          height: 82,
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                          justifyContent: "flex-end",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexShrink: 0,
                        }}>
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                        </div>
                        <div style={{
                          position: "relative",
                          width: 10,
                          height: 46,
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                          justifyContent: "flex-end",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexShrink: 0,
                        }}>
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                        </div>
                      </div>
                      <div style={{
                        position: "relative",
                        height: 130,
                        display: "flex",
                        flexDirection: "row",
                        gap: 2,
                        alignItems: "flex-end",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                      }}>
                        <div style={{
                          position: "relative",
                          width: 10,
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                          justifyContent: "flex-end",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexShrink: 0,
                          alignSelf: "stretch",
                        }}>
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                        </div>
                        <div style={{
                          position: "relative",
                          width: 10,
                          height: 82,
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                          justifyContent: "flex-end",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexShrink: 0,
                        }}>
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                        </div>
                        <div style={{
                          position: "relative",
                          width: 10,
                          height: 46,
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                          justifyContent: "flex-end",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexShrink: 0,
                        }}>
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                        </div>
                      </div>
                      <div style={{
                        position: "relative",
                        height: 148,
                        display: "flex",
                        flexDirection: "row",
                        gap: 2,
                        alignItems: "flex-end",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                      }}>
                        <div style={{
                          position: "relative",
                          width: 10,
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                          justifyContent: "flex-end",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexShrink: 0,
                          alignSelf: "stretch",
                        }}>
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                        </div>
                        <div style={{
                          position: "relative",
                          width: 10,
                          height: 130,
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                          justifyContent: "flex-end",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexShrink: 0,
                        }}>
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                        </div>
                        <div style={{
                          position: "relative",
                          width: 10,
                          height: 94,
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                          justifyContent: "flex-end",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexShrink: 0,
                        }}>
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                        </div>
                      </div>
                      <div style={{
                        position: "relative",
                        height: 148,
                        display: "flex",
                        flexDirection: "row",
                        gap: 2,
                        alignItems: "flex-end",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                      }}>
                        <div style={{
                          position: "relative",
                          width: 10,
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                          justifyContent: "flex-end",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexShrink: 0,
                          alignSelf: "stretch",
                        }}>
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-600)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-600)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-600)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-600)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-600)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                        </div>
                        <div style={{
                          position: "relative",
                          width: 10,
                          height: 130,
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                          justifyContent: "flex-end",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexShrink: 0,
                        }}>
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--blue-600)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--blue-600)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                        </div>
                        <div style={{
                          position: "relative",
                          width: 10,
                          height: 130,
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                          justifyContent: "flex-end",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexShrink: 0,
                        }}>
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-600)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-600)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-600)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-600)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-600)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-600)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-600)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-600)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-600)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-600)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                        </div>
                      </div>
                      <div style={{
                        position: "relative",
                        height: 148,
                        display: "flex",
                        flexDirection: "row",
                        gap: 2,
                        alignItems: "flex-end",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                      }}>
                        <div style={{
                          position: "relative",
                          width: 10,
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                          justifyContent: "flex-end",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexShrink: 0,
                          alignSelf: "stretch",
                        }}>
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--primary-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                        </div>
                        <div style={{
                          position: "relative",
                          width: 10,
                          height: 130,
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                          justifyContent: "flex-end",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexShrink: 0,
                        }}>
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "rgb(39,83,116)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                        </div>
                        <div style={{
                          position: "relative",
                          width: 10,
                          height: 130,
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                          justifyContent: "flex-end",
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexShrink: 0,
                        }}>
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                          <div style={{
                            position: "relative",
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: "var(--purple-900)",
                            flexShrink: 0,
                            alignSelf: "stretch",
                          }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "row",
                  gap: 19,
                  justifyContent: "flex-end",
                  alignItems: "center",
                  flexWrap: "nowrap",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <span style={{
                    position: "relative",
                    fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 14,
                    whiteSpace: "nowrap",
                    lineHeight: "18px",
                    color: "var(--text-secondary)",
                    flexShrink: 0,
                  }}>Feb</span>
                  <span style={{
                    position: "relative",
                    fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 14,
                    whiteSpace: "nowrap",
                    lineHeight: "18px",
                    color: "var(--text-secondary)",
                    flexShrink: 0,
                  }}>Mar</span>
                  <span style={{
                    position: "relative",
                    fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 14,
                    whiteSpace: "nowrap",
                    lineHeight: "18px",
                    color: "var(--text-secondary)",
                    flexShrink: 0,
                  }}>Apr</span>
                  <span style={{
                    position: "relative",
                    fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 14,
                    whiteSpace: "nowrap",
                    lineHeight: "18px",
                    color: "var(--text-secondary)",
                    flexShrink: 0,
                  }}>May</span>
                  <span style={{
                    position: "relative",
                    fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 14,
                    whiteSpace: "nowrap",
                    lineHeight: "18px",
                    color: "var(--text-secondary)",
                    flexShrink: 0,
                  }}>Jun</span>
                  <span style={{
                    position: "relative",
                    fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 500,
                    fontSize: 14,
                    whiteSpace: "nowrap",
                    lineHeight: "18px",
                    color: "var(--text-primary)",
                    flexShrink: 0,
                  }}>Jul</span>
                  <span style={{
                    position: "relative",
                    fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 14,
                    whiteSpace: "nowrap",
                    lineHeight: "18px",
                    color: "var(--text-secondary)",
                    flexShrink: 0,
                  }}>Aug</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Card5 style={{
            position: "absolute",
            left: 24,
            top: 1869,
            width: 327,
            color: "rgb(44,52,47)",
          }} />
        <div style={{
          position: "absolute",
          left: 24,
          top: 2217,
          width: 1156,
          height: 271,
          overflow: "hidden",
          borderRadius: 12,
          backgroundColor: "rgb(44,52,47)",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }}>
          <div style={{
            position: "relative",
            height: 271,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              backgroundColor: "rgb(44,52,47)",
              borderTop: "1px solid rgb(74,89,80)",
              borderRight: "1px solid rgb(74,89,80)",
              borderBottom: "1px solid rgb(74,89,80)",
              borderLeft: "1px solid rgb(74,89,80)",
              display: "flex",
              flexDirection: "row",
              gap: 97,
              padding: "12px 16px 12px 16px",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "relative",
                fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 500,
                fontSize: 16,
                whiteSpace: "nowrap",
                lineHeight: "20px",
                color: "rgb(244,246,246)",
                flexShrink: 0,
              }}>Sales Order</span>
              <div style={{
                position: "relative",
                width: 132,
                overflow: "hidden",
                borderRadius: 8,
                backgroundColor: "rgb(44,52,47)",
                boxShadow: "inset 0 0 0 1px rgb(74,89,80)",
                display: "flex",
                flexDirection: "row",
                gap: 8,
                padding: "8px 8px 8px 8px",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  overflow: "hidden",
                  flexShrink: 0,
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
                <span style={{
                  position: "relative",
                  fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: 12,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  lineHeight: "16px",
                  color: "rgb(12,17,15)",
                  flexShrink: 0,
                }}>This Years</span>
                <div style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <div style={{
                    position: "absolute",
                    left: 3.333,
                    top: 5.667,
                    width: 9.333,
                    height: 4.667,
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
                width: 252,
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
                  text1={"Customers Name"}
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
                  label={"Anwar Hussen"}
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
                  label={"Tahsan Khan"}
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
                  label={"Hasan Khan"}
                  showDescription={false}
                  icon2={<Avatar type={"avatar 13"} status={"lg"} size={"40"} style={{ width: "100%", height: "100%" }} />}
                  state={"default"}
                  size={"xl"}
                  misc={"avatar - title"}
                />
              </div>
              <div style={{
                position: "relative",
                width: 102,
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
                  text1={"Packed"}
                  state={"active"}
                  size={"lg"}
                  misc={"top bar"}
                />
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "rgb(44,52,47)",
                  borderTop: "1px solid rgb(74,89,80)",
                  borderRight: "1px solid rgb(74,89,80)",
                  borderBottom: "1px solid rgb(74,89,80)",
                  borderLeft: "1px solid rgb(74,89,80)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
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
                    overflow: "hidden",
                    borderRadius: 6,
                    backgroundColor: "var(--badge-red)",
                    boxShadow: "0 0 0 1px var(--red-700), inset 0px -3px 2px 0px rgb(236,239,241)",
                    display: "flex",
                    flexDirection: "row",
                    gap: "calc(var(--padding-xs) * 1px)",
                    padding: "4px 12px 4px 12px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "nowrap",
                    boxSizing: "border-box",
                    paddingLeft: "calc(var(--padding-sm) * 1px)",
                    paddingTop: "calc(var(--padding-xxs) * 1px)",
                    paddingRight: "calc(var(--padding-sm) * 1px)",
                    paddingBottom: "calc(var(--padding-xxs) * 1px)",
                    flexShrink: 0,
                  }}>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 500,
                      fontSize: 14,
                      whiteSpace: "nowrap",
                      lineHeight: "20px",
                      letterSpacing: "0.060em",
                      color: "var(--badge-success)",
                      flexShrink: 0,
                    }}>4</span>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "rgb(44,52,47)",
                  borderTop: "1px solid rgb(74,89,80)",
                  borderRight: "1px solid rgb(74,89,80)",
                  borderBottom: "1px solid rgb(74,89,80)",
                  borderLeft: "1px solid rgb(74,89,80)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
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
                    overflow: "hidden",
                    borderRadius: 6,
                    backgroundColor: "var(--badge-red)",
                    boxShadow: "0 0 0 1px var(--red-700), inset 0px -3px 2px 0px rgb(236,239,241)",
                    display: "flex",
                    flexDirection: "row",
                    gap: "calc(var(--padding-xs) * 1px)",
                    padding: "4px 12px 4px 12px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "nowrap",
                    boxSizing: "border-box",
                    paddingLeft: "calc(var(--padding-sm) * 1px)",
                    paddingTop: "calc(var(--padding-xxs) * 1px)",
                    paddingRight: "calc(var(--padding-sm) * 1px)",
                    paddingBottom: "calc(var(--padding-xxs) * 1px)",
                    flexShrink: 0,
                  }}>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 500,
                      fontSize: 14,
                      whiteSpace: "nowrap",
                      lineHeight: "20px",
                      letterSpacing: "0.060em",
                      color: "var(--badge-pending)",
                      flexShrink: 0,
                    }}>3</span>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "rgb(44,52,47)",
                  borderTop: "1px solid rgb(74,89,80)",
                  borderRight: "1px solid rgb(74,89,80)",
                  borderBottom: "1px solid rgb(74,89,80)",
                  borderLeft: "1px solid rgb(74,89,80)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
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
                    overflow: "hidden",
                    borderRadius: 6,
                    backgroundColor: "var(--badge-red)",
                    boxShadow: "0 0 0 1px var(--red-700), inset 0px -3px 2px 0px rgb(236,239,241)",
                    display: "flex",
                    flexDirection: "row",
                    gap: "calc(var(--padding-xs) * 1px)",
                    padding: "4px 12px 4px 12px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "nowrap",
                    boxSizing: "border-box",
                    paddingLeft: "calc(var(--padding-sm) * 1px)",
                    paddingTop: "calc(var(--padding-xxs) * 1px)",
                    paddingRight: "calc(var(--padding-sm) * 1px)",
                    paddingBottom: "calc(var(--padding-xxs) * 1px)",
                    flexShrink: 0,
                  }}>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 500,
                      fontSize: 14,
                      whiteSpace: "nowrap",
                      lineHeight: "20px",
                      letterSpacing: "0.060em",
                      color: "var(--badge-verified)",
                      flexShrink: 0,
                    }}>2</span>
                  </div>
                </div>
              </div>
              <div style={{
                position: "relative",
                width: 134,
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
                  text1={"Date"}
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
                  label={"Feb 01,2025"}
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
                  label={"Feb 01,2025"}
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
                  label={"Feb 01,2025"}
                  showDescription={false}
                  state={"default"}
                  size={"xl"}
                  misc={"avatar - title"}
                />
              </div>
              <div style={{
                position: "relative",
                width: 111,
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
                  text1={"Shipped"}
                  state={"active"}
                  size={"lg"}
                  misc={"top bar"}
                />
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "rgb(44,52,47)",
                  borderTop: "1px solid rgb(74,89,80)",
                  borderRight: "1px solid rgb(74,89,80)",
                  borderBottom: "1px solid rgb(74,89,80)",
                  borderLeft: "1px solid rgb(74,89,80)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
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
                    overflow: "hidden",
                    borderRadius: 6,
                    backgroundColor: "var(--badge-red)",
                    boxShadow: "0 0 0 1px var(--red-700)",
                    display: "flex",
                    flexDirection: "row",
                    gap: "calc(var(--padding-xs) * 1px)",
                    padding: "4px 12px 4px 12px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "nowrap",
                    boxSizing: "border-box",
                    paddingLeft: "calc(var(--padding-sm) * 1px)",
                    paddingTop: "calc(var(--padding-xxs) * 1px)",
                    paddingRight: "calc(var(--padding-sm) * 1px)",
                    paddingBottom: "calc(var(--padding-xxs) * 1px)",
                    flexShrink: 0,
                  }}>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 500,
                      fontSize: 14,
                      whiteSpace: "nowrap",
                      lineHeight: "20px",
                      letterSpacing: "0.060em",
                      color: "var(--badge-success)",
                      flexShrink: 0,
                    }}>6</span>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "rgb(44,52,47)",
                  borderTop: "1px solid rgb(74,89,80)",
                  borderRight: "1px solid rgb(74,89,80)",
                  borderBottom: "1px solid rgb(74,89,80)",
                  borderLeft: "1px solid rgb(74,89,80)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
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
                    overflow: "hidden",
                    borderRadius: 6,
                    backgroundColor: "var(--badge-red)",
                    boxShadow: "0 0 0 1px var(--red-700)",
                    display: "flex",
                    flexDirection: "row",
                    gap: "calc(var(--padding-xs) * 1px)",
                    padding: "4px 12px 4px 12px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "nowrap",
                    boxSizing: "border-box",
                    paddingLeft: "calc(var(--padding-sm) * 1px)",
                    paddingTop: "calc(var(--padding-xxs) * 1px)",
                    paddingRight: "calc(var(--padding-sm) * 1px)",
                    paddingBottom: "calc(var(--padding-xxs) * 1px)",
                    flexShrink: 0,
                  }}>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 500,
                      fontSize: 14,
                      whiteSpace: "nowrap",
                      lineHeight: "20px",
                      letterSpacing: "0.060em",
                      color: "var(--badge-purple)",
                      flexShrink: 0,
                    }}>9</span>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "rgb(44,52,47)",
                  borderTop: "1px solid rgb(74,89,80)",
                  borderRight: "1px solid rgb(74,89,80)",
                  borderBottom: "1px solid rgb(74,89,80)",
                  borderLeft: "1px solid rgb(74,89,80)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
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
                    overflow: "hidden",
                    borderRadius: 6,
                    backgroundColor: "var(--badge-red)",
                    boxShadow: "0 0 0 1px var(--red-700)",
                    display: "flex",
                    flexDirection: "row",
                    gap: "calc(var(--padding-xs) * 1px)",
                    padding: "4px 12px 4px 12px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "nowrap",
                    boxSizing: "border-box",
                    paddingLeft: "calc(var(--padding-sm) * 1px)",
                    paddingTop: "calc(var(--padding-xxs) * 1px)",
                    paddingRight: "calc(var(--padding-sm) * 1px)",
                    paddingBottom: "calc(var(--padding-xxs) * 1px)",
                    flexShrink: 0,
                  }}>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 500,
                      fontSize: 14,
                      whiteSpace: "nowrap",
                      lineHeight: "20px",
                      letterSpacing: "0.060em",
                      color: "var(--badge-red)",
                      flexShrink: 0,
                    }}>3</span>
                  </div>
                </div>
              </div>
              <div style={{
                position: "relative",
                width: 146,
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
                  text1={"Order Status"}
                  state={"active"}
                  size={"lg"}
                  misc={"top bar"}
                />
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "rgb(44,52,47)",
                  borderTop: "1px solid rgb(74,89,80)",
                  borderRight: "1px solid rgb(74,89,80)",
                  borderBottom: "1px solid rgb(74,89,80)",
                  borderLeft: "1px solid rgb(74,89,80)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: 6,
                    backgroundColor: "var(--badge-red)",
                    boxShadow: "0 0 0 1px var(--red-700)",
                    display: "flex",
                    flexDirection: "row",
                    gap: "calc(var(--padding-xs) * 1px)",
                    padding: "4px 12px 4px 12px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "nowrap",
                    boxSizing: "border-box",
                    paddingLeft: "calc(var(--padding-sm) * 1px)",
                    paddingTop: "calc(var(--padding-xxs) * 1px)",
                    paddingRight: "calc(var(--padding-sm) * 1px)",
                    paddingBottom: "calc(var(--padding-xxs) * 1px)",
                    flexShrink: 0,
                  }}>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 500,
                      fontSize: 14,
                      whiteSpace: "nowrap",
                      lineHeight: "20px",
                      letterSpacing: "0.060em",
                      color: "var(--badge-success)",
                      flexShrink: 0,
                    }}>Confirmed</span>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "rgb(44,52,47)",
                  borderTop: "1px solid rgb(74,89,80)",
                  borderRight: "1px solid rgb(74,89,80)",
                  borderBottom: "1px solid rgb(74,89,80)",
                  borderLeft: "1px solid rgb(74,89,80)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    width: 91,
                    overflow: "hidden",
                    borderRadius: 6,
                    backgroundColor: "var(--badge-red)",
                    boxShadow: "0 0 0 1px var(--red-700)",
                    display: "flex",
                    flexDirection: "row",
                    gap: 8,
                    padding: "4px 12px 4px 12px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "nowrap",
                    boxSizing: "border-box",
                    paddingLeft: "calc(var(--padding-lg) * 1px)",
                    paddingRight: "calc(var(--padding-lg) * 1px)",
                    flexShrink: 0,
                  }}>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 500,
                      fontSize: 14,
                      whiteSpace: "nowrap",
                      lineHeight: "20px",
                      letterSpacing: "0.060em",
                      color: "var(--badge-pending)",
                      flexShrink: 0,
                    }}>Pending</span>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 64,
                  overflow: "hidden",
                  backgroundColor: "rgb(44,52,47)",
                  borderTop: "1px solid rgb(74,89,80)",
                  borderRight: "1px solid rgb(74,89,80)",
                  borderBottom: "1px solid rgb(74,89,80)",
                  borderLeft: "1px solid rgb(74,89,80)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    width: 91,
                    overflow: "hidden",
                    borderRadius: 6,
                    backgroundColor: "var(--badge-red)",
                    boxShadow: "0 0 0 1px var(--red-700)",
                    display: "flex",
                    flexDirection: "row",
                    gap: 8,
                    padding: "4px 12px 4px 12px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "nowrap",
                    boxSizing: "border-box",
                    paddingLeft: "calc(var(--padding-xl) * 1px)",
                    paddingRight: "calc(var(--padding-xl) * 1px)",
                    flexShrink: 0,
                  }}>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 500,
                      fontSize: 14,
                      whiteSpace: "nowrap",
                      lineHeight: "20px",
                      letterSpacing: "0.060em",
                      color: "var(--badge-red)",
                      flexShrink: 0,
                    }}>Cancel</span>
                  </div>
                </div>
              </div>
              <div style={{
                position: "relative",
                width: 134,
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
                  text1={"Amount"}
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
                  label={"$34.00"}
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
                  label={"$134.00"}
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
                  label={"$38.00"}
                  showDescription={false}
                  state={"default"}
                  size={"xl"}
                  misc={"avatar - title"}
                />
              </div>
              <div style={{
                position: "relative",
                width: 137,
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
                  text1={"Invoiced"}
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
                  label={"INV-000003"}
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
                  label={"INV-000004"}
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
                  label={"INV-000005"}
                  showDescription={false}
                  state={"default"}
                  size={"xl"}
                  misc={"avatar - title"}
                />
              </div>
              <div style={{
                position: "relative",
                width: 140,
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
                  text1={"Action"}
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
                  showDescription={false}
                  label={"INV-000003"}
                  state={"default"}
                  size={"xl"}
                  misc={"icon button"}
                />
                <TableComponent
                  style={{
                    position: "relative",
                    height: 64,
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  showDescription={false}
                  label={"INV-000003"}
                  state={"default"}
                  size={"xl"}
                  misc={"icon button"}
                />
                <TableComponent
                  style={{
                    position: "relative",
                    height: 64,
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  showDescription={false}
                  label={"INV-000003"}
                  state={"default"}
                  size={"xl"}
                  misc={"icon button"}
                />
              </div>
            </div>
          </div>
        </div>
        <NativeHomeIndicator style={{
            position: "absolute",
            left: 0,
            top: 2512,
            width: 375,
            height: 34,
          }} />
      </div>
    </div>
  );
}
export default Dashboard;
