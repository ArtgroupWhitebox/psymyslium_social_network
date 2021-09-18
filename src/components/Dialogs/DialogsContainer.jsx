import { connect } from 'react-redux'
import { compose } from 'redux'
import React from 'react'
import Preloading from '../commons/Preloading'
import { addMessageThunk, clearMessagesThunk, getUserMessagesThunk, getUsersDialogsThunk, startDialogThunk } from '../../redux/dialogs_reducer'
import withAuthRedirect from '../commons/Redirect/withAuthRedirect'
import Dialogs from './Dialogs'
import { getUserThunk } from '../../redux/profile_reducer'


class DialogsContainer extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getUsersDialogsThunk(this.props.currentPage, this.props.pageSize)
        this.props.getUserMessagesThunk(this.props.match.params.userId)
        this.props.getUserThunk(this.props.match.params.userId)
    }

    componentDidUpdate(prevProps, prevState) {        
        (prevProps.match.params.userId !== this.props.match.params.userId) && 
        this.props.getUserMessagesThunk(this.props.match.params.userId)
        this.props.getUserThunk(this.props.match.params.userId)
    }

    onPageChanged = (pageNumber) => {
        this.getUsersDialogsThunk(pageNumber, this.props.pageSize)
    }
    
    render() {
        return <>
            { this.props.isPreloading 
            ? <Preloading /> 
            : <Dialogs {...this.props} userId={+this.props.match.params.userId} onPageChanged={this.onPageChanged} />}
        </>
    }
}

const mapStateToProps = (state) => {
    return (
        {
            dialogsData: state.dialogsPage.dialogsData,
            messagesData: state.dialogsPage.messagesData,
            pageKey: state.dialogsPage.pageKey,
            usersData: state.usersPage.usersData,
            profile: state.profilePage.profile
        }
    )
}

export default compose(
    connect(mapStateToProps, {startDialogThunk, getUsersDialogsThunk, addMessageThunk, clearMessagesThunk,
         getUserMessagesThunk, getUserThunk}),
    withAuthRedirect)(DialogsContainer) 
    
    