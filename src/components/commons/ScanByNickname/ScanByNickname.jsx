import { useEffect, useState } from 'react'
import { usersAPI } from '../../axiosAPI/api'
import { ButtonAqua } from '../../Button/Button'
import style from '../ScanByNickname/ScanByNickname.module.css'
import iconScan from '../../../assets/images/icon_scan.png'
import UserPhoto from '../userPhotoAndName/UserPhoto'
import UserName from '../userPhotoAndName/UserName'


const ScanByNickname = ({pageKey}) => {

    const [nickname, setNickname] = useState('')
    const [friendsListScan, setFriendsListScan] = useState([])
    const [isShowInput, setIsShoeInput] = useState(false) 

    const onChangeScan = (event) => {
        setNickname(event.target.value)
        console.log('nickname_1:', nickname)
        console.log('setNickname:', setNickname(event.target.value))
        usersAPI.getUsers(1, 10, event.target.value, true)
        .then(data => {
            setFriendsListScan(data.items)
        })
    }

    const thisNicknameSelect = () => { 
        setIsShoeInput(false)
        setNickname([])
    }

    const activateIsEdit = () => {
        setIsShoeInput(true)
    }

    const deActivateIsEdit = () => {
        setIsShoeInput(false)
        setNickname([])
    }

    return <label className={style.inputBlock}>
    { !isShowInput 
        ? <div className={style.spanBlock}> 
            <span onClick={activateIsEdit} className={style.span} >Scan by Nickname <img src={iconScan} className={style.img} /> </span>            
          </div>        
        : <div>
            <input type='search' autoFocus={true} onFocus={(e) => {e.target.select()}}  
                onChange={onChangeScan} value={nickname} className={style.input}                  
            placeholder='Enter Nickname'/>
            { nickname.length > 0 &&
            <div className={style.dropListBlock}>
                {friendsListScan.map(el => 
                    <div key={el.index} >
                        <button type='button' onClick={thisNicknameSelect} className={style.buttonSelect}> 
                            <div className={style.buttonSelectUsersData} >
                                <UserPhoto pageKey={pageKey} userId={el.id} photoSmall={el.photos.small} className={style.userPhoto} /> 
                                <UserName pageKey={pageKey} userId={el.id} name={el.name} className={style.userName} /> 
                            </div> 
                        </button> 
                    </div>)}
            </div> }
            <div className={style.buttonCloseBlock} >
                <ButtonAqua onClick={deActivateIsEdit} value={'Close'} />
            </div> 
        </div>
    }
</label>
}

export default ScanByNickname


