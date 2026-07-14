import { ImageResponse } from "next/og";

import { APP_TITLE } from "@/lib/site";

export const runtime = "edge";
export const alt = `${APP_TITLE} - FutureHax`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Basic branded Open Graph card for link previews (red + black). */
export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 64,
        background: "linear-gradient(145deg, #000000 0%, #18181b 55%, #b71c1c 100%)",
        color: "#fafafa",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div style={{ display: "flex", fontSize: 28, letterSpacing: 4, textTransform: "uppercase", opacity: 0.8 }}>
        FutureHax
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05 }}>{APP_TITLE}</div>
        <div style={{ fontSize: 28, color: "#a1a1aa", maxWidth: 900 }}>
          Next.js starter with shared commons UI and tooling.
        </div>
      </div>
      <div style={{ display: "flex", fontSize: 22, color: "#ef9a9a" }}>futurehax.com</div>
    </div>,
    { ...size },
  );
}
