import { connect } from "react-redux"
import Sidebar from "./Sidebar"


const mapStateToProps = (state) => {
    return (
        {
            friendsData: state.sidebar.friendsData
        }
    )
}

const SidebarContainer = connect(mapStateToProps)(Sidebar)

export default SidebarContainer