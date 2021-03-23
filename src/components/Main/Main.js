import React from 'react';
import style from "./main.module.css";
import Carousell from "./Carousell/Carousell";

const Main = () => {
    return(
        <div className={style.home}>
            <div className={style.bg2}>
                    <Carousell/>
            </div>
        </div>
    )
}

export default Main;