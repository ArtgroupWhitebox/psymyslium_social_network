import { followAPI, usersAPI } from "../components/axiosAPI/api"
import { updateObjectInArray } from "../components/commons/updateObjectInArray/updateObjectInArray"


const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const CURRENT_PAGE = 'CURRENT_PAGE'
const TOGGLE_IS_PRELOADING = 'TOGGLE_IS_PRELOADING'
const TOGGLE_IS_DISABLED = 'TOGGLE_IS_DISABLED'
const IS_SCAN = 'IS_SCAN'
const IS_FRIENDS = 'IS_FRIENDS'
const TURN_BY_NAME = 'TURN_BY_NAME'

const initialState = { 
    usersData: [],
    totalUsersCount: 0,
    pageSize: 10,
    currentPage: 1,
    isFriends: null,
    turnByName: null,
    isPreloading: true,
    isDisabled: [],
    isScan: false,
    pageKey: 'Users' 
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                usersData: updateObjectInArray(state.usersData, action.userId, 'id', {followed: false} )
            }

        case UNFOLLOW:
            return {
                ...state,
                usersData: updateObjectInArray(state.usersData, action.userId, 'id', {followed: true} )
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
                    state.isDisabled.filter(id => id !==action.userId )
        }

        case IS_SCAN:
            return {
                ...state,
                isScan: action.scan
        }

        case IS_FRIENDS:
            return {
                ...state,
                isFriends: action.isFriends
        }

        case TURN_BY_NAME:
            return {
                ...state,
                turnByName: action.turnByName
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
export const setIsFriends = (isFriends) => ({ type: IS_FRIENDS, isFriends})
export const setIsScan = (scan) => ({ type: IS_SCAN, scan})
export const setTurnByName = (turnByName) => ({ type: TURN_BY_NAME, turnByName})


export const getUsersThunk = (page, pageSize, turnByName, isFriends) => {
    return (dispatch) => {
        dispatch(toggleIsPreloading(true))
        dispatch(setCurrentPage(page))
        usersAPI.getUsers(page, pageSize, turnByName, isFriends).then(data => {
                dispatch(toggleIsPreloading(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
                dispatch(setTurnByName(turnByName))
            }
        ) 
    }
}

const followUnfollowFlow = (dispatch, id, methodAPI, actionCreator, page, pageSize, turnByName, isFriends) => {
    dispatch(toggleIsDisabled(true, id))
    methodAPI
        .then(data => {
                data.resultCode === 0 && dispatch(actionCreator)
            }
        )
        .then(() => { dispatch(toggleIsDisabled(false, id))})
        .then(() => { dispatch(getUsersThunk(page, pageSize, turnByName, isFriends))})
}

export const followThunk = (page, pageSize, turnByName, isFriends, id) => {
    return (dispatch) => {
        followUnfollowFlow(dispatch, id, followAPI.postUser(id), follow(id), page, pageSize, turnByName, isFriends)
    }
}

export const unFollowThunk = (page, pageSize, turnByName, isFriends, id) => {
    return (dispatch) => {
        followUnfollowFlow(dispatch, id, followAPI.deleteUser(id), unFollow(id), page, pageSize, turnByName, isFriends)
    }
}