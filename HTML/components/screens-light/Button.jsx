import { ArrowLeft2 } from './ArrowLeft2.jsx';
import { ArrowRight2 } from './ArrowRight2.jsx';
import { ArrowRight22 } from './ArrowRight22.jsx';

// figma node: 9001:64588 Button (12 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state) + '|' + "type=" + __venc(p.type) + '|' + "size=" + __venc(p.size);

export function Button(_p = {}) {
  const props = { ..._p, state: _p.state ?? "default", type: _p.type ?? "primary", size: _p.size ?? "lg", rightIcon: _p.rightIcon ?? true, leftIcon: _p.leftIcon ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      overflow: "hidden",
      borderRadius: 8,
      background: "linear-gradient(180deg, rgb(39,163,118) 0.00%, rgb(22,118,83) 100.00%)",
      boxShadow: "0px 0px 0px 1px rgb(31,130,94), 0px 4px 12px -2px rgba(31,130,94,0.72), 0px 0px 0px 2px rgb(245,253,250)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <ArrowLeft2 style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
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
      }}>{props.text1 ?? "Button"}</span>
      {props.rightIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon2 ?? <ArrowRight22 style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--primary-700)",
      boxShadow: "0px 0px 0px 1px rgb(23,98,71), 0px 4px 12px -2px rgba(23,98,71,0.72), 0px 0px 0px 2px rgb(224,244,237)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <ArrowLeft2 style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
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
      }}>{props.text1 ?? "Button"}</span>
      {props.rightIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon2 ?? <ArrowRight22 style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--primary-100)",
      boxShadow: "0px 0px 0px 1px rgb(224,244,237), 0px 0px 0px 2px rgb(245,253,250)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <ArrowLeft2 style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
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
        color: "var(--primary-50)",
        flexShrink: 0,
      }}>{props.text1 ?? "Button"}</span>
      {props.rightIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon2 ?? <ArrowRight2 style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--primary-100)",
      boxShadow: "0px 0px 0px 1px rgb(224,244,237), 0px 0px 0px 2px rgb(245,253,250)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon1 ?? <ArrowLeft2 style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "16px",
        color: "var(--primary-50)",
        flexShrink: 0,
      }}>{props.text1 ?? "Button"}</span>
      {props.rightIcon && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon2 ?? <ArrowRight22 style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      background: "linear-gradient(180deg, rgb(39,163,118) 0.00%, rgb(22,118,83) 100.00%)",
      boxShadow: "0px 0px 0px 1px rgb(31,130,94), 0px 4px 12px -2px rgba(31,130,94,0.72), 0px 0px 0px 2px rgb(245,253,250)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon1 ?? <ArrowLeft2 style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "16px",
        color: "var(--general-white)",
        flexShrink: 0,
      }}>{props.text1 ?? "Button"}</span>
      {props.rightIcon && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon2 ?? <ArrowRight22 style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--primary-700)",
      boxShadow: "0px 0px 0px 1px rgb(23,98,71), 0px 4px 12px -2px rgba(23,98,71,0.72), 0px 0px 0px 2px rgb(224,244,237)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon1 ?? <ArrowLeft2 style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "16px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
      }}>{props.text1 ?? "Button"}</span>
      {props.rightIcon && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon2 ?? <ArrowRight22 style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--background-bg-disabled)",
      boxShadow: "inset 0 0 0 1px var(--border-border-disabled), 0px 4px 12px -1px rgba(167,172,172,0.08)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <ArrowLeft2 />}</div>
      )}
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
        color: "var(--text-disabled)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Button"}</span>
      {props.rightIcon && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <ArrowRight22 />}</div>
      )}
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "fit-content",
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
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <ArrowLeft2 />}</div>
      )}
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
        alignSelf: "stretch",
      }}>{props.text1 ?? "Button"}</span>
      {props.rightIcon && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <ArrowRight22 />}</div>
      )}
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: "fit-content",
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
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <ArrowLeft2 />}</div>
      )}
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
        alignSelf: "stretch",
      }}>{props.text1 ?? "Button"}</span>
      {props.rightIcon && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <ArrowRight22 />}</div>
      )}
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: "fit-content",
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
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <ArrowLeft2 />}</div>
      )}
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
        alignSelf: "stretch",
      }}>{props.text1 ?? "Button"}</span>
      {props.rightIcon && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <ArrowRight22 />}</div>
      )}
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: "fit-content",
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
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <ArrowLeft2 />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "16px",
        color: "rgb(33,31,36)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Button"}</span>
      {props.rightIcon && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <ArrowRight22 />}</div>
      )}
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--background-bg-disabled)",
      boxShadow: "inset 0 0 0 1px var(--border-border-disabled), 0px 4px 12px -1px rgba(167,172,172,0.08)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <ArrowLeft2 />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "16px",
        color: "var(--text-disabled)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Button"}</span>
      {props.rightIcon && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <ArrowRight22 />}</div>
      )}
    </div>
  );
  const __impls = {
    // figma: State=Default, Type=Primary, Size=Large
    "state=default|type=primary|size=lg": __body0,
    // figma: State=Hover, Type=Primary, Size=Large
    "state=hover|type=primary|size=lg": __body1,
    // figma: State=Disabled, Type=Primary, Size=Large
    "state=disabled|type=primary|size=lg": __body2,
    // figma: State=Disabled, Type=Primary, Size=Small
    "state=disabled|type=primary|size=sm": __body3,
    // figma: State=Default, Type=Primary, Size=Small
    "state=default|type=primary|size=sm": __body4,
    // figma: State=Hover, Type=Primary, Size=Small
    "state=hover|type=primary|size=sm": __body5,
    // figma: State=Disabled, Type=Secondary, Size=Large
    "state=disabled|type=secondary|size=lg": __body6,
    // figma: State=Default, Type=Secondary, Size=Large
    "state=default|type=secondary|size=lg": __body7,
    // figma: State=Hover, Type=Secondary, Size=Large
    "state=hover|type=secondary|size=lg": __body8,
    // figma: State=Default, Type=Secondary, Size=Small
    "state=default|type=secondary|size=sm": __body9,
    // figma: State=Hover, Type=Secondary, Size=Small
    "state=hover|type=secondary|size=sm": __body10,
    // figma: State=Disabled, Type=Secondary, Size=Small
    "state=disabled|type=secondary|size=sm": __body11,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Button;
