import React from "react"
import Profile from "./Profile"
import { connect } from 'react-redux'
import { getUserStatusThunk, getUserThunk, saveOwnerPhotoThunk, updateUserStatusThunk } from '../../redux/profile_reducer'
import { withRouter } from "react-router"
// import withAuthRedirect from "../commons/Redirect/withAuthRedirect"
import { compose } from "redux"

class ProfileContainer extends React.Component {
        
    refreshProfiile() {
        const userId = this.props.match.params.userId || this.props.authorizedUserId || this.props.history.push('/login')             

        this.props.getUserThunk(userId)
        this.props.getUserStatusThunk(userId)
    }

    componentDidMount() {
        this.refreshProfiile()
    }

    componentDidUpdate(prevProps, prevState) {        
        (prevProps.match.params.userId !== this.props.match.params.userId) && 
        this.refreshProfiile() 
    }

    render() { return <Profile {...this.props} isOwner={!this.props.match.params.userId}/> }
}

const mapStateToProps = (state) => ({ 
    profile: state.profilePage.profile, 
    pageKey: state.profilePage.pageKey,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, { getUserThunk, getUserStatusThunk, updateUserStatusThunk, saveOwnerPhotoThunk }), // withAuthRedirect,
        withRouter)(ProfileContainer) 