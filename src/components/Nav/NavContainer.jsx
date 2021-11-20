import { connect } from "react-redux"
import Nav from "./Nav"

const NavContainer = ({startUserId}) => {

    return <Nav startUserId={startUserId} />
}

const mapStateToProps = (state) => ({
    startUserId: state.dialogsPage.startUserId
})

export default connect( mapStateToProps, {} )( NavContainer ) 
