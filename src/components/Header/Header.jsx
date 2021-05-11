import { Link } from 'react-router-dom'
import classes from './Header.module.css'
console.log(classes)

const Header = (props) => {
    return <header className={classes.header}>

        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFWWl122hfo3Mds1f9lNAfwEXiaGU7_VaiPA&usqp=CAU" />

        <span className={classes.loginBlook}>
            {props.isAuth ? <div>
                    <div>
                        {props.login}
                    </div>
                    <div>
                        <button onClick={props.logoutThunk}>Log out</button>
                    </div>
                </div>
                : <Link to={'/login/'}>Login</Link>}
        </span>
    </header>
}

export default Header