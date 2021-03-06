import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs_reducer";
import newsReducer from "./news_reducer";
import profileReducer from "./profile_reducer";
import sidebarReducer from "./sidebar_reducer";

let reducers = combineReducers({

    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    newsPage: newsReducer,
    sidebar: sidebarReducer

})

let store = createStore(reducers) 

export default store