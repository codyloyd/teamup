import describe from 'tape'
import deepFreeze from 'deep-freeze'

import { byId, isFetching, errorMessage, allIds } from './projects'

describe('byId', ({test}) => {
  test('FETCH_PROJECTS_SUCCESSFUL', (assert) => {
    const msg = 'successful fetching of projects should load projects into db'
    const stateBefore = {}
    deepFreeze(stateBefore)
    const action = {
      type: 'FETCH_PROJECTS_SUCCESSFUL',
      response: {
        '01': {
          id: '01',
          ownerId: '1234',
          name: 'project name',
          description: 'project description.....',
          summary: 'project summary.....',
          status: 'open', // open/closed
          roles: [
            'roleId1',
            'roleId2'
          ],
          tags: [
            'tag1',
            'tag2',
            'tag3'
          ],
          timeStamp: 123456,
          lastUpdated: 123456
        },
        '02': {
          id: '02',
          ownerId: '1234',
          name: 'project name',
          description: 'project description.....',
          summary: 'project summary.....',
          status: 'open', // open/closed
          roles: [
            'roleId1',
            'roleId2'
          ],
          tags: [
            'tag1',
            'tag2',
            'tag3'
          ],
          timeStamp: 123456,
          lastUpdated: 123456
        }
      }
    }
    deepFreeze(action)
    const expected = {
      '01': {
        id: '01',
        ownerId: '1234',
        name: 'project name',
        description: 'project description.....',
        summary: 'project summary.....',
        status: 'open', // open/closed
        roles: [
          'roleId1',
          'roleId2'
        ],
        tags: [
          'tag1',
          'tag2',
          'tag3'
        ],
        timeStamp: 123456,
        lastUpdated: 123456
      },
      '02': {
        id: '02',
        ownerId: '1234',
        name: 'project name',
        description: 'project description.....',
        summary: 'project summary.....',
        status: 'open', // open/closed
        roles: [
          'roleId1',
          'roleId2'
        ],
        tags: [
          'tag1',
          'tag2',
          'tag3'
        ],
        timeStamp: 123456,
        lastUpdated: 123456
      }
    }
    const actual = byId(stateBefore, action)
    assert.deepEqual(actual, expected, msg)
    assert.end()
  })
  test('CREATE_PROJECT_SUCCESSFUL', (assert) => {
    const msg = 'adds new project to store'
    const stateBefore = {
      '01': {
        id: '01',
        name: 'awesome project'
      }
    }
    deepFreeze(stateBefore)
    const action = {
      type: 'CREATE_PROJECT_SUCCESSFUL',
      response: {id: '02', name: 'project02'}
    }
    const expected = {
      '01': {
        id: '01',
        name: 'awesome project'
      },
      '02': {
        id: '02',
        name: 'project02'
      }
    }
    const actual = byId(stateBefore, action)
    assert.deepEqual(actual, expected, msg)
    assert.end()
  })
})

describe('allIds', ({test}) => {
  test('FETCH_PROJECTS_SUCCESSFUL', (assert) => {
    const msg = 'ids should be added to array upon fetching'
    const stateBefore = []
    deepFreeze(stateBefore)
    const action = {
      type: 'FETCH_PROJECTS_SUCCESSFUL',
      response: {
        '01': {
          id: '01',
          ownerId: '1234',
          name: 'project name',
          description: 'project description.....',
          summary: 'project summary.....',
          status: 'open', // open/closed
          roles: [
            'roleId1',
            'roleId2'
          ],
          tags: [
            'tag1',
            'tag2',
            'tag3'
          ],
          timeStamp: 123456,
          lastUpdated: 123456
        },
        '02': {
          id: '02',
          ownerId: '1234',
          name: 'project name',
          description: 'project description.....',
          summary: 'project summary.....',
          status: 'open', // open/closed
          roles: [
            'roleId1',
            'roleId2'
          ],
          tags: [
            'tag1',
            'tag2',
            'tag3'
          ],
          timeStamp: 123456,
          lastUpdated: 123456
        }
      }
    }
    const expected = ['01', '02']
    const actual = allIds(stateBefore, action)
    assert.deepEqual(actual, expected, msg)
    assert.end()
  })
  test('FETCH_PROJECTS_SUCCESSFUL', (assert) => {
    const msg = 'only new ids should be added (no dupes)'
    const stateBefore = ['45', '01']
    deepFreeze(stateBefore)
    const action = {
      type: 'FETCH_PROJECTS_SUCCESSFUL',
      response: {
        '01': {
          id: '01',
          ownerId: '1234',
          name: 'project name',
          description: 'project description.....',
          summary: 'project summary.....',
          status: 'open', // open/closed
          roles: [
            'roleId1',
            'roleId2'
          ],
          tags: [
            'tag1',
            'tag2',
            'tag3'
          ],
          timeStamp: 123456,
          lastUpdated: 123456
        },
        '02': {
          id: '02',
          ownerId: '1234',
          name: 'project name',
          description: 'project description.....',
          summary: 'project summary.....',
          status: 'open', // open/closed
          roles: [
            'roleId1',
            'roleId2'
          ],
          tags: [
            'tag1',
            'tag2',
            'tag3'
          ],
          timeStamp: 123456,
          lastUpdated: 123456
        }
      }
    }
    const expected = ['45', '01', '02']
    const actual = allIds(stateBefore, action)
    assert.deepEqual(actual, expected, msg)
    assert.end()
  })
  test('CREATE_PROJECT_SUCCESSFUL', (assert) => {
    const msg = 'id should be added to array when project created'
    const stateBefore = ['01', '02']
    deepFreeze(stateBefore)
    const action = {
      type: 'CREATE_PROJECT_SUCCESSFUL',
      response: {id: '03', name: 'project02'}
    }
    const expected = ['01', '02', '03']
    const actual = allIds(stateBefore, action)
    assert.deepEqual(actual, expected, msg)
    assert.end()
  })
})

describe('isFetching', ({test}) => {
  test('FETCH_PROJECTS_REQUESTED', (assert) => {
    const msg = 'isFetching returns true when the project is requested'
    const stateBefore = false
    deepFreeze(stateBefore)
    const action = {
      type: 'FETCH_PROJECTS_REQUESTED'
    }
    const expected = true
    const actual = isFetching(stateBefore, action)
    assert.equal(actual, expected, msg)
    assert.end()
  })

  test('FETCH_PROJECTS_SUCCESSFUL', (assert) => {
    const msg = 'isFetching returns true when the project is requested'
    const stateBefore = true
    deepFreeze(stateBefore)
    const action = {
      type: 'FETCH_PROJECTS_SUCCESSFUL'
    }
    const expected = false
    const actual = isFetching(stateBefore, action)
    assert.equal(actual, expected, msg)
    assert.end()
  })

  test('FETCH_PROJECTS_FAILED', (assert) => {
    const msg = 'isFetching returns true when the project is requested'
    const stateBefore = true
    deepFreeze(stateBefore)
    const action = {
      type: 'FETCH_PROJECTS_FAILED'
    }
    const expected = false
    const actual = isFetching(stateBefore, action)
    assert.equal(actual, expected, msg)
    assert.end()
  })
})

describe('errorMessage', ({test}) => {
  test('FETCH_PROJECTS_REQUESTED', assert => {
    const msg = 'errorMessage should be null when projects are requested'
    const stateBefore = null
    const action = {
      type: 'FETCH_PROJECTS_REQUESTED'
    }
    const expected = null
    const actual = errorMessage(stateBefore, action)
    assert.equal(actual, expected, msg)
    assert.end()
  })
  test('FETCH_PROJECTS_SUCCESSFUL', assert => {
    const msg = 'errorMessage null when projects are returned successfully'
    const stateBefore = null
    const action = {
      type: 'FETCH_PROJECTS_SUCCESSFUL'
    }
    const expected = null
    const actual = errorMessage(stateBefore, action)
    assert.equal(actual, expected, msg)
    assert.end()
  })
  test('FETCH_PROJECTS_FAILED', assert => {
    const msg = 'errorMessage has message when fail'
    const stateBefore = null
    const action = {
      type: 'FETCH_PROJECTS_FAILED',
      message: 'oh no!'
    }
    const expected = 'oh no!'
    const actual = errorMessage(stateBefore, action)
    assert.equal(actual, expected, msg)
    assert.end()
  })
})
