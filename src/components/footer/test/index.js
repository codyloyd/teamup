import describe from 'tape'
import React from 'react'
import dom from 'cheerio'
import ReactDOMServer from 'react-dom/server'
import Footer from '../'

const render = ReactDOMServer.renderToStaticMarkup

describe('Footer', ({test}) => {
  test('...footer should render', ({equal, end}) => {
    let msg, actual, expected, output
    const $ = dom.load(render(<Footer />))

    msg = 'The footer and its container rendered'
    output = $('.footer > .container')
    actual = output.length
    expected = 1
    equal(actual, expected, msg)
    end()
  })
})
