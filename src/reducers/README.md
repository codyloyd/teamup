# Store Layout

```javascript
{
    app: {
        userId: null,
        initialized: {
            isFetching: false,
            isError: false,
        }
    },
    entities: {
        users: {
            byId: {},
            allIds: [],
            isFetching: false,
            isError: false,
        },
        roles: {
            byId: {},
            allIds: [],
            isFetching: false,
            isError: false
        },
        applications: {
            byId: {},
            allIds: [],
            isFetching: false,
            isError: false
        },
        projects: {
            byId: {},
            allIds: [],
            isFetching: false,
            isError: false
        }
    }
}

// Another more advanced structure, this is a work in progress
// the goal is to allow pagination of entities once there becomes
// too many to fetch them all at once.

// We may want to switch to this.

{
  app: {
    currentUserId: false,
    isLoaded: false,
    isFetching: false,
    isError: false,
  },
  //
  projectCollection: {
    [hash]: {
      isFetching: false,
      isLoaded: false,
      isError: false
    }
  },
  // when fetching individual projects we 
  // also need to fetch roles, users and
  // applications.
  project: {
    [projectId]: {
      isFetching: false,
      isLoaded: false,
      isError: false,
      isEditing: false,
    }
  },
  // entities are just by id, no other state.
  // examples: users: { "1" { name: "myname" }}
  entities: {
    users: {},
    roles: {},
    applications: {},
    projects: {}
  }
}
```