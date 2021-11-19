import { Formik, Field, Form } from 'formik'
import { ButtonAqua } from '../../Button/Button'
import classes from './LoginPage.module.css'

export const LoginFormik = (props) => {
    console.log(props)
    return <div>
        <Formik initialValues={{ email: '', password: '' }} onSubmit={props.hendleSubmit} >
                <Form className={classes.form}>
                    <div className={classes.loginField}>
                        <Field name="email" type="email" placeholder='Email' className={classes.loginEmail} />
                    </div>
                    <div className={classes.loginField}>
                        <Field name="password" type="password" placeholder='Password' className={classes.loginPassword} />
                    </div>
                    <ButtonAqua type={"submit"} value={"Отправить"} />                
                </Form>
        </Formik>
    </div>
}
