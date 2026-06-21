import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Al-Tayyab Global Consultants — MBBS in Bangladesh from Kashmir";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          fontFamily: "sans-serif",
          padding: 0,
        }}
      >
        {/* Top accent bar */}
        <div style={{ width: "100%", height: 8, background: "#1a7a6e", display: "flex" }} />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            padding: "60px 80px",
            justifyContent: "center",
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              fontSize: 20,
              fontWeight: 600,
              color: "#1a7a6e",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: 24,
              display: "flex",
            }}
          >
            Kashmir's most trusted MBBS consultancy
          </div>

          {/* Headline */}
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: "#111111",
              lineHeight: 1.1,
              marginBottom: 28,
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            MBBS in Bangladesh{" "}
            <span style={{ color: "#1a7a6e", display: "flex" }}>
              &nbsp;direct from Kashmir.
            </span>
          </div>

          {/* Subline */}
          <div
            style={{
              fontSize: 26,
              color: "#555555",
              lineHeight: 1.4,
              maxWidth: 860,
              display: "flex",
            }}
          >
            You pay the college directly. No agent fees. BMDC + NMC approved colleges.
          </div>

          {/* Stats row */}
          <div
            style={{
              display: "flex",
              gap: 60,
              marginTop: 48,
            }}
          >
            {[
              { value: "₹30–35 L", label: "Total MBBS cost" },
              { value: "650+", label: "Students placed" },
              { value: "19", label: "BMDC colleges" },
              { value: "100%", label: "Direct payments" },
            ].map((s) => (
              <div key={s.label} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <span style={{ fontSize: 36, fontWeight: 800, color: "#1a7a6e" }}>{s.value}</span>
                <span style={{ fontSize: 18, color: "#888888" }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "#f5f9f8",
            padding: "20px 80px",
            borderTop: "1px solid #e0ece9",
          }}
        >
          <span style={{ fontSize: 22, fontWeight: 700, color: "#1a7a6e", display: "flex" }}>
            Al-Tayyab Global Consultants
          </span>
          <span style={{ fontSize: 18, color: "#888888", display: "flex" }}>
            altayyabglobalconsultants.com
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
