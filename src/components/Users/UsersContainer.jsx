import { connect } from 'react-redux'
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unFollowAC,  } from '../../redux/users_reducer'
import Users from './Users'

const mapStateToProps = (state) => {
    return (
        {
            usersData: state.usersPage.usersData,
            totalUsersCount: state.usersPage.totalUsersCount,
            pageSize: state.usersPage.pageSize,
            currentPage: state.usersPage.currentPage
        }
    )
}

const mapDispatchToProps = (dispatch) => {
    return (
        {
            follow: (userId) => {
                let action = followAC(userId)
                dispatch(action)
            },
            unFollow: (userId) => {
                let action = unFollowAC(userId)
                dispatch(action)
            },
            setUsers: (users) => {
                let action = setUsersAC(users)
                dispatch(action)
            },
            setTotalUsersCount: (usersCount) => {
                dispatch(setTotalUsersCountAC(usersCount)) 
            }, 
            setCurrentPage: (pageNumber) => {
                dispatch(setCurrentPageAC(pageNumber))
            }
        }
    )
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users) 

export default UsersContainer

