import describe from 'tape';

import reducer, { 
    fetchProjectRequested, 
    fetchProjectFailed, 
    fetchProjectSuccessfull, 
    fetchProject,
    getProjectById,
    getProjectIsFetching,
    getProjectError
} from './_exampleProjectReducer';

// We keep these create functions inside the test/fixtures
// folder so that we can use them for multiple tests if we
// need to.
import createProject from '../test/fixtures/_createExampleProject';


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
 * Async Action
 * 
 * I can fill this out more later, but just a quick glance
 * 
 */

// describe('fetchProject()', ({ test }) => {
//     test('...successfull', ({ end, deepEqual }) => {

//     });

//     test('...error thrown from api', ({ end, deepEqual }) => {

//     });
// });


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


