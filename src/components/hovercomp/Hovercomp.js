import React, { useState } from 'react';
import style from "./Hovercomp.module.css"

function Hovercomp({hoverdata}) {
    const [isHovered, setIsHovered] = useState(false);

    let pos = hoverdata.positive;
    let neg = hoverdata.negative;
    let com = hoverdata.comments;

    let posgraph = (pos/20000)*100;  // as total div width is 100px
    let neggraph = (neg/20000)*100;  // as total div width is 100px
    let comgraph = (com/20000)*100;  // as total div width is 100px

   

    return (
        <div className={style.fullContainer}>
            <div className={style.reader} style={{display:'flex',justifyContent:"space-between", width:"100px"}}>
                  <p>0</p>
                  <p>10000</p>
                  <p>20000</p>
            </div>

            <div className={style.topPart}>
                <div
                    className={`${style.hovernames}`}
                    style={{ fontSize: '7px', textAlign: "right" }}
                
                >
                    <p>positive </p>
                    <p>negative </p>
                    <p>comments </p>
                </div>

                <div>
                    <div className={style.barcontainer} style={{ width: '100px',  }}>
                        <div className={style.barvalue} style={{ width: `${posgraph}%` }}></div>
                        <p>{pos}</p>
                    </div>

                    <div className={style.barcontainer} style={{ width: '100px' }}>
                        <div className={style.barvalue} style={{ width: `${neggraph}%` }}></div>
                        <p>{neg}</p>
                    </div>

                    <div className={style.barcontainer} style={{ width: '100px' }}>
                        <div className={style.barvalue} style={{ width: `${comgraph}%` }}></div>
                         <p>{com}</p>
                    </div>
                </div>
            </div>
            
            <div className={style.bottomPart}>
               <p>Total reviews</p>
               <p>Positive Reviews</p>
               <p>Negative Reviews</p>
               <p>Comments</p>
            </div>

        </div>
    );
}

export default Hovercomp;
