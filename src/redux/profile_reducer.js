const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'

const profileReducer = (state, action) => {
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