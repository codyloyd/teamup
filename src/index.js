import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './index.css'
// eslint-disable-next-line
import firebaseApp from './firebase'
import configureStore from './configureStore'

const store = configureStore()

ReactDOM.render(
  <App store={store}/>,
  document.getElementById('root')
)
