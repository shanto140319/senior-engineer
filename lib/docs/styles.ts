import type { CSSProperties } from "react";

export function topicColorStyle(color: string): CSSProperties {
  return { "--topic-color": color } as CSSProperties;
}

export function refColorStyle(color: string): CSSProperties {
  return { "--ref-color": color } as CSSProperties;
}
