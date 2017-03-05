import describe from 'tape'
import freeze from 'deep-freeze'
import reducer, {
  byId,
  allIds,
  isFetching,
  errorMessage,
  fetchUsersSuccessful,
  fetchUsersRequested,
  fetchUsersFailed
} from './users'

import {
  signInSuccessful
} from './currentUser'

const deepFreeze = (...args) => args.forEach(o => {
  if (o) freeze(o)
})
const createUser = ({
  uid = '01',
  displayName = 'User',
  githubUsername = 'username',
  signedUp = '123456',
  projectsOwned = [],
  applications = [],
  roles = []
} = {}) => ({
  uid, displayName, githubUsername, signedUp, projectsOwned, applications, roles
})

const createState = ({
  byId = {},
  allIds = [],
  isFetching = false,
  errorMessage = null
} = {}) => ({
  byId, allIds, isFetching, errorMessage
})



// You were missing testing the default value of
// the reducer with no action passed in. See if you
// can finished creating this test. I believe I have an example
// in the example branch.

describe('usersReducer', ({test}) => {
  test('...default state', ({end, deepEqual}) => {
    const msg = 'it should return the default state'
    const actual = null
    const expected = null
    deepEqual(actual, expected, msg)
    end()
  })
})

// Testing each state slice reducer means you
// will need to create more tests. You can simplify
// by testing each action on the real reducer.
describe('byId', ({test}) => {
  test('FETCH_USERS_SUCCESSFUL', assert => {
    const msg = 'users should be added by id when fetched'
    const stateBefore = byId()
    const users = {
      '01': createUser('01'), // Notice that your not passing an object here, so all these items are the same.
      '02': createUser('02'),
      '03': createUser('03')
    }
    deepFreeze(stateBefore, users)
    const action = fetchUsersSuccessful(users)
    const expected = users
    const actual = byId(stateBefore, action)
    assert.deepEqual(actual, expected, msg)
    assert.end()
  })
})

describe('allIds', ({test}) => {
  test('FETCH_USERS_SUCCESSFUL', assert => {
    const msg = 'users should be added by id when fetched'
    const stateBefore = allIds()
    const users = {
      '01': createUser('01'),
      '02': createUser('02'),
      '03': createUser('03')
    }
    deepFreeze(stateBefore, users)
    const action = fetchUsersSuccessful(users)
    const expected = Object.keys(users)
    const actual = allIds(stateBefore, action)
    assert.deepEqual(actual, expected, msg)
    assert.end()
  })
})

describe('isFetching', ({test}) => {
  test('FETCH_USERS_REQUESTED', assert => {
    const msg = 'user request should set isFetching to true'
    const stateBefore = isFetching()
    const action = fetchUsersRequested()
    const expected = true
    const actual = isFetching(stateBefore, action)
    assert.deepEqual(actual, expected, msg)
    assert.end()
  })
  test('FETCH_USERS_SUCCESSFUL', assert => {
    const msg = 'user request should set isFetching to true'
    const stateBefore = isFetching()
    const action = fetchUsersSuccessful()
    const expected = false
    const actual = isFetching(stateBefore, action)
    assert.deepEqual(actual, expected, msg)
    assert.end()
  })
  test('FETCH_USERS_FAILED', assert => {
    const msg = 'user request should set isFetching to true'
    const stateBefore = isFetching()
    const action = fetchUsersFailed()
    const expected = false
    const actual = isFetching(stateBefore, action)
    assert.deepEqual(actual, expected, msg)
    assert.end()
  })
})

describe('errorMessage', ({test}) => {
  test('FETCH_USERS_REQUESTED', assert => {
    const msg = 'user request should not set errorMessage'
    const stateBefore = errorMessage()
    const action = fetchUsersRequested()
    const expected = null
    const actual = errorMessage(stateBefore, action)
    assert.deepEqual(actual, expected, msg)
    assert.end()
  })
  test('FETCH_USERS_SUCCESSFUL', assert => {
    const msg = 'user request should set errorMessage to true'
    const stateBefore = errorMessage()
    const action = fetchUsersSuccessful()
    const expected = null
    const actual = errorMessage(stateBefore, action)
    assert.deepEqual(actual, expected, msg)
    assert.end()
  })
  test('FETCH_USERS_FAILED', assert => {
    const msg = 'user request should set errorMessage to true'
    const stateBefore = errorMessage()
    const action = fetchUsersFailed('oops')
    const expected = 'oops'
    const actual = errorMessage(stateBefore, action)
    assert.deepEqual(actual, expected, msg)
    assert.end()
  })
})

describe('signInSuccessful()', ({test}) => {
  test('after signing in', ({end, deepEqual}) => {
    const msg = 'it should recieve the user entity of the signed in user';

    const state = reducer()
    const user = createUser({uid: '1'})
    deepFreeze(state)
    deepFreeze(user)

    const expected = createState({
      byId: {[user.uid]: user},
      allIds: [user.uid]
    })

    const actual = reducer(state, signInSuccessful(user))

    deepEqual(actual, expected, msg)
    end()
  })
})
