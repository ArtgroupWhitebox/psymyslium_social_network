import { Formik, Field, Form } from 'formik'
import { connect } from 'react-redux'
import { deactivateProfileEditModeThunk, updataProfilePersonalThunk } from '../../redux/profile_reducer'
import classes from '../Profile/ProfileInfo/ProfileInfo.module.css'

const PersonalDataEditFormik = (props) => {
    return <Formik initialValues={{ fullName: props.profile.fullName, aboutMe: props.profile.aboutMe, 
        lookingForAJob: props.profile.lookingForAJob, lookingForAJobDescription: props.profile.lookingForAJobDescription} }
                onSubmit={props.onSubmit} >
            <Form>                        
                <div className={classes.editField}>
                    <Field name="fullName" type="text" placeholder='Full Name' className={classes.editText} />
                </div>
                <div className={classes.editField}>
                    <Field name="aboutMe" type="text" placeholder='About me' className={classes.editText} />
                </div>
                <div className={classes.editField}>
                    <Field name="lookingForAJob" type="checkbox" className={classes.editCheckbox} /> Looking for a job
                </div>
                <div className={classes.editField}>
                    <Field name="lookingForAJobDescription" type="text" placeholder='Looking for a job description' className={classes.editText} />
                </div>                               
                <div className={classes.editField}>
                    <button type="submit" className={classes.hendleSubmit} > Сохранить </button>
                </div>
            </Form>
    </Formik>
}

const ProfilePersonalDataEdit = (props) => {
    
    const onSubmit = (formData) => {
        props.updataProfilePersonalThunk(props.userId, formData.fullName, formData.aboutMe, formData.lookingForAJob, formData.lookingForAJobDescription)
        props.deactivateProfileEditModeThunk()      
    }    
    return <div className={classes.personalData}>                        
            <PersonalDataEditFormik onSubmit={onSubmit} profile={props.profile} />
    </div>
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    profileDataEdit: state.profilePage.profileDataEdit,
    userId: state.profilePage.profile.userId
})

export default connect(mapStateToProps, { updataProfilePersonalThunk, deactivateProfileEditModeThunk })(ProfilePersonalDataEdit)