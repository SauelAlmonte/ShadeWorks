// All color math is performed in oklch for perceptual uniformity.
// Shade scale: 11 stops — 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950
// Harmony types: complementary | analogous | triadic | split-complementary | tetradic | monochromatic

export type HarmonyType =
  | "complementary"
  | "analogous"
  | "triadic"
  | "split-complementary"
  | "tetradic"
  | "monochromatic";

export type ShadeStop = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;

export const SHADE_STOPS: ShadeStop[] = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

// TODO: implement parseToOklch, generateShadeScale, generateHarmony
