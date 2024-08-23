require('vanilla-javascript')
require('none')()

class AssertionError extends Error {
  constructor(message) {
    super(message)
    this.name = 'AssertionError'
  }
}

function assert(condition, message) {
  if (!condition) {
    throw new AssertionError('Assertion failed: ' + message)
  }
}
assert.AssertionError = AssertionError
module.exports = assert