import { connect } from 'react-redux'
import {addPostActionCreator, updatePostTextActionCreator} from '../../../redux/profile_reducer'
import MyPosts from './MyPosts'


const mapStateToProps = (state) => {
    return (
        {
            postsData: state.profilePage.postsData,
            newPostText: state.profilePage.newPostText 
        }
    )
}

const mapDispatchToProps = (dispatch) => {
    return (
        {
            addPost: () => {
                let action = addPostActionCreator()
                dispatch(action)             
            },
            updatePostText: (newText) => {
                let action = updatePostTextActionCreator(newText)
                dispatch(action)
            }
        }
    )
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts) 

export default MyPostsContainer