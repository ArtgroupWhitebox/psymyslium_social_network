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

    let stateCopy = {...state}
    stateCopy.postsData = [...state.postsData]
    
    switch (action.type) {

        case ADD_POST:
            let newPost = {
                id: 5,
                message: stateCopy.newPostText,
                like: 0
            }            
            stateCopy.postsData.push(newPost)
            stateCopy.newPostText = ''
            return (stateCopy)

        case UPDATE_POST_TEXT:
            stateCopy.newPostText = action.text
            return (stateCopy)

        default: return (stateCopy)
    }
}
export default profileReducer

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updatePostTextActionCreator = (newText) => ({ type: UPDATE_POST_TEXT, text: newText })