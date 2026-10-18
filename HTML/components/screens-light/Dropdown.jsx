import { Bag } from './Bag.jsx';
import { Buy } from './Buy.jsx';
import { DollarBadge2 } from './DollarBadge2.jsx';
import { DollarRefresh } from './DollarRefresh.jsx';
import { MoneyPaperTotal } from './MoneyPaperTotal.jsx';
import { Profile } from './Profile.jsx';
import { ReceiptBill2 } from './ReceiptBill2.jsx';
import { Store03 } from './Store03.jsx';
import { User2 } from './User2.jsx';

// figma node: 9181:38253 Dropdown
export function Dropdown(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--background-bg-secondary)",
      boxShadow: "0px 11px 32px 0px rgba(0,0,0,0.08), 0px 12px 46px 0px rgba(0,0,0,0.1)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "16px 0px 16px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 188,
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
            width: 156,
            display: "flex",
            flexDirection: "column",
            gap: 16,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
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
                  width: 20,
                  height: 20,
                  flexShrink: 0,
                }}>{props.icon1 ?? <ReceiptBill2 style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
              <span style={{
                position: "relative",
                fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 500,
                fontSize: 14,
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "var(--text-primary)",
                flexShrink: 0,
              }}>{props.text1 ?? "New Bill"}</span>
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
              <div style={{
                  position: "relative",
                  width: 20,
                  height: 20,
                  flexShrink: 0,
                }}>{props.icon2 ?? <DollarRefresh style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
              <span style={{
                position: "relative",
                fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 500,
                fontSize: 14,
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "var(--text-primary)",
                flexShrink: 0,
              }}>{props.text2 ?? "New Expense"}</span>
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
                  width: 20,
                  height: 20,
                  flexShrink: 0,
                }}>{props.icon3 ?? <Bag style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
              <span style={{
                position: "relative",
                fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 500,
                fontSize: 14,
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "var(--text-primary)",
                flexShrink: 0,
              }}>{props.text3 ?? "New Purchase Order"}</span>
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
                  width: 20,
                  height: 20,
                  flexShrink: 0,
                }}>{props.icon4 ?? <MoneyPaperTotal style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
              <span style={{
                position: "relative",
                fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 500,
                fontSize: 14,
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "var(--text-primary)",
                flexShrink: 0,
              }}>{props.text4 ?? "New Vendor Credits"}</span>
            </div>
          </div>
          <div style={{
            position: "relative",
            height: 1,
            backgroundColor: "var(--border-border-primary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }} />
        </div>
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
            width: 156,
            display: "flex",
            flexDirection: "column",
            gap: 16,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
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
                  width: 20,
                  height: 20,
                  flexShrink: 0,
                }}>
                <User2 style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />
              </div>
              <span style={{
                position: "relative",
                fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 500,
                fontSize: 14,
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "var(--text-primary)",
                flexShrink: 0,
              }}>Customer</span>
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
              <div style={{
                  position: "relative",
                  width: 20,
                  height: 20,
                  flexShrink: 0,
                }}>
                <Store03 style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />
              </div>
              <span style={{
                position: "relative",
                fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 500,
                fontSize: 14,
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "var(--text-primary)",
                flexShrink: 0,
              }}>Vendor</span>
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
              <div style={{
                  position: "relative",
                  width: 20,
                  height: 20,
                  flexShrink: 0,
                }}>
                <Profile style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />
              </div>
              <span style={{
                position: "relative",
                fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 500,
                fontSize: 14,
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "var(--text-primary)",
                flexShrink: 0,
              }}>Account</span>
            </div>
          </div>
          <div style={{
            position: "relative",
            height: 1,
            backgroundColor: "var(--border-border-primary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }} />
        </div>
        <div style={{
          position: "relative",
          width: 156,
          display: "flex",
          flexDirection: "column",
          gap: 16,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
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
                width: 20,
                height: 20,
                flexShrink: 0,
                color: "var(--icon-primary)",
              }}>
              <Buy style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0", color: "var(--icon-primary)" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 500,
              fontSize: 14,
              whiteSpace: "nowrap",
              lineHeight: "18px",
              color: "var(--text-primary)",
              flexShrink: 0,
            }}>New Sales Order</span>
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
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <DollarBadge2 style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"Inter Tight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 500,
              fontSize: 14,
              whiteSpace: "nowrap",
              lineHeight: "18px",
              color: "var(--text-primary)",
              flexShrink: 0,
            }}>New Invoice</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dropdown;
