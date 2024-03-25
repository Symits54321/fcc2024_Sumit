import {ArrowComponent} from "../canvascomp/drawingComponent";
import Hovercomp from "../hovercomp/Hovercomp";
import { useState } from "react";





function DualSplitter({height,width,data,vaclength,cl}){

    const generateRandomString = (length) => {
        const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let result = 's';
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * charset.length);
          result +=  charset[randomIndex];
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





      
     
    if(data!="vacant"){
        let l= data.length;
        return(
            <div>
            {data.map((item, index) =>{ 

                let dirval;

                if(index==0){
                    dirval="down";
               
                }else{
                    dirval="up";
                }
                
                return(
            <div key={index} style={{ display: "flex", justifyContent: "center", alignItems: "center" , position: "relative" }}>
                <ArrowComponent slant={true} dir={dirval} width={width} height={height} t={item.name} />
                <button style={{ backgroundColor:item.bgcolor, color:item.textColor, height: '30px', width: '110px', border:"none" }}
                 onMouseOver={()=> handlemouseover(item.id) }
                 onMouseLeave={()=> handlemouseout() }>{item.name}</button>
                 {hoverState && hoverId===item.id && <Hovercomp hoverdata={item.hover}/>}
                
                
            </div>
            
            )})}
        </div>
            
        );
    
    }else{
        
        let len = parseInt(vaclength);

        // Create an array to hold JSX elements
        let jsxElements = [];
        
        for (let i = 0; i < 2; i++) {
            let vacString = "randomString" + i + cl;
            console.log("Random string " + vacString);
            jsxElements.push(
                <ArrowComponent key={i} slant={false} dir="none" width={width} height={height} t={vacString} />
            );
        }
        
        // Return the array of JSX elements
        return jsxElements;
        
         
    }
}

export default DualSplitter;