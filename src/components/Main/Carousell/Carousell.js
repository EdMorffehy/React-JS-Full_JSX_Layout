import React from 'react';
import Carousel from 'react-elastic-carousel'
import style from "../main.module.css";
import  "./carousel.css";
const Carousell = () =>{

    return(
        <div className={style.carouselll}>
            <Carousel itemsToShow={1}>
                <div className={style.carouselItem1}>
                    <div className={style.carouselSpan1}>GOOD IDEAS<br/> <span className={style.dd}>comes</span></div>
                    <div className={style.carouselSpan2}>FIRST!</div>
                </div>
                <div className={style.carouselItem2}>
                    <div className={style.carouselSpan3}>Good IDEAS<br/> <span className={style.tt}>comes</span></div>
                    <div className={style.carouselSpan4}>FIRST!</div>
                </div>
                <div className={style.carouselItem3}>
                    <div className={style.carouselSpan5}>Nice IDEAS<br/> <span className={style.cc}>asdfg</span></div>
                    <div className={style.carouselSpan6}>LASTT!</div>
                </div>
            </Carousel>
        </div>
    )
}

export default Carousell;


