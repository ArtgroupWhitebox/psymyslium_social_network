import avatarMax from '../assets/images/Max.jpg'
import avatarLena from '../assets/images/Lena.jpg'
import avatarSasha from '../assets/images/Sasha.jpg'
import avatarNastay from '../assets/images/Nastay.jpg'

let initialState = {
    friendsData: [
        { id: 1, name: 'Max', avatar: <img src={avatarMax} /> },
        { id: 2, name: 'Lena', avatar: <img src={avatarLena} /> },
        { id: 3, name: 'Sasha', avatar: <img src={avatarSasha} /> },
        { id: 4, name: 'Nastay', avatar: <img src={avatarNastay} /> }
    ]
}
 
const sidebarReducer = (state=initialState, action) => {

    return {...state}
    
}

export default sidebarReducer