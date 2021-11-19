import React, { useEffect, useState } from "react"
import { profileAPI } from "../../axiosAPI/api"
import classes from '../ProfileStatus/ProfileStatus.module.css'

const ProfileStatusWithHooks = ({isOwner, userId}) => {

    const [isEdit, setIsEdit] = useState(false)
    const [status, setStatus] = useState(null)

    useEffect(() => {
        profileAPI.getStatus(userId).then(data => {
            console.log(`STATUS = '${data}' for userId = ${userId}`)
            setStatus(data)            
        })
    }, [userId])

    
    const activateIsEdit = () => {
        isOwner && setIsEdit(true)
    }

    const selectText = (event) => {
        event.target.select()
    }
    
    const onUpdataStatus = (event) => {
        setStatus(event.target.value)
    }

    const deActivateIsEdit = () => {
        profileAPI.putStatus(status).then(data => {
            data.resultCode === 0 &&
            profileAPI.getStatus(userId).then(data => {
                data.resultCode === 0 && setStatus(data)
                setIsEdit(false)
            })
        })        
    }    

    return <label className={classes.inputBlock}>
        { (!isEdit )
            ? <span onClick={activateIsEdit} className={classes.span} >{ status || 'Status: ;););)' }</span>           
            : <input type='textarea' autoFocus={true} onFocus={selectText} onBlur={deActivateIsEdit} 
                onChange={onUpdataStatus} value={status} className={classes.input} />
        }
    </label>
    
}

export default ProfileStatusWithHooks

                            