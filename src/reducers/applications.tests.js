import describe from 'tape'
import freeze from 'deep-freeze'
import {
  byId,
  allIds,
  isFetching,
  errorMessage,
  fetchApplicationsSuccessful,
  createApplicationSuccessful
} from './applications'

const deepFreeze = (...args) => args.forEach(freeze)

const createApplication = (
  {
    id = '01',
    userId = '01',
    roleId = '01',
    timeStamp = '12345',
    message = 'hey'
  } = {}
) => ({
  id,
  userId,
  roleId,
  timeStamp,
  message
})

describe('byId', ({test}) => {
  test('FETCH_APPLICATIONS_SUCCESSFUL', assert => {
    const msg = 'roles should be added by ID when fetched'
    const stateBefore = byId()
    const applications = {
      '01': createApplication({id: '01'}),
      '02': createApplication({id: '02'})
    }
    deepFreeze(stateBefore, applications)
    const action = fetchApplicationsSuccessful(applications)
    const expected = applications
    const actual = byId(stateBefore, action)
    assert.deepEqual(actual, expected, msg)
    assert.end()
  })

  test('FETCH_APPLICATIONS_SUCCESSFUL', assert => {
    const msg = 'appls should not be duped when fetched'
    const stateBefore = {
      '01': createApplication({id: '01'}),
      '03': createApplication({id: '03'})
    }
    const applications = {
      '01': createApplication({id: '01'}),
      '02': createApplication({id: '02'})
    }
    deepFreeze(stateBefore, applications)
    const action = fetchApplicationsSuccessful(applications)
    const expected = {
      '01': createApplication({id: '01'}),
      '02': createApplication({id: '02'}),
      '03': createApplication({id: '03'})
    }
    const actual = byId(stateBefore, action)
    assert.deepEqual(actual, expected, msg)
    assert.end()
  })

  test('CREATE_APPLICATION_SUCCESSFUL', assert => {
    const msg = 'applications should be added byId when created'
    const stateBefore = {
      '01': createApplication({id: '01'}),
      '03': createApplication({id: '03'})
    }
    deepFreeze(stateBefore)
    const action = createApplicationSuccessful(createApplication({id: '02'}))
    const expected = {
      '01': createApplication({id: '01'}),
      '02': createApplication({id: '02'}),
      '03': createApplication({id: '03'})
    }
    const actual = byId(stateBefore, action)
    assert.deepEqual(actual, expected, msg)
    assert.end()
  })
})

describe('allIds', ({test}) => {
  test('FETCH_APPLICATIONS_SUCCESSFUL', assert => {
    const msg = 'ids should be added to array upon fetching'
    const stateBefore = []
    deepFreeze(stateBefore)
    const action = {
      type: 'FETCH_APPLICATIONS_SUCCESSFUL',
      response: {
        '01': {
          id: '01',
          userId: '01'
        },
        '02': {
          id: '02',
          userId: '01'
        }
      }
    }
    const expected = ['01', '02']
    const actual = allIds(stateBefore, action)
    assert.deepEqual(actual, expected, msg)
    assert.end()
  })
  test('FETCH_APPLICATIONSS_SUCCESSFUL', assert => {
    const msg = 'only new ids should be added (no dupes)'
    const stateBefore = ['45', '01']
    deepFreeze(stateBefore)
    const action = {
      type: 'FETCH_APPLICATIONS_SUCCESSFUL',
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
  test('CREATE_APPLICATION_SUCCESSFUL', assert => {
    const msg = 'id should be added to array when appl created'
    const stateBefore = ['01', '02']
    deepFreeze(stateBefore)
    const action = {
      type: 'CREATE_APPLICATION_SUCCESSFUL',
      response: {id: '03', userID: '0235'}
    }
    const expected = ['01', '02', '03']
    const actual = allIds(stateBefore, action)
    assert.deepEqual(actual, expected, msg)
    assert.end()
  })
})

describe('isFetching', ({test}) => {
  test('FETCH_APPLICATIONS_REQUESTED', assert => {
    const msg = 'isFetching returns true when the appl is requested'
    const stateBefore = false
    deepFreeze(stateBefore)
    const action = {
      type: 'FETCH_APPLICATIONS_REQUESTED'
    }
    const expected = true
    const actual = isFetching(stateBefore, action)
    assert.equal(actual, expected, msg)
    assert.end()
  })

  test('FETCH_APPLICATIONS_SUCCESSFUL', assert => {
    const msg = 'isFetching returns true when the appl is requested'
    const stateBefore = true
    deepFreeze(stateBefore)
    const action = {
      type: 'FETCH_APPLICATIONS_SUCCESSFUL'
    }
    const expected = false
    const actual = isFetching(stateBefore, action)
    assert.equal(actual, expected, msg)
    assert.end()
  })

  test('FETCH_APPLICATIONS_FAILED', assert => {
    const msg = 'isFetching returns true when the appl is requested'
    const stateBefore = true
    deepFreeze(stateBefore)
    const action = {
      type: 'FETCH_APPLICATIONS_FAILED'
    }
    const expected = false
    const actual = isFetching(stateBefore, action)
    assert.equal(actual, expected, msg)
    assert.end()
  })
})

describe('errorMessage', ({test}) => {
  test('FETCH_APPLICATIONS_REQUESTED', assert => {
    const msg = 'errorMessage should be null when appls are requested'
    const stateBefore = null
    const action = {
      type: 'FETCH_APPLICATIONS_REQUESTED'
    }
    const expected = null
    const actual = errorMessage(stateBefore, action)
    assert.equal(actual, expected, msg)
    assert.end()
  })
  test('FETCH_APPLICATIONS_SUCCESSFUL', assert => {
    const msg = 'errorMessage null when appls are returned successfully'
    const stateBefore = null
    const action = {
      type: 'FETCH_APPLICATIONS_SUCCESSFUL'
    }
    const expected = null
    const actual = errorMessage(stateBefore, action)
    assert.equal(actual, expected, msg)
    assert.end()
  })
  test('FETCH_APPLICATIONS_FAILED', assert => {
    const msg = 'errorMessage has message when fail'
    const stateBefore = null
    const action = {
      type: 'FETCH_APPLICATIONS_FAILED',
      message: 'oh no!'
    }
    const expected = 'oh no!'
    const actual = errorMessage(stateBefore, action)
    assert.equal(actual, expected, msg)
    assert.end()
  })
})
