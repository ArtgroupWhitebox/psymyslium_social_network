import MyPosts from './MyPosts/MyPosts'
import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
console.log(classes)

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts postsData={props.profilePage.postsData} addPost={props.addPost} 
                updatePostText={props.updatePostText} newPostText={props.profilePage.newPostText} />
        </div>
    );
}

export default Profile;