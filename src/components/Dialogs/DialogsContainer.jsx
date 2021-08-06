import { connect } from 'react-redux'
import { compose } from 'redux'
import React from 'react'
import Preloading from '../commons/Preloading'
import { getUsersDialogsThunk, startDialogThunk } from '../../redux/dialogs_reducer'
import withAuthRedirect from '../commons/Redirect/withAuthRedirect'
import Dialogs from './Dialogs'

class DialogsContainer extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getUsersDialogsThunk(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsersDialogsThunk(pageNumber, this.props.pageSize)
    }
    
    render() {
        return <>
            { this.props.isPreloading ? <Preloading /> 
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
            usersData: state.usersPage.usersData
        }
    )
}

export default compose(
    connect(mapStateToProps, {startDialogThunk, getUsersDialogsThunk}),
    withAuthRedirect)(DialogsContainer) 
    
