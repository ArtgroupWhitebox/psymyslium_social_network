import { connect } from 'react-redux'
import { compose } from 'redux'
import classes from './Dialogs.module.css'
import React from 'react'
import Preloading from '../commons/Preloading'
import { addMessageThunk, clearMessagesThunk, getUserMessagesThunk, getUsersDialogsThunk,
    startUserInChattinggThunk } from '../../redux/dialogs_reducer'
import withAuthRedirect from '../commons/Redirect/withAuthRedirect'
import { getUserThunk } from '../../redux/profile_reducer'
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './MessageItem/MessageItem'



class MessagesContainer extends React.Component {

    componentDidMount() {
        this.props.getUserMessagesThunk(this.props.startUserId)
        this.props.getUserThunk(this.props.startUserId)
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
                    <DialogItem dialogsData={this.props.dialogsData} clearMessagesThunk={this.props.clearMessagesThunk}
                        getUserMessagesThunk={this.props.getUserMessagesThunk} 
                        startUserId={ +this.props.startUserId} 
                        pageKey={this.props.pageKey} getUserThunk={this.props.getUserThunk} 
                        isPreloadingMessages={this.props.isPreloadingMessages} startUserInChattinggThunk={this.props.startUserInChattinggThunk}                 
                        />
                </div>                            
                <div>
                    <MessageItem messagesData={this.props.messagesData} pageKey={this.props.pageKey}
                        dialogsData={this.props.dialogsData} usersData={this.props.usersData} 
                        startUserId={ +this.props.startUserId} onPageChanged={this.onPageChanged} 
                        addMessageThunk={this.props.addMessageThunk} getUserThunk={this.props.getUserThunk}
                        profile={this.props.profile}
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
            pageKey: state.dialogsPage.pageKey,
            usersData: state.usersPage.usersData,
            profile: state.profilePage.profile
        }
    )
}

export default compose(
    connect(mapStateToProps, {startUserInChattinggThunk, getUsersDialogsThunk, addMessageThunk, clearMessagesThunk,
         getUserMessagesThunk, getUserThunk }),
    withAuthRedirect)(MessagesContainer) 
    
    