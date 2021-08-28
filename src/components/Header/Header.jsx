import { Link } from 'react-router-dom'
import classes from './Header.module.css'
import IconLogo from '../../assets/images/icon_Logo.png'

const Header = (props) => {
    return <header className={classes.header}>
        <img src={IconLogo} />
        {props.isAuth 
            ? <div className={classes.loginBlook}>
                <span className={classes.login}>
                    {props.login}
                </span>
                <div>
                    <button onClick={props.logoutThunk} className={classes.loginButton}>Log out</button>
                </div>
            </div>
            : <span className={classes.login}>
                <Link to={'/login/'}>Login</Link>
            </span>
        }
    </header>
}

export default Header