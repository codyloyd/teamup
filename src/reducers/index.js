import projects from './projects'
import { combineReducers } from 'redux'

/*
not sure if this is the correct solution, but the plan here is to pull in
all the reducers and then organize them into their top-level structure, app and entities, and then combine those two into the final main reducer.
*/
const entities = combineReducers({projects})
export default combineReducers({entities})
