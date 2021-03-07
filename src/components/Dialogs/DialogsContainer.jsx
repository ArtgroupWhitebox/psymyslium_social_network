import { addMessageActionCreator, updateMessageTextActionCreator } from '../../redux/dialogs_reducer'
import Dialogs from './Dialogs'
// import Dialogs from './Dialogs';

const dialogsContainer = (props) => {

    let addMessage = () => {
        let action = addMessageActionCreator()
        props.store.dispatch(action)
    }

    let updateMessageText = (newTextMessage) => {
        let action = updateMessageTextActionCreator(newTextMessage)
        props.store.dispatch(action)
    }

    return (
        <Dialogs dialogsData={props.store.getState().dialogsPage.dialogsData}
            messagesData={props.store.getState().dialogsPage.messagesData}
            newMessageText={props.store.getState().dialogsPage.newMessageText}
            addMessage={addMessage} updateMessageText={updateMessageText}
        />
    )
}
export default dialogsContainer;

