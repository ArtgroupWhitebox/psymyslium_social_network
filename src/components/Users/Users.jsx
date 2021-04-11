// import { NavLink } from 'react-router-dom'
import classes from './Users.module.css'
// import avatar from '../../assets/images/Nastay.jpg'
import UserPhoto from '../commons/userPhoto/UserPhoto'
import UserName from '../commons/UserName'

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    console.log(pagesCount)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={classes.itemUsers}>
            <div> {
                pages.map(pageNumber => {
                    return <span key={pageNumber} className={props.currentPage === pageNumber ? classes.selectedPage : undefined}
                        onClick={(event) => { props.onPageChanged(pageNumber) }}> {pageNumber}
                    </span>
                }
                )
            }
            </div>
            {
                props.usersData.map(user => <div key={user.id}>
                    <div className={classes.itemBlock}>
                        <div className={classes.item}>
                            <div className={classes.userAvatar}>
                                <UserPhoto  pageKey={props.pageKey} photosSmall={user.photos.small} userId={user.id}/>                               
                            </div>
                            <div className={classes.userName}>
                                <UserName pageKey={props.pageKey} fullName={user.name} userId={user.id}/>
                            </div>
                            <div>
                                {user.followed
                                    ? <button onClick={() => { props.follow(user.id) }} className={classes.followButton} >
                                        Follow </button>
                                    : <button onClick={() => { props.unFollow(user.id) }} className={classes.unFollowButton} >
                                        Unfollow </button>}
                            </div>
                        </div>
                        <div className={classes.personalData}>
                            <div>Status: {user.status ? user.status : 'Всем привет!'}</div>
                            {/* <div>Location: 
                        {user.location.сity.cityName}, {user.location.country.countryName}
                    </div> */}
                        </div>
                    </div>

                </div>)
            }
        </div>
    )
}

export default Users