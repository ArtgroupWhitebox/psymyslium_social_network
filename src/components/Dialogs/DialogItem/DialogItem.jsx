import classes from './DialogItem.module.css'
import StartDialog from '../StartDialog'
import UserPhoto from '../../commons/userPhotoAndName/UserPhoto'
import UserName from '../../commons/userPhotoAndName/UserName'


const DialogItem = (props) => {

    console.log('DialogItem' , props)

    return <>
        <div className={classes.dialog} >
            { props.dialogsData.map( el => <div key={el.id} className={classes.dialogData}> 
                    <div className={classes.avatar}>
                        <UserPhoto pageKey={props.pageKey} photoSmall={el.photos.small} userId={el.id}/>
                    </div>
                    <div className={classes.userName}>
                        <UserName pageKey={props.pageKey} name={el.userName} userId={el.id}/>
                    </div> 
                    <StartDialog userId={el.id} clearMessagesThunk={props.clearMessagesThunk}
                    getUserMessagesThunk={props.getUserMessagesThunk}/>   
                </div>
            )}
        </div>
    </>
}

export default DialogItem