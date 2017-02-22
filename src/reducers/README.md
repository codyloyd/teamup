# Store Layout

We can plan our store layout in this file.

```javascript
{
    app: {
        isInitializing: false,
        isError: false
    },
    entities: {
        users: {
            byId: {},
            allIds: [],
            statusById: {}
        },
        projects: {
            byId: {},
            allIds: [],
            statusById: {}
        }
    }
}
```