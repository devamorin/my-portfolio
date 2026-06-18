export function scrollToHash(hash: string) {
  if (typeof window === "undefined") return;

  const id = hash.replace(/^#/, "");
  const target = id ? document.getElementById(id) : null;
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (!target) {
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    return;
  }

  target.scrollIntoView({
    behavior: reduceMotion ? "auto" : "smooth",
    block: "start",
  });
}
