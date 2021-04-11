import { Link } from "react-router-dom"
import avatar from '../../../assets/images/Nastay.jpg'
import classes from '../../commons/Commons.module.css'


const UserPhotoLarge = (props) => {
    return <Link to={'/profile/' + props.userId}>
            <img src={props.photoLarge ? props.photoLarge : avatar} className={classes.avatarLarge} />
        </Link>   
}

export default UserPhotoLarge