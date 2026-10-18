import { Button } from './Button.jsx';
import { CloudUpload } from './CloudUpload.jsx';

// figma node: 9044:6176 File Upload Area [1.0]
export function FileUploadArea10(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 400,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--background-bg-primary)",
      outline: "1px dashed var(--border-border-primary)",
      outlineOffset: "-1px",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      padding: "24px 24px 24px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-5c117ac6dd66cd50-16710926" style={{
        position: "relative",
        width: 72,
        height: 60,
        flexShrink: 0,
      }} />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "center",
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "var(--text-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Drag Image Here "}</span>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          textAlign: "center",
          lineHeight: "16px",
          color: "var(--text-secondary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text2 ?? "You can add up to 15 images, each not exceeding 5 MB in size and 7000 X 7000 Pixels resolution."}</span>
      </div>
      <Button
        style={{ position: "relative", width: 157, flexShrink: 0 }}
        rightIcon={false}
        leftIcon={true}
        text1={"Uploard images"}
        icon1={<CloudUpload style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}
        state={"default"}
        type={"secondary"}
        size={"lg"}
      />
    </div>
  );
}
export default FileUploadArea10;
