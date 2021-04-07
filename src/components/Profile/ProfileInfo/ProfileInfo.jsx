import Preloading from '../../commons/Preloading'
import classes from './ProfileInfo.module.css'
import logo from '../../../assets/images/logo.jpg'
import { NavLink } from 'react-router-dom'
import avatar from '../../../assets/images/Nastay.jpg'

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
                            <NavLink to={'/profile/' + user.id} >
                                <img src={user.photos.small != null ? user.photos.small : avatar} className={classes.avatar} />
                            </NavLink>
                        </div>
                        <div className={classes.userName}>
                            <NavLink to={'/profile/' + user.id} activeClassName={classes.activeLink}>
                                {user.fullName}
                            </NavLink>
                        </div>
                    </div>
                    <div className={classes.personalData}>
                        <div>About me: {user.aboutMe ? user.aboutMe : ' ;)'}</div>
                        <div className={classes.userContacts}>My contacts:
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