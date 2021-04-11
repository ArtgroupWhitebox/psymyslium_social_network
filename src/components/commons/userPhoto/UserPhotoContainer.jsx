import { connect } from "react-redux"
import React from 'react'
import * as axios from 'axios'
import { setUserPhoto } from '../../../redux/userPhoto_reducer'
import { withRouter } from "react-router"
import UserPhotoLarge from "./UserPhotoLarge"
import Preloading from "../Preloading"

class UserPhotoContainer extends React.Component { 
    
    componentDidMount() {
                 
        const userId = this.props.match.params.userId                       

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            
            this.props.setUserPhoto(response.data.photos.large)
            
            // this.setState({
            //     photoUrl: response.data.photos.large,
            //     userId: response.data.userId
            //   })
        })
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

export default connect(mapStateToProps, { setUserPhoto })(withUserPhotoContainer)