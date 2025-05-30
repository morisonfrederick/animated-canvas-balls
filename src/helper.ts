import Ball from "./BallClass";

//function to generate random number

function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

//function to create random color

function randomColor() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

export default function generateBalls(ctx: CanvasRenderingContext2D) {
  const balls = [];
  let num = 1;

  while (num < 1000) {
    let ball = new Ball(
      ctx,
      random(20, ctx.canvas.width - 20),
      random(20, ctx.canvas.height - 20),
      5,
      ctx.canvas.width,
      ctx.canvas.height,
      randomColor()
    );
    balls.push(ball);
    num++;
  }
  return balls;
}
