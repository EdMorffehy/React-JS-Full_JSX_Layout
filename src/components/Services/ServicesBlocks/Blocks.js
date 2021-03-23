import React from 'react';
import img from "../../../images/block1img1.png"
import style from "../services.module.css";
import {useDispatch, useSelector} from "react-redux";
const Blocks = () => {
    const card = useSelector(state=>state.blockStore.block);
    const dispatch = useDispatch();
    console.log(card);

    return(
        <div className={style.mainBlock}>
            <div className={style.block}>
            {card.map(c=>{
               return <div  className={style.card} key={c.id}>
                   <div className={style.imgBlock}>
                       <img src={c.img}/>
                   </div>
                   <h1>
                       {c.title}
                   </h1>
                   <p>
                       {c.text}
                   </p>
               </div>
            })}
            </div>
        </div>
    )
}

export default Blocks;