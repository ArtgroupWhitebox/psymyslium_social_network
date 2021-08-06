import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'
// import ProfileStatus from './ProfileStatus/ProfileStatus'
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks'

const Profile = (props) => {
    return <div>
        <ProfileInfo isOwner={props.isOwner} profile={props.profile} pageKey={props.pageKey} 
            saveOwnerPhotoThunk={props.saveOwnerPhotoThunk} activateProfileEditModeThunk={props.activateProfileEditModeThunk} 
            profileDataEdit={props.profileDataEdit} updataProfilePersonalThunk={props.updataProfilePersonalThunk}
            deactivateProfileEditModeThunk={props.deactivateProfileEditModeThunk} /> 
        <ProfileStatusWithHooks status={props.status} updateUserStatusThunk={props.updateUserStatusThunk} />
        <MyPostsContainer />        
    </div>
}

export default Profile