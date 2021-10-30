import { connect } from "react-redux"
import React from 'react'
import { getUserThunk } from '../../../redux/userPhotoAndName_reducer'
import { withRouter } from "react-router"
import UserPhotoLarge from "./UserPhotoLarge"
import { getPhotoLarge } from "../../../redux/users_selector"
import { compose } from "redux"

class UserPhotoAndNameContainer extends React.Component { 
    
    componentDidMount() {       
                 
        const userId = this.props.match.params.userId  

        this.props.getUserThunk(userId)       

    }    
       
    render() {
        
        return <>   
            <UserPhotoLarge photoLarge = {this.props.photoLarge} userId={this.props.match.params.userId}/>
        </>
    }
}

const mapStateToProps = (state) => ({
    photoLarge: getPhotoLarge(state)
})

export default compose(
    connect(mapStateToProps, { getUserThunk }),
    withRouter
)(UserPhotoAndNameContainer)