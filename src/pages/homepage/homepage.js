
import style from "./homepage.module.css";

import FirstCol from "../../components/columnComp/firstcol";
import SecondCol from "../../components/columnComp/secondcol";
import ThirdCol from "../../components/columnComp/thirdcol";
import FourthCol from "../../components/columnComp/fourthcol";

import SplittingCanvas from "../../components/canvascomp/splitComponent";

import data from '../../data/firstfivedata.json';

function Homepage() {

    return(
        <>
        {/* //heading */}
        <h2 style={{color:'#00acc1'}}>Lizmotors Internship Assignment by Sumit Singh</h2>
        <h3>Show the details on hover</h3>
        {/* //  mindmap container  */}
        <div className={style.mindmapContainer}>

            {/* //  cl1, cl2, cl3, cl4 */}

             {/* vacant arrow */}
             <div className={style.clvs}>
                  <FirstCol  height={80+40} width={70} data="vacant" vaclength={1} cl="clvs" top={-140} head="none"/>
                </div>
               
               {/* First Row  */}
              <div className={style.cl1}>
                     <FirstCol  height={80} width={60} data={data}/>
              </div>
              
              {/* vacant arrow */}
              <div className={style.clv1}>
                  <FirstCol  height={80} width={60} data="vacant" vaclength='5' cl="clv1" />
              </div>

              {/* Second Row  */}
              <div className={style.cl2}>
              <SecondCol  height={80} width={85} data={data}/>
              </div>

               {/* vacant arrow */}
               <div className={style.clv2}>
                  <FirstCol  height={40} width={60} data="vacant" vaclength='1' cl="clv2" />
              </div>
              
              {/* Third Row  */}
              <div className={style.cl3}>
                <ThirdCol  height={80} width={85} data={data} cl="cl3" />
              </div>

                {/* vacant arrow */}
                <div className={style.clv3}>
                  <FirstCol  height={20} width={65} data="vacant" vaclength={1} cl="clv3" top={10}/>
              </div>

               {/* fourth Row  */}
               <div className={style.cl3}>
                <FourthCol  height={80} width={100} data={data} cl="cl3" top={60} />
              </div>
               
                {/* vacant arrow */}
                <div className={style.clv4}>
                  <FirstCol  height={80+40} width={60} data="vacant" vaclength={2} cl="clv4" top={120} head="none"/>
                </div>

                    {/* Splitter */}
                        <div>
                            <SplittingCanvas totalHeight={60*4} totalWidth={40} splitNumber={2} 
                            cl={"reverse"} rotate={'180deg'} top={120}/>
                        </div>                

                 {/* vacant arrow */}
                 <div className={style.clv5}>
                  <FirstCol  height={80+40} width={70} data="vacant" vaclength={1} cl="clv5" top={60} />
                </div>
                

        </div>
           
        </>
    );
}

export default Homepage ;