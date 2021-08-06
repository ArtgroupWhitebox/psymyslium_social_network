import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import authMeReducer from "./authMe_reducer"
import dialogsReducer from "./dialogs_reducer"
import newsReducer from "./news_reducer"
import profileReducer from "./profile_reducer"
import sidebarReducer from "./sidebar_reducer"
import userPhotoReducer from "./userPhoto_reducer"
import usersReducer from "./users_reducer"
import thunkMiddleware from 'redux-thunk'
import appReducer from "./app_reduser"

const composeWithDevTools =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;
    
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

let store = createStore(
    reducers, 
    composeWithDevTools(applyMiddleware(thunkMiddleware))
) 

export default store