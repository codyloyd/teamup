import {combineReducers} from 'redux'

import projects from './projects'
import roles from './roles'
import applications from './applications'
import users from './users'
import currentUser from './currentUser'
import ui from './ui'

const entities = combineReducers({projects, roles, applications, users})
const app = combineReducers({currentUser, ui})

export default combineReducers({app, entities})
