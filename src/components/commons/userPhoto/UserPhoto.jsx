import { Link } from "react-router-dom"
import avatar from '../../../assets/images/Nastay.jpg'
import classes from '../../commons/Commons.module.css'

const UserPhoto = (props) => {     
      
    switch (props.pageKey) {

        case 'ProfileInfo':                           
            return <Link to={'/userPhotoLarge/' + props.userId}>
                <img src={props.photosSmall != null ? props.photosSmall : avatar} className={classes.avatar} />
            </Link> 
        
        case 'Users':
            return <Link to={'/profile/' + props.userId}>
                <img src={props.photosSmall != null ? props.photosSmall : avatar} className={classes.avatar} />
            </Link> 

        default: return <div>Упс...</div>
    }   
     
}

export default UserPhoto