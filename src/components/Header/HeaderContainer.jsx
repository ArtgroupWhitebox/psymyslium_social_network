import React from "react"
import { connect } from "react-redux"
import { getAuthMeThunk } from "../../redux/authMe_reducer"
import Header from "./Header"

class HeaderContainer extends React.Component {
    
    componentDidMount() {

      this.props.getAuthMeThunk()  
    }

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

export default connect(mapStateToProps, {getAuthMeThunk})(HeaderContainer)

