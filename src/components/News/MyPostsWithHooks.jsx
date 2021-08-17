import { Field, Form, Formik } from "formik"
import { useState } from "react"
import classes from './MyPosts.module.css'

const MyPostsWithHooks = () => {

    const [isAddPost, setIsAddPost] = useState(false)
    const [posts, setPosts] = useState([])
    const [updatePostsItemIndex, setUpdatePostsItemIndex] = useState(null)
    const [text, setText] = useState('')
    const [image, setImage] = useState('')
    const [itemItem, setItemItem] = useState('')
    const [isEditPost, setIsEditPost] = useState(false)

    const activateIsAddPost = () => {
        setIsAddPost(true)
        setUpdatePostsItemIndex(null)
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

    const activateIsEditPost = (item, itemItem, index) => {
        console.log(item)
        setIsEditPost(true)
        setText(item.post)
        setImage(item.file)
        setItemItem(itemItem)
        setUpdatePostsItemIndex(index)
    }

    const updatePostSubmit = (values, actions) => {
        // posts.splice(updatePostsItemIndex, updatePostsItemIndex, {file: image, post: values.post})
        posts[updatePostsItemIndex] = {file: image, post: values.post}
        setPosts([ ...posts])
        setText('')
        setImage('')
        setIsAddPost(false)
        setUpdatePostsItemIndex(null)
    }

    const deActivateIsAddPost = () => {
        setIsAddPost(false)
    }    

    const activatePostEdit = () => {
        setIsAddPost(true)        
        setIsEditPost(false)    
    }

    const activatePostDelete = () => {
        posts.splice(updatePostsItemIndex, 1)
        // itemItem === text && (posts[updatePostsItemIndex] = {file: image, post: ''})
        // itemItem === image && (posts[updatePostsItemIndex] = {file: '', post: text})
        setPosts([ ...posts])
        setText('')
        setImage('')
        setIsEditPost(false)  
    }    

    return <>
        <button onClick={activateIsAddPost}>Добавить пост</button>
        { isAddPost && 
            <Formik initialValues={{file: '', post: text }} onSubmit={!updatePostsItemIndex ? postSubmit : updatePostSubmit }>
                <Form>
                    <>                        
                        <div> 
                            <img src={image || ''} className={classes.image} />
                        </div>
                        <label className={classes.on_hover}>
                            <Field name='file' type='file' onChange={(event) => {onImageSelected(event)}} />
                            <span className={classes.span}>Заменить фото</span>
                        </label>        
                    </> 
                    <Field name='post' component='textarea' placeholder='Новый пост'/>
                    <button type='submit'>Опубликовать пост</button>
                    <button onClick={deActivateIsAddPost}>Отменить</button>                
                </Form>
            </Formik>
        }        
        { posts  
            && posts.map((item, index) => <div key={index}>
            <div> 
                <img src={item.file || ''} onDoubleClick={() => {activateIsEditPost(item, item.file, index)}} className={classes.imageFile} />
            </div>
            <span onDoubleClick={() => {activateIsEditPost(item, item.post, index)}}> {item.post || ''} </span>
            </div>)
        }
        { isEditPost && <>
                <button onClick={activatePostEdit}>Редактировать пост</button>
                <button onClick={activatePostDelete}>Удалить пост</button>
            </>
        }        
    </>
}

export default MyPostsWithHooks