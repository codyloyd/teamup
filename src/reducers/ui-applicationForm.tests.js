import describe from 'tape'
import {applicationForm} from './ui-applicationForm'

describe('applicationForm', ({test}) => {
  test('application form default value', assert => {
    const msg = 'TOGGLE_APPLICATION_FORM default should be false'
    const stateBefore = applicationForm()
    const actual = stateBefore
    const expected = {role: null, visibility: false}
    assert.deepEqual(actual, expected, msg)
    assert.end()
  })
  test('toggle application form', assert => {
    const msg = 'TOGGLE_APPLICATION_FORM should toggle the application form'
    const stateBefore = applicationForm()
    const action = {type: 'TOGGLE_APPLICATION_FORM', role: 'hi'}
    const actual = applicationForm(stateBefore, action)
    const expected = {role: 'hi', visibility: true}
    assert.deepEqual(actual, expected, msg)
    assert.end()
  })
})
