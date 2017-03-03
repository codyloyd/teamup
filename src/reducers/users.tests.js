import describe from 'tape'
import freeze from 'deep-freeze'
import {
  byId,
  allIds,
  isFetching,
  errorMessage,
  fetchUsersSuccessful,
  fetchUsersRequested,
  fetchUsersFailed
} from './users'

const deepFreeze = (...args) => args.forEach(o => {
  if (o) freeze(o)
})
const createUser = ({
  id = '01',
  displayName = 'User',
  githubUsername = 'username',
  signedUp = '123456',
  projectsOwned = [],
  applications = [],
  roles = []
} = {}) => ({
  id, displayName, githubUsername, signedUp, projectsOwned, applications, roles
})

describe('byId', ({test}) => {
  test('FETCH_USERS_SUCCESSFUL', assert => {
    const msg = 'users should be added by id when fetched'
    const stateBefore = byId()
    const users = {
      '01': createUser('01'),
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
