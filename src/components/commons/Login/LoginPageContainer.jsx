import { useEffect } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { loginThunk, setIsLoginModal } from '../../../redux/authMe_reducer'
import { LoginFormik } from './LoginPage'
import classes from './LoginPage.module.css'

const LoginPageContainer = ({isLoginModal, loginThunk, setIsLoginModal}) => {
    
    const hendleSubmit = (formData) => {
        loginThunk(formData.email, formData.password)
    }

    useEffect(() => {
        setIsLoginModal(true)
    }, [])

    return <div className={isLoginModal ? classes.loginOverlay : classes.modalClose}
                id='modal_bg' onClick={(e) => e.target.getAttribute('id') === 'modal_bg' && setIsLoginModal(false) }>
            <div className={classes.loginForm} id='form' >
                <h1 className={classes.h1}>Login</h1>
                <LoginFormik hendleSubmit={hendleSubmit} setIsLoginModal={setIsLoginModal}/>
        </div>
    </div>
}

const mapStateToProps = (state) => ({
    isLoginModal: state.auth.isLoginModal
})

export default compose(
    connect(mapStateToProps, { loginThunk, setIsLoginModal })
)(LoginPageContainer) 
