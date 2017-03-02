import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './index.css'
// eslint-disable-next-line
import firebaseApp from './firebase'
import configureStore from './configureStore'
import appReducer from './reducers'
// these imports are useful for testing.. but I keep them commented
// so that they aren't imported when we aren't using them.
// import * as projects from './reducers/projects'
// import * as roles from './reducers/roles'
// import * as applications from './reducers/applications'
// import * as api from './api'

const store = configureStore(appReducer)

ReactDOM.render(
  <App store={store}/>,
  document.getElementById('root')
)
