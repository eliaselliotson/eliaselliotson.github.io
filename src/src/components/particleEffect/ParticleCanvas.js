import { Particle } from "./Particle.js";

export class ParticleCanvas {
  constructor(canvas) {
    this.particles = [];
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.framecount = 0;
    this.mousex = Infinity;
    this.mousey = Infinity;

    this.fitToParent();
    this.addMouseTracker();
    this.addResizeTracker();
    this.update();
  }

  // Re-adjusts the canvas dimensions to fit the parent
  fitToParent() {
    this.canvas.width = this.canvas.parentElement.clientWidth;
    this.canvas.height = this.canvas.parentElement.clientHeight;
    this.adjustParticleCount();
  }

  // Adds a listener to track & match the parent element's size
  addResizeTracker() {
    const observer = new ResizeObserver(() => this.fitToParent());
    observer.observe(this.canvas.parentElement);
  }

  // Adds a listener to track the mouse's position relative to the canvas
  addMouseTracker() {
    window.addEventListener('mousemove', (event) => {
      // Obtain the canvas coordinates
      const { top, left } = this.canvas.getBoundingClientRect();
      
      // Calculate the mouse coordinates relative to the canvas
      this.mousex = event.clientX - left;
      this.mousey = event.clientY - top;
    });
  }

  // Adjusts the number of particles in the canvas to attain a specific density
  adjustParticleCount() {
    // 1 particle per every 100x100 pixel space
    const targetParticleCount = (this.canvas.width * this.canvas.height) / 10000;

    // Add particles if there's too few
    while (this.particles.length < targetParticleCount) {
      this.particles.push(
        new Particle(
          Math.random() * this.canvas.width,
          Math.random() * this.canvas.height
        )
      );
    }

    // Remove particles if there's too many
    while (this.particles.length > targetParticleCount) {
      this.particles.pop();
    }
  }

  // Updates the canvas
  update() {
    // Clear the canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Draw and update all the particles
    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].draw(this.ctx, this.mousex, this.mousey, this.framecount);
    }
    
    // Update the frame count
    this.framecount++;

    // Prepare the next frame
    requestAnimationFrame(() => this.update());
  }
}
