import React from 'react';
import style from "./contacts.module.css";
import Text from "./ContactsText/Text";
import Adress from "./Adress/Adress";
import Form from "./Form/Form";
import Map from "./Map/Map";
import Icons from "./Icons/Icons";

const Contacts = () => {
    return(
        <div className={style.contacts}>
            <div className={style.bg1}>
                <Text/>
                <div className={style.blockContacts}>
                    <Adress/>
                    <Map/>
                    <Form/>
                </div>
                <Icons/>
            </div>
        </div>
    )
}

export default Contacts;