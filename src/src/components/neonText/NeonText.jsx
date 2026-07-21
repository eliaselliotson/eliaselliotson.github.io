import { neonPalette } from "./neonPalette.js";
import "./styles.css";

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
