import { Route } from 'react-router-dom'
import './App.css'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import Header from './components/Header/Header'
import Music from './components/Music/Music'
import Nav from './components/Nav/Nav'
import NewsContainer from './components/News/NewsContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import Settings from './components/Settings/Settings'
import SidebarContainer from './components/Sidebar/SidebarContainer'
import UsersContainer from './components/Users/UsersContainer'


const App = () => {

    return (
        <div className='app_psymyslium'>
            <Header />
            <Nav />
            <div className='app_psymyslium-content'>                
                <Route path='/dialogs' render={() => <DialogsContainer />} />
                <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
                <Route path='/news' render={() => <NewsContainer />} />
                <Route path='/music' component={Music} />
                <Route path='/settings' component={Settings} />
                <Route path='/users' render={ () => <UsersContainer /> } />
            </div>                       
            <div><SidebarContainer /></div>             
        </div>
    );
}

export default App;