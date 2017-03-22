import describe from 'tape'
import React from 'react'
import dom from 'cheerio'
import ReactDOMServer from 'react-dom/server'
import RoleDetails from '../'

const render = ReactDOMServer.renderToStaticMarkup

const createProps = (
  {
    id = '01',
    projectId = '01',
    name = 'role name',
    status = 'open',
    description = 'this is a description of the role',
    applications = ['01', '02'],
    users = null
  } = {}
) => ({
  id,
  projectId,
  name,
  status,
  description,
  applications,
  users
})

describe('Role Details', ({test}) => {
  test('name', ({equal, end}) => {
    let msg, actual, expected, output
    msg = 'the name is inserted into Role Details'
    const props = createProps()
    const $ = dom.load(render(<RoleDetails {...props} />))
    output = $('.role-name').text()
    actual = output
    expected = props.name
    equal(actual, expected, msg)
    end()
  })
  test('description', ({equal, end}) => {
    let msg, actual, expected, output
    msg = 'the role description is inserted into Role Details'
    const props = createProps()
    const $ = dom.load(render(<RoleDetails {...props} />))
    output = $('.role-description').text()
    actual = output
    expected = props.description
    equal(actual, expected, msg)
    end()
  })
})
