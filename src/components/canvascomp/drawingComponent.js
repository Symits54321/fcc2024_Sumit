import React, { useEffect } from 'react';

export const ArrowComponent = ({ slant, dir, width, height ,t}) => {



   

  useEffect(() => {
    const canvas = document.getElementById("myCanvas"+t);
    const ctx = canvas.getContext("2d");
    drawArrow(ctx, slant, dir, width, height);
  }, [slant, dir, width, height]);

  const drawArrow = (ctx, slant, dir, width, height ) => {
    const h = height;    // arrow box height or arrow gaps
    const w = width;   // arrow length
    const d = 5;    // arrow size
    let s = 0;

    if (slant) {
      s = w / 3;
    }

    ctx.clearRect(0, 0, width, height); // Clear the canvas before drawing

    ctx.beginPath();
    ctx.moveTo(s, h / 2);
    ctx.lineTo(w, h / 2);
    ctx.moveTo(w, h / 2);
    ctx.lineTo(w - d, (h / 2) - d);
    ctx.moveTo(w, h / 2);
    ctx.lineTo(w - d, (h / 2) + d);

    if (dir !== "none") {
      if (dir === "down" || dir === "up&down") {
        ctx.moveTo(s, h / 2);
        ctx.lineTo(0, h);
      }

      if (dir === "up" || dir === "up&down") {
        ctx.moveTo(s, h / 2);
        ctx.lineTo(0, 0);
      }
    }

    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.stroke();
  };

  return (
    <canvas id={"myCanvas" + t} width={width} height={height}></canvas>
  );
};


