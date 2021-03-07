import { Route } from 'react-router-dom'
import './App.css'
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Nav from './components/Nav/Nav';
import NewsContainer from './components/News/NewsContainer';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import SidebarContainer from './components/Sidebar/SidebarContainer';

const App = (props) => {

    return (
        <div className='app_psymyslium'>
            <Header />
            <Nav />
            <div className='app_psymyslium-content'>                
                <Route path='/dialogs' render={() => <DialogsContainer store={props.store} />} />
                <Route path='/profile' render={() => <Profile store={props.store} />} />
                <Route path='/news' render={() => <NewsContainer store={props.store} />} />
                <Route path='/music' component={Music} />
                <Route path='/settings' component={Settings} />
            </div>            
            <SidebarContainer store={props.store} />
        </div>
    );
}

export default App;