import { Field, Form, Formik } from "formik"
import { useState } from "react"
import classes from './MyPosts.module.css'
import iconTrash from '../../../src/assets/images/icons8_trash.png'
import iconEdit from '../../../src/assets/images/icons8_edit.png'
import iconFile from '../../../src/assets/images/icons8_file.png'
import iconAdd from '../../../src/assets/images/icons8_add.png'
import iconConfirm from '../../../src/assets/images/icons8_confirm.png'
import iconClose from '../../../src/assets/images/icons8_close.png'


const MyPostsWithHooks = () => {

    const [isAddPost, setIsAddPost] = useState(false)
    const [posts, setPosts] = useState([])
    const [updatePostsItemIndex, setUpdatePostsItemIndex] = useState(null)
    const [text, setText] = useState('')
    const [image, setImage] = useState('')

    const activateIsAddPost = () => {
        setUpdatePostsItemIndex(null)
        setIsAddPost(true)
        setText('')
        setImage('')
    }

    const onImageSelected = (event) => {
        setImage(URL.createObjectURL(event.target.files[0]))
        console.log(URL.createObjectURL(event.target.files[0]))
    }

    const postSubmit = (values, actions) => {
        console.log(actions)
        setPosts([{file: image, post: values.post}, ...posts]) 
        setText('')
        setImage('')
        setIsAddPost(false)
    }

    const updatePostSubmit = (values, actions) => {
        // posts.splice(updatePostsItemIndex, updatePostsItemIndex, {file: image, post: values.post})
        posts[updatePostsItemIndex] = {file: image, post: values.post}
        setPosts([ ...posts])
        setText('')
        setImage('')
        setUpdatePostsItemIndex(null)
        setIsAddPost(false)        
    }

    const deActivateIsAddPost = () => {
        setIsAddPost(false)
    }    

    const activatePostEdit = (item, index) => {
        setUpdatePostsItemIndex(index) 
        setIsAddPost(true) 
        console.log(index)
        setText(item.post)
        setImage(item.file)
    }

    const activatePostDelete = (index) => {
        posts.splice(index, 1)
        setPosts([ ...posts])
        setImage('')
        setText('')
    }  
    
    const Button = ({onClick, label, iconImage, type}) => {
        return  <button onClick={onClick} type={type} className={label ? classes.button_span : classes.button}> 
                { label && <span className={classes.label}>{label}</span> } 
            <img alt='' src={iconImage} className={label ? classes.icon_span : classes.icon } />
        </button>
    }

    return <>
        <div className={classes.button_block}>
            <Button onClick={activateIsAddPost} iconImage={iconAdd} label={'ADD POST'}/>
        </div>
        { isAddPost && 
            <Formik initialValues={ {post: text} } onSubmit={ updatePostsItemIndex === null ? postSubmit : updatePostSubmit }>
                <Form > 
                    <div className={classes.form}>
                        <div className={classes.input_block}>
                            <img alt='' src={image || iconFile} className={classes.image} />
                            <label className={classes.button_span}>
                                <input className={classes.input} type='file' onChange={(event) => {onImageSelected(event)}} />
                                <span className={classes.label}>SELECT FILE</span>
                                <img alt='Add' src={iconAdd} className={classes.icon_span} />
                            </label>        
                        </div>
                        <div className={classes.field_block}>
                            <Field name='post' component='textarea' placeholder='New post' className={classes.field} />
                            <Button type={'submit'} iconImage={iconConfirm} />
                            <Button onClick={deActivateIsAddPost} iconImage={iconClose} /> 
                        </div>
                    </div>                    
                </Form>
            </Formik> 
        }
        {posts && posts.map((item, index) => 
            <div key={index} className={classes.post_block}>
                <div className={classes.item_block}>
                    {item.file &&
                        <div>
                            <img alt='' src={item.file} className={classes.imageFile} />                        
                        </div>
                    }
                    {item.post &&
                        <div className={classes.text}>
                            <span> {item.post} </span>                        
                        </div>
                    }  
                </div> 
                <Button onClick={() => {activatePostEdit(item, index)}} iconImage={iconEdit} />
                <Button onClick={() => {activatePostDelete(index)}} iconImage={iconTrash} />    
            </div>)
        }
    </>
}

export default MyPostsWithHooks
