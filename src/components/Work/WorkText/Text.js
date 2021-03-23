import React from 'react';
import style from "../work.module.css";
const Text = () =>{
    return(
        <div className={style.text}>
            <div className={style.title}>OUR WORK</div>
            <p>
                Cras suscipit porttitor. Morbi sit amet tincidunt saplen. Curabitur posuere lectus aliquet
                erat rutrum sollictudin. In enim diam, ullamcorper quis libero et, ultricies <br/>
                commodo est. Quisque at ante vitae justo fermentum vivera ac eu justo.
                Ut luctus imperdiet lacus, eget posuere quis.
            </p>
        </div>
    )
}

export default Text;