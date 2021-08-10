import { Formik, Field, Form } from 'formik'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { loginThunk } from '../../../redux/authMe_reducer'
import classes from './LoginPage.module.css'

export const LoginFormik = (props) => {
    console.log(props)
    return <Formik initialValues={{ name: "", email: "" }} onSubmit={props.hendleSubmit} >
            <Form>
                <div className={classes.loginField}>
                    <Field name="name" type="text" placeholder='Name' className={classes.loginNeme} />
                </div>
                <div className={classes.loginField}>
                    <Field name="email" type="email" placeholder='Email' className={classes.loginEmail} />
                </div>
                <div className={classes.loginField}>
                    <Field name="password" type="password" placeholder='Password' className={classes.loginPassword} />
                </div>
                <div className={classes.loginField}>
                    <Field name="rememberMe" type="checkbox" className={classes.loginCheckbox} /> Remember me
                </div>
                <div className={classes.loginField}>
                    <button type="submit" className={classes.loginSubmit} >Submit</button>
                </div>
            </Form>
    </Formik>
}

const LoginPage = (props) => {
    const hendleSubmit = (formData) => {
        props.loginThunk(formData.email, formData.password, formData.rememberMe)
    }
    return props.isAuth ? <Redirect to={'/profile'} />
                        : <div className={classes.loginForm}>
                        <h1>LOGIN</h1>
                        <LoginFormik hendleSubmit={hendleSubmit} />
                    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { loginThunk })(LoginPage)