import Preloading from '../../commons/Preloading'
import classes from './ProfileInfo.module.css'
import logo from '../../../assets/images/logo.jpg'
import UserPhoto from '../../commons/userPhoto/UserPhoto'
import UserName from '../../commons/UserName'

const ProfileInfo = (props) => {
    
    const user = props.profile
    return <div>
        <div>
            <img src={logo} />
        </div>
        <div className={classes.postBlock}>
            {!user ? <Preloading /> :
                <div className={classes.itemBlock}>
                    <div className={classes.item}>
                    <div className={classes.userAvatar}>
                            <UserPhoto pageKey={props.pageKey} photosSmall={user.photos.small} userId={user.userId}/>
                        </div>
                        <div className={classes.userName}>
                            <UserName pageKey={props.pageKey} fullName={user.fullName} userId={user.userId}/>
                        </div>
                    </div>
                    <div className={classes.personalData}>
                        <div>About me: {user.aboutMe ? user.aboutMe : ' ;)'}</div>                        
                        <div className={classes.userContacts}>                           
                            {user.contacts.facebook && <div>Facebook: <a href={`https://${user.contacts.facebook}`} target='Blank'>{user.contacts.facebook}</a> </div>}
                            {user.contacts.website && <div>Website: <a href={`https://${user.contacts.website}`} target='Blank'>{user.contacts.website}</a> </div>}
                            {user.contacts.vk && <div>VK: <a href={`https://${user.contacts.vk}`} target='Blank'>{user.contacts.vk}</a> </div>}
                            {user.contacts.twitter && <div>Twitter: <a href={user.contacts.twitter} target='Blank'>{user.contacts.twitter}</a> </div>}
                            {user.contacts.instagram && <div>Instagram: <a href={`https://${user.contacts.instagram}`} target='Blank'>{user.contacts.instagram}</a> </div>}
                            {user.contacts.youtube && <div>Youtube: <a href={`https://${user.contacts.youtube}`} target='Blank'>{user.contacts.youtube}</a> </div>}
                            {user.contacts.github && <div>GitHub: <a href={`https://${user.contacts.github}`} target='Blank'>{user.contacts.github}</a> </div>}
                            {user.contacts.mainLink && <div>MainLink: <a href={`https://${user.contacts.mainLink}`} target='Blank'>{user.contacts.mainLink}</a> </div>}
                        </div>                                          
                        {user.lookingForAJob == true && <div>Looking for a job: {user.lookingForAJobDescription} </div>}
                    </div>
                </div>
            }
        </div>
    </div>
}

export default ProfileInfo