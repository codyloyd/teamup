# Tests

## test-unit.js
Responsible for running all the unit tests.

## Fixtures
Functions that create objects for tests. Such as user

```javascript
// cuid is a random string generator that eric created for unique ids.
import cuid from 'cuid'

// This functions job is just to create a fake user Obj that can be used inside unit tests.

const createUser = ({
    id: cuid(),
    name: ''
} = {}) => {
    id, name
}
export default createUser;

```