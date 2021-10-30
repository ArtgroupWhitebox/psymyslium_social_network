import { connect } from "react-redux"
import { compose } from "redux"
import { followThunk, unFollowThunk } from "../../../redux/users_reducer"
import { getIsDisabled, getIsFriends, getPageSize, getTurnByName } from "../../../redux/users_selector"
import Subscribe from "./Subscribe"


const SubscribeContainer = (props) => {
    
    console.log('SubscribeContainer' , props)

    const onClickUnFollowed = (userId) => {
        props.unFollowThunk(props.currentPage, props.pageSize, props.turnByName, props.isFriends, userId)
    }

    const onClickFollowed = (userId) => {
        props.followThunk(props.currentPage, props.pageSize, props.turnByName, props.isFriends, userId)
    }

    return <Subscribe isFollowed={props.isFollowed || props.isFollowedUser } userId={props.userId} 
        isDisabled={props.isDisabled} 
        onClickUnFollowed={onClickUnFollowed }
        onClickFollowed={onClickFollowed }  
    />
}

const mapStateToProps = (state) => ({
    isDisabled: getIsDisabled(state),
    pageSize: getPageSize(state),
    isFriends: getIsFriends(state),    
    turnByName: getTurnByName(state)
})

export default compose( connect( mapStateToProps, { unFollowThunk, followThunk,
    })) ( SubscribeContainer )