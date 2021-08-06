import Preloading from '../../commons/Preloading'
import classes from './ProfileInfo.module.css'
import logo from '../../../assets/images/logo.jpg'
import UserPhoto from '../../commons/userPhoto/UserPhoto'
import UserName from '../../commons/UserName'
import OwnerPhoto from '../../commons/OwnerPhoto/OwnerPhoto'
import ProfilePersonalData from '../ProfilePersonalData'
import ProfilePersonalDataEdit from '../ProfilePersonalDataEdit'

const ProfileInfo = (props) => { 
      
    const user = props.profile
    return <div>
        <div>
            <img src={logo} />
        </div>        
        <div className={classes.postBlock}>
            { !user ? <Preloading /> :
                <div className={classes.itemBlock}>
                    <div className={classes.item}>
                    <div className={classes.userAvatar}>
                        { props.isOwner ? <OwnerPhoto photoOwnerSmall={user.photos.small} 
                            saveOwnerPhotoThunk={props.saveOwnerPhotoThunk} /> : 
                        <UserPhoto pageKey={props.pageKey} photosSmall={user.photos.small} userId={user.userId} />}
                    </div>
                        <div>
                            <UserName pageKey={props.pageKey} fullName={user.fullName} userId={user.userId}/>
                        </div>
                    </div>
                    <div>
                        {props.profileDataEdit 
                            ? <ProfilePersonalDataEdit profile={props.profile} 
                                updataProfilePersonalThunk={props.updataProfilePersonalThunk}
                                deactivateProfileEditModeThunk={props.deactivateProfileEditModeThunk}/> 
                            : <ProfilePersonalData profile={props.profile} isOwner={props.isOwner} 
                            activateProfileEditModeThunk={props.activateProfileEditModeThunk} /> 
                        } 
                    </div>                    
                </div>
            }
        </div>
    </div>
}

export default ProfileInfo