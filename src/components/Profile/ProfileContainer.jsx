import React from "react"
import Profile from "./Profile"
import { connect } from 'react-redux'
import { getUserStatusThunk, getUserThunk, updateUserStatusThunk } from '../../redux/profile_reducer'
import { withRouter } from "react-router"
// import withAuthRedirect from "../commons/Redirect/withAuthRedirect"
import { compose } from "redux"

class ProfileContainer extends React.Component {
    
    componentDidMount() {
        const userId = this.props.match.params.userId || 16429               

        this.props.getUserThunk(userId)
        this.props.getUserStatusThunk(userId)
    }

    render() { return <Profile {...this.props} /> }
}

const mapStateToProps = (state) => ({ 
    profile: state.profilePage.profile, 
    pageKey: state.profilePage.pageKey,
    status: state.profilePage.status
})

export default compose(
    connect(mapStateToProps, { getUserThunk, getUserStatusThunk, updateUserStatusThunk }), // withAuthRedirect,
        withRouter)(ProfileContainer) 