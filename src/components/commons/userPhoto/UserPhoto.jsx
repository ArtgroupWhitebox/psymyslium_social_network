import { Link } from "react-router-dom"
import avatar from '../../../assets/images/Nastay.jpg'
import classes from '../../commons/Commons.module.css'

const UserPhoto = (props) => { 
    
    const lincFn = (path) => {

        return <Link to={path + props.userId}>
                <img src={props.photosSmall != null ? props.photosSmall : avatar} className={classes.avatar} />
            </Link> 
    }
      
    switch (props.pageKey) {

        case 'ProfileInfo': return lincFn('/userPhotoLarge/')
        case 'Users': return lincFn('/profile/')
        default: return <div>Упс...</div>
    } 
    
}

export default UserPhoto

