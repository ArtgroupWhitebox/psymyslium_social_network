import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css';
import MessageItem from './MessageItem/MessageItem';
console.log(classes)

const Dialogs = (props) => {
    
    let dialogsElements = props.dialogsPage.dialogsData.map(
        el => <DialogItem id={el.id} name={el.name} avatar={el.avatar} />
    )

    let messagesElements = props.dialogsPage.messagesData.map(
        el => <MessageItem id={el.id} message={el.message} /> 
    )

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messagesItems}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;