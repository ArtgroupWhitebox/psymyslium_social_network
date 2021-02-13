import { NavLink } from 'react-router-dom';
import FriendsItem from './FriendsItem/FriendsItem';
import classes from './Sidebar.module.css'
console.log (classes)

const Sidebar = (props) => {

    let friendsElements = props.sidebar.friendsData.map(
        el => <FriendsItem id={el.id} name={el.name} avatar={el.avatar} /> 
    ) 

    return (

        <nav className={classes.sidebar}>
            
            <div className={classes.itemFriends}>
                <NavLink to='/friends' activeClassName={classes.activeLink}>Friends</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/friends' activeClassName={classes.activeLink}> { friendsElements } </NavLink>
            </div>


        </nav>
    );
}

export default Sidebar;