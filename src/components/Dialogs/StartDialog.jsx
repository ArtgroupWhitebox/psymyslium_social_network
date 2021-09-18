import classes from './Dialogs.module.css'
import { Link } from "react-router-dom"


const StartDialog = (props) => {

    console.log('StartDialog', props)

    const customizMessages = () => {        
        props.clearMessagesThunk()
        props.getUserMessagesThunk(props.userId)
    }
    
    return <Link to={'/dialogs/' + props.userId} className={classes.startMessageLink} >
        <button className={classes.startMessageButton} onClick={customizMessages}>
        Start chat </button> 
    </Link> 
} 

export default StartDialog