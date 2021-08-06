import { NavLink } from "react-router-dom"
import classes from '../commons/Commons.module.css'


const UserName = (props) => {

    const lincFn = (path) => {

        return <div className={classes.userName}>
                <NavLink to={path + props.userId} activeClassName={classes.activeLink}>
                    {props.fullName || props.userId || 'User_'}
                </NavLink>
            </div>
    }

    switch (props.pageKey) {

        case 'ProfileInfo': return lincFn('/userPhotoLarge/')
        case 'Users': return lincFn('/profile/')
        case 'Dialogs': return lincFn('/dialogs/')
        default: return <div>Упс...</div>
    }
}

export default UserName