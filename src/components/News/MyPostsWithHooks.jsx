import { Field, Form, Formik } from "formik"
import { useEffect, useState } from "react"
import classes from './MyPosts.module.css'
import iconTrash from '../../../src/assets/images/icons8_trash.png'
import iconEdit from '../../../src/assets/images/icons8_edit.png'
import iconFile from '../../../src/assets/images/icons8_file.png'
import iconAdd from '../../assets/images/icons8_add.png'
import iconConfirm from '../../../src/assets/images/icons8_confirm.png'
import iconClose from '../../../src/assets/images/icons8_close.png'
import { postsAPI } from "../axiosAPI/api_crud"
import Preloading from '../commons/Preloading'
import imgLoader from '../../assets/images/imgLoader.gif'


const MyPostsWithHooks = () => {

    const [isAddPost, setIsAddPost] = useState(false)
    const [posts, setPosts] = useState([])
    const [id, setId] = useState(null)
    const [text, setText] = useState('')
    const [image, setImage] = useState('') 
    const [isLoading, setIsLoading] = useState(true) 
    const [isLoadingFile, setIsLoadingFile] = useState(false)  
    

    useEffect(() => {
        postsAPI.getPosts().then(response => { 
            setPosts(response.data)
            setIsLoading(false)
        })
    }, []) 

    
    const activateIsAddPost = () => {
        setId(null)
        setIsAddPost(true)
        setText('')
        setImage('')
    }

    const onImageSelected = (event) => {
        setIsLoadingFile(true)
        const file = event.target.files[0]
        postsAPI.uploadFile(file).then(response => { 
            setImage(response.data.data.url)
            setIsLoadingFile(false)
        })
    } 

    const addPostSubmit = (values) => {
        setIsLoading(true)        
        postsAPI.createPost(image, values.post).then(() => {
            postsAPI.getPosts().then(response => { 
                setPosts(response.data)
                setIsLoading(false)
                setIsAddPost(false)
            })
        }) 
    } 

    const updatePostSubmit = (values, actions) => {
        setIsLoading(true)
        postsAPI.putPost(id, image, values.post).then(() => {
            postsAPI.getPosts().then(response => { 
                setPosts(response.data)
                setIsLoading(false)
            })
        })
        setId(null)
        setIsAddPost(false)        
    }

    const deActivateIsAddPost = () => {
        setIsAddPost(false)
        setIsLoading(false)
    }    

    const activatePostEdit = (item, id) => {
        setId(id)
        setIsAddPost(true) 
        console.log(id)
        setText(item.post)
        setImage(item.file)
    }

    const activatePostDelete = (id) => {
        setIsLoading(true)
        postsAPI.deletePost(id).then(() => {
            postsAPI.getPosts().then(response => { 
                setPosts(response.data)
                setIsLoading(false)
            })
        })
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
        { isAddPost && 
            <div className={classes.formModal}>
                <Formik initialValues={ {post: text} } onSubmit={ id === null ? addPostSubmit : updatePostSubmit }>
                    <Form > 
                        <div className={classes.form}>
                            <div className={classes.input_block}>
                                { isLoadingFile ? <Preloading processingGif={imgLoader}/> 
                                : <img alt='' src={image || iconFile} className={classes.image} />
                                }
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
            </div>}
        <div className={classes.header_posts}>
            <h1 className={classes.h1}>Posts</h1>
            <div className={classes.button_block}>
                <Button onClick={activateIsAddPost} iconImage={iconAdd} label={'ADD POST'}/>
            </div>
        </div>
        <div className={classes.posts_band}>
            { isLoading && <Preloading processingGif={imgLoader} /> }
            { posts && posts.map((item, index) => <div key={index} className={classes.post_block}>
                    <div className={classes.item_block}>
                        {item.file && 
                            <div>
                                <img alt='' src={item.file} className={classes.imageFile} />                        
                            </div>
                        }
                        {item.post && 
                            <div >
                                <div className={classes.text}> {item.post} </div>                        
                            </div>
                        }  
                    </div> 
                    <Button onClick={() => {activatePostEdit(item, item.id)}} iconImage={iconEdit} />
                    <Button onClick={() => {activatePostDelete(item.id)}} iconImage={iconTrash} />    
                </div>).reverse()
            }
        </div>
    </>     
}

export default MyPostsWithHooks
