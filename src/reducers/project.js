const defaultState = {}

const project = (state = defaultState, action = 'DEFAULT') => {
  const { type, payload } = action
  switch (type) {
    case 'CREATE_PROJECT':
      return { ...payload }
    default:
      return state
  }
}

export default project
