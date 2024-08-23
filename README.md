# assert-fn
A very simple alternative to the built-in `node:assert` module. All `assert-fn` does is check if the condition is not true, and if it is not true, throw an error.
The below code throws no error:
```javascript
const assert = require('assert-fn')
assert(2 + 2 === 4, "no error")
```
But this code throws an error:
```javascript
const assert = require('assert-fn')
assert(2 + 2 === 5, "error") // AssertionError: Assertion failed: error
```