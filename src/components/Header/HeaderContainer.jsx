import React from "react"
import * as axios from 'axios'
import { connect } from "react-redux"
import { setAuthMeData } from "../../redux/authMe_reducer"
import Header from "./Header"
import { authAPI } from "../axiosAPI/api"

class HeaderContainer extends React.Component {
    
    componentDidMount() {
        authAPI.getAuthMe().then(data => {
            const {id, email, login} = data.data
        
            data.resultCode === 0 && this.props.setAuthMeData(id, email, login)
        })
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

export default connect(mapStateToProps, {setAuthMeData})(HeaderContainer)

