import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'
console.log(classes)

const MyPosts = (props) => {

    let postsElements = props.postsData.map(
        el => <Post id={el.id} message={el.message} like={el.like} />
    );

    let newPostElement= React.createRef(); 

    let addPostButton = () => {
        props.addPost();
              
    }

    let onChangePostText = () => {
        let newText = newPostElement.current.value;
        props.updatePostText(newText);
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