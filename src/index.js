import reportWebVitals from './reportWebVitals';
import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


const rerenderTree = () => {
  ReactDOM.render(

    <BrowserRouter>
      <React.StrictMode>
        <App state={store.getState()} addPost={store.addPost.bind(store)} updatePostText={store.updatePostText.bind(store)} addMessage={store.addMessage.bind(store)} updateMessageText={store.updateMessageText.bind(store)} />
      </React.StrictMode>
    </BrowserRouter>,
  
    document.getElementById('root')
  
  )
}

rerenderTree(store.getState())

store.subscribe(rerenderTree)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals()

