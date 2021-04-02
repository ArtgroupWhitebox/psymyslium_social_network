import { connect } from 'react-redux'
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unFollowAC,  } from '../../redux/users_reducer'
import Users from './Users'
import * as axios from 'axios'
import React from 'react'

class UsersAPI extends React.Component {

    constructor(props) {
        super(props)        
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        }
        )
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        }
        )
    } 
    
    render() {
       return <Users 
            usersData={this.props.usersData}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            follow={this.props.follow}
            unFollow={this.props.unFollow}            
            onPageChanged={this.onPageChanged}
       />
    }
}

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
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI)

export default UsersContainer

