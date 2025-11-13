import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Top 4 – Draft. Debate. Decide.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const backgroundGradient =
  "linear-gradient(135deg, #060618 20%, #0f1b3a 50%, #120933 100%)";

const accentBars = ["#FF4FD8", "#FF9C3F", "#46E3FF", "#7B5CFF"];

const logoAsset = fetch(
  new URL("../../public/top4_3d.png", import.meta.url)
).then((res) => res.arrayBuffer());

const toBase64 = (buffer: ArrayBuffer) => {
  if (typeof Buffer !== "undefined") {
    return Buffer.from(buffer).toString("base64");
  }

  let binary = "";
  const bytes = new Uint8Array(buffer);
  const chunkSize = 0x8000;

  for (let i = 0; i < bytes.length; i += chunkSize) {
    const chunk = bytes.subarray(i, i + chunkSize);
    binary += String.fromCharCode(...chunk);
  }

  return btoa(binary);
};

export default async function OpenGraphImage() {
  const logoBuffer = await logoAsset;
  const logoSrc = `data:image/png;base64,${toBase64(logoBuffer)}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px 96px",
          color: "#F7F5FF",
          background: backgroundGradient,
          fontFamily: "Geist, Inter, 'Helvetica Neue', sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 420,
            height: 420,
            background:
              "radial-gradient(circle at center, rgba(255,79,216,0.35), transparent 60%)",
            top: -60,
            left: -120,
            filter: "blur(6px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 520,
            height: 520,
            background:
              "radial-gradient(circle at center, rgba(70,227,255,0.28), transparent 70%)",
            bottom: -120,
            right: -80,
            filter: "blur(4px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 80% 20%, rgba(19,15,57,0.6), transparent 50%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 24,
            borderRadius: 48,
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 32,
            zIndex: 1,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div
              style={{
                textTransform: "uppercase",
                letterSpacing: 10,
                fontSize: 20,
                color: "rgba(255,255,255,0.75)",
                alignSelf: "flex-start",
                padding: "10px 24px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.22)",
                backgroundColor: "rgba(11,18,40,0.6)",
                boxShadow: "0 10px 20px rgba(4,5,15,0.45)",
              }}
            >
              Draft • Debate • Decide
            </div>

            <div
              style={{
                display: "flex",
                gap: 48,
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 28,
                  flex: 1,
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <div
                    style={{
                      fontSize: 56,
                      fontWeight: 600,
                      letterSpacing: 2,
                      color: "#EDE8FF",
                    }}
                  >
                    Top 4 Party Game
                  </div>
                  <div style={{ display: "flex", gap: 14 }}>
                    {accentBars.map((color) => (
                      <div
                        key={color}
                        style={{
                          flex: 1,
                          height: 10,
                          borderRadius: 999,
                          backgroundColor: color,
                          boxShadow: `0 4px 12px ${color}55`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div
                  style={{
                    fontSize: 36,
                    color: "rgba(247,245,255,0.9)",
                    maxWidth: 560,
                    lineHeight: 1.35,
                  }}
                >
                  Build outrageous Top 4 lists with friends, pitch every pick, and
                  crown the champion in minutes.
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: 32,
                    alignItems: "center",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <div
                      style={{
                        fontSize: 30,
                        fontWeight: 600,
                      }}
                    >
                      Available on iOS
                    </div>
                    <div
                      style={{
                        fontSize: 24,
                        color: "rgba(255,255,255,0.7)",
                      }}
                    >
                      top4game.com
                    </div>
                  </div>
                  <div
                    style={{
                      padding: "18px 34px",
                      borderRadius: 20,
                      background:
                        "linear-gradient(120deg, rgba(255,76,217,0.85), rgba(70,227,255,0.85))",
                      fontSize: 26,
                      fontWeight: 600,
                      letterSpacing: 1,
                      textTransform: "uppercase",
                      boxShadow: "0 12px 30px rgba(7,16,38,0.45)",
                    }}
                  >
                    Pass & Play
                  </div>
                </div>
              </div>

              <div
                style={{
                  width: 420,
                  height: 420,
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: 40,
                    background:
                      "linear-gradient(165deg, rgba(255,79,216,0.25), rgba(70,227,255,0.08))",
                    filter: "blur(6px)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 24,
                    borderRadius: 32,
                    background:
                      "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.15), transparent 70%)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                />
                <img
                  src={logoSrc}
                  alt="Top 4 logo"
                  width={360}
                  height={360}
                  style={{
                    position: "relative",
                    borderRadius: 28,
                    objectFit: "contain",
                    transform: "translateY(4px)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
