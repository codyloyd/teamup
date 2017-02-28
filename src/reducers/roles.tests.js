import describe from 'tape'
import deepFreeze from 'deep-freeze'
import {byId, allIds, isFetching, errorMessage} from './roles'

describe('byId', ({test}) => {
  test('FETCH_ROLES_SUCCESSFUL', (assert) => {
    const msg = 'roles should be added by ID when fetched'
    const stateBefore = {}
    deepFreeze(stateBefore)
    const action = {
      type: 'FETCH_ROLES_SUCCESSFUL',
      response: {
        '01': {
          id: '01',
          name: 'role01',
          projectId: '01'
        },
        '02': {
          id: '02',
          name: 'role02',
          projectId: '01'
        }
      }
    }
    const expected = {
      '01': {
        id: '01',
        name: 'role01',
        projectId: '01'
      },
      '02': {
        id: '02',
        name: 'role02',
        projectId: '01'
      }
    }
    const actual = byId(stateBefore, action)
    assert.deepEqual(actual, expected, msg)
    assert.end()
  })
  test('FETCH_ROLES_SUCCESSFUL', (assert) => {
    const msg = 'roles should not be duped when fetched'
    const stateBefore = {
      '01': {
        id: '01',
        name: 'role01',
        projectId: '01'
      },
      '03': {
        id: '03',
        name: 'role03',
        projectId: '01'
      }
    }
    deepFreeze(stateBefore)
    const action = {
      type: 'FETCH_ROLES_SUCCESSFUL',
      response: {
        '01': {
          id: '01',
          name: 'role01',
          projectId: '01'
        },
        '02': {
          id: '02',
          name: 'role02',
          projectId: '01'
        }
      }
    }
    const expected = {
      '01': {
        id: '01',
        name: 'role01',
        projectId: '01'
      },
      '02': {
        id: '02',
        name: 'role02',
        projectId: '01'
      },
      '03': {
        id: '03',
        name: 'role03',
        projectId: '01'
      }
    }
    const actual = byId(stateBefore, action)
    assert.deepEqual(actual, expected, msg)
    assert.end()
  })
  test('CREATE_ROLE_SUCCESSFUL', (assert) => {
    const msg = 'roles should be added byId when created'
    const stateBefore = {
      '01': {
        id: '01',
        name: 'role01',
        projectId: '01'
      },
      '03': {
        id: '03',
        name: 'role03',
        projectId: '01'
      }
    }
    deepFreeze(stateBefore)
    const action = {
      type: 'CREATE_ROLE_SUCCESSFUL',
      response: {
        id: '02',
        name: 'role02',
        projectId: '01'
      }
    }
    const expected = {
      '01': {
        id: '01',
        name: 'role01',
        projectId: '01'
      },
      '02': {
        id: '02',
        name: 'role02',
        projectId: '01'
      },
      '03': {
        id: '03',
        name: 'role03',
        projectId: '01'
      }
    }
    const actual = byId(stateBefore, action)
    assert.deepEqual(actual, expected, msg)
    assert.end()
  })
})

describe('allIds', ({test}) => {
  test('FETCH_ROLES_SUCCESSFUL', (assert) => {
    const msg = 'ids should be added to array upon fetching'
    const stateBefore = []
    deepFreeze(stateBefore)
    const action = {
      type: 'FETCH_ROLES_SUCCESSFUL',
      response: {
        '01': {
          id: '01',
          projectId: '01',
          name: 'name'
        },
        '02': {
          id: '02',
          projectId: '01',
          name: 'name'
        }
      }
    }
    const expected = ['01', '02']
    const actual = allIds(stateBefore, action)
    assert.deepEqual(actual, expected, msg)
    assert.end()
  })
  test('FETCH_ROLES_SUCCESSFUL', (assert) => {
    const msg = 'only new ids should be added (no dupes)'
    const stateBefore = ['45', '01']
    deepFreeze(stateBefore)
    const action = {
      type: 'FETCH_ROLES_SUCCESSFUL',
      response: {
        '01': {
          id: '01'
        },
        '02': {
          id: '02'
        }
      }
    }
    const expected = ['45', '01', '02']
    const actual = allIds(stateBefore, action)
    assert.deepEqual(actual, expected, msg)
    assert.end()
  })
  test('CREATE_ROLE_SUCCESSFUL', (assert) => {
    const msg = 'id should be added to array when ROLE created'
    const stateBefore = ['01', '02']
    deepFreeze(stateBefore)
    const action = {
      type: 'CREATE_ROLE_SUCCESSFUL',
      response: {id: '03', name: 'ROLE02'}
    }
    const expected = ['01', '02', '03']
    const actual = allIds(stateBefore, action)
    assert.deepEqual(actual, expected, msg)
    assert.end()
  })
})

describe('isFetching', ({test}) => {
  test('FETCH_ROLES_REQUESTED', (assert) => {
    const msg = 'isFetching returns true when the ROLE is requested'
    const stateBefore = false
    deepFreeze(stateBefore)
    const action = {
      type: 'FETCH_ROLES_REQUESTED'
    }
    const expected = true
    const actual = isFetching(stateBefore, action)
    assert.equal(actual, expected, msg)
    assert.end()
  })

  test('FETCH_ROLES_SUCCESSFUL', (assert) => {
    const msg = 'isFetching returns true when the ROLE is requested'
    const stateBefore = true
    deepFreeze(stateBefore)
    const action = {
      type: 'FETCH_ROLES_SUCCESSFUL'
    }
    const expected = false
    const actual = isFetching(stateBefore, action)
    assert.equal(actual, expected, msg)
    assert.end()
  })

  test('FETCH_ROLES_FAILED', (assert) => {
    const msg = 'isFetching returns true when the ROLE is requested'
    const stateBefore = true
    deepFreeze(stateBefore)
    const action = {
      type: 'FETCH_ROLES_FAILED'
    }
    const expected = false
    const actual = isFetching(stateBefore, action)
    assert.equal(actual, expected, msg)
    assert.end()
  })
})

describe('errorMessage', ({test}) => {
  test('FETCH_ROLES_REQUESTED', assert => {
    const msg = 'errorMessage should be null when ROLEs are requested'
    const stateBefore = null
    const action = {
      type: 'FETCH_ROLES_REQUESTED'
    }
    const expected = null
    const actual = errorMessage(stateBefore, action)
    assert.equal(actual, expected, msg)
    assert.end()
  })
  test('FETCH_ROLES_SUCCESSFUL', assert => {
    const msg = 'errorMessage null when ROLEs are returned successfully'
    const stateBefore = null
    const action = {
      type: 'FETCH_ROLES_SUCCESSFUL'
    }
    const expected = null
    const actual = errorMessage(stateBefore, action)
    assert.equal(actual, expected, msg)
    assert.end()
  })
  test('FETCH_ROLES_FAILED', assert => {
    const msg = 'errorMessage has message when fail'
    const stateBefore = null
    const action = {
      type: 'FETCH_ROLES_FAILED',
      message: 'oh no!'
    }
    const expected = 'oh no!'
    const actual = errorMessage(stateBefore, action)
    assert.equal(actual, expected, msg)
    assert.end()
  })
})