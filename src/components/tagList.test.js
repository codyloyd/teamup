import describe from 'tape'
import React from 'react'
import dom from 'cheerio'
import ReactDOMServer from 'react-dom/server'
import TagList from './tagList'

const render = ReactDOMServer.renderToStaticMarkup

const createProps = ({
  tags = ['tag1', 'tag2', 'tag3']
} = {}) => ({
  tags
})

describe('tagList', ({test}) => {
  test('tags are rendered', ({equal, end}) => {
    let msg, actual, expected, output
    const props = createProps()
    const $ = dom.load(render(<TagList { ...props }/>))

    output = $('.tag-list > .tag')
    actual = output.length
    expected = 3
    equal(actual, expected, msg)
    end()
  })

  test('heading is not rendered if no tags present', ({equal, end}) => {
    let msg, actual, expected, output
    const props = createProps({tags: []})
    const $ = dom.load(render(<TagList { ...props }/>))

    output = $('.tag-list > .heading')
    actual = output.length
    expected = 0
    equal(actual, expected, msg)
    end()
  })
})
