import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "AIToolRadar - Compare 177+ AI Tools";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0B0F19",
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* 배경 그라디언트 효과 */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.15) 0%, transparent 60%)",
          }}
        />

        {/* 로고 + 타이틀 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              width: "64px",
              height: "64px",
              background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "36px",
            }}
          >
            🎯
          </div>
          <span
            style={{
              fontSize: "56px",
              fontWeight: "bold",
              color: "#f9fafb",
              letterSpacing: "-1px",
            }}
          >
            AIToolRadar
          </span>
        </div>

        {/* 서브타이틀 */}
        <p
          style={{
            fontSize: "28px",
            color: "#9ca3af",
            textAlign: "center",
            margin: "0 0 40px 0",
            maxWidth: "800px",
            lineHeight: 1.4,
          }}
        >
          Compare 177+ AI Tools Side by Side
        </p>

        {/* 태그 뱃지들 */}
        <div style={{ display: "flex", gap: "12px" }}>
          {["Writing", "Video", "SEO", "Coding", "Image"].map((tag) => (
            <div
              key={tag}
              style={{
                background: "rgba(59,130,246,0.15)",
                border: "1px solid rgba(59,130,246,0.3)",
                borderRadius: "999px",
                padding: "8px 20px",
                fontSize: "18px",
                color: "#60a5fa",
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* 하단 URL */}
        <p
          style={{
            position: "absolute",
            bottom: "32px",
            fontSize: "18px",
            color: "#4b5563",
          }}
        >
          aitoolradar.net
        </p>
      </div>
    ),
    { ...size }
  );
}
