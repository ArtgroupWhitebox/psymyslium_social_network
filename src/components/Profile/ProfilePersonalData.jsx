import { ButtonBlue } from '../Button/Button'
import classes from '../Profile/ProfileInfo/ProfileInfo.module.css'

const ProfilePersonalData = ({profile, isOwner, activateProfileEditModeThunk}) => {
    return <div className={classes.personalData}>
        {isOwner && <div>
                <ButtonBlue onClick={activateProfileEditModeThunk} value={'Edit profile'} /> 
            </div> }
        <div className={classes.dataBlock}>
            <div className={classes.dataItem}><b>Об о мне:</b> {profile.aboutMe ? profile.aboutMe : ' ;)'}</div>
            <div className={classes.dataItem}><b>В поиске работы:</b> {profile.lookingForAJob ? 'Да' :  'Нет' } </div>
            {profile.lookingForAJobDescription && <div className={classes.dataItem}><b>Мои профессиональные навыки:</b> {profile.lookingForAJobDescription}</div> }                   
            <div className={classes.userContacts}> 
                <div className={classes.dataItem}><b>Контакты:</b></div>
                {Object.keys(profile.contacts).map(key => {
                    return <div key={key}>
                        {profile.contacts[key] && 
                        <div className={classes.dataItem}><Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} /></div>                    
                        }
                    </div>
                })
            }        
            </div>
        </div>
    </div>
}

const Contact = ({contactTitle, contactValue}) => {
    return <div>  
        {contactTitle}: <a href={`https://${contactValue}`} target='Blank'>{contactValue}</a>
    </div>    
}

export default ProfilePersonalData
