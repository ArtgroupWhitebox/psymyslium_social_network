
import DialogItem from './DialogItem/DialogItem'
import classes from './Dialogs.module.css'
import MessageItem from './MessageItem/MessageItem'


const Dialogs = (props) => {

    console.log(props)
    
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem dialogsData={props.dialogsData} />
            </div>                            
            <div>
                <MessageItem messagesData={props.messagesData} pageKey={props.pageKey}
                    dialogsData={props.dialogsData} usersData={props.usersData} userId={props.userId} />
            </div>                       
        </div>        
    )    
}

export default Dialogs

    
    
    


