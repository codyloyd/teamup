import {combineReducers} from 'redux'

const TOGGLE_APPLICATION_FORM = 'TOGGLE_APPLICATION_FORM'

export const toggleApplicationForm = () => ({
  type: TOGGLE_APPLICATION_FORM
})

export const getApplicationForm = state => state.app.ui.applicationForm

export const applicationForm = (state = false, action = {}) => {
  switch (action.type) {
    case TOGGLE_APPLICATION_FORM:
      return !state
    default:
      return state
  }
}

export default combineReducers({applicationForm})
