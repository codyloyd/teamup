import describe from 'tape'
import project from './project'
import deepFreeze from 'deep-freeze'

describe('project()', ({test}) => {
  test('default state', assert => {
    const msg = 'project reducer returns default state'
    const expected = {}
    const actual = project()
    assert.deepEquals(actual, expected, msg)
    assert.end()
  })

  test('CREATE_PROJECT', assert => {
    const msg = 'project reducer returns a new project with CREATE_PROJECT action type'
    const stateBefore = project()
    deepFreeze(stateBefore)
    const action = {
      type: 'CREATE_PROJECT',
      payload: {
        id: '1',
        ownerId: '1',
        name: 'project name',
        description: 'project description',
        summary: 'project summary',
        status: 'open',
        roles: ['123', '456'],
        tags: ['tag1', 'tag2'],
        timeStamp: '123',
        lastUpdated: '123'
      }
    }
    deepFreeze(action)
    const expected = {
      id: '1',
      ownerId: '1',
      name: 'project name',
      description: 'project description',
      summary: 'project summary',
      status: 'open',
      roles: ['123', '456'],
      tags: ['tag1', 'tag2'],
      timeStamp: '123',
      lastUpdated: '123'
    }
    const actual = project(stateBefore, action)
    assert.deepEqual(actual, expected, msg)
    assert.end()
  })
})
