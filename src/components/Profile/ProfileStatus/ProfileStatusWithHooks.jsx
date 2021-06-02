import React, { useState } from "react"
import classes from './ProfileStatus.module.css'

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deActivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatusThunk(status)
    }

    const onChangeUserStatus = (event) => {
        setStatus(event.target.value)
    }

    const selectText = (event) => {
        event.target.select()
    }
    
    return <div className={classes.statusBlock}>
        { !editMode ?
            <div>
                <span onDoubleClick={activateEditMode} >{props.status || 'Status: ;););)' }</span>
            </div> :
            <div>
                <input autoFocus={true} onFocus={selectText} onBlur={deActivateEditMode} 
                onChange={onChangeUserStatus} value={status} />
            </div>
        }
    </div>
    
}

export default ProfileStatusWithHooks