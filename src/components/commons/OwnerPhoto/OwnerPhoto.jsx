// import { Link } from "react-router-dom"
import avatar from '../../../assets/images/Nastay.jpg'
import classes from '../../commons/Commons.module.css'

const OwnerPhoto = (props) => {
            
    const onPhotoSelected = (e) => {
        e.currentTarget.files.length && props.saveOwnerPhotoThunk(e.currentTarget.files[0])         
    }

    return <>                        
        <div> 
            <img src={props.photoOwnerSmall || avatar} className={classes.photoOwnerSmall} />
        </div>
        <label className={classes.labelOwnerPhoto}>
            <input type='file' onChange={onPhotoSelected} className={classes.inputOwnerPhoto}/> 
            <span className={classes.spanOwnerPhoto}>Replace photo</span>
        </label>        
    </> 
}

export default OwnerPhoto