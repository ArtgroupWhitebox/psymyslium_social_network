import { connect } from 'react-redux'
import { getUsersThunk, unFollowThunk, followThunk,  } from '../../redux/users_reducer'
import Users from './Users'
import React from 'react'
import Preloading from '../commons/Preloading'
import withAuthRedirect from '../commons/Redirect/withAuthRedirect'
import { compose } from 'redux'
import { getCurrentPage, getIsDisabled, getIsPreloading, getPageKey, getPageSize, getTotalUsersCount, getUsers } from '../../redux/users_selector'

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
    
    render() {
        return <>
            { this.props.isPreloading ? <Preloading /> : <Users {...this.props} onPageChanged={this.onPageChanged} />}
        </>
    }
}

const mapStateToProps = (state) => ({

    usersData: getUsers(state),
    totalUsersCount: getTotalUsersCount(state),
    pageSize: getPageSize(state),
    currentPage: getCurrentPage(state),
    isPreloading: getIsPreloading(state),
    isDisabled: getIsDisabled(state),
    pageKey: getPageKey(state)
})   

export default compose(
    connect(mapStateToProps, {getUsersThunk, followThunk, unFollowThunk }),
    // withAuthRedirect
    )(UsersContainer)

