import { connect } from 'react-redux'
import { follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsPreloading, unFollow, } from '../../redux/users_reducer'
import Users from './Users'
import * as axios from 'axios'
import React from 'react'
import Preloading from '../commons/Preloading'

class UsersContainer extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.toggleIsPreloading(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
            {
                withCredentials: true,
                headers: { 'API-KEY': '211c00fa-0c9e-4dad-b581-50fb84d7366b' }
            }).then(response => {
                this.props.toggleIsPreloading(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            }
            )
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsPreloading(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
            {
                withCredentials: true,
                headers: { 'API-KEY': '211c00fa-0c9e-4dad-b581-50fb84d7366b' }
            }).then(response => {
                this.props.toggleIsPreloading(false)
                this.props.setUsers(response.data.items)
            }
            )
    }

    onClickFollow = (id) => {
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {},
            {
                withCredentials: true,
                headers: { 'API-KEY': '211c00fa-0c9e-4dad-b581-50fb84d7366b' }
            }).then(response => {
                response.data.resultCode === 0 && this.props.follow(id)
            }
            )
    }

    onClickUnFollow = (id) => {
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,
            {
                withCredentials: true,
                headers: { 'API-KEY': '211c00fa-0c9e-4dad-b581-50fb84d7366b' }
            }).then(response => {
                response.data.resultCode === 0 && this.props.unFollow(id)
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

