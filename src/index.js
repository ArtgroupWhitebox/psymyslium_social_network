import reportWebVitals from './reportWebVitals';
import store from './redux/redux_store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import StoreContext from './components/StoreContext';


const rerenderTree = () => {
  ReactDOM.render(

    <BrowserRouter>
      <React.StrictMode>
        <StoreContext.Provider value={store}>
          <App />
        </StoreContext.Provider>
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

