
import style from "./homepage.module.css";

import FirstCol from "../../components/firstcol";
import SecondCol from "../../components/secondcol";
import ThirdCol from "../../components/thirdcol";
import FourthCol from "../../components/fourthcol";

import data from '../../data/firstfivedata.json';

function Homepage() {

    return(
        <>
        {/* //heading */}
        <p>Show the details on hover</p>
        {/* //  mindmap container  */}
        <div className={style.mindmapContainer}>

            {/* //  cl1, cl2, cl3, cl4 */}
               
               {/* First Row  */}
              <div className={style.cl1}>
                     <FirstCol  height={80} width={100} data={data}/>
              </div>
              
              {/* vacant arrow */}
              <div className={style.clv1}>
                  <FirstCol  height={80} width={100} data="vacant" vaclength='5' cl="clv1" />
              </div>

              {/* Second Row  */}
              <div className={style.cl2}>
              <SecondCol  height={80} width={100} data={data}/>
              </div>

               {/* vacant arrow */}
               <div className={style.clv2}>
                  <FirstCol  height={40} width={100} data="vacant" vaclength='1' cl="clv2" />
              </div>
              
              {/* Third Row  */}
              <div className={style.cl3}>
                <ThirdCol  height={80} width={100} data={data} cl="cl3" />
              </div>

                {/* vacant arrow */}
                <div className={style.clv3}>
                  <FirstCol  height={20} width={100} data="vacant" vaclength='1' cl="clv3" top={10}/>
              </div>

               {/* Third Row  */}
               <div className={style.cl3}>
                <FourthCol  height={80} width={100} data={data} cl="cl3" top={60} />
              </div>


        </div>
           
        </>
    );
}

export default Homepage ;