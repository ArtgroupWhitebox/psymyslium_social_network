import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'
// import ProfileStatus from './ProfileStatus/ProfileStatus'
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks'

const Profile = (props) => {
    return <div>
        <ProfileInfo profile={props.profile} pageKey={props.pageKey}/> 
        <ProfileStatusWithHooks status={props.status} updateUserStatusThunk={props.updateUserStatusThunk} />
        <MyPostsContainer />        
    </div>
}

export default Profile