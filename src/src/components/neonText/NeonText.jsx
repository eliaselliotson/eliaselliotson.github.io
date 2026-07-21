import { colord } from "colord";
import "./styles.css";

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

export default function NeonText({ className, style={}, vertical, children, color, dark }) {
  return (
    <span className={`neon-text ${vertical ? "vertical" : "horizontal"} ${className || ''}`} style={{
        ...neonPalette(color, dark ? 'dark' : 'light'),
        ...style
      }}>
      <span className="glow" aria-hidden="true">{children}</span>
      <span className="border" aria-hidden="true">{children}</span>
      <span className="fill" aria-hidden="true">{children}</span>
      <span className="grid" aria-hidden="true" style={{ filter: !dark ? "opacity(50%)" : "opacity(50%)" }}>{children}</span>
      <span className="real">{children}</span>
    </span>
  );
}
