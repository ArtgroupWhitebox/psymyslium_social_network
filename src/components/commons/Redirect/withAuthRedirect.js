import { connect } from "react-redux"
import { Redirect } from "react-router"

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

const withAuthRedirect = (Component) => {

    const WrapperContainer = (props) => {
       return !props.isAuth ? <Redirect to='/login' /> : <Component {...props} />
    }

    const ConnectedWrapperContainer = connect(mapStateToProps)(WrapperContainer)

    return ConnectedWrapperContainer
}

export default withAuthRedirect