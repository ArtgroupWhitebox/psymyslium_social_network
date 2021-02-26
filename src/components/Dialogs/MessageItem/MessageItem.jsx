import classes from './MessageItem.module.css'
console.log(classes)

const MessageItem = (props) => {

    return (
        <div>
            <div className={classes.message}>
                {props.message}
            </div>            
        </div>
    );
}

export default MessageItem;

