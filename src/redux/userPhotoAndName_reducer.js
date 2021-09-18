import { profileAPI } from "../components/axiosAPI/api"

const SET_USER_PHOTO_LARGE = 'SET_USER_PHOTO_LARGE'

let initialState = {
    photoLarge: null,
    photoSmall: null,
    name: null 
}

const userPhotoAndNameReducer = (state=initialState, action) => {
    switch (action.type) {
        
        case SET_USER_PHOTO_LARGE:
            return {
                ...state,
                photoLarge: action.photoLarge
            }
        
        default: return (state)
    }
}

export default userPhotoAndNameReducer

export const setUserPhotoLarge = (photoLarge) => ({ type: SET_USER_PHOTO_LARGE, photoLarge })

export const getUserThunk = (userId) => {
    return (dispatch) => {                              

        profileAPI.getUser(userId).then(data => {            
            dispatch(setUserPhotoLarge(data.photos.large))
        })
    }
}

         
