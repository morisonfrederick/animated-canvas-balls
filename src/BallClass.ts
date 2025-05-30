export default class Ball {
  x;
  y;
  size;
  ctx;
  width;
  height;
  color;
  dx: number;
  dy: number;

  constructor(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    size: number,
    width: number,
    height: number,
    color: string
  ) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.color = color;
    this.dx = this.#ramdom(-7, 7);
    this.dy = this.#ramdom(-7, 7);
  }

  draw() {
    // this.ctx.clearRect(0, 0, this.width, this.height);
    this.ctx.fillStyle = this.color;
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    this.ctx.fill();
  }
  #ramdom(min: number, max: number) {
    return Math.floor(Math.random() * max - min);
  }
  update() {
    this.x += this.dx;
    this.y += this.dy;

    if (this.x + this.size > this.width || this.x - this.size < 0) {
      this.dx *= -1;
    }
    if (this.y + this.size > this.height || this.y - this.size < 0) {
      this.dy *= -1;
    }
    this.draw();
  }
}
