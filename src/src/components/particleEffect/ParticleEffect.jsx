import { useRef, useEffect } from "react";
import { ParticleCanvas } from "./ParticleCanvas.js";

export default function ParticleEffect() {
  const canvasRef = useRef();

  useEffect(() => {
    new ParticleCanvas(canvasRef.current);
  }, []);

  return <canvas className="absolute top-0 left-0 opacity-50" ref={canvasRef}></canvas>;
}
