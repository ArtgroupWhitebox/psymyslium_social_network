import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Users.module.css'
import * as axios from 'axios'
import avatar from '../../assets/images/Nastay.jpg'

class Users extends React.Component {

    constructor(props) {
        super(props)

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        }) 
    }
    
    render() {
        return (
            <div className={classes.itemUsers}> {
                this.props.usersData.map(user => <div key={user.id}>
                    <div className={classes.itemBlock}>
                        <div className={classes.item}>
                            <div className={classes.userAvatar}>                                 
                                <NavLink to={'/users/' + user.id}>
                                    <img src={user.photos.small != null ? user.photos.small : avatar} className={classes.avatar}/>
                                </NavLink>
                            </div>
                            <div className={classes.userName}>
                                <NavLink to={'/users/' + user.id} key={user.id} activeClassName={classes.activeLink}>
                                    {user.name} 
                                </NavLink>
                            </div>
                            <div>
                                {user.followed
                                    ? <button onClick={() => { this.props.follow(user.id) }} className={classes.followButton} >
                                        Follow </button>
                                    : <button onClick={() => { this.props.unFollow(user.id) }} className={classes.unFollowButton} >
                                        Unfollow </button>}
                            </div>
                        </div>
                        <div className={classes.personalData}>
                            <div>Status: {user.status != null ? user.status : 'Всем привет!' }</div>
                            {/* <div>Location: 
                                {user.location.сity.cityName}, {user.location.country.countryName}
                            </div> */}
                        </div>
                    </div>
                    
                </div>)
            }</div>
        )
    }
}    
export default Users