import { profileAPI } from "../components/axiosAPI/api"

const SET_USER_PHOTO = 'SET_USER_PHOTO'

let initialState = {
    photoLarge: null
}

const userPhotoReducer = (state=initialState, action) => {
    switch (action.type) {
        
        case SET_USER_PHOTO:
            return {
                ...state,
                photoLarge: action.photoUrl
            }
        
        default: return (state)
    }
}

export default userPhotoReducer

export const setUserPhoto = (photoUrl) => ({ type: SET_USER_PHOTO, photoUrl })



export const getUserThunk = (userId) => {
    return (dispatch) => {                              

        profileAPI.getUser(userId).then(data => {            
            dispatch(setUserPhoto(data.photos.large))
        })
    }
}

         
