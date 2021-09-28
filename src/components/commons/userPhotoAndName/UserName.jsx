import {Link } from "react-router-dom"
import classes from '../../commons/Commons.module.css'


const UserName = (props) => {

    const lincFn = (path) => {

        return <div className={props.className || classes.userName}>
                <Link to={path + props.userId} className={classes.nameLink}>
                    {props.name || props.userId || 'User_'}
                </Link>
            </div>
    }

    switch (props.pageKey) {

        case 'ProfileInfo': return lincFn('/userPhotoLarge/')
        case 'Users': return lincFn('/profile/')
        case 'Dialogs': return lincFn('/profile/')
        case 'Sidebar': return lincFn('/profile/')
        case 'ScanUsersByName': return lincFn('/users/')
        default: return <div>Упс...</div>
    }
}

export default UserName