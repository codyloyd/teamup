import {combineReducers} from 'redux'

import projects from '../project/projects-reducer'
import roles from '../project/roles-reducer'
import applications from './applications'
import users from '../user/users-reducer'
import currentUser from '../user/currentUser-reducer'
import ui from './ui'

const app = combineReducers({currentUser, ui})
const entities = combineReducers({projects, roles, applications, users})

export default combineReducers({app, entities})
