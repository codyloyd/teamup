import describe from 'tape';
import createProject from '../test/fixtures/_createExampleProject';
import createDispatch from '../test/utils/createDispatch';

import reducer, { 
    fetchProjectRequested, 
    fetchProjectFailed, 
    fetchProjectSuccessfull, 
    fetchProject,
    getProjectById,
    getProjectIsFetching,
    getProjectError
} from './_exampleProjectReducer';

const createDefaultState = ({
    byId = {},
    allIds = [],
    statusById = {}
} = {}) => ({
    byId, allIds, statusById
});

// What we are testings
describe('projectReducer()', ({ test }) => {

    // The context
    test('...with no arguments', ({ end, deepEqual }) => {
        // This test should pass based on the context
        const msg = 'should return default state';

        const actual = reducer();
        const expected = createDefaultState();

        deepEqual(actual, expected, msg);
        end();
    });
});

/*
 *
 * Action Creator Tests
 * 
 */
describe('fetchProjectRequested()', ({ test }) => {
    test('...with id', ({ end, deepEqual }) => {
        const msg = 'isFetching should be true';

        const actual = reducer(undefined, fetchProjectRequested("1"));

        const expected = createDefaultState({
            statusById: {
                "1": {
                    isFetching: true,
                    error: false
                }
            }
        });

        deepEqual(actual, expected, msg);
        end();
    });
});

describe('fetchProjectSuccessfull()', ({ test }) => {
    test('...with id', ({ end, deepEqual }) => {
        const msg = 'isFetching should be false and be project should be added to byId and allIds';

        const project = createProject({ id: "1" });
        const actual = reducer(undefined, fetchProjectSuccessfull("1", project));

        const expected = createDefaultState({
            allIds: ["1"],
            byId: {
                "1": project
            },
            statusById: {
                "1": {
                    isFetching: false,
                    error: false
                }
            }
        });

        deepEqual(actual, expected, msg);
        end();
    });
});

describe('fetchProjectFailed()', ({ test }) => {
    test('...with id', ({ end, deepEqual }) => {
        const msg = 'should set error messages';

        const errorMessage = 'Failed to fetch project';
        const actual = reducer(undefined, fetchProjectFailed( "1", errorMessage ));

        const expected = createDefaultState({
            statusById: {
                "1": {
                    isFetching: false,
                    error: errorMessage
                }
            }
        });

        deepEqual(actual, expected, msg);
        end();
    });
});





/*
 *
 * Async Actions
 * 
 */

/*
 *
 * The old, incorrect way of testing fetchProject().
 * 
 * Reason:
 * 
 * I found a bug in my other app that was not dispatching 
 * the equivalent of fetchProjectRequested, but every passed
 * because we are only checking the final state. I also found the same
 * bug in this fetchProject() function.
 * 
 * So in order to make sure this function calls all the actions it 
 * supposed to we should test the actions that are called directly. 
 * 
 * The actions are already tested we know that they will be modifiying
 * the state correctly, so there is no need to test the state again
 * in this functions test.
 * 
 * You can run the tests and see how this one passes, but it should'nt
 * 
 *
 */

describe('fetchProject()', ({ test }) => {
    test('...successfull', ({ end, deepEqual }) => {
        const msg = 'should dispatch fetchProjectRequested and fetchProjectSuccessfull';

        const project = createProject({ id: "2" });

        // Fake the api response
        const api  = {
            getProjectById: () => new Promise(resolve => resolve( project ))
        };

        // Create a fake dispatch function, we could make a resuable function
        // that does all this for us in each test.
        let state = reducer();
        const dispatch = (action) => {
            if ( typeof action === 'function' ) { return action(dispatch); }
            state = reducer(state, action);
        };

        const expected = Object.assign({}, createDefaultState({
            byId: { "2": project },
            allIds: ["2"],
            statusById: { "2": { isFetching: false, error:false }}
        }));

        fetchProject("2")(dispatch, undefined, api).then(()=> {
            deepEqual(state, expected, msg);
            end();
        });
    });

    test('...error thrown from api', ({ end, deepEqual }) => {
        const msg = 'set isFetching to false, and error equals the error message';

        const errorMessage = 'Failed to load project';

        // Fake the api response
        const api  = {
            getProjectById: () => new Promise(reject => { throw new Error(errorMessage); })
        };

        // Create a fake dispatch function, we could make a resuable function
        // that does all this for us in each test.
        let state = reducer();
        const dispatch = (action) => {
            if ( typeof action === 'function' ) { return action(dispatch); }
            state = reducer(state, action);
        };

        const expected = Object.assign({}, createDefaultState({
            statusById: { "2": { isFetching: false, error: errorMessage }}
        }));

        fetchProject("2")(dispatch, undefined, api).then(()=> {
            deepEqual(state, expected, msg);
            end();
        });
    });
});


/*
 *
 * The new, much simpler and better way.
 *
 */

describe('fetchProject()', ({ test }) => {
    test('...successfull', ({ end, deepEqual }) => {
        const msg = 'should dispatch fetchProjectRequested and fetchProjectSuccessfull';

        const id = "2";
        const project = createProject({id});

        // We expect these actions be called in this order
        const expected = [
            fetchProjectRequested(id),
            fetchProjectSuccessfull(id, project)
        ]

        // Dispatched actions will be pushed into this array.
        const actual = []; 
        const dispatch = createDispatch(actual);

        // Fake the api response
        const api  = {
            getProjectById: () => new Promise(resolve => resolve( project ))
        };

        fetchProject("2")(dispatch, undefined, api).then(()=> {
            deepEqual(actual, expected, msg);
            end();
        });
    });

    test('...error thrown from api', ({ end, deepEqual }) => {
        const msg = 'should dispatch fetchProjectRequested and fetchProjectFailed';

        const errorMessage = 'Failed to load project';
        const id = "2";
        const expected = [
            fetchProjectRequested(id),
            fetchProjectFailed(id, errorMessage)
        ]
        const actual = []; 
        const dispatch = createDispatch(actual);

        const api  = {
            getProjectById: () => new Promise(reject => { throw new Error(errorMessage); })
        };

        fetchProject("2")(dispatch, undefined, api).then(()=> {
            deepEqual(actual, expected, msg);
            end();
        });
    });
});

/*
 *
 * Selector tests
 * 
 * I can fill these out more later, but these would be some good
 * starting selector names to test
 * 
 */

// describe('getProjectById()', ({ test }) => {

// });

// describe('getProjectIsFetching()', ({ test }) => {

// });

// describe('getProjectError()', ({ test }) => {

// });


