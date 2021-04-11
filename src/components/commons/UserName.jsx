import { NavLink } from "react-router-dom"
import classes from '../commons/Commons.module.css'


const UserName = (props) => {

    switch (props.pageKey) {

        case 'ProfileInfo':
            return <div className={classes.userName}>
                <NavLink to={'/userPhotoLarge/' + props.userId} activeClassName={classes.activeLink}>
                    {props.fullName}
                </NavLink>
            </div>

        case 'Users':
            return <div className={classes.userName}>
                <NavLink to={'/profile/' + props.userId} activeClassName={classes.activeLink}>
                    {props.fullName}
                </NavLink>
            </div>

        default: return <div>Упс...</div>
    }
}

export default UserName