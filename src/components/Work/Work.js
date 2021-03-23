import React from 'react';
import style from "./work.module.css";
import Text from "./WorkText/Text";
import Portfolio from "./Portfolio/Portfolio";

const Work = () => {
    return(
        <div className={style.work}>
            <div className={style.bg1}>
                <Text/>
                <Portfolio/>
            </div>
        </div>
    )
}

export default Work;