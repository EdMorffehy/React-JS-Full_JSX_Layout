import React, { useState, useEffect } from "react";
import style from "../../work.module.css";
import {BsPlusCircle} from 'react-icons/bs';
const SelectedImage = ({
                           photo,
                           index,
                           name,
                           selected
                       }) => {
    const [isSelected, setIsSelected] = useState(selected);
    const handleOnClick = (e, index) => {
        setIsSelected(!isSelected);
    };

    useEffect(() => {
        setIsSelected(selected);
    }, [selected]);

    return (
        <div>
            <div className={style.imagessAll}>
                <div className={style.container}>
                    <img
                        alt={photo.title}
                        {...photo}
                        onClick={handleOnClick}
                        className={style.image}
                        style={{
                            width:'100%',
                        }}
                    />
                    <div className={style.middle}>
                        <div className={style.icon}><BsPlusCircle/></div>
                    </div>
                </div>
                <span className={style.teg}> {photo.name} </span>
            </div>
        </div>
    );
};

export default SelectedImage;
