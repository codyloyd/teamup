import describe from 'tape'
import React from 'react'
import dom from 'cheerio'
import ReactDOMServer from 'react-dom/server'
import ProjectDetails from './projectDetails'

const render = ReactDOMServer.renderToStaticMarkup

const createProps = ({
  projectId = '1111',
  title = 'title',
  description = 'project description',
  summary = 'project summary',
  tags = ['tag1', 'tag2'],
  ownerId = '1234',
  ownerDisplayName = 'ownerName'
} = {}) => ({
  projectId, title, description, summary, tags, ownerId, ownerDisplayName
})

describe('Project Details', ({test}) => {
  test('Project Title', ({end, equal}) => {
    let msg, actual, expected, output

    const props = createProps()

    const $ = dom.load(render(<ProjectDetails { ...props }/>))

    msg = 'Project Title is displayed'
    output = $('.project-title').text()
    actual = output
    expected = props.title
    equal(actual, expected, msg)
    end()
  })
  test('Project Summary', ({end, equal}) => {
    let msg, actual, expected, output

    const props = createProps()

    const $ = dom.load(render(<ProjectDetails { ...props }/>))

    msg = 'Project Summary is displayed'
    output = $('.project-summary').text()
    actual = output
    expected = props.summary
    equal(actual, expected, msg)
    end()
  })
  test('Project Description', ({end, equal}) => {
    let msg, actual, expected, output

    const props = createProps()

    const $ = dom.load(render(<ProjectDetails { ...props }/>))

    msg = 'Project Description is displayed'
    output = $('.project-description').text()
    actual = output
    expected = props.description
    equal(actual, expected, msg)
    end()
  })
  test('tags', ({end, equal}) => {
    let msg, actual, expected, output

    const props = createProps()

    const $ = dom.load(render(<ProjectDetails { ...props }/>))

    msg = 'tag list is displayed'
    output = $('.tag-list')
    actual = output.length
    expected = 1
    equal(actual, expected, msg)
    end()
  })
})
