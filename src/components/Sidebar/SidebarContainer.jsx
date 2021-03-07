import Sidebar from "./Sidebar";


const SidebarContainer = (props) => {

    return (

        <Sidebar friendsData={props.store.getState().sidebar.friendsData} />
    )
}

export default SidebarContainer;