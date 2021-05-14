import { getAuthMeThunk } from "./authMe_reducer"

const INITIALIZATION_SUCCESS = 'INITIALIZATION_SUCCESS'

let initialState = {

    initialApp: false
}

const appReducer = (state=initialState, action) => {
      
    switch (action.type) {

        case INITIALIZATION_SUCCESS:
                      
            return {
                ...state,
                initialApp: true
            }

        default: return (state)
    }
}
export default appReducer

export const initializationSuccess = () => ({ type: INITIALIZATION_SUCCESS })

export const initializationSuccessThunk = () => {
    return (dispatch) => {

        const promise = dispatch(getAuthMeThunk()) 
        Promise.all([promise]).then( () => {
            dispatch(initializationSuccess()) 
        })
    }
}

