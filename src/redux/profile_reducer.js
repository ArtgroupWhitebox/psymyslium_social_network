import { profileAPI, usersAPI } from "../components/axiosAPI/api"

const ADD_POST = 'ADD-POST'
const DELETE_POST = 'DELETE_POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_OWNER_PHOTO = 'SET_USER_OWNER_PHOTO'
const TOGGLE_PROFILE_EDIT_MODE = 'TOGGLE_PROFILE_EDIT_MODE'
const IS_LOADING = 'IS_LOADING'
const SET_USER_NAME = 'SET_USER_NAME'
const IS_FOLLOWED = 'IS_FOLLOWED'
const IS_LOADING_SUBSCRIBE = 'IS_LOADING_SUBSCRIBE'
const SET_FULL_NAME = 'SET_FULL_NAME'

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
    status: ' ',
    isLoading: true,
    isLoadingSubscribe: true,
    isFollowed: null,
    fullName: null
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
            
        case SET_USER_OWNER_PHOTO:
            return {
                ...state,
                profile: { ...state.profile, photos: action.photos }
            }

        case IS_LOADING:            
            return {            
                ...state,
                isLoading: action.isLoad
        } 

        case IS_LOADING_SUBSCRIBE:            
            return {            
                ...state,
                isLoadingSubscribe: action.isLoadingSubscribe
        } 
        
        case SET_USER_NAME:            
            return {            
                ...state,
                userName: action.userName
        } 

        case IS_FOLLOWED:
            return {
                ...state,
                isFollowed: action.isFollowed
        }

        case SET_FULL_NAME:
            return{
                ...state,
                fullName: action.fullName
            }

        default: return (state)        
    }
}
export default profileReducer

export const addPostActionCreator = () => ({ type: ADD_POST })
export const deletePostActionCreator = (postId) => ({ type: DELETE_POST, postId })
export const updatePostTextActionCreator = (newText) => ({ type: UPDATE_POST_TEXT, text: newText })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setUserOwnerPhoto = (photos) => ({ type: SET_USER_OWNER_PHOTO, photos })
export const toggleProfileEditMode = (toggle) => ({ type: TOGGLE_PROFILE_EDIT_MODE, toggle })
export const isPreLoading = (isLoad) => ({type: IS_LOADING, isLoad})
export const setIsLoadingSubscribe = (isLoadingSubscribe) => ({type: IS_LOADING_SUBSCRIBE, isLoadingSubscribe})
export const setIsFollowed = (isFollowed) => ({type: IS_FOLLOWED, isFollowed})
export const setFullName = (fullName) => ({type: SET_FULL_NAME, fullName})



export const getUserThunk = (userId, currentPage) => {
    return (dispatch) => { 
        dispatch(isPreLoading(true))
        profileAPI.getUser(userId).then(data => {
            dispatch(setUserProfile(data))
            dispatch(setIsFollowedThunk(userId, data.fullName, currentPage))
            dispatch(setFullName(data.fullName))
            dispatch(isPreLoading(false))
        })
    }
}

const findUserById = (id, fullName, page=1) => {    
    return usersAPI.getUsers(page, 10, fullName, null).then(data => {   
        if (page <= Math.ceil(data.totalCount / 10)) {
            const userFound = data.items.find(user => user.id === +id)
            if (userFound !== undefined) {
                console.log('userFound', userFound)
                const isFollowed = userFound.followed
                console.log('isFollowed', isFollowed) 
                return isFollowed 
            } else {
                return findUserById(id, fullName, page + 1) 
            } 
        } else {
            return Promise.resolve(null) 
        }
    })
}

export const setIsFollowedThunk = (id, fullName) => {
    return (dispatch) => {
        dispatch(setIsLoadingSubscribe(true)) 
        findUserById(id, fullName).then(isFollowed => {
            isFollowed !== null && isFollowed !== undefined 
            && dispatch(setIsFollowed(isFollowed))
            && dispatch(setIsLoadingSubscribe(false)) 
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


