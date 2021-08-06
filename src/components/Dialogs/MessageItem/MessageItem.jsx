import classes from './MessageItem.module.css'
import { Form, Formik, Field } from 'formik'
import UserPhoto from '../../commons/userPhoto/UserPhoto'
import UserName from '../../commons/UserName'


const AddMessagesText = (props) => {
    return <Formik initialValues={{ body: '' }} onSubmit = {props.submitForm}>
        <Form>
            <div className={classes.messagesItems}>
                <div>
                    <Field name='body' type='text' pleysholder='Новое сообщение'/>
                </div>

                <div>
                    <button type='submit'> Add message </button>
                </div>        
            </div>
        </Form>
    </Formik> 
}

const MessageItem = (props) => {

    const submitForm = (value) => {
        props.addMessageThunk(value.body)
    }  
    
    const userItem = (props.dialogsData.find(item => item.id === props.userId))
        || (props.usersData.find(item => item.id === props.userId))

    return (
        userItem ? <div className={classes.dialog} >            
            <div>
                <div>
                    <UserPhoto pageKey={props.pageKey} photosSmall={userItem.photos.small} userId={userItem.id}/>                                                                  
                </div>
                <div>
                    <UserName pageKey={props.pageKey} fullName={userItem.userName || userItem.name} userId={userItem.id}/>
                </div>
            </div> 

            <AddMessagesText submitForm = {submitForm} /> 

            {/* { props.messagesData.map( el => <div key={el.messageId}> 
                    <div className={classes.message}>
                        {props.body}
                    </div>
                </div>
            )} */}
            </div>
        : <div>Выберите пользователя для начала диалога</div>
    )
}

export default MessageItem

