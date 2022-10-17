export const COLORS = {
  black: "#09090B",
  blue: "#6383F3",
  transparent: "transparent",
} as const;

export type TColorNames = keyof typeof COLORS;
