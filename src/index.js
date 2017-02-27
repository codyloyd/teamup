import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './index.css'
// eslint-disable-next-line
import firebaseApp from './firebase'
import configureStore from './configureStore'
import appReducer from './reducers'

const store = configureStore(appReducer)

ReactDOM.render(
  <App store={store}/>,
  document.getElementById('root')
)
