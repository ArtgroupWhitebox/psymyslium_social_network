import { dialogsAPI } from "../components/axiosAPI/api"

const ADD_MESSAGES = 'ADD-MESSAGES'
const SET_USERS_DIALOGS = 'SET_USERS_DIALOGS' 
const CLEAR_MESSAGES = 'CLEAR_MESSAGES'
const SET_IS_PRELOADING = 'SET_IS_PRELOADING'
const SET_IS_PRELOADING_MESSAGES = 'SET_IS_PRELOADING_MESSAGES'

let initialState = {

    messagesData: [],
    dialogsData: [],
    isPreloading: true,
    isPreloadingMessages: true,
    pageKey: 'Dialogs'
}

const dialogsReducer = (state=initialState, action) => {

    switch (action.type) {

        case ADD_MESSAGES:
            return {
                ...state,
                messagesData: action.messages
            }  
            
        case SET_USERS_DIALOGS:
            return {
                ...state,
                dialogsData: action.data              
            }  

        case SET_IS_PRELOADING:
            return {
                ...state,
                isPreloading: action.isLoading,              
            }

        case SET_IS_PRELOADING_MESSAGES:
            return {
                ...state,
                isPreloadingMessages: action.isLoadingMess,              
            } 

        default: return (state)
    }
}
export default dialogsReducer

export const addMessages = (messages) => ({ type: ADD_MESSAGES, messages})
export const clearMessages = () => ({ type: CLEAR_MESSAGES, messages: [] })
export const setUsersDialogs = (data) => ({ type: SET_USERS_DIALOGS, data })
export const setIsPreloading = (isLoading) => ({ type: SET_IS_PRELOADING, isLoading })
export const setIsPreloadingMessages = (isLoadingMess) => ({ type: SET_IS_PRELOADING_MESSAGES, isLoadingMess })


export const startDialogThunk = (userId) => (dispatch) => {
    dialogsAPI.putStartDialog(userId).then(data => {                   
        data.resultCode === 0 && dispatch(getUsersDialogsThunk())              
    })        
} 

export const getUsersDialogsThunk = () => {
    return (dispatch) => {
        dispatch(setIsPreloading(true))
        dialogsAPI.getUsersDialogs().then(data => {
            dispatch(setUsersDialogs(data))
            dispatch(setIsPreloading(false))
        })
    }
}

export const addMessageThunk = (userId, body) => (dispatch) => {
    dispatch(setIsPreloadingMessages(true))
    dialogsAPI.postAddMessage(userId, body).then(data => {                   
        data.resultCode === 0 && dispatch(getUserMessagesThunk(userId))
        dispatch(setIsPreloadingMessages(false))              
    })        
} 

export const clearMessagesThunk = () => (dispatch) => {
    dispatch(clearMessages())
}

export const getUserMessagesThunk = (userId) => {
    return (dispatch) => {
        dispatch(setIsPreloadingMessages(true))
        dialogsAPI.getUserMessages(userId, 1, 10).then(data => {
            dispatch(addMessages(data.items))
            dispatch(setIsPreloadingMessages(false))
        })
    }
}







