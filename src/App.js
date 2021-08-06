import React from 'react'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'
import { compose } from 'redux'
import './App.css'
import LoginPage from './components/commons/Login/LoginPage'
import Preloading from './components/commons/Preloading'
import UserPhotoContainer from './components/commons/userPhoto/UserPhotoContainer'
import DialogItem from './components/Dialogs/DialogItem/DialogItem'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import MessageItem from './components/Dialogs/MessageItem/MessageItem'
import HeaderContainer from './components/Header/HeaderContainer'
import Music from './components/Music/Music'
import Nav from './components/Nav/Nav'
import NewsContainer from './components/News/NewsContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import Settings from './components/Settings/Settings'
import SidebarContainer from './components/Sidebar/SidebarContainer'
import UsersContainer from './components/Users/UsersContainer'
import { initializationSuccessThunk } from './redux/app_reduser'


class App extends React.Component {

    componentDidMount() {
        this.props.initializationSuccessThunk() 
    }

    render() {       

        return (
            !this.props.initialApp ?
            <Preloading />
            : <div className='app_psymyslium'>
                <HeaderContainer />
                <Nav />
                <div className='app_psymyslium-content'>                
                    <Route path='/dialogs/:userId?' component={DialogsContainer} />
                    <Route path='/dialogItem/:userId?' render={() => <DialogItem />} />
                    <Route path='/messagesItem/:userId?' render={() => <MessageItem />} />
                    <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
                    <Route path='/userPhotoLarge/:userId' render={() => <UserPhotoContainer />} />
                    <Route path='/news' render={() => <NewsContainer />} />
                    <Route path='/music' component={Music} />
                    <Route path='/settings' component={Settings} />
                    <Route path='/users' render={ () => <UsersContainer /> } />
                    <Route path='/login' render={ () => <LoginPage /> } />
                </div>                       
                <div><SidebarContainer /></div>             
            </div>            
        )
    }    
}

const mapStateToProps = (state) => ({
    initialApp: state.app.initialApp
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializationSuccessThunk}) 
)(App)
