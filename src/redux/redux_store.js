import { combineReducers, createStore } from "redux";
import authMeReducer from "./authMe_reducer";
import dialogsReducer from "./dialogs_reducer";
import newsReducer from "./news_reducer";
import profileReducer from "./profile_reducer";
import sidebarReducer from "./sidebar_reducer";
import userPhotoReducer from "./userPhoto_reducer";
import usersReducer from "./users_reducer";

let reducers = combineReducers({

    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    newsPage: newsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    userPhotos: userPhotoReducer,
    auth: authMeReducer
})

let store = createStore(reducers) 

export default store