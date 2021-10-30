import { connect } from 'react-redux'
import { getUsersThunk, unFollowThunk, followThunk, setIsScan, setTurnByName, setIsFriends } from '../../redux/users_reducer'
import Users from './Users'
import React from 'react'
import Preloading from '../commons/Preloading'
import { compose } from 'redux'
import { getCurrentPage, getIsDisabled, getIsFriends, getIsPreloading, getIsScan, getPageKey, getPageSize, getTotalUsersCount, getTurnByName, getUsers } from '../../redux/users_selector'
import { addMessageThunk, clearMessagesThunk, getUserMessagesThunk, getUsersDialogsThunk } from '../../redux/dialogs_reducer'
import ScanUsersByName from '../commons/ScanByNickname/ScanUsersByName'
import classes from './Users.module.css'
import { getUserThunk } from '../../redux/profile_reducer'



class UsersContainer extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize, this.props.turnByName, this.props.isFriends)        
    }
    
    onPageChanged = (pageNumber) => {
        this.props.getUsersThunk(pageNumber, this.props.pageSize, this.props.turnByName, this.props.isFriends)     
    }
      
    render() {       
        
        return <> 
            <h1 className={classes.h1}>Users</h1> 
            <div>     
                <ScanUsersByName isScan={this.props.isScan} setIsScan={this.props.setIsScan} getUsersThunk={this.props.getUsersThunk} 
                    currentPage={this.props.currentPage} pageSize={this.props.pageSize} 
                    turnByName={this.props.turnByName} isFriends={this.props.isFriends} 
                    setIsFriends={this.props.setIsFriends} setTurnByName={this.props.setTurnByName} 
                     /> 
            </div>        
            { this.props.isPreloading ? <Preloading /> : <Users {...this.props} 
                onPageChanged={this.onPageChanged}                 
            />}
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
    pageKey: getPageKey(state),
    isScan: getIsScan(state),
    isFriends: getIsFriends(state),    
    turnByName: getTurnByName(state)
})   

export default compose(
    connect(mapStateToProps, {getUsersThunk, followThunk, unFollowThunk, getUsersDialogsThunk, addMessageThunk,
        clearMessagesThunk, getUserMessagesThunk, setIsScan, setIsFriends, setTurnByName, getUserThunk })
    )(UsersContainer)
    
    