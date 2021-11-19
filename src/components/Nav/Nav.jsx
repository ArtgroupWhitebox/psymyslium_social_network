import { NavLink } from 'react-router-dom';
import classes from './Nav.module.css'
console.log (classes)

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to='/profile' activeClassName={classes.activeLink}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={'/dialogs'} activeClassName={classes.activeLink}>Chats</NavLink>
            </div>
            <div className={classes.item}> 
                <NavLink to='/news' activeClassName={classes.activeLink}>Posts</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/users' activeClassName={classes.activeLink}>Users</NavLink>
            </div>
        </nav>
    );
}

export default Nav;