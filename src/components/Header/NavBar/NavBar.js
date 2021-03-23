import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import style from "../header.module.css";
import {useMediaQuery} from "react-responsive/src";
import { CgChevronLeftR } from 'react-icons/cg';
import { CgChevronRightR } from 'react-icons/cg';

const NavBar = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 767px)' })
    const [show, setShow] = useState(false);
    const burgerMenu = () =>{
        setShow(!show)
    }

    return(
        <div>
            {isTabletOrMobile && <div onClick={burgerMenu}>
                {show ? <CgChevronLeftR style={{
                        width:'25px',
                        height:'25px',
                        position:'relative',
                        top:'20px',
                        color:'white',

                    }}/>
                    : <CgChevronRightR style={{
                    width:'25px',
                    height:'25px',
                    position:'relative',
                    top:'20px',
                    color:'white',
                }}
                    />
                }
            </div>}
            {
                (!isTabletOrMobile || !show) && <ul className={style.nav}>

                    <li>
                        <NavLink  to='/Home'   activeStyle={{
                            color: "white",
                            background:'#23C8D6',
                        }}>Home </NavLink>
                    </li>
                    <li>
                        <NavLink to='/Services'   activeStyle={{
                            color: "white",
                            background:'#FF5C65'
                        }}>Services</NavLink>
                    </li>
                    <li >
                        <NavLink to='/About'   activeStyle={{
                            color: "white",
                            background:'#9B7890'
                        }}>About</NavLink>
                    </li>
                    <li >
                        <NavLink  to='/Work'   activeStyle={{
                            color: "white",
                            background:'#8ECA66'
                        }}>Work</NavLink>
                    </li>
                    <li >
                        <NavLink to='/Contacts'   activeStyle={{
                            color: "white",
                            background:'#51C9BF'
                        }}>Contacts</NavLink>
                    </li>
                </ul>
            }

        </div>
    )
}

export default NavBar;