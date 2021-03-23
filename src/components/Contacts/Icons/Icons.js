import React from 'react';
import { ImFacebook } from 'react-icons/im';
import { AiOutlineTwitter } from 'react-icons/ai';
import { TiSocialGooglePlus } from 'react-icons/ti';
import { ImLinkedin2 } from 'react-icons/im';
import style from "../contacts.module.css";
const Icons = () =>{
    return(
        <div className={style.ic}>
            <div>
                <span> <a href='https://www.google.com/' target='_blank'><ImFacebook/></a></span>
                <span> <a href='https://www.google.com/' target='_blank'><AiOutlineTwitter/></a></span>
                <span> <a href='https://www.google.com/' target='_blank'><TiSocialGooglePlus/></a></span>
                <span><a href='https://www.google.com/' target='_blank'><ImLinkedin2/></a></span>
            </div>
        </div>
    )
}

export default Icons;