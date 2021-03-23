import React from 'react';
import style from "../contacts.module.css";

const Form = () =>{

    const inp1=(e)=>{
        console.log(e.target.value)
    }
    const inp2=(e)=>{
        console.log(e.target.value)
    }
    const text =(e) =>{
       console.log(e.target.value)
    }  
    const sbm =()=>{
        console.log(1);
    }

    return(
        <div className={style.mainForm}>
            <div className={style.SendQuiry}>Ask a ques tion</div>
            <form onSubmit={sbm}>
                <input type="text" placeholder='Name' onChange={inp1}/>
                <input type="email" placeholder='Email' className={style.inp} onChange={inp2}/>
                <div>
                <textarea placeholder='Your question' onChange={text}>

                </textarea>
                </div>
                <div className={style.btn}>
                <button>SEND</button>
                </div>
            </form>
        </div>
    )
}

export default Form;