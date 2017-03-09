// ** action types **
export const SIGN_IN_SUCCESSFUL = 'SIGN_IN_SUCCESSFUL'
export const SIGN_OUT_SUCCESSFUL = 'SIGN_OUT_SUCCESSFUL'

// ** action creators **
export const signInSuccessful = user => ({
  type: SIGN_IN_SUCCESSFUL,
  user
})

export const signOutSuccessful = () => ({
  type: SIGN_OUT_SUCCESSFUL
})

// ** async functions **

// ** reducers **
const defaultState = false
export const currentUser = (state = defaultState, action = {}) => {
  const {type, user} = action
  switch (type) {
    case SIGN_IN_SUCCESSFUL:
      return user.uid
    case SIGN_OUT_SUCCESSFUL:
      return false
    default:
      return state
  }
}

export default currentUser
