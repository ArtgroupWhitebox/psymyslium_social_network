import { dialogsAPI, profileAPI } from "../components/axiosAPI/api"

const ADD_MESSAGE = 'ADD-MESSAGE'
const SET_USERS_DIALOGS = 'SET_USERS_DIALOGS' 

let initialState = {

    // messagesData: [
    //     { messageId: 1, userId: 444, body: 'Привет! Кака дела?' },
    //     { messageId: 2, userId: 444, body: 'Oк!)' },
    //     { messageId: 3, userId: 555, body: 'Отлично!)' }        
    // ],

    dialogsData: [],
    
    pageKey: 'Dialogs'
}

const dialogsReducer = (state=initialState, action) => {

    switch (action.type) {

        case ADD_MESSAGE:
            const newMessage = {
                messageId: action.messageId,
                userId: action.userId,
                body: action.body,
            }
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage]
            }  
            
        case SET_USERS_DIALOGS:
            // const newDialog = {
            //     userId: action.dialogs.id,
            //     name: action.dialogs.userName,
            //     avatar: action.dialogs.photos.small
            // }
            return {
                ...state,
                dialogsData: action.data              
            }  

        default: return (state)
    }
}
export default dialogsReducer

export const addMessage = (messageId,  userId, body) => ({ type: ADD_MESSAGE, messageId,  userId, body})
export const setUsersDialogs = (data) => ({ type: SET_USERS_DIALOGS, data })


export const startDialogThunk = (userId) => (dispatch) => {
    dialogsAPI.putStartDialog(userId).then(data => {                   
        data.resultCode === 0 && dispatch(getUsersDialogsThunk(userId))              
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
    dialogsAPI.postSendMessageToYourFriend(userId, body).then(data => {                   
        data.resultCode === 0 && dispatch(getUserMessageThunk(userId))              
    })        
} 

export const getUserMessageThunk = (userId) => {
    return (dispatch) => {
        const date = new Date()
        dialogsAPI.getUserMessage(userId, date).then(data => {
            dispatch(addMessage(data.messageId,  data.userId, data.body))
        })
    }
}







