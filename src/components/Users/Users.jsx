import classes from './Users.module.css'
import UserPhoto from '../commons/userPhotoAndName/UserPhoto'
import UserName from '../commons/userPhotoAndName/UserName'
import Paginator from '../commons/Paginator/Paginator'
import StartDialog from '../Dialogs/StartDialog'
import SubscribeContainer from '../commons/Subscribe/SubscribeContainer'

const Users = (props) => {
    console.log('Users', props)
    
    return <>
    <div className={classes.itemUsers}>
        { props.usersData.map(user => <div key={user.id}>
                <div className={classes.itemBlock}>
                    <div className={classes.item}>
                        <div className={classes.userAvatar}>
                            <UserPhoto pageKey={props.pageKey} photoSmall={user.photos.small} userId={user.id} 
                                currentPage={props.currentPage} />                                                                  
                        </div>
                        <div className={classes.userName}>
                            <UserName pageKey={props.pageKey} name={user.name} userId={user.id}
                                currentPage={props.currentPage} />
                        </div>                        
                        <SubscribeContainer userId={user.id} isFollowed={user.followed} currentPage={props.currentPage}/>                            
                    </div>
                    <div className={classes.personalData}>
                        <div className={classes.status}>
                            {user.status ? user.status : 'Hi! ;)))'}
                        </div> 
                        <div>
                            <StartDialog userId={user.id} clearMessagesThunk={props.clearMessagesThunk}
                                getUserMessagesThunk={props.getUserMessagesThunk} getUserThunk={props.getUserThunk} />
                        </div>                                                    
                    </div>
                </div>
            </div>
        )}
        </div>
        <div className={classes.paginatorBlock} >
            <Paginator totalItemsCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage}
            onPageChanged={props.onPageChanged} partSize={10} turnByName={props.turnByName}/>
        </div>
    </>
}

export default Users