
import Splitter from "./mini/anySplitter";







function ThirdCol({height,width,data,vaclength,cl}){

  
      
       
  
   
        return(

        
                <div style={{position:"relative", bottom:height/4}} className="thirdcol" >
                {data.map((item, index) => {
                        if (item.children !== undefined) {
                            let childdata = item.children;
                              return  childdata.map((child, childIndex) => {
                                    if (child.children !== undefined)  {
                                        console.log("child"+child.name);
                                        let grandchilddata = child.children;
                                        console.log("grandchild"+grandchilddata);
                                        console.log(grandchilddata);
                                        return (
                                            <Splitter key={childIndex} data={grandchilddata} height={height / 2} width={width} cl={child.name} />
                                        );
                                    }
                                    return null;
                                });
                        }
                        return null;
                    })}         
                </div>

        );
    
  
}

export default ThirdCol;