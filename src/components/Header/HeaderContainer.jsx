import React from "react"
import { connect } from "react-redux"
import { logoutThunk, setIsLoginModal } from "../../redux/authMe_reducer"
import Header from "./Header"


class HeaderContainer extends React.Component {

    onClickAuthorization = () => {
        this.props.setIsLoginModal(true)
    }
    
    render() {
       return <Header {...this.props} onClickAuthorization={this.onClickAuthorization} />
    }
}

const mapStateToProps = (state) => {

    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,
        pageKey: state.auth.pageKey
    }    
} 

export default connect(mapStateToProps, {logoutThunk, setIsLoginModal})(HeaderContainer)

