import classes from './MessageItem.module.css'
import { Field, Form, Formik } from 'formik'
import UserPhoto from '../../commons/userPhotoAndName/UserPhoto'
import UserName from '../../commons/userPhotoAndName/UserName'
import Preloading from '../../commons/Preloading'
import { useParams } from 'react-router'


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

    const userId = props.dialogsData[0].id

    const submitForm = (values, actions) => {
        props.addMessageThunk(userId, values.body)
        actions.resetForm({ body: '' })
    } 

    console.log('MessageItem', props)
    
    return <>
        <h1 className={classes.h1}>Messages</h1>
        { props.dialogsData[0] 
            ? <div className={classes.message}> 
                    <div className={classes.userData}>
                        <div className={classes.userPhoto}>
                            <UserPhoto pageKey={props.pageKey} photoSmall={props.dialogsData[0].photos.small} userId={props.dialogsData[0].id } />                                                                  
                        </div>
                        <UserName pageKey={props.pageKey} name={props.dialogsData[0].userName} userId={props.dialogsData[0].id } 
                            nameLink={classes.nameLink} className={classes.userName} />
                        
                    </div> 
                    <div className={classes.messagesItems} >
                        { props.messagesData.map( (el, index, arr) => 
                        <div className={el.senderId === props.dialogsData[0].id ? classes.messagesItemsUser : classes.messagesItemsOwner}>
                            <div key={index}>
                                { (index === 0  || 
                                    arr[index].addedAt.slice(0, 10) !== arr[index - 1].addedAt.slice(0, 10) )                                  
                                    && <div className={el.senderId === props.dialogsData[0].id ? classes.messageDateUser : classes.messageDateOwner}>
                                        {arr[index].addedAt.slice(0, 10)}
                                    </div> 
                                }
                                <div className={el.senderId === props.dialogsData[0].id ? classes.itemUser : classes.itemOwner}>
                                    <div className={el.senderId === props.dialogsData[0].id ? classes.senderNameUser : classes.senderNameOwner}>
                                        {el.senderName}   
                                    </div>                                    
                                    <div className={el.senderId === props.dialogsData[0].id ? classes.bodyUser : classes.bodyOwner}>
                                        {el.body}  
                                    </div>
                                    <div className={classes.messageTime}>
                                        {el.addedAt.slice(11, 16)}   
                                    </div>                                                                        
                                </div>
                            </div>
                        </div>
                        )}
                    </div>           
                    <AddMessagesText submitForm={submitForm} className={classes.addMessageSubmit} />
                </div>
            : <div className={classes.warning}> Press 'Start chat' to start chatting </div>
        } 
    </>
}

export default MessageItem

