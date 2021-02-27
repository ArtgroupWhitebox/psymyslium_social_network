import { Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Nav from './components/Nav/Nav';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import Sidebar from './components/Sidebar/Sidebar';

const App = (props) => {

    return (
        <div className='app_psymyslium'>
            <Header />
            <Nav />
            <div className='app_psymyslium-content'>
                <Route path='/dialogs' render={() => <Dialogs dialogsPage={props.state.dialogsPage}
                    dispatch={props.dispatch} newMessageText={props.state.dialogsPage.newMessageText} />} />
                <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />} />
                <Route path='/news' render={() => <News newsPage={props.state.newsPage} />} />
                <Route path='/music' component={Music} />
                <Route path='/settings' component={Settings} />
            </div>
            <Sidebar sidebar={props.state.sidebar} />
        </div>
    );
}

export default App;