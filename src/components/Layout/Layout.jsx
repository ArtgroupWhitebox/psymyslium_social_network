import { connect } from "react-redux"
import LoginPageContainer from "../commons/Login/LoginPageContainer"
import HeaderContainer from "../Header/HeaderContainer"
import Nav from "../Nav/Nav"
import Sidebar from "../Sidebar/Sidebar"


const Layout = (props) => {
    return <div className='app_psymyslium'>
        <>
            <HeaderContainer />
            <Nav />
            <div>
                {props.route} 
            </div>                   
            <div className='sidebar'>
                <Sidebar />
            </div>
        </>
        {!props.isAuth && <LoginPageContainer /> }
    </div>            
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {}) (Layout)