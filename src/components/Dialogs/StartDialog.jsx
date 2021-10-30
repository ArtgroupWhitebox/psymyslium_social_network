import classes from './Dialogs.module.css'
import { Link } from "react-router-dom"


const StartDialog = (props) => {

    const customizMessages = () => { 
        props.getUserThunk(props.userId)
    }
    
    return <>
        <Link to={'/dialogs/' + props.userId} className={classes.startMessageLink} >
            <button className={classes.startMessageButton} 
            onClick={props.pageKey !== 'ProfileInfo' ? customizMessages : undefined}
            >
            Start chat </button> 
        </Link>
    </>
} 

export default StartDialog