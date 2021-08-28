import React from "react"
import Profile from "./Profile"
import { connect } from 'react-redux'
import { activateProfileEditModeThunk, getUserThunk, saveOwnerPhotoThunk, 
    updataProfilePersonalThunk, deactivateProfileEditModeThunk } from '../../redux/profile_reducer'
import { withRouter } from "react-router"
import { compose } from "redux"

class ProfileContainer extends React.Component {
        
    refreshProfiile() {
        const userId = this.props.match.params.userId || this.props.authorizedUserId || this.props.history.push('/login')             

        this.props.getUserThunk(userId)
    }

    componentDidMount() {
        this.refreshProfiile()
        this.props.deactivateProfileEditModeThunk()
    }

    componentDidUpdate(prevProps, prevState) {        
        (prevProps.match.params.userId !== this.props.match.params.userId) && 
        this.refreshProfiile() 
    }

    render() { return <Profile {...this.props} isOwner={!this.props.match.params.userId}/> }
}

const mapStateToProps = (state) => ({ 
    profile: state.profilePage.profile,
    profileDataEdit: state.profilePage.profileDataEdit, 
    pageKey: state.profilePage.pageKey,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, { getUserThunk, saveOwnerPhotoThunk,  
        activateProfileEditModeThunk, updataProfilePersonalThunk, deactivateProfileEditModeThunk } ),
        withRouter)(ProfileContainer) 