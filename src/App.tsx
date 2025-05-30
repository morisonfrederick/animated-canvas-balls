import { useEffect, useRef } from "react";
import "./App.css";
import generateBalls from "./helper";

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let canvas = canvasRef.current;
    let ctx = canvas?.getContext("2d");
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    if (ctx) {
      let balls = generateBalls(ctx);
      function loop() {
        if (canvas && ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        }

        balls.forEach((ball, i) => {
          console.log("ball no : ", i);
          ball.update();
        });
        requestAnimationFrame(loop);
      }
      loop();
    }
  }, []);

  return <canvas className="bg-black w-full h-full" ref={canvasRef}></canvas>;
}

export default App;
