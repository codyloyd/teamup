import {combineReducers} from 'redux'

const TOGGLE_APPLICATION_FORM = 'TOGGLE_APPLICATION_FORM'

export const toggleApplicationForm = role => ({
  type: TOGGLE_APPLICATION_FORM,
  role
})

export const getApplicationForm = state => state.app.ui.applicationForm

export const visibility = (state = false, action = {}) => {
  switch (action.type) {
    case TOGGLE_APPLICATION_FORM:
      return !state
    default:
      return state
  }
}

export const role = (state = 'tacos', action = {}) => {
  switch (action.type) {
    case TOGGLE_APPLICATION_FORM:
      return action.role
    default:
      return state
  }
}

export const applicationForm = combineReducers({
  visibility,
  role
})

export default combineReducers({applicationForm})
