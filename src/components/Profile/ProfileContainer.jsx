import React from "react"
import Profile from "./Profile"
import { connect } from 'react-redux'
import { getUserThunk } from '../../redux/profile_reducer'
import { withRouter } from "react-router"

class ProfileContainer extends React.Component {
    
    componentDidMount() {
        const userId = this.props.match.params.userId || 2               

        this.props.getUserThunk(userId)
    }

    render() { return <Profile {...this.props} /> }
}

const mapStateToProps = (state) => ({ profile: state.profilePage.profile, pageKey: state.profilePage.pageKey })

const withUerIdProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, { getUserThunk })(withUerIdProfileContainer)