import describe from 'tape'
import deepFreeze from 'deep-freeze'
import {} from './roles'

describe('fake', ({test}) => {
  test('asdf', (assert) => {
    assert.pass('WIN')
    assert.end()
  })
})