import describe from 'tape'
import React from 'react'
import dom from 'cheerio'
import ReactDOMServer from 'react-dom/server'

import ProjectsList from './projects-list'

const render = ReactDOMServer.renderToStaticMarkup

const createProject = ({
  id = '01',
  ownerId = '1234',
  name = 'project name',
  description = 'project description.....',
  summary = 'project summary.....',
  status = 'open',
  roles = [
    'roleId1',
    'roleId2'
  ],
  tags = [
    'tag1',
    'tag2',
    'tag3'
  ],
  timeStamp = 123456,
  lastUpdated = 123456
} = {}) => ({
  id, ownerId, name, description, summary, status, roles, tags, timeStamp, lastUpdated
})

describe('ProjectsList', (nest) => {
  nest.test('...no children rendered for empty array', ({end, equal}) => {
    let msg, actual, expected, output

    const props = null

    const $ = dom.load(render(<ProjectsList { ...props }/>))

    msg = 'Something is being rendered but should not be'
    output = $('.projects-list').children().length
    actual = output > 0
    expected = false
    equal(actual, expected, msg)

    end()
  })

  nest.test('...3 children rendered for array of 3', ({end, equal}) => {
    let msg, actual, expected, output

    const props = {
      projects: [
        createProject({id: '01'}),
        createProject({id: '02'}),
        createProject({id: '03'})
      ]
    }

    const $ = dom.load(render(<ProjectsList { ...props }/>))

    msg = 'The incorrect number of children are being rendered'
    output = $('.projects-list').children().length
    actual = output === 3
    expected = true
    equal(actual, expected, msg)

    end()
  })
})
