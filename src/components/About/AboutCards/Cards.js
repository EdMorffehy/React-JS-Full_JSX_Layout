import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import style from "../about.module.css";
import { ImFacebook } from 'react-icons/im';
import { AiOutlineTwitter } from 'react-icons/ai';
import { TiSocialGooglePlus } from 'react-icons/ti';
import { ImLinkedin2 } from 'react-icons/im';

const Cards = () => {
    const card = useSelector(state=>state.cardStore.cards);
    const dispatch=useDispatch

    return(
            <div className={style.card}>
                    {card.map(c=>{
                        return(
                            <div className={style.block} key={c.id}>
                                <div className={style.img}><div className={style.hoverImgs}></div></div>
                                 <div className={style.name}>{c.name}</div>
                                 <div className={style.proffesion}>{c.title}</div>
                                 <div className={style.hrefs}>
                                   <span className={style.fb}>  <a href={c.facebook} target='_blank'><ImFacebook/></a> </span>
                                     <span className={style.twitt}>  <a href={c.twitter} target='_blank'><AiOutlineTwitter/> </a></span>
                                     <span className={style.gmail}>  <a href={c.gmail} target='_blank'> <TiSocialGooglePlus/></a></span>
                                    <span className={style.din}>   <a href={c.linkdin} target='_blank'> <ImLinkedin2/></a></span>
                                 </div>
                            </div>
                        )
                    })}
            </div>
    )
}

export default Cards;

