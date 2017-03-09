import describe from 'tape'
import {signInSuccessful, signOutSuccessful, currentUser} from './currentUser'
import freeze from 'deep-freeze'

const deepFreeze = (...args) => args.forEach(o => {
  if (o) freeze(o)
})

const createUser = (
  {
    uid = '01',
    displayName = 'User',
    githubUsername = 'username',
    signedUp = '123456',
    projectsOwned = [],
    applications = [],
    roles = []
  } = {}
) => ({
  uid,
  displayName,
  githubUsername,
  signedUp,
  projectsOwned,
  applications,
  roles
})

describe('currentUser', ({test}) => {
  test('signInSuccessful', assert => {
    const msg = 'currentUser is set when signInSuccessful'
    const stateBefore = currentUser()
    const action = signInSuccessful(createUser())
    deepFreeze(stateBefore, action)
    const expected = '01'
    const actual = currentUser(stateBefore, action)
    assert.deepEqual(actual, expected, msg)
    assert.end()
  })
  test('signOutSuccessful', assert => {
    const msg = 'currentUser is null when signOutSuccessful'
    const stateBefore = createUser()
    const action = signOutSuccessful()
    deepFreeze(stateBefore, action)
    const expected = false
    const actual = currentUser(stateBefore, action)
    assert.deepEqual(actual, expected, msg)
    assert.end()
  })
})
