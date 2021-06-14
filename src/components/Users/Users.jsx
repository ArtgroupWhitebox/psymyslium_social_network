import classes from './Users.module.css'
import UserPhoto from '../commons/userPhoto/UserPhoto'
import UserName from '../commons/UserName'
import Paginator from '../commons/Paginator/Paginator'

const Users = (props) => {

    return (
        <div className={classes.itemUsers}>
            <Paginator totalItemsCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage}
                onPageChanged={props.onPageChanged} partSize={20} />
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
                                    ? <button disabled={props.isDisabled.some(id => id === user.id)} onClick={() => { props.unFollowThunk(user.id) }} className={classes.unFollowButton} >
                                    Unfollow </button>
                                    : <button disabled={props.isDisabled.some(id => id === user.id)} onClick={() => { props.followThunk(user.id) }} className={classes.followButton} >
                                    Follow </button> }
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