import UserName from '../../commons/userPhotoAndName/UserName'
import UserPhoto from '../../commons/userPhotoAndName/UserPhoto'
import classes from '../Sidebar.module.css'


const MyFriend = (props) => {

    return (
        <div className={classes.item}>
            <div className={classes.userAvatar}>
                <UserPhoto  pageKey={props.pageKey} photoSmall={props.photoSmall} userId={props.id}/>                                                                  
            </div>
            <div className={classes.userName}>
                <UserName pageKey={props.pageKey} name={props.name} userId={props.id}/>
            </div>  
        </div>
    );
}

export default MyFriend