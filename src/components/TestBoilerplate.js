import describe from 'tape'
import React from 'react'
import dom from 'cheerio'
import ReactDOMServer from 'react-dom/server'

const render = ReactDOMServer.renderToStaticMarkup

const createProps = ({

} = {}) => ({

})

describe('component', ({test}) => {
  test('item', ({equal, end}) => {
    let msg, actual, expected, output

    equal(actual, expected, msg)
    end()
  })
})
