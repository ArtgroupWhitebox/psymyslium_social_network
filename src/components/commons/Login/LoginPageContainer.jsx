import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { loginThunk, setIsLoginModal } from '../../../redux/authMe_reducer'
import Modal from '../Modal/Modal'
import LoginFormik from './LoginPage'
import classes from './LoginPage.module.css'

const LoginPageContainer = ({isLoginModal, loginThunk, setIsLoginModal}) => {
    
    const hendleSubmit = (formData) => {
        loginThunk(formData.email, formData.password)
    }

    useEffect(() => {
        setIsLoginModal(true)
    }, [])

    return <>
        <Modal className={isLoginModal ? classes.loginOverlay : classes.modalClose} onClickFn={setIsLoginModal}
            argumentOnClickFn={false}>
                <LoginFormik hendleSubmit={hendleSubmit} setIsLoginModal={setIsLoginModal} /> 
        </Modal>
    </>
    
}

const mapStateToProps = (state) => ({
    isLoginModal: state.auth.isLoginModal
})

export default compose(
    connect(mapStateToProps, { loginThunk, setIsLoginModal })
)(LoginPageContainer) 
