import { dialogsAPI } from "../components/axiosAPI/api"

const ADD_MESSAGES = 'ADD-MESSAGES'
const SET_USERS_DIALOGS = 'SET_USERS_DIALOGS' 
const CLEAR_MESSAGES = 'CLEAR_MESSAGES'

let initialState = {

    messagesData: [],

    dialogsData: [],
    
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

        default: return (state)
    }
}
export default dialogsReducer

export const addMessages = (messages) => ({ type: ADD_MESSAGES, messages})
export const clearMessages = () => ({ type: CLEAR_MESSAGES, messages: [] })
export const setUsersDialogs = (data) => ({ type: SET_USERS_DIALOGS, data })


export const startDialogThunk = (userId) => (dispatch) => {
    dialogsAPI.putStartDialog(userId).then(data => {                   
        data.resultCode === 0 && dispatch(getUsersDialogsThunk())              
    })        
} 

export const getUsersDialogsThunk = () => {
    return (dispatch) => {
        dialogsAPI.getUsersDialogs().then(data => {
            dispatch(setUsersDialogs(data))
        })
    }
}

export const addMessageThunk = (userId, body) => (dispatch) => {
    dialogsAPI.postAddMessage(userId, body).then(data => {                   
        data.resultCode === 0 && dispatch(getUserMessagesThunk(userId))              
    })        
} 

export const clearMessagesThunk = () => (dispatch) => {
    dispatch(clearMessages())
}

export const getUserMessagesThunk = (userId) => {
    return (dispatch) => {
        dialogsAPI.getUserMessages(userId).then(data => {
            dispatch(addMessages(data.items))
        })
    }
}







