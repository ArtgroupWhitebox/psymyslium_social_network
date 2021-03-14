import { connect } from 'react-redux'
import { addMessageActionCreator, updateMessageTextActionCreator } from '../../redux/dialogs_reducer'
import Dialogs from './Dialogs'

const mapStateToProps = (state) => {
    return (
        {
            dialogsData: state.dialogsPage.dialogsData,
            messagesData: state.dialogsPage.messagesData,
            newMessageText: state.dialogsPage.newMessageText
        }
    )
}

const mapDispatchToProps = (dispatch) => {
    return (
        {
            addMessage: () => {
                let action = addMessageActionCreator()
                dispatch(action)
            },
            updateMessageText: (newTextMessage) => {
                let action = updateMessageTextActionCreator(newTextMessage)
                dispatch(action)
            }  
        }
    )
}
const dialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs) 

export default dialogsContainer

