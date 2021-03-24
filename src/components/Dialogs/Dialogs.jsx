import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css';
import MessageItem from './MessageItem/MessageItem';
console.log(classes)

const Dialogs = (props) => {

    let dialogsElements = props.dialogsData.map(
        el => <DialogItem id={el.id} key={el.id} name={el.name} avatar={el.avatar} />
    )

    let messagesElements = props.messagesData.map(
        el => <MessageItem id={el.id} key={el.id} message={el.message} />
    )

    let addMessageButton = () => {
        props.addMessage()
    }

    let onChangeMessageText = (event) => {
        let newTextMessage = event.target.value
        props.updateMessageText(newTextMessage)
    }

    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={classes.messagesItems}>
                <div>
                    <textarea onChange={onChangeMessageText} value={props.newMessageText} />
                </div>

                <div>
                    <button onClick={addMessageButton}> Add message </button>
                </div>
                <div>
                    {messagesElements}
                </div>
            </div>
        </div>
    )
}
export default Dialogs;

