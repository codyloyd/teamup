import test from 'tape'
import deepFreeze from 'deep-freeze'
import { byId, allIds } from './projects'

test('byId', assert => {
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

test('byId', assert => {
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

test('allIds', assert => {
  const msg = 'CREATE_PROJECT should add IDs to the allIds array'
  const stateBefore = []
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
  const expected = ['1']
  const actual = allIds(stateBefore, action)
  assert.deepEqual(actual, expected, msg)
  assert.end()
})

test('allIds', assert => {
  const msg = 'CREATE_PROJECT should add IDs to the allIds array'
  const stateBefore = ['1']
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
  const expected = ['1', '2']
  const actual = allIds(stateBefore, action)
  assert.deepEqual(actual, expected, msg)
  assert.end()
})
