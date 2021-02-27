import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css';
import MessageItem from './MessageItem/MessageItem';
import React from 'react'
console.log(classes)

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogsData.map(
        el => <DialogItem id={el.id} name={el.name} avatar={el.avatar} />
    )

    let messagesElements = props.dialogsPage.messagesData.map(
        el => <MessageItem id={el.id} message={el.message} />
    )

    let newMessageElement = React.createRef();

    let addMessageButton = () => {
        let action = {
            type: 'ADD-MESSAGE'            
        }
        props.dispatch(action)
    }

    let onChangeMessageText = () => {
        let newTextMessage = newMessageElement.current.value
        let action = {
            type: 'UPDATE-MESSAGE-TEXT',
            textMessage: newTextMessage           
        }
        props.dispatch(action)
    }

    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={classes.messagesItems}>
                <div>
                    <textarea onChange={onChangeMessageText} ref={newMessageElement} value={props.newMessageText} />
                </div>

                <div>
                    <button onClick={addMessageButton}> Add message </button>
                </div>
                <div>
                    {messagesElements}
                </div>
            </div>
        </div>
    );
}

export default Dialogs;

