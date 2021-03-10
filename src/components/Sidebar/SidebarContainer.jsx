import StoreContext from "../StoreContext"
import Sidebar from "./Sidebar"


const SidebarContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    return (
                        <Sidebar friendsData={store.getState().sidebar.friendsData} />
                    )
                }
            }
        </StoreContext.Consumer>        
    )
}
export default SidebarContainer;