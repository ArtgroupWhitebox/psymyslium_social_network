import React from "react"
import { connect } from "react-redux"
import { logoutThunk } from "../../redux/authMe_reducer"
import Header from "./Header"

class HeaderContainer extends React.Component {
    
    render() {
       return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => {

    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,
        pageKey: state.auth.pageKey
    }    
} 

export default connect(mapStateToProps, {logoutThunk})(HeaderContainer)

