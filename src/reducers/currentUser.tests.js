import describe from 'tape'
import {signInSuccessful, signOutSuccessful, currentUser} from './currentUser'
import freeze from 'deep-freeze'

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

describe('currentUser', ({test}) => {
  test('signInSuccessful', assert => {
    const msg = 'currentUser is set when signInSuccessful'
    const stateBefore = currentUser()
    const action = signInSuccessful(createUser())
    deepFreeze(stateBefore, action)
    const expected = createUser()
    const actual = currentUser(stateBefore, action)
    assert.deepEqual(actual, expected, msg)
    assert.end()
  })
  test('signOutSuccessful', assert => {
    const msg = 'currentUser is null when signOutSuccessful'
    const stateBefore = createUser()
    const action = signOutSuccessful()
    deepFreeze(stateBefore, action)
    const expected = null
    const actual = currentUser(stateBefore, action)
    assert.deepEqual(actual, expected, msg)
    assert.end()
  })
})
