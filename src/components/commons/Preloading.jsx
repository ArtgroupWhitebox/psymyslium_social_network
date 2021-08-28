
import preload from '../../assets/images/preload.gif'
import classes from './Commons.module.css'

const Preloading = ({processingGif}) => {
    console.log(processingGif)
    console.log(preload)
    return <div>
        <img src={processingGif || preload} className={classes.preloader} />
    </div>    
}

export default Preloading