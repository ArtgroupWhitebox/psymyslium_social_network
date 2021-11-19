import { authAPI } from "../components/axiosAPI/api"

const SET_AUTH_ME_DATA = 'SET_AUTH_ME_DATA'
const IS_LOGIN_MODAL = 'LOGIN_MODAL'

let initialState = {

    id: null,
    email: null,
    login: null,
    isAuth: false,
    isLoginModal: true
}

const authMeReducer = (state=initialState, action) => {
      
    switch (action.type) {

        case SET_AUTH_ME_DATA:
                      
            return {
                ...state,
                ...action.payload
            }

        case IS_LOGIN_MODAL:
            return {
                ...state,
                isLoginModal: action.isModal 
            }

        default: return (state)
    }
}
export default authMeReducer

export const setAuthMeData = (id, email, login, isAuth) => ({ type: SET_AUTH_ME_DATA, payload: {id, email, login, isAuth} })
export const setIsLoginModal = (isModal) => ({ type: IS_LOGIN_MODAL, isModal })

export const getAuthMeThunk = () => {
    return (dispatch) => {

        return authAPI.getAuthMe().then(data => {
            const {id, email, login} = data.data        
            data.resultCode === 0 && dispatch(setAuthMeData(id, email, login, true))
        })
    }
}

export const loginThunk = (email, password) => {
    return (dispatch) => {

        authAPI.login(email, password).then(data => {                   
            data.resultCode === 0 && dispatch(getAuthMeThunk())
        })
    }
}

export const logoutThunk = () => {
    return (dispatch) => {

        authAPI.logout().then(data => {                   
            data.resultCode === 0 && dispatch(setAuthMeData(null, null, null, false))
        })
    }
}