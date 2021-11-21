import { Formik, Field, Form } from 'formik'
import { ButtonAqua, ButtonYellow } from '../../Button/Button'
import classes from './LoginPage.module.css'

export const LoginFormik = ({hendleSubmit, setIsLoginModal}) => {
    return <div>
        <Formik initialValues={{ email: '', password: '' }} onSubmit={hendleSubmit} >
                <Form className={classes.form}>
                    <div className={classes.loginField}>
                        <Field name="email" type="email" placeholder='Email' className={classes.loginEmail} />
                    </div>
                    <div className={classes.loginField}>
                        <Field name="password" type="password" placeholder='Password' className={classes.loginPassword} />
                    </div>
                    <div className={classes.button_blok}>
                        <ButtonYellow type={"submit"} value={"Send"} />
                        <ButtonAqua  type={"button"} onClick={() => setIsLoginModal(false)} value={"Сancel"} />
                    </div>                
                </Form>
        </Formik>
    </div>
}
