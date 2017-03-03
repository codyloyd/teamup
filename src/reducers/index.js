import { combineReducers } from 'redux'

import projects from './projects'
import roles from './roles'
import applications from './applications'

const entities = combineReducers({projects, roles, applications})

export default combineReducers({entities})
