let state = {

    dialogsPage: {
        messagesData: [
            { id: 1, message: 'Привет! Кака дела?' },
            { id: 2, message: 'Oк!)' },
            { id: 3, message: 'Отлично!)' },
            { id: 4, message: 'Oк!)' },
            { id: 5, message: 'Отлично!)' }
        ],

        newMessageText: 'newTextMessage',

        dialogsData: [
            { id: 1, name: 'Daniil', avatar: <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4kEFai4OtMt1thJnUEvnOndgjMyHCdvpfxg&usqp=CAU' /> },
            { id: 2, name: 'Sveta', avatar: <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyt5zdiEKFSF0GtUOyoJ1RtSEbjt5wWigVzA&usqp=CAUа' /> },
            { id: 3, name: 'Andrey', avatar: <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaf5s8j7pQU_vLr9vRm2feR-rGImu2_KL0Lw&usqp=CAU' /> },
            { id: 4, name: 'Sasha', avatar: <img src='https://avatarko.ru/img/kartinka/31/muzhchina_30867.jpg' /> },
        ]
    },

    profilePage: {

        postsData: [
            { id: 1, message: 'Привет, как дела?', like: 7 },
            { id: 2, message: 'Я учу React', like: 12 },
            { id: 3, message: 'Мне нравится React', like: 22 }
        ],

        newPostText: 'newText',
    },

    newsPage: {
        newsData: [
            { id: 1, message: 'Сегодня я освоила state и props' },
            { id: 2, message: 'В феврале вышел фильм "Северное сияние" ' },
        ]
    },

    sidebar: {
        friendsData: [
            { id: 1, name: 'Max', avatar: <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_iwI0e3vUAZ1KlxOqz87mBTYP_Ik5se65AA&usqp=CAU' /> },
            { id: 2, name: 'Lena', avatar: <img src='https://avatanplus.com/files/photos/original/56f061490ca961539afc055c.jpg' /> },
            { id: 3, name: 'Sasha', avatar: <img src='https://avatarko.ru/img/kartinka/31/muzhchina_30867.jpg' /> },
            { id: 4, name: 'Nastay', avatar: <img src='https://avatarko.ru/img/kartinka/28/fantastika_edinorog_27306.jpg' /> }
        ]
    },
}
export default state;

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        like: 0
    }
    state.profilePage.postsData.push(newPost)
    state.profilePage.newPostText = ''
    rerenderTree2(state)
}

export const updatePostText = (newText) => {
    
    state.profilePage.newPostText = newText;
    rerenderTree2(state)
}

export const addMessage = () => {
    let newMessage = {
        id: 6,
        message: state.dialogsPage.newMessageText,
    }
    state.dialogsPage.messagesData.push(newMessage)
    state.dialogsPage.newMessageText = ''
    rerenderTree2(state)
}

export const updateMessageText = (newTextMessage) => {

    state.dialogsPage.newMessageText = newTextMessage
    rerenderTree2(state)
}


let rerenderTree2 = () => {
    console.log('rerenderTree')
}

export const subscribe = (rerenderTree) => {
    rerenderTree2 = rerenderTree
}


window.state = state



