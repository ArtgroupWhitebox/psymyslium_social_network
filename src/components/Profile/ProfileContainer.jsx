import React from "react"
import Profile from "./Profile"
import { connect } from 'react-redux'
import * as axios from 'axios'
import { setUserProfile } from '../../redux/profile_reducer'
import { withRouter } from "react-router"

class ProfileContainer extends React.Component {
    
    componentDidMount() {
        const userId = this.props.match.params.userId || 2               

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() { return <Profile {...this.props} /> }
}

const mapStateToProps = (state) => ({ profile: state.profilePage.profile })

let DispatchToProps = { setUserProfile }

const withUerIdProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, DispatchToProps)(withUerIdProfileContainer)