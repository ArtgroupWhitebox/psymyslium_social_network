import {addPostActionCreator, updatePostTextActionCreator} from '../../../redux/profile_reducer'
import MyPosts from './MyPosts'



const MyPostsContainer = (props) => {

    let addPost = () => {
        let action = addPostActionCreator()
        props.store.dispatch(action)             
    }

    let updatePostText = (newText) => {
        let action = updatePostTextActionCreator(newText)
        props.store.dispatch(action)
    }

    return (
        <MyPosts postsData={props.store.getState().profilePage.postsData}
            newPostText={props.store.getState().profilePage.newPostText} 
            addPost={addPost} updatePostText={updatePostText}
         />
    )
}
export default MyPostsContainer;