import describe from 'tape'
import React from 'react'
import dom from 'cheerio'
import ReactDOMServer from 'react-dom/server'
import Hero from '../index'

const render = ReactDOMServer.renderToStaticMarkup

const createProps = ({
  title = 'Hello',
  subtitle = 'Hello world app'
} = {}) => ({
  title, subtitle
})

describe('Hero', ({test}) => {
  test('...hero container', ({equal, end}) => {
    const msg = 'it should render the hero container'
    const props = createProps()
    const $ = dom.load(render(<Hero {...props} />))
    const output = $('.hero')
    const actual = output.length > 0
    const expected = true

    equal(actual, expected, msg)
    end()
  })

  test('...hero title', ({equal, end}) => {
    const msg = 'it should render the title'
    const title = 'My Title'
    const props = createProps({
      title
    })
    const $ = dom.load(render(<Hero {...props} />))
    const output = $('.hero .title')
    const actual = output.text()
    const expected = title

    equal(actual, expected, msg)
    end()
  })

  test('...hero subtitle', ({equal, end}) => {
    const msg = 'it should render the subtitle'

    const subtitle = 'Some subtitle text'
    const props = createProps({
      subtitle
    })
    const $ = dom.load(render(<Hero {...props} />))
    const output = $('.hero .subtitle')
    const actual = output.text()
    const expected = subtitle

    equal(actual, expected, msg)
    end()
  })
})
