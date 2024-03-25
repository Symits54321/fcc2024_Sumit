
import DualSplitter from "../splitterComp/dualSplitter";







function SecondCol({height,width,data,vaclength,cl}){

  
      
       
  
   
        return(

        
                <>
                {data.map((item, index) =>{ 

                    let childdata= item.children;

                    if(childdata.length==2){

                         return(
                              
                            <DualSplitter data={childdata} height={height/2} width={width} />
                         );
                    }
                    
                })
               }
             </>

        );
    
  
}

export default SecondCol;