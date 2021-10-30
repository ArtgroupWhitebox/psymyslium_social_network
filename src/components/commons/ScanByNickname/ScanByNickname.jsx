import { dialogsAPI, usersAPI } from '../../axiosAPI/api'
import { ButtonAqua } from '../../Button/Button'
import style from '../ScanByNickname/ScanByNickname.module.css'
import iconScan from '../../../assets/images/icon_scan.png'
import UserPhoto from '../userPhotoAndName/UserPhoto'
import UserName from '../userPhotoAndName/UserName'
import { useEffect, useState } from 'react'


const ScanByNickname = ({pageKey}) => {

    const [nickname, setNickname] = useState('')
    const [friendsListScan, setFriendsListScan] = useState([])
    const [usersDialogs, setUsersDialogs] = useState([])
    const [isShowInput, setIsShowInput] = useState(false)

    useEffect(() => {
        pageKey === 'Sidebar'
        ? usersAPI.getUsers(1, 10, nickname, true)
        .then(data => {
            setFriendsListScan(data.items)
        })
        : setFriendsListScan(usersDialogs.filter((item) => item.userName.toLowerCase().indexOf(nickname) > - 1 ))
    }, [nickname])

    useEffect(() => {        
        pageKey !== 'Sidebar' &&
        dialogsAPI.getUsersDialogs().then(data => {
            setUsersDialogs(data) 
        })
    }, [])

    useEffect(() => {
        isShowInput === false && 
        setNickname('')
    }, [isShowInput])

    return <label className={style.inputBlock}>
    { !isShowInput 
        ? <div className={style.spanBlock}> 
            <span onClick={() => setIsShowInput(true)} className={style.span} >Scan by Nickname <img src={iconScan} className={style.img} /> </span>            
          </div>        
        : <div>
            <input type='search' autoFocus={true} onFocus={(e) => {e.target.select()}}  
                onChange={(event) => {setNickname(event.target.value)}} value={nickname} className={style.input}                  
            placeholder='Enter Nickname'/>
            { nickname.length > 0 &&
            <div className={style.dropListBlock}>
                {friendsListScan.map(el => 
                    <div key={el.index} >
                        <button type='button' onClick={() => setIsShowInput(false)} className={style.buttonSelect}> 
                            <div className={style.buttonSelectUsersData} >
                                <UserPhoto pageKey={pageKey} userId={el.id} photoSmall={el.photos.small} className={style.userPhoto} /> 
                                <UserName pageKey={pageKey} userId={el.id} name={el.name || el.userName} nameLink={style.nameLink} className={style.userName} /> 
                            </div> 
                        </button> 
                    </div>)}
            </div> }
            <div className={style.buttonCloseBlock} >
                <ButtonAqua onClick={() => setIsShowInput(false)} value={'Close'} />
            </div> 
        </div>
    }
</label>
}

export default ScanByNickname


