import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import {addPostActionCreator, updatePostTextActionCreator} from '../../../redux/state'
console.log(classes)


const MyPosts = (props) => {

    let postsElements = props.postsData.map(
        el => <Post id={el.id} message={el.message} like={el.like} />
    )

    let newPostElement= React.createRef()

    let addPostButton = () => {
        let action = addPostActionCreator()
        props.dispatch(action)             
    }

    let onChangePostText = () => {
        let newText = newPostElement.current.value
        let action = updatePostTextActionCreator(newText)
        props.dispatch(action)
    }

    return (
        <div className={classes.posts}>
            <h3>Post</h3>
            <div className={classes.newPost}>
                <h4>New post</h4>
                <div>
                    <textarea onChange={onChangePostText} ref={ newPostElement } value={props.newPostText} />
                </div>
                <div>
                    <button onClick={ addPostButton }> Add post </button>
                </div>
                <div>
                 {postsElements}
                </div>
            </div>
            
        </div>
    );
}

export default MyPosts;