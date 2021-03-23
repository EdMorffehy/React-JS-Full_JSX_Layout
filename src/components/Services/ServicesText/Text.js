import React from 'react';
import style from "../services.module.css";
const Text = () =>{
    return(
        <div className={style.text}>
            <h1 className={style.servicesH1}>OUR SERVICES</h1>
            <p className={style.title}>
                CRAS COMMODO MATTIS JUSTO NEC <span>LOBORTIS</span>. NAM LOBORTIS. ULLAMCORPER MASSA SIT AMET
            </p>
            <p className={style.bigText}>
                Cras suscipit porttitor. Morbi sit amet tincidunt saplen. Curabitur posuere lectus aliquet
                erat rutrum sollictudin. In enim diam, ullamcorper quis libero et, ultricies <br/>
                commodo est. Quisque at ante vitae justo fermentum vivera ac eu justo.
                Ut luctus imperdiet lacus, eget posuere quis.
            </p>
        </div>
    )
}

export default Text;