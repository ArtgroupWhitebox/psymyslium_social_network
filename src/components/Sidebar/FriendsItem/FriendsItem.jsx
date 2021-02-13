import { NavLink } from 'react-router-dom'
import classes from './FriendsItem.module.css'
console.log(classes)

const FriendsItem = (props) => {

    return (
        <div className={classes.item}>
            <div className={classes.itemAvatar}>
                <NavLink to={'/friends/' + props.id}> {props.avatar} </NavLink>
            </div>
            <div className={classes.itemName}>
                <NavLink to={'/friends/' + props.id} activeClassName={classes.activeLink}> {props.name} </NavLink>
            </div>
        </div>
    );
}

export default FriendsItem;