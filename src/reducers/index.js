import {combineReducers} from 'redux'

import projects from './projects'
import roles from './roles'
import applications from './applications'
import users from './users'
import currentUser from './currentUser'
import ui from './ui'

const app = combineReducers({currentUser, ui})
const entities = combineReducers({projects, roles, applications, users})

export default combineReducers({app, entities})
