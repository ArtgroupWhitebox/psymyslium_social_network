import { useEffect, useState } from "react"
import style from '../ScanByNickname/ScanUsersByName.module.css'
import iconScan from '../../../assets/images/icon_scan.png'
import { ButtonRed } from "../../Button/Button"


const ScanUsersByName = ({getUsersThunk, isScan, setIsScan, isFriends, currentPage, pageSize }) => {

    const [nickname, setNickname] = useState('')

    const activateIsScan = () => {        
        setIsScan(true)
    }

    const onChangeScan = (event) => {
        setNickname(event.target.value)
    }

    useEffect(() => { 
        console.log('nickname_1:', nickname)
        nickname.length > 0 &&
        getUsersThunk(1, pageSize, nickname, isFriends)

    }, [nickname])

    const deActivateIsScan = () => {
        setIsScan(false)
        setNickname([])
        getUsersThunk(currentPage, pageSize, null, isFriends)
    }

    return <div className={style.inputBlock} >        
        { !isScan 
            ? <div className={style.spanBlock}> 
                <img src={iconScan} className={style.img} /> 
                <span onClick={activateIsScan} className={style.span} > Scan by Nickname </span>            
            </div>        
            : <div className={style.scanBlock}>
                <div className={style.inputScanBlock}>
                    <img src={iconScan} className={style.img} />
                    <input type='search' autoFocus={true} onFocus={(e) => {e.target.select()}}  
                        onChange={onChangeScan} value={nickname} className={style.input}                  
                    placeholder='Enter Nickname' />
                    <div className={style.buttonCloseBlock} >
                        <ButtonRed onClick={deActivateIsScan} value={'Close'} />
                    </div>
                </div>
            </div>
        }
    </div>
}

export default ScanUsersByName