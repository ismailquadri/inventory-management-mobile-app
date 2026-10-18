// figma node: 9001:64524 Radio [1.0] (8 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state) + '|' + "active=" + __venc(p.active);

export function Radio10(_p = {}) {
  const props = { ..._p, state: _p.state ?? "default", active: _p.active ?? "off" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      overflow: "hidden",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 2,
        top: 2,
        width: 16,
        height: 16,
        borderRadius: 96,
        backgroundColor: "var(--border-border-primary)",
      }} />
      <div style={{
        position: "absolute",
        left: 3.5,
        top: 3.5,
        width: 13,
        height: 13,
        borderRadius: 96,
        backgroundColor: "var(--background-bg-secondary)",
        boxShadow: "0px 2px 2px 0px rgba(27,28,29,0.12)",
      }} />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      overflow: "hidden",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 2,
        top: 2,
        width: 16,
        height: 16,
        borderRadius: 96,
        backgroundColor: "var(--border-border-secondary)",
      }} />
      <div style={{
        position: "absolute",
        left: 3.5,
        top: 3.5,
        width: 13,
        height: 13,
        borderRadius: 96,
        backgroundColor: "var(--background-bg-secondary)",
        boxShadow: "0px 2px 2px 0px rgba(27,28,29,0.12)",
      }} />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      overflow: "hidden",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 2,
        top: 2,
        width: 16,
        height: 16,
        borderRadius: 96,
        backgroundColor: "var(--border-border-color)",
      }} />
      <div style={{
        position: "absolute",
        left: 3.5,
        top: 3.5,
        width: 13,
        height: 13,
        borderRadius: 96,
        backgroundColor: "var(--primary-50)",
      }} />
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      overflow: "hidden",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 2,
        top: 2,
        width: 16,
        height: 16,
        borderRadius: 96,
        backgroundColor: "var(--background-bg-disabled)",
        boxShadow: "inset 0px 2px 2px 0px rgba(15,15,16,0.08)",
      }} />
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      overflow: "hidden",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 2,
        top: 2,
        width: 16,
        height: 16,
        borderRadius: 96,
        backgroundColor: "var(--primary-600)",
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
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      overflow: "hidden",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 2,
        top: 2,
        width: 16,
        height: 16,
        borderRadius: 96,
        backgroundColor: "var(--primary-700)",
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
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      overflow: "hidden",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 2,
        top: 2,
        width: 16,
        height: 16,
        borderRadius: 96,
        backgroundColor: "var(--primary-800)",
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
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      overflow: "hidden",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 2,
        top: 2,
        width: 16,
        height: 16,
        borderRadius: 96,
        backgroundColor: "var(--background-bg-disabled)",
        boxShadow: "inset 0px 2px 2px 0px rgba(15,15,16,0.08)",
      }} />
      <div style={{
        position: "absolute",
        left: 6,
        top: 6,
        width: 8,
        height: 8,
        borderRadius: 96,
        backgroundColor: "var(--general-white)",
        boxShadow: "inset 0 0 0 1px var(--general-white)",
      }} />
    </div>
  );
  const __impls = {
    // figma: 📌 State=Default, 🟢 Active=Off
    "state=default|active=off": __body0,
    // figma: 📌 State=Hover, 🟢 Active=Off
    "state=hover|active=off": __body1,
    // figma: 📌 State=Focused, 🟢 Active=Off
    "state=focused|active=off": __body2,
    // figma: 📌 State=Disabled, 🟢 Active=Off
    "state=disabled|active=off": __body3,
    // figma: 📌 State=Default, 🟢 Active=On
    "state=default|active=on": __body4,
    // figma: 📌 State=Hover, 🟢 Active=On
    "state=hover|active=on": __body5,
    // figma: 📌 State=Focused, 🟢 Active=On
    "state=focused|active=on": __body6,
    // figma: 📌 State=Disabled, 🟢 Active=On
    "state=disabled|active=on": __body7,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Radio10;
