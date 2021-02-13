import { NavLink } from 'react-router-dom'
import classes from './DialogItem.module.css'
console.log(classes)

const DialogItem = (props) => {

    return (
        <div className={classes.dialog} >
            <div>
                <NavLink to={'/dialogs/' + props.id} activeClassName={classes.activeLink} > {props.avatar} </NavLink>
            </div>
            <div>
                <NavLink to={'/dialogs/' + props.id} activeClassName={classes.activeLink} > {props.name} </NavLink>
            </div>
        </div>
    );
}

export default DialogItem;