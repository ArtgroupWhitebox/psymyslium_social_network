import classes from './MessageItem.module.css'
console.log(classes)

const MessageItem = (props) => {

    return (
        <div className={classes.message}>
            { props.message }
        </div>
    );
}

export default MessageItem;