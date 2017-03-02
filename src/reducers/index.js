import projects from './projects'
import roles from './roles'
import applications from './applications'
import { combineReducers } from 'redux'

const entities = combineReducers({projects, roles, applications})
export default combineReducers({entities})
