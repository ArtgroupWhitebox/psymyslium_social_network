import {addPostActionCreator, updatePostTextActionCreator} from '../../../redux/profile_reducer'
import StoreContext from '../../StoreContext'
import MyPosts from './MyPosts'


const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    
                    let addPost = () => {
                        let action = addPostActionCreator()
                        store.dispatch(action)             
                    }
                    let updatePostText = (newText) => {
                        let action = updatePostTextActionCreator(newText)
                        store.dispatch(action)
                    }

                    return (
                        <MyPosts postsData={store.getState().profilePage.postsData}
                            newPostText={store.getState().profilePage.newPostText} 
                            addPost={addPost} updatePostText={updatePostText}
                        />
                    )
                }
            }
        </StoreContext.Consumer>
        
    )
}
export default MyPostsContainer;