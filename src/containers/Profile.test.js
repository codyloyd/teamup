import describe from 'tape'
import React from 'react'
import dom from 'cheerio'
import ReactDOMServer from 'react-dom/server'
import Profile from './Profile'

const render = ReactDOMServer.renderToStaticMarkup

const createProps = ({} = {}) => ({})

describe('component', ({test}) => {
  test('item', ({equal, end}) => {
    let msg, actual, expected, output
    msg = 'just making sure...'
    const props = createProps()
    const $ = dom.load(render(<Profile {...props} />))
    output = $(`h1`)
    actual = output.text()
    expected = 'User Profile'
    equal(actual, expected, msg)
    end()
  })
})
