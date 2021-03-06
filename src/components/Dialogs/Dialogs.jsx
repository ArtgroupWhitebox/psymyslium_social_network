import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css';
import MessageItem from './MessageItem/MessageItem';
import { addMessageActionCreator, updateMessageTextActionCreator } from '../../redux/dialogs_reducer'
console.log(classes)

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogsData.map(
        el => <DialogItem id={el.id} name={el.name} avatar={el.avatar} />
    )

    let messagesElements = props.dialogsPage.messagesData.map(
        el => <MessageItem id={el.id} message={el.message} />
    )

    let addMessageButton = () => {
        let action = addMessageActionCreator()
        props.dispatch(action)
    }

    let onChangeMessageText = (event) => {
        let newTextMessage = event.target.value
        let action = updateMessageTextActionCreator(newTextMessage)
        props.dispatch(action)
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

