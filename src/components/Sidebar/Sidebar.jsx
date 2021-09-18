import MyFriend from './MyFriend/MyFriend'
import classes from './Sidebar.module.css'
import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { compose } from 'redux'
import { usersAPI } from '../axiosAPI/api'
import { ButtonAqua } from '../Button/Button'
import Preloading from '../commons/Preloading'

const Sidebar = (props) => {

    const [friends, setFriends] = useState([])
    const [nextPage, setNextPage] = useState(1)
    const [friendsTotalCount, setFriendsTotalCount] = useState(1)
    const [isLoading, setIsLoading] = useState(true) 

    console.log(friends)

    const setNextPartFriends = () => {
        setIsLoading(true)        
        usersAPI.getFrends(nextPage).then(data => { 
            setNextPage(nextPage+1)
            setFriends([...friends, ...data.items])
            setFriendsTotalCount(data.totalCount) 
            setIsLoading(false)         
        })
    }

    useEffect(() => {
        setIsLoading(true)
        setNextPartFriends()
    }, [])

    
    return <div className={classes.sidebar}>
        <div className={classes.itemFriends}>
            <h1>Friends</h1>
        </div>

        <div>
            { friends.map( item => <div key={item.id}>
                    <MyFriend id={item.id} pageKey={props.pageKey} name={item.name} photoSmall={item.photos.small} />
                </div>
            )} 
        </div>
        <div className={classes.text}>{friends.length} / {friendsTotalCount}</div>
            { isLoading ? <Preloading /> 
            : <ButtonAqua disabled={ friends.length >= friendsTotalCount && true } onClick = {setNextPartFriends} value={friends.length < friendsTotalCount ? 'More' : 'End'} /> 
        }    
    </div>
}

const mapStateToProps = (state) => {   

    return (
        { pageKey: state.sidebar.pageKey
        }
    )
}

export default compose(
    connect(mapStateToProps))
    (Sidebar)