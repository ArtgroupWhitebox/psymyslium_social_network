import { connect } from 'react-redux'
import { getUsersThunk, unFollowThunk, followThunk,  } from '../../redux/users_reducer'
import Users from './Users'
import React from 'react'
import Preloading from '../commons/Preloading'

class UsersContainer extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)        
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsersThunk(pageNumber, this.props.pageSize)
    }

    onClickFollow = (id) => {
        this.props.followThunk(id)
    }

    onClickUnFollow = (id) => {
        this.props.unFollowThunk(id)
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
    isDisabled: state.usersPage.isDisabled,
    pageKey: state.usersPage.pageKey
})   

export default connect(mapStateToProps,  
    {getUsersThunk, followThunk, unFollowThunk }) (UsersContainer)

