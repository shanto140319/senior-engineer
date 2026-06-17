import type { CSSProperties } from "react";

export function phaseColorStyle(color: string): CSSProperties {
  return { "--phase-color": color } as CSSProperties;
}

export function catColorStyle(color: string): CSSProperties {
  return { "--cat-color": color } as CSSProperties;
}

export function topicColorStyle(color: string): CSSProperties {
  return { "--topic-color": color } as CSSProperties;
}

export function tipColorStyle(color: string): CSSProperties {
  return { "--tip-color": color } as CSSProperties;
}
