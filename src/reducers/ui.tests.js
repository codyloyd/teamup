import describe from 'tape'
import {applicationForm} from './ui'

describe('applicationForm', ({test}) => {
  test('application form default value', assert => {
    const msg = 'TOGGLE_APPLICATION_FORM default should be false'
    const stateBefore = applicationForm()
    const actual = stateBefore
    const expected = false
    assert.equal(actual, expected, msg)
    assert.end()
  })
  test('toggle application form', assert => {
    const msg = 'TOGGLE_APPLICATION_FORM should toggle the application form'
    const stateBefore = applicationForm()
    const action = {type: 'TOGGLE_APPLICATION_FORM'}
    const actual = applicationForm(stateBefore, action)
    const expected = true
    assert.equal(actual, expected, msg)
    assert.end()
  })
})
