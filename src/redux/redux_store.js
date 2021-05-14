import { applyMiddleware, combineReducers, createStore } from "redux"
import authMeReducer from "./authMe_reducer"
import dialogsReducer from "./dialogs_reducer"
import newsReducer from "./news_reducer"
import profileReducer from "./profile_reducer"
import sidebarReducer from "./sidebar_reducer"
import userPhotoReducer from "./userPhoto_reducer"
import usersReducer from "./users_reducer"
import thunkMiddleware from 'redux-thunk'
import appReducer from "./app_reduser"

let reducers = combineReducers({

    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    newsPage: newsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    userPhotos: userPhotoReducer,
    auth: authMeReducer,
    app: appReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware)) 

export default store