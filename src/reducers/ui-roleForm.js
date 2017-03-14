import {combineReducers} from 'redux'

const TOGGLE_ROLE_FORM = 'TOGGLE_ROLE_FORM'
const CREATE_ROLE_SUCCESSFUL = 'CREATE_ROLE_SUCCESSFUL'

export const toggleRoleForm = () => ({
  type: TOGGLE_ROLE_FORM
})

export const getRoleForm = state => state.app.ui.roleForm

export const visibility = (state = false, action = {}) => {
  switch (action.type) {
    case CREATE_ROLE_SUCCESSFUL:
      return false
    case TOGGLE_ROLE_FORM:
      return !state
    default:
      return state
  }
}

export const roleForm = combineReducers({
  visibility
})

export default roleForm
