import React from "react";
import style from "../header.module.css";
import {NavLink} from "react-router-dom";
const Logo = () => {
    return(
        <div className={style.acrostia}>
            <NavLink to='/home' className={style.logonav}> <p>acrostia</p> </NavLink>
        </div>
    )
}

export default Logo;