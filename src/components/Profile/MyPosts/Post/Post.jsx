import classes from './Post.module.css'
console.log(classes)

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4kEFai4OtMt1thJnUEvnOndgjMyHCdvpfxg&usqp=CAU' />
                {props.message}
            <div className={classes.button}>
                <button>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx917qMUK24NeE_asg7QFG9xKq9PZOTjlZXA&usqp=CAU" />
                </button>
                {props.like}
            </div>

        </div>
    );
}

export default Post;