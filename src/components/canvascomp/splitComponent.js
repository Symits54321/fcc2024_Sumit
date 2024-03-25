import React, { useEffect } from 'react';

const SplittingCanvas = ({ totalHeight, totalWidth, splitNumber , cl , rotate , top}) => {
  useEffect(() => {
    // Get the canvas element
    const canvas = document.getElementById("myCanvas"+cl);
    const ctx = canvas.getContext("2d");
    const th = totalHeight;
    const tw = totalWidth;
    const w = tw;   // arrow length

    let h;    // arrow box height or arrow gaps
    h = th / splitNumber;

    let hi = h / 2;   // height index

    // Draw a line
    ctx.beginPath();

    while (hi < th) {
      ctx.moveTo(0, th / 2);
      ctx.lineTo(w, hi);
      hi += h;
    }

    ctx.strokeStyle = "black"; // Stroke color
    ctx.lineWidth = 2; // Line width
    ctx.stroke(); // Draw the line
  }, [totalHeight, totalWidth, splitNumber , rotate ,top]);

  return (
  
      <canvas id={"myCanvas"+cl} style={{rotate:rotate, position:'relative', bottom:top}}
      width={totalWidth} height={totalHeight}></canvas>
     
    
  );
};

export default SplittingCanvas;
