import Preloading from '../../commons/Preloading'
import classes from './ProfileInfo.module.css'
import UserPhoto from '../../commons/userPhotoAndName/UserPhoto'
import UserName from '../../commons/userPhotoAndName/UserName'
import OwnerPhoto from '../../commons/OwnerPhoto/OwnerPhoto'
import ProfilePersonalData from '../ProfilePersonalData'
import ProfilePersonalDataEdit from '../ProfilePersonalDataEdit'
import ProfileStatusWithHooks from '../ProfileStatus/ProfileStatusWithHooks'
import StartDialog from '../../Dialogs/StartDialog'
import SubscribeContainer from '../../commons/Subscribe/SubscribeContainer'
import imgLoader from '../../../assets/images/imgLoader.gif'

const ProfileInfo = (props) => { 

    console.log('ProfileInfo', props)
      
    const user = props.profile
    return  <div className={classes.postBlock}>
            { props.isLoading ? <Preloading /> 
                : <div className={classes.itemBlock}>
                    <div className={classes.item}>
                        <div className={classes.userAvatar}>
                            { props.isOwner ? <OwnerPhoto photoOwnerSmall={user.photos.small} 
                                saveOwnerPhotoThunk={props.saveOwnerPhotoThunk} />
                                : <div>
                                    <UserPhoto className={classes.userPhoto} pageKey={props.pageKey} photoSmall={user.photos.small} userId={user.userId} />
                                </div>
                            }
                        </div>                          
                        <div className={classes.userName}>
                            <UserName pageKey={props.pageKey} name={user.fullName} userId={user.userId}/>
                        </div>
                        
                        {!props.isOwner 
                            && 
                            <div className={classes.buttonsBlock}>
                                <StartDialog userId={user.userId} clearMessagesThunk={props.clearMessagesThunk}
                                    getUserMessagesThunk={props.getUserMessagesThunk} pageKey={props.pageKey}/>
                                {props.isLoadingSubscribe ? <Preloading processingGif={imgLoader}/>
                                : <SubscribeContainer userId={user.userId} 
                                        isFollowedUser={props.isFollowedUser}
                                />}
                            </div> 
                        }
                        
                    </div>
                    <div>
                        <ProfileStatusWithHooks isOwner={props.isOwner} userId={user.userId}/>
                    </div>
                    <div>
                        {props.profileDataEdit 
                            ? <ProfilePersonalDataEdit profile={props.profile} 
                                updataProfilePersonalThunk={props.updataProfilePersonalThunk}
                                deactivateProfileEditModeThunk={props.deactivateProfileEditModeThunk}/> 
                            : <ProfilePersonalData profile={props.profile} isOwner={props.isOwner} 
                            activateProfileEditModeThunk={props.activateProfileEditModeThunk} 
                            status={props.status} updateUserStatusThunk={props.updateUserStatusThunk}/> 
                        } 
                    </div>              
                </div>
            }
    </div>
}

export default ProfileInfo