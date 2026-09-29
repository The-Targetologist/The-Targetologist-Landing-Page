// Simple lettermarks in each platform's colors, so the page ships no logo files.
export type Platform = "google" | "meta" | "linkedin";

export const platformAccent: Record<Platform, string> = {
  google: "bg-[linear-gradient(90deg,#4285f4,#34a853,#fbbc05,#ea4335)]",
  meta: "bg-[#0866ff]",
  linkedin: "bg-[#0a66c2]",
};

const sizes = {
  sm: { box: "size-9 rounded-xl", text: "text-xl", textIn: "text-base" },
  lg: { box: "size-14 rounded-2xl", text: "text-3xl", textIn: "text-2xl" },
};

export function PlatformMark({
  platform,
  size = "lg",
}: {
  platform: Platform;
  size?: keyof typeof sizes;
}) {
  const s = sizes[size];
  if (platform === "google") {
    return (
      <span className={`grid place-items-center bg-white ring-1 ring-line ${s.box}`}>
        <span
          className={`bg-[conic-gradient(from_-45deg,#ea4335_0_90deg,#4285f4_0_180deg,#34a853_0_270deg,#fbbc05_0)] bg-clip-text font-bold text-transparent ${s.text}`}
        >
          G
        </span>
      </span>
    );
  }
  return (
    <span
      className={`grid place-items-center font-bold text-white ${s.box} ${
        platform === "meta" ? `bg-[#0866ff] ${s.text}` : `bg-[#0a66c2] ${s.textIn}`
      }`}
    >
      {platform === "meta" ? "∞" : "in"}
    </span>
  );
}
