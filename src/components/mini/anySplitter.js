import React from 'react';
import { ArrowComponent } from "../canvascomp/drawingComponent";
import SplittingCanvas from "../canvascomp/splitComponent";

function Splitter({ height, width, data, vaclength, cl ,top}) {

  const generateRandomString = (length) => {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = 's';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      result += charset[randomIndex];
    }
    return result;
  };


  const l = data.length;
  const clsp = generateRandomString(l) + cl;  // classname of splitter


  return (
    <div className="anysplit container" style={{ display: "flex", justifyContent:"center", position:'relative', bottom:top}}>
      {/* Splitter */}
      <div>
        <SplittingCanvas totalHeight={height * l} totalWidth={width / 3} splitNumber={l} cl={clsp} />
      </div>

      {/* Single arrow and data */}
      <div>
        {data.map((item, index) => {
              
              console.log("Splitterdata:-" +item.name);
            return(
                <div key={index} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <ArrowComponent slant={false} dir="none" width={width-(width/3)} height={height} t={item.name+cl} />
                <button style={{ backgroundColor: item.bgcolor, color: item.textColor, height: '30px', width: '110px', border: "none" }}>{item.name}</button>
              </div>
            );
      

         
            })}
      </div>
    </div>
  );
}

export default Splitter;
