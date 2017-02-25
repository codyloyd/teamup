import test from 'tape'
import deepFreeze from 'deep-freeze'
import { byId } from './projects'

test('byId should be able to create new project', assert => {
  const msg = 'calling CREATE_PROJECT with byId should return an object with the new project indexed by ID'
  const stateBefore = {}
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
    '1': {
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
  const actual = byId(stateBefore, action)
  assert.deepEqual(actual, expected, msg)
  assert.end()
})

test('byId should be able to create new project when others exist', assert => {
  const msg = 'calling CREATE_PROJECT with byId should return an object with the new project indexed by ID'
  const stateBefore = {
    '1': {
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
  deepFreeze(stateBefore)
  const action = {
    type: 'CREATE_PROJECT',
    payload: {
      id: '2',
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
    '1': {
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
    },
    '2': {
      id: '2',
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
  const actual = byId(stateBefore, action)
  assert.deepEqual(actual, expected, msg)
  assert.end()
})
