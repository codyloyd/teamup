# Tests

## Outstanding Tests to Create

```
/src/components/applicationForm
/src/components/loading
/src/components/newRole
/src/components/projectForm
/src/components/root
/src/app/App
/src/project/ViewProject
/src/project/Projects
/src/project/NewProject
/src/project/EditProject
```

## test-unit.js
Responsible for running all the unit tests.

## Fixtures
Functions that create objects for tests, such as user.

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
