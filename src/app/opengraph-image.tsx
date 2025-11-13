import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Top 4 – Draft. Debate. Decide.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const backgroundGradient =
  "linear-gradient(140deg, #080821 10%, #10133d 45%, #141141 100%)";

const accentBars = ["#FF4FD8", "#FF9C3F", "#46E3FF", "#7B5CFF"];

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "88px 120px",
          color: "#F8F6FF",
          background: backgroundGradient,
          fontFamily: "Geist, Inter, 'Helvetica Neue', sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 32,
            borderRadius: 44,
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 440,
            height: 440,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,79,216,0.25), transparent 70%)",
            top: -140,
            left: -120,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 520,
            height: 520,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(70,227,255,0.18), transparent 75%)",
            bottom: -160,
            right: -120,
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 28,
            maxWidth: 640,
            zIndex: 1,
            textAlign: "center",
            alignItems: "center",
            margin: "0 auto",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <div
              style={{
                fontSize: 124,
                fontWeight: 800,
                lineHeight: 1,
              }}
            >
              Top 4
            </div>
            <div
              style={{
                display: "flex",
                gap: 14,
                width: 420,
              }}
            >
              {accentBars.map((color) => (
                <div
                  key={color}
                  style={{
                    flex: 1,
                    height: 12,
                    borderRadius: 999,
                    backgroundColor: color,
                    boxShadow: `0 8px 24px ${color}33`,
                  }}
                />
              ))}
            </div>
          </div>

          <div
            style={{
              textTransform: "uppercase",
              letterSpacing: 12,
              fontSize: 26,
              color: "rgba(255,255,255,0.9)",
            }}
          >
            Draft • Debate • Decide
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
