const dispatch = (array, action) => {
    if ( typeof action === 'function' ) { return action(array, dispatch); }
    array.push(action);
};

const createDispatch = (array) => (action) => dispatch(array, action);

export default createDispatch;