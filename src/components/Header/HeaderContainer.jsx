import React from "react"
import * as axios from 'axios'
import { connect } from "react-redux"
import { setAuthMeData } from "../../redux/authMe_reducer"
import Header from "./Header"

class HeaderContainer extends React.Component {
    
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response => {
            const {id, email, login} = response.data.data
        
            response.data.resultCode === 0 && this.props.setAuthMeData(id, email, login)
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

