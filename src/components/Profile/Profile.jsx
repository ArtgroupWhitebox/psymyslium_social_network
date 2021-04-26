import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import ProfileStatus from './ProfileStatus/ProfileStatus'

const Profile = (props) => {
    return <div>
        <ProfileInfo profile={props.profile} pageKey={props.pageKey}/>
        <ProfileStatus status={'lalala'} />
        <MyPostsContainer />
        
    </div>
}

export default Profile