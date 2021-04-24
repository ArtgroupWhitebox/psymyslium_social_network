import React from "react"
import Profile from "./Profile"
import { connect } from 'react-redux'
import { getUserThunk } from '../../redux/profile_reducer'
import { withRouter } from "react-router"
import withAuthRedirect from "../commons/Redirect/withAuthRedirect"
import { compose } from "redux"

class ProfileContainer extends React.Component {
    
    componentDidMount() {
        const userId = this.props.match.params.userId || 2               

        this.props.getUserThunk(userId)
    }

    render() { return <Profile {...this.props} /> }
}

const mapStateToProps = (state) => ({ profile: state.profilePage.profile, pageKey: state.profilePage.pageKey })

export default compose(
    connect(mapStateToProps, { getUserThunk }),
    withAuthRedirect,
    withRouter)(ProfileContainer)