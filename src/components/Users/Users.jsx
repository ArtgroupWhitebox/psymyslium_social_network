import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Users.module.css'
import * as axios from 'axios'
import avatar from '../../assets/images/Nastay.jpg'

class Users extends React.Component {

    // если компонента constructor не содержит ничего кроме вызова родительской компоненты super,
    // то ее можно не писать, она применяется по умолчанию
    // constructor(props) {
    //     super(props)        
    // }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        }
        )
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        }
        )
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div className={classes.itemUsers}>
                <div> {
                    pages.map(pageNumber => {
                        return <span key={pageNumber} className={this.props.currentPage === pageNumber ? classes.selectedPage : undefined} 
                            onClick={(event) => { this.onPageChanged(pageNumber) }}> {pageNumber}
                        </span>
                    }
                    )
                }
                </div>
                {
                    this.props.usersData.map(user => <div key={user.id}>
                        <div className={classes.itemBlock}>
                            <div className={classes.item}>
                                <div className={classes.userAvatar}>
                                    <NavLink to={'/users/' + user.id}>
                                        <img src={user.photos.small != null ? user.photos.small : avatar} className={classes.avatar} />
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
                                <div>Status: {user.status != null ? user.status : 'Всем привет!'}</div>
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