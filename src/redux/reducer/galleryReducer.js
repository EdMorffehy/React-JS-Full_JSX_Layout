import img1 from "../../images/portImg1.png"
import img2 from "../../images/portImg2.png"
import img3 from "../../images/portImg3.png"
import img4 from "../../images/portImg4.png"
import img5 from "../../images/portImg5.png"
import img6 from "../../images/portImg6.png"
import img7 from "../../images/portImg7.png"
import img8 from "../../images/portImg8.png"


let galleryState = {
    photos:[
        {id:1, name:'AENEAN A ELIT', title:'Photography', src:img1},
        {id:2, name:'ALIQUAM', title:'Logo Design', src:img2},
        {id:3, name:'SUSPENDISSE LIBERO', title:'Web Design', src:img3},
        {id:4, name:'MAECENAS FRINGILLA', title:'Web Design', src:img4},
        {id:5, name:'DONEC VEHICULA', title:'Photography', src:img5},
        {id:6, name:'UT ET SAPIEN', title:'Photography', src:img6},
        {id:7, name:'QUIS MALESUADA', title:'Logo Design', src:img7},
        {id:8, name:'VESTIBULUM ANTE', title:'Web Design', src:img8},
    ],
    groupIMG:[]
}


const galleryReducer = (state=galleryState, action)=>{
    switch(action.type){
        // case ADD_SRC:
        //     return {...state, groupIMG:state.groupIMG.concat[action.payload]}
        default:
            return state

    }
}

export default galleryReducer;