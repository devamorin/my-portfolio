import { iconDisplayColor, techIcons } from "@/lib/tech-icons";

export default function TechIcon({
  slug,
  size = 18,
}: {
  slug: string;
  size?: number;
}) {
  const def = techIcons[slug];
  if (!def) return null;

  if (def.kind === "symbol") {
    return (
      <span
        className="material-symbols-outlined text-primary"
        style={{ fontSize: size }}
        aria-label={def.title}
      >
        {def.symbol}
      </span>
    );
  }

  return (
    <svg
      role="img"
      aria-label={def.title}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={iconDisplayColor(def.hex)}
    >
      <path d={def.path} />
    </svg>
  );
}
