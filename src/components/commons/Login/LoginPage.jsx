import { Formik, Field, Form } from 'formik'
import classes from './LoginPage.module.css'

const LoginPage = () => {
    return (
        <div className={classes.loginForm}>
            <h1>LOGIN</h1>
            <Formik initialValues={{ name: "", email: "" }}
                onSubmit={async values => {
                    await new Promise(resolve => setTimeout(resolve, 500));
                    alert(JSON.stringify(values, null, 2));
                }} >
                <Form>
                    <div className={classes.loginField}>
                        <Field name="name" type="text" placeholder='Name' className={classes.loginNeme} />
                    </div>
                    <div className={classes.loginField}>
                        <Field name="email" type="email" placeholder='Email' className={classes.loginEmail} />
                    </div>
                    <div className={classes.loginField}>
                        <Field name="password" type="text" placeholder='Password' className={classes.loginPassword}/>
                    </div>
                    <div className={classes.loginField}>
                        <Field name="rememberMe" type="checkbox" className={classes.loginCheckbox} /> Remember me
                    </div>
                    <div className={classes.loginField}>
                        <button type="submit" className={classes.loginSubmit} >Submit</button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default LoginPage

