import React from 'react';
import style from './services.module.css';
import Text from "./ServicesText/Text";
import Blocks from "./ServicesBlocks/Blocks";
const Services = () => {
    return(
        <div className={style.services}>
            <div className={style.bg1}>
                    <Text/>
                    <Blocks/>
            </div>
        </div>
    )
}

export default Services;