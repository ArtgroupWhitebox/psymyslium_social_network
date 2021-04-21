import { connect } from "react-redux"
import React from 'react'
import { getUserThunk } from '../../../redux/userPhoto_reducer'
import { withRouter } from "react-router"
import UserPhotoLarge from "./UserPhotoLarge"
// import Preloading from "../Preloading"

class UserPhotoContainer extends React.Component { 
    
    componentDidMount() {       
                 
        const userId = this.props.match.params.userId  

        this.props.getUserThunk(userId)       

        // profileAPI.getUser(userId).then(data => {            
        //     this.props.setUserPhoto(data.photos.large)s            
            // this.setState({
            //     photoUrl: data.photos.large,
            //     userId: data.userId
            //   })
        // })
    }    
       
    render() {
        
        return <UserPhotoLarge photoLarge = {this.props.photoLarge} userId={this.props.match.params.userId}/> 

        // return this.state ? <UserPhotoLarge photoUrl = {this.state.photoUrl} userId={this.state.userId}/> : <Preloading />
    }
}

const mapStateToProps = (state) => ({
    photoLarge: state.userPhotos.photoLarge
})

const withUserPhotoContainer = withRouter(UserPhotoContainer)

export default connect(mapStateToProps, { getUserThunk })(withUserPhotoContainer)