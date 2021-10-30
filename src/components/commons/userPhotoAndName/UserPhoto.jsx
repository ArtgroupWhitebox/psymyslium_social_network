import { Link } from "react-router-dom"
import avatar from '../../../assets/images/Nastay.jpg'
import classes from '../../commons/Commons.module.css'

const UserPhoto = (props) => { 

    console.log(props)
    
    const lincFn = (path) => {

        return <>
            <Link to={path}>
                <img src={props.photoSmall || avatar} className={props.className || classes.avatar} />
            </Link>
        </>  
    }
      
    switch (props.pageKey) {

        case 'ProfileInfo': return lincFn(`/userPhotoLarge/${props.userId}`)
        case 'Users': return lincFn(`/profile/${props.userId}`)
        case 'Dialogs': return lincFn(`/profile/${props.userId}`)
        case 'Sidebar': return lincFn(`/profile/${props.userId}`)
        case 'ScanUsersByName': return lincFn(`/users/${props.userId}`)
        default: return <div>Упс...</div>
    } 
    
}

export default UserPhoto

