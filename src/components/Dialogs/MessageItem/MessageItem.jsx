import classes from './MessageItem.module.css'
import { Field, Form, Formik } from 'formik'
import UserPhoto from '../../commons/userPhoto/UserPhoto'
import UserName from '../../commons/UserName'


const AddMessagesText = (props) => {

    console.log(props)
    
    return <Formik initialValues={{ body: '' }} onSubmit={props.submitForm}>
        <Form>
            <div>
                <div>
                    <Field name='body' component='textarea' pleysholder='Новое сообщение' className={classes.input}/>
                </div>
                <div>
                    <button type='submit' className={classes.buttonSubmit}> Отправить </button>
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
    
    const userItem = (props.dialogsData.find(item => item.id === props.userId))
        || (props.usersData.find(item => item.id === props.userId))

    return (
        userItem ? <div className={classes.message}>            
            <div className={classes.userData}>
                <div className={classes.userPhoto}>
                    <UserPhoto pageKey={props.pageKey} photosSmall={userItem.photos.small} userId={userItem.id} />                                                                  
                </div>
                <div className={classes.userName}>
                    <UserName pageKey={props.pageKey} fullName={userItem.userName || userItem.name} userId={userItem.id} />
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
        : <div>Выберите пользователя для начала диалога</div>
    )
}

export default MessageItem

