const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'

let initialState = {

    postsData: [
        { id: 1, message: 'Привет, как дела?', like: 7 },
        { id: 2, message: 'Я учу React', like: 12 },
        { id: 3, message: 'Мне нравится React', like: 22 }
    ],

    newPostText: '',
}

const profileReducer = (state=initialState, action) => {
    switch (action.type) {

        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                like: 0
            }
            state.postsData.push(newPost)
            state.newPostText = ''
            return (state)

        case UPDATE_POST_TEXT:
            state.newPostText = action.text
            return (state)

        default: return (state)
    }
}
export default profileReducer

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updatePostTextActionCreator = (newText) => ({ type: UPDATE_POST_TEXT, text: newText })