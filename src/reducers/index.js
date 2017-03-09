import {combineReducers} from 'redux'

import projects from './projects'
import roles from './roles'
import applications from './applications'
import users from './users'
import currentUser from './currentUser'

const entities = combineReducers({projects, roles, applications, users})
const app = combineReducers({currentUser})

export default combineReducers({app, entities})
