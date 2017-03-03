import { combineReducers } from 'redux'

import projects from './projects'
import roles from './roles'
import applications from './applications'
import currentUser from './currentUser'

const entities = combineReducers({projects, roles, applications})
const app = combineReducers({currentUser})

export default combineReducers({app, entities})
