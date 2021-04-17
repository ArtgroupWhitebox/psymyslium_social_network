const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const CURRENT_PAGE = 'CURRENT_PAGE'
const TOGGLE_IS_PRELOADING = 'TOGGLE_IS_PRELOADING'
const TOGGLE_IS_DISABLED = 'TOGGLE_IS_DISABLED'



let initialState = { 
    usersData: [],
    totalUsersCount: 0,
    pageSize: 100,
    currentPage: 1,
    isPreloading: true,
    isDisabled: [],
    pageKey: 'Users'
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map( user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false  }
                    }
                    return user
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                usersData: state.usersData.map( user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true }
                    }
                    return user
                })
            }
    
        case SET_USERS:        
            return {
                ...state,
                usersData: action.users
            }    
            
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.usersCount
            } 
        
        case CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPageNew
        }

        case TOGGLE_IS_PRELOADING:
            return {
                ...state,
                isPreloading: action.preloader
        }

        case TOGGLE_IS_DISABLED:
            return {
                ...state,
                isDisabled: action.disabler ?
                    [...state.isDisabled, action.userId] :
                    state.isDisabled.filter(id => id !=action.userId )
        }
        
        default: return (state)
    }
}
export default usersReducer

export const follow = (userId) => ({ type: FOLLOW, userId })
export const unFollow = (userId) => ({ type: UNFOLLOW, userId })

export const setUsers = (users) => ({ type: SET_USERS, users })
export const setTotalUsersCount = (usersCount) => ({ type: SET_TOTAL_USERS_COUNT, usersCount })
export const setCurrentPage = (pageNumber) => ({ type: CURRENT_PAGE, currentPageNew: pageNumber })
export const toggleIsPreloading = (preloader) => ({ type: TOGGLE_IS_PRELOADING, preloader })
export const toggleIsDisabled = (disabler, userId) => ({ type: TOGGLE_IS_DISABLED, disabler, userId})
