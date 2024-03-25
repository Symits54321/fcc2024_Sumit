
import Splitter from "../splitterComp/anySplitter";







function FourthCol({height,width,data,vaclength,cl, top}){

  
      
       
  
   
        return(

        
                <div style={{position:"relative", bottom:height/4}} className="thirdcol" >
                {data.map((item, index) => {
                        // children 
                        if (item.children !== undefined) {
                            let childdata = item.children;
                              return  childdata.map((child, childIndex) => {
                                //   grandchildren 
                                    if (child.children !== undefined)  {
                                        console.log("child"+child.name);
                                        let grandchilddata = child.children;
                                        console.log("grandchild"+grandchilddata);
                                        console.log(grandchilddata);
                                            return  grandchilddata.map((gchild, ggchildIndex) => {
                                                // grandgrandchildren
                                                if (gchild.children !== undefined)  {
                                                    let ggchild = gchild.children;
                                                    console.log("grandgrandchild"+ggchild);
                                                    console.log(ggchild);
                                                    let clname = ggchild.name + "shl"
                                                        return (
                                                            <Splitter key={ggchildIndex} data={ggchild} height={height / 2} width={width} cl={clname} top={top}/>
                                                        );
                                                }
                                                return null;
                                            })

                                        
                                    }
                                    return null;
                                });
                        }
                        return null;
                    })}         
                </div>

        );
    
  
}

export default FourthCol;