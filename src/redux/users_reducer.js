const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const CURRENT_PAGE = 'CURRENT_PAGE'


let initialState = { 
    usersData: [],
    totalUsersCount: 0,
    pageSize: 100,
    currentPage: 1
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
        
        default: return (state)
    }
}
export default usersReducer

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unFollowAC = (userId) => ({ type: UNFOLLOW, userId })

export const setUsersAC = (users) => ({ type: SET_USERS, users })
export const setTotalUsersCountAC = (usersCount) => ({ type: SET_TOTAL_USERS_COUNT, usersCount })
export const setCurrentPageAC = (pageNumber) => ({ type: CURRENT_PAGE, currentPageNew: pageNumber })
