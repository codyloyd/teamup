import describe from 'tape'
import React from 'react'
import dom from 'cheerio'
import ReactDOMServer from 'react-dom/server'

const render = ReactDOMServer.renderToStaticMarkup

const createRole.....

const createProps = ({
  id = '01',
  projectId = '01',
  name = 'role name',
  status = 'open',
  description = 'this is a description of the role'

} = {}) => ({

})

describe('component', ({test}) => {
  test('item', ({equal, end}) => {
    let msg, actual, expected, output

    equal(actual, expected, msg)
    end()
  })
})
