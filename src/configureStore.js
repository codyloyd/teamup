import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import mainAppReducer from './reducers'

const configureStore = () => {
  const middlewares = [thunk]
  const store = createStore(mainAppReducer, applyMiddleware(...middlewares))
  return store
}

export default configureStore
