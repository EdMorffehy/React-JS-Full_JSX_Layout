import img1 from "../../images/block1img1.png"
import img2 from "../../images/block1img2.png"
import img3 from "../../images/block1img3.png"
import img4 from "../../images/block1img4.png"

let blockState = {
        block:[
            {id:1, title:'RESEARCHING', text:'Praesent interdum blandit quam. Asunt in anim  uis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore.', img:img1},
            {id:2, title:'DESIGN', text:'Praesent interdum blandit quam. Asunt in anim  uis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore.', img:img2},
            {id:3, title:'DEVELOPMENT', text:'Praesent interdum blandit quam. Asunt in anim  uis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore.', img:img3},
            {id:4, title:'LAUNCH', text:'Praesent interdum blandit quam. Asunt in anim  uis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore.', img:img4}
        ]
}

const blockReducer =(state=blockState, action)=>{
    switch (action.type){
        default:
            return(
                state
            )
    }
}

export default  blockReducer;