import {Link } from "react-router-dom"
import classes from '../../commons/Commons.module.css'


const UserName = (props) => {

    const lincFn = (path) => {

        return <div className={props.className || classes.userName}>
                <Link to={path}>
                    <div className={props.nameLink || classes.nameLink}>{props.name || props.userId || 'User_'}</div>
                </Link>
            </div>
    }

    switch (props.pageKey) {

        case 'ProfileInfo': return lincFn(`/userPhotoLarge/${props.userId}`)
        case 'Users': return lincFn(`/profile/${props.userId}`)
        case 'Dialogs': return lincFn(`/profile/${props.userId}`)
        case 'Sidebar': return lincFn(`/profile/${props.userId}`)       
        case 'ScanUsersByName': return lincFn(`/users/${props.userId}`)
        default: return <div>Упс...</div>
    }
}

export default UserName