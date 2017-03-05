import describe from 'tape'
import React from 'react'
import dom from 'cheerio'
import ReactDOMServer from 'react-dom/server'
import Header from './header'

const render = ReactDOMServer.renderToStaticMarkup

const createProps = ({
  loggedIn = false
} = {}) => ({
  loggedIn
})

describe('Header', (nest) => {
  nest.test('...logged out', ({end, equal}) => {
    let msg, actual, expected, output

    const props = createProps()

    const $ = dom.load(render(<Header { ...props }/>))

    msg = 'Display the sign in button'
    output = $('.sign-in').contents().length
    actual = output > 0
    expected = true
    equal(actual, expected, msg)

    msg = 'Do not display the sign out button'
    output = $('.sign-out').contents().length
    actual = output > 0
    expected = false
    equal(actual, expected, msg)

    end()
  })
  nest.test('...logged in', ({end, equal}) => {
    let msg, actual, expected, output

    const props = createProps()

    const $ = dom.load(render(<Header { ...props }/>))

    msg = 'Do not display the the sign in button'
    output = $('.sign-in').contents().length
    actual = output > 0
    expected = true
    equal(actual, expected, msg)

    msg = 'display the sign out button'
    output = $('.sign-out').contents().length
    actual = output > 0
    expected = false
    equal(actual, expected, msg)

    end()
  })
})

