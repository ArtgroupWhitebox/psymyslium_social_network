
import preload from '../../assets/images/preload.gif'
import classes from '../Users/Users.module.css'

let Preloading = () => {
    return <div>
        <img src={preload} className={classes.preloader} />
    </div>
}
export default Preloading