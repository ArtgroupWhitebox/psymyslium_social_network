import { profileAPI } from "../components/axiosAPI/api"

const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'

let initialState = {

    postsData: [
        { id: 1, message: 'Привет, как дела?', like: 7 },
        { id: 2, message: 'Я учу React', like: 12 },
        { id: 3, message: 'Мне нравится React', like: 22 }
    ],
    newPostText: '',
    profile: null,
    pageKey: 'ProfileInfo',
    status: ' '
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                like: 0
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            }

        case UPDATE_POST_TEXT:
            return {
                ...state,
                newPostText: action.text
            }

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }

        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }

        default: return (state)
    }
}
export default profileReducer

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updatePostTextActionCreator = (newText) => ({ type: UPDATE_POST_TEXT, text: newText })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status })

export const getUserThunk = (userId) => {
    return (dispatch) => {
        profileAPI.getUser(userId).then(data => {
            dispatch(setUserProfile(data))
        })
    }
}

export const getUserStatusThunk = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(data => {
            dispatch(setUserStatus(data))
        })
    }
}

export const updateUserStatusThunk = (status) => {
    return (dispatch) => {
        profileAPI.putStatus(status).then(data => {
            data.resultCode === 0 &&
            dispatch(setUserStatus(status))
        })
    }
}
