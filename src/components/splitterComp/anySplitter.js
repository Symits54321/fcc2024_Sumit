import React from 'react';
import { ArrowComponent } from "../canvascomp/drawingComponent";
import SplittingCanvas from "../canvascomp/splitComponent";

import { useState } from 'react';
import Hovercomp from '../hovercomp/Hovercomp';

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

  const [hoverState,setHoverState] = useState(false);
  const [hoverId,setHoverId] = useState("");

  const handlemouseover = (id) => {

   
      setHoverId(id);
      setHoverState(true);
   

  }

  const handlemouseout = () => {

   
      setHoverState(false);
      setHoverId("");
   

  }



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
                <div key={index} style={{ display: "flex", justifyContent: "center", alignItems: "center", position:'relative' }}>
                <ArrowComponent slant={false} dir="none" width={width-(width/3)} height={height} t={item.name+cl} />
                <button style={{ backgroundColor: item.bgcolor, color: item.textColor, height: '30px', width: '110px', border: "none" }}
                 onMouseOver={()=> handlemouseover(item.id) }
                 onMouseLeave={()=> handlemouseout() }>{item.name}</button>
                 {hoverState && hoverId===item.id && <Hovercomp hoverdata={item.hover}/>}
               
              </div>
            );
      

         
            })}
      </div>
    </div>
  );
}

export default Splitter;
