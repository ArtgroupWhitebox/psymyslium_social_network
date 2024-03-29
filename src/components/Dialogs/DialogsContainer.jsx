import { connect } from 'react-redux'
import { compose } from 'redux'
import classes from './Dialogs.module.css'
import React from 'react'
import Preloading from '../commons/Preloading'
import { addMessageThunk, clearMessagesThunk, getUserMessagesThunk, getUsersDialogsThunk,
    startUserInChattinggThunk } from '../../redux/dialogs_reducer'
import withAuthRedirect from '../commons/Redirect/withAuthRedirect'
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './MessageItem/MessageItem'



class DialogsContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersDialogsThunk()
        this.props.getUserMessagesThunk(this.props.startUserId)
        console.log('DialogsContainer' , this.props)
    }

    componentDidUpdate(prevProps, prevState) {         
        (prevProps.startUserId !== this.props.startUserId) &&
        this.props.getUserMessagesThunk(this.props.startUserId)
    }

    onPageChanged = (pageNumber) => {
        this.getUsersDialogsThunk(pageNumber, this.props.pageSize)
    }
    
    render() {
        return <>
            { (this.props.isPreloading && this.props.isPreloadingMessages) 
            ? <Preloading /> 
            : <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    <DialogItem dialogsData={this.props.dialogsData}
                        pageKey={this.props.pageKey} startUserInChattinggThunk={this.props.startUserInChattinggThunk}                 
                        />
                </div>                            
                <div> 
                    <MessageItem messagesData={this.props.messagesData} pageKey={this.props.pageKey}
                        dialogsData={this.props.dialogsData} addMessageThunk={this.props.addMessageThunk}
                        isPreloading={this.props.isPreloading} isPreloadingMessages={this.props.isPreloadingMessages} 
                    />                    
                </div>                       
            </div> 
        } </>
    }
}

const mapStateToProps = (state) => {
    return (
        {
            dialogsData: state.dialogsPage.dialogsData,
            messagesData: state.dialogsPage.messagesData,
            startUserId: state.dialogsPage.startUserId,
            isPreloading : state.dialogsPage.isPreloading,
            isPreloadingMessages: state.dialogsPage.isPreloadingMessages,
            pageKey: state.dialogsPage.pageKey
        }
    )
}

export default compose(
    connect(mapStateToProps, {startUserInChattinggThunk, getUsersDialogsThunk, addMessageThunk, clearMessagesThunk,
         getUserMessagesThunk }),
    withAuthRedirect)(DialogsContainer) 
    
    