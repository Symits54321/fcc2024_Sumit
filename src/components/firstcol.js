import {ArrowComponent} from "./canvascomp/drawingComponent";





function FirstCol({height,width,data,vaclength,cl}){

    const generateRandomString = (length) => {
        const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let result = 's';
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * charset.length);
          result +=  charset[randomIndex];
        }
        return result;
      };
      
     
    if(data!="vacant"){
        let l= data.length;
        return(
            <div>
            {data.map((item, index) =>{ 

                let dirval;

                if(index==0){
                    dirval="down";
                }else if(l-index==1){
                    dirval="up";
                }else{
                    dirval="up&down";
                }
                
                return(
            <div key={index} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <ArrowComponent slant={false} dir={dirval} width={width} height={height} t={item.name} />
                <button style={{ backgroundColor:item.bgcolor, color:item.textColor, height: '30px', width: '110px', border:"none" }}>{item.name}</button>
            </div>
            )})}
        </div>
            
        );
    
    }else{let len = parseInt(vaclength);

        // Create an array to hold JSX elements
        let jsxElements = [];
        
        for (let i = 0; i < 5; i++) {
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

export default FirstCol;