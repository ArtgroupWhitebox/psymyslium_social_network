const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'

let initialState = {
    messagesData: [
        { id: 1, message: 'Привет! Кака дела?' },
        { id: 2, message: 'Oк!)' },
        { id: 3, message: 'Отлично!)' },
        { id: 4, message: 'Oк!)' },
        { id: 5, message: 'Отлично!)' }
    ],

    newMessageText: '',

    dialogsData: [
        { id: 1, name: 'Daniil', avatar: <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4kEFai4OtMt1thJnUEvnOndgjMyHCdvpfxg&usqp=CAU' /> },
        { id: 2, name: 'Sveta', avatar: <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyt5zdiEKFSF0GtUOyoJ1RtSEbjt5wWigVzA&usqp=CAUа' /> },
        { id: 3, name: 'Andrey', avatar: <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaf5s8j7pQU_vLr9vRm2feR-rGImu2_KL0Lw&usqp=CAU' /> },
        { id: 4, name: 'Sasha', avatar: <img src='https://avatarko.ru/img/kartinka/31/muzhchina_30867.jpg' /> },
    ]
}

const dialogsReducer = (state=initialState, action) => {

    switch (action.type) {

        case ADD_MESSAGE:
            let newMessage = {
                id: 6,
                message: state.newMessageText,
            }
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
                newMessageText: ''
            }

        case UPDATE_MESSAGE_TEXT: 
            return {
                ...state,
                newMessageText: action.textMessage
            }

        default: return (state)
    }
}
export default dialogsReducer

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })

export const updateMessageTextActionCreator = (newTextMessage) =>
    ({ type: UPDATE_MESSAGE_TEXT, textMessage: newTextMessage })