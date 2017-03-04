import React from 'react'
import ReactDOM from 'react-dom'

import root from './components/root'
import './index.css'
import {authObserver} from './firebase'
import configureStore from './configureStore'
import appReducer from './reducers'

const Root = root(React)
// these imports are useful for testing.. but I keep them commented
// so that they aren't imported when we aren't using them.
// import * as projects from './reducers/projects'
// import * as roles from './reducers/roles'
// import * as applications from './reducers/applications'
// import * as users from './reducers/users'
// import * as api from './api'

const store = configureStore(appReducer)
authObserver(store.dispatch)

ReactDOM.render(
  <Root store={store}/>,
  document.getElementById('root')
)
