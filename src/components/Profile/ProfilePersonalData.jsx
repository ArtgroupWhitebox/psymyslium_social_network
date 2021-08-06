import classes from '../Profile/ProfileInfo/ProfileInfo.module.css'

const ProfilePersonalData = ({profile, isOwner, activateProfileEditModeThunk}) => {
    return <div className={classes.personalData}>
        {isOwner && <div>
                <button 
                    onClick={activateProfileEditModeThunk}  
                    className={classes.editModeButton}> Редактировать профиль </button>
            </div> }
        <div>Об о мне: {profile.aboutMe ? profile.aboutMe : ' ;)'}</div>
        <div>В поиске работы: {profile.lookingForAJob ? 'Да' :  'Нет' } </div>
        {profile.lookingForAJobDescription && <div>Мои профессиональные навыки: {profile.lookingForAJobDescription}</div> }                   
        <div className={classes.userContacts}> 
            {Object.keys(profile.contacts).map(key => {
                return <>
                    {profile.contacts[key] && 
                    <div>Contacts: <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} /></div>                    
                    }
                </>
            })
        }        
        </div>
    </div>
}

const Contact = ({contactTitle, contactValue}) => {
    return <div>  
        {contactTitle}: <a href={`https://${contactValue}`} target='Blank'>{contactValue}</a>
    </div>    
}

export default ProfilePersonalData
