import classes from './Users.module.css'
import UserPhoto from '../commons/userPhotoAndName/UserPhoto'
import UserName from '../commons/userPhotoAndName/UserName'
import Paginator from '../commons/Paginator/Paginator'
import StartDialog from '../Dialogs/StartDialog'
import { ButtonAqua, ButtonYellow } from '../Button/Button'

const Users = (props) => {
    console.log('Users', props)
    
    return <div className={classes.itemUsers}>
        <div className={classes.paginatorBlock} >
            <Paginator totalItemsCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage}
            onPageChanged={props.onPageChanged} partSize={20} />
        </div>
        { props.usersData.map(user => <div key={user.id}>
                <div className={classes.itemBlock}>
                    <div className={classes.item}>
                        <div className={classes.userAvatar}>
                            <UserPhoto pageKey={props.pageKey} photoSmall={user.photos.small} userId={user.id}/>                                                                  
                        </div>
                        <div className={classes.userName}>
                            <UserName pageKey={props.pageKey} name={user.name} userId={user.id}/>
                        </div>                        
                        <div>
                            {user.followed
                                ? <ButtonYellow disabled={props.isDisabled.some(id => id === user.id)} onClick={() => {props.onClickUnFollowed(user.id)} } 
                                    value={'Unsubscribe'} />
                                : <ButtonAqua disabled={props.isDisabled.some(id => id === user.id)} onClick={() => {props.onClickFollowed(user.id)} } 
                                    value={'Subscribe'} />
                            }
                        </div>                            
                    </div>
                    <div className={classes.personalData}>
                        <div className={classes.status}>
                            {user.status ? user.status : 'Hi! ;)))'}
                        </div> 
                        <div>
                            <StartDialog userId={user.id} clearMessagesThunk={props.clearMessagesThunk}
                                getUserMessagesThunk={props.getUserMessagesThunk} />
                        </div>                                                    
                    </div>
                </div>
            </div>
        )}
    </div>
}

export default Users