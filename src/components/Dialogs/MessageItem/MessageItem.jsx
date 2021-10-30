import classes from './MessageItem.module.css'
import { Field, Form, Formik } from 'formik'
import UserPhoto from '../../commons/userPhotoAndName/UserPhoto'
import UserName from '../../commons/userPhotoAndName/UserName'
import Preloading from '../../commons/Preloading'


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

    console.log('MessageItem', props)
    
    return <>
        <h1 className={classes.h1}>Messages</h1>
        { (props.profile &&  !props.isOwner)
            ? <div className={classes.message}> 
            { props.isPreloadingMessages 
                ? <Preloading />
                : <>
                    <div className={classes.userData}>
                        <div className={classes.userPhoto}>
                            <UserPhoto pageKey={props.pageKey} photoSmall={props.profile.photos.small} userId={props.profile.userId} />                                                                  
                        </div>
                        <UserName pageKey={props.pageKey} name={props.profile.fullName} userId={props.profile.userId} 
                            nameLink={classes.nameLink} className={classes.userName} />
                        
                    </div> 
                    <div className={classes.messagesItems} >
                        { props.messagesData.map( (el, index, arr) => 
                        <div className={el.senderId === props.userId ? classes.messagesItemsUser : classes.messagesItemsOwner}>
                            <div key={el.id}>
                                { (index === 0  || 
                                    arr[index].addedAt.slice(0, 10) !== arr[index - 1].addedAt.slice(0, 10) )                                  
                                    && <div className={el.senderId === props.userId ? classes.messageDateUser : classes.messageDateOwner}>
                                        {arr[index].addedAt.slice(0, 10)}
                                    </div> 
                                }
                                <div className={el.senderId === props.userId ? classes.itemUser : classes.itemOwner}>
                                    <div className={el.senderId === props.userId ? classes.senderNameUser : classes.senderNameOwner}>
                                        {el.senderName}   
                                    </div>                                    
                                    <div className={el.senderId === props.userId ? classes.bodyUser : classes.bodyOwner}>
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
                </>  }
            </div>
                    
            : <div className={classes.warning}> Press 'Start chat' to start chatting </div>
        }
    </>
}

export default MessageItem

