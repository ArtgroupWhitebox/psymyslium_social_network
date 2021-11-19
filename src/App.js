import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route, withRouter } from 'react-router-dom'
import { compose } from 'redux'
import './App.css'
import LoginPageContainer from './components/commons/Login/LoginPageContainer'
import Preloading from './components/commons/Preloading'
import UserPhotoAndNameContainer from './components/commons/userPhotoAndName/UserPhotoAndNameContainer'
import DialogItem from './components/Dialogs/DialogItem/DialogItem'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import MessageItem from './components/Dialogs/MessageItem/MessageItem'
import Layout from './components/Layout/Layout'
import MyPostsWithHooks from './components/News/MyPostsWithHooks'
import ProfileContainer from './components/Profile/ProfileContainer'
import UsersContainer from './components/Users/UsersContainer'
import { initializationSuccessThunk } from './redux/app_reduser'


class App extends React.Component {

    componentDidMount() {
        this.props.initializationSuccessThunk() 
    }

    render() {       

        return (
            !this.props.initialApp 
            ? <Preloading />
            : <div className='app_psymyslium-content'>                
                <Route exact path='/' render={() => <Redirect to={'/users'} /> } />  
                <Route path='/users' render={ () => <Layout route={<UsersContainer />}  />  } /> 
                <Route path='/dialogs/:userId?' render={ () => this.props.isAuth ? <Layout route={ <DialogsContainer />} /> : <Redirect to={'/users'} /> } /> 
                <Route path='/dialogItem/:userId?' render={() => <Layout route={<DialogItem />} /> } /> 
                <Route path='/messagesItem/:userId?' render={() => <Layout route={<MessageItem />} /> } /> 
                <Route path='/profile/:userId?' render={() => this.props.isAuth ? <Layout route={<ProfileContainer />} /> : <Redirect to={'/users'} /> } /> 
                <Route path='/userPhotoLarge/:userId' render={() => <Layout route={ <UserPhotoAndNameContainer />} /> } /> 
                <Route path='/news' render={() => this.props.isAuth ? <Layout route={ <MyPostsWithHooks />} /> : <Redirect to={'/users'} /> } />
                <Route path='*' render={ () => <div>404 NOT FOUND</div> } />
                <Route path='/login' render={ () => <LoginPageContainer /> } />
            </div>
        )
    }    
}

const mapStateToProps = (state) => ({
    initialApp: state.app.initialApp,
    isAuth: state.auth.isAuth
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializationSuccessThunk}) 
)(App)
