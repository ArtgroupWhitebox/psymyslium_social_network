import { profileAPI } from "../components/axiosAPI/api"

const ADD_POST = 'ADD-POST'
const DELETE_POST = 'DELETE_POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'
const SET_USER_OWNER_PHOTO = 'SET_USER_OWNER_PHOTO'
const TOGGLE_PROFILE_EDIT_MODE = 'TOGGLE_PROFILE_EDIT_MODE'

let initialState = {

    postsData: [
        { id: 1, message: 'Привет, как дела?', like: 7 },
        { id: 2, message: 'Я учу React', like: 12 },
        { id: 3, message: 'Мне нравится React', like: 22 }
    ],
    newPostText: '',
    profile: null,
    profileDataEdit: false,
    pageKey: 'ProfileInfo',
    status: ' '
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST:
            let newPost = {
                id: 4,
                message: state.newPostText,
                like: 0
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            }

        case DELETE_POST:
            return {
                ...state,
                postsData: [...state.postsData.filter(p => p.id !== action.postId)]
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

        case TOGGLE_PROFILE_EDIT_MODE:            
            return {            
                ...state,
                profileDataEdit: action.toggle
        }

        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }  
            
        case SET_USER_OWNER_PHOTO:
            return {
                ...state,
                profile: { ...state.profile, photos: action.photos }
            }

        default: return (state)        
    }
}
export default profileReducer

export const addPostActionCreator = () => ({ type: ADD_POST })
export const deletePostActionCreator = (postId) => ({ type: DELETE_POST, postId })
export const updatePostTextActionCreator = (newText) => ({ type: UPDATE_POST_TEXT, text: newText })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status })
export const setUserOwnerPhoto = (photos) => ({ type: SET_USER_OWNER_PHOTO, photos })
export const toggleProfileEditMode = (toggle) => ({ type: TOGGLE_PROFILE_EDIT_MODE, toggle })

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

export const saveOwnerPhotoThunk = (file) => {
    return (dispatch) => { 
        profileAPI.putUserPhoto(file).then(data => {
            data.resultCode === 0 &&
            dispatch(setUserOwnerPhoto(data.data.photos))
        })
    }
}

export const activateProfileEditModeThunk = () => {
    return (dispatch) => {
        dispatch(toggleProfileEditMode(true))
    }
}

export const deactivateProfileEditModeThunk = () => {
    return (dispatch) => {        
        dispatch(toggleProfileEditMode(false))
    }
}

export const updataProfilePersonalThunk = (userId, fullName, aboutMe, lookingForAJob, lookingForAJobDescription) => {
    return (dispatch) => {
        profileAPI.putProfilePersonalData(fullName, aboutMe, lookingForAJob, lookingForAJobDescription).then(data => {                   
            data.resultCode === 0 && dispatch(getUserThunk(userId))              
        })        
    }     
}


