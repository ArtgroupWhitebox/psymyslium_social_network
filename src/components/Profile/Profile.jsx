import ProfileInfo from './ProfileInfo/ProfileInfo'
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks'
// import ProfileStatus from './ProfileStatus/ProfileStatus'

const Profile = (props) => {
    return <div>
        <ProfileInfo isOwner={props.isOwner} profile={props.profile} pageKey={props.pageKey} 
            saveOwnerPhotoThunk={props.saveOwnerPhotoThunk} activateProfileEditModeThunk={props.activateProfileEditModeThunk} 
            profileDataEdit={props.profileDataEdit} updataProfilePersonalThunk={props.updataProfilePersonalThunk}
            deactivateProfileEditModeThunk={props.deactivateProfileEditModeThunk} /> 
        <ProfileStatusWithHooks status={props.status} updateUserStatusThunk={props.updateUserStatusThunk} />
    </div>
}

export default Profile