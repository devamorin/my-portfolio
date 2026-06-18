import {
  siNextdotjs,
  siReact,
  siTypescript,
  siTailwindcss,
  siRadixui,
  siNodedotjs,
  siExpress,
  siPostgresql,
  siSupabase,
  siMysql,
  siSocketdotio,
  siGit,
  siGithub,
  siVercel,
  siRender,
} from "simple-icons";

type SimpleIcon = { title: string; path: string; hex: string };

export type TechIconDef =
  | { kind: "si"; title: string; path: string; hex: string }
  | { kind: "symbol"; title: string; symbol: string };

const si = (icon: SimpleIcon): TechIconDef => ({
  kind: "si",
  title: icon.title,
  path: icon.path,
  hex: icon.hex,
});

// Visual Studio Code and Playwright are not distributed by Simple Icons due to
// brand licensing, so they fall back to Material Symbols.
export const techIcons: Record<string, TechIconDef> = {
  nextjs: si(siNextdotjs),
  react: si(siReact),
  typescript: si(siTypescript),
  tailwindcss: si(siTailwindcss),
  radixui: si(siRadixui),
  responsive: { kind: "symbol", title: "Responsive Web Design", symbol: "devices" },
  nodejs: si(siNodedotjs),
  express: si(siExpress),
  postgresql: si(siPostgresql),
  supabase: si(siSupabase),
  mysql: si(siMysql),
  socketio: si(siSocketdotio),
  git: si(siGit),
  github: si(siGithub),
  vercel: si(siVercel),
  render: si(siRender),
  vscode: { kind: "symbol", title: "Visual Studio Code", symbol: "code" },
  playwright: { kind: "symbol", title: "Playwright", symbol: "theater_comedy" },
};

// Brand colors that are near-black would disappear on the dark surface, so we
// render those marks in the light on-surface color instead.
export function iconDisplayColor(hex: string): string {
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance < 60 ? "#E5E2E1" : `#${hex}`;
}
