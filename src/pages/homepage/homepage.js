
import style from "./homepage.module.css";

import FirstCol from "../../components/firstcol";
import SecondCol from "../../components/secondcol";

import data from '../../data/firstfivedata.json';

function Homepage() {

    return(
        <>
        {/* //heading */}
        <p>Show the details on hover</p>
        {/* //  mindmap container  */}
        <div className={style.mindmapContainer}>

            {/* //  cl1, cl2, cl3, cl4 */}

              <div className={style.cl1}>
                     <FirstCol  height={80} width={100} data={data}/>
              </div>
              
              {/* vacant arrow */}
              <div className={style.cl2}>
                  <FirstCol  height={80} width={100} data="vacant" vaclength='5' cl="cl2" />
              </div>

              <div className={style.cl3}>
              <SecondCol  height={80} width={100} data={data}/>
              </div>

              <div className={style.cl4}>

              </div>

        </div>
           
        </>
    );
}

export default Homepage ;