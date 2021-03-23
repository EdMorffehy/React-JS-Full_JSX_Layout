import React from 'react';
import style from "./about.module.css";
import AboutText from "./AboutText/AboutText";
import Cards from "./AboutCards/Cards";
const About = () => {
    return(
        <div className={style.about}>
            <div className={style.bg1}>
                <AboutText/>
                <Cards/>
            </div>
        </div>
    )
}

export default About;