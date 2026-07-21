import { colord } from "colord";

export function neonPalette(color, mode) {
  if (mode === 'dark') {
    return {
      "--glow-col": color,
      "--border-col-1": colord(color).darken(0).toHex(),
      "--border-col-2": colord(color).darken(0.2).toHex(),
      "--fill-col-1": colord(color).lighten(0.1).toHex(),
      "--fill-col-2": colord(color).darken(0.1).toHex(),
    };
  }

  return {
      "--glow-col": color,
      "--border-col-1": colord(color).lighten(0.2).toHex(),
      "--border-col-2": colord(color).darken(0).toHex(),
      "--fill-col-1": colord(color).lighten(0.1).toHex(),
      "--fill-col-2": colord(color).darken(0.1).toHex(),
    };
}
