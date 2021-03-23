import { NavLink } from 'react-router-dom'
import classes from './Users.module.css'

let Users = (props) => {
    return (
        <div className={classes.itemUsers}>{
            props.usersData.map(user => <div key={user.id}>
                <div className={classes.itemBlock}>
                    <div className={classes.item}>
                        <div className={classes.userAvatar}>
                            <NavLink to={'/users/' + user.id}> {user.avatar} </NavLink>
                        </div>
                        <div className={classes.userName}>
                            <NavLink to={'/users/' + user.id} activeClassName={classes.activeLink}> {user.name} </NavLink>
                        </div>
                    </div>
                    <div className={classes.personalData}>
                        <div>Status: {user.status}</div>
                        <div>Location: {user.location.сity.cityName}, {user.location.country.countryName}</div>
                    </div>
                </div>
                <div>
                    {user.followed
                        ? <button onClick={() => { props.follow(user.id) }} className={classes.followButton} >
                            Follow </button>
                        : <button onClick={() => { props.unFollow(user.id) }} className={classes.unFollowButton} >
                            Unfollow </button>}
                </div>
            </div>)
        }</div>
    )
}
export default Users