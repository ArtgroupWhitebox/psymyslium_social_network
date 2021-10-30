import SubscribeContainer from '../../commons/Subscribe/SubscribeContainer';
import UserName from '../../commons/userPhotoAndName/UserName'
import UserPhoto from '../../commons/userPhotoAndName/UserPhoto'
import classes from '../Sidebar.module.css'


const MyFriend = (props) => {

    return (
        <div className={classes.item}>
            <div className={classes.userAvatar}>
                <UserPhoto  pageKey={props.pageKey} photoSmall={props.photoSmall} userId={props.id} currentPage={props.currentPage}/>                                                                  
            </div>
            <div className={classes.userName}>
                <UserName pageKey={props.pageKey} name={props.name} userId={props.id} currentPage={props.currentPage}/>
            </div> 
            <SubscribeContainer userId={props.id} isFollowed={props.isFollowed} currentPage={props.currentPage} /> 
        </div>
    );
}

export default MyFriend