import reportWebVitals from './reportWebVitals'
import store from './redux/redux_store'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'



ReactDOM.render(

  <HashRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </HashRouter>,

  document.getElementById('root')

)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals()

