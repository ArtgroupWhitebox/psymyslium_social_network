const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'

const dialogsReducer = (state, action) => {
    switch (action.type) {

        case ADD_MESSAGE:
            let newMessage = {
                id: 6,
                message: state.newMessageText,
            }
            state.messagesData.push(newMessage)
            state.newMessageText = ''
            return (state)

        case UPDATE_MESSAGE_TEXT: state.newMessageText = action.textMessage
            return (state)

        default: return (state)
    }
}
export default dialogsReducer

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })

export const updateMessageTextActionCreator = (newTextMessage) =>
    ({ type: UPDATE_MESSAGE_TEXT, textMessage: newTextMessage })