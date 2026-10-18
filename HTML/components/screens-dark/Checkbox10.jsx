// figma node: 9001:64500 Checkbox [1.0] (8 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state) + '|' + "active=" + __venc(p.active) + '|' + "indeterminate=" + __venc(p.indeterminate);

export function Checkbox10(_p = {}) {
  const props = { ..._p, state: _p.state ?? "default", active: _p.active ?? "off", indeterminate: _p.indeterminate ?? "off" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 2,
        top: 2,
        width: 16,
        height: 16,
        borderRadius: 4,
        backgroundColor: "var(--border-border-primary)",
      }} />
      <div style={{
        position: "absolute",
        left: 3.5,
        top: 3.5,
        width: 13,
        height: 13,
        borderRadius: 2.5999999046325684,
        backgroundColor: "var(--background-bg-secondary)",
        boxShadow: "0px 2px 2px 0px rgba(27,28,29,0.12)",
      }} />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      position: "relative",
      color: "var(--background-bg-secondary)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 2,
        top: 2,
        width: 16,
        height: 16,
        borderRadius: 4,
        backgroundColor: "var(--primary-600)",
        boxShadow: "inset 0px 2px 2px 0px rgb(14,161,108)",
      }} />
      <svg width={9.061} height={6.591} viewBox="0 0 9.061 6.591" fill="none" style={{
        position: "absolute",
        left: 5.47,
        top: 6.97,
        width: 9.061,
        height: 6.591,
      }}>
        <path d={"M 9.061 1.061 L 3.53 6.591 L 0 3.061 L 1.061 2 L 3.53 4.47 L 8 0 L 9.061 1.061 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 2,
        top: 2,
        width: 16,
        height: 16,
        borderRadius: 4,
        backgroundColor: "var(--border-border-secondary)",
      }} />
      <div style={{
        position: "absolute",
        left: 3.5,
        top: 3.5,
        width: 13,
        height: 13,
        borderRadius: 2.5999999046325684,
        backgroundColor: "var(--background-bg-secondary)",
        boxShadow: "0px 2px 2px 0px rgba(27,28,29,0.12)",
      }} />
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      position: "relative",
      color: "var(--background-bg-secondary)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 2,
        top: 2,
        width: 16,
        height: 16,
        borderRadius: 4,
        backgroundColor: "var(--primary-700)",
      }} />
      <svg width={9.061} height={6.591} viewBox="0 0 9.061 6.591" fill="none" style={{
        position: "absolute",
        left: 5.47,
        top: 6.97,
        width: 9.061,
        height: 6.591,
      }}>
        <path d={"M 9.061 1.061 L 3.53 6.591 L 0 3.061 L 1.061 2 L 3.53 4.47 L 8 0 L 9.061 1.061 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 2,
        top: 2,
        width: 16,
        height: 16,
        borderRadius: 4,
        backgroundColor: "var(--border-border-color)",
      }} />
      <div style={{
        position: "absolute",
        left: 3.5,
        top: 3.5,
        width: 13,
        height: 13,
        borderRadius: 2.5999999046325684,
        backgroundColor: "var(--primary-50)",
      }} />
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      position: "relative",
      color: "var(--background-bg-secondary)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 2,
        top: 2,
        width: 16,
        height: 16,
        borderRadius: 4,
        backgroundColor: "var(--primary-800)",
      }} />
      <svg width={9.061} height={6.591} viewBox="0 0 9.061 6.591" fill="none" style={{
        position: "absolute",
        left: 5.47,
        top: 6.97,
        width: 9.061,
        height: 6.591,
      }}>
        <path d={"M 9.061 1.061 L 3.53 6.591 L 0 3.061 L 1.061 2 L 3.53 4.47 L 8 0 L 9.061 1.061 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 2,
        top: 2,
        width: 16,
        height: 16,
        borderRadius: 4,
        backgroundColor: "var(--background-bg-disabled)",
        boxShadow: "inset 0px 2px 2px 0px rgba(15,15,16,0.08)",
      }} />
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      position: "relative",
      color: "var(--background-bg-secondary)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 2,
        top: 2,
        width: 16,
        height: 16,
        borderRadius: 4,
        backgroundColor: "var(--background-bg-disabled)",
        boxShadow: "inset 0px 2px 2px 0px rgba(15,15,16,0.08)",
      }} />
      <svg width={9.061} height={6.591} viewBox="0 0 9.061 6.591" fill="none" style={{
        position: "absolute",
        left: 5.47,
        top: 6.97,
        width: 9.061,
        height: 6.591,
      }}>
        <path d={"M 9.061 1.061 L 3.53 6.591 L 0 3.061 L 1.061 2 L 3.53 4.47 L 8 0 L 9.061 1.061 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
  const __impls = {
    // figma: 📌 State=Default, 🟢 Active=Off, ❓ Indeterminate=Off
    "state=default|active=off|indeterminate=off": __body0,
    // figma: 📌 State=Default, 🟢 Active=On, ❓ Indeterminate=Off
    "state=default|active=on|indeterminate=off": __body1,
    // figma: 📌 State=Hover, 🟢 Active=Off, ❓ Indeterminate=Off
    "state=hover|active=off|indeterminate=off": __body2,
    // figma: 📌 State=Hover, 🟢 Active=On, ❓ Indeterminate=Off
    "state=hover|active=on|indeterminate=off": __body3,
    // figma: 📌 State=Focused, 🟢 Active=Off, ❓ Indeterminate=Off
    "state=focused|active=off|indeterminate=off": __body4,
    // figma: 📌 State=Focused, 🟢 Active=On, ❓ Indeterminate=Off
    "state=focused|active=on|indeterminate=off": __body5,
    // figma: 📌 State=Disabled, 🟢 Active=Off, ❓ Indeterminate=Off
    "state=disabled|active=off|indeterminate=off": __body6,
    // figma: 📌 State=Disabled, 🟢 Active=On, ❓ Indeterminate=Off
    "state=disabled|active=on|indeterminate=off": __body7,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Checkbox10;
