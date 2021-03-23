import React from 'react';
import style from "../about.module.css";

const AboutText = () => {
    return(
        <div className={style.text}>
            <div className={style.title}>WHO WE ARE & WHAT WE DO</div>
            <p className={style.bigtext}>
                Cras suscipit porttitor. Morbi sit amet tincidunt saplen. Curabitur posuere lectus aliquet
                erat rutrum sollictudin. In enim diam, ullamcorper quis libero et, ultricies <br/>
                commodo est. Quisque at ante vitae justo fermentum vivera ac eu justo.
                Ut luctus imperdiet lacus, eget posuere quis.
            </p>
            <div>
                <div className={style.teg}>
                    MEET THE TEAM
                    <span>

                    </span>
                </div>
            </div>

        </div>
    )
}

export default AboutText;