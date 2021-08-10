import { NavLink } from 'react-router-dom'
import classes from './DialogItem.module.css'
import Avatar from '../../../assets/images/Nastay.jpg'
import StartDialog from '../StartDialog'


const DialogItem = (props) => {

    console.log(props)

    return (
        <div className={classes.dialog} >
            { props.dialogsData.map( el => <div key={el.id}> 
                    <div className={classes.avatar}>
                        <NavLink to={'/messageItem/' + el.id} activeClassName={classes.activeLink} > 
                            <img src= {el.photos.small || Avatar} className={classes.avatar} />
                        </NavLink>
                    </div>
                    <div className={classes.userName}>
                        <NavLink to={'/messageItem/' + el.id} activeClassName={classes.activeLink} > {el.userName || el.id || 'User_' } </NavLink>
                    </div> 
                    <StartDialog userId={el.id} clearMessagesThunk={props.clearMessagesThunk}
                    getUserMessagesThunk={props.getUserMessagesThunk}/>   
                </div>
            )}
        </div>
    )
}

export default DialogItem