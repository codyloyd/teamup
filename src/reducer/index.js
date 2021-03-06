import {combineReducers} from 'redux'

import projects from '../project/projects-reducer'
import roles from '../project/roles-reducer'
import applications from '../application/applications-reducer'
import users from '../user/users-reducer'
import currentUser from '../user/currentUser-reducer'
import applicationForm from '../application/ui-applicationForm-reducer'
import roleForm from '../project/ui-roleForm-reducer'
import {reducer as formReducer} from 'redux-form'

const app = combineReducers({
  currentUser,
  applicationForm,
  roleForm,
  formReducer
})
const entities = combineReducers({projects, roles, applications, users})

export default combineReducers({app, entities})
