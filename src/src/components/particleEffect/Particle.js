export class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    // Random particle size between 0-4, but biased toward smaller particles
    this.size = Math.pow(Math.random(), 2) * 4;

    // Random particle velocity
    this.vx = (Math.random() * 2) - 1;
    this.vy = (Math.random() * 2) - 1;
  }

  // Updates the particle's physics (not that kind of particle physics!)
  update(ctx, framecount) {
    // Random "wind" forces
    const cycleOffset = this.size * 100;
    const strength = 1 / 160;
    this.vx += Math.sin(cycleOffset + framecount / (this.size * 10)) * strength;
    this.vy += Math.cos(cycleOffset + framecount / (this.size * 10)) * strength;

    // Displace the particle by its velocity
    this.x += this.vx;
    this.y += this.vy;

    // Force the particle to stay within bounds
    this.x = (this.x + ctx.canvas.width) % ctx.canvas.width;
    this.y = (this.y + ctx.canvas.height) % ctx.canvas.height;
  }

  // Draws the particle on the canvas
  draw(ctx, mousex, mousey, framecount) {
    // Update the position of the particle
    this.update(ctx, framecount);

    // Draw the particle
    const shrinkRange = 200;
    const mouseDistance = Math.hypot(this.x - mousex, this.y - mousey);
    const shrinkFactor = Math.pow(Math.min(mouseDistance / shrinkRange, 1), 2);
    const particleRadius = Math.ceil(this.size) / 2 * shrinkFactor;
    const particleOpacity = (128 + this.size * 25) * shrinkFactor;

    ctx.beginPath();
    ctx.arc(this.x, this.y, particleRadius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${particleOpacity})`;
    ctx.fill();
    ctx.closePath();
  }
}
