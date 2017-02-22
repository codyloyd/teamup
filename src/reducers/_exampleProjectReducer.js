/*
 *
 * Constants
 * 
 */
export const FETCH_PROJECT_REQUESTED = 'FETCH_PROJECT_REQUESTED';
export const FETCH_PROJECT_SUCCESSFULL = 'FETCH_PROJECT_SUCCESSFULL';
export const FETCH_PROJECT_FAILED = 'FETCH_PROJECT_FAILED';

// 
// We can implement fetching lists of projects later, something
// like these might be our constants.
//
export const FETCH_PROJECT_COLLECTION_REQUESTED= 'FETCH_PROJECT_COLLECTION_REQUESTED';
export const FETCH_PROJECT_COLLECTION_SUCCESSFULL = 'FETCH_PROJECT_COLLECTION_SUCCESSFULL';
export const FETCH_PROJECT_COLLECTION_FAILED = 'FETCH_PROJECT_COLLECTION_FAILED';


/*
 *
 * Action Creators
 * 
 */

export const fetchProjectRequested = (id) => ({
    type: FETCH_PROJECT_REQUESTED,
    payload: id
})

export const fetchProjectSuccessfull = (id, project) => ({
    type: FETCH_PROJECT_SUCCESSFULL,
    payload: project
})
export const fetchProjectFailed = (id, error) => ({
    type: FETCH_PROJECT_FAILED,
    payload: { id, error }
})

export const fetchProjectCollectionRequested = () => {}
export const fetchProjectCollectionSuccessfull = () => {}
export const fetchProjectCollectionFailed = () => {}

/*
 *
 * Async Actions
 * 
 * These dispatch the action creators and also will call 
 * the api functions 
 *
 */

export const fetchProject = ( id ) => ( dispatch, getState, api ) => {
    return api.getProjectById(id).then(project => {
        dispatch(fetchProjectSuccessfull(id, project));
    }).catch(e => {
        dispatch(fetchProjectFailed(id, e.message));
    });
};

export const fetchProjectCollection = () => {}

/*
 *
 * Selectors
 * 
 */

export const getProjectById = () => {}
export const getProejctIsFetching = () => {}
export const getProejctError = () => {}

/*
 *
 * Reducers
 * 
 */

const defaultState = {
    byId: {},
    allIds: [],
    statusById: {}
}

const byId = (state = defaultState.byId, action) => {
    const { type, payload } = action;
    switch (type) {
        case FETCH_PROJECT_SUCCESSFULL:
            return Object.assign({}, state, {
                [payload.id]: payload
            })
        default:
            return state;
    }
}
const allIds = (state = defaultState.allIds, action) => {
    const { type, payload } = action;
    switch (type) {
        case FETCH_PROJECT_SUCCESSFULL:
            // Dont add the id if its already in the list.
            // There should be a test for this, but I skipped
            // Since this is just an example.
            if (state.indexOf(payload.id) !== -1) return state;
            return [
                ...state,
                payload.id
            ];
        default:
            return state;
    }
}
const statusById = (state =defaultState.statusById, action) => {
    const { type, payload } = action;
    switch (type) {
        case FETCH_PROJECT_REQUESTED:
            return Object.assign({}, state, {
                [payload]: {
                    isFetching: true,
                    error: false
                }
            });
        case FETCH_PROJECT_SUCCESSFULL:
            return Object.assign({}, state, {
                [payload.id]: {
                    isFetching: false,
                    error: false
                }
            });
        case FETCH_PROJECT_FAILED:
            return Object.assign({}, state, {
                [payload.id]: {
                    isFetching: false,
                    error: payload.error
                }
            })
        default:
            return state;
    }
}

const reducer = (state = defaultState, action = {}) => {
    return {
        byId: byId(state.byId, action),
        allIds: allIds(state.allIds, action),
        statusById: statusById(state.statusById, action)
    };
};

export default reducer;