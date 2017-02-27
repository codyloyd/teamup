import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './index.css'
import configureStore from './configureStore'
// eslint-disable-next-line
import firebaseApp from './firebase'

const store = configureStore()

ReactDOM.render(
  <App store={store}/>,
  document.getElementById('root')
)
