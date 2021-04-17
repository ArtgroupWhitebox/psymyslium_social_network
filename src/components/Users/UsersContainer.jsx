import { connect } from 'react-redux'
import { follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsPreloading, unFollow, } from '../../redux/users_reducer'
import Users from './Users'
import React from 'react'
import Preloading from '../commons/Preloading'
import {  followAPI, usersAPI } from '../axiosAPI/api'


class UsersContainer extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.toggleIsPreloading(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.toggleIsPreloading(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            }
            ) 
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsPreloading(true)
        this.props.setCurrentPage(pageNumber)
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
                this.props.toggleIsPreloading(false)
                this.props.setUsers(data.items)
            }
            )
    }

    onClickFollow = (id) => {
        followAPI.postUser(id).then(data => {
                data.resultCode === 0 && this.props.follow(id)
            }
        )
    }

    onClickUnFollow = (id) => {
        followAPI.deleteUser(id).then(data => {
                data.resultCode === 0 && this.props.unFollow(id)
            }
        )
    }

    render() {
        return <>
            { this.props.isPreloading ? <Preloading /> : <Users {...this.props} onPageChanged={this.onPageChanged}
                onClickFollow={this.onClickFollow} onClickUnFollow={this.onClickUnFollow} />}
        </>
    }
}

const mapStateToProps = (state) => ({

    usersData: state.usersPage.usersData,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    isPreloading: state.usersPage.isPreloading,
    pageKey: state.usersPage.pageKey
})

const mapDispatchToProps = {
    follow, unFollow, setUsers, setTotalUsersCount, setCurrentPage, toggleIsPreloading
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)

