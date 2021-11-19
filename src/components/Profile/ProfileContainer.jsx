import React from "react"
import { connect } from 'react-redux'
import { activateProfileEditModeThunk, getUserThunk, saveOwnerPhotoThunk, 
    updataProfilePersonalThunk, deactivateProfileEditModeThunk, setIsFollowedThunk } from '../../redux/profile_reducer'
import { withRouter } from "react-router"
import { compose } from "redux"
import { clearMessagesThunk, getUserMessagesThunk, startUserInChattinggThunk } from '../../redux/dialogs_reducer'
import { getIsDisabled} from "../../redux/users_selector"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import { setIsLoginModal } from "../../redux/authMe_reducer"


class ProfileContainer extends React.Component {

    refreshProfiile() {
        const userId = this.props.match.params.userId 
            || this.props.authorizedUserId 
            || this.props.history.push('/login')            
        
        this.props.getUserThunk(userId)
    }

    componentDidMount() {
        this.refreshProfiile()
        this.props.deactivateProfileEditModeThunk()
    }

    componentDidUpdate(prevProps, prevState) {        
        (prevProps.match.params.userId !== this.props.match.params.userId && this.refreshProfiile() )
        || (prevProps.isDisabled !== this.props.isDisabled 
            && this.props.setIsFollowedThunk(this.props.match.params.userId, this.props.fullName) )                    
    }

    render() { return <ProfileInfo isOwner={!this.props.match.params.userId} profile={this.props.profile} pageKey={this.props.pageKey} 
    saveOwnerPhotoThunk={this.props.saveOwnerPhotoThunk} activateProfileEditModeThunk={this.props.activateProfileEditModeThunk} 
    profileDataEdit={this.props.profileDataEdit} updataProfilePersonalThunk={this.props.updataProfilePersonalThunk}
    deactivateProfileEditModeThunk={this.props.deactivateProfileEditModeThunk} getUserThunk={this.props.getUserThunk}
    status={this.props.status} clearMessagesThunk={this.props.clearMessagesThunk}
    getUserMessagesThunk={this.props.getUserMessagesThunk} startUserInChattinggThunk={this.props.startUserInChattinggThunk}
    isFollowedUser={this.props.isFollowedUser} isLoading={this.props.isLoading} isLoadingSubscribe={this.props.isLoadingSubscribe}
    /> 
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    profileDataEdit: state.profilePage.profileDataEdit, 
    pageKey: state.profilePage.pageKey,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth, 
    isDisabled: getIsDisabled(state),
    isFollowedUser: state.profilePage.isFollowed,
    isLoading: state.profilePage.isLoading,
    isLoadingSubscribe: state.profilePage.isLoadingSubscribe,
    fullName: state.profilePage.fullName
})

export default compose(
    connect(mapStateToProps, { getUserThunk, saveOwnerPhotoThunk,  
        activateProfileEditModeThunk, updataProfilePersonalThunk, deactivateProfileEditModeThunk, clearMessagesThunk,
        getUserMessagesThunk, setIsFollowedThunk, setIsLoginModal, startUserInChattinggThunk
    } ),
        withRouter)(ProfileContainer) 