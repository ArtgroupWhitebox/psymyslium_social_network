import React from "react"
import Profile from "./Profile"
import { connect } from 'react-redux'
import * as axios from 'axios'
import { setUserProfile } from '../../redux/profile_reducer'

class ProfileContainer extends React.Component {
    
    componentDidMount() { 
               
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        return <Profile {...this.props} />
     }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})


const DispatchToProps = {
    setUserProfile
}

export default connect(mapStateToProps, DispatchToProps)(ProfileContainer)