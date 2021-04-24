import React from "react"
import Profile from "./Profile"
import { connect } from 'react-redux'
import { getUserThunk } from '../../redux/profile_reducer'
import { withRouter } from "react-router"
import withAuthRedirect from "../commons/Redirect/withAuthRedirect"

class ProfileContainer extends React.Component {
    
    componentDidMount() {
        const userId = this.props.match.params.userId || 2               

        this.props.getUserThunk(userId)
    }

    render() { return <Profile {...this.props} /> }
}

const mapStateToProps = (state) => ({ profile: state.profilePage.profile, pageKey: state.profilePage.pageKey })

const AuthRedirectContainer = withAuthRedirect(ProfileContainer)

const UerIdProfileContainer = withRouter(AuthRedirectContainer)

export default connect(mapStateToProps, { getUserThunk })(UerIdProfileContainer)