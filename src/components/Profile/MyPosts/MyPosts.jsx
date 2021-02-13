import classes from './MyPosts.module.css'
import Post from './Post/Post'
console.log(classes)

const MyPosts = (props) => {

    let postsElements = props.postsData.map(
        el => <Post id={el.id} message={el.message} like={el.like} />
    )

    return (
        <div className={classes.posts}>
            <h3>Post</h3>
            <div className={classes.newPost}>
                <h4>New post</h4>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;