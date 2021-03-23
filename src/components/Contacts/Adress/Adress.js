import React from 'react';
import style from "../contacts.module.css";

const Adress = () =>{
    return(
        <div className={style.adress}>
            <div className={style.name}>
                Adress
            </div>
            <div className={style.tit}>
                Acrostia
            </div>
            <div className={style.sevenoaks}>
                <span>Sevenoaks Rd</span>
                <span>Sevenoaks TN14 7HR, UK</span>
            </div>
            <div className={style.allContacts}>
                <div>
                    <div>Phone</div>
                    <div>Fax</div>
                    <div>Email</div>
                    <div>Skype</div>
                </div>
                <div>
                    <div>
                        <a href="tel:+44 555 555 555">+44 555 555 555</a>
                    </div>
                    <div>
                        <a href="fax:+44 555 555 555">+44 555 555 555</a>
                    </div>
                    <div>
                        <a href="info@acrostia.com">info@acrostia.com</a>
                    </div>
                    <div>
                        <span className={style.skype}>AcOstia</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Adress;