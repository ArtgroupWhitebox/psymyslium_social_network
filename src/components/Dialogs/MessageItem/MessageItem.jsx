import classes from './MessageItem.module.css'
import { Field, Form, Formik } from 'formik'
import UserPhoto from '../../commons/userPhotoAndName/UserPhoto'
import UserName from '../../commons/userPhotoAndName/UserName'


const AddMessagesText = (props) => {

    console.log(props)
    
    return <Formik initialValues={{ body: '' }} onSubmit={props.submitForm}>
        <Form>
            <div>
                <div>
                    <Field name='body' component='textarea' placeholder='New message' className={classes.input}/>
                </div>
                <div>
                    <button type='submit' className={classes.buttonSubmit}> Send </button>
                </div>        
            </div> 
        </Form>
    </Formik> 
}

const MessageItem = (props) => {

    const submitForm = (values, actions) => {
        props.addMessageThunk(props.userId, values.body)
        actions.resetForm({ body: '' })
    } 
    
    const userItem = props.profile

    return (
        userItem  
        ? <div className={classes.message}> 
            <div className={classes.userData}>
                <div className={classes.userPhoto}>
                    <UserPhoto pageKey={props.pageKey} photoSmall={userItem.photos.small} userId={userItem.userId} />                                                                  
                </div>
                <div className={classes.userName}>
                    <UserName pageKey={props.pageKey} name={userItem.fullName} userId={userItem.userId} />
                </div>
            </div> 
            <div className={classes.messagesItems} >
                { props.messagesData.map( el => 
                    <div key={el.id}> 
                        <div className={classes.item}>
                            {el.body}
                        </div>
                    </div>
                )}
            </div>           
            <AddMessagesText submitForm={submitForm} className={classes.addMessageSubmit} />
        </div>
        : <div className={classes.warning}> Select a user to start a chat </div>
    )
}

export default MessageItem

