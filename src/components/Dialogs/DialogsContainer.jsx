import { addMessageActionCreator, updateMessageTextActionCreator } from '../../redux/dialogs_reducer'
import StoreContext from '../StoreContext'
import Dialogs from './Dialogs'


const dialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    let addMessage = () => {
                        let action = addMessageActionCreator()
                        store.dispatch(action)
                    }
                    let updateMessageText = (newTextMessage) => {
                        let action = updateMessageTextActionCreator(newTextMessage)
                        store.dispatch(action)
                    }

                    return (
                        <Dialogs dialogsData={store.getState().dialogsPage.dialogsData}
                            messagesData={store.getState().dialogsPage.messagesData}
                            newMessageText={store.getState().dialogsPage.newMessageText}
                            addMessage={addMessage} updateMessageText={updateMessageText}
                        />
                    )
                }
            }
        </StoreContext.Consumer>
    )
}
export default dialogsContainer;

