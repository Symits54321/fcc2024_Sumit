import { useState } from "react";
import { ArrowComponent } from "../canvascomp/drawingComponent";
import Hovercomp from "../hovercomp/Hovercomp";

function FirstCol({ height, width, data, vaclength, cl ,top, head}) {
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

  if (data !== "vacant") {
    let l = data.length;
    return (
      <div className="col">
        <div>
          {data.map((item, index) => {
            let dirval;
            if (index === 0) {
              dirval = "down";
            } else if (l - index === 1) {
              dirval = "up";
            } else {
              dirval = "up&down";
            }
            return (
              <div key={index} style={{ display: "flex", justifyContent: "center", alignItems: "center" , position:"relative"}}>
                <ArrowComponent slant={false} dir={dirval} width={width} height={height} t={item.name} />
                <button 
                style={{ backgroundColor: item.bgcolor, color: item.textColor, height: '30px', width: '110px',border: "none"  }} 
                 onMouseOver={()=> handlemouseover(item.id) }
                 onMouseLeave={()=> handlemouseout() }>{item.name}</button>
                 {hoverState && hoverId===item.id && <Hovercomp hoverdata={item.hover} /> }             
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
   
    // Create an array to hold JSX elements
    let jsxElements = [];
    for (let i = 0; i < vaclength; i++) {
      let vacString = "randomString" + i + cl;
      console.log("Random string " + vacString);
      jsxElements.push(
        <ArrowComponent key={i} slant={false} dir="none" width={width} height={height} t={vacString} head={head} />
      );
    }
    // Return the array of JSX elements
    return (
      <div style={{display:'flex', flexDirection:'column', position:"relative", bottom:top}} className="col" >
        {jsxElements}
      </div>
    );
  }
}

export default FirstCol;
