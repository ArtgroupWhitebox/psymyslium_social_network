import classes from './Dialogs.module.css'
import { Link } from "react-router-dom"

const StartDialog = (props) => {
    
    return <Link to={'/dialogs/' + props.userId} className={classes.startMessageLink} >
        <button className={classes.startMessageButton} >
            Начать переписку </button> 
    </Link> 
}

export default StartDialog