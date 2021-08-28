import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
    return <ProfileInfo isOwner={props.isOwner} profile={props.profile} pageKey={props.pageKey} 
        saveOwnerPhotoThunk={props.saveOwnerPhotoThunk} activateProfileEditModeThunk={props.activateProfileEditModeThunk} 
        profileDataEdit={props.profileDataEdit} updataProfilePersonalThunk={props.updataProfilePersonalThunk}
        deactivateProfileEditModeThunk={props.deactivateProfileEditModeThunk} 
        status={props.status} />
}

export default Profile