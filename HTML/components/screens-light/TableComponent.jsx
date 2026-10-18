import { Avatar } from './Avatar.jsx';
import { Checkbox10 } from './Checkbox10.jsx';
import { Chips } from './Chips.jsx';
import { Progress } from './Progress.jsx';

// figma node: 9001:64180 Table Component (9 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state) + '|' + "size=" + __venc(p.size) + '|' + "misc=" + __venc(p.misc);

export function TableComponent(_p = {}) {
  const props = { ..._p, state: _p.state ?? "default", size: _p.size ?? "lg", misc: _p.misc ?? "icon button", showDescription: _p.showDescription ?? true, description: _p.description ?? "Description", checkMark: _p.checkMark ?? true, avatar: _p.avatar ?? true, title: _p.title ?? true, label: _p.label ?? "Title" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 250,
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
      position: "relative",
      ...props.style,
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
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <Checkbox10 state={"default"} active={"off"} indeterminate={"off"} />}</div>
        <div style={{
            position: "relative",
            width: 40,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <Avatar type={"avatar 14"} status={"lg"} size={"40"} />}</div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: "calc(var(--padding-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          {props.title && (
          <span style={{
            position: "relative",
            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "var(--text-primary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.label}</span>
          )}
          {props.showDescription && (
          <span style={{
            position: "relative",
            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: "16px",
            color: "var(--text-secondary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.description}</span>
          )}
        </div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 250,
      height: 64,
      overflow: "hidden",
      backgroundColor: "var(--background-bg-secondary)",
      borderTop: "1px solid var(--border-border-primary)",
      borderRight: "1px solid var(--border-border-primary)",
      borderBottom: "1px solid var(--border-border-primary)",
      borderLeft: "1px solid var(--border-border-primary)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <Chips color={"orange"} type={"filled"} />}</div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 250,
      height: 64,
      overflow: "hidden",
      backgroundColor: "var(--background-bg-primary)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
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
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <Checkbox10 state={"default"} active={"off"} indeterminate={"off"} />}</div>
        <div style={{
            position: "relative",
            width: 40,
            height: 40,
            flexShrink: 0,
          }}>{props.icon2 ?? <Avatar type={"avatar 14"} status={"lg"} size={"40"} />}</div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: "calc(var(--padding-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          {props.title && (
          <span style={{
            position: "relative",
            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: "22px",
            color: "var(--text-primary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.label}</span>
          )}
          {props.showDescription && (
          <span style={{
            position: "relative",
            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: "16px",
            color: "var(--text-secondary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.description}</span>
          )}
        </div>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 250,
      height: 48,
      overflow: "hidden",
      backgroundColor: "var(--background-bg-secondary)",
      borderTop: "1px solid var(--border-border-primary)",
      borderRight: "1px solid var(--border-border-primary)",
      borderBottom: "1px solid var(--border-border-primary)",
      borderLeft: "1px solid var(--border-border-primary)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--padding-xs) * 1px)",
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-sm) * 1px)",
      paddingTop: "calc(var(--padding-xs) * 1px)",
      paddingRight: "calc(var(--padding-sm) * 1px)",
      paddingBottom: "calc(var(--padding-xs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
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
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <Checkbox10 state={"default"} active={"off"} indeterminate={"off"} />}</div>
        {props.title && (
        <div style={{
          position: "relative",
          width: 142,
          display: "flex",
          flexDirection: "column",
          gap: 6,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: "20px",
            letterSpacing: "0.060em",
            color: "var(--text-primary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text1 ?? "Top Title"}</span>
        </div>
        )}
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 250,
      height: 48,
      overflow: "hidden",
      backgroundColor: "var(--background-bg-primary)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--padding-xs) * 1px)",
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-sm) * 1px)",
      paddingTop: "calc(var(--padding-xs) * 1px)",
      paddingRight: "calc(var(--padding-sm) * 1px)",
      paddingBottom: "calc(var(--padding-xs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
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
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <Checkbox10 state={"default"} active={"off"} indeterminate={"off"} />}</div>
        {props.title && (
        <div style={{
          position: "relative",
          width: 142,
          display: "flex",
          flexDirection: "column",
          gap: 6,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: "20px",
            letterSpacing: "0.060em",
            color: "var(--text-primary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text1 ?? "Top Title"}</span>
        </div>
        )}
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 250,
      height: 64,
      overflow: "hidden",
      backgroundColor: "var(--background-bg-secondary)",
      borderTop: "1px solid var(--border-border-primary)",
      borderRight: "1px solid var(--border-border-primary)",
      borderBottom: "1px solid var(--border-border-primary)",
      borderLeft: "1px solid var(--border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--padding-xs) * 1px)",
      padding: "8px 16px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-12) * 1px)",
      paddingTop: "calc(var(--spacing-8) * 1px)",
      paddingRight: "calc(var(--spacing-16) * 1px)",
      paddingBottom: "calc(var(--spacing-8) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 32,
        overflow: "hidden",
        borderRadius: 6,
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
          width: 16,
          height: 16,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={10.099} height={3.985} viewBox="0 0 10.099 3.985" fill="none" style={{
            position: "absolute",
            left: 2.79,
            top: 2.24,
            width: 10.099,
            height: 3.985,
            color: "rgb(145,153,146)",
          }}>
            <path d={"M 6.945 0.563 L 7.6 0.263 L 7.6 0.262 L 6.945 0.563 Z M 7.469 1.705 L 6.814 2.005 C 6.932 2.261 7.187 2.425 7.469 2.425 L 7.469 1.705 Z M 2.63 1.705 L 2.63 2.425 C 2.911 2.425 3.167 2.261 3.284 2.005 L 2.63 1.705 Z M 3.153 0.563 L 2.499 0.262 L 2.499 0.263 L 3.153 0.563 Z M 6.291 0.863 L 6.814 2.005 L 8.123 1.405 L 7.6 0.263 L 6.291 0.863 Z M 7.469 2.425 L 9.158 2.425 L 9.158 0.985 L 7.469 0.985 L 7.469 2.425 Z M 9.158 2.425 C 9.28 2.425 9.379 2.524 9.379 2.645 L 10.819 2.645 C 10.819 1.728 10.075 0.985 9.158 0.985 L 9.158 2.425 Z M 9.379 2.645 L 9.379 3.342 L 10.819 3.342 L 10.819 2.645 L 9.379 2.645 Z M 9.379 3.342 C 9.379 3.299 9.413 3.265 9.456 3.265 L 9.456 4.705 C 10.208 4.705 10.819 4.094 10.819 3.342 L 9.379 3.342 Z M 9.456 3.265 L 0.643 3.265 L 0.643 4.705 L 9.456 4.705 L 9.456 3.265 Z M 0.643 3.265 C 0.686 3.265 0.72 3.299 0.72 3.342 L -0.72 3.342 C -0.72 4.094 -0.11 4.705 0.643 4.705 L 0.643 3.265 Z M 0.72 3.342 L 0.72 2.645 L -0.72 2.645 L -0.72 3.342 L 0.72 3.342 Z M 0.72 2.645 C 0.72 2.524 0.819 2.425 0.94 2.425 L 0.94 0.985 C 0.023 0.985 -0.72 1.728 -0.72 2.645 L 0.72 2.645 Z M 0.94 2.425 L 2.63 2.425 L 2.63 0.985 L 0.94 0.985 L 0.94 2.425 Z M 3.284 2.005 L 3.808 0.863 L 2.499 0.263 L 1.975 1.405 L 3.284 2.005 Z M 3.808 0.863 C 3.848 0.776 3.934 0.72 4.03 0.72 L 4.03 -0.72 C 3.371 -0.72 2.773 -0.336 2.499 0.262 L 3.808 0.863 Z M 4.03 0.72 L 6.069 0.72 L 6.069 -0.72 L 4.03 -0.72 L 4.03 0.72 Z M 6.069 0.72 C 6.164 0.72 6.251 0.776 6.291 0.863 L 7.6 0.262 C 7.325 -0.336 6.727 -0.72 6.069 -0.72 L 6.069 0.72 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={8.128} height={7.488} viewBox="0 0 8.128 7.488" fill="none" style={{
            position: "absolute",
            left: 3.776,
            top: 6.273,
            width: 8.128,
            height: 7.488,
            color: "rgb(145,153,146)",
          }}>
            <path d={"M 8.848 0 C 8.848 -0.398 8.526 -0.72 8.128 -0.72 C 7.73 -0.72 7.408 -0.398 7.408 0 L 8.848 0 Z M 0.72 0 C 0.72 -0.398 0.398 -0.72 0 -0.72 C -0.398 -0.72 -0.72 -0.398 -0.72 0 L 0.72 0 Z M 7.408 0 L 7.408 5.559 L 8.848 5.559 L 8.848 0 L 7.408 0 Z M 7.408 5.559 C 7.408 6.235 6.869 6.768 6.223 6.768 L 6.223 8.208 C 7.681 8.208 8.848 7.013 8.848 5.559 L 7.408 5.559 Z M 6.223 6.768 L 1.905 6.768 L 1.905 8.208 L 6.223 8.208 L 6.223 6.768 Z M 1.905 6.768 C 1.259 6.768 0.72 6.235 0.72 5.559 L -0.72 5.559 C -0.72 7.013 0.447 8.208 1.905 8.208 L 1.905 6.768 Z M 0.72 5.559 L 0.72 0 L -0.72 0 L -0.72 5.559 L 0.72 5.559 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={2.163} height={2.885} viewBox="0 0 2.163 2.885" fill="none" style={{
            position: "absolute",
            left: 6.758,
            top: 8.522,
            width: 2.163,
            height: 2.885,
            color: "rgb(145,153,146)",
          }}>
            <path d={"M 0.72 0 C 0.72 -0.398 0.398 -0.72 0 -0.72 C -0.398 -0.72 -0.72 -0.398 -0.72 0 L 0.72 0 Z M -0.72 2.885 C -0.72 3.283 -0.398 3.605 0 3.605 C 0.398 3.605 0.72 3.283 0.72 2.885 L -0.72 2.885 Z M 2.883 0 C 2.883 -0.398 2.561 -0.72 2.163 -0.72 C 1.766 -0.72 1.443 -0.398 1.443 0 L 2.883 0 Z M 1.443 2.885 C 1.443 3.283 1.766 3.605 2.163 3.605 C 2.561 3.605 2.883 3.283 2.883 2.885 L 1.443 2.885 Z M -0.72 0 L -0.72 2.885 L 0.72 2.885 L 0.72 0 L -0.72 0 Z M 1.443 0 L 1.443 2.885 L 2.883 2.885 L 2.883 0 L 1.443 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          width: 16,
          height: 16,
          overflow: "hidden",
          flexShrink: 0,
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
        borderRadius: 6,
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
          width: 16,
          height: 16,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <div style={{
            position: "absolute",
            left: 2,
            top: 2,
            width: 12,
            height: 11.629,
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 18,
              height: 17.443,
              overflow: "hidden",
            }}>
              <svg width={7.253} height={1.500} viewBox="0 -0.750 7.253 1.500" fill="none" style={{
                position: "absolute",
                left: 10.747,
                top: 17.443,
                width: 7.253,
                height: 1.5,
                color: "var(--icon-secondary)",
              }}>
                <path d={"M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 -0.75 Z M 7.253 0.75 C 7.667 0.75 8.003 0.414 8.003 0 C 8.003 -0.414 7.667 -0.75 7.253 -0.75 L 7.253 0.75 Z M 0 0.75 L 7.253 0.75 L 7.253 -0.75 L 0 -0.75 L 0 0.75 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
              <svg width={15.680} height={17.443} viewBox="0 0 15.680 17.443" fill="none" style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 15.68,
                height: 17.443,
                color: "var(--icon-secondary)",
              }}>
                <path d={"M 9.78 0.795 L 9.205 0.314 C 9.201 0.318 9.198 0.322 9.194 0.326 L 9.78 0.795 Z M 12.896 0.492 L 12.427 1.077 L 12.432 1.081 L 12.896 0.492 Z M 14.629 1.839 L 14.169 2.431 C 14.192 2.449 14.216 2.466 14.241 2.481 L 14.629 1.839 Z M 15.349 4.823 L 14.715 4.423 L 14.713 4.425 L 15.349 4.823 Z M 5.812 16.764 L 6.397 17.234 L 6.398 17.233 L 5.812 16.764 Z M 4.503 17.397 L 4.495 16.647 L 4.493 16.647 L 4.503 17.397 Z M 0.864 17.443 L 0.134 17.615 C 0.214 17.957 0.522 18.197 0.873 18.193 L 0.864 17.443 Z M 0.044 13.972 L -0.687 14.144 L -0.686 14.145 L 0.044 13.972 Z M 0.36 12.577 L 0.945 13.046 L 0.945 13.046 L 0.36 12.577 Z M 10.355 1.276 C 10.867 0.664 11.797 0.571 12.427 1.077 L 13.366 -0.093 C 12.103 -1.107 10.244 -0.929 9.205 0.314 L 10.355 1.276 Z M 12.432 1.081 C 12.461 1.104 12.898 1.443 13.322 1.773 C 13.536 1.939 13.747 2.103 13.906 2.226 C 13.985 2.288 14.051 2.339 14.097 2.375 C 14.12 2.393 14.138 2.407 14.15 2.416 C 14.157 2.421 14.161 2.425 14.165 2.427 C 14.166 2.429 14.167 2.429 14.168 2.43 C 14.169 2.43 14.169 2.431 14.169 2.431 C 14.169 2.431 14.169 2.431 14.169 2.431 C 14.169 2.431 14.169 2.431 14.169 2.431 C 14.169 2.431 14.169 2.431 14.629 1.839 C 15.09 1.247 15.09 1.247 15.09 1.246 C 15.09 1.246 15.09 1.246 15.09 1.246 C 15.089 1.246 15.089 1.246 15.089 1.246 C 15.089 1.246 15.089 1.246 15.088 1.246 C 15.088 1.245 15.086 1.244 15.085 1.243 C 15.082 1.24 15.077 1.237 15.071 1.232 C 15.058 1.222 15.04 1.208 15.017 1.19 C 14.971 1.155 14.905 1.103 14.826 1.042 C 14.668 0.919 14.456 0.754 14.243 0.588 C 14.029 0.423 13.814 0.256 13.649 0.127 C 13.567 0.063 13.497 0.009 13.446 -0.031 C 13.421 -0.05 13.4 -0.066 13.385 -0.078 C 13.378 -0.084 13.372 -0.089 13.367 -0.092 C 13.365 -0.094 13.363 -0.095 13.362 -0.096 C 13.361 -0.097 13.36 -0.098 13.36 -0.097 L 12.432 1.081 Z M 14.241 2.481 C 14.927 2.895 15.13 3.764 14.715 4.423 L 15.984 5.223 C 16.854 3.842 16.411 2.039 15.017 1.197 L 14.241 2.481 Z M 14.713 4.425 C 14.739 4.384 14.773 4.343 14.749 4.373 C 14.745 4.378 14.739 4.386 14.73 4.398 C 14.712 4.421 14.685 4.455 14.649 4.499 C 14.578 4.589 14.475 4.719 14.343 4.884 C 14.08 5.214 13.706 5.683 13.259 6.244 C 12.363 7.366 11.172 8.857 9.982 10.346 C 8.792 11.835 7.603 13.323 6.712 14.438 C 6.266 14.996 5.894 15.46 5.635 15.785 C 5.505 15.948 5.402 16.076 5.333 16.163 C 5.298 16.206 5.271 16.24 5.253 16.262 C 5.244 16.273 5.238 16.282 5.233 16.288 C 5.231 16.29 5.229 16.293 5.228 16.294 C 5.227 16.295 5.227 16.295 5.227 16.296 C 5.226 16.296 5.226 16.296 5.226 16.296 C 5.226 16.296 5.226 16.296 5.812 16.764 C 6.398 17.233 6.398 17.233 6.398 17.233 C 6.398 17.233 6.398 17.232 6.398 17.232 C 6.398 17.232 6.399 17.231 6.399 17.231 C 6.401 17.229 6.402 17.227 6.405 17.224 C 6.409 17.218 6.416 17.21 6.425 17.199 C 6.443 17.176 6.47 17.143 6.504 17.099 C 6.574 17.012 6.676 16.884 6.806 16.722 C 7.066 16.397 7.437 15.932 7.883 15.375 C 8.775 14.259 9.964 12.772 11.154 11.282 C 12.344 9.793 13.535 8.302 14.431 7.179 C 14.879 6.618 15.253 6.149 15.516 5.819 C 15.648 5.654 15.752 5.523 15.824 5.432 C 15.86 5.387 15.888 5.351 15.908 5.326 C 15.918 5.313 15.926 5.303 15.933 5.294 C 15.936 5.29 15.94 5.285 15.944 5.28 C 15.946 5.277 15.949 5.273 15.953 5.268 C 15.955 5.265 15.959 5.259 15.962 5.255 C 15.966 5.249 15.978 5.232 15.985 5.22 L 14.713 4.425 Z M 5.227 16.295 C 5.053 16.513 4.785 16.644 4.495 16.647 L 4.511 18.147 C 5.246 18.139 5.939 17.805 6.397 17.234 L 5.227 16.295 Z M 4.493 16.647 L 0.854 16.693 L 0.873 18.193 L 4.512 18.147 L 4.493 16.647 Z M 1.593 17.271 L 0.773 13.8 L -0.686 14.145 L 0.134 17.615 L 1.593 17.271 Z M 0.774 13.8 C 0.712 13.537 0.773 13.261 0.945 13.046 L -0.225 12.108 C -0.686 12.683 -0.854 13.432 -0.687 14.144 L 0.774 13.8 Z M 0.945 13.046 L 10.366 1.263 L 9.194 0.326 L -0.226 12.109 L 0.945 13.046 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
              <svg width={5.452} height={4.187} viewBox="0 0 5.452 4.187" fill="none" style={{
                position: "absolute",
                left: 8.021,
                top: 3.001,
                width: 5.452,
                height: 4.187,
                color: "var(--icon-secondary)",
              }}>
                <path d={"M 0.457 -0.595 C 0.128 -0.847 -0.343 -0.785 -0.595 -0.457 C -0.847 -0.128 -0.785 0.343 -0.457 0.595 L 0.457 -0.595 Z M 4.995 4.782 C 5.324 5.034 5.795 4.972 6.047 4.644 C 6.299 4.315 6.238 3.845 5.909 3.592 L 4.995 4.782 Z M -0.457 0.595 L 4.995 4.782 L 5.909 3.592 L 0.457 -0.595 L -0.457 0.595 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        <div style={{
          position: "relative",
          width: 16,
          height: 16,
          overflow: "hidden",
          flexShrink: 0,
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
        borderRadius: 6,
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
            color: "rgb(145,153,146)",
          }}>
            <path d={"M 1.333 0 C 0.598 0 0 0.598 0 1.333 C 0 2.069 0.598 2.667 1.333 2.667 C 2.069 2.667 2.667 2.069 2.667 1.333 C 2.667 0.598 2.069 0 1.333 0 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
          <svg width={2.667} height={2.667} viewBox="0 0 2.667 2.667" fill="none" style={{
            position: "absolute",
            left: 6.667,
            top: 6.667,
            width: 2.667,
            height: 2.667,
            color: "rgb(145,153,146)",
          }}>
            <path d={"M 1.333 0 C 0.598 0 0 0.598 0 1.333 C 0 2.069 0.598 2.667 1.333 2.667 C 2.069 2.667 2.667 2.069 2.667 1.333 C 2.667 0.598 2.069 0 1.333 0 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
          <svg width={2.667} height={2.667} viewBox="0 0 2.667 2.667" fill="none" style={{
            position: "absolute",
            left: 11.333,
            top: 6.667,
            width: 2.667,
            height: 2.667,
            color: "rgb(145,153,146)",
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
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 250,
      height: 64,
      overflow: "hidden",
      backgroundColor: "var(--background-bg-secondary)",
      borderTop: "1px solid var(--border-border-primary)",
      borderRight: "1px solid var(--border-border-primary)",
      borderBottom: "1px solid var(--border-border-primary)",
      borderLeft: "1px solid var(--border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--padding-xs) * 1px)",
      padding: "8px 16px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-12) * 1px)",
      paddingTop: "calc(var(--spacing-8) * 1px)",
      paddingRight: "calc(var(--spacing-16) * 1px)",
      paddingBottom: "calc(var(--spacing-8) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 73,
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
          width: 16,
          height: 16,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={2.627} height={4.218} viewBox="0 0 2.627 4.218" fill="none" style={{
            position: "absolute",
            left: 1.921,
            top: 9.863,
            width: 2.627,
            height: 4.218,
            color: "var(--icon-primary)",
          }}>
            <path d={"M 1.313 0 C 0.589 0 0 0.591 0 1.318 L 0 2.906 C 0 3.629 0.589 4.218 1.313 4.218 C 2.037 4.218 2.627 3.629 2.627 2.906 L 2.627 1.318 C 2.627 0.591 2.037 0 1.313 0 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
          <svg width={2.627} height={12.160} viewBox="0 0 2.627 12.160" fill="none" style={{
            position: "absolute",
            left: 11.453,
            top: 1.92,
            width: 2.627,
            height: 12.16,
            color: "var(--icon-primary)",
          }}>
            <path d={"M 1.313 0 C 0.589 0 0 0.589 0 1.312 L 0 10.848 C 0 11.571 0.589 12.16 1.313 12.16 C 2.038 12.16 2.627 11.571 2.627 10.848 L 2.627 1.312 C 2.627 0.589 2.038 0 1.313 0 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
          <svg width={2.627} height={6.599} viewBox="0 0 2.627 6.599" fill="none" style={{
            position: "absolute",
            left: 6.687,
            top: 7.481,
            width: 2.627,
            height: 6.599,
            color: "var(--icon-primary)",
          }}>
            <path d={"M 1.313 0 C 0.589 0 0 0.589 0 1.313 L 0 5.287 C 0 6.01 0.589 6.599 1.313 6.599 C 2.037 6.599 2.627 6.01 2.627 5.287 L 2.627 1.313 C 2.627 0.589 2.037 0 1.313 0 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
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
          color: "var(--text-primary)",
          flexShrink: 0,
        }}>40%</span>
        <div style={{
          position: "relative",
          width: 16,
          height: 16,
          overflow: "hidden",
          flexShrink: 0,
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
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 250,
      height: 64,
      overflow: "hidden",
      backgroundColor: "var(--background-bg-secondary)",
      borderTop: "1px solid var(--border-border-primary)",
      borderRight: "1px solid var(--border-border-primary)",
      borderBottom: "1px solid var(--border-border-primary)",
      borderLeft: "1px solid var(--border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--padding-xs) * 1px)",
      padding: "8px 16px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-12) * 1px)",
      paddingTop: "calc(var(--spacing-8) * 1px)",
      paddingRight: "calc(var(--spacing-16) * 1px)",
      paddingBottom: "calc(var(--spacing-8) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <Progress
        style={{ position: "relative", flexShrink: 0 }}
        property1={"10%"}
      />
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 250,
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
      position: "relative",
      ...props.style,
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
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <Checkbox10 state={"default"} active={"off"} indeterminate={"off"} />}</div>
        <div style={{
            position: "relative",
            width: 32,
            height: 32,
            flexShrink: 0,
          }}>{props.icon2 ?? <Avatar type={"avatar 14"} status={"sm"} size={"32"} />}</div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: "calc(var(--padding-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
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
          }}>{props.text1 ?? "Title"}</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: "16px",
            color: "var(--text-secondary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text2 ?? "Description"}</span>
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: State=Default, Size=X-Large (64), Misc=Avatar - Title
    "state=default|size=xl|misc=avatar - title": __body0,
    // figma: State=Default, Size=X-Large (64), Misc=Badge
    "state=default|size=xl|misc=badge": __body1,
    // figma: State=Active, Size=X-Large (64), Misc=Avatar - Title
    "state=active|size=xl|misc=avatar - title": __body2,
    // figma: State=Default, Size=Large (48), Misc=Top Bar
    "state=default|size=lg|misc=top bar": __body3,
    // figma: State=Active, Size=Large (48), Misc=Top Bar
    "state=active|size=lg|misc=top bar": __body4,
    // figma: State=Default, Size=X-Large (64), Misc=Icon Button
    "state=default|size=xl|misc=icon button": __body5,
    // figma: State=Default, Size=X-Large (64), Misc=Single Button
    "state=default|size=xl|misc=single button": __body6,
    // figma: State=Default, Size=X-Large (64), Misc=Progress bar
    "state=default|size=xl|misc=progress bar": __body7,
    // figma: State=Default, Size=Large (48), Misc=Title
    "state=default|size=lg|misc=title": __body8,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default TableComponent;
