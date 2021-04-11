import { connect } from 'react-redux'
import { follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsPreloading, unFollow,  } from '../../redux/users_reducer'
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
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsPreloading(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        }
        )
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsPreloading(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsPreloading(false)
            this.props.setUsers(response.data.items)
        }
        )
    } 
    
    render() {
       return <>
        { this.props.isPreloading ? <Preloading /> : <Users {...this.props} onPageChanged={this.onPageChanged} />}
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

