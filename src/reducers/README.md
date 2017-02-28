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
{
    app: {
        userId: null,
        initialized: {
            isFetching: false,
            isError: false,
        }
    },
    ui: {
    		projectList: {
        		isFetchingByPage: {},
            isErrorByPage: {}
        },
        projectEdit: {
        		isFetchingById: {
            		"1": false, 
                "2" false
            },
            isErrorById: {
            		"1": false, 
                "2": false
            }
        },
        userEdit: {
        		isFetchingById: {},
            isErrorById: {}
        }
    },
    entities: {
    		users: {},
        roles: {},
        applications: {},
        projects: {}
    }
}
```