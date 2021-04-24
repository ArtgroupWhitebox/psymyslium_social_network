import { connect } from 'react-redux'
import { addMessageActionCreator, updateMessageTextActionCreator } from '../../redux/dialogs_reducer'
import withAuthRedirect from '../commons/Redirect/withAuthRedirect'
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

const AuthRedirectContainer = withAuthRedirect(Dialogs)
const dialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectContainer) 

export default dialogsContainer

