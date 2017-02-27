import describe from 'tape'
import deepFreeze from 'deep-freeze'
import { byId, allIds, projects } from './projects'

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
})

