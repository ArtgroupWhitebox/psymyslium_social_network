import MyFriend from './MyFriend/MyFriend'
import classes from './Sidebar.module.css'
import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { compose } from 'redux'
import { usersAPI } from '../axiosAPI/api'
import { ButtonAqua } from '../Button/Button'
import Preloading from '../commons/Preloading'
import { getIsDisabled } from '../../redux/users_selector'
import ScanByNickname from '../commons/ScanByNickname/ScanByNickname'

const Sidebar = ({pageKey, isDisabled}) => {

    const [friends, setFriends] = useState([])
    const [nextPage, setNextPage] = useState(1)
    const [currentPage, setCurrentPage] = useState(null)
    const [friendsTotalCount, setFriendsTotalCount] = useState(1)
    const [isLoading, setIsLoading] = useState(true)
    
    console.log('friends:', friends)

    useEffect(() => {
        setIsLoading(true)
        onUpdateFriends(1, [])
    }, [isDisabled])

    const onUpdateFriends = (page, currentFriends) => {
        setIsLoading(true)
        usersAPI.getUsers(page, 10, null, true).then(data => {
            setCurrentPage(page)   
            setNextPage(page + 1)
            setFriends([...currentFriends, ...data.items])
            setFriendsTotalCount(data.totalCount) 
            setIsLoading(false)         
        })
    }
        
    return <div className={classes.sidebar}>
        <div className={classes.itemFriends}>
            <h1>Friends</h1>
        </div >
        <ScanByNickname pageKey={pageKey} />
        <div className={classes.friends}>
            { friends.map( item => <div key={item.id}>
                    <MyFriend id={item.id} pageKey={pageKey} name={item.name} photoSmall={item.photos.small}
                    isFollowed={item.followed} currentPage={currentPage } />
                </div>
            )} 
        </div>
        <div className={classes.text}>{friends.length} / {friendsTotalCount}</div>
            { isLoading ? <Preloading /> 
            : <ButtonAqua disabled={ friends.length >= friendsTotalCount && true } onClick = {() => onUpdateFriends(nextPage, friends)} value={friends.length < friendsTotalCount ? 'More' : 'End'} /> 
        }    
    </div>
}

const mapStateToProps = (state) => {   

    return { 
        pageKey: state.sidebar.pageKey,
        isDisabled: getIsDisabled(state)
    }
}

export default compose(
    connect(mapStateToProps))
    (Sidebar)