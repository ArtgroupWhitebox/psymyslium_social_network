import { connect } from 'react-redux'
import { followAC, setUsersAC, unFollowAC,  } from '../../redux/users_reducer'
import Users from './Users'

const mapStateToProps = (state) => {
    return (
        {
            usersData: state.usersPage.usersData
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
            }  
        }
    )
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users) 

export default UsersContainer

