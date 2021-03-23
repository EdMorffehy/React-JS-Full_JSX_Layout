import {combineReducers} from "redux";
import blockReducer from "../reducer/blockReducer"
import cardsReducer from "./cardsReducer";
import galleryReducer from "./galleryReducer";

const rootReducer = combineReducers({
        blockStore:blockReducer,
        cardStore:cardsReducer,
        galleryStore:galleryReducer,
})

export default rootReducer