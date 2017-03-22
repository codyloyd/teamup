import React from 'react'
import ReactDOM from 'react-dom'

import Root from './components/root'
import './index.css'
import configureFirebase from './configureFirebase'
import configureStore from './configureStore'
import appReducer from './reducer'

// these imports are useful for testing.. but I keep them commented
// so that they aren't imported when we aren't using them.
// import * as projects from './project/projects-reducer'
// import * as roles from './project/roles-reducer'
// import * as applications from './application/applications-reducer'
import * as users from './user/users-reducer'
// import * as api from './api'

const store = configureStore(appReducer)
configureFirebase(store.dispatch)
store.dispatch(users.fetchUser('01'))

ReactDOM.render(<Root store={store} />, document.getElementById('root'))
