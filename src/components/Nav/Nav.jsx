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
                <NavLink to='/dialogs' activeClassName={classes.activeLink}>Messages</NavLink>
            </div>
            {/* если присвоены эти оба класса вместе то цвет красный
            <div className={`${classes.item} ${classes.it}`}> 
                <NavLink to='/news' activeClassName={classes.active}>News</NavLink>
            </div> */}
            <div className={classes.item}> 
                <NavLink to='/news' activeClassName={classes.activeLink}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/music' activeClassName={classes.activeLink}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/settings' activeClassName={classes.activeLink}>Settings</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/users' activeClassName={classes.activeLink}>Users</NavLink>
            </div>
        </nav>
    );
}

export default Nav;