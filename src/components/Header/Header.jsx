import { Link } from 'react-router-dom'
import classes from './Header.module.css'
import IconLogo from '../../assets/images/icon_Logo.png'
import { ButtonAqua } from '../Button/Button'

const Header = (props) => {
    return <header className={classes.header}>
        <img src={IconLogo} />
        {props.isAuth 
            ? <div className={classes.loginBlook}>
                <span className={classes.login}>
                    {props.login}
                </span>
                <div>
                    <ButtonAqua onClick={props.logoutThunk} value={'Log out'} />
                </div>
            </div>
            : <span className={classes.login}>
                <Link to={'/login/'}>Login</Link>
            </span>
        }
    </header>
}

export default Header