import { ArrowLeft2 } from './ArrowLeft2.jsx';
import { ArrowRight22 } from './ArrowRight22.jsx';
import { Hide } from './Hide.jsx';
import { InfoCircle4 } from './InfoCircle4.jsx';
import { Lock } from './Lock.jsx';
import { Profile } from './Profile.jsx';

// figma node: 9001:64389 Input Field (10 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state) + '|' + "type=" + __venc(p.type);

export function InputField(_p = {}) {
  const props = { ..._p, state: _p.state ?? "default", type: _p.type ?? "password" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 322,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--padding-xxs) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 34,
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
        }}>Label</span>
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
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
            }}>{props.icon2 ?? <Profile />}</div>
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
          }}>{props.text1 ?? "Placeholder"}</span>
        </div>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon3 ?? <InfoCircle4 style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--4) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
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
            color: "rgb(145,153,146)",
          }}>
            <path d={"M -0.6 6 C -0.6 9.645 2.355 12.6 6 12.6 L 6 11.4 C 3.017 11.4 0.6 8.982 0.6 6 L -0.6 6 Z M 6 12.6 C 9.645 12.6 12.6 9.645 12.6 6 L 11.4 6 C 11.4 8.982 8.983 11.4 6 11.4 L 6 12.6 Z M 12.6 6 C 12.6 2.355 9.645 -0.6 6 -0.6 L 6 0.6 C 8.983 0.6 11.4 3.017 11.4 6 L 12.6 6 Z M 6 -0.6 C 2.355 -0.6 -0.6 2.355 -0.6 6 L 0.6 6 C 0.6 3.017 3.017 0.6 6 0.6 L 6 -0.6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={0.004} height={4.935} viewBox="0 0 0.004 4.935" fill="none" style={{
            position: "absolute",
            left: 8,
            top: 5.527,
            width: 0.004,
            height: 4.935,
            color: "rgb(145,153,146)",
          }}>
            <path d={"M -0.596 4.935 C -0.596 5.266 -0.328 5.535 0.004 5.535 C 0.335 5.535 0.604 5.266 0.604 4.935 L -0.596 4.935 Z M 0.604 2.068 C 0.604 1.737 0.335 1.468 0.004 1.468 C -0.328 1.468 -0.596 1.737 -0.596 2.068 L 0.604 2.068 Z M -0.6 0.042 C -0.6 0.374 -0.331 0.642 0 0.642 C 0.331 0.642 0.6 0.374 0.6 0.042 L -0.6 0.042 Z M 0.6 0 C 0.6 -0.331 0.331 -0.6 0 -0.6 C -0.331 -0.6 -0.6 -0.331 -0.6 0 L 0.6 0 Z M 0.604 4.935 L 0.604 2.068 L -0.596 2.068 L -0.596 4.935 L 0.604 4.935 Z M 0.6 0.042 L 0.6 0 L -0.6 0 L -0.6 0.042 L 0.6 0.042 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "var(--text-secondary)",
          flexShrink: 0,
          filter: "drop-shadow(0px 1px 2px rgba(20,28,36,0.04))",
        }}>Helper Text</span>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 322,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--padding-xxs) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 34,
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
        }}>Label</span>
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
        boxShadow: "inset 0 0 0 1px var(--border-border-secondary), 0px 1px 2px 0px rgba(12,17,15,0.1)",
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
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
            }}>{props.icon2 ?? <Profile />}</div>
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
          }}>{props.text1 ?? "Placeholder"}</span>
        </div>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon3 ?? <InfoCircle4 style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--4) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
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
            color: "rgb(145,153,146)",
          }}>
            <path d={"M -0.6 6 C -0.6 9.645 2.355 12.6 6 12.6 L 6 11.4 C 3.017 11.4 0.6 8.982 0.6 6 L -0.6 6 Z M 6 12.6 C 9.645 12.6 12.6 9.645 12.6 6 L 11.4 6 C 11.4 8.982 8.983 11.4 6 11.4 L 6 12.6 Z M 12.6 6 C 12.6 2.355 9.645 -0.6 6 -0.6 L 6 0.6 C 8.983 0.6 11.4 3.017 11.4 6 L 12.6 6 Z M 6 -0.6 C 2.355 -0.6 -0.6 2.355 -0.6 6 L 0.6 6 C 0.6 3.017 3.017 0.6 6 0.6 L 6 -0.6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={0.004} height={4.935} viewBox="0 0 0.004 4.935" fill="none" style={{
            position: "absolute",
            left: 8,
            top: 5.527,
            width: 0.004,
            height: 4.935,
            color: "rgb(145,153,146)",
          }}>
            <path d={"M -0.596 4.935 C -0.596 5.266 -0.328 5.535 0.004 5.535 C 0.335 5.535 0.604 5.266 0.604 4.935 L -0.596 4.935 Z M 0.604 2.068 C 0.604 1.737 0.335 1.468 0.004 1.468 C -0.328 1.468 -0.596 1.737 -0.596 2.068 L 0.604 2.068 Z M -0.6 0.042 C -0.6 0.374 -0.331 0.642 0 0.642 C 0.331 0.642 0.6 0.374 0.6 0.042 L -0.6 0.042 Z M 0.6 0 C 0.6 -0.331 0.331 -0.6 0 -0.6 C -0.331 -0.6 -0.6 -0.331 -0.6 0 L 0.6 0 Z M 0.604 4.935 L 0.604 2.068 L -0.596 2.068 L -0.596 4.935 L 0.604 4.935 Z M 0.6 0.042 L 0.6 0 L -0.6 0 L -0.6 0.042 L 0.6 0.042 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "var(--text-secondary)",
          flexShrink: 0,
          filter: "drop-shadow(0px 1px 2px rgba(20,28,36,0.04))",
        }}>Helper Text</span>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 322,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--padding-xxs) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 34,
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
        }}>Label</span>
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
        boxShadow: "inset 0 0 0 1px var(--border-border-focused), 0px 1px 2px 0px rgba(12,17,15,0.1)",
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
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
            }}>{props.icon2 ?? <Profile />}</div>
          <span style={{
            position: "relative",
            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 16,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: "22px",
            color: "var(--text-disabled)",
            flexShrink: 0,
          }}>{props.text1 ?? "|typing..."}</span>
        </div>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon3 ?? <InfoCircle4 style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--4) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
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
            color: "rgb(145,153,146)",
          }}>
            <path d={"M -0.6 6 C -0.6 9.645 2.355 12.6 6 12.6 L 6 11.4 C 3.017 11.4 0.6 8.982 0.6 6 L -0.6 6 Z M 6 12.6 C 9.645 12.6 12.6 9.645 12.6 6 L 11.4 6 C 11.4 8.982 8.983 11.4 6 11.4 L 6 12.6 Z M 12.6 6 C 12.6 2.355 9.645 -0.6 6 -0.6 L 6 0.6 C 8.983 0.6 11.4 3.017 11.4 6 L 12.6 6 Z M 6 -0.6 C 2.355 -0.6 -0.6 2.355 -0.6 6 L 0.6 6 C 0.6 3.017 3.017 0.6 6 0.6 L 6 -0.6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={0.004} height={4.935} viewBox="0 0 0.004 4.935" fill="none" style={{
            position: "absolute",
            left: 8,
            top: 5.527,
            width: 0.004,
            height: 4.935,
            color: "rgb(145,153,146)",
          }}>
            <path d={"M -0.596 4.935 C -0.596 5.266 -0.328 5.535 0.004 5.535 C 0.335 5.535 0.604 5.266 0.604 4.935 L -0.596 4.935 Z M 0.604 2.068 C 0.604 1.737 0.335 1.468 0.004 1.468 C -0.328 1.468 -0.596 1.737 -0.596 2.068 L 0.604 2.068 Z M -0.6 0.042 C -0.6 0.374 -0.331 0.642 0 0.642 C 0.331 0.642 0.6 0.374 0.6 0.042 L -0.6 0.042 Z M 0.6 0 C 0.6 -0.331 0.331 -0.6 0 -0.6 C -0.331 -0.6 -0.6 -0.331 -0.6 0 L 0.6 0 Z M 0.604 4.935 L 0.604 2.068 L -0.596 2.068 L -0.596 4.935 L 0.604 4.935 Z M 0.6 0.042 L 0.6 0 L -0.6 0 L -0.6 0.042 L 0.6 0.042 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "var(--text-secondary)",
          flexShrink: 0,
          filter: "drop-shadow(0px 1px 2px rgba(20,28,36,0.04))",
        }}>Helper Text</span>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 322,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--padding-xxs) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 34,
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
        }}>Label</span>
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
        backgroundColor: "var(--background-bg-primary)",
        boxShadow: "inset 0 0 0 1px var(--border-border-secondary), 0px 1px 2px 0px rgba(12,17,15,0.1)",
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
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
            }}>{props.icon2 ?? <Profile />}</div>
          <span style={{
            position: "relative",
            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 16,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: "22px",
            color: "var(--text-primary)",
            flexShrink: 0,
          }}>{props.text1 ?? "Placeholder"}</span>
        </div>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon3 ?? <InfoCircle4 style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--4) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
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
            color: "rgb(145,153,146)",
          }}>
            <path d={"M -0.6 6 C -0.6 9.645 2.355 12.6 6 12.6 L 6 11.4 C 3.017 11.4 0.6 8.982 0.6 6 L -0.6 6 Z M 6 12.6 C 9.645 12.6 12.6 9.645 12.6 6 L 11.4 6 C 11.4 8.982 8.983 11.4 6 11.4 L 6 12.6 Z M 12.6 6 C 12.6 2.355 9.645 -0.6 6 -0.6 L 6 0.6 C 8.983 0.6 11.4 3.017 11.4 6 L 12.6 6 Z M 6 -0.6 C 2.355 -0.6 -0.6 2.355 -0.6 6 L 0.6 6 C 0.6 3.017 3.017 0.6 6 0.6 L 6 -0.6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={0.004} height={4.935} viewBox="0 0 0.004 4.935" fill="none" style={{
            position: "absolute",
            left: 8,
            top: 5.527,
            width: 0.004,
            height: 4.935,
            color: "rgb(145,153,146)",
          }}>
            <path d={"M -0.596 4.935 C -0.596 5.266 -0.328 5.535 0.004 5.535 C 0.335 5.535 0.604 5.266 0.604 4.935 L -0.596 4.935 Z M 0.604 2.068 C 0.604 1.737 0.335 1.468 0.004 1.468 C -0.328 1.468 -0.596 1.737 -0.596 2.068 L 0.604 2.068 Z M -0.6 0.042 C -0.6 0.374 -0.331 0.642 0 0.642 C 0.331 0.642 0.6 0.374 0.6 0.042 L -0.6 0.042 Z M 0.6 0 C 0.6 -0.331 0.331 -0.6 0 -0.6 C -0.331 -0.6 -0.6 -0.331 -0.6 0 L 0.6 0 Z M 0.604 4.935 L 0.604 2.068 L -0.596 2.068 L -0.596 4.935 L 0.604 4.935 Z M 0.6 0.042 L 0.6 0 L -0.6 0 L -0.6 0.042 L 0.6 0.042 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "var(--text-secondary)",
          flexShrink: 0,
          filter: "drop-shadow(0px 1px 2px rgba(20,28,36,0.04))",
        }}>Helper Text</span>
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 322,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--padding-xxs) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 34,
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
        }}>Label</span>
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
        backgroundColor: "var(--background-bg-disabled)",
        boxShadow: "inset 0 0 0 1px var(--border-border-disabled)",
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
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
            }}>{props.icon2 ?? <Profile />}</div>
          <span style={{
            position: "relative",
            fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 16,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: "22px",
            color: "var(--text-disabled)",
            flexShrink: 0,
          }}>{props.text1 ?? "Placeholder"}</span>
        </div>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon3 ?? <InfoCircle4 style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--4) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
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
            color: "rgb(209,211,209)",
          }}>
            <path d={"M -0.6 6 C -0.6 9.645 2.355 12.6 6 12.6 L 6 11.4 C 3.017 11.4 0.6 8.982 0.6 6 L -0.6 6 Z M 6 12.6 C 9.645 12.6 12.6 9.645 12.6 6 L 11.4 6 C 11.4 8.982 8.983 11.4 6 11.4 L 6 12.6 Z M 12.6 6 C 12.6 2.355 9.645 -0.6 6 -0.6 L 6 0.6 C 8.983 0.6 11.4 3.017 11.4 6 L 12.6 6 Z M 6 -0.6 C 2.355 -0.6 -0.6 2.355 -0.6 6 L 0.6 6 C 0.6 3.017 3.017 0.6 6 0.6 L 6 -0.6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={0.004} height={4.935} viewBox="0 0 0.004 4.935" fill="none" style={{
            position: "absolute",
            left: 8,
            top: 5.527,
            width: 0.004,
            height: 4.935,
            color: "rgb(209,211,209)",
          }}>
            <path d={"M -0.596 4.935 C -0.596 5.266 -0.328 5.535 0.004 5.535 C 0.335 5.535 0.604 5.266 0.604 4.935 L -0.596 4.935 Z M 0.604 2.068 C 0.604 1.737 0.335 1.468 0.004 1.468 C -0.328 1.468 -0.596 1.737 -0.596 2.068 L 0.604 2.068 Z M -0.6 0.042 C -0.6 0.374 -0.331 0.642 0 0.642 C 0.331 0.642 0.6 0.374 0.6 0.042 L -0.6 0.042 Z M 0.6 0 C 0.6 -0.331 0.331 -0.6 0 -0.6 C -0.331 -0.6 -0.6 -0.331 -0.6 0 L 0.6 0 Z M 0.604 4.935 L 0.604 2.068 L -0.596 2.068 L -0.596 4.935 L 0.604 4.935 Z M 0.6 0.042 L 0.6 0 L -0.6 0 L -0.6 0.042 L 0.6 0.042 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgb(209,211,209)",
          flexShrink: 0,
          filter: "drop-shadow(0px 1px 2px rgba(20,28,36,0.04))",
        }}>Helper Text</span>
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 322,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--padding-xxs) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 34,
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
        }}>Label</span>
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
        backgroundColor: "var(--badge-red-shade)",
        boxShadow: "inset 0 0 0 1px var(--badge-red), 0px 1px 2px 0px rgba(12,17,15,0.1)",
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
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
            }}>{props.icon2 ?? <Profile />}</div>
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
          }}>{props.text1 ?? "Placeholder"}</span>
        </div>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon3 ?? <InfoCircle4 style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--4) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
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
            color: "var(--badge-red)",
          }}>
            <path d={"M -0.6 6 C -0.6 9.645 2.355 12.6 6 12.6 L 6 11.4 C 3.017 11.4 0.6 8.982 0.6 6 L -0.6 6 Z M 6 12.6 C 9.645 12.6 12.6 9.645 12.6 6 L 11.4 6 C 11.4 8.982 8.983 11.4 6 11.4 L 6 12.6 Z M 12.6 6 C 12.6 2.355 9.645 -0.6 6 -0.6 L 6 0.6 C 8.983 0.6 11.4 3.017 11.4 6 L 12.6 6 Z M 6 -0.6 C 2.355 -0.6 -0.6 2.355 -0.6 6 L 0.6 6 C 0.6 3.017 3.017 0.6 6 0.6 L 6 -0.6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={0.004} height={4.935} viewBox="0 0 0.004 4.935" fill="none" style={{
            position: "absolute",
            left: 8,
            top: 5.527,
            width: 0.004,
            height: 4.935,
            color: "var(--badge-red)",
          }}>
            <path d={"M -0.596 4.935 C -0.596 5.266 -0.328 5.535 0.004 5.535 C 0.335 5.535 0.604 5.266 0.604 4.935 L -0.596 4.935 Z M 0.604 2.068 C 0.604 1.737 0.335 1.468 0.004 1.468 C -0.328 1.468 -0.596 1.737 -0.596 2.068 L 0.604 2.068 Z M -0.6 0.042 C -0.6 0.374 -0.331 0.642 0 0.642 C 0.331 0.642 0.6 0.374 0.6 0.042 L -0.6 0.042 Z M 0.6 0 C 0.6 -0.331 0.331 -0.6 0 -0.6 C -0.331 -0.6 -0.6 -0.331 -0.6 0 L 0.6 0 Z M 0.604 4.935 L 0.604 2.068 L -0.596 2.068 L -0.596 4.935 L 0.604 4.935 Z M 0.6 0.042 L 0.6 0 L -0.6 0 L -0.6 0.042 L 0.6 0.042 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "var(--badge-red)",
          flexShrink: 0,
          filter: "drop-shadow(0px 1px 2px rgba(20,28,36,0.04))",
        }}>Helper Text</span>
      </div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 322,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--padding-xxs) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 34,
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
        }}>Label</span>
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
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
            }}>{props.icon2 ?? <Lock />}</div>
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
          }}>{props.icon3 ?? <Hide style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--4) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
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
            color: "rgb(145,153,146)",
          }}>
            <path d={"M -0.6 6 C -0.6 9.645 2.355 12.6 6 12.6 L 6 11.4 C 3.017 11.4 0.6 8.982 0.6 6 L -0.6 6 Z M 6 12.6 C 9.645 12.6 12.6 9.645 12.6 6 L 11.4 6 C 11.4 8.982 8.983 11.4 6 11.4 L 6 12.6 Z M 12.6 6 C 12.6 2.355 9.645 -0.6 6 -0.6 L 6 0.6 C 8.983 0.6 11.4 3.017 11.4 6 L 12.6 6 Z M 6 -0.6 C 2.355 -0.6 -0.6 2.355 -0.6 6 L 0.6 6 C 0.6 3.017 3.017 0.6 6 0.6 L 6 -0.6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={0.004} height={4.935} viewBox="0 0 0.004 4.935" fill="none" style={{
            position: "absolute",
            left: 8,
            top: 5.527,
            width: 0.004,
            height: 4.935,
            color: "rgb(145,153,146)",
          }}>
            <path d={"M -0.596 4.935 C -0.596 5.266 -0.328 5.535 0.004 5.535 C 0.335 5.535 0.604 5.266 0.604 4.935 L -0.596 4.935 Z M 0.604 2.068 C 0.604 1.737 0.335 1.468 0.004 1.468 C -0.328 1.468 -0.596 1.737 -0.596 2.068 L 0.604 2.068 Z M -0.6 0.042 C -0.6 0.374 -0.331 0.642 0 0.642 C 0.331 0.642 0.6 0.374 0.6 0.042 L -0.6 0.042 Z M 0.6 0 C 0.6 -0.331 0.331 -0.6 0 -0.6 C -0.331 -0.6 -0.6 -0.331 -0.6 0 L 0.6 0 Z M 0.604 4.935 L 0.604 2.068 L -0.596 2.068 L -0.596 4.935 L 0.604 4.935 Z M 0.6 0.042 L 0.6 0 L -0.6 0 L -0.6 0.042 L 0.6 0.042 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "var(--text-secondary)",
          flexShrink: 0,
          filter: "drop-shadow(0px 1px 2px rgba(20,28,36,0.04))",
        }}>Helper Text</span>
      </div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 322,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--padding-xxs) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 34,
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
        }}>Label</span>
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
        backgroundColor: "var(--background-bg-primary)",
        boxShadow: "inset 0 0 0 1px var(--border-border-secondary), 0px 1px 2px 0px rgba(12,17,15,0.1)",
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
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
            }}>{props.icon2 ?? <Lock />}</div>
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
              backgroundColor: "var(--text-primary)",
              flexShrink: 0,
            }} />
            <div style={{
              position: "relative",
              width: 6,
              height: 6,
              borderRadius: "50%",
              backgroundColor: "var(--text-primary)",
              flexShrink: 0,
            }} />
            <div style={{
              position: "relative",
              width: 6,
              height: 6,
              borderRadius: "50%",
              backgroundColor: "var(--text-primary)",
              flexShrink: 0,
            }} />
            <div style={{
              position: "relative",
              width: 6,
              height: 6,
              borderRadius: "50%",
              backgroundColor: "var(--text-primary)",
              flexShrink: 0,
            }} />
            <div style={{
              position: "relative",
              width: 6,
              height: 6,
              borderRadius: "50%",
              backgroundColor: "var(--text-primary)",
              flexShrink: 0,
            }} />
            <div style={{
              position: "relative",
              width: 6,
              height: 6,
              borderRadius: "50%",
              backgroundColor: "var(--text-primary)",
              flexShrink: 0,
            }} />
            <div style={{
              position: "relative",
              width: 6,
              height: 6,
              borderRadius: "50%",
              backgroundColor: "var(--text-primary)",
              flexShrink: 0,
            }} />
            <div style={{
              position: "relative",
              width: 6,
              height: 6,
              borderRadius: "50%",
              backgroundColor: "var(--text-primary)",
              flexShrink: 0,
            }} />
            <div style={{
              position: "relative",
              width: 6,
              height: 6,
              borderRadius: "50%",
              backgroundColor: "var(--text-primary)",
              flexShrink: 0,
            }} />
            <div style={{
              position: "relative",
              width: 6,
              height: 6,
              borderRadius: "50%",
              backgroundColor: "var(--text-primary)",
              flexShrink: 0,
            }} />
          </div>
        </div>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon3 ?? <Hide style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--4) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
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
            color: "rgb(145,153,146)",
          }}>
            <path d={"M -0.6 6 C -0.6 9.645 2.355 12.6 6 12.6 L 6 11.4 C 3.017 11.4 0.6 8.982 0.6 6 L -0.6 6 Z M 6 12.6 C 9.645 12.6 12.6 9.645 12.6 6 L 11.4 6 C 11.4 8.982 8.983 11.4 6 11.4 L 6 12.6 Z M 12.6 6 C 12.6 2.355 9.645 -0.6 6 -0.6 L 6 0.6 C 8.983 0.6 11.4 3.017 11.4 6 L 12.6 6 Z M 6 -0.6 C 2.355 -0.6 -0.6 2.355 -0.6 6 L 0.6 6 C 0.6 3.017 3.017 0.6 6 0.6 L 6 -0.6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={0.004} height={4.935} viewBox="0 0 0.004 4.935" fill="none" style={{
            position: "absolute",
            left: 8,
            top: 5.527,
            width: 0.004,
            height: 4.935,
            color: "rgb(145,153,146)",
          }}>
            <path d={"M -0.596 4.935 C -0.596 5.266 -0.328 5.535 0.004 5.535 C 0.335 5.535 0.604 5.266 0.604 4.935 L -0.596 4.935 Z M 0.604 2.068 C 0.604 1.737 0.335 1.468 0.004 1.468 C -0.328 1.468 -0.596 1.737 -0.596 2.068 L 0.604 2.068 Z M -0.6 0.042 C -0.6 0.374 -0.331 0.642 0 0.642 C 0.331 0.642 0.6 0.374 0.6 0.042 L -0.6 0.042 Z M 0.6 0 C 0.6 -0.331 0.331 -0.6 0 -0.6 C -0.331 -0.6 -0.6 -0.331 -0.6 0 L 0.6 0 Z M 0.604 4.935 L 0.604 2.068 L -0.596 2.068 L -0.596 4.935 L 0.604 4.935 Z M 0.6 0.042 L 0.6 0 L -0.6 0 L -0.6 0.042 L 0.6 0.042 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "var(--text-secondary)",
          flexShrink: 0,
          filter: "drop-shadow(0px 1px 2px rgba(20,28,36,0.04))",
        }}>Helper Text</span>
      </div>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--padding-xxs) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
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
        <span style={{
          position: "relative",
          fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "var(--text-primary)",
          flexShrink: 0,
        }}>{props.text1 ?? "Label"}</span>
        <div style={{
          position: "relative",
          height: 40,
          borderRadius: 8,
          backgroundColor: "var(--background-bg-secondary)",
          boxShadow: "inset 0 0 0 1px var(--border-border-primary), 0px 1px 2px 0px rgba(12,17,15,0.1)",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          isolation: "isolate",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 8,
            backgroundColor: "var(--background-bg-secondary)",
            borderTop: "1px solid var(--border-border-primary)",
            borderRight: "1px solid var(--border-border-primary)",
            borderBottom: "1px solid var(--border-border-primary)",
            borderLeft: "1px solid var(--border-border-primary)",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            padding: "8px 12px 8px 12px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--spacing-lg) * 1px)",
            paddingTop: "calc(var(--spacing-md) * 1px)",
            paddingRight: "calc(var(--spacing-lg) * 1px)",
            paddingBottom: "calc(var(--spacing-md) * 1px)",
            zIndex: 2,
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
                position: "relative",
                width: 24,
                flexShrink: 0,
                alignSelf: "stretch",
                height: "auto",
              }}>{props.icon1 ?? <Profile />}</div>
            <span style={{
              position: "relative",
              fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "22px",
              color: "var(--text-secondary)",
              flexGrow: 1,
            }}>{props.text2 ?? "www.untitledui.com"}</span>
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 8,
            backgroundColor: "var(--background-bg-primary)",
            boxShadow: "inset 0 0 0 1px var(--border-border-primary)",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--padding-xxs) * 1px)",
            padding: "10px 10px 10px 10px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            zIndex: 1,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
                position: "relative",
                width: 20,
                flexShrink: 0,
                alignSelf: "stretch",
                height: "auto",
              }}>{props.icon2 ?? <ArrowLeft2 />}</div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              padding: "0px 2px 0px 2px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              paddingLeft: "calc(var(--spacing-xxs) * 1px)",
              paddingRight: "calc(var(--spacing-xxs) * 1px)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 500,
                fontSize: 16,
                whiteSpace: "nowrap",
                lineHeight: "22px",
                color: "var(--text-secondary)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>{props.text3 ?? "Copy"}</span>
            </div>
            <div style={{
                position: "relative",
                width: 20,
                flexShrink: 0,
                alignSelf: "stretch",
                height: "auto",
              }}>{props.icon3 ?? <ArrowRight22 />}</div>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--4) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
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
            color: "rgb(145,153,146)",
          }}>
            <path d={"M -0.6 6 C -0.6 9.645 2.355 12.6 6 12.6 L 6 11.4 C 3.017 11.4 0.6 8.982 0.6 6 L -0.6 6 Z M 6 12.6 C 9.645 12.6 12.6 9.645 12.6 6 L 11.4 6 C 11.4 8.982 8.983 11.4 6 11.4 L 6 12.6 Z M 12.6 6 C 12.6 2.355 9.645 -0.6 6 -0.6 L 6 0.6 C 8.983 0.6 11.4 3.017 11.4 6 L 12.6 6 Z M 6 -0.6 C 2.355 -0.6 -0.6 2.355 -0.6 6 L 0.6 6 C 0.6 3.017 3.017 0.6 6 0.6 L 6 -0.6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={0.004} height={4.935} viewBox="0 0 0.004 4.935" fill="none" style={{
            position: "absolute",
            left: 8,
            top: 5.527,
            width: 0.004,
            height: 4.935,
            color: "rgb(145,153,146)",
          }}>
            <path d={"M -0.596 4.935 C -0.596 5.266 -0.328 5.535 0.004 5.535 C 0.335 5.535 0.604 5.266 0.604 4.935 L -0.596 4.935 Z M 0.604 2.068 C 0.604 1.737 0.335 1.468 0.004 1.468 C -0.328 1.468 -0.596 1.737 -0.596 2.068 L 0.604 2.068 Z M -0.6 0.042 C -0.6 0.374 -0.331 0.642 0 0.642 C 0.331 0.642 0.6 0.374 0.6 0.042 L -0.6 0.042 Z M 0.6 0 C 0.6 -0.331 0.331 -0.6 0 -0.6 C -0.331 -0.6 -0.6 -0.331 -0.6 0 L 0.6 0 Z M 0.604 4.935 L 0.604 2.068 L -0.596 2.068 L -0.596 4.935 L 0.604 4.935 Z M 0.6 0.042 L 0.6 0 L -0.6 0 L -0.6 0.042 L 0.6 0.042 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "var(--text-secondary)",
          flexShrink: 0,
          filter: "drop-shadow(0px 1px 2px rgba(20,28,36,0.04))",
        }}>Helper Text</span>
      </div>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--padding-xxs) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
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
        <span style={{
          position: "relative",
          fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "var(--text-primary)",
          flexShrink: 0,
        }}>{props.text1 ?? "Label"}</span>
        <div style={{
          position: "relative",
          height: 40,
          borderRadius: 8,
          backgroundColor: "var(--background-bg-primary)",
          boxShadow: "inset 0 0 0 1px var(--border-border-primary), 0px 1px 2px 0px rgba(16,24,40,0.05)",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            borderRadius: "8px 0px 0px 8px",
            display: "flex",
            flexDirection: "row",
            gap: 6,
            padding: "8px 12px 8px 12px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--spacing-lg) * 1px)",
            paddingTop: "calc(var(--spacing-md) * 1px)",
            paddingRight: "calc(var(--spacing-lg) * 1px)",
            paddingBottom: "calc(var(--spacing-md) * 1px)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>{props.icon1 ?? <InfoCircle4 style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
            <span style={{
              position: "relative",
              fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              lineHeight: "25px",
              color: "var(--text-secondary)",
              flexShrink: 0,
            }}>{props.text2 ?? "http://"}</span>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>{props.icon2 ?? <InfoCircle4 style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 8,
            backgroundColor: "var(--background-bg-secondary)",
            boxShadow: "inset 0 0 0 1px var(--border-border-primary)",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            padding: "8px 12px 8px 12px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--spacing-lg) * 1px)",
            paddingTop: "calc(var(--spacing-md) * 1px)",
            paddingRight: "calc(var(--spacing-lg) * 1px)",
            paddingBottom: "calc(var(--spacing-md) * 1px)",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "25px",
              color: "var(--text-secondary)",
              flexGrow: 1,
            }}>{props.text3 ?? "www.untitledui.com"}</span>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>{props.icon3 ?? <InfoCircle4 style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--4) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
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
            color: "rgb(145,153,146)",
          }}>
            <path d={"M -0.6 6 C -0.6 9.645 2.355 12.6 6 12.6 L 6 11.4 C 3.017 11.4 0.6 8.982 0.6 6 L -0.6 6 Z M 6 12.6 C 9.645 12.6 12.6 9.645 12.6 6 L 11.4 6 C 11.4 8.982 8.983 11.4 6 11.4 L 6 12.6 Z M 12.6 6 C 12.6 2.355 9.645 -0.6 6 -0.6 L 6 0.6 C 8.983 0.6 11.4 3.017 11.4 6 L 12.6 6 Z M 6 -0.6 C 2.355 -0.6 -0.6 2.355 -0.6 6 L 0.6 6 C 0.6 3.017 3.017 0.6 6 0.6 L 6 -0.6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={0.004} height={4.935} viewBox="0 0 0.004 4.935" fill="none" style={{
            position: "absolute",
            left: 8,
            top: 5.527,
            width: 0.004,
            height: 4.935,
            color: "rgb(145,153,146)",
          }}>
            <path d={"M -0.596 4.935 C -0.596 5.266 -0.328 5.535 0.004 5.535 C 0.335 5.535 0.604 5.266 0.604 4.935 L -0.596 4.935 Z M 0.604 2.068 C 0.604 1.737 0.335 1.468 0.004 1.468 C -0.328 1.468 -0.596 1.737 -0.596 2.068 L 0.604 2.068 Z M -0.6 0.042 C -0.6 0.374 -0.331 0.642 0 0.642 C 0.331 0.642 0.6 0.374 0.6 0.042 L -0.6 0.042 Z M 0.6 0 C 0.6 -0.331 0.331 -0.6 0 -0.6 C -0.331 -0.6 -0.6 -0.331 -0.6 0 L 0.6 0 Z M 0.604 4.935 L 0.604 2.068 L -0.596 2.068 L -0.596 4.935 L 0.604 4.935 Z M 0.6 0.042 L 0.6 0 L -0.6 0 L -0.6 0.042 L 0.6 0.042 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "var(--text-secondary)",
          flexShrink: 0,
          filter: "drop-shadow(0px 1px 2px rgba(20,28,36,0.04))",
        }}>Helper Text</span>
      </div>
    </div>
  );
  const __impls = {
    // figma: State=Default, Type=Input Text
    "state=default|type=input text": __body0,
    // figma: State=Hover, Type=Input Text
    "state=hover|type=input text": __body1,
    // figma: State=Typing, Type=Input Text
    "state=typing|type=input text": __body2,
    // figma: State=Field, Type=Input Text
    "state=field|type=input text": __body3,
    // figma: State=Disabled, Type=Input Text
    "state=disabled|type=input text": __body4,
    // figma: State=Error, Type=Input Text
    "state=error|type=input text": __body5,
    // figma: State=Default, Type=Password
    "state=default|type=password": __body6,
    // figma: State=Field, Type=Password
    "state=field|type=password": __body7,
    // figma: State=Default, Type=Trailing
    "state=default|type=trailing": __body8,
    // figma: State=Default, Type=Trailing Input
    "state=default|type=trailing input": __body9,
  };
  return (__impls[__vkey(props)] ?? __body6)();
}
export default InputField;
