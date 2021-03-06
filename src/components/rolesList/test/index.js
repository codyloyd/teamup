import describe from 'tape'
import React from 'react'
import dom from 'cheerio'
import ReactDOMServer from 'react-dom/server'
import RolesList from '../'

const render = ReactDOMServer.renderToStaticMarkup

const createRole = (
  {
    id = '01',
    projectId = '02',
    name = 'role name',
    status = 'open',
    description = 'description of the role',
    applications = ['11', '22'],
    users = ['33']
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

const createProps = (
  {
    roles = [createRole(), createRole({id: '02', name: 'role 2 name'})]
  } = {}
) => ({
  roles
})

describe('Roles List', ({test}) => {
  test('creates a Role item for each entry in props', ({equal, end}) => {
    let msg, actual, expected, output
    msg = 'creates the correct number of roles'

    const props = createProps()

    const $ = dom.load(render(<RolesList {...props} />))
    output = $('.role-details')
    actual = output.length
    expected = 2
    equal(actual, expected, msg)
    end()
  })

  test('creates a Role item for each entry in props', ({equal, end}) => {
    let msg, actual, expected, output
    msg = 'does not display "no roles" message'

    const props = createProps()

    const $ = dom.load(render(<RolesList {...props} />))
    output = $('.no-roles')
    actual = output.length
    expected = 0
    equal(actual, expected, msg)
    end()
  })

  test('if no roles', ({equal, end}) => {
    let msg, actual, expected, output
    msg = 'displays message if no roles'

    const props = {roles: []}

    const $ = dom.load(render(<RolesList {...props} />))
    output = $('.no-roles')
    actual = output.length
    expected = 1
    equal(actual, expected, msg)
    end()
  })

  test('if no roles', ({equal, end}) => {
    let msg, actual, expected, output
    msg = 'does not display roles list'

    const props = {roles: []}

    const $ = dom.load(render(<RolesList {...props} />))
    output = $('.role-details')
    actual = output.length
    expected = 0
    equal(actual, expected, msg)
    end()
  })
})
