
import DialogItem from './DialogItem/DialogItem'
import classes from './Dialogs.module.css'
import MessageItem from './MessageItem/MessageItem'


const Dialogs = (props) => {

    console.log('Dialogs' , props)
    
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem dialogsData={props.dialogsData} clearMessagesThunk={props.clearMessagesThunk}
                    getUserMessagesThunk={props.getUserMessagesThunk} userId={props.userId} pageKey={props.pageKey}
                    getUserThunk={props.getUserThunk} isPreloadingMessages={props.isPreloadingMessages} 
                    />
            </div>                            
            <div>
                <MessageItem messagesData={props.messagesData} pageKey={props.pageKey}
                    dialogsData={props.dialogsData} usersData={props.usersData} userId={props.userId} 
                    addMessageThunk={props.addMessageThunk} getUserThunk={props.getUserThunk} profile={props.profile}
                    isOwner={props.isOwner} isPreloading={props.isPreloading} isPreloadingMessages={props.isPreloadingMessages} 
                />                    
            </div>                       
        </div>        
    )    
}

export default Dialogs

    
    
    


