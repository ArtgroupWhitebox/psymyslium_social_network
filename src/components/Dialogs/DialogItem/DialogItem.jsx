import classes from './DialogItem.module.css'
import StartDialog from '../StartDialog'
import UserPhoto from '../../commons/userPhotoAndName/UserPhoto'
import UserName from '../../commons/userPhotoAndName/UserName'
import ScanByNickname from '../../commons/ScanByNickname/ScanByNickname'

const DialogItem = (props) => {

    console.log('DialogItem' , props)

    return <>
        <h1 className={classes.h1}>Сhats</h1>
        <ScanByNickname pageKey={props.pageKey}/>
        <div className={classes.dialog} >
            { props.dialogsData.map( el => <div key={el.id} className={classes.dialogData}> 
                    <div className={classes.avatar}>
                        <UserPhoto pageKey={props.pageKey} photoSmall={el.photos.small} userId={el.id} currentPage={'1'}/>
                    </div>
                    <div className={classes.userName}>
                        <UserName pageKey={props.pageKey} name={el.userName} userId={el.id} currentPage={'1'}/>
                    </div> 
                    <StartDialog userId={el.id} getUserMessagesThunk={props.getUserMessagesThunk} 
                        getUserThunk={props.getUserThunk} pageKey={props.pageKey} profile={props.profile}
                    />
                </div>
            )}
        </div>
    </>
}

export default DialogItem