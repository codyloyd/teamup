import describe from 'tape'
import React from 'react'
import dom from 'cheerio'
import ReactDOMServer from 'react-dom/server'
import {ConditionalRoleForm} from './ViewProject'

const render = ReactDOMServer.renderToStaticMarkup

const createProps = (
  {
    currentUser = '1234',
    ownerId = '5678',
    createRole = 'func',
    id = '1'
  } = {}
) => ({
  currentUser,
  ownerId,
  createRole,
  id
})

describe('conditionalRoleForm', ({test}) => {
  test('does not show form is user is not the owner', ({equal, end}) => {
    let msg, actual, expected, output
    msg = 'if the ownerId of the project and the currentUser are not the same, the form should not be displayed'
    const props = createProps()
    const $ = dom.load(render(<ConditionalRoleForm {...props} />))
    output = $('.role-form')
    actual = output.length
    expected = 0
    equal(actual, expected, msg)
    end()
  })

  test('shows form if user is the owner', ({equal, end}) => {
    let msg, actual, expected, output
    msg = 'if the ownerId of the project and the currentUser are the same, the form should be displayed'
    const props = createProps({currentUser: '1', ownerId: '1'})
    const $ = dom.load(render(<ConditionalRoleForm {...props} />))
    output = $('.role-form')
    actual = output.length
    expected = 1
    equal(actual, expected, msg)
    end()
  })
})
