import img from "../../images/block2img.png"

let cardState = {
    cards:[

        {id:1, name:'ANTON PETROV', title:'General Maneger', facebook:'https://www.google.am/?gws_rd=ssl', twitter:'https://www.google.am/?gws_rd=ssl', gmail:'https://www.google.am/?gws_rd=ssl', linkdin:'https://www.google.am/?gws_rd=ssl' },
        
        {id:2, name:'KIRIL DONCHEV', title:'Design Master', facebook:'https://www.google.am/?gws_rd=ssl', twitter:'https://www.google.am/?gws_rd=ssl', gmail:'https://www.google.am/?gws_rd=ssl', linkdin:'https://www.google.am/?gws_rd=ssl'},
        
        {id:3, name:'ILIAN BONEV', title:'Developer Ninja', facebook:'https://www.google.am/?gws_rd=ssl', twitter:'https://news.am/arm/', gmail:'https://www.google.am/?gws_rd=ssl', linkdin:'https://www.google.am/?gws_rd=ssl'},
        
        {id:4, name:'DONI STAMOV', title:'SEO guru', facebook:'https://www.google.am/?gws_rd=ssl', twitter:'https://www.google.am/?gws_rd=ssl', gmail:'https://www.google.am/?gws_rd=ssl', linkdin:'https://www.google.am/?gws_rd=ssl'},
    ]
}

const cardsReducer = (state=cardState, action) =>{
    switch (action.type){
        default:
            return(
                state
            )

    }
}

export default cardsReducer;